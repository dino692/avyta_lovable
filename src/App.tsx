import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Team from "./pages/Team";
import Leistungen from "./pages/Leistungen";
import NotFound from "./pages/NotFound";
import Behandlungspflege from "./pages/leistungen/Behandlungspflege";
import Grundpflege from "./pages/leistungen/Grundpflege";
import Intensivpflege from "./pages/leistungen/Intensivpflege";
import Haushaltshilfe from "./pages/leistungen/Haushaltshilfe";
import VierundzwanzigStunden from "./pages/leistungen/VierundzwanzigStunden";
import Pflegeberatung from "./pages/leistungen/Pflegeberatung";
import Verhinderungspflege from "./pages/leistungen/Verhinderungspflege";
import Frankfurt from "./pages/standorte/Frankfurt";
import BadVilbel from "./pages/standorte/BadVilbel";
import Bockenheim from "./pages/standorte/Bockenheim";
import Bornheim from "./pages/standorte/Bornheim";
import Griesheim from "./pages/standorte/Griesheim";
import Hoechst from "./pages/standorte/Hoechst";
import Niederrad from "./pages/standorte/Niederrad";
import Sachsenhausen from "./pages/standorte/Sachsenhausen";
import Roedelheim from "./pages/standorte/Roedelheim";
import Praunheim from "./pages/standorte/Praunheim";
import Ginnheim from "./pages/standorte/Ginnheim";
import Nordend from "./pages/standorte/Nordend";
import Ostend from "./pages/standorte/Ostend";
import Westend from "./pages/standorte/Westend";
import Dornbusch from "./pages/standorte/Dornbusch";
import Heddernheim from "./pages/standorte/Heddernheim";
import Preungesheim from "./pages/standorte/Preungesheim";
import Eschersheim from "./pages/standorte/Eschersheim";
import Eckenheim from "./pages/standorte/Eckenheim";
import NiederEschbach from "./pages/standorte/NiederEschbach";
import Seckbach from "./pages/standorte/Seckbach";
import StadtteilTemplate from "./pages/standorte/StadtteilTemplate";
import Blog from "./pages/Blog";
import DemenzPflege from "./pages/blog/DemenzPflege";
import PflegegradBeantragen from "./pages/blog/PflegegradBeantragen";
import VerhinderungspflegeNutzen from "./pages/blog/VerhinderungspflegeNutzen";
import PflegegeldTabelle from "./pages/blog/PflegegeldTabelle";
import EntlastungsbetragNutzen from "./pages/blog/EntlastungsbetragNutzen";
import KombinationsleistungPflege from "./pages/blog/KombinationsleistungPflege";
import Jobs from "./pages/Jobs";
import PflegeJobs from "./pages/jobs/PflegeJobs";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Sitemap from "./pages/Sitemap";
import Karriere from "./pages/Karriere";
import Stellenangebote from "./pages/jobs/Stellenangebote";
import Pflegehelfer from "./pages/jobs/Pflegehelfer";
import Pflegehilfskraft from "./pages/jobs/Pflegehilfskraft";
import Pflegefachkraft from "./pages/jobs/Pflegefachkraft";
import HaushaltshilfeJob from "./pages/jobs/Haushaltshilfe";
import Broschuere from "./pages/Broschuere";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/team" element={<Team />} />
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/leistungen/behandlungspflege" element={<Behandlungspflege />} />
            <Route path="/leistungen/grundpflege" element={<Grundpflege />} />
            <Route path="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" element={<Intensivpflege />} />
            <Route path="/leistungen/haushaltshilfe" element={<Haushaltshilfe />} />
            <Route path="/leistungen/24-stunden-pflege" element={<VierundzwanzigStunden />} />
            <Route path="/leistungen/pflegeberatung-frankfurt" element={<Pflegeberatung />} />
            <Route path="/leistungen/verhinderungspflege-frankfurt" element={<Verhinderungspflege />} />
            <Route path="/standorte/frankfurt" element={<Frankfurt />} />
            <Route path="/pflegedienst-bad-vilbel" element={<BadVilbel />} />
            <Route path="/pflegedienst-bornheim" element={<Bornheim />} />
            <Route path="/pflegedienst-bockenheim" element={<Bockenheim />} />
            <Route path="/pflegedienst-griesheim" element={<Griesheim />} />
            <Route path="/pflegedienst-frankfurt-sachsenhausen" element={<Sachsenhausen />} />
            <Route path="/pflegedienst-niederrad" element={<Niederrad />} />
            <Route path="/pflegedienst-frankfurt-hoechst" element={<Hoechst />} />
            <Route path="/pflegedienst-roedelheim" element={<Roedelheim />} />
            <Route path="/pflegedienst-praunheim" element={<Praunheim />} />
            <Route path="/pflegedienst-ginnheim" element={<Ginnheim />} />
            <Route path="/pflegedienst-nordend" element={<Nordend />} />
            <Route path="/pflegedienst-ostend" element={<Ostend />} />
            <Route path="/pflegedienst-westend" element={<Westend />} />
            <Route path="/pflegedienst-dornbusch" element={<Dornbusch />} />
            <Route path="/pflegedienst-heddernheim" element={<Heddernheim />} />
            <Route path="/pflegedienst-preungesheim" element={<Preungesheim />} />
            <Route path="/pflegedienst-eschersheim" element={<Eschersheim />} />
            <Route path="/pflegedienst-eckenheim" element={<Eckenheim />} />
            <Route path="/pflegedienst-nieder-eschbach" element={<NiederEschbach />} />
            <Route path="/pflegedienst-seckbach" element={<Seckbach />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/demenz-pflege-tipps" element={<DemenzPflege />} />
            <Route path="/blog/pflegegrad-beantragen" element={<PflegegradBeantragen />} />
            <Route path="/blog/verhinderungspflege-nutzen" element={<VerhinderungspflegeNutzen />} />
            <Route path="/blog/pflegegeld-tabelle-2025" element={<PflegegeldTabelle />} />
            <Route path="/blog/entlastungsbetrag-nutzen" element={<EntlastungsbetragNutzen />} />
            <Route path="/blog/kombinationsleistung-pflege" element={<KombinationsleistungPflege />} />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieBanner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
