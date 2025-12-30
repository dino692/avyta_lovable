import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobsSidebar from "@/components/JobsSidebar";
import { Briefcase, CheckCircle2, MapPin, Clock, Euro, ArrowRight, Heart, Users, Sparkles, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const jobs = [
  {
    title: "Pflegefachkraft (m/w/d)",
    type: "Vollzeit / Teilzeit",
    location: "Frankfurt am Main",
    salary: "Ab 3.800€ / Monat",
    href: "/jobs/pflegefachkraft",
    icon: Sparkles,
    description: "Als Pflegefachkraft übernehmen Sie die medizinische Versorgung von Patienten in der häuslichen Pflege. Sie stehen in engem Kontakt mit Pflegebedürftigen und ihren Angehörigen und koordinieren die Aufgaben Ihrer Kollegen.",
  },
  {
    title: "Pflegehelfer (m/w/d)",
    type: "Vollzeit / Teilzeit",
    location: "Frankfurt am Main",
    salary: "Ab 2.400€ / Monat",
    href: "/jobs/pflegehelfer",
    icon: Heart,
    description: "Nach einjähriger Ausbildung an einer staatlich anerkannten Krankenfachschule können Sie als Pflegehelfer im ambulanten Dienst tätig werden. Diese Anstellungsform ist für Berufseinsteiger und Berufswechsler besonders interessant.",
  },
  {
    title: "Pflegehilfskraft (m/w/d)",
    type: "Vollzeit / Teilzeit",
    location: "Frankfurt am Main",
    salary: "Ab 2.800€ / Monat",
    href: "/jobs/pflegehilfskraft",
    icon: Users,
    description: "Pflegehilfskräfte begleiten unsere Fachkräfte im ambulanten Dienst und liefern körperliche und soziale Unterstützung. Von der Aufstellung von Gehhilfen und Rollstühlen bis hin zum Anziehen von Kompressionsstrümpfen erwarten Sie täglich neue Aufgaben.",
  },
  {
    title: "Haushaltshilfe (m/w/d)",
    type: "Teilzeit / Minijob",
    location: "Frankfurt am Main",
    salary: "Ab 14€ / Stunde",
    href: "/jobs/haushaltshilfe",
    icon: Home,
    description: "Unsere ambulante Pflege Stellenangebote für Frankfurt stehen auch für Haushaltshilfen ohne besondere Vorausbildung offen. Im ambulanten Einsatz tragen Sie mit der Erledigung von Haushaltsaufgaben zum Wohlbefinden von Pflegebedürftigen bei.",
  },
];

const benefits = [
  "Übertarifliches Gehalt, je nach Qualifikation und Erfahrung",
  "Sonntag, Feiertag und Nachtzuschläge",
  "30 Urlaubstage jährlich",
  "PKW auch privat zur Verfügung",
  "Wellpass-Mitgliedschaft monatlich",
  "Urlaubsprämien, Feiertagsprämien und leistungsbasierte Prämien",
  "Geburtstage mit steuerfreien Geschenken bis 60€",
  "Unterkunft bei Bedarf (Apartment oder WG)",
  "Berufskleidung für alle Wetterbedingungen",
  "Größtenteils papierlose Arbeit",
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
                  {/* Intro Text */}
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

                  {/* Job Cards */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                      Aktuelle Stellenangebote
                    </h2>
                    <div className="space-y-4">
                      {jobs.map((job) => (
                        <Link
                          key={job.href}
                          to={job.href}
                          className="group block p-5 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                              <job.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                                {job.title}
                              </h3>
                              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-2">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {job.type}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {job.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Euro className="w-3 h-3" />
                                  {job.salary}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {job.description}
                              </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Das bieten wir Ihnen
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Grundpflege, Behandlungspflege, Intensivpflege oder einfache Haushaltshilfe – wir helfen 
                      Pflegebedürftigen dort, wo sie Hilfe benötigen. Als Teil des Teams leisten Sie einen 
                      wichtigen Beitrag zum sozialen Zusammenleben in der Region.
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{benefit}</span>
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

                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="sticky top-28 space-y-6">
                    <div className="p-6 bg-primary text-primary-foreground rounded-2xl">
                      <h3 className="font-semibold mb-4">Jetzt bewerben</h3>
                      <p className="text-sm opacity-90 mb-4">
                        Sie sprechen Deutsch auf B1-Niveau oder höher und haben eine Fahrerlaubnis für Klasse B Fahrzeuge? 
                        Bewerben Sie sich jetzt!
                      </p>
                      <Button variant="secondary" className="w-full" asChild>
                        <a href="mailto:jobs@avyta.de?subject=Bewerbung Stellenangebot">
                          Bewerbung senden
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>

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