import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, CheckCircle, Heart, Users, Car, Calendar, Gift, Home, Dumbbell, Shirt, Laptop, ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import CTADropdownButton from "@/components/CTADropdownButton";
import JobCTADropdownButton from "@/components/JobCTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generateFAQSchema } from "@/lib/faqSchema";

const karriereFaqs = [
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

const stellenangebote = [
  { name: "Pflegefachkraft in Frankfurt", href: "/karriere/pflegefachkraft-frankfurt" },
  { name: "Pflegehelfer/Pflegehelferin", href: "/karriere/pflegehelfer-frankfurt" },
  { name: "Pflegehilfskraft in Frankfurt", href: "/karriere/pflegehilfskraft-frankfurt" },
  { name: "Haushaltshilfen in Frankfurt", href: "/karriere/haushaltshilfe-frankfurt" },
  { name: "Fachbereichsleitung / Pflegeexperte", href: "/karriere/fachbereichsleitung-frankfurt" },
];

const benefits = [
  { icon: Gift, title: "Übertarifliches Gehalt", description: "Je nach Qualifikation und Erfahrung" },
  { icon: Calendar, title: "30 Urlaubstage", description: "Jährlich für unsere Mitarbeiter" },
  { icon: Car, title: "PKW", description: "Auch zur privaten Nutzung" },
  { icon: Dumbbell, title: "Firmenfitness", description: "Wellpass-Mitgliedschaft zusätzlich zum Gehalt" },
  { icon: Gift, title: "Prämien", description: "Urlaubs-, Feiertags- und leistungsbasierte Prämien" },
  { icon: Heart, title: "Teamzusammenhalt", description: "Geburtstage feiern wir mit Geschenken bis 60€" },
  { icon: Home, title: "Unterkunft", description: "Bei Bedarf Apartment oder WG" },
  { icon: Shirt, title: "Berufskleidung", description: "Für alle Wetterbedingungen" },
  { icon: Laptop, title: "Digital", description: "Größtenteils papierloses Arbeiten" },
];

const aufgaben = [
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

const Karriere = () => {
  return (
    <>
      <Helmet>
        <title>Karriere - Anforderungen und Tätigkeitsfelder bei uns</title>
        <meta name="description" content="Sie möchten Teil eines tollen Teams werden. ✅ Bei uns herrscht ein angenehmes Betriebsklima mit flachen Hierarchien. Ihren Job entdecken auf | avyta.de" />
        <meta name="keywords" content="Pflege Jobs Frankfurt, Pflegefachkraft Frankfurt, Pflegehelfer Frankfurt, Stellenangebote Pflege Frankfurt" />
        <meta property="og:title" content="Karriere - Anforderungen und Tätigkeitsfelder bei uns" />
        <meta property="og:description" content="Sie möchten Teil eines tollen Teams werden. Bei uns herrscht ein angenehmes Betriebsklima mit flachen Hierarchien." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <link rel="canonical" href="https://www.avyta.de/karriere" />
        <script type="application/ld+json">{generateFAQSchema(karriereFaqs)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 overflow-x-hidden">
          {/* Hero */}
          <section className="py-12 md:py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-14 h-14 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 md:mb-6">
                  Pflege Jobs Frankfurt: Ihre Karriere bei AVYTA
                </h1>
                <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
                  Die <strong>Wichtigkeit der Ambulanten Pflege und qualifizierter Pflegekräfte steigt!</strong> Dies ist insbesondere eine <strong>Folge des demographischen Wandels.</strong> Unser Ambulanter Pflegedienst Frankfurt ist stets auf der Suche nach motivierten Personen, die sich eine Karriere in unseren Pflege Jobs in Frankfurt vorstellen können.
                </p>
                <div className="flex justify-center">
                  <JobCTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          {/* Intro */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dafür erhalten Sie in <Link to="/ueber-uns" className="text-primary hover:underline font-semibold">unserem Team</Link> ein familiäres Arbeitsumfeld, in dem Sie sich im Rahmen einer flachen Hierarchie mit einem angenehmen Betriebsklima optimal entwickeln können.
                </p>
                
                <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
                    Pflegedienst in Frankfurt – Stellenangebote aktuell bei Avyta:
                  </h2>
                  <ul className="space-y-3">
                    {stellenangebote.map((stelle) => (
                      <li key={stelle.name}>
                        <Link 
                          to={stelle.href} 
                          className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="font-medium group-hover:underline">{stelle.name}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Bewerbung als Pflegefachkräfte & Pflegehelfer */}
          <section className="py-12 md:py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Bewerbung als Pflegefachkräfte & Pflegehelfer/innen
                </h2>
                <p className="text-muted-foreground mb-8">
                  Sowohl in Voll- als auch in Teilzeit vergeben wir <Link to="/karriere/stellenangebote-pflege-frankfurt" className="text-primary hover:underline font-semibold">Pflege Jobs als Pflegehelfer in Frankfurt</Link> an Personen, die ein hohes Maß an eigenverantwortlichem Handeln aufweisen und zugleich Spaß am Umgang mit Menschen haben.
                </p>

                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  Ihr Tätigkeitsfeld
                </h3>
                <p className="text-muted-foreground mb-6">
                  Die Tätigkeiten als Pflegefachkraft sind umfangreicher als die von Pflegehelfern. Denn während eine Pflegehelferin oder ein Pflegehelfer in Frankfurt eine einjährige Ausbildung durchläuft, sind es bei der Pflegefachkraft drei Jahre an einer staatlich anerkannten Krankenfachschule sowie ambulanten und stationären Pflegeeinrichtungen.
                </p>

                <h4 className="text-lg font-display font-semibold text-foreground mb-4">
                  Was hätten Sie bei diesen Pflege Jobs in Frankfurt zu tun?
                </h4>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {aufgaben.map((aufgabe, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-background rounded-lg border border-border/50">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{aufgabe}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 text-center">
                Unsere Benefits für Sie
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
                Wir geben viel aber erwarten wenig. Unser Ambulanter Pflegedienst freut sich über Bewerbungen auf unsere Pflege Jobs in Frankfurt!
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {benefits.map((benefit, index) => (
                  <Card key={index} variant="elevated" className="group hover:border-primary/30 transition-all">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <benefit.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-foreground mb-1">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Haushaltshilfe */}
          <section className="py-12 md:py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Bewerbung als Haushaltshilfe im Pflegedienst
                </h2>
                <p className="text-muted-foreground mb-6">
                  Für diese Pflege Jobs in Frankfurt dürfen sich alle Personen angesprochen fühlen, die freundliche Umgangsformen pflegen und ehrlich sowie zuverlässig sind. Diese Pflege Jobs in Frankfurt haben wir in Voll-, Teilzeit und auch als geringfügige Beschäftigung anzubieten.
                </p>
                <p className="text-muted-foreground mb-8">
                  Für die Tätigkeit als Haushaltshilfe bedarf es keiner besonderen und umfangreichen Kenntnisse. Wie es der Name dieser Pflege Jobs in Frankfurt schon sagt, geht es hier hauptsächlich um Tätigkeiten im Haushalt, bei denen Sie den Pflegebedürftigen helfen.
                </p>
                <div className="flex justify-center">
                  <Button asChild>
                    <a href="mailto:info@avyta.de">
                      Jetzt bewerben
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 md:py-20 bg-primary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Ergreifen Sie Ihre Chance und starten Sie Ihre Karriere bei AVYTA!
                </h2>
                <p className="text-muted-foreground mb-8">
                  Sie haben bei uns die Gelegenheit, <strong>sich mit unseren Pflege Jobs in Frankfurt im Markt der Zukunft ein beachtliches berufliches Standbein aufzubauen.</strong> Dabei sind persönlichen und beruflichen Perspektiven zur Weiterentwicklung in den Pflege Jobs in Frankfurt bei uns alle Türen offen. Zudem ist der <strong>Beruf der Pflegedienste ein angesehener und in der Gesellschaft sehr beliebter.</strong>
                </p>
                <JobCTADropdownButton />
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
                  <HelpCircle className="w-8 h-8 text-primary" />
                  Häufige Fragen
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {karriereFaqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-card rounded-xl border border-border/50 px-6"
                    >
                      <AccordionTrigger className="text-left font-display font-semibold">
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

          {/* Stellenangebote Links */}
          <section className="py-12 md:py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
                Unsere Stellenangebote
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" asChild>
                  <Link to="/karriere/stellenangebote-pflege-frankfurt">Alle Stellenangebote</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/karriere/pflegefachkraft-frankfurt">Pflegefachkraft</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/karriere/pflegehelfer-frankfurt">Pflegehelfer</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/karriere/pflegehilfskraft-frankfurt">Pflegehilfskraft</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/karriere/haushaltshilfe-frankfurt">Haushaltshilfe</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <NewsletterSection />
        <Footer />
      </div>
    </>
  );
};

export default Karriere;
