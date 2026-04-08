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
        <title>Ambulanter Pflegedienst ✅ MDK 1,6 | 5.0 ★ | avyta.de</title>
        <meta
          name="description"
          content="AVYTA – Ihr ambulanter Pflegedienst ✓ MDK 1,6 ✓ 5.0 Sterne (36 Bewertungen) ✓ 2.500+ bereits betreute Patienten ✓ 24/7 erreichbar ✓ Jetzt kostenlos beraten!"
        />
        <meta
          name="keywords"
          content="Pflegedienst Frankfurt, Ambulanter Pflegedienst Frankfurt, Pflegedienst Frankfurt am Main, Grundpflege, Behandlungspflege, Intensivpflege, 24 Stunden Pflege, Pflegeberatung Frankfurt"
        />
        <meta property="og:title" content="AVYTA Pflegedienst Frankfurt ✅ MDK Note 1,6 | 5.0 ★ Google" />
        <meta
          property="og:description"
          content="Ambulanter Pflegedienst Frankfurt ✓ MDK Bestnote 1,6 ✓ 5.0 Sterne (36 Bewertungen) ✓ 2500+ bereits betreute Patienten ✓ 24/7 erreichbar ✓ Seit 2013 in Frankfurt"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/og-image.jpg" />
        <link rel="canonical" href="https://www.avyta.de/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.avyta.de",
            name: "AVYTA Pflegegesellschaft mbH",
            image: "https://www.avyta.de/images/avyta-logo.png",
            url: "https://www.avyta.de",
            telephone: "+496915391405",
            email: "info@avyta.de",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Allerheiligentor 2-4",
              addressLocality: "Frankfurt am Main",
              postalCode: "60311",
              addressCountry: "DE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 50.1109,
              longitude: 8.6821,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "12:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
                description: "Pflegedienst 24/7 erreichbar",
              },
            ],
            areaServed: [
              { "@type": "City", name: "Frankfurt am Main" },
              { "@type": "City", name: "Bad Vilbel" },
            ],
            serviceType: [
              "Grundpflege",
              "Behandlungspflege",
              "Intensivpflege",
              "24-Stunden-Pflege",
              "Verhinderungspflege",
              "Haushaltshilfe",
              "Pflegeberatung",
            ],
            numberOfEmployees: { "@type": "QuantitativeValue", minValue: 20 },
            priceRange: "€€",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "50",
              bestRating: "5",
            },
            sameAs: ["https://www.instagram.com/avyta_pflegedienst/"],
          })}
        </script>
        <script type="application/ld+json">
          {generateFAQSchema([
            {
              question: "Welche Leistungen bietet ein ambulanter Pflegedienst an?",
              answer:
                "Ein ambulanter Pflegedienst bietet Grundpflege (SGB XI), Behandlungspflege (SGB V), Intensivpflege, 24-Stunden-Betreuung, Verhinderungspflege, Haushaltshilfe sowie individuelle Pflegeberatung.",
            },
            {
              question: "Wie beantrage ich einen Pflegegrad?",
              answer:
                "Den Pflegegrad beantragen Sie bei Ihrer Pflegekasse. Anschließend erfolgt eine Begutachtung durch den MDK. Ein guter Pflegedienst unterstützt Sie bei der Antragstellung und MDK-Vorbereitung.",
            },
            {
              question: "Übernimmt die Krankenkasse die Kosten für ambulante Pflege?",
              answer:
                "Behandlungspflege (SGB V) wird vollständig von der Krankenkasse übernommen. Bei Grundpflege (SGB XI) richtet sich die Kostenübernahme nach Ihrem Pflegegrad.",
            },
            {
              question: "Was ist der Unterschied zwischen Grundpflege und Behandlungspflege?",
              answer:
                "Grundpflege umfasst alltägliche Hilfen wie Körperpflege und Ernährung (SGB XI). Behandlungspflege beinhaltet medizinische Maßnahmen wie Wundversorgung und Injektionen (SGB V).",
            },
            {
              question: "Was ist Verhinderungspflege und wer hat Anspruch darauf?",
              answer:
                "Verhinderungspflege springt ein, wenn die reguläre Pflegeperson verhindert ist. Ab Pflegegrad 2 stehen jährlich bis zu 1.612 € zu.",
            },
            {
              question: "Wie schnell kann ein ambulanter Pflegedienst starten?",
              answer:
                "In dringenden Fällen oft innerhalb von 24 Stunden. Üblicherweise wird zunächst ein kostenloses Erstgespräch geführt, um den individuellen Pflegebedarf zu ermitteln.",
            },
            {
              question: "Was ist der Entlastungsbetrag und wie kann ich ihn nutzen?",
              answer:
                "Der Entlastungsbetrag beträgt 125 € monatlich ab Pflegegrad 1 für Haushaltshilfe, Betreuung oder Tages-/Nachtpflege. Nicht genutzte Beträge können übertragen werden.",
            },
            {
              question: "Welche Qualifikationen sollte das Personal eines ambulanten Pflegedienstes haben?",
              answer:
                "Examinierte Pflegefachkräfte, Pflegehelfer und spezialisiertes Fachpersonal mit regelmäßigen Fortbildungen. Eine gute MDK-Bewertung ist ein Qualitätsindikator.",
            },
          ])}
        </script>
        
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PJP56QM');</script>

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
            <NewsletterSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ContactSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <FAQSection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
