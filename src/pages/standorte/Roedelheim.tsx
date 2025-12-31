import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Heart, Shield, CheckCircle, HelpCircle, Stethoscope } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const behandlungspflegeLeistungen = [
  "Sicheres Verabreichen von Injektionen und Infusionen",
  "Kontrolle von wichtigen Vitalwerten",
  "Versorgung von offenen Wunden und Druckstellen",
  "Vorbereitung der parenteralen und enteralen Ernährung",
  "Versorgung von Anus Praeter, Urostoma oder Tracheostoma",
  "Intensivmedizinische Versorgung wie die Regulierung von Beatmungsgeräten",
  "Legen von Kathetern"
];

const Roedelheim = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Rödelheim Frankfurt | AVYTA Häusliche Krankenpflege</title>
        <meta name="description" content="Pflegedienst Rödelheim - häusliche Krankenpflege in vertrauter Umgebung. Grundpflege, Behandlungspflege, Intensivpflege. Qualitativ hochwertig. Tel: 069 153 914 05" />
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
                  Ihr Pflegedienst in Rödelheim für häusliche Krankenpflege
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Müssen Menschen aufgrund von Krankheit oder Altersbeschwerden ihr Zuhause verlassen, ist die Belastung für Psyche und Gesundheit meist doppelt so groß. Wir von Avyta glauben, dass Menschen sich in ihrem gewohnten Umfeld am wohlsten fühlen.
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
                    Darum unterstützen wir Sie mit unserem ambulanten Pflegedienst in Rödelheim immer dort, wo Sie uns brauchen. Von der Grundpflege bis hin zur Intensivpflege übernehmen wir alle Aufgaben zur täglichen Versorgung, die Sie oder Ihre Angehörigen nicht mehr selbst ausführen können. Ihren persönlichen Behandlungsplan passen wir individuell an Ihre Lebenssituation und Ihre Bedürfnisse an.
                  </p>
                  <p className="mb-6">
                    Unser Pflegedienst in Rödelheim bietet Ihnen qualitativ hochwertige und individuelle Pflegeleistungen im vertrauten Umfeld Ihres eigenen Zuhauses. Unser engagiertes Team von Pflegefachkräften steht Ihnen zur Verfügung, um Ihre Gesundheitsbedürfnisse zu unterstützen.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Ihr Wohlbefinden an erster Stelle</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Individuelle Pflegepläne</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Grundpflege */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
                  Grundpflege vom Pflegedienst in Rödelheim – für ein beschwerdefreies Leben
                </h2>
                <Card variant="elevated">
                  <CardContent className="p-8">
                    <p className="text-muted-foreground mb-4">
                      Mit der Grundpflege werden alle grundlegenden Bedürfnisse von Menschen mit körperlichen oder geistigen Einschränkungen abgedeckt. Unser Pflegedienst in Rödelheim bietet Ihnen Unterstützung bei der Körperhygiene, beim Essen und Trinken und bei der Haushaltsführung.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Manchmal gehört es auch zur Grundpflege, Ihnen morgens aus dem Bett zu helfen oder Sie auf Ihren morgendlichen Toilettengang vorzubereiten. Unsere Aufgaben verändern sich von Tür zu Tür und von Mensch zu Mensch.
                    </p>
                    <p className="text-muted-foreground">
                      Hilfestellungen sind nicht nur für kranke Menschen nötig – auch wenn Sie altersbedingt oder nach einem operativen Eingriff Probleme haben, Ihren Haushalt zu bewältigen, können Sie uns kontaktieren. Wir entwickeln spezielle Behandlungspläne für Ihre Situation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Behandlungspflege */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Behandlungspflege und Intensivpflege vom Pflegedienst in Rödelheim
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Kranke Menschen sind oft auf regelmäßige medizinische Versorgung angewiesen. Unsere ausgebildeten Fachkräfte führen medizinische Maßnahmen bequem bei Ihnen zu Hause durch.
              </p>
              <div className="max-w-3xl mx-auto">
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Stethoscope className="w-5 h-5 text-primary" />
                      Leistungen der Behandlungspflege
                    </h3>
                    <ul className="space-y-3">
                      {behandlungspflegeLeistungen.map((leistung, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          {leistung}
                        </li>
                      ))}
                    </ul>
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
                  Immer gut versorgt mit dem Avyta Pflegedienst in Rödelheim
                </h2>
                <p className="text-muted-foreground mb-4">
                  Unser Pflegedienst zielt auf die ganzheitliche Versorgung von Menschen mit körperlichen oder geistigen Einschränkungen ab. Gemeinsam erarbeiten wir einen Pflegeplan, der Ihnen einen möglichst unbeschwerten Alltag ermöglicht und Ihnen trotzdem größtmögliche Freiheit lässt.
                </p>
                <p className="text-muted-foreground mb-8">
                  Ihr persönlicher Pflegeplan lässt sich jederzeit an Ihren Gesundheitszustand anpassen. Auch Angehörige beziehen wir in unsere Arbeit mit ein. Sie möchten unsere Pflegeleistungen in Anspruch nehmen? Kontaktieren Sie unser freundliches Team für ein erstes Beratungsgespräch.
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
                      Wie werden die Leistungen des Pflegedienstes Rödelheim abgerechnet?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unsere Leistungen werden nach Beantragung eines Pflegegrades von Ihrer Krankenkasse oder Pflegekasse abgerechnet. Der erste Schritt zur häuslichen Pflege ist deshalb ein Anruf bei der zuständigen Krankenkasse. Nach Bewilligung der Pflege können wir mit der Erarbeitung eines Pflegeplans beginnen.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie wird der persönliche Bezug zum Klienten beim Pflegedienst Rödelheim hergestellt?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Wir legen großen Wert auf persönliche Beziehungen. Unsere Pflegekräfte nehmen sich Zeit, Sie kennenzulernen und verstehen Ihre individuellen Bedürfnisse und Wünsche.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie werden Pflegepläne beim Pflegedienst Rödelheim erstellt?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Wir erstellen individuelle Pflegepläne basierend auf Ihren Bedürfnissen und Ihrer Lebenssituation. Diese Pläne werden regelmäßig überprüft und bei Bedarf angepasst.
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

export default Roedelheim;
