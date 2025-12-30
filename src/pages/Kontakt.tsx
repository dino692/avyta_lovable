import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Kontakt = () => {
  return (
    <>
      <Helmet>
        <title>Kontakt | AVYTA Pflegegesellschaft mbH</title>
        <meta name="description" content="Kontaktieren Sie AVYTA Pflegegesellschaft mbH für eine kostenlose Erstberatung. Wir sind für Sie da!" />
      </Helmet>
      <Header />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Kontakt;
