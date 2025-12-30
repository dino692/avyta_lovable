import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, CheckCircle2, MapPin, Clock, Euro, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const requirements = [
  "Abgeschlossene Ausbildung als Gesundheits- und Krankenpfleger/in, Altenpfleger/in oder Pflegefachmann/frau",
  "Erfahrung in der ambulanten Pflege von Vorteil",
  "Spezialisierung auf Demenz oder Diabetes wünschenswert",
  "Einfühlungsvermögen und professionelles Auftreten",
  "Führerschein Klasse B",
  "Gute Deutschkenntnisse",
];

const tasks = [
  "Eigenständige Durchführung der Behandlungspflege",
  "Medikamentengabe und Wundversorgung",
  "Anleitung von Pflegehelfern und Hilfskräften",
  "Pflegedokumentation und Qualitätssicherung",
  "Beratung von Patienten und Angehörigen",
  "Zusammenarbeit mit Ärzten und Therapeuten",
];

const benefits = [
  "Gehalt nach Tarif + attraktive Zulagen",
  "Unbefristeter Arbeitsvertrag",
  "Dienstwagen auch zur privaten Nutzung möglich",
  "30 Tage Urlaub + Sonderurlaub",
  "Fort- und Weiterbildungen (auch extern)",
  "Betriebliche Altersvorsorge",
  "Gesundheitsbonus",
  "Wertschätzendes Arbeitsumfeld",
];

const Pflegefachkraft = () => {
  return (
    <>
      <Helmet>
        <title>Pflegefachkraft | Jobs bei AVYTA</title>
        <meta name="description" content="Examinierte Pflegefachkraft bei AVYTA in Frankfurt gesucht. Attraktive Vergütung, Dienstwagen möglich. Jetzt bewerben!" />
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
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-4xl font-display font-bold text-foreground">
                      Pflegefachkraft (m/w/d)
                    </h1>
                    <span className="px-3 py-1 bg-rose-500/10 text-rose-600 text-sm font-medium rounded-full">
                      Dringend gesucht
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Vollzeit / Teilzeit
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Frankfurt am Main
                    </span>
                    <span className="flex items-center gap-1">
                      <Euro className="w-4 h-4" />
                      Nach Tarif + Zulagen
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
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Über die Stelle
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Als examinierte Pflegefachkraft bei AVYTA übernehmen Sie verantwortungsvolle Aufgaben 
                      in der ambulanten Pflege. Wir sind spezialisiert auf Demenz und Diabetes und suchen 
                      Fachkräfte, die unser Team mit ihrer Expertise verstärken.
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

                <div>
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
                      <a href="mailto:jobs@avyta.de?subject=Bewerbung als Pflegefachkraft">
                        Jetzt bewerben
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      oder rufen Sie uns an: <br />
                      <a href="tel:+496915391405" className="text-primary font-medium">069 153 914 05</a>
                    </p>
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

export default Pflegefachkraft;
