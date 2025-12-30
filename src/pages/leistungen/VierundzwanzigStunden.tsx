import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Clock } from "lucide-react";
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
  "Begleitung zu Arztterminen",
  "Einkäufe erledigen",
  "Gesellschaft leisten",
];

const grundpflege = [
  "Zubereitung von Mahlzeiten",
  "Hilfe bei der Körperhygiene",
  "Unterstützung bei der Mobilität",
];

const behandlungspflege = [
  "Blutdruck- und Blutzuckermessung",
  "Medikamentenmanagement",
  "Stomaversorgung",
];

const intensivpflege = [
  "Lagerungsbehandlung",
  "Heimbeatmung",
  "24/7 Überwachung",
];

const faqs = [
  {
    question: "Was kostet die 24-Stunden-Pflege?",
    answer: "Die Kosten für die 24-Stunden-Pflege sind individuell und hängen vom Pflegebedarf ab. Wir erstellen Ihnen gerne einen individuellen Kostenvoranschlag, den Sie bei Ihrer Pflegekasse einreichen können. Die Pflege kann durch verschiedene Leistungen der Pflegekasse finanziert werden."
  },
  {
    question: "Was zeichnet die 24-Stunden-Pflege von Avyta aus?",
    answer: "Bei Avyta setzen wir auf Verlässlichkeit und Kompetenz. Mit über 10 Jahren Erfahrung in der Pflege können wir Ihnen eine Rundumversorgung bieten – von der Alltagshilfe über die Grundpflege bis hin zur Intensivpflege. Unser Team ist hochmotiviert, verlässlich und einfühlsam."
  },
  {
    question: "Welche Leistungen umfasst die 24-Stunden-Pflege?",
    answer: "Unsere 24-Stunden-Pflege deckt alle Bereiche ab: Alltagshilfe (Anträge, Begleitung, Einkäufe), Grundpflege (Ernährung, Hygiene, Mobilität), Behandlungspflege (Blutdruck/Blutzucker, Medikamente, Stomaversorgung) sowie Intensivpflege (Lagerung, Heimbeatmung) – je nach individuellem Bedarf."
  }
];

const VierundzwanzigStunden = () => {
  return (
    <>
      <Helmet>
        <title>24-Stunden-Pflege Frankfurt | Rund-um-die-Uhr Betreuung | AVYTA</title>
        <meta name="description" content="24-Stunden-Pflege in Frankfurt am Main. Rund-um-die-Uhr Betreuung zu Hause mit über 10 Jahren Erfahrung. Alltagshilfe, Grundpflege, Behandlungspflege & Intensivpflege." />
        <meta name="keywords" content="24 Stunden Pflege Frankfurt, Rund um die Uhr Betreuung, häusliche Pflege, Betreuung zu Hause" />
        <meta property="og:title" content="24-Stunden-Pflege Frankfurt | AVYTA Pflegedienst" />
        <meta property="og:description" content="24-Stunden-Pflege in Frankfurt. Rund-um-die-Uhr Betreuung zu Hause." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.avyta.de/leistungen/24-stunden-pflege" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  24-Stunden-Pflege in Frankfurt am Main
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Rund-um-die-Uhr Betreuung zu Hause mit über 10 Jahren Erfahrung. Unser hochmotiviertes, 
                  verlässliches und einfühlsames Team steht Ihnen zur Seite.
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
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                  Unser Leistungsspektrum in der 24-Stunden-Pflege
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                        Alltagshilfe
                      </h3>
                      <div className="space-y-2">
                        {alltagshilfe.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                        Grundpflege
                      </h3>
                      <div className="space-y-2">
                        {grundpflege.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                        Behandlungspflege
                      </h3>
                      <div className="space-y-2">
                        {behandlungspflege.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                        Intensivpflege
                      </h3>
                      <div className="space-y-2">
                        {intensivpflege.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                  <div>
                    <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                      Avyta – Ihr Partner für die 24-Stunden-Pflege
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Mit mehr als 10 Jahren Erfahrung in der Pflege sind wir Ihr verlässlicher Partner 
                      für die Rund-um-die-Uhr-Betreuung in Frankfurt am Main. Unser Team übernimmt alle 
                      anfallenden Aufgaben – von der Alltagshilfe bis zur Intensivpflege.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Wir versorgen Sie mit einem individuell abgestimmten Leistungspaket rund um die Uhr. 
                      So müssen Sie sich um Ihre Angehörigen nicht sorgen – wir sind für Sie da.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <Card className="bg-primary text-primary-foreground">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-display font-semibold mb-4">
                          Individueller Kostenvoranschlag
                        </h3>
                        <p className="opacity-90 mb-4">
                          Wir erstellen Ihnen gerne einen individuellen Kostenvoranschlag, 
                          den Sie bei Ihrer Pflegekasse einreichen können.
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
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                  Häufige Fragen zur 24-Stunden-Pflege
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

export default VierundzwanzigStunden;
