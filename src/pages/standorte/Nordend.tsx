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

const Nordend = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Frankfurt Nordend | AVYTA Ambulante Pflege</title>
        <meta name="description" content="Pflegedienst Frankfurt Nordend - professionelle ambulante Pflege in Ihrer Nähe. Grundpflege, Behandlungspflege, Intensivpflege. Herzlich und kompetent. Tel: 069 153 914 05" />
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
                  Pflegedienst Frankfurt Nordend – Ihre Pflege in vertrauter Umgebung
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Im beliebten Frankfurter Nordend bieten wir von AVYTA Ihnen professionelle ambulante Pflege direkt vor Ihrer Haustür. Unser erfahrenes Team unterstützt Sie dabei, trotz Pflegebedürftigkeit in Ihrem gewohnten Zuhause zu leben.
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
                    Das Nordend gehört zu den lebendigsten Stadtteilen Frankfurts. Wir verstehen, dass Sie auch bei gesundheitlichen Einschränkungen Teil dieser Gemeinschaft bleiben möchten. Unser ambulanter Pflegedienst ermöglicht es Ihnen, in Ihrer vertrauten Nachbarschaft zu bleiben und gleichzeitig die professionelle Unterstützung zu erhalten, die Sie benötigen.
                  </p>
                  <p className="mb-6">
                    Von der morgendlichen Körperpflege bis zur medizinischen Versorgung – wir passen unsere Leistungen individuell an Ihre Bedürfnisse an. Dabei legen wir besonderen Wert auf einen respektvollen und herzlichen Umgang.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Flexibel nach Ihrem Zeitplan</span>
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

          {/* Leistungen */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Unsere Pflegeleistungen im Nordend
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Wir bieten ein umfassendes Spektrum an Pflegeleistungen, das wir individuell auf Ihre Situation abstimmen.
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
                  Ihr zuverlässiger Partner im Nordend
                </h2>
                <p className="text-muted-foreground mb-8">
                  Wir sind jeden Tag für Sie da – auch an Wochenenden und Feiertagen. Bei Notfällen erreichen Sie uns rund um die Uhr. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
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
                      Wie schnell kann die Pflege im Nordend beginnen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Nach einem ersten Beratungsgespräch können wir in der Regel innerhalb weniger Tage mit der Pflege beginnen. Bei dringenden Fällen finden wir auch kurzfristig eine Lösung.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Werden die Kosten von der Pflegekasse übernommen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, bei Vorliegen eines Pflegegrades übernimmt die Pflegekasse einen Großteil der Kosten. Wir beraten Sie gerne zu Ihren Ansprüchen und helfen bei der Antragstellung.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Kann ich den Pflegedienst auch ohne Pflegegrad nutzen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unsere Serviceleistungen können Sie auch ohne Pflegegrad als Selbstzahler in Anspruch nehmen. Wir helfen Ihnen gerne bei der Beantragung eines Pflegegrades.
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

export default Nordend;
