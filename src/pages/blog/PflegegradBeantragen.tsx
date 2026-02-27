import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { ArrowLeft, Calendar, Clock, User, Scale, CheckCircle2 } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";

const PflegegradBeantragen = () => {
  return (
    <>
      <Helmet>
        <title>Pflegegrad beantragen: Schritt für Schritt erklärt | AVYTA Blog</title>
        <meta name="description" content="Alles was Sie wissen müssen, um erfolgreich einen Pflegegrad zu beantragen. Von der Antragstellung bis zur Begutachtung." />
        <link rel="canonical" href="https://www.avyta.de/blog/pflegegrad-beantragen" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Pflegegrad beantragen: Schritt für Schritt erklärt",
          "datePublished": "2026-01-05",
          "author": {"@type": "Organization", "name": "AVYTA Pflegegesellschaft mbH"},
          "publisher": {"@type": "Organization", "name": "AVYTA Pflegegesellschaft mbH", "logo": {"@type": "ImageObject", "url": "https://www.avyta.de/images/avyta-logo.png"}}
        })}</script>
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 text-sm font-medium mb-6">
                <Scale className="w-4 h-4" />
                Recht & Finanzen
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Pflegegrad beantragen: Schritt für Schritt erklärt
              </h1>
              <div className="flex items-center justify-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  10. Dezember 2024
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  8 Min. Lesezeit
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
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop"
                alt="Dokumente für Pflegegrad-Antrag"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto prose prose-lg prose-slate">
              <p className="lead text-xl text-muted-foreground mb-8">
                Ein Pflegegrad ist die Voraussetzung für Leistungen der Pflegeversicherung. 
                Wir erklären Ihnen, wie Sie den Antrag stellen und was Sie bei der Begutachtung beachten sollten.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Was ist ein Pflegegrad?</h2>
              <p className="text-muted-foreground mb-6">
                Seit 2017 gibt es fünf Pflegegrade, die den Grad der Beeinträchtigung der Selbstständigkeit 
                abbilden. Je höher der Pflegegrad, desto mehr Leistungen stehen Ihnen zu. Die Einstufung 
                erfolgt durch den Medizinischen Dienst (MD).
              </p>

              <div className="bg-muted/30 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Die fünf Pflegegrade im Überblick:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Pflegegrad 1:</strong> Geringe Beeinträchtigung der Selbstständigkeit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Pflegegrad 2:</strong> Erhebliche Beeinträchtigung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Pflegegrad 3:</strong> Schwere Beeinträchtigung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Pflegegrad 4:</strong> Schwerste Beeinträchtigung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Pflegegrad 5:</strong> Schwerste Beeinträchtigung mit besonderen Anforderungen</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Schritt 1: Antrag stellen</h2>
              <p className="text-muted-foreground mb-6">
                Der Antrag auf einen Pflegegrad wird bei der zuständigen Pflegekasse gestellt. Diese ist 
                bei Ihrer Krankenkasse angesiedelt. Der Antrag kann formlos sein – ein kurzes Schreiben 
                oder ein Anruf genügt. Die Pflegekasse sendet Ihnen dann die Formulare zu.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Schritt 2: Pflegetagebuch führen</h2>
              <p className="text-muted-foreground mb-6">
                Dokumentieren Sie mindestens zwei Wochen lang den täglichen Pflegebedarf. Notieren Sie, 
                wobei Hilfe benötigt wird und wie lange die Unterstützung dauert. Dies ist eine wertvolle 
                Grundlage für die Begutachtung.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Schritt 3: Begutachtung durch den MD</h2>
              <p className="text-muted-foreground mb-6">
                Ein Gutachter des Medizinischen Dienstes wird Sie zu Hause besuchen. Bereiten Sie sich vor:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Alle relevanten Arztberichte und Befunde bereithalten</li>
                <li>Medikamentenplan vorbereiten</li>
                <li>Pflegetagebuch zeigen</li>
                <li>Einen Angehörigen oder unseren Pflegedienst hinzuziehen</li>
                <li>Ehrlich den tatsächlichen Hilfebedarf schildern</li>
              </ul>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Schritt 4: Bescheid erhalten</h2>
              <p className="text-muted-foreground mb-6">
                Innerhalb von 25 Arbeitstagen nach Antragseingang muss die Pflegekasse entscheiden. 
                Sie erhalten einen schriftlichen Bescheid mit dem festgestellten Pflegegrad.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Was tun bei Ablehnung?</h2>
              <p className="text-muted-foreground mb-6">
                Sind Sie mit der Entscheidung nicht einverstanden, können Sie innerhalb eines Monats 
                Widerspruch einlegen. Wir unterstützen Sie gerne dabei und helfen bei der Begründung.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Unsere Unterstützung</h2>
              <p className="text-muted-foreground mb-6">
                Als ambulanter Pflegedienst begleiten wir Sie durch den gesamten Prozess. Wir helfen bei 
                der Antragstellung, bereiten Sie auf die Begutachtung vor und können auf Wunsch beim 
                Termin dabei sein.
              </p>

              {/* CTA Box */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-12">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Kostenlose Pflegeberatung
                </h3>
                <p className="text-muted-foreground mb-6">
                  Wir beraten Sie umfassend zu Pflegegraden und allen Leistungen der Pflegeversicherung. 
                  Vereinbaren Sie jetzt einen Termin.
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

export default PflegegradBeantragen;
