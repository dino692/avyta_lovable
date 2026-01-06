import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

// Prevent HTML injection from user input
function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

serve(async (req) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const token = Deno.env.get("POSTMARK_SERVER_TOKEN");
    const toEmail = Deno.env.get("CONTACT_TO_EMAIL") ?? "chanu1993@gmail.com";
    const fromEmail = Deno.env.get("CONTACT_FROM_EMAIL");

    if (!token) return json({ error: "Missing POSTMARK_SERVER_TOKEN" }, 500);
    if (!fromEmail) return json({ error: "Missing CONTACT_FROM_EMAIL" }, 500);

    // Expecting these fields from your form
    const body = await req.json().catch(() => ({}) as any);

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const message = String(body?.message ?? "").trim();

    // Optional: simple honeypot field (add hidden input "website" in the form)
    const honeypot = String(body?.website ?? "").trim();
    if (honeypot) {
      // pretend success to bots
      return json({ ok: true });
    }

    if (!name || !email || !message) {
      return json({ error: "Missing fields: name, email, message" }, 400);
    }

    // Basic validation
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return json({ error: "Invalid email" }, 400);
    }
    if (message.length > 5000) {
      return json({ error: "Message too long" }, 400);
    }

    // Escape for safe HTML output
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Nicht angegeben");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const subject = `Neue Kontaktanfrage von ${safeName}`;

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #006A4E; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #006A4E; }
    .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
    .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Neue Kontaktanfrage</h1>
    </div>

    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${safeName}</div>
      </div>

      <div class="field">
        <div class="label">E-Mail:</div>
        <div class="value">${safeEmail}</div>
      </div>

      <div class="field">
        <div class="label">Telefon:</div>
        <div class="value">${safePhone}</div>
      </div>

      <div class="field">
        <div class="label">Nachricht:</div>
        <div class="value">${safeMessage}</div>
      </div>
    </div>

    <div class="footer">
      Diese E-Mail wurde über das Kontaktformular gesendet.
    </div>
  </div>
</body>
</html>
`;

    const postmarkResp = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": token,
      },
      body: JSON.stringify({
        From: fromEmail,
        To: toEmail,
        Subject: subject,
        HtmlBody: html,
        ReplyTo: email, // IMPORTANT: reply goes to the person who filled the form
        // MessageStream: "outbound", // optional (defaults to outbound if not using streams)
      }),
    });

    const postmarkData = await postmarkResp.json().catch(() => ({}));

    if (!postmarkResp.ok) {
      console.error("Postmark error:", postmarkData);
      return json({ error: "Postmark failed", details: postmarkData }, 502);
    }

    return json({ ok: true, postmark: postmarkData });
  } catch (e) {
    console.error("send-contact-email error:", e);
    return json({ error: "Unexpected error", details: String(e) }, 500);
  }
});
