import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobsSidebar from "@/components/JobsSidebar";
import { Briefcase, MapPin, Clock, Euro, ArrowRight, Heart, Users, Sparkles, Home, CheckCircle2, Phone, Dumbbell, Infinity, Palette, Globe, CalendarCheck } from "lucide-react";
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
    urgent: true,
    description: "Als Pflegefachkraft übernehmen Sie die medizinische Versorgung von Patienten in der häuslichen Pflege. Sie stehen in engem Kontakt mit Pflegebedürftigen und ihren Angehörigen und koordinieren die Aufgaben Ihrer Kollegen.",
  },
  {
    title: "Pflegehelfer (m/w/d)",
    type: "Vollzeit / Teilzeit",
    location: "Frankfurt am Main",
    salary: "Ab 2.400€ / Monat",
    href: "/jobs/pflegehelfer",
    icon: Heart,
    urgent: false,
    description: "Nach einjähriger Ausbildung an einer staatlich anerkannten Krankenfachschule können Sie als Pflegehelfer im ambulanten Dienst tätig werden. Diese Anstellungsform ist für Berufseinsteiger und Berufswechsler besonders interessant.",
  },
  {
    title: "Pflegehilfskraft (m/w/d)",
    type: "Vollzeit / Teilzeit",
    location: "Frankfurt am Main",
    salary: "Ab 2.800€ / Monat",
    href: "/jobs/pflegehilfskraft",
    icon: Users,
    urgent: true,
    description: "Pflegehilfskräfte begleiten unsere Fachkräfte im ambulanten Dienst und liefern körperliche und soziale Unterstützung. Von der Aufstellung von Gehhilfen und Rollstühlen bis hin zum Anziehen von Kompressionsstrümpfen erwarten Sie täglich neue Aufgaben.",
  },
  {
    title: "Haushaltshilfe (m/w/d)",
    type: "Teilzeit / Minijob",
    location: "Frankfurt am Main",
    salary: "Ab 14€ / Stunde",
    href: "/jobs/haushaltshilfe",
    icon: Home,
    urgent: false,
    description: "Unsere ambulante Pflege Stellenangebote für Frankfurt stehen auch für Haushaltshilfen ohne besondere Vorausbildung offen. Im ambulanten Einsatz tragen Sie mit der Erledigung von Haushaltsaufgaben zum Wohlbefinden von Pflegebedürftigen bei.",
  },
];

const benefits = [
  "Gehalt: Sie erwartet ein übertarifliches Gehalt, je nach Qualifikation und Erfahrung",
  "Zuschläge: Sonntag, Feiertag und Nachtzuschläge",
  "Urlaub: Jährlich genießen unsere Mitarbeiter 30 Urlaubstage",
  "PKW: Stellen wir Ihnen auch privat zur Verfügung, damit Sie stets mobil bleiben",
  "Firmenfitness: Wellpass-Mitgliedschaft monatlich zusätzlich zum Gehalt",
  "Prämien: Urlaubsprämien, Feiertagsprämien und leistungsbasierte Prämien vergeben wir bei guter Leistung gern",
  "Teamzusammenhalt: Ist uns wichtig! Darum feiern wir auch Geburtstage von Angestellten mit steuerfreien Geschenken im Wert von bis zu 60 Euro",
  "Unterkunft: Bei Bedarf stellen wir Angestellten eine angemessene Unterkunft in einem Apartment oder in einer WG",
  "Berufskleidung: Ob kalt oder Warm, immer gut ausgestattet! Durch ein gepflegtes Bild nach außen zeichnen wir uns aus",
  "Digital: Wir arbeiten größtenteils Papierlos (digital) und verbessern uns dahingehend stetig",
];

const wellpassFeatures = [
  { icon: Infinity, label: "Unlimitiert" },
  { icon: Palette, label: "Vielfältig" },
  { icon: Globe, label: "Überall" },
  { icon: CalendarCheck, label: "Flexibel" },
];

