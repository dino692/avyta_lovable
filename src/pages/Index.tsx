import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

// Lazy load below-the-fold sections
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const LocationsSection = lazy(() => import("@/components/LocationsSection"));
const CertificatesSection = lazy(() => import("@/components/CertificatesSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ReviewsSection = lazy(() => import("@/components/ReviewsSection"));
const NewsletterSection = lazy(() => import("@/components/NewsletterSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const SectionFallback = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Frankfurt - ganzheitliche Pflegeleistung</title>
        <meta name="description" content="Wenn Sie auf der Suche nach einem hochqualifizierten ✅ Pflegedienst in Frankfurt sind, sind Sie hier genau richtig. Mehr Informationen auf | avyta.de" />
        <meta name="keywords" content="Ambulanter Pflegedienst Frankfurt, Pflegedienst Frankfurt am Main, Grundpflege, Behandlungspflege, Intensivpflege, 24 Stunden Pflege, Pflegeberatung Frankfurt" />
        <meta property="og:title" content="AVYTA - Ihr Ambulanter Pflegedienst in Frankfurt am Main" />
        <meta property="og:description" content="Hochqualifizierter ambulanter Pflegedienst in Frankfurt am Main. Ganzheitliche Betreuung für Pflegebedürftige. Wir sind mit Herz an Ihrer Seite." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <link rel="canonical" href="https://www.avyta.de/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.avyta.de",
          "name": "AVYTA Pflegegesellschaft mbH",
          "image": "https://www.avyta.de/images/avyta-logo.png",
          "url": "https://www.avyta.de",
          "telephone": "+496915391405",
          "email": "info@avyta.de",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Allerheiligentor 2-4",
            "addressLocality": "Frankfurt am Main",
            "postalCode": "60311",
            "addressCountry": "DE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 50.1109,
            "longitude": 8.6821
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
              "opens": "08:00",
              "closes": "12:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              "opens": "00:00",
              "closes": "23:59",
              "description": "Pflegedienst 24/7 erreichbar"
            }
          ],
          "areaServed": [
            {"@type": "City", "name": "Frankfurt am Main"},
            {"@type": "City", "name": "Bad Vilbel"}
          ],
          "serviceType": ["Grundpflege","Behandlungspflege","Intensivpflege","24-Stunden-Pflege","Verhinderungspflege","Haushaltshilfe","Pflegeberatung"],
          "numberOfEmployees": {"@type": "QuantitativeValue", "minValue": 20},
          "priceRange": "€€",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "50",
            "bestRating": "5"
          },
          "sameAs": [
            "https://www.instagram.com/avyta_pflegedienst/"
          ]
        })}</script>
      </Helmet>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Header />
        <main>
          <HeroSection />
          <Suspense fallback={<SectionFallback />}>
            <HowItWorksSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <AboutSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ServicesSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <LocationsSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <TestimonialsSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ReviewsSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <CertificatesSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <NewsletterSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ContactSection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
