import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import ContactSection from "@/components/ContactSection";

const Kontakt = () => {
  return (
    <>
      <Helmet>
        <title>Kontakt | AVYTA Ambulanter Pflegedienst Frankfurt</title>
        <meta name="description" content="Kontaktieren Sie AVYTA Pflegegesellschaft mbH in Frankfurt am Main. Kostenlose Erstberatung: Tel. 069/15391405. Allerheiligentor 2-4, 60311 Frankfurt. Wir sind für Sie da!" />
        <meta name="keywords" content="Pflegedienst Kontakt Frankfurt, Ambulante Pflege Frankfurt Telefon, Pflegeberatung Frankfurt" />
        <meta property="og:title" content="Kontakt | AVYTA Ambulanter Pflegedienst Frankfurt" />
        <meta property="og:description" content="Kontaktieren Sie uns für eine kostenlose Pflegeberatung. AVYTA - Ihr ambulanter Pflegedienst in Frankfurt am Main." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <link rel="canonical" href="https://www.avyta.de/kontakt" />
      </Helmet>
      <Header />
      <main className="pt-20">
        <ContactSection />
      </main>
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default Kontakt;
