import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import LocationsSection from "@/components/LocationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ReviewsSection from "@/components/ReviewsSection";
import NewsletterSection from "@/components/NewsletterSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AVYTA - Ihr Ambulanter Pflegedienst in Frankfurt am Main</title>
        <meta name="description" content="Hochqualifizierter ambulanter Pflegedienst in Frankfurt am Main. Ganzheitliche Betreuung für Pflegebedürftige: Grundpflege, Behandlungspflege, Intensivpflege, 24-Stunden-Pflege. Auch am Wochenende für Sie da!" />
        <meta name="keywords" content="Ambulanter Pflegedienst Frankfurt, Pflegedienst Frankfurt am Main, Grundpflege, Behandlungspflege, Intensivpflege, 24 Stunden Pflege, Pflegeberatung Frankfurt" />
        <meta property="og:title" content="AVYTA - Ihr Ambulanter Pflegedienst in Frankfurt am Main" />
        <meta property="og:description" content="Hochqualifizierter ambulanter Pflegedienst in Frankfurt am Main. Ganzheitliche Betreuung für Pflegebedürftige. Wir sind mit Herz an Ihrer Seite." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.avyta.de/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
        <HeroSection />
        <HowItWorksSection />
        <AboutSection />
        <ServicesSection />
        <LocationsSection />
        <TestimonialsSection />
        <ReviewsSection />
        <NewsletterSection />
        <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
