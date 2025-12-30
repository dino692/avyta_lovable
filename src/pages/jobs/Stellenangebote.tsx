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
  "Sonntag, Feiertag und Nachtzuschläge",
  "30 Urlaubstage jährlich",
  "PKW auch privat zur Verfügung",
  "Wellpass-Mitgliedschaft monatlich",
  "Urlaubsprämien und Leistungsprämien",
];

const faqs = [
  {
    question: "Wann kann ich mich als Pflegehilfskraft oder Haushaltshilfe bewerben?",
    answer: "Pflegehilfskräfte und Haushaltshilfen benötigen keine besondere Vorausbildung und können sich sofort auf Stellenangebote in der Pflege Frankfurt bewerben und in den Beruf einsteigen. Sie sollten ein Händchen für den freundlichen Umgang mit Menschen haben und auch engen Kontakt nicht scheuen. Im privaten Umfeld von Pflegebedürftigen ist Vertrauen das A und O. Auch mit geringer Berufserfahrung lernen wir Sie im Bewerbungsgespräch gern kennen."
  },
  {
    question: "Welche Aufgaben erwarten mich in der ambulanten Pflege?",
    answer: "Die Aufgabenfelder für unsere Mitarbeiter variieren von Einsatzort zu Einsatzort. Manchmal stehen Sie Pflegefachkräften als Beobachter und Dokumentator zur Seite, zu anderen Gelegenheiten helfen Sie Pflegebedürftigen beim An- und Ausziehen oder legen Katheter. Abhängig von Ihrem beruflichen Qualifikationsgrad erledigen Sie sämtliche Aufgaben, die zur Verbesserung der Lebensqualität von Pflegebedürftigen beitragen."
  },
  {
    question: "Welche Eigenschaften müssen Bewerber auf Stellenangebote in der Pflege Frankfurt mitbringen?",
    answer: "Unser Pflegedienst mit Herz ist bekannt für seine Zuverlässigkeit. Pflegebedürftige und ihre Angehörigen übertragen uns Verantwortung für ihr Wohlbefinden. Bei der Auswahl von Bewerbern sind Engagement und Motivation die wichtigsten Kriterien. Wenn Sie gern mit Menschen zusammenarbeiten und anderen helfen, sind Sie in unserem Team genau richtig."
  },
];

const Stellenangebote = () => {
  return (
    <>
      <Helmet>
        <title>Stellenangebote Pflege Frankfurt | Jobs bei AVYTA Pflegedienst</title>
        <meta name="description" content="Stellenangebote für die Pflege in Frankfurt bei AVYTA. Pflegefachkräfte, Pflegehelfer und Haushaltshilfen gesucht. Übertarifliche Bezahlung, 30 Tage Urlaub, Firmenwagen. Jetzt bewerben!" />
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
                    Stellenangebote Pflege Frankfurt
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Mit Herz dabei – Werden Sie Teil unseres Teams
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
                      Arbeiten mit Wertschätzung
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Sie arbeiten gern eng mit Menschen zusammen und fühlen sich wohl im sozialen Arbeitsumfeld? 
                      Wir von Avyta vergrößern regelmäßig unser familiäres Team in der ambulanten Pflege. 
                      Pflegefachkräfte, Pflegehelfer und Haushaltshilfen sind bei uns stets gefragt.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Bei uns erwartet Sie ein abwechslungsreicher Arbeitsalltag mit größter Wertschätzung für Ihren Einsatz 
                      und Ihre Fähigkeiten. Unsere ambulante Pflege mit Stellenangeboten für Frankfurt begrüßt Bewerber 
                      jeden Alters, jeden Geschlechts und jeder Herkunft. Werden Sie Teil des Avyta Teams und genießen Sie 
                      unsere besonderen Vorteile für Angestellte und eine übertarifliche Bezahlung.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Bewerben Sie sich jetzt
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Sie sprechen Deutsch auf B1-Niveau oder höher und haben eine Fahrerlaubnis für Klasse B Fahrzeuge? 
                      Damit sind die ersten Hürden für eine Bewerbung auf unsere Stellenangebote in der Pflege in Frankfurt 
                      bereits überwunden. Menschen mit Freude an sozialer Arbeit und neuen Kontakten sind bei uns stets willkommen, 
                      unabhängig von ihrem Qualifikationsgrad. Für Pflegehelfer, Pflegefachkräfte, Pflegehilfskräfte und Haushaltshilfen 
                      mit Berufserfahrung ist in unserem Team stets Platz.
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
                      <a href="mailto:jobs@avyta.de?subject=Bewerbung Stellenangebot">
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

export default Stellenangebote;