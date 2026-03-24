import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
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
import { generateFAQSchema } from "@/lib/faqSchema";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";
import { generateServiceSchema } from "@/lib/serviceSchema";
import TrustBadges from "@/components/TrustBadges";

const faqs = [
  {
    question: "Wie kann ich bettlägerige Angehörige mit einer Pflegeberatung in Frankfurt zu Hause pflegen?",
    answer: "Zur Versorgung und Pflege von Intensivpatienten zu Hause entwickeln wir bei Avyta spezielle Pflegepläne. Angehörige mit Bedarf leiten wir Schritt für Schritt dazu an, auch schwere medizinische Aufgaben selbst zu übernehmen. Ihre Angehörigen können Sie so in jeder Lebenslage im gewohnten Umfeld pflegen."
  },
  {
    question: "Wie kann die Avyta Pflegeberatung in Frankfurt eingeschränkte Menschen unterstützen?",
    answer: "Wird ein Familienmitglied krank, gibt es vieles zu regeln: Von kleinen Einkäufen über die pünktliche Medikamenteneinnahme bis hin zur Einstellung und Säuberung medizinischer Hilfsmittel. In der Pflegeberatung stellen wir individuelle Behandlungs- und Versorgungspläne zusammen und passen diese an Ihre Alltagsgewohnheiten und Termine an."
  },
  {
    question: "Wann sollte ich die Pflegeberatung in Frankfurt von Avyta in Anspruch nehmen?",
    answer: "Nach einem Unfall oder einem operativen Eingriff ist die Mobilität oft für Wochen eingeschränkt. Auch altersbedingt fällt Ihnen vielleicht auf, dass Sie Ihre medizinische und alltägliche Versorgung nicht mehr ohne Unterstützung bewältigen können. Kontaktieren Sie unser freundliches Beratungsteam gern schon vor der Beantragung einer Pflegestufe. Wir begleiten Sie auf Ihrem gesamten Krankheits- und Genesungsweg."
  },
];

