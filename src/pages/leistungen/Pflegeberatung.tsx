import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import CTADropdownButton from "@/components/CTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const leistungen = [
  "Koordination von Arztbesuchen und Amtsgängen",
  "Erstellung individueller Pflegepläne",
  "Psychosoziale Beratung",
  "Krisenintervention bei plötzlichem Mehrbedarf",
  "Beratung zu Pflegeleistungen und Finanzierung",
  "Hilfe bei der Antragstellung für Pflegegrade",
  "Vorbereitung auf die MDK-Begutachtung",
  "Anleitung für Angehörige",
];

const faqs = [
  {
    question: "Können Sie auch Angehörige zur Pflege von Intensivpatienten anleiten?",
    answer: "Ja, unsere erfahrenen Pflegeberater können Angehörige zur Pflege von Intensivpatienten anleiten. Wir zeigen Ihnen, wie Sie bestimmte Pflegemaßnahmen durchführen können und stehen Ihnen mit Rat und Tat zur Seite."
  },
  {
    question: "Unterstützen Sie auch bei vorübergehenden Einschränkungen nach Unfällen?",
    answer: "Selbstverständlich! Auch wenn Sie nach einem Unfall nur vorübergehend eingeschränkt sind, helfen wir Ihnen bei der Organisation der Pflege, koordinieren Arztbesuche und unterstützen Sie bei allen notwendigen Anträgen."
  },
  {
    question: "Kann ich die Pflegeberatung auch vor Beantragung einer Pflegestufe in Anspruch nehmen?",
    answer: "Ja, unsere Pflegeberatung steht Ihnen schon vor der Beantragung einer Pflegestufe zur Verfügung. Wir beraten Sie umfassend, welche Leistungen Ihnen zustehen und wie Sie diese am besten beantragen."
  }
];

const Pflegeberatung = () => {
  return (
    <>
      <Helmet>
        <title>Pflegeberatung Frankfurt | Individuelle Pflegepläne | AVYTA</title>
        <meta name="description" content="Professionelle Pflegeberatung in Frankfurt. Individuelle Pflegepläne, Koordination von Arztbesuchen, Hilfe bei Anträgen. Für maximale Selbstbestimmung. Jetzt beraten lassen!" />
        <meta name="keywords" content="Pflegeberatung Frankfurt, Pflegeplan, MDK Begutachtung, Pflegegrad beantragen, Pflegeorganisation" />
        <meta property="og:title" content="Pflegeberatung Frankfurt | AVYTA Pflegedienst" />
        <meta property="og:description" content="Professionelle Pflegeberatung in Frankfurt. Individuelle Pflegepläne für maximale Selbstbestimmung." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.avyta.de/leistungen/pflegeberatung-frankfurt" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Pflegeberatung in Frankfurt
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Wir unterstützen Sie bei der Organisation und Erstellung individueller Pflegepläne 
                  für maximale Selbstbestimmung. Unsere erfahrenen Berater helfen Ihnen durch den 
                  Dschungel der Pflegeversicherung.
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
                    Umfassende Pflegeberatung für Sie und Ihre Angehörigen
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Wenn ein Angehöriger pflegebedürftig wird, stehen viele Fragen im Raum: Welche 
                    Leistungen stehen uns zu? Wie beantrage ich einen Pflegegrad? Wie koordiniere ich 
                    Arztbesuche und Amtsgänge?
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Unsere Pflegeberatung in Frankfurt unterstützt Sie bei der kompletten Organisation – 
                    von der Erstellung individueller Pflegepläne über psychosoziale Beratung bis hin zur 
                    Krisenintervention bei plötzlichem Mehrbedarf.
                  </p>

                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    Unsere Beratungsleistungen
                  </h3>
                  <div className="space-y-3">
                    {leistungen.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                        §37.3 Beratungseinsatz
                      </h3>
                      <p className="text-muted-foreground">
                        Wenn Sie Pflegegeld beziehen, sind regelmäßige Beratungseinsätze vorgeschrieben. 
                        Wir führen diese Einsätze durch und beraten Sie dabei umfassend zu allen Fragen 
                        rund um die Pflege.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                        Krisenintervention
                      </h3>
                      <p className="text-muted-foreground">
                        Bei plötzlichem Mehrbedarf – etwa nach einem Krankenhausaufenthalt oder einer 
                        Verschlechterung des Gesundheitszustands – stehen wir Ihnen schnell und unkompliziert 
                        zur Seite.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold mb-4">
                        Kostenlose Erstberatung
                      </h3>
                      <p className="opacity-90 mb-4">
                        Unsere Pflegeberatung ist für Sie kostenlos. Vereinbaren Sie jetzt 
                        Ihren persönlichen Beratungstermin – bei Ihnen zu Hause oder telefonisch.
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
                  Häufige Fragen zur Pflegeberatung
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
                  <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main">Intensivpflege</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/24-stunden-pflege">24-Stunden-Pflege</Link>
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

export default Pflegeberatung;