const faqs = [
  {
    question: "Wann kann ich mich als Pflegehilfskraft oder Haushaltshilfe bewerben?",
    answer: "Pflegehilfskräfte und Haushaltshilfen benötigen keine besondere Vorausbildung und können sich sofort auf Stellenangebote in der Pflege Frankfurt bewerben und in den Beruf einsteigen. Sie sollten ein Händchen für den freundlichen Umgang mit Menschen haben und auch engen Kontakt nicht scheuen. Im privaten Umfeld von Pflegebedürftigen ist Vertrauen das A und O. Auch mit geringer Berufserfahrung lernen wir Sie im Bewerbungsgespräch gern kennen."
  },
  {
    question: "Welche Aufgaben erwarten mich in der ambulanten Pflege?",
    answer: "Die Aufgabenfelder für unsere Mitarbeiter variieren von Einsatzort zu Einsatzort. Manchmal stehen Sie Pflegefachkräften als Beobachter und Dokumentator zur Seite, zu anderen Gelegenheiten helfen Sie Pflegebedürftigen beim An- und Ausziehen oder legen Katheter. Abhängig von Ihrem beruflichen Qualifikationsgrad erledigen Sie sämtliche Aufgaben, die zur Verbesserung der Lebensqualität von Pflegebedürftigen beitragen. Schauen Sie sich unsere Stellenangebote in der Pflege Frankfurt einmal genauer an, auch für Sie ist sicherlich etwas dabei."
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
        <meta name="keywords" content="Stellenangebote Pflege Frankfurt, Jobs Pflegedienst Frankfurt, Pflegefachkraft gesucht, Pflegehelfer Jobs, Haushaltshilfe Frankfurt, AVYTA Karriere" />
        <link rel="canonical" href="https://avyta.de/jobs/stellenangebote" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden relative">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Mit Herz dabei
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Stellenangebote für die Pflege in Frankfurt
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sie arbeiten gern eng mit Menschen zusammen und fühlen sich wohl im sozialen Arbeitsumfeld? 
                Wir von Avyta vergrößern regelmäßig unser familiäres Team in der ambulanten Pflege.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pflegefachkräfte, Pflegehelfer und Haushaltshilfen sind bei uns stets gefragt. Bei uns erwartet Sie ein 
                abwechslungsreicher Arbeitsalltag mit größter Wertschätzung für Ihren Einsatz und Ihre Fähigkeiten. 
                Unsere ambulante Pflege mit Stellenangeboten für Frankfurt begrüßt Bewerber jeden Alters, jeden Geschlechts 
                und jeder Herkunft. Werden Sie Teil des Avyta Teams und genießen Sie unsere besonderen Vorteile für 
                Angestellte und eine übertarifliche Bezahlung.
              </p>
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Unsere Aufgaben im privaten Umfeld von Pflegebedürftigen sind so vielfältig wie die Menschen, die wir täglich versorgen. 
                Darum ist auch unser Team breit aufgestellt und Sie können sich mit unterschiedlichen Qualifikationen bewerben. 
                In Teilzeit und in Vollzeit vergeben wir Stellenangebote in der Pflege in Frankfurt für ausgebildete Fachkräfte und für sozialaffine Hilfskräfte:
              </p>
              
              <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3 space-y-6">
                  {jobs.map((job, index) => (
                    <Link
                      key={index}
                      to={job.href}
                      className="group block p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                          <job.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {job.title}
                            </h3>
                            {job.urgent && (
                              <span className="px-2 py-1 bg-rose-500/10 text-rose-600 text-xs font-medium rounded-full">
                                Dringend gesucht
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Euro className="w-4 h-4" />
                              {job.salary}
                            </span>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {job.description}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 self-center" />
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="hidden lg:block">
                  <div className="sticky top-28">
                    <JobsSidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-foreground font-medium mb-4">
                Wir stehen Ihnen gerne zur Verfügung
              </p>
              <p className="text-muted-foreground mb-6">
                Rufen Sie uns an und vereinbaren einen unverbindlichen Termin - gerne bei Ihnen zu Hause.
              </p>
              <Button variant="default" size="lg" asChild>
                <a href="tel:+4961aborundso" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Jetzt anrufen
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Diese Vorteile erwarten Sie hinter Stellenangeboten für die Pflege in Frankfurt
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Grundpflege, Behandlungspflege, Intensivpflege oder einfache Haushaltshilfe – wir helfen Pflegebedürftigen dort, 
                wo sie Hilfe benötigen. Unsere Avyta Einsatzteams in Frankfurt und Umgebung setzen sich deshalb ständig neu zusammen. 
                Als Teil des Teams leisten Sie einen wichtigen Beitrag zum sozialen Zusammenleben in der Region. 
                Wir wissen Ihren herzlichen Einsatz zu schätzen, darum bieten wir für Stellenangebote in der Pflege Frankfurt 
                eine Reihe von besonderen Benefits für Angestellte:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Arbeiten bei Avyta Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
                Arbeiten bei Avyta - Eine Zukunft voller Möglichkeiten
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
                Wir sind Ihr zuverlässiger Partner und Arbeitgeber in der Pflegebranche mit Sitz im Herzen von Frankfurt. 
                Bei uns stehen nicht nur die Bedürfnisse unserer Patienten im Mittelpunkt, sondern auch das Wohlbefinden 
                und die berufliche Entwicklung unserer Mitarbeiter.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-12 text-center">
                Als Teil unseres Teams genießen Sie nicht nur die Sicherheit und die Vorzüge eines etablierten Pflegedienstes, 
                sondern auch Gesundheits- und Wellnessangebote durch unsere Mitgliedschaft bei Wellpass. Wir glauben daran, 
                dass die Gesundheit unserer Mitarbeiter direkt zu einer höheren Qualität in der Pflege unserer Kunden beiträgt 
                und einer gesunden Work-Life-Balance.
              </p>

              {/* Wellpass Section */}
              <div className="bg-card rounded-2xl border border-border/50 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Dumbbell className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Firmenfitness mit Wellpass
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {wellpassFeatures.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold text-primary-foreground mb-6">
              Unsere Stellenangebote für die Pflege in Frankfurt – arbeiten mit Wertschätzung
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Sie sprechen Deutsch auf B1-Niveau oder höher und haben eine Fahrerlaubnis für Klasse B Fahrzeuge? 
              Damit sind die ersten Hürden für eine Bewerbung auf unsere Stellenangebote in der Pflege in Frankfurt 
              bereits überwunden. Menschen mit Freude an sozialer Arbeit und neuen Kontakten sind bei uns stets willkommen, 
              unabhängig von ihrem Qualifikationsgrad. Für Pflegehelfer, Pflegefachkräfte, Pflegehilfskräfte und Haushaltshilfen 
              mit Berufserfahrung ist in unserem Team stets Platz.
            </p>
            <p className="text-primary-foreground font-semibold text-xl mb-8">
              Bewerben Sie sich jetzt und lernen Sie unser freundliches Arbeitsumfeld kennen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <a href="mailto:jobs@avyta.de">
                  Jetzt bewerben
                </a>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/kontakt">
                  Kontakt aufnehmen
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Häufig gestellte Fragen
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Stellenangebote;
