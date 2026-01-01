import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Clock, Users, FileCheck, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import CTADropdownButton from "@/components/CTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const alltagshilfe = [
  "Hilfe beim Ausfüllen von Anträgen",
  "Hilfe und Gesellschaft bei Spaziergängen",
  "Hilfe bei der Besorgung von Medikamenten",
  "Hilfe bei Services im Alltag wie z.B. Friseurbesuchen",
  "uvm",
];

const grundpflege = [
  "Unterstützung beim Trinken und Essen",
  "Unterstützung bei der Körperpflege und bei Ausscheidungen",
  "Unterstützung bei der Mobilität",
  "Unterstützung beim An- und Auskleiden",
  "Unterstützung im Haushalt",
  "uvm",
];

const behandlungspflege = [
  "Kontrolle von Blutdruck und Blutzucker",
  "Perenterale und enterale Ernährung",
  "Wechseln bzw. An- und Ausziehen von Kompressionsstrümpfen",
  "Bereitstellen und Verabreichen von Medikamenten",
  "Injektionen und Infusionen",
  "Tracheostomaversorgung",
  "Versorgung von Anus Praeter und Urostoma",
  "uvm",
];

const intensivpflege = [
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
    question: "Was kostet eine 24 Stunden Pflege in Frankfurt?",
    answer: "Jeder Mensch ist individuell und genau so individuell sind auch unsere Pflegeangebote. Wir stellen Ihnen stets ein eigens auf Sie zugeschnittenes Pflegepaket vor und machen Ihnen dazu einen Kostenvoranschlag, mit dem Sie bei Ihrer Kranken- oder Pflegekasse einen Antrag auf Kostenübernahme stellen können – dort erfolgt dann auch direkt die Abrechnung mit uns."
  },
  {
    question: "Was zeichnet eine gute 24 Stunden Pflege in Frankfurt aus?",
    answer: "Eine gute 24 Stunden Pflege zeichnet sich durch qualifiziertes, einfühlsames Personal aus, das die individuellen Bedürfnisse des Pflegebedürftigen berücksichtigt. Bei Avyta achten wir besonders auf das kulturelle, religiöse und soziale Umfeld unserer Patienten und bieten eine Rundumversorgung mit Herz und Kompetenz."
  },
  {
    question: "Was gehört zum Aufgabengebiet der 24 Stunden Pflege in Frankfurt?",
    answer: "Das Aufgabengebiet umfasst die gesamte Bandbreite von einfachen Hilfstätigkeiten im Alltag über Grundpflege und Behandlungspflege bis hin zu komplexen Leistungen der Intensivpflege. Wir passen unser Leistungspaket individuell an Ihre Bedürfnisse an."
  },
];

