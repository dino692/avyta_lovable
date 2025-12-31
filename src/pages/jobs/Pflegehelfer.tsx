import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobsSidebar from "@/components/JobsSidebar";
import { Heart, CheckCircle2, ArrowRight, Sparkles, Users, Home, Dumbbell, Infinity, Palette, Globe, CalendarCheck, Euro, Calendar, Car, Award, Gift, Building2, Shirt, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import JobCTADropdownButton from "@/components/JobCTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stellenangebote = [
  { title: "Pflegefachkraft in Frankfurt", href: "/jobs/pflegefachkraft", icon: Sparkles },
  { title: "Pflegehelfer/in in Frankfurt", href: "/jobs/pflegehelfer", icon: Heart },
  { title: "Pflegehilfskraft in Frankfurt", href: "/jobs/pflegehilfskraft", icon: Users },
  { title: "Haushaltshilfen in Frankfurt", href: "/jobs/haushaltshilfe", icon: Home },
];

const aufgaben = [
  "Grundpflege (Duschen, Waschen Intimzone, Windelwechseln, etc.)",
  "Beobachtung und Meldung über Gesundheitszustand von Betreuten",
  "Vitalwerte, Größe und Gewicht prüfen",
  "Betreuten bei Versorgung mit Nahrungsmitteln und beim Essen helfen",
  "Wartung der Pflegeausrüstung von Betreuten",
  "Auf Notfallsituationen reagieren",
  "Verabreichen von Medikamenten",
  "Betreute zu Terminen begleiten und fahren",
  "Aktivitäten und Gemeinschaftsanlässe, einschließlich des Transports",
  "Betreute bei ihren Aktivitäten und Interessen unterstützen",
];

const benefits = [
  { icon: Euro, title: "Übertarifliches Gehalt", description: "Je nach Qualifikation und Erfahrung" },
  { icon: Award, title: "Zuschläge", description: "Sonntag, Feiertag und Nachtzuschläge" },
  { icon: Calendar, title: "30 Urlaubstage", description: "Jährlich garantiert" },
  { icon: Car, title: "PKW", description: "Auch privat zur Verfügung" },
  { icon: Dumbbell, title: "Firmenfitness", description: "Wellpass-Mitgliedschaft monatlich" },
  { icon: Gift, title: "Prämien", description: "Urlaubsprämien, Feiertagsprämien und leistungsbasierte Prämien" },
  { icon: Users, title: "Teamzusammenhalt", description: "Geburtstage mit steuerfreien Geschenken bis 60€" },
  { icon: Building2, title: "Unterkunft", description: "Bei Bedarf Apartment oder WG" },
  { icon: Shirt, title: "Berufskleidung", description: "Für alle Wetterbedingungen gerüstet" },
  { icon: Laptop, title: "Digital", description: "Größtenteils papierlose Arbeit" },
];

const sidebarBenefits = [
  "Übertarifliches Gehalt",
  "30 Tage Urlaub jährlich",
  "Firmenwagen zur privaten Nutzung",
  "Wellpass-Mitgliedschaft",
  "Zuschläge für Sonn- und Feiertage",
  "Familiäres Arbeitsumfeld",
];

const qualifikation = [
  "Berufserfahrung oder abgeschlossene Ausbildung in der Pflegebranche",
  "Sie sind flexibel, belastbar, zuverlässig und haben Einfühlungsvermögen",
  "Führerschein Klasse B (zwingend)",
  "Deutschkenntnisse (zwingend)",
];

const haushaltBenefits = [
  { icon: Euro, title: "Überdurchschnittliches Gehalt", description: "Attraktive Vergütung" },
  { icon: Car, title: "Toyota Aygo", description: "Auch zur privaten Nutzung" },
  { icon: Building2, title: "Wohnung/Apartment", description: "Einzeln oder in einer WG" },
  { icon: Award, title: "Zuschläge", description: "Feiertags- und Sonntagszuschläge" },
  { icon: Gift, title: "50€ Einkaufsgutschein", description: "Monatlich" },
  { icon: Calendar, title: "30 Tage Urlaub", description: "Jährlich garantiert" },
];

const haushaltAnforderungen = [
  "Berufserfahrung als Haushaltshilfe oder Pflegehelfer in Frankfurt",
  "Führerschein Klasse B (empfohlen)",
  "Deutschkenntnisse (min. B1)",
  "Eine Brise Perfektionismus",
];

