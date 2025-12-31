import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, FileText, Users, Heart, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import CTADropdownButton from "@/components/CTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wie kann ich bettlägerige Angehörige mit einer Pflegeberatung in Frankfurt zu Hause pflegen?",
    answer: "Zur Versorgung und Pflege von Intensivpatienten zu Hause entwickeln wir bei Avyta spezielle Pflegepläne. Angehörige mit Bedarf leiten wir Schritt für Schritt dazu an, auch schwere medizinische Aufgaben selbst zu übernehmen. Ihre Angehörigen können Sie so in jeder Lebenslage im gewohnten Umfeld pflegen."
  },
  {
    question: "Wie kann die Avyta Pflegeberatung in Frankfurt eingeschränkte Menschen unterstützen?",
    answer: "Wir entwickeln individuelle Pflegepläne, die auf die persönlichen Bedürfnisse und Wünsche von Pflegebedürftigen zugeschnitten sind. Unsere Berater arbeiten eng mit Familien und Betroffenen zusammen, um sicherzustellen, dass die Pflege im Einklang mit den individuellen Vorlieben und Gewohnheiten erfolgt."
  },
  {
    question: "Wann sollte ich die Pflegeberatung in Frankfurt von Avyta in Anspruch nehmen?",
    answer: "Sie sollten uns kontaktieren, sobald eine Pflegebedürftigkeit eintritt oder absehbar ist – sei es durch einen Unfall, eine Operation, Krankheit oder das Alter. Je früher wir gemeinsam planen können, desto besser können wir Ihnen und Ihren Angehörigen helfen."
  },
];

