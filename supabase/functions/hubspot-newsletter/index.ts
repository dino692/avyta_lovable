import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NewsletterRequest {
  email: string;
  name: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, name }: NewsletterRequest = await req.json();

    if (!email || !name) {
      console.error("Missing required fields:", { email: !!email, name: !!name });
      return new Response(
        JSON.stringify({ error: "Name und E-Mail sind erforderlich" }),
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

    // Split name into first and last name
    const nameParts = name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    console.log("Creating HubSpot contact:", { email, firstName, lastName });

    // Create or update contact in HubSpot
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
      return new Response(
        JSON.stringify({ success: true, contactId: data.id }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check if contact already exists (409 Conflict)
    if (response.status === 409) {
      console.log("Contact already exists, updating...");
      
      // Search for existing contact
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
          
          // Update existing contact
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
            return new Response(
              JSON.stringify({ success: true, contactId, updated: true }),
              { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
            );
          }
        }
      }

      // Even if update fails, the contact exists
      return new Response(
        JSON.stringify({ success: true, message: "Kontakt bereits vorhanden" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const errorText = await response.text();
    console.error("HubSpot API error:", response.status, errorText);
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
