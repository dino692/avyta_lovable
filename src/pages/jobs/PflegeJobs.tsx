import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobsSidebar from "@/components/JobsSidebar";
import { Briefcase, CheckCircle2, ArrowRight, Sparkles, Heart, Users, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stellenangebote = [
  { title: "Pflegefachkraft in Frankfurt", href: "/jobs/pflegefachkraft", icon: Sparkles },
  { title: "Pflegehelfer/Pflegehelferin", href: "/jobs/pflegehelfer", icon: Heart },
  { title: "Pflegehilfskraft in Frankfurt", href: "/jobs/pflegehilfskraft", icon: Users },
  { title: "Haushaltshilfen in Frankfurt", href: "/jobs/haushaltshilfe", icon: Home },
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

const pflegeBenefits = [
  "Gehalt: Übertarifliches Gehalt, je nach Qualifikation und Erfahrung",
  "Zuschläge: Sonntag, Feiertag und Nachtzuschläge",
  "Urlaub: Jährlich genießen unsere Mitarbeiter 30 Urlaubstage",
  "PKW: Stellen wir Ihnen auch privat zur Verfügung",
  "Firmenfitness: Wellpass-Mitgliedschaft zusätzlich zum Gehalt",
  "Prämien: Urlaubsprämien, Feiertagsprämien und leistungsbasierte Prämien",
  "Teamzusammenhalt: Geburtstage mit steuerfreien Geschenken bis 60€",
  "Unterkunft: Bei Bedarf Apartment oder WG",
  "Berufskleidung: Für alle Wetterbedingungen gerüstet",
  "Digital: Größtenteils papierlose Arbeit",
];

const pflegeQualifikation = [
  "Berufserfahrung im Pflegebereich",
  "Führerschein Klasse B (zwingend)",
  "Deutschkenntnisse (min. B1)",
  "Auge fürs Detail vorteilhaft",
];

const haushaltQualifikation = [
  "Berufserfahrung als Haushaltshilfe oder Pflegehelfer",
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
                  {/* Intro */}
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

                  {/* Stellenangebote Links */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                      Pflegedienst in Frankfurt – Stellenangebote aktuell bei Avyta
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {stellenangebote.map((job) => (
                        <Link
                          key={job.href}
                          to={job.href}
                          className="group flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                            <job.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                          </div>
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors flex-1">
                            {job.title}
                          </span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Pflegefachkräfte & Pflegehelfer */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Bewerbung als Pflegefachkräfte & Pflegehelfer/innen
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Sowohl in Voll- als auch in Teilzeit vergeben wir Pflege Jobs als Pflegehelfer in Frankfurt an Personen, 
                      die ein hohes Maß an eigenverantwortlichem Handeln aufweisen und zugleich Spaß am Umgang mit Menschen haben.
                    </p>

                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                      Ihr Tätigkeitsfeld
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Die Tätigkeiten als Pflegefachkraft sind umfangreicher als die von Pflegehelfern. Denn während eine 
                      Pflegehelferin oder ein Pflegehelfer in Frankfurt eine einjährige Ausbildung durchläuft, sind es bei 
                      der Pflegefachkraft drei Jahre an einer staatlich anerkannten Krankenfachschule sowie ambulanten und 
                      stationären Pflegeeinrichtungen. Dabei liefern das theoretische und praktische Knowhow eine Fülle an 
                      Informationen für Pflege Jobs in Frankfurt, die die Pflegefachkraft dazu befähigen, die Pflegehelfer 
                      zu koordinieren sowie die medizinische Versorgung von Patienten zu übernehmen.
                    </p>

                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                      Was hätten Sie bei diesen Pflege Jobs in Frankfurt zu tun?
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-2 mb-6">
                      {pflegeAufgaben.map((aufgabe, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">{aufgabe}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Wir geben viel aber erwarten wenig, unser Ambulanter Pflegedienst freut sich über Bewerbungen auf 
                      beide Pflege Jobs in Frankfurt!
                    </p>

                    <h4 className="font-semibold text-foreground mb-3">Qualifikation:</h4>
                    <ul className="space-y-2 mb-6">
                      {pflegeQualifikation.map((qual, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Haushaltshilfe */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Bewerbung als Haushaltshilfe im Pflegedienst
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Für diese Pflege Jobs in Frankfurt dürfen sich alle Personen angesprochen fühlen, die freundliche 
                      Umgangsformen pflegen und ehrlich sowie zuverlässig sind. Diese Pflege Jobs in Frankfurt haben wir 
                      in Voll-, Teilzeit und auch als geringfügige Beschäftigung anzubieten.
                    </p>

                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                      Ihr Tätigkeitsfeld
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Für die Tätigkeit als Haushaltshilfe bedarf es keiner besonderen und umfangreichen Kenntnisse. 
                      Wie es der Name dieser Pflege Jobs in Frankfurt schon sagt, geht es hier hauptsächlich um 
                      Tätigkeiten im Haushalt, bei denen Sie den Pflegebedürftigen helfen. Da Sie allerdings auch 
                      hier Kontakt zu den Klienten haben, ist wie bei anderen Pflege Jobs in Frankfurt ein freundlicher 
                      und professioneller Umgang sowie ein Gefühl für die jeweilige Situation des Klienten Voraussetzung. 
                      Ansonsten dürfen Sie sich bei diesen Pflege Jobs in Frankfurt darauf einstellen, dass Sie im 
                      Haushalt typische Reinigungsarbeiten, Wechseln und Waschen der Wäsche, Blumen gießen, 
                      Mülltrennung- und -entsorgung sowie viele weitere Aufgaben übernehmen.
                    </p>

                    <h4 className="font-semibold text-foreground mb-3">Unsere Anforderungen an Sie:</h4>
                    <ul className="space-y-2">
                      {haushaltQualifikation.map((qual, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Text */}
                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                    <p className="text-foreground font-medium mb-2">
                      Rufen Sie heute an oder schicken Sie uns Ihre Bewerbung per E-Mail.
                    </p>
                    <p className="text-muted-foreground">
                      Wir freuen uns Sie kennenzulernen! Ergreifen Sie Ihre Chance und starten Sie Ihre Karriere bei AVYTA!
                    </p>
                  </div>

                  {/* FAQ */}
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
                    <div className="p-6 bg-muted/30 rounded-2xl">
                      <h3 className="font-semibold text-foreground mb-4">Benefits</h3>
                      <ul className="space-y-3">
                        {pflegeBenefits.slice(0, 6).map((benefit, index) => (
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