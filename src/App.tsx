import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import StadtteilTemplate from "./pages/standorte/StadtteilTemplate";
import Blog from "./pages/Blog";
import DemenzPflege from "./pages/blog/DemenzPflege";
import PflegegradBeantragen from "./pages/blog/PflegegradBeantragen";
import DiabetesImAlter from "./pages/blog/DiabetesImAlter";
import VerhinderungspflegeNutzen from "./pages/blog/VerhinderungspflegeNutzen";
import SturzprophylaxeTipps from "./pages/blog/SturzprophylaxeTipps";
import AvytaTeamWaechst from "./pages/blog/AvytaTeamWaechst";
import Jobs from "./pages/Jobs";
import PflegeJobs from "./pages/jobs/PflegeJobs";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Sitemap from "./pages/Sitemap";
import Stellenangebote from "./pages/jobs/Stellenangebote";
import Pflegehelfer from "./pages/jobs/Pflegehelfer";
import Pflegehilfskraft from "./pages/jobs/Pflegehilfskraft";
import Pflegefachkraft from "./pages/jobs/Pflegefachkraft";
import HaushaltshilfeJob from "./pages/jobs/Haushaltshilfe";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/team" element={<Team />} />
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/leistungen/behandlungspflege" element={<Behandlungspflege />} />
            <Route path="/leistungen/grundpflege" element={<Grundpflege />} />
            <Route path="/leistungen/intensivpflege" element={<Intensivpflege />} />
            <Route path="/leistungen/haushaltshilfe" element={<Haushaltshilfe />} />
            <Route path="/leistungen/24-stunden" element={<VierundzwanzigStunden />} />
            <Route path="/leistungen/pflegeberatung" element={<Pflegeberatung />} />
            <Route path="/leistungen/verhinderungspflege" element={<Verhinderungspflege />} />
            <Route path="/standorte/frankfurt" element={<Frankfurt />} />
            <Route path="/standorte/bad-vilbel" element={<BadVilbel />} />
            <Route path="/standorte/frankfurt/bornheim" element={<Bornheim />} />
            <Route path="/standorte/frankfurt/bockenheim" element={<Bockenheim />} />
            <Route path="/standorte/frankfurt/griesheim" element={<Griesheim />} />
            <Route path="/standorte/frankfurt/sachsenhausen" element={<Sachsenhausen />} />
            <Route path="/standorte/frankfurt/niederrad" element={<Niederrad />} />
            <Route path="/standorte/frankfurt/hoechst" element={<Hoechst />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/demenz-pflege-tipps" element={<DemenzPflege />} />
            <Route path="/blog/pflegegrad-beantragen" element={<PflegegradBeantragen />} />
            <Route path="/blog/diabetes-im-alter" element={<DiabetesImAlter />} />
            <Route path="/blog/verhinderungspflege-nutzen" element={<VerhinderungspflegeNutzen />} />
            <Route path="/blog/sturzprophylaxe-tipps" element={<SturzprophylaxeTipps />} />
            <Route path="/blog/team-waechst" element={<AvytaTeamWaechst />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/pflege-jobs" element={<PflegeJobs />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/jobs/stellenangebote" element={<Stellenangebote />} />
            <Route path="/jobs/pflegehelfer" element={<Pflegehelfer />} />
            <Route path="/jobs/pflegehilfskraft" element={<Pflegehilfskraft />} />
            <Route path="/jobs/pflegefachkraft" element={<Pflegefachkraft />} />
            <Route path="/jobs/haushaltshilfe" element={<HaushaltshilfeJob />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
