import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";

// Lazy load all non-homepage routes
const Team = lazy(() => import("./pages/Team"));
const Leistungen = lazy(() => import("./pages/Leistungen"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Behandlungspflege = lazy(() => import("./pages/leistungen/Behandlungspflege"));
const Grundpflege = lazy(() => import("./pages/leistungen/Grundpflege"));
const Intensivpflege = lazy(() => import("./pages/leistungen/Intensivpflege"));
const Haushaltshilfe = lazy(() => import("./pages/leistungen/Haushaltshilfe"));
const VierundzwanzigStunden = lazy(() => import("./pages/leistungen/VierundzwanzigStunden"));
const Pflegeberatung = lazy(() => import("./pages/leistungen/Pflegeberatung"));
const Verhinderungspflege = lazy(() => import("./pages/leistungen/Verhinderungspflege"));
const DemenzWG = lazy(() => import("./pages/leistungen/DemenzWG"));
const BetreutesWohnen = lazy(() => import("./pages/leistungen/BetreutesWohnen"));
const Frankfurt = lazy(() => import("./pages/standorte/Frankfurt"));
const BadVilbel = lazy(() => import("./pages/standorte/BadVilbel"));
const Bockenheim = lazy(() => import("./pages/standorte/Bockenheim"));
const Bornheim = lazy(() => import("./pages/standorte/Bornheim"));
const Griesheim = lazy(() => import("./pages/standorte/Griesheim"));
const Hoechst = lazy(() => import("./pages/standorte/Hoechst"));
const Niederrad = lazy(() => import("./pages/standorte/Niederrad"));
const Sachsenhausen = lazy(() => import("./pages/standorte/Sachsenhausen"));
const Roedelheim = lazy(() => import("./pages/standorte/Roedelheim"));
const Praunheim = lazy(() => import("./pages/standorte/Praunheim"));
const Ginnheim = lazy(() => import("./pages/standorte/Ginnheim"));
const Nordend = lazy(() => import("./pages/standorte/Nordend"));
const Ostend = lazy(() => import("./pages/standorte/Ostend"));
const Westend = lazy(() => import("./pages/standorte/Westend"));
const Dornbusch = lazy(() => import("./pages/standorte/Dornbusch"));
const Heddernheim = lazy(() => import("./pages/standorte/Heddernheim"));
const Preungesheim = lazy(() => import("./pages/standorte/Preungesheim"));
const Eschersheim = lazy(() => import("./pages/standorte/Eschersheim"));
const Eckenheim = lazy(() => import("./pages/standorte/Eckenheim"));
const NiederEschbach = lazy(() => import("./pages/standorte/NiederEschbach"));
const Seckbach = lazy(() => import("./pages/standorte/Seckbach"));
const Blog = lazy(() => import("./pages/Blog"));
const DemenzPflege = lazy(() => import("./pages/blog/DemenzPflege"));
const PflegegradBeantragen = lazy(() => import("./pages/blog/PflegegradBeantragen"));
const VerhinderungspflegeNutzen = lazy(() => import("./pages/blog/VerhinderungspflegeNutzen"));
const PflegegeldTabelle = lazy(() => import("./pages/blog/PflegegeldTabelle"));
const EntlastungsbetragNutzen = lazy(() => import("./pages/blog/EntlastungsbetragNutzen"));
const KombinationsleistungPflege = lazy(() => import("./pages/blog/KombinationsleistungPflege"));
const KangenWasser = lazy(() => import("./pages/blog/KangenWasser"));
const Jobs = lazy(() => import("./pages/Jobs"));
const PflegeJobs = lazy(() => import("./pages/jobs/PflegeJobs"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const Karriere = lazy(() => import("./pages/Karriere"));
const Stellenangebote = lazy(() => import("./pages/jobs/Stellenangebote"));
const Pflegehelfer = lazy(() => import("./pages/jobs/Pflegehelfer"));
const Pflegehilfskraft = lazy(() => import("./pages/jobs/Pflegehilfskraft"));
const Pflegefachkraft = lazy(() => import("./pages/jobs/Pflegefachkraft"));
const HaushaltshilfeJob = lazy(() => import("./pages/jobs/Haushaltshilfe"));
const Broschuere = lazy(() => import("./pages/Broschuere"));
const Leistungskatalog = lazy(() => import("./pages/Leistungskatalog"));
const Ratgeber = lazy(() => import("./pages/Ratgeber"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/ueber-uns" element={<Team />} />
              <Route path="/team" element={<Navigate to="/ueber-uns" replace />} />
              <Route path="/leistungen" element={<Leistungen />} />
              <Route path="/leistungen/behandlungspflege" element={<Behandlungspflege />} />
              <Route path="/leistungen/grundpflege" element={<Grundpflege />} />
              <Route path="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" element={<Intensivpflege />} />
              <Route path="/leistungen/haushaltshilfe" element={<Haushaltshilfe />} />
              <Route path="/leistungen/24-stunden-pflege" element={<VierundzwanzigStunden />} />
              <Route path="/leistungen/pflegeberatung-frankfurt" element={<Pflegeberatung />} />
              <Route path="/leistungen/verhinderungspflege-frankfurt" element={<Verhinderungspflege />} />
              <Route path="/leistungen/demenz-wg-frankfurt" element={<DemenzWG />} />
              <Route path="/leistungen/betreutes-wohnen-frankfurt" element={<BetreutesWohnen />} />
              <Route path="/standorte/frankfurt" element={<Frankfurt />} />
              <Route path="/standorte/bad-vilbel" element={<BadVilbel />} />
              <Route path="/pflegedienst-bad-vilbel" element={<Navigate to="/standorte/bad-vilbel" replace />} />
              <Route path="/standorte/frankfurt/bornheim" element={<Bornheim />} />
              <Route path="/pflegedienst-bornheim" element={<Navigate to="/standorte/frankfurt/bornheim" replace />} />
              <Route path="/standorte/frankfurt/pflegedienst-bockenheim" element={<Bockenheim />} />
              <Route path="/pflegedienst-bockenheim" element={<Navigate to="/standorte/frankfurt/pflegedienst-bockenheim" replace />} />
              <Route path="/standorte/frankfurt/griesheim" element={<Griesheim />} />
              <Route path="/pflegedienst-griesheim" element={<Navigate to="/standorte/frankfurt/griesheim" replace />} />
              <Route path="/standorte/frankfurt/pflegedienst-frankfurt-sachsenhausen" element={<Sachsenhausen />} />
              <Route path="/pflegedienst-frankfurt-sachsenhausen" element={<Navigate to="/standorte/frankfurt/pflegedienst-frankfurt-sachsenhausen" replace />} />
              <Route path="/standorte/frankfurt/niederrad" element={<Niederrad />} />
              <Route path="/pflegedienst-niederrad" element={<Navigate to="/standorte/frankfurt/niederrad" replace />} />
              <Route path="/standorte/frankfurt/hoechst" element={<Hoechst />} />
              <Route path="/pflegedienst-frankfurt-hoechst" element={<Navigate to="/standorte/frankfurt/hoechst" replace />} />
              <Route path="/standorte/frankfurt/pflegedienst-roedelheim" element={<Roedelheim />} />
              <Route path="/pflegedienst-roedelheim" element={<Navigate to="/standorte/frankfurt/pflegedienst-roedelheim" replace />} />
              <Route path="/standorte/frankfurt/pflegedienst-praunheim" element={<Praunheim />} />
              <Route path="/pflegedienst-praunheim" element={<Navigate to="/standorte/frankfurt/pflegedienst-praunheim" replace />} />
              <Route path="/standorte/frankfurt/pflegedienst-ginnheim" element={<Ginnheim />} />
              <Route path="/pflegedienst-ginnheim" element={<Navigate to="/standorte/frankfurt/pflegedienst-ginnheim" replace />} />
              <Route path="/standorte/frankfurt/nordend" element={<Nordend />} />
              <Route path="/pflegedienst-nordend" element={<Navigate to="/standorte/frankfurt/nordend" replace />} />
              <Route path="/standorte/frankfurt/ostend" element={<Ostend />} />
              <Route path="/pflegedienst-ostend" element={<Navigate to="/standorte/frankfurt/ostend" replace />} />
              <Route path="/standorte/frankfurt/westend" element={<Westend />} />
              <Route path="/pflegedienst-westend" element={<Navigate to="/standorte/frankfurt/westend" replace />} />
              <Route path="/standorte/frankfurt/dornbusch" element={<Dornbusch />} />
              <Route path="/pflegedienst-dornbusch" element={<Navigate to="/standorte/frankfurt/dornbusch" replace />} />
              <Route path="/standorte/frankfurt/heddernheim" element={<Heddernheim />} />
              <Route path="/pflegedienst-heddernheim" element={<Navigate to="/standorte/frankfurt/heddernheim" replace />} />
              <Route path="/standorte/frankfurt/preungesheim" element={<Preungesheim />} />
              <Route path="/pflegedienst-preungesheim" element={<Navigate to="/standorte/frankfurt/preungesheim" replace />} />
              <Route path="/standorte/frankfurt/eschersheim" element={<Eschersheim />} />
              <Route path="/pflegedienst-eschersheim" element={<Navigate to="/standorte/frankfurt/eschersheim" replace />} />
              <Route path="/standorte/frankfurt/eckenheim" element={<Eckenheim />} />
              <Route path="/pflegedienst-eckenheim" element={<Navigate to="/standorte/frankfurt/eckenheim" replace />} />
              <Route path="/standorte/frankfurt/nieder-eschbach" element={<NiederEschbach />} />
              <Route path="/pflegedienst-nieder-eschbach" element={<Navigate to="/standorte/frankfurt/nieder-eschbach" replace />} />
              <Route path="/standorte/frankfurt/seckbach" element={<Seckbach />} />
              <Route path="/pflegedienst-seckbach" element={<Navigate to="/standorte/frankfurt/seckbach" replace />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/demenz-pflege-tipps" element={<DemenzPflege />} />
              <Route path="/blog/pflegegrad-beantragen" element={<PflegegradBeantragen />} />
              <Route path="/blog/verhinderungspflege-nutzen" element={<VerhinderungspflegeNutzen />} />
              <Route path="/blog/pflegegeld-tabelle-2025" element={<PflegegeldTabelle />} />
              <Route path="/blog/entlastungsbetrag-nutzen" element={<EntlastungsbetragNutzen />} />
              <Route path="/blog/kombinationsleistung-pflege" element={<KombinationsleistungPflege />} />
              <Route path="/blog/kangen-wasser" element={<KangenWasser />} />
              <Route path="/karriere" element={<Karriere />} />
              <Route path="/karriere/uebersicht" element={<Jobs />} />
              <Route path="/karriere/pflege-jobs" element={<PflegeJobs />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/karriere/stellenangebote-pflege-frankfurt" element={<Stellenangebote />} />
              <Route path="/karriere/pflegehelfer-frankfurt" element={<Pflegehelfer />} />
              <Route path="/karriere/pflegehilfskraft-frankfurt" element={<Pflegehilfskraft />} />
              <Route path="/karriere/pflegefachkraft-frankfurt" element={<Pflegefachkraft />} />
              <Route path="/karriere/haushhaltshilfe-frankfurt" element={<HaushaltshilfeJob />} />
              <Route path="/karriere/haushaltshilfe-frankfurt" element={<Navigate to="/karriere/haushhaltshilfe-frankfurt" replace />} />
              <Route path="/karriere/haushaltshilfen-frankfurt" element={<Navigate to="/karriere/haushhaltshilfe-frankfurt" replace />} />
              <Route path="/broschuere" element={<Broschuere />} />
              <Route path="/leistungskatalog" element={<Leistungskatalog />} />
              <Route path="/ratgeber" element={<Ratgeber />} />
              {/* Legacy redirects */}
              <Route path="/leistungen/intensivpflege" element={<Navigate to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" replace />} />
              <Route path="/leistungen/pflegeberatung" element={<Navigate to="/leistungen/pflegeberatung-frankfurt" replace />} />
              <Route path="/leistungen/verhinderungspflege" element={<Navigate to="/leistungen/verhinderungspflege-frankfurt" replace />} />
              <Route path="/blog/pflegegeld-tabelle" element={<Navigate to="/blog/pflegegeld-tabelle-2025" replace />} />
              {/* Legacy redirects */}
              <Route path="/ambulanter-pflegedienst" element={<Navigate to="/leistungen" replace />} />
              <Route path="/ueber-uns/galerie/weihnachtsfeier-2023" element={<Navigate to="/ueber-uns" replace />} />
              <Route path="/blog/gesundheit/ganzheitliche-gesundheitsstrategien-fuer-pflegebeduerftige-zu-hause" element={<Navigate to="/blog" replace />} />
              <Route path="/blog/pflegetipps/ihr-ambulanter-pflegedienst-in-frankfurt-am-main" element={<Navigate to="/blog" replace />} />
              <Route path="/blog/neuigkeiten/die-revolution-der-pflegetechnologie-wie-digitale-innovationen-die-ambulante-pflege-veraendern" element={<Navigate to="/blog" replace />} />
              <Route path="/blog/recht-und-finanzen/navigieren-durch-das-pflegeversicherungssystem-ein-leitfaden-fuer-angehoerige" element={<Navigate to="/blog" replace />} />
              <Route path="/blog/pflegetipps/effektive-hautpflege-routinen-fuer-bettlaegerige-patienten" element={<Navigate to="/blog" replace />} />
              <Route path="/blog/empfehlungen/top-hilfsmittel-fuer-die-haeusliche-pflege-verbesserung-der-lebensqualitaet" element={<Navigate to="/blog" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <CookieBanner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;