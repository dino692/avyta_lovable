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
  "Hilfe beim Essen und Trinken",
  "Hilfe bei der Ausscheidung",
  "Maßnahmen zur Mobilität",
  "Hauswirtschaftliche Hilfe",
  "Hilfe bei der Körperpflege",
  "Unterstützung bei dem An- und Auskleiden"
];

const behandlungspflegeLeistungen = [
  "Wundversorgung",
  "Blutdruckkontrolle",
  "Blutzuckerkontrolle",
  "Tracheostomaversorgung",
  "Versorgung von Anus Praeter sowie Urostoma",
  "Parenterale & enterale Ernährung",
  "Kompressionsstrümpfe an- und ausziehen",
  "Herrichten und Verabreichen von Medikamenten",
  "Injektionen",
  "Infusionen"
];

const Niederrad = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Frankfurt Niederrad | AVYTA Ambulante Pflege</title>
        <meta name="description" content="Pflegedienst in Frankfurt Niederrad - Pflege in vertrauter Umgebung. Grundpflege, Behandlungspflege, Intensivpflege. Herzlich und familiär. Tel: 069 153 914 05" />
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
                  Pflegedienst in Frankfurt Niederrad: Pflege in vertrauter Umgebung
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Ihre Angehörigen oder Sie können den Alltag nicht mehr allein bewältigen und suchen nach einem ambulanten Pflegedienst? Unser Pflegedienst bietet Ihnen eine auf Ihre individuellen Bedürfnisse abgestimmte Betreuung.
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
                    Eine Pflegebedürftigkeit entsteht durch die unterschiedlichsten Gründe. Personen sind unter anderem aufgrund von geistigen Einschränkungen, einem fortgeschrittenen Alter oder aufgrund eines schweren Unfalles auf Hilfe im Alltag angewiesen.
                  </p>
                  <p className="mb-6">
                    Mit dem Avyta Pflegedienst in Frankfurt Niederrad erhalten Sie in Ihrer gewohnten häuslichen Umgebung eine attraktive Lebensqualität, da Sie nicht in ein Pflegeheim umziehen müssen. Sie können Ihre Eigenständigkeit behalten und gleichzeitig die bestmögliche Pflege erhalten, denn wir kommen zu Ihnen.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Auch nachts erreichbar</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Herzliche Pflege</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Individuelle Pflege */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Avyta Pflegedienst in Frankfurt Niederrad bietet individuelle Pflege
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Unser umfangreiches Leistungsspektrum ermöglicht jeder Person eine individuell angepasste Pflege – von der Grundpflege bis zur medizinischen Versorgung.
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
                      Unser geschultes Personal ermöglicht auch Maßnahmen der Intensivpflege in Ihrer gewohnten Umgebung: Lagerungsbehandlungen und Mobilisation, Überwachung & Vitalisierung, Legen eines Blasenkatheters, endotracheales Absaugen oder auch eine Heimbeatmung.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Wir bieten auch Serviceleistungen: Vermittlung von Friseuren, Hilfe beim Ausfüllen von Anträgen, Hilfe bei der Besorgung von Medikamenten oder Unterstützung und Begleitung von Spaziergängen.
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
                  Pflegedienst in Frankfurt Niederrad – herzliche und familiäre Pflege
                </h2>
                <p className="text-muted-foreground mb-4">
                  Wir bieten eine individuelle und auf Sie abgestimmte Pflege ganz nach Ihren persönlichen Bedürfnissen und Ihrem Pflegegrad. Neben Ihrem gesundheitlichen Zustand berücksichtigen wir auch Ihre kulturellen, sozialen und religiösen Anforderungen.
                </p>
                <p className="text-muted-foreground mb-8">
                  Die langjährige Erfahrung garantiert eine sehr hohe Pflegequalität. Unser Pflegedienst ist immer für Sie da, auch an Wochenenden und Feiertagen. Bei Notfällen sind wir selbstverständlich auch in der Nacht erreichbar.
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
                      Welche Bereiche der Grundpflege werden vom Pflegedienst in Frankfurt Niederrad übernommen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      In der Grundpflege übernehmen wir beispielsweise die Unterstützung in Alltagsaufgaben wie Essen und Trinken, Mobilität, Haushalt, Körperpflege und Ausscheidungen, An- und Auskleiden und noch vieles mehr.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Leistungen kann der Pflegedienst in Frankfurt Niederrad in der Behandlungs- und Intensivpflege übernehmen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Wir übernehmen alle vom Arzt verordneten medizinischen Maßnahmen wie Injektionen, Wundversorgung, Blutzuckerkontrolle und vieles mehr. In der Intensivpflege bieten wir auch Heimbeatmung und Vitalisierung an.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie beauftragt man den Pflegedienst in Frankfurt Niederrad?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Kontaktieren Sie uns für ein unverbindliches Erstgespräch. Wir erstellen dann einen individuellen Pflegeplan und helfen bei allen Anträgen gegenüber der Pflegekasse.
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

export default Niederrad;