const Pflegeberatung = () => {
  return (
    <>
      <Helmet>
        <title>Pflegeberatung in Frankfurt – Avyta mit Herz an Ihrer Seite</title>
        <meta name="description" content="Jeder Mensch braucht manchmal eine helfende Hand mit Herz. ✓ In unserer Avyta Pflegeberatung in Frankfurt planen wir Pflege nach Ihren Bedürfnissen." />
        <meta name="keywords" content="Pflegeberatung Frankfurt, Pflegeplanung, Häusliche Pflege Beratung" />
        <link rel="canonical" href="https://www.avyta.de/leistungen/pflegeberatung-frankfurt" />
        <meta property="og:title" content="Pflegeberatung in Frankfurt – Avyta mit Herz an Ihrer Seite" />
        <meta property="og:description" content="Jeder Mensch braucht manchmal eine helfende Hand mit Herz. In unserer Avyta Pflegeberatung in Frankfurt planen wir Pflege nach Ihren Bedürfnissen." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Leistungen", url: "https://www.avyta.de/leistungen" },
          { name: "Pflegeberatung", url: "https://www.avyta.de/leistungen/pflegeberatung-frankfurt" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(faqs)}</script>
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
                  In hektischen Metropolen wie in <strong>Frankfurt am Main</strong> fällt es vielen Familien schwer, Haushalt, Job und Pflege von Angehörigen im Alltag zu bewältigen. Wird ein Familienmitglied krank, fühlen sich Angehörige oft überfordert und alleingelassen. Wenn Aufgaben wie die <em><strong>Vergabe von Injektionen</strong></em> und <em><strong>Medikamenten</strong></em>, <em><strong>Wundversorgung</strong></em> oder <em><strong>Blutzuckerkontrolle</strong></em> Angehörigen über den Kopf wachsen, ist es beruhigend, einen <strong>erfahrenen Partner</strong> an ihrer Seite zu wissen. <Link to="/ueber-uns" className="text-primary hover:underline font-medium">Wir von Avyta</Link> stellen Familien und Menschen mit <strong>Pflegebedarf</strong> die nötigen Ressourcen für <strong>individuelle Pflege</strong> zur Verfügung. Unsere <strong>Pflegeberatung in Frankfurt</strong> steht für Angehörige und Menschen mit körperlichen oder geistigen Einschränkungen offen.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
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
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                  Ein <em><strong>Unfall</strong></em>, eine <em><strong>Operation</strong></em>, <em><strong>Krankheit</strong></em>, oder das <em><strong>Alter</strong></em>: Manchmal können Menschen ihren Alltag schleichend oder ganz plötzlich nicht mehr wie gewohnt bewältigen. Für viele Familien kommt die stationäre Unterbringung von Angehörigen jedoch nicht in Frage. In unserer <strong>Pflegeberatung in Frankfurt</strong> entwickeln <strong>individuelle Pflegepläne</strong>, die auf die persönlichen Bedürfnisse und Wünsche von <strong>Pflegebedürftigen</strong> zugeschnitten sind. <strong>Unsere Berater</strong> arbeiten eng mit Familien und Betroffenen zusammen, um sicherzustellen, dass <Link to="/leistungen/behandlungspflege" className="text-primary hover:underline font-medium">die Pflege</Link> im Einklang mit den individuellen Vorlieben und Gewohnheiten erfolgt. Viele Angehörige möchten so viel wie möglich selbst für ihre Lieben erledigen. <strong>Unsere Pflegeberatung</strong> ist darauf ausgerichtet, Menschen mit körperlichen und geistigen Einschränkungen so viel Selbstbestimmung wie möglich zu lassen. Mit <strong>ambulanten Pflegediensten</strong> unterstützen wir Sie auch bei der <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" className="text-primary hover:underline font-medium">intensivmedizinischen Pflege</Link> zu Hause. Unsere <strong>Avyta Pflegeberatung</strong> in Frankfurt ermöglicht Pflegebedürftigen auch in schweren Zeiten einen normalen Alltag zu Hause.
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
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                    <strong>Unsere Pflegeberater</strong> verfügen über <strong>jahrelange Erfahrung</strong> im Bereich der <strong>häuslichen Pflege</strong>. Wir stehen Ihnen mit <strong>umfassendem Fachwissen</strong> und <strong>Mitgefühl</strong> zur Seite und entwickeln <strong>Pflegepläne</strong>, die Betroffene und Angehörige entlasten. Während des <Link to="/leistungen/24-stunden-pflege" className="text-primary hover:underline font-medium">gesamten Pflegezeitraums</Link> ist unsere <strong>Pflegeberatung in Frankfurt</strong> Ihr Ansprechpartner für alle Fragen rund um die <strong>Behandlungs</strong>- und <strong>Alltagspflege</strong>. Gemeinsam arbeiten wir daran, die Lebensqualität von Menschen in der Heimpflege zu erhalten und zu verbessern.
                  </p>

                  <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-secondary/30 rounded-xl">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Wir unterstützen Sie bei allen alltäglichen <em><strong>medizinischen</strong></em> und <em><strong>hygienischen</strong></em> Belangen. Von der Planung einer unterstützten Morgenroutine über die pünktliche <em><strong>Medikamentenvergabe</strong></em> bis hin zur psychosozialen <em><strong>Pflegeberatung</strong></em> in Frankfurt.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-secondary/30 rounded-xl">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Die <strong>Koordination</strong> von <em><strong>Arztbesuchen</strong></em>, <em><strong>Amtsgängen</strong></em> und <em><strong>Pflegedienstleistungen</strong></em> ist für viele Betroffene gar nicht möglich. Unsere <strong>Avyta Pflegeberatung</strong> in Frankfurt übernimmt <em><strong>organisatorische</strong></em> Aufgaben rund um die <strong>Pflege</strong>, damit Sie Ihren Alltag trotz Einschränkungen bewältigen können.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-secondary/30 rounded-xl">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm md:text-base text-muted-foreground">
                          In Krisenzeiten sind wir Ihr <strong>zuverlässiger Ansprechpartner</strong>. Unsere <strong>Pflegeberatung in Frankfurt</strong> unterstützt Betroffene und Angehörige bei allen Fragen rund um die Pflege. Verschlechtert sich der Gesundheitszustand oder steigt der Pflegebedarf plötzlich an, ist unsere Pflegeberatung in Frankfurt <strong>für Sie da</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-foreground font-medium mb-4 md:mb-6">
                    Wir stehen Ihnen <strong>gerne zur Verfügung</strong> Rufen Sie uns an vereinbaren einen unverbindlichen Termin - <strong>gerne bei Ihnen zu Hause</strong>.
                  </p>
                  <CTADropdownButton />
                </div>

                <div className="space-y-4 md:space-y-6 mt-6 lg:mt-0">
                  <Card variant="elevated">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center">
                          <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">
                          Erfahrene Berater
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Unsere Pflegeberater verfügen über jahrelange Erfahrung 
                        im Bereich der häuslichen Pflege und stehen Ihnen mit 
                        umfassendem Fachwissen zur Seite.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center">
                          <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">
                          Individuelle Pflegepläne
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Wir entwickeln Pflegepläne, die auf die persönlichen 
                        Bedürfnisse und Wünsche von Pflegebedürftigen 
                        zugeschnitten sind.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center">
                          <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">
                          Immer erreichbar
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
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
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                  Wir sind davon überzeugt, dass <strong>häusliche Pflege</strong> nicht nur eine Pflicht, sondern auch eine wertvolle Gelegenheit ist, bedürftigen Menschen die Unterstützung zukommen zu lassen, die sie brauchen. In unserer <strong>Avyta Pflegeberatung in Frankfurt</strong> begleiten wir pflegebedürftige Menschen und ihre Angehörigen in jeder Phase der häuslichen Pflege. Herausforderungen wie die Alltagsgestaltung, <strong>Intensivpflege</strong> für bettlägerige Menschen oder medizinische Wundversorgung können Angehörige mit engagierten ambulanten Helfern und einem durchdachten Pflegeplan leichter bewältigen. <Link to="/kontakt" className="text-primary hover:underline font-medium">Kontaktieren Sie unser freundliches Beratungsteam</Link> für alle Fragen rund um die Pflege. Mit <strong>individuellen Pflege- und Behandlungsplänen</strong> können Sie Ihren Alltag zu Hause auch mit <strong>Pflegebedarf</strong> selbstbestimmt bestreiten.
                </p>
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
                <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
                  <AccordionItem 
                    value="item-0"
                    className="bg-secondary/30 rounded-xl border border-border/50 px-4 md:px-6"
                  >
                    <AccordionTrigger className="text-left text-sm md:text-base font-medium text-foreground hover:text-primary py-3 md:py-4">
                      Wie kann ich bettlägerige Angehörige mit einer Pflegeberatung in Frankfurt zu Hause pflegen?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground pb-3 md:pb-4">
                      Zur Versorgung und Pflege von <strong>Intensivpatienten</strong> zu Hause entwickeln wir bei Avyta <strong>spezielle Pflegepläne</strong>. Angehörige mit Bedarf leiten wir Schritt für Schritt dazu an, auch <strong>schwere medizinische Aufgaben</strong> selbst zu übernehmen. <strong>Ihre Angehörigen</strong> können Sie so in jeder Lebenslage im gewohnten Umfeld pflegen.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem 
                    value="item-1"
                    className="bg-secondary/30 rounded-xl border border-border/50 px-4 md:px-6"
                  >
                    <AccordionTrigger className="text-left text-sm md:text-base font-medium text-foreground hover:text-primary py-3 md:py-4">
                      Wie kann die Avyta Pflegeberatung in Frankfurt eingeschränkte Menschen unterstützen?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground pb-3 md:pb-4">
                      Wird ein Familienmitglied krank, gibt es vieles zu regeln: Von <em><strong>kleinen Einkäufen</strong></em> über die <em><strong>pünktliche Medikamenteneinnahme</strong></em> bis hin zur <em><strong>Einstellung und Säuberung</strong></em> medizinischer Hilfsmittel. In der <strong>Pflegeberatung</strong> stellen wir <strong>individuelle Behandlungs- und Versorgungspläne</strong> zusammen und <strong>passen diese an</strong> Ihre Alltagsgewohnheiten und Termine an.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem 
                    value="item-2"
                    className="bg-secondary/30 rounded-xl border border-border/50 px-4 md:px-6"
                  >
                    <AccordionTrigger className="text-left text-sm md:text-base font-medium text-foreground hover:text-primary py-3 md:py-4">
                      Wann sollte ich die Pflegeberatung in Frankfurt von Avyta in Anspruch nehmen?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground pb-3 md:pb-4">
                      Nach einem <strong>Unfall</strong> oder einem <strong>operativen Eingriff</strong> ist die Mobilität oft für Wochen eingeschränkt. Auch <strong>altersbedingt</strong> fällt Ihnen vielleicht auf, dass Sie Ihre medizinische und alltägliche Versorgung nicht mehr ohne Unterstützung bewältigen können. Kontaktieren Sie unser freundliches Beratungsteam gern schon vor der Beantragung einer Pflegestufe. Wir begleiten Sie auf Ihrem gesamten Krankheits- und Genesungsweg.
                    </AccordionContent>
                  </AccordionItem>
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
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/behandlungspflege">Behandlungspflege</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/grundpflege">Grundpflege</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main">Intensivpflege</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/haushaltshilfe">Haushaltshilfe</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/24-stunden-pflege">24-Stunden-Pflege</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/verhinderungspflege-frankfurt">Verhinderungspflege</Link>
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

export default Pflegeberatung;
