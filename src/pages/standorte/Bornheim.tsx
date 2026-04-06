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
import { generateFAQSchema } from "@/lib/faqSchema";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";
import { generateServiceSchema } from "@/lib/serviceSchema";
import TrustBadges from "@/components/TrustBadges";

const bornheimFaqs = [
  {
    question: "Welche Arten der Pflege kann Avyta als Pflegedienst in Bornheim bieten?",
    answer: "Unser Avyta Pflegedienst in Bornheim kann das gesamte Spektrum an Pflegestufen und Pflegeleistungen abdecken: von einfachen Alltagshilfen über die Grundpflege bis hin zur Intensivpflege mit komplexen medizinischen Leistungen stehen wir Ihnen zur Seite. Wir kümmern uns auch in schwierigen Fällen mit viel Erfahrung und Einfühlsamkeit um Ihre pflegebedürftigen Angehörigen."
  },
  {
    question: "Welche Kosten fallen mit dem Avyta Pflegedienst in Bornheim an?",
    answer: "Die Kosten richten sich nach dem individuellen Pflegebedarf und Pflegegrad. Wir beraten Sie gerne zu den Kosten und möglichen Finanzierungswegen über die Pflegekasse."
  },
  {
    question: "Welche weiteren Leistungen bietet der Avyta Pflegedienst in Bornheim?",
    answer: "Neben der direkten Pflege bieten wir Serviceleistungen wie Hilfe bei Antragstellungen, Begleitung bei Spaziergängen, Vermittlung von Dienstleistern und Unterstützung bei der Medikamentenbeschaffung."
  },
,
  {
    question: "Übernimmt die Pflegekasse die Kosten für den Pflegedienst in Bornheim?",
    answer: "Ja, bei Vorliegen eines Pflegegrades übernimmt die Pflegekasse Sachleistungen für die Grundpflege durch unseren Pflegedienst in Bornheim. Behandlungspflege wird über ärztliche Verordnung von der Krankenkasse finanziert."
  },
  {
    question: "Wie schnell kann der Pflegedienst Bornheim mit der Pflege starten?",
    answer: "Nach einem kostenlosen Erstgespräch kann unser Pflegedienst in Bornheim in der Regel innerhalb weniger Tage mit der Pflege beginnen. Bei dringenden Fällen finden wir auch kurzfristig eine Lösung."
  },
  {
    question: "Betreut der Pflegedienst Bornheim auch Demenz- und Intensivpatienten?",
    answer: "Ja, unser Pflegedienst in Bornheim betreut auch Menschen mit Demenz und bietet Intensivpflege mit Heimbeatmung an. Unsere Mitarbeiter sind speziell für diese anspruchsvollen Pflegesituationen geschult."
  }
];

const grundpflegeLeistungen = [
  "Hilfe bei der Körperpflege",
  "Maßnahmen zur Mobilität",
  "Hauswirtschaftliche Hilfe",
  "Unterstützung bei dem An- und Auskleiden",
  "Hilfe beim Essen und Trinken",
  "Hilfe bei der Ausscheidung"
];

const behandlungspflegeLeistungen = [
  "Injektionen",
  "Infusionen",
  "Blutdruckkontrolle",
  "Blutzuckerkontrolle",
  "Wundversorgung",
  "Tracheostomaversorgung",
  "Versorgung von Anus Praeter sowie Urostoma",
  "Parenterale & enterale Ernährung",
  "Kompressionsstrümpfe an- und ausziehen",
  "Herrichten und Verabreichen von Medikamenten"
];

