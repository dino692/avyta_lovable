import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import CTADropdownButton from "@/components/CTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const leistungen = [
  "Hilfe bei der Körperpflege (Waschen, Duschen, Baden)",
  "An- und Auskleiden",
  "Haushaltshilfe (Kochen, Wäsche, Reinigung)",
  "Unterstützung bei der Mobilität (Aufstehen, Treppensteigen, Spaziergänge)",
  "Medikamentenmanagement",
  "Soziale Betreuung und Gesellschaft",
  "Kleine Einkäufe erledigen",
  "Begleitung zu Terminen",
];

const faqs = [
  {
    question: "Wie wird die Grundpflege in Frankfurt finanziert?",
    answer: "Die Leistungen der Grundpflege werden in der Regel über die Kranken- oder Pflegekasse abgerechnet. Die finanzielle Unterstützung hängt vom jeweiligen Pflegegrad ab. Wir unterstützen Sie gerne bei der Antragstellung und der finanziellen Planung Ihrer Grundpflege in Frankfurt.",
  },
  {
    question: "Wie lange kann ich die Grundpflege in Frankfurt in Anspruch nehmen?",
    answer: "Die Dauer der Grundpflege in Frankfurt kann je nach Pflegebedarf variieren. Wir passen unsere Pflegepläne flexibel an Ihre individuellen Bedürfnisse an und bieten Ihnen die notwendige Unterstützung so lange wie nötig.",
  },
  {
    question: "Welche Qualifikationen haben die Pflegekräfte im Bereich der Grundpflege?",
    answer: "Unsere Pflegekräfte sind examinierte Pflegefachkräfte oder ausgebildete Pflegehelfer mit entsprechender Qualifikation. Sie werden kontinuierlich fortgebildet und sind auf dem neuesten Stand der Pflegewissenschaft.",
  },
];

const Grundpflege = () => {
  return (
    <>
      <Helmet>
        <title>Grundpflege in Frankfurt am Main | AVYTA Pflegedienst</title>
        <meta name="description" content="Professionelle Grundpflege in Frankfurt am Main. Körperpflege, Mobilisation, Haushaltshilfe. Würdevolle Pflege zu Hause mit erfahrenen Pflegekräften. Finanzierung über Pflegekasse!" />
        <meta name="keywords" content="Grundpflege Frankfurt, Körperpflege Frankfurt, Ambulante Pflege Frankfurt, häusliche Pflege" />
        <meta property="og:title" content="Grundpflege Frankfurt | AVYTA Pflegedienst" />
        <meta property="og:description" content="Professionelle Grundpflege in Frankfurt am Main. Würdevolle Pflege zu Hause." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://avyta.de/leistungen/grundpflege" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Home className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Grundpflege in Frankfurt am Main
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Professionelle Unterstützung bei der Körperpflege und im Alltag – 
                  damit Sie sich auf das Wesentliche konzentrieren können.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
                  <p className="mb-6 leading-relaxed">
                    Suchen Sie nach professioneller <strong>Grundpflege in Frankfurt?</strong> Avyta versteht 
                    die Bedeutung Ihrer Zeit und Ihres Wohlbefindens. Als pflegender Angehöriger geben Sie 
                    täglich Ihr Bestes, um Ihre Lieben zu versorgen. Diese Fürsorge erfordert Zeit, 
                    körperlichen Einsatz und viel Herz.
                  </p>
                  <p className="mb-6 leading-relaxed">
                    Dennoch sollten Sie nicht Ihre eigenen Bedürfnisse vernachlässigen müssen, wenn Sie 
                    aufgrund von Krankheit, Terminen oder anderen Verpflichtungen einmal nicht voll 
                    einsatzfähig sind. <strong>Bei Avyta</strong> stehen wir Ihnen in solchen Momenten zur Seite.
                  </p>
                  <p className="leading-relaxed">
                    Egal, ob Sie kurzfristig verhindert sind, wichtige Termine haben oder einfach eine 
                    Auszeit benötigen – unsere Pflegefachkräfte und Pflegehelfer bei Avyta sind bereit, 
                    <strong> die Grundpflege</strong> Ihrer Angehörigen verantwortungsbewusst und mit 
                    Empathie zu übernehmen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Avyta übernimmt Ihre Grundpflege in Frankfurt am Main
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                  <p className="leading-relaxed">
                    Unsere <strong>Grundpflege in Frankfurt</strong> bietet Ihnen die Sicherheit, die Sie 
                    benötigen, um Ihr Leben sorgenfrei zu gestalten. Unser Leistungsspektrum umfasst die 
                    Grundpflege für Menschen mit verschiedenen Pflegegraden. Wir sind da, um Ihre 
                    Angehörigen im Haushalt zu unterstützen und ein offenes Ohr für sie zu haben.
                  </p>
                </div>

                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  Unsere Aufgaben in der Grundpflege
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {leistungen.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 bg-background rounded-xl">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Button variant="hero" size="lg" asChild>
                    <a href="tel:+496915391405">
                      Jetzt anrufen
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                    Grundpflege durch erfahrene Mitarbeiter
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="mb-6 leading-relaxed">
                      Die <strong>Grundpflege in Frankfurt</strong> – zuverlässig, ob kurz oder lang. Als 
                      Ihr vertrauensvoller Ansprechpartner in allen Fragen der häuslichen Pflege ermöglichen 
                      wir Pflegebedürftigen, auch in Ihrer Abwesenheit einen normalen Alltag fortzuführen.
                    </p>
                    <p className="leading-relaxed">
                      Während Ihrer Abwesenheit dokumentieren wir <strong>Pflegemaßnahmen und 
                      Gesundheitsdaten</strong> genau, um Ihnen volle Transparenz zu bieten. Die Dauer 
                      unserer Grundpflege in Frankfurt richtet sich nach Ihrem Bedarf.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                        Finanzierung über Pflegekasse
                      </h3>
                      <p className="text-muted-foreground">
                        Bei anerkanntem Pflegegrad werden die Kosten für Grundpflege von der 
                        Pflegekasse übernommen. Die finanzielle Unterstützung hängt vom jeweiligen 
                        Pflegegrad ab.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                        Individuelle Pflegepläne
                      </h3>
                      <p className="text-muted-foreground">
                        Wir erstellen individuelle Pflegepläne für wenige Stunden, mehrere Tage 
                        oder sogar Wochen. In enger Absprache passen wir unsere Termine und 
                        Leistungen an Ihre Situation an.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold mb-4">
                        Jetzt beraten lassen
                      </h3>
                      <p className="opacity-90 mb-4">
                        Kontaktieren Sie uns noch heute, um die Grundpflege in Frankfurt 
                        flexibel und bedarfsgerecht einzurichten.
                      </p>
                      <Button variant="secondary" asChild>
                        <a href="/#contact">
                          Erstberatung anfragen
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
                  Häufige Fragen
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-background rounded-xl border border-border px-6"
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

export default Grundpflege;
