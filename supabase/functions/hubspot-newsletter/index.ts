import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://www.avyta.de",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NewsletterRequest {
  email: string;
  name: string;
  website?: string; // Honeypot field - should always be empty for legitimate submissions
}

// Add contact to Brevo list
async function addToBrevo(email: string, firstName: string, lastName: string): Promise<void> {
  const brevoApiKey = Deno.env.get("BREVO_API_KEY");
  const brevoListId = Deno.env.get("BREVO_LIST_ID");

  if (!brevoApiKey) {
    console.error("BREVO_API_KEY not configured");
    return;
  }

  if (!brevoListId) {
    console.error("BREVO_LIST_ID not configured");
    return;
  }

  const listId = parseInt(brevoListId.replace("#", ""), 10);

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": brevoApiKey,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          FIRSTNAME: firstName,
          LASTNAME: lastName,
        },
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (response.ok) {
      console.log("Brevo contact created/updated successfully for:", email);
    } else {
      const errorText = await response.text();
      console.error("Brevo API error:", response.status, errorText);
    }
  } catch (error) {
    console.error("Error adding contact to Brevo:", error);
  }
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, name, website }: NewsletterRequest = await req.json();

    if (website && website.trim() !== "") {
      console.log("Honeypot field filled - likely bot submission, silently rejecting");
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!email || !name) {
      return new Response(
        JSON.stringify({ error: "Name und E-Mail sind erforderlich" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      return new Response(
        JSON.stringify({ error: "Ungültige E-Mail-Adresse" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate name length and characters
    const trimmedName = name.trim();
    if (trimmedName.length < 2 || trimmedName.length > 100) {
      return new Response(
        JSON.stringify({ error: "Name muss zwischen 2 und 100 Zeichen lang sein" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const nameRegex = /^[\p{L}\s.'\-]+$/u;
    if (!nameRegex.test(trimmedName)) {
      return new Response(
        JSON.stringify({ error: "Name enthält ungültige Zeichen" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const hubspotToken = Deno.env.get("HUBSPOT_ACCESS_TOKEN");
    if (!hubspotToken) {
      console.error("HUBSPOT_ACCESS_TOKEN not configured");
      return new Response(
        JSON.stringify({ error: "HubSpot nicht konfiguriert" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const nameParts = name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    // Add to Brevo in parallel with HubSpot
    const brevoPromise = addToBrevo(email, firstName, lastName);

    console.log("Creating HubSpot contact:", { email, firstName, lastName });

    const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${hubspotToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        properties: {
          email: email,
          firstname: firstName,
          lastname: lastName,
          lifecyclestage: "subscriber",
          zugehorigkeit: "avyta.de: Newsletter",
        },
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("HubSpot contact created successfully:", data.id);
      await brevoPromise;
      return new Response(
        JSON.stringify({ success: true, contactId: data.id }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (response.status === 409) {
      console.log("Contact already exists, updating...");
      
      const searchResponse = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/search", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${hubspotToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filterGroups: [{
            filters: [{
              propertyName: "email",
              operator: "EQ",
              value: email,
            }],
          }],
        }),
      });

      if (searchResponse.ok) {
        const searchData = await searchResponse.json();
        if (searchData.results && searchData.results.length > 0) {
          const contactId = searchData.results[0].id;
          
          const updateResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`, {
            method: "PATCH",
            headers: {
              "Authorization": `Bearer ${hubspotToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              properties: {
                firstname: firstName,
                lastname: lastName,
                zugehorigkeit: "avyta.de: Newsletter",
              },
            }),
          });

          if (updateResponse.ok) {
            console.log("HubSpot contact updated successfully:", contactId);
            await brevoPromise;
            return new Response(
              JSON.stringify({ success: true, contactId, updated: true }),
              { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
            );
          }
        }
      }

      await brevoPromise;
      return new Response(
        JSON.stringify({ success: true, message: "Kontakt bereits vorhanden" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const errorText = await response.text();
    console.error("HubSpot API error:", response.status, errorText);
    await brevoPromise;
    return new Response(
      JSON.stringify({ error: "Fehler bei der Registrierung" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in hubspot-newsletter function:", error);
    return new Response(
      JSON.stringify({ error: "Ein Fehler ist aufgetreten" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
