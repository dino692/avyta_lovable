import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Team from "./pages/Team";
import UeberUns from "./pages/UeberUns";
import Leistungen from "./pages/Leistungen";
import NotFound from "./pages/NotFound";
import Behandlungspflege from "./pages/leistungen/Behandlungspflege";
import Grundpflege from "./pages/leistungen/Grundpflege";
import Intensivpflege from "./pages/leistungen/Intensivpflege";
import Haushaltshilfe from "./pages/leistungen/Haushaltshilfe";
import VierundzwanzigStunden from "./pages/leistungen/VierundzwanzigStunden";
import Pflegeberatung from "./pages/leistungen/Pflegeberatung";
import Verhinderungspflege from "./pages/leistungen/Verhinderungspflege";
import Blog from "./pages/Blog";
import DemenzPflege from "./pages/blog/DemenzPflege";
import PflegegradBeantragen from "./pages/blog/PflegegradBeantragen";
import DiabetesImAlter from "./pages/blog/DiabetesImAlter";
import VerhinderungspflegeNutzen from "./pages/blog/VerhinderungspflegeNutzen";
import SturzprophylaxeTipps from "./pages/blog/SturzprophylaxeTipps";
import AvytaTeamWaechst from "./pages/blog/AvytaTeamWaechst";
import Karriere from "./pages/Karriere";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Sitemap from "./pages/Sitemap";
import Stellenangebote from "./pages/jobs/Stellenangebote";
import Pflegehelfer from "./pages/jobs/Pflegehelfer";
import Pflegehilfskraft from "./pages/jobs/Pflegehilfskraft";
import Pflegefachkraft from "./pages/jobs/Pflegefachkraft";
import HaushaltshilfeJob from "./pages/jobs/Haushaltshilfe";
import PflegedienstBadVilbel from "./pages/standorte/BadVilbel";
import PflegedienstBockenheim from "./pages/standorte/Bockenheim";
import PflegedienstBornheim from "./pages/standorte/Bornheim";
import PflegedienstGriesheim from "./pages/standorte/Griesheim";
import PflegedienstSachsenhausen from "./pages/standorte/Sachsenhausen";
import PflegedienstNiederrad from "./pages/standorte/Niederrad";
import PflegedienstHoechst from "./pages/standorte/Hoechst";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/team" element={<Team />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/datenschutzerklaerung" element={<Datenschutz />} />
            <Route path="/sitemap" element={<Sitemap />} />
            
            {/* Leistungen */}
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/leistungen/behandlungspflege" element={<Behandlungspflege />} />
            <Route path="/leistungen/grundpflege" element={<Grundpflege />} />
            <Route path="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" element={<Intensivpflege />} />
            <Route path="/leistungen/24-stunden-pflege" element={<VierundzwanzigStunden />} />
            <Route path="/leistungen/pflegeberatung-frankfurt" element={<Pflegeberatung />} />
            <Route path="/leistungen/verhinderungspflege-frankfurt" element={<Verhinderungspflege />} />
            {/* Legacy routes for backwards compatibility */}
            <Route path="/leistungen/intensivpflege" element={<Intensivpflege />} />
            <Route path="/leistungen/haushaltshilfe" element={<Haushaltshilfe />} />
            <Route path="/leistungen/24-stunden" element={<VierundzwanzigStunden />} />
            <Route path="/leistungen/pflegeberatung" element={<Pflegeberatung />} />
            <Route path="/leistungen/verhinderungspflege" element={<Verhinderungspflege />} />
            
            {/* Karriere / Jobs */}
            <Route path="/karriere" element={<Karriere />} />
            <Route path="/karriere/stellenangebote" element={<Stellenangebote />} />
            <Route path="/karriere/pflegehelfer" element={<Pflegehelfer />} />
            <Route path="/karriere/pflegehilfskraft" element={<Pflegehilfskraft />} />
            <Route path="/karriere/pflegefachkraft" element={<Pflegefachkraft />} />
            <Route path="/karriere/haushaltshilfe" element={<HaushaltshilfeJob />} />
            {/* Legacy job routes */}
            <Route path="/jobs" element={<Karriere />} />
            <Route path="/jobs/stellenangebote" element={<Stellenangebote />} />
            <Route path="/jobs/pflegehelfer" element={<Pflegehelfer />} />
            <Route path="/jobs/pflegehilfskraft" element={<Pflegehilfskraft />} />
            <Route path="/jobs/pflegefachkraft" element={<Pflegefachkraft />} />
            <Route path="/jobs/haushaltshilfe" element={<HaushaltshilfeJob />} />
            
            {/* Standorte - avyta.de URL structure */}
            <Route path="/pflegedienst-bad-vilbel" element={<PflegedienstBadVilbel />} />
            <Route path="/pflegedienst-bockenheim" element={<PflegedienstBockenheim />} />
            <Route path="/pflegedienst-bornheim" element={<PflegedienstBornheim />} />
            <Route path="/pflegedienst-griesheim" element={<PflegedienstGriesheim />} />
            <Route path="/pflegedienst-frankfurt-sachsenhausen" element={<PflegedienstSachsenhausen />} />
            <Route path="/pflegedienst-niederrad" element={<PflegedienstNiederrad />} />
            <Route path="/pflegedienst-frankfurt-hoechst" element={<PflegedienstHoechst />} />
            
            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/demenz-pflege-tipps" element={<DemenzPflege />} />
            <Route path="/blog/pflegegrad-beantragen" element={<PflegegradBeantragen />} />
            <Route path="/blog/diabetes-im-alter" element={<DiabetesImAlter />} />
            <Route path="/blog/verhinderungspflege-nutzen" element={<VerhinderungspflegeNutzen />} />
            <Route path="/blog/sturzprophylaxe-tipps" element={<SturzprophylaxeTipps />} />
            <Route path="/blog/team-waechst" element={<AvytaTeamWaechst />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
