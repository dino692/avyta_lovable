import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Activity, Users, FileCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import CTADropdownButton from "@/components/CTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generateFAQSchema } from "@/lib/faqSchema";

const leistungen = [
  "Lagerungsbehandlung",
  "Mobilisation",
  "Überwachung des Patienten",
  "Vitalisierung des Patienten",
  "Legen eines Blasenkatheters",
  "Endotracheales Absaugen",
  "Heimbeatmung",
  "uvm",
];

const faqs = [
  {
    question: "Was beinhaltet die ausserklinische Intensivpflege in Frankfurt am Main?",
    answer: "Unsere ausserklinische Intensivpflege in Frankfurt am Main beinhaltet alle wichtigen medizinischen Leistungen der häuslichen Intensivpflege bis hin zur Beatmung. Darüber hinaus können wir auch Unterstützung bei Aufgaben wie der Antragsstellung oder im Haushalt bieten. Gerne erstellen wir Ihnen ein individuelles Pflegeangebot."
  },
  {
    question: "Was ist wichtig bei der ausserklinischen Intensivpflege in Frankfurt am Main?",
    answer: "Für uns bei Avyta ist in der ausserklinischen Intensivpflege in Frankfurt am Main neben den medizinischen Leistungen vor allem der Mensch wichtig. Wir möchten, dass sich unsere Patienten wohlfühlen und beachten daher stets auch den sprachlichen, sozialen, kulturellen und religiösen Kontext unserer Patienten."
  },
  {
    question: "Was kostet die ausserklinische Intensivpflege in Frankfurt am Main?",
    answer: "Wir bei Avyta wissen, dass es keinen pauschalen Patienten gibt. Genau so kann es auch keine pauschale Pflegeleistung geben. Wir schauen uns gemeinsam mit Ihnen Ihre individuelle Situation an und erstellen dann einen ebenso individuellen Pflegeplan mit einem Kostenvoranschlag für Sie. Dieser kann dann von der Kranken- oder Pflegekasse genehmigt und dort auch direkt abgerechnet werden."
  },
];

