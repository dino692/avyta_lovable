import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobsSidebar from "@/components/JobsSidebar";
import { Briefcase, MapPin, Clock, Euro, ArrowRight, Heart, Users, Sparkles, Home, CheckCircle2, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTADropdownButton from "@/components/CTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pflegeJobs = [
  {
    title: "Pflegefachkraft (m/w/d)",
    type: "Vollzeit / Teilzeit",
    location: "Frankfurt & Bad Vilbel",
    salary: "Ab 3.800€ / Monat",
    href: "/jobs/pflegefachkraft",
    icon: Sparkles,
    urgent: true,
    highlights: ["Examiniert", "Alle Fachrichtungen", "Sofort verfügbar"],
  },
  {
    title: "Pflegehilfskraft (m/w/d)",
    type: "Vollzeit / Teilzeit",
    location: "Frankfurt & Bad Vilbel",
    salary: "Ab 2.800€ / Monat",
    href: "/jobs/pflegehilfskraft",
    icon: Users,
    urgent: true,
    highlights: ["Mit Qualifikation §43b", "Erfahrung erwünscht"],
  },
  {
    title: "Pflegehelfer/in (m/w/d)",
    type: "Vollzeit / Teilzeit / Minijob",
    location: "Frankfurt & Bad Vilbel",
    salary: "Ab 2.400€ / Monat",
    href: "/jobs/pflegehelfer",
    icon: Heart,
    urgent: false,
    highlights: ["Quereinsteiger willkommen", "Einarbeitung garantiert"],
  },
  {
    title: "Haushaltshilfe (m/w/d)",
    type: "Teilzeit / Minijob",
    location: "Frankfurt & Bad Vilbel",
    salary: "Ab 14€ / Stunde",
    href: "/jobs/haushaltshilfe",
    icon: Home,
    urgent: false,
    highlights: ["Flexible Zeiten", "Wohnortnah"],
  },
];

const pflegeBenefits = [
  "Gehalt: Übertarifliches Gehalt, je nach Qualifikation und Erfahrung",
  "Zuschläge: Sonntag, Feiertag und Nachtzuschläge",
  "Urlaub: Jährlich genießen unsere Mitarbeiter 30 Urlaubstage",
  "PKW: Stellen wir Ihnen auch privat zur Verfügung",
  "Firmenfitness: Wellpass-Mitgliedschaft zusätzlich zum Gehalt",
  "Prämien: Urlaubsprämien, Feiertagsprämien und leistungsbasierte Prämien",
  "Teamzusammenhalt: Geburtstage mit steuerfreien Geschenken bis 60€",
  "Unterkunft: Bei Bedarf Apartment oder WG",
  "Berufskleidung: Für alle Wetterbedingungen",
  "Digital: Größtenteils papierlose Arbeit",
];

const haushaltBenefits = [
  "Gehalt: Übertarifliches Gehalt, je nach Qualifikation und Erfahrung",
  "Zuschläge: Sonntag, Feiertag und Nachtzuschläge",
  "Urlaub: Jährlich 30 Urlaubstage",
  "PKW: Auch privat zur Verfügung",
  "Firmenfitness: Wellpass-Mitgliedschaft monatlich",
  "Prämien: Urlaubs-, Feiertags- und Leistungsprämien",
  "Teamzusammenhalt: Geburtstage mit Geschenken bis 60€",
  "Unterkunft: Bei Bedarf Apartment oder WG",
  "Berufskleidung: Für alle Wetterbedingungen",
  "Digital: Papierlose Arbeit",
];

const pflegeAufgaben = [
  "Grundpflege (Duschen, Waschen Intimzone, Windelwechseln, etc.)",
  "Betreute auf Veränderungen beobachten und melden",
  "Vitalwerte, Größe und Gewicht prüfen",
  "Bei der Versorgung mit Nahrungsmitteln und beim Essen helfen",
  "Wartung der Pflegeausrüstung von Betreuten",
  "Auf Notfallsituationen reagieren",
  "Verabreichen eines Medikaments",
  "Betreute zu Terminen begleiten und fahren",
  "Begleitung Aktivitäten und Gemeinschaftsanlässe inkl. Transport",
  "Betreute bei ihren Aktivitäten und Interessen unterstützen",
];

