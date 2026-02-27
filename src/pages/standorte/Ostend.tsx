import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Heart, Shield, CheckCircle, HelpCircle } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";
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

const Ostend = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Frankfurt Ostend | AVYTA Ambulante Pflege</title>
        <meta name="description" content="Pflegedienst Frankfurt Ostend - Ihr ambulanter Pflegedienst im dynamischen Frankfurter Ostend. Grundpflege, Behandlungspflege, Intensivpflege. Kompetent & herzlich. Tel: 069 153 914 05" />
        <link rel="canonical" href="https://www.avyta.de/pflegedienst-ostend" />
        <meta property="og:title" content="Pflegedienst Frankfurt Ostend | AVYTA Ambulante Pflege" />
        <meta property="og:description" content="Pflegedienst Frankfurt Ostend - Grundpflege, Behandlungspflege, Intensivpflege. Kompetent & herzlich." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Standorte", url: "https://www.avyta.de/standorte/frankfurt" },
          { name: "Ostend", url: "https://www.avyta.de/pflegedienst-ostend" },
        ])}</script>
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
                  Pflegedienst Frankfurt Ostend – Professionelle Pflege vor Ort
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Suchen Sie einen kompetenten Pflegedienst in Frankfurt Ostend? Unser ambulanter Pflegedienst bietet Ihnen professionelle Betreuung in Ihrem vertrauten Zuhause im aufstrebenden Frankfurter Ostend.
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
                  Ihr ambulanter Pflegedienst in Frankfurt Ostend
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    Der Pflegedienst Frankfurt Ostend von AVYTA ist Ihr zuverlässiger Partner für häusliche Pflege in einem der modernsten Stadtteile Frankfurts. Das Ostend hat sich zu einem lebendigen Viertel entwickelt – und wir sorgen dafür, dass Sie auch bei Pflegebedürftigkeit von dieser Lebensqualität profitieren können.
                  </p>
                  <p className="mb-6">
                    Ob in den neuen Wohnanlagen am Mainufer oder in den traditionsreichen Altbauten – unser Pflegedienst in Frankfurt Ostend kommt zu Ihnen und bietet professionelle Pflegeleistungen direkt in Ihrem Zuhause. Wir erstellen einen individuellen Pflegeplan, der genau auf Ihre Bedürfnisse zugeschnitten ist.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">24h Erreichbarkeit</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Individuelle Betreuung</span>
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
                Leistungen unseres Pflegedienstes in Frankfurt Ostend
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Der Pflegedienst Frankfurt Ostend bietet Ihnen ein umfassendes Angebot an Pflegeleistungen für jeden Bedarf.
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Grundpflege im Ostend
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
                      Behandlungspflege im Ostend
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
                      Intensivpflege vom Pflegedienst Frankfurt Ostend
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Auch Intensivpflege mit Heimbeatmung bietet unser Pflegedienst in Frankfurt Ostend an. Unsere examinierten Pflegefachkräfte übernehmen die Überwachung und Vitalisierung, das Legen von Blasenkathetern, endotracheales Absaugen sowie Lagerungsbehandlungen und Mobilisation.
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
                  AVYTA – Ihr Pflegedienst in Frankfurt Ostend
                </h2>
                <p className="text-muted-foreground mb-8">
                  Der Pflegedienst Frankfurt Ostend von AVYTA verbindet langjährige Erfahrung mit einem qualifizierten Team. Wir sind für Sie da – täglich, zuverlässig und mit Herz. Kontaktieren Sie uns noch heute für eine unverbindliche Pflegeberatung.
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
                  Häufige Fragen zum Pflegedienst Ostend
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Qualifikationen haben die Mitarbeiter des Pflegedienstes Frankfurt Ostend?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser Pflegedienst-Team im Ostend besteht aus examinierten Pflegefachkräften, Pflegehelfern und Betreuungskräften. Alle Mitarbeiter werden regelmäßig fortgebildet und arbeiten nach höchsten Qualitätsstandards.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Kann ich beim Pflegedienst Ostend feste Pflegekräfte bekommen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unser Pflegedienst in Frankfurt Ostend achtet auf Kontinuität in der Pflege. Nach Möglichkeit betreuen Sie dieselben Pflegekräfte, damit ein Vertrauensverhältnis entstehen kann.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie kontaktiere ich den Pflegedienst Frankfurt Ostend?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Rufen Sie unseren Pflegedienst an oder schreiben Sie uns. Wir vereinbaren dann einen Termin für ein persönliches Beratungsgespräch, gerne bei Ihnen zu Hause im Ostend.
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

export default Ostend;