const Bornheim = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Frankfurt Bornheim ✓ Pflege | avyta.de</title>
        <meta name="description" content="Ihr regionaler Pflegedienstleister in Bornheim. Wir sind von Haus zu Haus unterwegs und betreuen Sie in Ihrem gewohnten Umfeld. Mehr dazu auf | avyta.de" />
        <link rel="canonical" href="https://www.avyta.de/standorte/frankfurt/bornheim" />
        <meta property="og:title" content="Pflegedienst Frankfurt Bornheim ✓ Pflege | avyta.de" />
        <meta property="og:description" content="Ihr regionaler Pflegedienstleister in Bornheim. Betreuung in Ihrem gewohnten Umfeld." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Standorte", url: "https://www.avyta.de/standorte/frankfurt" },
          { name: "Bornheim", url: "https://www.avyta.de/standorte/frankfurt/bornheim" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(bornheimFaqs)}</script>
        <script type="application/ld+json">{generateServiceSchema({
          serviceName: "Ambulanter Pflegedienst Frankfurt Bornheim",
          serviceDescription: "Ambulanter Pflegedienst in Frankfurt Bornheim: Grundpflege, Behandlungspflege und Intensivpflege zu Hause.",
          serviceType: "Ambulanter Pflegedienst",
          canonicalUrl: "https://www.avyta.de/standorte/frankfurt/bornheim",
        })}</script>
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
                  Pflegedienst Bornheim: Pflege für Ihre individuellen Bedürfnisse
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Sie oder Ihre Angehörigen benötigen Unterstützung im Alltag und suchen einen professionellen Pflegedienst in Bornheim? Wir bieten Ihnen eine individuelle und hochqualifizierte Betreuung.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          {/* Trust Badges */}
          <TrustBadges />

          {/* Intro Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    Unser ambulanter Pflegedienst in Frankfurt Bornheim ist für Personen geeignet, die Ihre alltäglichen Aufgaben nicht mehr eigenständig erledigen können. Vielfältige Gründe führen dazu, dass man auf Hilfe im Alltag angewiesen ist – nach schweren Unfällen, aufgrund des Alters oder geistigen Einschränkungen.
                  </p>
                  <p className="mb-6">
                    Der Pflegedienst in Bornheim ist für viele Personen der beste Weg, die Eigenständigkeit und Pflegebedürftigkeit zu kombinieren. Sie können in Ihrer vertrauten und häuslichen Umgebung verbleiben und müssen nicht in ein Pflegeheim umziehen.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Immer für Sie da</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Wohlfühlatmosphäre</span>
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
                Pflegedienst Bornheim: ganzheitliche Pflegeleistungen
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Da jede Person individuell ist, ist die Pflegebedürftigkeit genauso individuell. Unser umfangreiches Leistungsspektrum ermöglicht jeder Person die für sie benötigte Pflege.
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
                      Anspruchsvolle medizinische Maßnahmen, die von Ihrem Arzt angeordnet werden:
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
                      Bei Bedarf übernehmen wir auch Maßnahmen der Intensivpflege: Heimbeatmung, Überwachung und Vitalisierung des Patienten, Legen eines Blasenkatheters, endotracheales Absaugen oder Lagerungsbehandlungen und Mobilisation.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Zudem bieten wir Serviceleistungen: Hilfe bei Besorgung von Medikamenten, Hilfestellungen beim Ausfüllen von Anträgen oder Unterstützung und Begleitung von Spaziergängen.
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
                  Mit Herz an Ihrer Seite – Avyta Pflegedienst Frankfurt Bornheim
                </h2>
                <p className="text-muted-foreground mb-4">
                  Unser Pflegedienst ist mit Herz an Ihrer Seite und immer für Sie da. Für jede Ihrer individuellen Bedürfnisse und bei jedem Pflegegrad bieten wir eine für Sie abgestimmte Pflege.
                </p>
                <p className="text-muted-foreground mb-8">
                  Da die Menschlichkeit im Fokus steht, berücksichtigen wir nicht nur Ihren gesundheitlichen Bedarf, sondern auch Ihre sozialen, religiösen oder kulturellen Bedürfnisse. Die langjährige Erfahrung garantiert Ihnen eine sehr hohe Qualität der ganzheitlichen Pflege in familiärer Atmosphäre.
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
                      Welche Arten der Pflege kann Avyta als Pflegedienst in Bornheim bieten?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser Avyta Pflegedienst in Bornheim kann das gesamte Spektrum an Pflegestufen und Pflegeleistungen abdecken: von einfachen Alltagshilfen über die Grundpflege bis hin zur Intensivpflege mit komplexen medizinischen Leistungen stehen wir Ihnen zur Seite. Wir kümmern uns auch in schwierigen Fällen mit viel Erfahrung und Einfühlsamkeit um Ihre pflegebedürftigen Angehörigen.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Kosten fallen mit dem Avyta Pflegedienst in Bornheim an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die Kosten richten sich nach dem individuellen Pflegebedarf und Pflegegrad. Wir beraten Sie gerne zu den Kosten und möglichen Finanzierungswegen über die Pflegekasse.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche weiteren Leistungen bietet der Avyta Pflegedienst in Bornheim?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Neben der direkten Pflege bieten wir Serviceleistungen wie Hilfe bei Antragstellungen, Begleitung bei Spaziergängen, Vermittlung von Dienstleistern und Unterstützung bei der Medikamentenbeschaffung.
                    </AccordionContent>
                  </AccordionItem>
                                  <AccordionItem value="item-4" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Übernimmt die Pflegekasse die Kosten für den Pflegedienst in Bornheim?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, bei Vorliegen eines Pflegegrades übernimmt die Pflegekasse Sachleistungen für die Grundpflege durch unseren Pflegedienst in Bornheim. Behandlungspflege wird über ärztliche Verordnung von der Krankenkasse finanziert.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie schnell kann der Pflegedienst Bornheim mit der Pflege starten?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Nach einem kostenlosen Erstgespräch kann unser Pflegedienst in Bornheim in der Regel innerhalb weniger Tage mit der Pflege beginnen. Bei dringenden Fällen finden wir auch kurzfristig eine Lösung.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Betreut der Pflegedienst Bornheim auch Demenz- und Intensivpatienten?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unser Pflegedienst in Bornheim betreut auch Menschen mit Demenz und bietet Intensivpflege mit Heimbeatmung an. Unsere Mitarbeiter sind speziell für diese anspruchsvollen Pflegesituationen geschult.
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

export default Bornheim;
