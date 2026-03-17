import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const brevoApiKey = Deno.env.get("BREVO_API_KEY");
    if (!brevoApiKey) {
      throw new Error("BREVO_API_KEY not configured");
    }

    const brevoListId = Deno.env.get("BREVO_LIST_ID");
    if (!brevoListId) {
      throw new Error("BREVO_LIST_ID not configured");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Find blog posts that haven't had newsletter sent yet
    const { data: newPosts, error: fetchError } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("newsletter_sent", false)
      .order("published_at", { ascending: false });

    if (fetchError) throw fetchError;

    if (!newPosts || newPosts.length === 0) {
      console.log("No new blog posts to send newsletter for.");
      return new Response(
        JSON.stringify({ success: true, message: "No new posts to send" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const listId = parseInt(brevoListId.replace("#", ""), 10);

    // Send a campaign email for each new post
    for (const post of newPosts) {
      console.log(`Sending newsletter for: ${post.title}`);

      const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;margin-top:20px;margin-bottom:20px;">
    <div style="background:linear-gradient(135deg,#1a5c3a,#2d8a5e);padding:30px 40px;text-align:center;">
      <h1 style="color:#ffffff;font-size:24px;margin:0;">AVYTA Pflegeblog</h1>
      <p style="color:#d4edda;font-size:14px;margin-top:8px;">Neuer Artikel veröffentlicht</p>
    </div>
    <div style="padding:30px 40px;">
      <img src="${post.image}" alt="${post.title}" style="width:100%;border-radius:8px;margin-bottom:20px;" />
      <span style="display:inline-block;background:#e8f5e9;color:#1a5c3a;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;margin-bottom:12px;">${post.category}</span>
      <h2 style="color:#1a1a1a;font-size:22px;margin:12px 0;">${post.title}</h2>
      <p style="color:#666;font-size:15px;line-height:1.6;">${post.excerpt}</p>
      <div style="margin-top:24px;text-align:center;">
        <a href="https://www.avyta.de/blog/${post.slug}" style="display:inline-block;background:#1a5c3a;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:600;font-size:15px;">Artikel lesen</a>
      </div>
      <p style="color:#999;font-size:12px;margin-top:24px;text-align:center;">${post.read_time} Lesezeit · ${post.date}</p>
    </div>
    <div style="background:#f8f8f8;padding:20px 40px;text-align:center;border-top:1px solid #eee;">
      <p style="color:#999;font-size:12px;margin:0;">AVYTA Pflegegesellschaft mbH · Frankfurt am Main</p>
    </div>
  </div>
</body>
</html>`;

      // Create and send Brevo email campaign
      const campaignResponse = await fetch("https://api.brevo.com/v3/emailCampaigns", {
        method: "POST",
        headers: {
          "api-key": brevoApiKey,
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: `Blog: ${post.title} - ${new Date().toISOString()}`,
          subject: `Neuer Blogartikel: ${post.title}`,
          sender: { name: "AVYTA Pflege", email: "info@avyta.de" },
          type: "classic",
          htmlContent: htmlContent,
          recipients: { listIds: [listId] },
        }),
      });

      if (!campaignResponse.ok) {
        const errorText = await campaignResponse.text();
        console.error(`Brevo campaign creation failed: ${campaignResponse.status} ${errorText}`);
        continue;
      }

      const campaignData = await campaignResponse.json();
      console.log(`Campaign created: ${campaignData.id}`);

      // Send the campaign immediately
      const sendResponse = await fetch(`https://api.brevo.com/v3/emailCampaigns/${campaignData.id}/sendNow`, {
        method: "POST",
        headers: {
          "api-key": brevoApiKey,
          "Content-Type": "application/json",
        },
      });

      if (sendResponse.ok || sendResponse.status === 204) {
        console.log(`Newsletter sent for: ${post.title}`);

        // Mark as sent
        await supabase
          .from("blog_posts")
          .update({ newsletter_sent: true })
          .eq("id", post.id);
      } else {
        const sendError = await sendResponse.text();
        console.error(`Brevo send failed: ${sendResponse.status} ${sendError}`);
      }
    }

    return new Response(
      JSON.stringify({ success: true, postsProcessed: newPosts.length }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in send-blog-newsletter:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