const Intensivpflege = () => {
  return (
    <>
      <Helmet>
        <title>Ausserklinische Intensivpflege in Frankfurt am Main | AVYTA</title>
        <meta name="description" content="Spezialisierte ausserklinische Intensivpflege in Frankfurt am Main. Professionelle Betreuung für beatmungspflichtige Patienten zu Hause. Über 12 Jahre Erfahrung. Jetzt beraten lassen!" />
        <meta name="keywords" content="Intensivpflege Frankfurt, Ausserklinische Intensivpflege, Beatmungspflege Frankfurt, Heimbeatmung" />
        <link rel="canonical" href="https://www.avyta.de/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" />
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
                  <Activity className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 md:mb-6">
                  Ausserklinische Intensivpflege in Frankfurt am Main
                </h1>
                <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                  Pflegebedürftig sein ist das eine – aber es gibt Fälle, in denen eine besonders enge medizinische Betreuung notwendig ist. Dennoch ist es auch für diese Patienten oft wichtig, nicht aus Ihrem gewohnten Umfeld gerissen zu werden. Hier kommt die <strong>ausserklinische Intensivpflege in Frankfurt am Main</strong> ins Spiel. Bei <Link to="/team" className="text-primary hover:underline font-medium">Avyta</Link> können wir für Sie oder Ihre Angehörigen das gesamte Spektrum an <strong>intensivpflegerischen Leistungen</strong> übernehmen. Mit mehr als <strong>12 Jahren Erfahrung in der Pflege</strong> und einem <em><strong>hochmotivierten, verlässlichen</strong></em> und <em><strong>einfühlsamen</strong></em> Team stehen wir Ihnen in der <strong>ausserklinischen Intensivpflege</strong> in Frankfurt am Main zur Seite.
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
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Sprechen Sie gerne mit uns dazu, welche <strong>Pflegeleistungen</strong> in Ihrem individuellen Fall benötigt werden – wir erstellen <Link to="/leistungen/pflegeberatung-frankfurt" className="text-primary hover:underline font-medium">gemeinsam mit Ihnen einen Pflegeplan</Link>, der genau auf Ihre Situation abgestimmt ist.
                </p>
              </div>
            </div>
          </section>

          {/* Avyta übernimmt */}
          <section className="py-12 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 md:mb-6">
                  Avyta übernimmt Ihre ausserklinische Intensivpflege in Frankfurt am Main
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                  Dank unserer <strong>langjährigen Erfahrung</strong> wissen wir bei Avyta, wie wichtig die ausserklinische <strong>Intensivpflege in Frankfurt am Main</strong> für die Betroffenen ist. Eigentlich spielen die <strong>Gründe für die Pflegebedürftigkeit</strong> nur eine zweitrangige Rolle, in jedem Fall möchten die Pflegebedürftigen es am liebsten vermeiden, im Krankenhaus oder einem Heim gepflegt zu werden. Das eigene, vertraute Heim wird bevorzugt, egal ob es sich um eine <strong>altersbedingte Pflege</strong>, eine Pflege nach einem schweren Unfall oder wegen allgemein körperlicher und geistiger Einschränkungen handelt. Das eigene Zuhause kann ein Gefühl der <strong>Sicherheit und Beruhigung</strong> bieten.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
                  Diesem wichtigen Faktor geben wir mit unserer <strong>ausserklinischen Intensivpflege in Frankfurt am Main</strong> den nötigen Raum. Unsere speziell ausgebildeten Mitarbeiter können Ihnen auch bei komplexen intensivmedizinischen Pflegeleistungen helfen.
                </p>

                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-4 md:mb-6">
                  Eine kurze Übersicht unserer Leistungen in der ausserklinischen Intensivpflege in Frankfurt am Main:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-6 md:mb-8">
                  {leistungen.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 md:p-3 bg-background rounded-lg border border-border/50">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                      <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                  Darüber hinaus können wir selbstverständlich auch Unterstützung in weiteren Bereichen rund um den Alltag bieten, so zum Beispiel beim <em><strong>Ausfüllen von Anträgen</strong></em>, dem <em><strong>Besorgen von Medikamenten</strong></em> oder <em><strong>generell Hilfe im Haushalt</strong></em> leisten. So müssen Sie sich um Ihre Angehörigen nicht sorgen: <strong>Wir versorgen Sie</strong> mit einem individuell abgestimmten Leistungspaket rund um die Uhr.
                </p>
                <p className="text-sm md:text-base text-foreground font-medium mb-4 md:mb-6">
                  Wir stehen Ihnen <strong>gerne zur Verfügung</strong> Rufen Sie uns an vereinbaren einen unverbindlichen Termin - <strong>gerne bei Ihnen zu Hause</strong>.
                </p>
                <CTADropdownButton />
              </div>
            </div>
          </section>

          {/* Erfahrene Mitarbeiter */}
          <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 md:mb-6">
                    Ausserklinische Intensivpflege in Frankfurt am Main durch erfahrene Mitarbeiter
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                    In der <strong>ausserklinischen Intensivpflege</strong> in Frankfurt am Main geht es selbstverständlich nicht nur um die medizinische Betreuung. Es geht auch darum, den betroffenen Patienten in vertrauter Umgebung die Pflege so angenehm wie möglich zu gestalten. Dazu gehört eben auch, dass man den Menschen und nicht nur den Patienten sieht.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                    „Von Menschen, für Menschen" – das ist das <strong>Motto bei Avyta</strong> und nach diesem Prinzip gehen wir auch die <strong>ausserklinische Intensivpflege in Frankfurt am Main</strong> an. <Link to="/karriere" className="text-primary hover:underline font-medium">Unsere Mitarbeiter</Link> sind zum Großteil <strong>mehrsprachig</strong> und können sich damit auch mit Angehörigen verständigen, die <strong>kein oder nur wenig Deutsch</strong> können. Ebenso ist es uns sehr wichtig, dass wir das <em><strong>kulturelle</strong></em>, <em><strong>religiöse</strong></em> und <em><strong>soziale Umfeld</strong></em> unserer Patienten berücksichtigen. Wir möchten, dass sich unsere Patienten auch in diesen Aspekten mit Ihrer Pflege wohlfühlen.
                  </p>
                  <p className="text-sm md:text-base text-foreground font-medium mb-4 md:mb-6">
                    Sie haben darüber hinaus noch Fragen rund um das Thema ausserklinische <strong>Intensivpflege in Frankfurt am Main</strong> mit Avyta? <Link to="/kontakt" className="text-primary hover:underline font-medium">Sprechen Sie uns gerne an!</Link> Wir nehmen uns Zeit für Sie und klären mit Ihnen alle offenen Punkte zu unseren Leistungen.
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
                          Mehrsprachiges Team
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Unsere Mitarbeiter sind zum Großteil mehrsprachig und können 
                        sich auch mit Angehörigen verständigen, die kein oder nur 
                        wenig Deutsch können.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center">
                          <FileCheck className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">
                          Über 12 Jahre Erfahrung
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Mit mehr als 12 Jahren Erfahrung in der Pflege bieten wir 
                        sowohl das fachliche Know-how als auch die Menschlichkeit, 
                        die in einer guten Intensivpflege wichtig sind.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center">
                          <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">
                          24/7 Versorgung
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Wir versorgen Sie mit einem individuell abgestimmten 
                        Leistungspaket rund um die Uhr – immer wenn Sie uns 
                        brauchen.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 md:mb-8 text-center">
                  Häufige Fragen
                </h2>
                <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
                  <AccordionItem 
                    value="item-0"
                    className="bg-background rounded-xl border border-border/50 px-4 md:px-6"
                  >
                    <AccordionTrigger className="text-left text-sm md:text-base font-medium text-foreground hover:text-primary py-3 md:py-4">
                      Was beinhaltet die ausserklinische Intensivpflege in Frankfurt am Main?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground pb-3 md:pb-4">
                      Unsere ausserklinische Intensivpflege in Frankfurt am Main beinhaltet alle wichtigen <strong>medizinischen Leistungen</strong> der häuslichen Intensivpflege bis in hin zur Beatmung. Darüber hinaus können wir auch <strong>Unterstützung bei Aufgaben</strong> wie der Antragsstellung oder im Haushalt bieten. Gerne erstellen wir Ihnen ein <strong>individuelles Pflegeangebot</strong>.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem 
                    value="item-1"
                    className="bg-background rounded-xl border border-border/50 px-4 md:px-6"
                  >
                    <AccordionTrigger className="text-left text-sm md:text-base font-medium text-foreground hover:text-primary py-3 md:py-4">
                      Was ist wichtig bei der ausserklinischen Intensivpflege in Frankfurt am Main?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground pb-3 md:pb-4">
                      Für uns bei Avyta ist in der ausserklinischen Intensivpflege in Frankfurt am Main neben den <strong>medizinischen Leistungen</strong> vor allem <strong>der Mensch wichtig</strong>. Wir möchten, dass sich unsere Patienten <strong>wohlfühlen</strong> und beachten daher stets auch den <em><strong>sprachlichen</strong></em>, <em><strong>sozialen</strong></em>, <em><strong>kulturellen</strong></em> und <em><strong>religiösen</strong></em> Kontext <strong>unserer Patienten</strong>.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem 
                    value="item-2"
                    className="bg-background rounded-xl border border-border/50 px-4 md:px-6"
                  >
                    <AccordionTrigger className="text-left text-sm md:text-base font-medium text-foreground hover:text-primary py-3 md:py-4">
                      Was kostet die ausserklinische Intensivpflege in Frankfurt am Main?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground pb-3 md:pb-4">
                      Wir bei Avyta wissen, dass es keinen pauschalen Patienten gibt. Genau so kann es auch keine pauschale Pflegeleistung geben. Wir schauen uns gemeinsam mit Ihnen Ihre <strong>individuelle Situation</strong> an und erstellen dann einen ebenso <strong>individuellen Pflegeplan</strong> mit einem <strong>Kostenvoranschlag</strong> für Sie. Dieser kann dann von der <strong>Kranken- oder Pflegekasse</strong> genehmigt und dort auch direkt abgerechnet werden.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* Other Services */}
          <section className="py-12 md:py-24">
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
                  <Link to="/leistungen/haushaltshilfe">Haushaltshilfe</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/24-stunden-pflege">24-Stunden-Pflege</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/pflegeberatung-frankfurt">Pflegeberatung</Link>
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

export default Intensivpflege;
