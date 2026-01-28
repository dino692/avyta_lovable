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

const hoechstFaqs = [
  {
    question: "Welche Pflegeleistungen bietet Avyta als Pflegedienst in Höchst an?",
    answer: "Wir bieten das gesamte Spektrum an Pflegeleistungen: Grundpflege, Behandlungspflege und Intensivpflege. Von einfachen Alltagshilfen bis zur komplexen medizinischen Versorgung."
  },
  {
    question: "Wie sind die Kosten beim Avyta Pflegedienst in Höchst?",
    answer: "Die Kosten richten sich nach dem individuellen Pflegebedarf und Pflegegrad. Wir beraten Sie gerne zu den Kosten und möglichen Finanzierungswegen über die Pflegekasse."
  },
  {
    question: "Wie kann ich den Avyta Pflegedienst in Höchst kontaktieren?",
    answer: "Sie können uns telefonisch unter 069 153 914 05 erreichen oder über unser Kontaktformular eine Anfrage stellen. Wir sind auch am Wochenende erreichbar."
  },
];

const grundpflegeLeistungen = [
  "Hilfe beim Essen und Trinken",
  "Hilfe bei der Ausscheidung",
  "Maßnahmen zur Mobilität",
  "Hauswirtschaftliche Hilfe",
  "Hilfe bei der Körperpflege",
  "Unterstützung bei dem An- und Auskleiden"
];

const behandlungspflegeLeistungen = [
  "Blutdruckkontrolle",
  "Blutzuckerkontrolle",
  "Tracheostomaversorgung",
  "Versorgung von Anus Praeter sowie Urostoma",
  "Parenterale & enterale Ernährung",
  "Kompressionsstrümpfe an- und ausziehen",
  "Herrichten und Verabreichen von Medikamenten",
  "Injektionen",
  "Infusionen",
  "Wundversorgung"
];

const Hoechst = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Frankfurt Höchst | AVYTA Ambulante Pflege</title>
        <meta name="description" content="Pflegedienst Frankfurt Höchst - ambulante Pflege für Sie. Grundpflege, Behandlungspflege, Intensivpflege. Pflege mit Herz. Tel: 069 153 914 05" />
        <script type="application/ld+json">{generateFAQSchema(hoechstFaqs)}</script>
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
                  Pflegedienst Frankfurt Höchst: ambulante Pflege für Sie
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Sie oder Ihre Angehörigen suchen nach einem ambulanten Pflegedienst, da Sie Unterstützung in Ihrem Alltag benötigen? Wir bieten Ihnen eine individuelle, auf Ihre Bedürfnisse abgestimmte Betreuung.
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
                    Die unterschiedlichsten Gründe führen dazu, dass Personen im Alltag auf Hilfe angewiesen sind. Mögliche Gründe für eine Pflegebedürftigkeit sind geistige Einschränkungen, schwere Unfälle oder ein fortgeschrittenes Alter.
                  </p>
                  <p className="mb-6">
                    Mit dem Pflegedienst Frankfurt Höchst erhalten Sie oder Ihre Angehörigen eine attraktive Lebensqualität in Ihrer häuslichen Umgebung. Sie müssen nicht in ein Pflegeheim umziehen – wir kommen zu Ihnen. So können Sie die bestmögliche Pflege erhalten und trotzdem die Eigenständigkeit beibehalten.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Auch an Feiertagen</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Pflege mit Herz</span>
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
                Pflegedienst Frankfurt Höchst bietet Ihnen ganzheitliche Pflege
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Ein umfangreiches Leistungsspektrum wurde entwickelt, damit jeder Person eine individuell angepasste Pflege ermöglicht wird.
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
                      Bei Bedarf ermöglicht unser geschultes Personal auch Maßnahmen der Intensivpflege in Ihrer gewohnten Umgebung: Überwachung & Vitalisierung des Patienten, Legen eines Blasenkatheters, endotracheales Absaugen, Lagerungsbehandlungen und Mobilisation oder auch eine Heimbeatmung.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Zudem bieten wir weitere Serviceleistungen: Hilfe beim Ausfüllen von Anträgen, Hilfe bei der Besorgung von Medikamenten oder Unterstützung und Begleitung von Spaziergängen.
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
                  Pflegedienst Frankfurt Höchst – Pflege mit Herz!
                </h2>
                <p className="text-muted-foreground mb-4">
                  Unser Pflegedienst ist immer für Sie da, auch an Wochenenden und Feiertagen. Bei Notfällen sind wir selbstverständlich auch in der Nacht für Sie da.
                </p>
                <p className="text-muted-foreground mb-8">
                  Je nach Pflegegrad und Ihren persönlichen Bedürfnissen, wie soziale, kulturelle oder religiöse Ansprüche, bieten wir eine auf Sie abgestimmte Pflege. Aufgrund langjähriger Erfahrung garantieren wir eine sehr hohe Qualität.
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
                      Welche Aufgaben übernimmt der Pflegedienst in Frankfurt Höchst?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser ambulanter Pflegedienst in Frankfurt Höchst unterstützt Sie bei den Bereichen Körperpflege, Ankleiden, Mobilität, Verpflegung, Ausscheidungen und Hauswirtschaft. Daneben bieten wir Ihnen Hilfe bei Behördengängen und Anträgen. Auch die Intensivpflege können wir für Sie übernehmen.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Kosten fallen für einen Pflegedienst in Frankfurt Höchst an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die Kosten richten sich nach dem individuellen Pflegebedarf und Pflegegrad. Wir beraten Sie gerne zu den Kosten und möglichen Finanzierungswegen über die Pflegekasse.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Pflegegrade betreut der Pflegedienst in Frankfurt Höchst?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Wir betreuen Patienten aller Pflegegrade – von der einfachen Alltagsunterstützung bis zur komplexen Intensivpflege.
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

export default Hoechst;
