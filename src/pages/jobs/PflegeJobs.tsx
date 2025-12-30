import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobsSidebar from "@/components/JobsSidebar";
import { Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  "Übertarifliches Gehalt",
  "30 Urlaubstage jährlich",
  "Firmenwagen auch privat",
  "Wellpass-Mitgliedschaft",
  "Familiäres Arbeitsumfeld",
  "Flache Hierarchien",
];

const faqs = [
  {
    question: "Welche Pflege Jobs in Frankfurt bietet Avyta an?",
    answer: "Bei Avyta schreiben wir aktuell Pflege Jobs in Frankfurt als Pflegefachkraft, Pflegehelfer/Pflegehilfskraft sowie Haushaltshilfen aus. Gerne nehmen wir Ihre Bewerbung in einem dieser Bereiche entgegen – werden Sie Teil eines tollen Teams und entwickeln Sie sich beruflich weiter."
  },
  {
    question: "Welche Voraussetzungen braucht man für Pflege Jobs in Frankfurt?",
    answer: "Die Anforderungen für Pflege Jobs in Frankfurt hängen ganz davon ab, auf welches Stellenprofil sich beworben wird. So brauchen alle Jobs ein hohes Maß an Zuverlässigkeit und Einfühlungsvermögen. Pflegefachkräfte haben aber natürlich höhere fachliche Anforderungen zu erfüllen, als Hilfskräfte oder Haushaltshilfen."
  },
  {
    question: "Wie ist die Bezahlung bei Pflege Jobs in Frankfurt?",
    answer: "Bei Avyta legen wir viel Wert auf eine überdurchschnittliche Entlohnung, die Ihrem Einsatz angemessen ist. Wir bezahlen über dem üblichen Tarif und geben Ihnen zusätzlich weitere attraktive Konditionen für Ihre Pflege Jobs in Frankfurt."
  },
];

const PflegeJobs = () => {
  return (
    <>
      <Helmet>
        <title>Pflege Jobs Frankfurt | Karriere bei AVYTA Pflegedienst</title>
        <meta name="description" content="Pflege Jobs Frankfurt bei AVYTA: Karriere als Pflegefachkraft, Pflegehelfer oder Haushaltshilfe. Übertarifliche Bezahlung, 30 Tage Urlaub, Firmenwagen. Jetzt bewerben!" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Link to="/jobs" className="text-primary hover:underline text-sm mb-4 inline-block">
                ← Zurück zu Karriere
              </Link>
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-display font-bold text-foreground mb-4">
                    Pflege Jobs Frankfurt
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Ihre Karriere bei AVYTA – Ambulante Pflege mit Herz
                  </p>
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
                      Ihre Karriere bei AVYTA
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Die Wichtigkeit der Ambulanten Pflege und qualifizierter Pflegekräfte steigt! Dies ist insbesondere eine Folge des demographischen Wandels. 
                      Denn einerseits bringt dieser eine höhere Lebenserwartung mit sich, andererseits aber führt er dazu, dass mehr pflegebedürftige Personen 
                      und weniger geeignete Kandidaten für Pflege Jobs in Frankfurt in unserem Umfeld sind.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Dies ist natürlich auch bei uns im schönen Frankfurt am Main so, weswegen unser Ambulanter Pflegedienst Frankfurt stets auf der Suche 
                      nach motivierten Personen ist, die sich eine Karriere in unseren Pflege Jobs in Frankfurt vorstellen können. Dafür erhalten Sie in 
                      unserem Team ein familiäres Arbeitsumfeld, in dem Sie sich im Rahmen einer flachen Hierarchie mit einem angenehmen Betriebsklima 
                      optimal entwickeln können.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Ergreifen Sie Ihre Chance
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Sie haben bei uns die Gelegenheit, sich mit unseren Pflege Jobs in Frankfurt im Markt der Zukunft ein beachtliches berufliches 
                      Standbein aufzubauen. Dabei sind persönlichen und beruflichen Perspektiven zur Weiterentwicklung in den Pflege Jobs in Frankfurt 
                      bei uns alle Türen offen. Zudem ist der Beruf der Pflegedienste ein angesehener und in der Gesellschaft sehr beliebter. 
                      Sichern Sie sich Ihre Chance, in einem sympathischen Team einen eigenen Karriereweg einzuschlagen!
                    </p>
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
                      <a href="mailto:jobs@avyta.de?subject=Bewerbung Pflege Job">
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

export default PflegeJobs;