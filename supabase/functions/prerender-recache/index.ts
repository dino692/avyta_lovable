import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// All URLs from sitemap.xml
const SITEMAP_URLS = [
  "https://www.avyta.de/",
  "https://www.avyta.de/ueber-uns",
  "https://www.avyta.de/kontakt",
  "https://www.avyta.de/impressum",
  "https://www.avyta.de/datenschutz",
  "https://www.avyta.de/sitemap",
  "https://www.avyta.de/broschuere",
  "https://www.avyta.de/leistungen",
  "https://www.avyta.de/leistungen/grundpflege",
  "https://www.avyta.de/leistungen/behandlungspflege",
  "https://www.avyta.de/leistungen/ausserklinische-intensivpflege-frankfurt-am-main",
  "https://www.avyta.de/leistungen/24-stunden-pflege",
  "https://www.avyta.de/leistungen/haushaltshilfe",
  "https://www.avyta.de/leistungen/pflegeberatung-frankfurt",
  "https://www.avyta.de/leistungen/verhinderungspflege-frankfurt",
  "https://www.avyta.de/standorte/frankfurt",
  "https://www.avyta.de/standorte/bad-vilbel",
  "https://www.avyta.de/standorte/frankfurt/bornheim",
  "https://www.avyta.de/standorte/frankfurt/pflegedienst-bockenheim",
  "https://www.avyta.de/standorte/frankfurt/griesheim",
  "https://www.avyta.de/standorte/frankfurt/pflegedienst-frankfurt-sachsenhausen",
  "https://www.avyta.de/standorte/frankfurt/niederrad",
  "https://www.avyta.de/standorte/frankfurt/hoechst",
  "https://www.avyta.de/standorte/frankfurt/pflegedienst-roedelheim",
  "https://www.avyta.de/standorte/frankfurt/pflegedienst-praunheim",
  "https://www.avyta.de/standorte/frankfurt/pflegedienst-ginnheim",
  "https://www.avyta.de/standorte/frankfurt/nordend",
  "https://www.avyta.de/standorte/frankfurt/ostend",
  "https://www.avyta.de/standorte/frankfurt/westend",
  "https://www.avyta.de/standorte/frankfurt/dornbusch",
  "https://www.avyta.de/standorte/frankfurt/heddernheim",
  "https://www.avyta.de/standorte/frankfurt/preungesheim",
  "https://www.avyta.de/standorte/frankfurt/eschersheim",
  "https://www.avyta.de/standorte/frankfurt/eckenheim",
  "https://www.avyta.de/standorte/frankfurt/nieder-eschbach",
  "https://www.avyta.de/standorte/frankfurt/seckbach",
  "https://www.avyta.de/karriere",
  "https://www.avyta.de/karriere/stellenangebote-pflege-frankfurt",
  "https://www.avyta.de/karriere/pflegefachkraft-frankfurt",
  "https://www.avyta.de/karriere/pflegehelfer-frankfurt",
  "https://www.avyta.de/karriere/pflegehilfskraft-frankfurt",
  "https://www.avyta.de/karriere/haushhaltshilfe-frankfurt",
  "https://www.avyta.de/karriere/pflege-jobs",
  "https://www.avyta.de/karriere/uebersicht",
  "https://www.avyta.de/blog",
  "https://www.avyta.de/blog/demenz-pflege-tipps",
  "https://www.avyta.de/blog/pflegegrad-beantragen",
  "https://www.avyta.de/blog/verhinderungspflege-nutzen",
  "https://www.avyta.de/blog/pflegegeld-tabelle-2025",
  "https://www.avyta.de/blog/entlastungsbetrag-nutzen",
  "https://www.avyta.de/blog/kombinationsleistung-pflege",
];

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const token = Deno.env.get("PRERENDER_TOKEN");
  if (!token) {
    return new Response(JSON.stringify({ error: "Missing PRERENDER_TOKEN" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const results: { url: string; status: number | string }[] = [];

  for (const url of SITEMAP_URLS) {
    try {
      const resp = await fetch("https://api.prerender.io/recache", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prerenderToken: token,
          url,
        }),
      });
      results.push({ url, status: resp.status });
    } catch (e) {
      results.push({ url, status: String(e) });
    }
  }

  const success = results.filter((r) => r.status === 200).length;
  console.log(`Recache complete: ${success}/${SITEMAP_URLS.length} succeeded`);

  return new Response(
    JSON.stringify({ total: SITEMAP_URLS.length, success, results }),
    {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    }
  );
});
