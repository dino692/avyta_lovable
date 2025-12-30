import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobsSidebar from "@/components/JobsSidebar";
import { Home, CheckCircle2, MapPin, Clock, Euro, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const requirements = [
  "Freude am Helfen und Unterstützen älterer Menschen",
  "Zuverlässigkeit und Pünktlichkeit",
  "Selbstständige Arbeitsweise",
  "Gute Deutschkenntnisse",
  "Erfahrung im Haushalt wünschenswert",
  "Führerschein Klasse B von Vorteil",
];

const tasks = [
  "Haushaltsführung und Reinigung",
  "Einkäufe und Besorgungen",
  "Wäschepflege und Bügeln",
  "Mahlzeitenzubereitung",
  "Begleitung bei Spaziergängen",
  "Gesellschaft und Aktivierung",
];

const benefits = [
  "Flexible Arbeitszeiten",
  "Faire Vergütung",
  "Unbefristeter Arbeitsvertrag",
  "Einarbeitung und Unterstützung",
  "Familiäres Arbeitsumfeld",
  "Kurze Wege – Einsätze in Ihrer Nähe",
];

const HaushaltshilfeJob = () => {
  return (
    <>
      <Helmet>
        <title>Haushaltshilfe | Jobs bei AVYTA</title>
        <meta name="description" content="Werden Sie Haushaltshilfe bei AVYTA in Frankfurt. Unterstützen Sie ältere Menschen im Alltag. Flexible Arbeitszeiten. Jetzt bewerben!" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Link to="/jobs/stellenangebote" className="text-primary hover:underline text-sm mb-4 inline-block">
                ← Zurück zu Stellenangebote
              </Link>
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Home className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-display font-bold text-foreground mb-4">
                    Haushaltshilfe (m/w/d)
                  </h1>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Teilzeit / Minijob
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Frankfurt am Main
                    </span>
                    <span className="flex items-center gap-1">
                      <Euro className="w-4 h-4" />
                      Nach Vereinbarung
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Über die Stelle
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Als Haushaltshilfe bei AVYTA unterstützen Sie ältere und pflegebedürftige Menschen 
                      bei der Bewältigung ihres Alltags. Sie helfen im Haushalt, bei Einkäufen und 
                      sorgen dafür, dass sich unsere Klienten in ihrem Zuhause wohlfühlen. 
                      Keine Pflegeausbildung erforderlich!
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Ihre Aufgaben
                    </h2>
                    <ul className="space-y-3">
                      {tasks.map((task, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Was Sie mitbringen
                    </h2>
                    <ul className="space-y-3">
                      {requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="sticky top-28 space-y-6">
                    <div className="p-6 bg-muted/30 rounded-2xl">
                      <h3 className="font-semibold text-foreground mb-4">Das bieten wir</h3>
                      <ul className="space-y-3">
                        {benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <a href="mailto:jobs@avyta.de?subject=Bewerbung als Haushaltshilfe">
                        Jetzt bewerben
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      oder rufen Sie uns an: <br />
                      <a href="tel:+496915391405" className="text-primary font-medium">069 153 914 05</a>
                    </p>

                    <JobsSidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HaushaltshilfeJob;
