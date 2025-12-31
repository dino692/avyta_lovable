import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Heart, Shield, CheckCircle, HelpCircle } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const grundpflegeLeistungen = [
  "Maßnahmen zur Mobilität",
  "Hauswirtschaftliche Hilfe",
  "Hilfe bei der Körperpflege",
  "Unterstützung bei dem An- und Auskleiden",
  "Hilfe beim Essen und Trinken",
  "Hilfe bei der Ausscheidung"
];

const behandlungspflegeLeistungen = [
  "Tracheostomaversorgung",
  "Versorgung von Anus Praeter sowie Urostoma",
  "Parenterale & enterale Ernährung",
  "Kompressionsstrümpfe an- und ausziehen",
  "Herrichten und Verabreichen von Medikamenten",
  "Injektionen",
  "Infusionen",
  "Blutdruckkontrolle",
  "Blutzuckerkontrolle",
  "Wundversorgung"
];

const Griesheim = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Griesheim Frankfurt | AVYTA Ambulante Pflege</title>
        <meta name="description" content="Pflegedienst Griesheim - Individuelle Pflege für Ihre Bedürfnisse. Grundpflege, Behandlungspflege, Intensivpflege. Familiär und mit Herz. Tel: 069 153 914 05" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Pflegedienst Griesheim: Individuelle Pflege für Ihre Bedürfnisse
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Sie suchen für sich oder Ihre Angehörigen einen professionellen Pflegedienst in Griesheim, da Sie in Ihrem Alltag Unterstützung benötigen? Mit unserem Pflegedienst bieten wir Ihnen eine individuelle und auf Ihre Bedürfnisse abgestimmte Betreuung.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          {/* Intro Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    Unser Pflegedienst in Frankfurt-Griesheim richtet sich an alle Personen, die Ihre alltäglichen Aufgaben nicht mehr selbstständig erledigen können. Verschiedene Gründe führen dazu, dass man auf Hilfe angewiesen ist – nach schweren Unfällen, aufgrund geistiger Einschränkungen oder aufgrund des Alters.
                  </p>
                  <p className="mb-6">
                    Mit dem Pflegedienst in Griesheim können Sie die Eigenständigkeit und Pflegebedürftigkeit kombinieren. Sie können in Ihrer vertrauten und häuslichen Umgebung verbleiben, denn der Pflegedienst kommt zu Ihnen.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Auch nachts erreichbar</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Menschlichkeit im Mittelpunkt</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ganzheitliche Pflegeleistungen */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Pflegedienst in Griesheim - ganzheitliche Pflegeleistungen
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Jede Person hat unterschiedliche Bedürfnisse und Ansprüche an eine Pflege. Unser umfangreiches Leistungsspektrum ermöglicht jeder Person eine angepasste Pflege.
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Grundpflege */}
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Grundpflege
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Die Grundpflege beschreibt alle Maßnahmen, die der Versorgung des Körpers dienen:
                    </p>
                    <ul className="space-y-2">
                      {grundpflegeLeistungen.map((leistung, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {leistung}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Behandlungspflege */}
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Behandlungspflege
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Medizinische Maßnahmen, die von Ihrem Arzt verschrieben wurden:
                    </p>
                    <ul className="space-y-2">
                      {behandlungspflegeLeistungen.map((leistung, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {leistung}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 max-w-3xl mx-auto">
                <Card variant="elevated" className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                      Intensivpflege & Serviceleistungen
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Im Rahmen der Behandlungspflege übernehmen wir bei Bedarf auch Maßnahmen der Intensivpflege: Heimbeatmung, Überwachung & Vitalisierung des Patienten, Legen eines Blasenkatheters, endotracheales Absaugen oder Lagerungsbehandlungen und Mobilisation.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Weitere Serviceleistungen: Hilfe bei Besorgungen von Medikamenten, Hilfestellungen beim Ausfüllen von Anträgen oder Unterstützung und Begleitung von Spaziergängen.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Pflegedienst in Griesheim – Familiär und mit Herz!
                </h2>
                <p className="text-muted-foreground mb-4">
                  Unser Pflegedienst ist immer für Sie da, an Wochenenden und Feiertagen und bei Notfällen auch in der Nacht. Wir bieten Ihnen eine auf Sie abgestimmte Pflege, je nach Ihren individuellen Bedürfnissen und Ihrem Pflegegrad.
                </p>
                <p className="text-muted-foreground mb-8">
                  Dabei berücksichtigen wir nicht nur Ihren gesundheitlichen Zustand, sondern auch Ihre sozialen, kulturellen oder religiösen Bedürfnisse. Denn Menschlichkeit steht für unseren Pflegedienst im Mittelpunkt.
                </p>
                <CTADropdownButton />
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
                  <HelpCircle className="w-8 h-8 text-primary" />
                  Häufige Fragen
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Leistungen übernimmt der Avyta Pflegedienst in Griesheim?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser Pflegedienst in Griesheim übernimmt alle üblichen Hilfen rund um Mobilität, Körperpflege, An- und Auskleiden, Hauswirtschaft, Verpflegung und Ausscheidungen. Außerdem können wir Sie und Ihre Angehörigen auch in Bereichen der Intensivpflege und bei Behördengängen und Anträgen unterstützen.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wer kann den Pflegedienst in Griesheim in Anspruch nehmen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser Pflegedienst richtet sich an alle Personen, die Unterstützung im Alltag benötigen – unabhängig vom Pflegegrad oder der Art der Einschränkung.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie sehr kann der Pflegedienst in Griesheim individualisiert werden?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Wir erstellen für jeden Patienten einen individuellen Pflegeplan, der genau auf seine Bedürfnisse und Wünsche abgestimmt ist. Dabei berücksichtigen wir auch kulturelle, religiöse und soziale Aspekte.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* Back Link */}
          <section className="py-8">
            <div className="container mx-auto px-4 text-center">
              <Link to="/standorte/frankfurt" className="text-primary hover:underline font-medium">
                ← Zurück zur Übersicht Frankfurt
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Griesheim;
