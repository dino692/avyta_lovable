import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

const AvytaTeamWaechst = () => {
  return (
    <>
      <Helmet>
        <title>Unser Team wächst: Neue Kolleginnen bei AVYTA | AVYTA Blog</title>
        <meta name="description" content="AVYTA Pflegedienst wächst weiter. Wir begrüßen neue Pflegekräfte in unserem Team und erweitern unser Leistungsangebot." />
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 text-sm font-medium mb-6">
                <Newspaper className="w-4 h-4" />
                Neuigkeiten
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Unser Team wächst: Neue Kolleginnen bei AVYTA
              </h1>
              <div className="flex items-center justify-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  1. Dezember 2024
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  3 Min. Lesezeit
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
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&h=600&fit=crop"
                alt="AVYTA Pflegeteam"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto prose prose-lg prose-slate">
              <p className="lead text-xl text-muted-foreground mb-8">
                Wir freuen uns, neue Kolleginnen in unserem Team begrüßen zu dürfen! Mit der Verstärkung 
                können wir noch mehr Familien in Frankfurt und Umgebung unterstützen.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Wachstum durch Qualität</h2>
              <p className="text-muted-foreground mb-6">
                Die steigende Nachfrage nach unseren Pflegeleistungen zeigt uns, dass wir auf dem 
                richtigen Weg sind. Unsere Philosophie, ausschließlich Frauen als Pflegerinnen 
                einzusetzen, kommt bei vielen Familien gut an und schafft Vertrauen.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Herzlich Willkommen im Team!</h2>
              <p className="text-muted-foreground mb-6">
                Unsere neuen Kolleginnen bringen unterschiedliche Erfahrungen und Spezialisierungen mit. 
                Nach einer intensiven Einarbeitungsphase sind sie nun bereit, unsere Patientinnen und 
                Patienten mit der gleichen Hingabe zu betreuen, für die AVYTA bekannt ist.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Erweiterte Kapazitäten</h2>
              <p className="text-muted-foreground mb-6">
                Mit dem gewachsenen Team können wir nun:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Mehr Patientinnen und Patienten betreuen</li>
                <li>Kürzere Wartezeiten für Neuaufnahmen anbieten</li>
                <li>Flexiblere Termine ermöglichen</li>
                <li>Unsere Spezialisierungen in Demenz- und Diabetespflege ausbauen</li>
              </ul>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Werden Sie Teil unseres Teams!</h2>
              <p className="text-muted-foreground mb-6">
                Wir suchen weiterhin engagierte Pflegekräfte, die unsere Werte teilen. Bei AVYTA 
                erwartet Sie ein familiäres Arbeitsumfeld, faire Vergütung und die Möglichkeit, 
                wirklich etwas zu bewirken.
              </p>

              {/* CTA Box */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-12">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Jetzt bewerben
                </h3>
                <p className="text-muted-foreground mb-6">
                  Interessiert an einer Karriere bei AVYTA? Entdecken Sie unsere aktuellen Stellenangebote.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link to="/jobs">Stellenangebote ansehen</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/kontakt">Kontakt aufnehmen</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default AvytaTeamWaechst;