const Pflegeberatung = () => {
  return (
    <>
      <Helmet>
        <title>Avyta Pflegeberatung in Frankfurt | Unterstützung mit Herz | AVYTA</title>
        <meta name="description" content="Pflegeberatung in Frankfurt von Avyta. Individuelle Pflegepläne, Unterstützung bei Anträgen und Koordination von Pflegedienstleistungen. Kostenlose Beratung!" />
        <meta name="keywords" content="Pflegeberatung Frankfurt, Pflegeplanung, Häusliche Pflege Beratung" />
        <link rel="canonical" href="https://www.avyta.de/leistungen/pflegeberatung" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-12 md:py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-14 h-14 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 md:mb-6">
                  Avyta Pflegeberatung in Frankfurt: Unterstützung mit Herz
                </h1>
                <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                  Wir von Avyta stellen Familien und Menschen mit Pflegebedarf die nötigen Ressourcen für individuelle Pflege zur Verfügung.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          {/* Intro Content */}
          <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                  In hektischen Metropolen wie in Frankfurt am Main fällt es vielen Familien schwer, Haushalt, Job und Pflege
                  von Angehörigen im Alltag zu bewältigen. Wird ein Familienmitglied krank, fühlen sich Angehörige oft überfordert 
                  und alleingelassen. Wenn Aufgaben wie die Vergabe von Injektionen und Medikamenten, Wundversorgung oder 
                  Blutzuckerkontrolle Angehörigen über den Kopf wachsen, ist es beruhigend, einen erfahrenen Partner an ihrer 
                  Seite zu wissen.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Unsere Pflegeberatung in Frankfurt steht für Angehörige und Menschen mit körperlichen oder geistigen 
                  Einschränkungen offen.
                </p>
              </div>
            </div>
          </section>

          {/* Von Fall zu Fall */}
          <section className="py-12 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 md:mb-6">
                  Von Fall zu Fall die passende Pflegeberatung in Frankfurt
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ein Unfall, eine Operation, Krankheit, oder das Alter: Manchmal können Menschen ihren Alltag schleichend 
                  oder ganz plötzlich nicht mehr wie gewohnt bewältigen. Für viele Familien kommt die stationäre Unterbringung 
                  von Angehörigen jedoch nicht in Frage. In unserer Pflegeberatung in Frankfurt entwickeln wir individuelle 
                  Pflegepläne, die auf die persönlichen Bedürfnisse und Wünsche von Pflegebedürftigen zugeschnitten sind.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Unsere Berater arbeiten eng mit Familien und Betroffenen zusammen, um sicherzustellen, dass die Pflege im 
                  Einklang mit den individuellen Vorlieben und Gewohnheiten erfolgt. Viele Angehörige möchten so viel wie möglich 
                  selbst für ihre Lieben erledigen. Unsere Pflegeberatung ist darauf ausgerichtet, Menschen mit körperlichen und 
                  geistigen Einschränkungen so viel Selbstbestimmung wie möglich zu lassen.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mit ambulanten Pflegediensten unterstützen wir Sie auch bei der intensivmedizinischen Pflege zu Hause. 
                  Unsere Avyta Pflegeberatung in Frankfurt ermöglicht Pflegebedürftigen auch in schweren Zeiten einen normalen 
                  Alltag zu Hause.
                </p>
              </div>
            </div>
          </section>

          {/* Lebensqualität */}
          <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 md:mb-6">
                    Avyta Pflegeberatung in Frankfurt für volle Lebensqualität
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Unsere Pflegeberater verfügen über jahrelange Erfahrung im Bereich der häuslichen Pflege. Wir stehen Ihnen 
                    mit umfassendem Fachwissen und Mitgefühl zur Seite und entwickeln Pflegepläne, die Betroffene und Angehörige 
                    entlasten. Während des gesamten Pflegezeitraums ist unsere Pflegeberatung in Frankfurt Ihr Ansprechpartner 
                    für alle Fragen rund um die Behandlungs- und Alltagspflege. Gemeinsam arbeiten wir daran, die Lebensqualität 
                    von Menschen in der Heimpflege zu erhalten und zu verbessern.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-muted-foreground">
                          Wir unterstützen Sie bei allen alltäglichen medizinischen und hygienischen Belangen. Von der Planung 
                          einer unterstützten Morgenroutine über die pünktliche Medikamentenvergabe bis hin zur psychosozialen 
                          Pflegeberatung in Frankfurt.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-muted-foreground">
                          Die Koordination von Arztbesuchen, Amtsgängen und Pflegedienstleistungen ist für viele Betroffene gar 
                          nicht möglich. Unsere Avyta Pflegeberatung in Frankfurt übernimmt organisatorische Aufgaben rund um 
                          die Pflege, damit Sie Ihren Alltag trotz Einschränkungen bewältigen können.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-muted-foreground">
                          In Krisenzeiten sind wir Ihr zuverlässiger Ansprechpartner. Unsere Pflegeberatung in Frankfurt 
                          unterstützt Betroffene und Angehörige bei allen Fragen rund um die Pflege. Verschlechtert sich der 
                          Gesundheitszustand oder steigt der Pflegebedarf plötzlich an, ist unsere Pflegeberatung in Frankfurt 
                          für Sie da.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-display font-semibold text-foreground">
                          Erfahrene Berater
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        Unsere Pflegeberater verfügen über jahrelange Erfahrung 
                        im Bereich der häuslichen Pflege und stehen Ihnen mit 
                        umfassendem Fachwissen zur Seite.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Heart className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-display font-semibold text-foreground">
                          Individuelle Pflegepläne
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        Wir entwickeln Pflegepläne, die auf die persönlichen 
                        Bedürfnisse und Wünsche von Pflegebedürftigen 
                        zugeschnitten sind.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-display font-semibold text-foreground">
                          Immer erreichbar
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        In Krisenzeiten sind wir Ihr zuverlässiger Ansprechpartner. 
                        Bei plötzlich steigendem Pflegebedarf sind wir für Sie da.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Gemeinsam für mehr Lebensqualität */}
          <section className="py-12 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 md:mb-6">
                  Pflegeberatung Frankfurt – gemeinsam für mehr Lebensqualität
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Wir sind davon überzeugt, dass häusliche Pflege nicht nur eine Pflicht, sondern auch eine wertvolle Gelegenheit 
                  ist, bedürftigen Menschen die Unterstützung zukommen zu lassen, die sie brauchen. In unserer Avyta Pflegeberatung 
                  in Frankfurt begleiten wir pflegebedürftige Menschen und ihre Angehörigen in jeder Phase der häuslichen Pflege.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Herausforderungen wie die Alltagsgestaltung, Intensivpflege für bettlägerige Menschen oder medizinische 
                  Wundversorgung können Angehörige mit engagierten ambulanten Helfern und einem durchdachten Pflegeplan leichter 
                  bewältigen. Kontaktieren Sie unser freundliches Beratungsteam für alle Fragen rund um die Pflege. Mit individuellen 
                  Pflege- und Behandlungsplänen können Sie Ihren Alltag zu Hause auch mit Pflegebedarf selbstbestimmt bestreiten.
                </p>
                <CTADropdownButton />
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 md:mb-8 text-center">
                  Häufige Fragen
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-secondary/30 rounded-xl border border-border/50 px-6"
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

          {/* Other Services */}
          <section className="py-12 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 md:mb-8 text-center">
                Weitere Leistungen
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild>
                  <Link to="/leistungen/behandlungspflege">Behandlungspflege</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/grundpflege">Grundpflege</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/intensivpflege">Intensivpflege</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/haushaltshilfe">Haushaltshilfe</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/24-stunden">24-Stunden-Pflege</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/verhinderungspflege">Verhinderungspflege</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Pflegeberatung;
