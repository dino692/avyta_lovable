import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import CTADropdownButton from "@/components/CTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const leistungen = [
  "Medikamentenmanagement: Wir gewährleisten, dass Ihre Angehörigen ihre Medikamente pünktlich und korrekt einnehmen",
  "Verbandswechsel und Wundversorgung: Unsere qualifizierten Pflegekräfte sorgen für eine fachgerechte Versorgung von Wunden",
  "Injektionen und Infusionen: Wir führen medizinische Injektionen und Infusionen durch",
  "Kontrolle von Vitalwerten: Wir überwachen und dokumentieren regelmäßig wichtige Vitalparameter",
  "Krankenhausnachsorge: Bei Bedarf begleiten wir Ihre Angehörigen bei Arztbesuchen",
  "Stomaversorgung",
  "Katheterversorgung",
  "Portversorgung",
];

const faqs = [
  {
    question: "Wie wird die Behandlungspflege in Frankfurt finanziert?",
    answer: "Die Leistungen der Behandlungspflege werden in der Regel über die Kranken- oder Pflegekasse abgerechnet. Die finanzielle Unterstützung hängt vom jeweiligen Pflegegrad ab. Wir helfen Ihnen gerne bei der Beantragung und der finanziellen Planung der Behandlungspflege in Frankfurt."
  },
  {
    question: "Wie lange kann ich die Behandlungspflege in Frankfurt in Anspruch nehmen?",
    answer: "Die Dauer der Behandlungspflege in Frankfurt kann je nach Gesundheitszustand variieren. Wir passen unsere Pflegepläne flexibel an Ihre individuellen Bedürfnisse an und bieten Ihnen die notwendige Unterstützung so lange wie nötig."
  },
  {
    question: "Welche Qualifikationen haben die Pflegekräfte im Bereich der Behandlungspflege?",
    answer: "Unser Team besteht aus hochqualifizierten Pflegefachkräften mit einer Ausbildung in Gesundheits- und Krankenpflege oder Altenpflege. Sie werden regelmäßig geschult und fortgebildet, um höchste medizinische Qualität und Sicherheit zu gewährleisten."
  }
];

const Behandlungspflege = () => {
  return (
    <>
      <Helmet>
        <title>Behandlungspflege in Frankfurt am Main | AVYTA Pflegedienst</title>
        <meta name="description" content="Professionelle Behandlungspflege in Frankfurt am Main. Medikamentenmanagement, Wundversorgung, Injektionen & Infusionen. Erfahrene Pflegefachkräfte. Kostenübernahme durch Krankenkasse!" />
        <meta name="keywords" content="Behandlungspflege Frankfurt, Medizinische Pflege Frankfurt, Wundversorgung, Injektionen, Medikamentenmanagement" />
        <link rel="canonical" href="https://www.avyta.de/leistungen/behandlungspflege" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Stethoscope className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Behandlungspflege in Frankfurt am Main
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Suchen Sie nach professioneller Behandlungspflege in Frankfurt? Bei Avyta steht Ihre Gesundheit im Mittelpunkt. 
                  Unsere Pflegefachkräfte und Pflegehelfer übernehmen die Behandlungspflege Ihrer Angehörigen gewissenhaft und mit Herz.
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
                    Avyta übernimmt Ihre Behandlungspflege in Frankfurt am Main
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Unsere Behandlungspflege in Frankfurt bietet Ihnen die Sicherheit, die Sie benötigen, um Ihre 
                    Gesundheit optimal zu schützen. Unser umfangreiches Angebot umfasst verschiedene Aspekte der 
                    Behandlungspflege, um Ihnen eine Rundumversorgung zu bieten.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Unabhängig vom Pflegegrad Ihrer Angehörigen sind wir in Frankfurt für Sie da und unterstützen 
                    Sie nicht nur bei der medizinischen Versorgung, sondern sind auch eine verlässliche Stütze im 
                    Alltag Ihrer Angehörigen.
                  </p>

                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    Unsere Behandlungspflege in Frankfurt umfasst
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
                        Behandlungspflege durch erfahrene Mitarbeiter
                      </h3>
                      <p className="text-muted-foreground">
                        Vertrauen Sie auf unsere Erfahrung. Wir dokumentieren medizinische Maßnahmen und 
                        Gesundheitsdaten sorgfältig, um Ihnen volle Transparenz zu bieten. Unsere Behandlungspflege 
                        in Frankfurt passt sich flexibel Ihren Bedürfnissen an.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                        Individuelle Pflegepläne
                      </h3>
                      <p className="text-muted-foreground">
                        Wir erstellen individuelle Pflegepläne für kurzfristige oder langfristige Betreuung, 
                        ganz nach Ihren Anforderungen. In enger Absprache mit Ihnen und Ihren Angehörigen passen 
                        wir unsere Termine und Leistungen an Ihre aktuelle Situation an.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold mb-4">
                        Jetzt beraten lassen
                      </h3>
                      <p className="opacity-90 mb-4">
                        Kontaktieren Sie uns noch heute, um die Behandlungspflege in Frankfurt 
                        unkompliziert und bedarfsgerecht einzurichten.
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
                  Häufige Fragen zur Behandlungspflege
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
                  <Link to="/leistungen/grundpflege">Grundpflege</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main">Intensivpflege</Link>
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

export default Behandlungspflege;