const pflegeAnforderungen = [
  "Berufserfahrung im Pflegebereich",
  "Führerschein Klasse B (zwingend)",
  "Deutschkenntnisse (min. B1)",
  "Auge fürs Detail vorteilhaft",
];

const haushaltAnforderungen = [
  "Berufserfahrung als Haushaltshilfe oder Pflegehelfer in Frankfurt",
  "Führerschein Klasse B (empfohlen)",
  "Deutschkenntnisse (min. B1)",
  "Auge fürs Detail",
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
        <meta name="keywords" content="Pflege Jobs Frankfurt, Pflegefachkraft Frankfurt, Pflegehelfer Frankfurt, Haushaltshilfe Frankfurt, Ambulanter Pflegedienst Jobs, AVYTA Karriere" />
        <link rel="canonical" href="https://avyta.de/jobs/pflege-jobs" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Pflege Jobs bei AVYTA
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Pflege Jobs Frankfurt: Ihre Karriere bei <span className="text-primary">AVYTA</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Die Wichtigkeit der Ambulanten Pflege und qualifizierter Pflegekräfte steigt! Dies ist insbesondere eine Folge des demographischen Wandels. 
                Denn einerseits bringt dieser eine höhere Lebenserwartung mit sich, andererseits aber führt er dazu, dass mehr pflegebedürftige Personen 
                und weniger geeignete Kandidaten für Pflege Jobs in Frankfurt in unserem Umfeld sind.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/jobs/stellenangebote">
                    Alle Stellen ansehen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <CTADropdownButton variant="default" size="lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Text Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dies ist natürlich auch bei uns im schönen Frankfurt am Main so, weswegen unser Ambulanter Pflegedienst Frankfurt stets auf der Suche 
                nach motivierten Personen ist, die sich eine Karriere in unseren Pflege Jobs in Frankfurt vorstellen können. Dafür erhalten Sie in 
                unserem Team ein familiäres Arbeitsumfeld, in dem Sie sich im Rahmen einer flachen Hierarchie mit einem angenehmen Betriebsklima 
                optimal entwickeln können.
              </p>
            </div>
          </div>
        </section>

        {/* Stellenangebote Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="flex-1">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                  Pflegedienst in Frankfurt – Stellenangebote aktuell bei Avyta:
                </h2>
                
                <div className="space-y-6 mb-12">
                  {pflegeJobs.map((job) => (
                    <Link
                      key={job.href}
                      to={job.href}
                      className="group block p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                          <job.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {job.title}
                            </h3>
                            {job.urgent && (
                              <span className="px-2 py-1 bg-destructive/10 text-destructive text-xs font-medium rounded-full">
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
                          
                          <div className="flex flex-wrap gap-2">
                            {job.highlights.map((highlight, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center text-primary font-medium">
                          <span className="hidden md:inline">Details</span>
                          <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-80">
                <JobsSidebar />
              </div>
            </div>
          </div>
        </section>

        {/* Pflegefachkräfte & Pflegehelfer Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Bewerbung als Pflegefachkräfte & Pflegehelfer/innen
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Sowohl in Voll- als auch in Teilzeit vergeben wir Pflege Jobs als Pflegehelfer in Frankfurt an Personen, 
                die ein hohes Maß an eigenverantwortlichem Handeln aufweisen und zugleich Spaß am Umgang mit Menschen haben.
              </p>

              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Ihr Tätigkeitsfeld
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Die Tätigkeiten als Pflegefachkraft sind umfangreicher als die von Pflegehelfern. Denn während eine 
                Pflegehelferin oder ein Pflegehelfer in Frankfurt eine einjährige Ausbildung durchläuft, sind es bei 
                der Pflegefachkraft drei Jahre an einer staatlich anerkannten Krankenfachschule sowie ambulanten und 
                stationären Pflegeeinrichtungen. Dabei liefern das theoretische und praktische Knowhow eine Fülle an 
                Informationen für Pflege Jobs in Frankfurt, die die Pflegefachkraft dazu befähigen, die Pflegehelfer 
                zu koordinieren sowie die medizinische Versorgung von Patienten zu übernehmen.
              </p>

              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Was hätten Sie bei diesen Pflege Jobs in Frankfurt zu tun?
              </h3>
              <h4 className="text-xl font-semibold text-foreground mb-4">Aufgaben</h4>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {pflegeAufgaben.map((aufgabe, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{aufgabe}</span>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Wir geben viel aber erwarten wenig, unser Ambulanter Pflegedienst freut sich über Bewerbungen auf 
                beide Pflege Jobs in Frankfurt! Im Folgenden ein Kurzüberblick über die Konditionen:
              </p>

              <h4 className="text-xl font-semibold text-foreground mb-4">Benefits:</h4>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {pflegeBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-xl font-semibold text-foreground mb-4">Qualifikation:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {pflegeAnforderungen.map((anforderung, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{anforderung}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Haushaltshilfe Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Bewerbung als Haushaltshilfe im Pflegedienst
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Für diese Pflege Jobs in Frankfurt dürfen sich alle Personen angesprochen fühlen, die freundliche 
                Umgangsformen pflegen und ehrlich sowie zuverlässig sind. Diese Pflege Jobs in Frankfurt haben wir 
                in Voll-, Teilzeit und auch als geringfügige Beschäftigung anzubieten.
              </p>

              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Ihr Tätigkeitsfeld:
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Für die Tätigkeit als Haushaltshilfe bedarf es keiner besonderen und umfangreichen Kenntnisse. 
                Wie es der Name dieser Pflege Jobs in Frankfurt schon sagt, geht es hier hauptsächlich um 
                Tätigkeiten im Haushalt, bei denen Sie den Pflegebedürftigen helfen. Da Sie allerdings auch 
                hier Kontakt zu den Klienten haben, ist wie bei anderen Pflege Jobs in Frankfurt ein freundlicher 
                und professioneller Umgang sowie ein Gefühl für die jeweilige Situation des Klienten Voraussetzung. 
                Ansonsten dürfen Sie sich bei diesen Pflege Jobs in Frankfurt darauf einstellen, dass Sie im 
                Haushalt typische Reinigungsarbeiten, Wechseln und Waschen der Wäsche, Blumen gießen, 
                Mülltrennung- und -entsorgung sowie viele weitere Aufgaben übernehmen.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Wir freuen uns bereits jetzt auf zahlreiche zuverlässige Haushaltshilfen! Zum Abschluss 
                ein Überblick über die Konditionen dieser Pflege Jobs in Frankfurt:
              </p>

              <h4 className="text-xl font-semibold text-foreground mb-4">Benefits:</h4>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {haushaltBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-xl font-semibold text-foreground mb-4">Unsere Anforderungen an Sie:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {haushaltAnforderungen.map((anforderung, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{anforderung}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Rufen Sie heute an oder schicken Sie uns Ihre Bewerbung per E-Mail.
              </h2>
              <p className="text-lg text-primary font-semibold mb-8">
                Wir freuen uns Sie kennenzulernen!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="default" size="lg" asChild>
                  <a href="tel:+4961aborundso" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:jobs@avyta.de" className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    E-Mail senden
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Karriere Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold text-primary-foreground mb-6">
              Ergreifen Sie Ihre Chance und starten Sie Ihre Karriere bei AVYTA!
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Sie haben bei uns die Gelegenheit, sich mit unseren Pflege Jobs in Frankfurt im Markt der Zukunft ein 
              beachtliches berufliches Standbein aufzubauen. Dabei sind persönlichen und beruflichen Perspektiven zur 
              Weiterentwicklung in den Pflege Jobs in Frankfurt bei uns alle Türen offen. Zudem ist der Beruf der 
              Pflegedienste ein angesehener und in der Gesellschaft sehr beliebter. Sichern Sie sich Ihre Chance, 
              in einem sympathischen Team einen eigenen Karriereweg einzuschlagen!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/jobs/stellenangebote">
                  Stellenangebote ansehen
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="mailto:jobs@avyta.de">
                  Initiativ bewerben
                </a>
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

export default PflegeJobs;