const wellpassFeatures = [
  { icon: Infinity, label: "Unlimitiert" },
  { icon: Palette, label: "Vielfältig" },
  { icon: Globe, label: "Überall" },
  { icon: CalendarCheck, label: "Flexibel" },
];

const faqs = [
  {
    question: "Welche Jobs als Pflegehelfer in Frankfurt bietet Avyta an?",
    answer: "Bei Avyta schreiben wir aktuell Pflege Jobs in Frankfurt als Pflegefachkraft, Pflegehelfer/Pflegehilfskraft sowie Haushaltshilfen aus. Gerne nehmen wir Ihre Bewerbung in einem dieser Bereiche entgegen – werden Sie Teil eines tollen Teams und entwickeln Sie sich beruflich weiter."
  },
  {
    question: "Welche Voraussetzungen braucht man als Pflegehelfer in Frankfurt?",
    answer: "Als Pflegehelfer in Frankfurt benötigen Sie eine einjährige Ausbildung an einer staatlich anerkannten Krankenfachschule. Wichtig sind außerdem Flexibilität, Belastbarkeit, Zuverlässigkeit und Einfühlungsvermögen. Ein Führerschein Klasse B und gute Deutschkenntnisse sind zwingend erforderlich."
  },
  {
    question: "Wie ist die Bezahlung als Pflegehelfer in Frankfurt?",
    answer: "Bei Avyta erwartet Sie ein übertarifliches Gehalt, das sich nach Ihrer Qualifikation und Erfahrung richtet. Zusätzlich profitieren Sie von Sonntags-, Feiertags- und Nachtzuschlägen sowie weiteren attraktiven Benefits wie 30 Urlaubstage und einem Firmenwagen zur privaten Nutzung."
  },
];

