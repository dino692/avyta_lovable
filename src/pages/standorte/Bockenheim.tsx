import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Heart, Shield, CheckCircle, HelpCircle } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { generateFAQSchema } from "@/lib/faqSchema";

const bockenheimFaqs = [
  {
    question: "Wie ist der Ablauf bei der Beauftragung des Pflegedienstes in Frankfurt Bockenheim?",
    answer: "Wir führen zunächst ein Gespräch, um Ihre individuellen Pflegebedürfnisse zu erfahren. Welche Leistungen werden gebraucht, welche Besonderheiten müssen berücksichtigt werden? Wir erstellen dann einen individuellen Pflegeplan und einen Kostenvoranschlag zur Abrechnung mit der Kranken- oder Pflegekasse. Dann können wir nach der Zustimmung der Kasse mit der Pflege beginnen."
  },
  {
    question: "Wie sieht das Leistungsspektrum beim Pflegedienst in Frankfurt Bockenheim aus?",
    answer: "Unser Leistungsspektrum reicht von klassischen Elementen der Grundpflege über medizinische Behandlungspflege bis hin zur Intensivpflege mit Heimbeatmung. Zusätzlich bieten wir verschiedene Serviceleistungen an."
  },
  {
    question: "Worauf sollte man bei einem Pflegedienst in Frankfurt Bockenheim achten?",
    answer: "Achten Sie auf qualifiziertes Personal, einen permanenten Qualitätssicherungsprozess, Erreichbarkeit auch an Wochenenden und Feiertagen sowie eine familiäre und herzliche Atmosphäre."
  },
];
const grundpflegeLeistungen = [
  "Hauswirtschaftliche Hilfe",
  "Hilfe bei der Körperpflege",
  "Unterstützung bei dem An- und Auskleiden",
  "Hilfe beim Essen und Trinken",
  "Hilfe bei der Ausscheidung",
  "Maßnahmen zur Mobilität"
];

const behandlungspflegeLeistungen = [
  "Kompressionsstrümpfe an- und ausziehen",
  "Herrichten und Verabreichen von Medikamenten",
  "Wundversorgung",
  "Blutdruckkontrolle",
  "Blutzuckerkontrolle",
  "Tracheostomaversorgung",
  "Versorgung von Anus Praeter sowie Urostoma",
  "Parenterale & enterale Ernährung",
  "Injektionen",
  "Infusionen"
];

const Bockenheim = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Frankfurt Bockenheim | AVYTA Ambulante Pflege</title>
        <meta name="description" content="Pflegedienst in Frankfurt Bockenheim - individuelle Pflege in Ihrer gewohnten Umgebung. Grundpflege, Behandlungspflege, Intensivpflege. Tel: 069 153 914 05" />
        <script type="application/ld+json">{generateFAQSchema(bockenheimFaqs)}</script>
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
                  Pflegedienst in Frankfurt Bockenheim: individuelle Pflege
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Sie suchen nach einem ambulanten Pflegedienst, da Sie oder Ihre Angehörigen den Alltag nicht mehr allein bewältigen können? Wir von Avyta bieten Ihnen eine auf Ihre individuellen Bedürfnisse abgestimmte Betreuung.
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
                    Eine Pflegebedürftigkeit entsteht durch die verschiedensten Gründe. Personen sind unter anderem aufgrund von geistigen Einschränkungen oder eines fortgeschrittenen Alters auf Hilfe im Alltag angewiesen. Auch schwere Unfälle können vorübergehend oder dauerhaft eine Pflegebedürftigkeit auslösen.
                  </p>
                  <p className="mb-6">
                    Mit der Betreuung durch unseren Pflegedienst in Frankfurt Bockenheim wird Ihnen oder Ihren Angehörigen eine attraktive Lebensqualität gewährleistet, da Sie in Ihrer gewohnten und häuslichen Umgebung verbleiben und nicht in ein Pflegeheim umziehen müssen.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Auch nachts erreichbar</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Familiäre Atmosphäre</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ganzheitliche Pflege */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Avyta Pflegedienst in Frankfurt Bockenheim bietet ganzheitliche Pflege
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Die Pflegebedürfnisse sind je nach Situation, Pflegegrad und Person sehr verschieden, daher haben wir ein umfangreiches Leistungsspektrum entwickelt.
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
                      Alle Maßnahmen, die der Versorgung des Körpers behilflich sind:
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
                      Medizinische Maßnahmen, die ein Arzt Ihnen verschreibt:
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
                      Unser speziell geschultes Personal ermöglicht auch anspruchsvolle medizinische Maßnahmen der Intensivpflege in Ihrer gewohnten Umgebung: Lagerungsbehandlungen und Mobilisation, Überwachung & Vitalisierung, Legen eines Blasenkatheters, endotracheales Absaugen oder auch eine Heimbeatmung.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Weitere Serviceleistungen wie Vermittlung von Friseuren, Hilfe beim Ausfüllen von Anträgen, Hilfe bei der Besorgung von Medikamenten oder Unterstützung und Begleitung von Spaziergängen sind ebenfalls verfügbar.
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
                  Pflegedienst in Frankfurt Bockenheim – Pflege herzlich und familiär
                </h2>
                <p className="text-muted-foreground mb-4">
                  Wir bieten Ihnen eine individuelle und auf Sie abgestimmte Pflege ganz nach Ihrem Pflegegrad und Ihren persönlichen Bedürfnissen. Da wir einen großen Fokus auf die Menschlichkeit legen, berücksichtigen wir auch Ihre sozialen, kulturellen und religiösen Vorlieben.
                </p>
                <p className="text-muted-foreground mb-8">
                  Die sehr hohe Pflegequalität wird Ihnen durch unsere langjährige Erfahrung garantiert. Jeden Tag, auch an Wochenenden und Feiertagen, sind wir für Sie da.
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
                      Wie ist der Ablauf bei der Beauftragung des Pflegedienstes in Frankfurt Bockenheim?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Wir führen zunächst ein Gespräch, um Ihre individuellen Pflegebedürfnisse zu erfahren. Welche Leistungen werden gebraucht, welche Besonderheiten müssen berücksichtigt werden? Wir erstellen dann einen individuellen Pflegeplan und einen Kostenvoranschlag zur Abrechnung mit der Kranken- oder Pflegekasse. Dann können wir nach der Zustimmung der Kasse mit der Pflege beginnen.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie sieht das Leistungsspektrum beim Pflegedienst in Frankfurt Bockenheim aus?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser Leistungsspektrum reicht von klassischen Elementen der Grundpflege über medizinische Behandlungspflege bis hin zur Intensivpflege mit Heimbeatmung. Zusätzlich bieten wir verschiedene Serviceleistungen an.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Worauf sollte man bei einem Pflegedienst in Frankfurt Bockenheim achten?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Achten Sie auf qualifiziertes Personal, einen permanenten Qualitätssicherungsprozess, Erreichbarkeit auch an Wochenenden und Feiertagen sowie eine familiäre und herzliche Atmosphäre.
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

export default Bockenheim;
