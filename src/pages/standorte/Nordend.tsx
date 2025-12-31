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
        <meta name="description" content="Pflegedienst Frankfurt Nordend - Ihr ambulanter Pflegedienst im beliebten Frankfurter Nordend. Grundpflege, Behandlungspflege, Intensivpflege. Herzlich & kompetent. Tel: 069 153 914 05" />
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
                  Suchen Sie einen zuverlässigen Pflegedienst in Frankfurt Nordend? Unser ambulanter Pflegedienst bietet Ihnen professionelle und herzliche Betreuung direkt in Ihrem Zuhause im beliebten Frankfurter Nordend.
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
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Ihr ambulanter Pflegedienst in Frankfurt Nordend
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    Der Pflegedienst Frankfurt Nordend von AVYTA ermöglicht es Ihnen, trotz Pflegebedürftigkeit Teil der lebendigen Nordend-Gemeinschaft zu bleiben. Das Nordend gehört zu den beliebtesten Stadtteilen Frankfurts – und wir verstehen, dass Sie auch bei gesundheitlichen Einschränkungen in Ihrer vertrauten Nachbarschaft bleiben möchten.
                  </p>
                  <p className="mb-6">
                    Unser Pflegedienst in Frankfurt Nordend passt seine Leistungen individuell an Ihre Bedürfnisse an. Von der morgendlichen Körperpflege bis zur medizinischen Versorgung – das Team unseres Pflegedienstes Frankfurt Nordend steht Ihnen mit Kompetenz und einem herzlichen Umgang zur Seite.
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
                Leistungen unseres Pflegedienstes in Frankfurt Nordend
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Der Pflegedienst Frankfurt Nordend bietet Ihnen ein umfassendes Spektrum an Pflegeleistungen, individuell auf Ihre Situation abgestimmt.
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Grundpflege im Nordend
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Unser Pflegedienst unterstützt Sie bei allen Verrichtungen des täglichen Lebens:
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

                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Behandlungspflege im Nordend
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Medizinische Maßnahmen durch qualifizierte Pflegefachkräfte unseres Pflegedienstes:
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
                      Intensivpflege vom Pflegedienst Frankfurt Nordend
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Auch Intensivpflege mit Heimbeatmung bietet unser Pflegedienst in Frankfurt Nordend an. Unsere examinierten Pflegefachkräfte übernehmen die Überwachung und Vitalisierung, das Legen von Blasenkathetern, endotracheales Absaugen sowie Lagerungsbehandlungen und Mobilisation.
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
                  AVYTA – Ihr Pflegedienst in Frankfurt Nordend
                </h2>
                <p className="text-muted-foreground mb-8">
                  Der Pflegedienst Frankfurt Nordend von AVYTA ist jeden Tag für Sie da – auch an Wochenenden und Feiertagen. Bei Notfällen erreichen Sie uns rund um die Uhr. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
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
                  Häufige Fragen zum Pflegedienst Nordend
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie schnell kann der Pflegedienst Frankfurt Nordend beginnen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Nach einem ersten Beratungsgespräch kann unser Pflegedienst in der Regel innerhalb weniger Tage mit der Pflege im Nordend beginnen. Bei dringenden Fällen finden wir auch kurzfristig eine Lösung.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Werden die Kosten für den Pflegedienst Nordend von der Pflegekasse übernommen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, bei Vorliegen eines Pflegegrades übernimmt die Pflegekasse einen Großteil der Kosten für unseren Pflegedienst in Frankfurt Nordend. Wir beraten Sie gerne zu Ihren Ansprüchen und helfen bei der Antragstellung.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Kann ich den Pflegedienst Nordend auch ohne Pflegegrad nutzen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unsere Serviceleistungen können Sie auch ohne Pflegegrad als Selbstzahler in Anspruch nehmen. Unser Pflegedienst in Frankfurt Nordend hilft Ihnen auch gerne bei der Beantragung eines Pflegegrades.
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