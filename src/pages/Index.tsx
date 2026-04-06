import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import BackofficePopup from "@/components/BackofficePopup";
import { generateFAQSchema } from "@/lib/faqSchema";

// Lazy load below-the-fold sections
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const LocationsSection = lazy(() => import("@/components/LocationsSection"));
const CertificatesSection = lazy(() => import("@/components/CertificatesSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ReviewsSection = lazy(() => import("@/components/ReviewsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const NewsletterSection = lazy(() => import("@/components/NewsletterSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const MediaPartnersSection = lazy(() => import("@/components/MediaPartnersSection"));

const SectionFallback = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <>
      <BackofficePopup />
      <Helmet>
        <title>Pflegedienst Frankfurt ✅ MDK 1,6 | 5.0 ★ | avyta.de</title>
        <meta name="description" content="AVYTA – Ihr ambulanter Pflegedienst in Frankfurt am Main ✓ MDK-Bestnote 1,6 ✓ 5.0 Google-Sterne ✓ Grundpflege, Behandlungspflege, Intensivpflege & 24h-Betreuung ✓ 2500+ bereits betreute Patienten ✓ 24/7 erreichbar ✓ Jetzt kostenlos beraten lassen!" />
        <meta name="keywords" content="Pflegedienst Frankfurt, Ambulanter Pflegedienst Frankfurt, Pflegedienst Frankfurt am Main, Grundpflege, Behandlungspflege, Intensivpflege, 24 Stunden Pflege, Pflegeberatung Frankfurt" />
        <meta property="og:title" content="AVYTA Pflegedienst Frankfurt ✅ MDK Note 1,6 | 5.0 ★ Google" />
        <meta property="og:description" content="Ambulanter Pflegedienst Frankfurt ✓ MDK Bestnote 1,6 ✓ 5.0 Sterne (36 Bewertungen) ✓ 2500+ bereits betreute Patienten ✓ 24/7 erreichbar ✓ Seit 2013 in Frankfurt" />
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
        <script type="application/ld+json">{generateFAQSchema([
          { question: "Welche Leistungen bietet AVYTA als ambulanter Pflegedienst in Frankfurt an?", answer: "Wir bieten Grundpflege (SGB XI), Behandlungspflege (SGB V), Intensivpflege, 24-Stunden-Betreuung, Verhinderungspflege, Haushaltshilfe sowie individuelle Pflegeberatung. Unser Team ist spezialisiert auf Demenz- und Diabetesversorgung." },
          { question: "Wie beantrage ich einen Pflegegrad und welche Unterstützung bietet AVYTA dabei?", answer: "Wir unterstützen Sie kostenlos bei der Beantragung eines Pflegegrads – von der Antragstellung über die MDK-Vorbereitung bis zum Widerspruch bei Ablehnung." },
          { question: "Übernimmt die Krankenkasse die Kosten für den ambulanten Pflegedienst?", answer: "Behandlungspflege (SGB V) wird vollständig von der Krankenkasse übernommen. Bei Grundpflege (SGB XI) richtet sich die Kostenübernahme nach Ihrem Pflegegrad." },
          { question: "In welchen Stadtteilen von Frankfurt ist AVYTA tätig?", answer: "Wir versorgen Patienten in ganz Frankfurt am Main und Umgebung – darunter Bockenheim, Sachsenhausen, Nordend, Bornheim, Westend, Ostend, Dornbusch, Eckenheim, Eschersheim, Rödelheim, Höchst, Niederrad, Griesheim und Bad Vilbel." },
          { question: "Wie schnell kann die Pflege bei AVYTA beginnen?", answer: "In dringenden Fällen innerhalb von 24 Stunden. Regulär vereinbaren wir ein kostenloses Erstgespräch bei Ihnen zu Hause. Wir sind 24/7 erreichbar unter 069 153 914 05." },
          { question: "Welche Qualifikationen hat das Pflegepersonal von AVYTA?", answer: "Unser Team besteht aus examinierten Pflegefachkräften und spezialisierten Fachkräften für Demenz- und Diabetesversorgung. Unsere MDK-Note von 1,6 bestätigt die hohe Qualität." },
          { question: "Was ist Verhinderungspflege und wie kann ich sie nutzen?", answer: "Verhinderungspflege springt ein, wenn Ihre reguläre Pflegeperson verhindert ist. Ab Pflegegrad 2 stehen Ihnen jährlich bis zu 1.612 € zu." },
          { question: "Bietet AVYTA auch Betreuung bei Demenzerkrankungen an?", answer: "Ja, Demenzbetreuung ist einer unserer Schwerpunkte. Wir bieten ambulante Einzelbetreuung und Plätze in unserer Demenz-WG in Frankfurt." },
        ])}</script>
      </Helmet>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Header />
        <main>
          <HeroSection />
          <Suspense fallback={<SectionFallback />}>
            <MediaPartnersSection />
          </Suspense>
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
            <ReviewsSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <CertificatesSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <FAQSection />
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
