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

const Seckbach = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Frankfurt Seckbach | AVYTA Ambulante Pflege</title>
        <meta name="description" content="Pflegedienst Frankfurt Seckbach - professionelle Pflege mit Blick auf den Lohrberg. Grundpflege, Behandlungspflege, Intensivpflege. Herzlich willkommen. Tel: 069 153 914 05" />
        <link rel="canonical" href="https://www.avyta.de/pflegedienst-seckbach" />
        <meta property="og:title" content="Pflegedienst Frankfurt Seckbach | AVYTA Ambulante Pflege" />
        <meta property="og:description" content="Pflegedienst Frankfurt Seckbach - professionelle Pflege mit Blick auf den Lohrberg." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
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
                  Pflegedienst Frankfurt Seckbach – Professionell und Herzlich
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Im grünen Seckbach am Fuße des Lohrbergs bieten wir Ihnen ambulante Pflege mit Herz. Genießen Sie die Vorzüge Ihres Stadtteils – mit unserer professionellen Unterstützung.
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
                    Seckbach bietet mit seiner Nähe zum Lohrberg und den Streuobstwiesen eine besondere Lebensqualität. Diese möchten wir für Sie erhalten. Unser ambulanter Pflegedienst ermöglicht es Ihnen, in Ihrer vertrauten Umgebung zu bleiben und gleichzeitig die Pflege zu erhalten, die Sie benötigen.
                  </p>
                  <p className="mb-6">
                    Unser erfahrenes Team kennt die Besonderheiten des Stadtteils und ist schnell bei Ihnen. Wir bieten Ihnen individuelle Pflege, die sich an Ihren Wünschen und Bedürfnissen orientiert.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Schnell bei Ihnen</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Mit Herz dabei</span>
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
                Pflegeleistungen in Seckbach
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Wir bieten Ihnen alle Leistungen für eine umfassende häusliche Pflege.
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
                  Ihr Pflegeteam in Seckbach
                </h2>
                <p className="text-muted-foreground mb-8">
                  Wir freuen uns darauf, Sie kennenzulernen. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch – gerne bei Ihnen zu Hause.
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
                      Wie erreiche ich Sie am besten?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Sie erreichen uns telefonisch, per E-Mail oder über unser Kontaktformular. Wir melden uns schnellstmöglich bei Ihnen zurück.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Können Sie auch am Wochenende kommen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, wir sind auch an Wochenenden und Feiertagen für Sie da. Bei Notfällen erreichen Sie uns rund um die Uhr.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Was brauche ich für den ersten Termin?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Halten Sie am besten Ihre Versichertenkarte und eventuelle ärztliche Verordnungen bereit. Wir besprechen dann gemeinsam Ihre Situation.
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

export default Seckbach;
