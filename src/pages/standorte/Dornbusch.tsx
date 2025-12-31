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
  "Hilfe bei der Körperpflege",
  "Unterstützung beim An- und Auskleiden",
  "Hilfe beim Essen und Trinken",
  "Hilfe bei der Ausscheidung",
  "Maßnahmen zur Mobilität",
  "Hauswirtschaftliche Hilfe"
];

const behandlungspflegeLeistungen = [
  "Herrichten und Verabreichen von Medikamenten",
  "Kompressionsstrümpfe an- und ausziehen",
  "Injektionen und Infusionen",
  "Blutdruck- und Blutzuckerkontrolle",
  "Wundversorgung",
  "Tracheostomaversorgung",
  "Versorgung von Anus Praeter und Urostoma",
  "Parenterale und enterale Ernährung"
];

const Dornbusch = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Frankfurt Dornbusch | AVYTA Ambulante Pflege</title>
        <meta name="description" content="Pflegedienst Frankfurt Dornbusch - familiäre Pflege in grüner Umgebung. Grundpflege, Behandlungspflege, Intensivpflege. Persönlich und herzlich. Tel: 069 153 914 05" />
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
                  Pflegedienst Frankfurt Dornbusch – Familiäre Pflege für Sie
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Im grünen Frankfurter Dornbusch bieten wir Ihnen ambulante Pflege mit persönlicher Note. Unser Team begleitet Sie mit Herz und Kompetenz durch den Alltag.
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
                    Der Dornbusch ist bekannt für seine ruhige, grüne Wohnlage und das familiäre Flair. Genau diese Atmosphäre möchten wir mit unserem Pflegedienst erhalten und unterstützen. Bei uns steht der Mensch im Mittelpunkt – nicht die Bürokratie.
                  </p>
                  <p className="mb-6">
                    Wir nehmen uns Zeit für Sie und Ihre Anliegen. Gemeinsam finden wir die beste Lösung, um Ihren Alltag trotz gesundheitlicher Einschränkungen so angenehm wie möglich zu gestalten. Dabei arbeiten wir eng mit Ihren Angehörigen und Ärzten zusammen.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Zeit für Sie</span>
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

          {/* Leistungen */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Unsere Pflegeleistungen im Dornbusch
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Von der Alltagsunterstützung bis zur medizinischen Versorgung – wir sind für Sie da.
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Grundpflege
                    </h3>
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

                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Behandlungspflege
                    </h3>
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
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Ihr Pflegepartner im Dornbusch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Wir sind Teil Ihrer Nachbarschaft und verstehen die Bedürfnisse unserer Patienten. Rufen Sie uns an – wir freuen uns darauf, Sie kennenzulernen.
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
                      Wie oft kommen die Pflegekräfte?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Das richtet sich ganz nach Ihrem Bedarf – von einmal täglich bis zu mehreren Besuchen am Tag. Wir passen den Pflegeplan individuell an.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Unterstützen Sie auch bei Demenz?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, wir haben erfahrene Mitarbeiter, die speziell für die Betreuung von Menschen mit Demenz geschult sind. Wir bieten liebevolle und geduldige Begleitung.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Können Sie auch kurzfristig einspringen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      In vielen Fällen ja. Rufen Sie uns an und wir schauen, wie wir Ihnen schnellstmöglich helfen können.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

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

export default Dornbusch;