const Pflegehelfer = () => {
  return (
    <>
      <Helmet>
        <title>Pflegehelfer Frankfurt | Jobs bei AVYTA Pflegedienst</title>
        <meta name="description" content="Werden Sie Pflegehelfer/in bei AVYTA in Frankfurt. Übertarifliche Bezahlung, 30 Tage Urlaub, Firmenwagen. Jetzt bewerben!" />
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
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-display font-bold text-foreground mb-4">
                    Pflegehelfer/in (m/w/d)
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Ihre Karriere bei AVYTA in Frankfurt
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
                      Pflegehelfer in Frankfurt gesucht
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Ambulante Pflege nimmt einen immer größeren Stellenwert in unserer Gesellschaft ein. Das ist 
                      insbesondere eine Folge des demographischen Wandels. Denn einerseits bringt dieser eine höhere 
                      Lebenserwartung mit sich, andererseits aber führt er dazu, dass die Anzahl pflegebedürftiger 
                      Personen steigt und weniger Pflegehilfskräfte in Frankfurt auf dem Stellenmarkt verfügbar sind. 
                      Wir von Avyta sind stets auf der Suche nach motivierten Personen, die sich eine Karriere in 
                      unserem ambulanten Pflegedienst vorstellen können. Als Pflegehelfer in Frankfurt erwartet Sie 
                      in unserem Team ein familiäres Arbeitsumfeld, in dem Sie sich im Rahmen einer flachen Hierarchie 
                      mit einem angenehmen Betriebsklima optimal entwickeln können.
                    </p>
                  </div>

                  {/* Stellenangebote Links */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                      Stellen für Pflegehelfer in Frankfurt – Stellenangebote aktuell bei Avyta
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

                  {/* Arbeiten bei Avyta */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Arbeiten bei Avyta – Eine Zukunft voller Möglichkeiten
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Wir sind Ihr zuverlässiger Partner und Arbeitgeber in der Pflegebranche mit Sitz im Herzen 
                      von Frankfurt. Bei uns stehen nicht nur die Bedürfnisse unserer Patienten im Mittelpunkt, 
                      sondern auch das Wohlbefinden und die berufliche Entwicklung unserer Mitarbeiter.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Als Teil unseres Teams genießen Sie nicht nur die Sicherheit und die Vorzüge eines etablierten 
                      Pflegedienstes, sondern auch Gesundheits- und Wellnessangebote durch unsere Mitgliedschaft bei 
                      Wellpass. Wir glauben daran, dass die Gesundheit unserer Mitarbeiter direkt zu einer höheren 
                      Qualität in der Pflege unserer Kunden beiträgt und einer gesunden Work-Life-Balance.
                    </p>

                    {/* Wellpass Box */}
                    <div className="p-6 bg-muted/30 rounded-2xl border border-border/50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Dumbbell className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground">Firmenfitness mit Wellpass</h3>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {wellpassFeatures.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <feature.icon className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{feature.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bewerbung als Pflegehelfer */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Bewerbung als Pflegehelfer in Frankfurt
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Sowohl in Voll- als auch in Teilzeit vergeben wir Pflege Jobs als Pflegehelfer in Frankfurt 
                      an Personen, die ein hohes Maß an eigenverantwortlichem Handeln aufweisen und zugleich Spaß 
                      am Umgang mit Menschen haben.
                    </p>

                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                      Ihr Tätigkeitsfeld als Pflegehelfer in Frankfurt
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Die Tätigkeiten von Pflegekräften sind umfangreicher als die von Pflegehelfern. Denn während 
                      eine Pflegehelferin oder ein Pflegehelfer in Frankfurt eine einjährige Ausbildung durchläuft, 
                      sind es bei der Pflegefachkraft drei Jahre an einer staatlich anerkannten Krankenfachschule 
                      sowie in ambulanten und stationären Pflegeeinrichtungen.
                    </p>

                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                      Was hätten Sie als Pflegehelfer in Frankfurt zu tun?
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {aufgaben.map((aufgabe, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{aufgabe}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                      Was wir von Pflegehelfern in Frankfurt erwarten
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Wir geben viel und zeigen uns Bewerbern jeden Geschlechts und jeder Herkunft offen. Unser 
                      ambulanter Pflegedienst freut sich über Bewerbungen als Pflegekraft oder als Pflegehelfer 
                      in Frankfurt!
                    </p>

                    <h4 className="font-semibold text-foreground mb-3">Qualifikation:</h4>
                    <ul className="space-y-2">
                      {qualifikation.map((qual, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits Pflegehelfer */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                      Ihre Vorteile als Pflegehelfer
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl border border-border/50">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <benefit.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">{benefit.title}</h4>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Haushaltshilfe Alternative */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Keine Ausbildung als Pflegehelfer? Bewerbung als Haushaltshilfe
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Für diese Pflege Jobs in Frankfurt dürfen sich alle Personen angesprochen fühlen, die 
                      freundliche Umgangsformen pflegen und ehrlich sowie zuverlässig sind. Diese Pflege Jobs 
                      in Frankfurt haben wir in Voll-, Teilzeit und auch als geringfügige Beschäftigung anzubieten.
                    </p>

                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                      Ihr Tätigkeitsfeld
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Für die Tätigkeit als Haushaltshilfe bedarf es im Vergleich zur Anstellung als Pflegehelfer 
                      in Frankfurt keiner besonderen und umfangreichen Kenntnisse. Wie der Name der Pflege Jobs 
                      in Frankfurt schon sagt, geht es hier hauptsächlich um Tätigkeiten im Haushalt, bei denen 
                      Sie den Pflegebedürftigen helfen.
                    </p>

                    <h4 className="font-semibold text-foreground mb-3">Benefits für Haushaltshilfen:</h4>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {haushaltBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl border border-border/50">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <benefit.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">{benefit.title}</h4>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h4 className="font-semibold text-foreground mb-3">Unsere Anforderungen an Sie:</h4>
                    <ul className="space-y-2">
                      {haushaltAnforderungen.map((anf, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{anf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">
                      Ergreifen Sie Ihre Chance!
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Sie haben bei uns die Gelegenheit, sich als Pflegehelfer in Frankfurt eine sichere Basis 
                      für Ihre berufliche Karriere aufzubauen. Bei uns stehen Ihnen alle Türen offen, um Ihre 
                      persönlichen und beruflichen Perspektiven zu erweitern. Bewerben Sie sich noch heute!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <JobCTADropdownButton jobTitle="Pflegehelfer" />
                      <Button variant="outline" size="lg" asChild>
                        <a href="tel:+496915301405">
                          Anrufen: 069 153 014 05
                        </a>
                      </Button>
                    </div>
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
                        {sidebarBenefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <JobCTADropdownButton jobTitle="Pflegehelfer" />

                    <p className="text-sm text-muted-foreground text-center">
                      oder rufen Sie uns an: <br />
                      <a href="tel:+496915301405" className="text-primary font-medium">069 153 014 05</a>
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

export default Pflegehelfer;
