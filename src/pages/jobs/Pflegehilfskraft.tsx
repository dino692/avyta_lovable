import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobsSidebar from "@/components/JobsSidebar";
import { Users, CheckCircle2, MapPin, Clock, Euro, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const requirements = [
  "Abgeschlossene Basisqualifikation (z.B. LG1/LG2 oder Pflegebasiskurs)",
  "Erste Erfahrung in der Pflege wünschenswert",
  "Einfühlungsvermögen und Geduld",
  "Zuverlässigkeit und Teamfähigkeit",
  "Gute Deutschkenntnisse (min. B1)",
  "Führerschein Klasse B von Vorteil",
];

const tasks = [
  "Durchführung der Grundpflege",
  "Unterstützung bei der Behandlungspflege",
  "Begleitung und Betreuung der Patienten",
  "Dokumentation der Pflegeleistungen",
  "Kommunikation mit Angehörigen",
];

const benefits = [
  "Übertarifliche Vergütung",
  "Flexible Arbeitszeitmodelle",
  "Fort- und Weiterbildungen",
  "Unbefristeter Arbeitsvertrag",
  "Betriebliche Altersvorsorge",
  "Familiäres Arbeitsumfeld",
  "30 Tage Urlaub",
];

const faqs = [
  {
    question: "Was ist der Unterschied zwischen Pflegehilfskraft und Pflegehelfer?",
    answer: "Als Pflegehilfskraft verfügen Sie über eine Basisqualifikation (z.B. LG1/LG2 Kurs), die Sie zu erweiterten Pflegetätigkeiten befähigt. Pflegehelfer können auch ohne formale Qualifikation einsteigen und werden von uns eingearbeitet."
  },
  {
    question: "Welche Weiterbildungsmöglichkeiten gibt es?",
    answer: "Wir unterstützen Sie bei Ihrer beruflichen Entwicklung. Sie können weitere Qualifikationen erwerben, an Fortbildungen teilnehmen und sich zur examinierten Pflegefachkraft weiterbilden – wir fördern das aktiv."
  },
  {
    question: "Wie sind die Arbeitszeiten geregelt?",
    answer: "Wir bieten verschiedene Arbeitszeitmodelle an und versuchen, Ihre Wünsche bestmöglich zu berücksichtigen. Schichtdienste werden fair im Team verteilt."
  },
];

const Pflegehilfskraft = () => {
  return (
    <>
      <Helmet>
        <title>Pflegehilfskraft | Jobs bei AVYTA Frankfurt</title>
        <meta name="description" content="Werden Sie Pflegehilfskraft bei AVYTA in Frankfurt. Mit Basisqualifikation ins Team – übertarifliche Vergütung, 30 Tage Urlaub. Jetzt bewerben!" />
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
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-display font-bold text-foreground mb-4">
                    Pflegehilfskraft (m/w/d)
                  </h1>
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
                      Ab 2.800€ / Monat
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
                      Als Pflegehilfskraft mit Basisqualifikation übernehmen Sie wichtige Aufgaben in der 
                      ambulanten Pflege. Sie arbeiten eng mit unseren examinierten Pflegefachkräften zusammen 
                      und sorgen für das Wohlbefinden unserer Patienten.
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

                  {/* FAQ Section */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                      Häufige Fragen
                    </h2>
                    <Accordion type="single" collapsible className="space-y-3">
                      {faqs.map((faq, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`item-${index}`}
                          className="bg-muted/30 rounded-xl border border-border/50 px-6"
                        >
                          <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
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
                      <a href="mailto:jobs@avyta.de?subject=Bewerbung als Pflegehilfskraft">
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

export default Pflegehilfskraft;