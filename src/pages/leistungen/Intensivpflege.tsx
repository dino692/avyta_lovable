import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
    answer: "Wichtig ist vor allem die individuelle Betreuung und das Eingehen auf die persönlichen Bedürfnisse des Patienten. Unser Team berücksichtigt das kulturelle, religiöse und soziale Umfeld und sorgt dafür, dass sich Patienten auch in schweren Situationen wohl und gut versorgt fühlen."
  },
  {
    question: "Was kostet die ausserklinische Intensivpflege in Frankfurt am Main?",
    answer: "Die Kosten für die ausserklinische Intensivpflege werden in der Regel von der Krankenkasse übernommen. Wir erstellen Ihnen ein individuelles Pflegeangebot und unterstützen Sie bei der Antragstellung zur Kostenübernahme."
  },
];

const Intensivpflege = () => {
  return (
    <>
      <Helmet>
        <title>Ausserklinische Intensivpflege in Frankfurt am Main | AVYTA</title>
        <meta name="description" content="Spezialisierte ausserklinische Intensivpflege in Frankfurt am Main. Professionelle Betreuung für beatmungspflichtige Patienten zu Hause. Über 10 Jahre Erfahrung. Jetzt beraten lassen!" />
        <meta name="keywords" content="Intensivpflege Frankfurt, Ausserklinische Intensivpflege, Beatmungspflege Frankfurt, Heimbeatmung" />
        <link rel="canonical" href="https://www.avyta.de/leistungen/intensivpflege" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Activity className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Ausserklinische Intensivpflege in Frankfurt am Main
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Mit mehr als 10 Jahren Erfahrung in der Pflege und einem hochmotivierten, verlässlichen und einfühlsamen Team stehen wir Ihnen zur Seite.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          {/* Intro Content */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Pflegebedürftig sein ist das eine – aber es gibt Fälle, in denen eine besonders enge medizinische Betreuung 
                  notwendig ist. Dennoch ist es auch für diese Patienten oft wichtig, nicht aus Ihrem gewohnten Umfeld gerissen 
                  zu werden. Hier kommt die ausserklinische Intensivpflege in Frankfurt am Main ins Spiel. Bei Avyta können wir 
                  für Sie oder Ihre Angehörigen das gesamte Spektrum an intensivpflegerischen Leistungen übernehmen.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sprechen Sie gerne mit uns dazu, welche Pflegeleistungen in Ihrem individuellen Fall benötigt werden – wir 
                  erstellen gemeinsam mit Ihnen einen Pflegeplan, der genau auf Ihre Situation abgestimmt ist.
                </p>
              </div>
            </div>
          </section>

          {/* Avyta übernimmt */}
          <section className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Avyta übernimmt Ihre ausserklinische Intensivpflege in Frankfurt am Main
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dank unserer langjährigen Erfahrung wissen wir bei Avyta, wie wichtig die ausserklinische Intensivpflege 
                  in Frankfurt am Main für die Betroffenen ist. Eigentlich spielen die Gründe für die Pflegebedürftigkeit 
                  nur eine zweitrangige Rolle, in jedem Fall möchten die Pflegebedürftigen es am liebsten vermeiden, im 
                  Krankenhaus oder einem Heim gepflegt zu werden. Das eigene, vertraute Heim wird bevorzugt, egal ob es 
                  sich um eine altersbedingte Pflege, eine Pflege nach einem schweren Unfall oder wegen allgemein körperlicher 
                  und geistiger Einschränkungen handelt. Das eigene Zuhause kann ein Gefühl der Sicherheit und Beruhigung bieten.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Diesem wichtigen Faktor geben wir mit unserer ausserklinischen Intensivpflege in Frankfurt am Main den nötigen 
                  Raum. Unsere speziell ausgebildeten Mitarbeiter können Ihnen auch bei komplexen intensivmedizinischen 
                  Pflegeleistungen helfen.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Darüber hinaus können wir selbstverständlich auch Unterstützung in weiteren Bereichen rund um den Alltag bieten, 
                  so zum Beispiel beim Ausfüllen von Anträgen, dem Besorgen von Medikamenten oder generell Hilfe im Haushalt 
                  leisten. So müssen Sie sich um Ihre Angehörigen nicht sorgen: Wir versorgen Sie mit einem individuell 
                  abgestimmten Leistungspaket rund um die Uhr.
                </p>

                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  Eine kurze Übersicht unserer Leistungen in der ausserklinischen Intensivpflege:
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {leistungen.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border/50">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Erfahrene Mitarbeiter */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                    Ausserklinische Intensivpflege in Frankfurt am Main durch erfahrene Mitarbeiter
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    In der ausserklinischen Intensivpflege in Frankfurt am Main geht es selbstverständlich nicht nur um die 
                    medizinische Betreuung. Es geht auch darum, den betroffenen Patienten in vertrauter Umgebung die Pflege 
                    so angenehm wie möglich zu gestalten. Dazu gehört eben auch, dass man den Menschen und nicht nur den 
                    Patienten sieht.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    „Von Menschen, für Menschen" – das ist das Motto bei Avyta und nach diesem Prinzip gehen wir auch die 
                    ausserklinische Intensivpflege in Frankfurt am Main an. Unsere Mitarbeiter sind zum Großteil mehrsprachig 
                    und können sich damit auch mit Angehörigen verständigen, die kein oder nur wenig Deutsch können. Ebenso 
                    ist es uns sehr wichtig, dass wir das kulturelle, religiöse und soziale Umfeld unserer Patienten 
                    berücksichtigen. Wir möchten, dass sich unsere Patienten auch in diesen Aspekten mit Ihrer Pflege wohlfühlen.
                  </p>
                  <p className="text-foreground font-medium mb-6">
                    Sie haben darüber hinaus noch Fragen rund um das Thema ausserklinische Intensivpflege in Frankfurt am Main 
                    mit Avyta? Sprechen Sie uns gerne an! Wir nehmen uns Zeit für Sie und klären mit Ihnen alle offenen Punkte 
                    zu unseren Leistungen.
                  </p>
                  <CTADropdownButton />
                </div>

                <div className="space-y-6">
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-display font-semibold text-foreground">
                          Mehrsprachiges Team
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        Unsere Mitarbeiter sind zum Großteil mehrsprachig und können 
                        sich auch mit Angehörigen verständigen, die kein oder nur 
                        wenig Deutsch können.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <FileCheck className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-display font-semibold text-foreground">
                          Über 10 Jahre Erfahrung
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        Mit mehr als 10 Jahren Erfahrung in der Pflege bieten wir 
                        sowohl das fachliche Know-how als auch die Menschlichkeit, 
                        die in einer guten Intensivpflege wichtig sind.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-display font-semibold text-foreground">
                          24/7 Versorgung
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
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
          <section className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                  Häufige Fragen
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-background rounded-xl border border-border/50 px-6"
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
          <section className="py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
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
                  <Link to="/leistungen/haushaltshilfe">Haushaltshilfe</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/24-stunden">24-Stunden-Pflege</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/pflegeberatung">Pflegeberatung</Link>
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

export default Intensivpflege;