const VierundzwanzigStunden = () => {
  return (
    <>
      <Helmet>
        <title>24 Stunden Pflege in Frankfurt mit Avyta | AVYTA Pflegedienst</title>
        <meta name="description" content="24 Stunden Pflege in Frankfurt von Avyta. Rund-um-die-Uhr Betreuung zu Hause durch qualifizierte Pflegekräfte. Über 10 Jahre Erfahrung. Jetzt beraten lassen!" />
        <meta name="keywords" content="24 Stunden Pflege Frankfurt, Rund um die Uhr Pflege, Häusliche Pflege Frankfurt" />
        <link rel="canonical" href="https://www.avyta.de/leistungen/24-stunden-pflege" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-12 md:py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-14 h-14 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 md:mb-6">
                  24 Stunden Pflege in Frankfurt mit Avyta
                </h1>
                <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                  Wir sind rund um die Uhr für Sie ansprechbar und können Ihnen mit viel Herz und Kompetenz bei allen Pflegeleistungen unter die Arme greifen.
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
                  Eine Pflegebedürftigkeit kann jeden treffen. Fortschreitendes Alter, geistige oder körperliche Einschränkungen 
                  als auch ein schwerer Unfall können dazu führen, dass die pflegerische Betreuung nötig wird. Gerade in schweren 
                  Fällen ist es beruhigend, immer Hilfe an Ihrer Seite zu wissen – die 24 Stunden Pflege in Frankfurt von Avyta 
                  leistet genau das für Sie.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mit mehr als 10 Jahren Erfahrung im Pflegebereich bieten wir sowohl das fachliche Know-how als auch die 
                  Menschlichkeit, die in einer guten Pflege wichtig sind. Sprechen Sie gern mit uns über Ihre Vorstellungen 
                  zur 24 Stunden Pflege in Frankfurt.
                </p>
              </div>
            </div>
          </section>

          {/* Leistungen */}
          <section className="py-12 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 md:mb-6">
                  Leistungen in der 24 Stunden Pflege in Frankfurt
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
                  Als Anbieter für die 24 Stunden Pflege in Frankfurt ist es uns bei Avyta wichtig, dass wir Ihnen ein individuell 
                  abgestimmtes Leistungspaket bieten, welches sowohl Ihre Bedürfnisse hinsichtlich der Pflege berücksichtigt, als 
                  auch Ihren kulturellen, sozialen und religiösen Hintergrund. Wir setzen ganz auf unser Motto der Pflege „von 
                  Menschen, für Menschen" und setzen Sie oder Ihre Angehörigen in den Mittelpunkt unserer Arbeit. Eine gute 24 
                  Stunden Pflege in Frankfurt bedeutet auch, dass wir von einfachen Hilfstätigkeiten bis hin zu komplexen 
                  Leistungen der Intensivpflege alle Bereiche abdecken können.
                </p>

                {/* Alltagshilfe */}
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3 md:mb-4">
                    Im Bereich der einfachen Alltagshilfe können wir für Sie die folgenden Leistungen übernehmen:
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {alltagshilfe.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 md:p-3 bg-background rounded-lg border border-border/50">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grundpflege */}
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3 md:mb-4">
                    In der Grundpflege können unsere Leistungen für Sie so aussehen:
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {grundpflege.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 md:p-3 bg-background rounded-lg border border-border/50">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Behandlungspflege */}
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3 md:mb-4">
                    Diese Aufgaben können in der Behandlungspflege abgedeckt werden:
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {behandlungspflege.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 md:p-3 bg-background rounded-lg border border-border/50">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Intensivpflege */}
                <div>
                  <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3 md:mb-4">
                    In der Intensivpflege decken wir unter anderem folgende Bereiche ab:
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {intensivpflege.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 md:p-3 bg-background rounded-lg border border-border/50">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mitarbeiter */}
          <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 md:mb-6">
                    24 Stunden Pflege in Frankfurt: Unsere Mitarbeiter sind für Sie da
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                    Über die Pflege wird gerade in letzter Zeit viel gesprochen – der demografische Wandel sorgt für immer 
                    mehr pflegebedürftige Patienten und immer weniger Arbeitskräfte in dem Bereich. Wir können mit Stolz 
                    sagen, dass wir mit einem starken Team aufgestellt sind, um Ihre 24 Stunden Pflege in Frankfurt ohne 
                    Probleme abdecken zu können.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
                    Unser Team besteht aus hochmotivierten und einfühlsamen Pflegefachkräften, Pflegehelfern und 
                    Haushaltshilfskräften, die Sie und Ihre Angehörigen unterstützen. Da viele unsere Mitarbeiter 
                    mehrsprachig sind, können wir auch Patienten betreuen, die kein oder nur wenig Deutsch sprechen. 
                    Vertrauen Sie uns in der 24 Stunden Pflege in Frankfurt – gerne besprechen wir mit Ihnen ein 
                    individualisiertes Leistungspaket und klären Ihre Fragen.
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
                          Starkes Team
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Unser Team besteht aus hochmotivierten und einfühlsamen 
                        Pflegefachkräften, Pflegehelfern und Haushaltshilfskräften.
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
                          Über 10 Jahre Erfahrung
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Mit mehr als 10 Jahren Erfahrung im Pflegebereich bieten wir 
                        sowohl das fachliche Know-how als auch die Menschlichkeit.
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
                          Mehrsprachiges Team
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Viele unserer Mitarbeiter sind mehrsprachig und können auch 
                        Patienten betreuen, die kein oder nur wenig Deutsch sprechen.
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
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-background rounded-xl border border-border/50 px-4 md:px-6"
                    >
                      <AccordionTrigger className="text-left text-sm md:text-base font-medium text-foreground hover:text-primary py-3 md:py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm md:text-base text-muted-foreground pb-3 md:pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
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
                  <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main">Intensivpflege</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/haushaltshilfe">Haushaltshilfe</Link>
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
        <Footer />
      </div>
    </>
  );
};

export default VierundzwanzigStunden;
