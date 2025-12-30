import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, Heart, Users, Home, CheckCircle2, ArrowRight, Euro, Calendar, Car, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const jobs = [
  {
    title: "Pflegefachkraft (m/w/d)",
    description: "Examinierte Gesundheits- und Krankenpfleger, Altenpfleger oder Pflegefachleute",
    icon: Sparkles,
    href: "/karriere/pflegefachkraft",
    urgent: true,
  },
  {
    title: "Pflegehilfskraft (m/w/d)",
    description: "Mit Basisqualifikation LG1/LG2 oder Pflegebasiskurs",
    icon: Users,
    href: "/karriere/pflegehilfskraft",
    urgent: true,
  },
  {
    title: "Pflegehelfer/in (m/w/d)",
    description: "Quereinsteiger willkommen – wir arbeiten Sie ein",
    icon: Heart,
    href: "/karriere/pflegehelfer",
    urgent: false,
  },
  {
    title: "Haushaltshilfe (m/w/d)",
    description: "Unterstützung älterer Menschen im Haushalt",
    icon: Home,
    href: "/karriere/haushaltshilfe",
    urgent: false,
  },
];

const benefits = [
  { icon: Euro, title: "Übertarifliche Vergütung", description: "Wir zahlen fair und über Tarif" },
  { icon: Calendar, title: "30 Tage Urlaub", description: "Für Ihre Erholung und Work-Life-Balance" },
  { icon: Car, title: "Firmenwagen", description: "Auch zur privaten Nutzung möglich" },
  { icon: Award, title: "Wellpass Mitgliedschaft", description: "Fitness und Gesundheit inklusive" },
  { icon: Heart, title: "Familiäres Team", description: "Wertschätzung und Zusammenhalt" },
  { icon: Sparkles, title: "Leistungsprämien", description: "Ihre Leistung wird belohnt" },
];

const faqs = [
  {
    question: "Welche Qualifikationen werden benötigt?",
    answer: "Für Pflegefachkräfte: Abgeschlossene Ausbildung als Gesundheits- und Krankenpfleger/in, Altenpfleger/in oder Pflegefachmann/frau. Für Pflegehilfskräfte: Basisqualifikation (LG1/LG2 oder Pflegebasiskurs). Für Pflegehelfer: Keine Ausbildung erforderlich – wir arbeiten Sie ein. Deutschkenntnisse mindestens B1 sind erforderlich.",
  },
  {
    question: "Brauche ich einen Führerschein?",
    answer: "Ein Führerschein der Klasse B ist von Vorteil, aber nicht zwingend erforderlich. Bei einigen Positionen stellen wir auch Dienstfahrzeuge zur Verfügung.",
  },
  {
    question: "Wie sind die Arbeitszeiten?",
    answer: "Wir bieten flexible Arbeitszeitmodelle – Vollzeit, Teilzeit oder Minijob. Die genauen Arbeitszeiten besprechen wir individuell mit Ihnen.",
  },
  {
    question: "Werden Fort- und Weiterbildungen angeboten?",
    answer: "Ja, wir investieren in die Entwicklung unserer Mitarbeiter. Regelmäßige interne und externe Fortbildungen sind Teil unseres Angebots.",
  },
  {
    question: "Wie bewerbe ich mich?",
    answer: "Sie können sich ganz einfach per E-Mail an jobs@avyta.de bewerben oder uns telefonisch unter 069 153 914 05 kontaktieren. Wir freuen uns auf Ihre Bewerbung!",
  },
];

const Karriere = () => {
  return (
    <>
      <Helmet>
        <title>Karriere | Jobs bei AVYTA Pflegedienst Frankfurt</title>
        <meta name="description" content="Karriere bei AVYTA in Frankfurt. Aktuelle Stellenangebote für Pflegefachkräfte, Pflegehilfskräfte und Pflegehelfer. Übertarifliche Bezahlung, 30 Tage Urlaub, Firmenwagen." />
        <meta name="keywords" content="Pflege Jobs Frankfurt, Pflegefachkraft Stellenangebot, Karriere Pflegedienst, ambulante Pflege Jobs" />
        <meta property="og:title" content="Karriere bei AVYTA | Jobs in der Pflege Frankfurt" />
        <meta property="og:description" content="Aktuelle Stellenangebote bei AVYTA. Übertarifliche Bezahlung und mehr." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://avyta.de/karriere" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Karriere bei AVYTA
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Werden Sie Teil unseres Teams – wir suchen engagierte Pflegekräfte, 
                die mit Herz und Kompetenz für unsere Patienten da sind.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:jobs@avyta.de">
                  Jetzt bewerben
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg text-muted-foreground">
              <p className="mb-6 leading-relaxed">
                Bei AVYTA erwartet Sie ein <strong>familiäres Arbeitsumfeld</strong>, in dem Wertschätzung 
                und Teamgeist großgeschrieben werden. Wir wissen, dass unsere Mitarbeiter unser 
                wichtigstes Kapital sind – deshalb bieten wir Ihnen nicht nur einen Job, sondern 
                eine <strong>echte berufliche Heimat</strong>.
              </p>
              <p className="leading-relaxed">
                Ob Sie bereits Erfahrung in der Pflege haben oder als <strong>Quereinsteiger</strong> neu 
                starten möchten – bei uns finden Sie die passende Position. Wir arbeiten Sie 
                gründlich ein und unterstützen Sie bei Ihrer beruflichen Entwicklung.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Das bieten wir Ihnen
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit) => (
                  <Card key={benefit.title} variant="elevated">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Aktuelle Stellenangebote
              </h2>
              <div className="space-y-4">
                {jobs.map((job) => (
                  <Link
                    key={job.title}
                    to={job.href}
                    className="group block p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <job.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          {job.urgent && (
                            <span className="px-2 py-1 bg-destructive/10 text-destructive text-xs font-medium rounded-full">
                              Dringend gesucht
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm">{job.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Häufige Fragen
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-background rounded-xl border border-border px-6"
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
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Bewerben Sie sich jetzt und werden Sie Teil unseres Teams. Wir freuen uns auf Sie!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <a href="mailto:jobs@avyta.de">
                  Jetzt bewerben
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="tel:+496915391405">
                  069 153 914 05
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Karriere;
