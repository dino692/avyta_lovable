import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";
import demenzPflegeImage from "@/assets/blog/demenz-pflege.jpg";
import TrustBadges from "@/components/TrustBadges";

const DemenzPflege = () => {
  return (
    <>
      <Helmet>
        <title>10 Tipps für Demenzpflege zu Hause | AVYTA</title>
        <meta name="description" content="Erfahren Sie, wie Sie den Alltag für Demenzpatienten sicherer und angenehmer gestalten können. Praktische Tipps von unseren Pflegeexperten." />
        <link rel="canonical" href="https://www.avyta.de/blog/demenz-pflege-tipps" />
        <meta property="og:title" content="10 Tipps für die häusliche Pflege von Demenzpatienten | AVYTA" />
        <meta property="og:description" content="Erfahren Sie, wie Sie den Alltag für Demenzpatienten sicherer und angenehmer gestalten können. Praktische Tipps von unseren Pflegeexperten." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "10 Tipps für die häusliche Pflege von Demenzpatienten",
          "datePublished": "2025-12-15",
          "author": {"@type": "Organization", "name": "AVYTA Pflegegesellschaft mbH"},
          "publisher": {"@type": "Organization", "name": "AVYTA Pflegegesellschaft mbH", "logo": {"@type": "ImageObject", "url": "https://www.avyta.de/images/avyta-logo.png"}},
          "image": "https://www.avyta.de/images/avyta-logo.png",
          "mainEntityOfPage": "https://www.avyta.de/blog/demenz-pflege-tipps"
        })}</script>
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Blog", url: "https://www.avyta.de/blog" },
          { name: "Demenz Pflege Tipps", url: "https://www.avyta.de/blog/demenz-pflege-tipps" },
        ])}</script>
      </Helmet>

      <Header />

      <main className="pt-20">
        <article className="py-12">
          <div className="container mx-auto px-4">
            {/* Back Link */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Blog
            </Link>

            {/* Header */}
            <header className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Pflegetipps
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                10 Tipps für die häusliche Pflege von Demenzpatienten
              </h1>
              <div className="flex items-center justify-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  15. Dezember 2024
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  5 Min. Lesezeit
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  AVYTA Team
                </span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="max-w-4xl mx-auto mb-12">
              <img
                src={demenzPflegeImage}
                alt="Seniorin sitzt lächelnd in einem hellen Wohnzimmer – häusliche Demenzpflege"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto prose prose-lg prose-slate">
              <p className="lead text-xl text-muted-foreground mb-8">
                Die Pflege eines an Demenz erkrankten Angehörigen stellt Familien vor große Herausforderungen. 
                Mit den richtigen Strategien können Sie den Alltag für alle Beteiligten deutlich erleichtern.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">1. Strukturierter Tagesablauf</h2>
              <p className="text-muted-foreground mb-6">
                Menschen mit Demenz profitieren enorm von festen Routinen. Ein strukturierter Tagesablauf mit 
                regelmäßigen Mahlzeiten, Ruhezeiten und Aktivitäten gibt Sicherheit und reduziert Verwirrung. 
                Versuchen Sie, Änderungen im Ablauf sanft und frühzeitig anzukündigen.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">2. Sichere Wohnumgebung</h2>
              <p className="text-muted-foreground mb-6">
                Entfernen Sie Stolperfallen wie lose Teppiche und sorgen Sie für ausreichende Beleuchtung, 
                besonders nachts. Sichern Sie Treppen mit Gittern und installieren Sie Handläufe im Bad. 
                Gefährliche Gegenstände und Reinigungsmittel sollten sicher verschlossen werden.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">3. Klare Kommunikation</h2>
              <p className="text-muted-foreground mb-6">
                Sprechen Sie langsam und in kurzen, einfachen Sätzen. Stellen Sie nur eine Frage auf einmal 
                und geben Sie dem Betroffenen Zeit zu antworten. Nutzen Sie Gestik und Mimik zur Unterstützung 
                und vermeiden Sie es, zu korrigieren oder zu widersprechen.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">4. Aktivitäten anpassen</h2>
              <p className="text-muted-foreground mb-6">
                Passen Sie Beschäftigungen an die verbliebenen Fähigkeiten an. Einfache Aktivitäten wie 
                Wäsche falten, Gartenarbeit oder gemeinsames Singen können Freude bereiten und das 
                Selbstwertgefühl stärken.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">5. Geduld und Verständnis</h2>
              <p className="text-muted-foreground mb-6">
                Veränderungen im Verhalten sind Teil der Erkrankung, nicht persönlich gemeint. Reagieren Sie 
                ruhig auf Wiederholungen und Vergesslichkeit. Ein wertschätzender Umgang ist das Wichtigste.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">6. Erinnerungshilfen nutzen</h2>
              <p className="text-muted-foreground mb-6">
                Beschriften Sie Schränke und Schubladen mit Bildern oder Worten. Große, gut lesbare Uhren 
                und Kalender helfen bei der zeitlichen Orientierung. Fotos von Familienangehörigen mit 
                Namen können hilfreich sein.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">7. Eigene Grenzen erkennen</h2>
              <p className="text-muted-foreground mb-6">
                Pflege ist anstrengend – körperlich und emotional. Achten Sie auf Ihre eigenen Bedürfnisse 
                und scheuen Sie sich nicht, Hilfe anzunehmen. Verhinderungspflege und Tagespflegeeinrichtungen 
                können Entlastung bieten.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">8. Professionelle Unterstützung</h2>
              <p className="text-muted-foreground mb-6">
                Ein ambulanter Pflegedienst kann Sie entlasten und fachgerechte Pflege sicherstellen. 
                Wir bei AVYTA sind speziell für die Betreuung von Demenzpatienten geschult und unterstützen 
                Sie gerne.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">9. Soziale Kontakte pflegen</h2>
              <p className="text-muted-foreground mb-6">
                Isolation verstärkt die Symptome. Halten Sie soziale Kontakte aufrecht, sei es durch 
                Besuche von Freunden, Nachbarn oder durch Betreuungsgruppen für Demenzpatienten.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">10. Rechtliche Vorsorge</h2>
              <p className="text-muted-foreground mb-6">
                Klären Sie frühzeitig rechtliche Fragen wie Vorsorgevollmacht und Patientenverfügung. 
                So können wichtige Entscheidungen im Sinne des Betroffenen getroffen werden.
              </p>

              {/* CTA Box */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-12">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Brauchen Sie Unterstützung?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Unser Team ist speziell für die Betreuung von Demenzpatienten geschult. 
                  Kontaktieren Sie uns für ein kostenloses Beratungsgespräch.
                </p>
                <CTADropdownButton size="default" />
              </div>
            </div>
          </div>
        </article>
      </main>

      <NewsletterSection />
      <Footer />
    </>
  );
};

export default DemenzPflege;
