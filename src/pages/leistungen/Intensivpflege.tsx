import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Activity } from "lucide-react";
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
  "Hilfe im Haushalt und bei Anträgen",
];

const faqs = [
  {
    question: "Was beinhaltet die ausserklinische Intensivpflege in Frankfurt am Main?",
    answer: "Unsere ausserklinische Intensivpflege umfasst Lagerungsbehandlung, Mobilisation, Überwachung und Vitalisierung des Patienten, Legen von Blasenkathetern, endotracheales Absaugen sowie Heimbeatmung. Darüber hinaus unterstützen wir bei Anträgen, dem Besorgen von Medikamenten und im Haushalt."
  },
  {
    question: "Für wen ist die ausserklinische Intensivpflege geeignet?",
    answer: "Die ausserklinische Intensivpflege ist für Patienten geeignet, die eine besonders enge medizinische Betreuung benötigen – sei es altersbedingt, nach einem schweren Unfall oder wegen körperlicher und geistiger Einschränkungen. Die Pflege erfolgt im vertrauten häuslichen Umfeld."
  },
  {
    question: "Wie berücksichtigt Avyta kulturelle und religiöse Bedürfnisse?",
    answer: "Bei Avyta arbeiten wir nach dem Motto 'Von Menschen, für Menschen'. Unsere Mitarbeiter sind zum Großteil mehrsprachig und können sich auch mit Angehörigen verständigen, die kein oder nur wenig Deutsch können. Das kulturelle, religiöse und soziale Umfeld unserer Patienten berücksichtigen wir bei der Pflege."
  }
];

const Intensivpflege = () => {
  return (
    <>
      <Helmet>
        <title>Ausserklinische Intensivpflege in Frankfurt am Main | AVYTA</title>
        <meta name="description" content="Ausserklinische Intensivpflege in Frankfurt am Main. Heimbeatmung, Lagerung, Mobilisation & mehr durch erfahrene Intensivpflegekräfte. Über 10 Jahre Erfahrung. Jetzt beraten lassen!" />
        <meta name="keywords" content="Intensivpflege Frankfurt, Ausserklinische Intensivpflege, Beatmungspflege, Heimbeatmung, 24 Stunden Intensivpflege" />
        <meta property="og:title" content="Ausserklinische Intensivpflege Frankfurt | AVYTA Pflegedienst" />
        <meta property="og:description" content="Ausserklinische Intensivpflege in Frankfurt. Heimbeatmung und mehr im vertrauten Zuhause." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.avyta.de/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" />
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
                  Bei Avyta können wir für Sie oder Ihre Angehörigen das gesamte Spektrum an 
                  intensivpflegerischen Leistungen übernehmen. Mit mehr als 10 Jahren Erfahrung 
                  in der Pflege stehen wir Ihnen zur Seite.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                    Avyta übernimmt Ihre ausserklinische Intensivpflege
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Pflegebedürftig sein ist das eine – aber es gibt Fälle, in denen eine besonders enge 
                    medizinische Betreuung notwendig ist. Dennoch ist es auch für diese Patienten oft wichtig, 
                    nicht aus Ihrem gewohnten Umfeld gerissen zu werden.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Das eigene, vertraute Heim wird bevorzugt, egal ob es sich um eine altersbedingte Pflege, 
                    eine Pflege nach einem schweren Unfall oder wegen allgemein körperlicher und geistiger 
                    Einschränkungen handelt. Das eigene Zuhause kann ein Gefühl der Sicherheit und Beruhigung bieten.
                  </p>

                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    Unsere Leistungen in der Intensivpflege
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {leistungen.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                        Von Menschen, für Menschen
                      </h3>
                      <p className="text-muted-foreground">
                        In der ausserklinischen Intensivpflege geht es nicht nur um die medizinische Betreuung. 
                        Es geht auch darum, den betroffenen Patienten in vertrauter Umgebung die Pflege so 
                        angenehm wie möglich zu gestalten – wir sehen den Menschen, nicht nur den Patienten.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                        Mehrsprachiges Team
                      </h3>
                      <p className="text-muted-foreground">
                        Unsere Mitarbeiter sind zum Großteil mehrsprachig und können sich auch mit Angehörigen 
                        verständigen, die kein oder nur wenig Deutsch können. Wir berücksichtigen das kulturelle, 
                        religiöse und soziale Umfeld unserer Patienten.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold mb-4">
                        Individueller Pflegeplan
                      </h3>
                      <p className="opacity-90 mb-4">
                        Sprechen Sie mit uns, welche Pflegeleistungen in Ihrem individuellen Fall benötigt werden – 
                        wir erstellen gemeinsam einen Pflegeplan, der genau auf Ihre Situation abgestimmt ist.
                      </p>
                      <Button variant="secondary" asChild>
                        <a href="tel:+496915391405">
                          Jetzt anrufen
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                  Häufige Fragen zur Intensivpflege
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
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
                  <Link to="/leistungen/24-stunden-pflege">24-Stunden-Pflege</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/pflegeberatung-frankfurt">Pflegeberatung</Link>
                </Button>
                <Button variant="outline" asChild>
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

export default Intensivpflege;
