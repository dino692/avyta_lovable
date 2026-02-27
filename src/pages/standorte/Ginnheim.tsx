import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Heart, Shield, Home, Clipboard, HelpCircle, Stethoscope } from "lucide-react";
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

const ginnheimFaqs = [
  {
    question: "Welche medizinischen Leistungen kann Avyta, der Pflegedienst in Ginnheim, zu Hause übernehmen?",
    answer: "Ihre Gesundheit steht für uns an oberster Stelle. Blutzuckermessungen oder Blutdruckmessungen führen unsere Mitarbeiter routiniert durch. Zur Versorgung von medizinischen Geräten wie Anus Praeter, Tracheostoma oder Urostoma setzen wir ausgebildete Fachkräfte ein. Auch die Vergabe von Injektionen und Infusionen ist mit unserer Unterstützung bequem zu Hause möglich."
  },
  {
    question: "Wie können Palliativpatienten mit einem Pflegedienst in Ginnheim zu Hause versorgt werden?",
    answer: "Wir begleiten Palliativpatienten und ihre Angehörigen mit Einfühlungsvermögen und Fachkompetenz. Unser Ziel ist es, Schmerzen zu lindern und eine würdevolle Betreuung zu gewährleisten."
  },
  {
    question: "Welche Maßnahmen zur Vorsorge von Krankheiten betreibt der Pflegedienst in Ginnheim?",
    answer: "Wir achten auf Prophylaxe-Maßnahmen wie Dekubitusprophylaxe, Sturzprävention und regelmäßige Vitalzeichen-Kontrollen, um Komplikationen frühzeitig zu erkennen und zu vermeiden."
  },
];
const leistungen = [
  {
    icon: Heart,
    title: "Basispflege",
    description: "Wir erleichtern Ihnen die morgendliche Routine und unterstützen Sie beim An- und Auskleiden, bei Toilettengängen oder beim Einkaufen. Alle Aufgaben im Haushalt, die Ihnen schwerfallen, können unsere Pflegehelfer übernehmen."
  },
  {
    icon: Stethoscope,
    title: "Behandlungspflege",
    description: "Vom An- und Ausziehen von Kompressionsstrümpfen bis zur intensivmedizinischen Behandlung. Qualifizierte Fachkräfte versorgen medizinische Geräte, managen die Medikamentenvergabe oder kümmern sich um die Wundversorgung."
  },
  {
    icon: Clipboard,
    title: "Pflegeplanung",
    description: "Jede Veränderung des Gesundheitszustands erfordert eine Anpassung des Pflegeplans. Wir stehen in engem Kontakt mit Pflegebedürftigen und Angehörigen und beobachten den Krankheitsverlauf aufmerksam."
  },
  {
    icon: Home,
    title: "Haushaltshilfe",
    description: "Zu unseren Aufgaben gehört es manchmal auch, Räume zu reinigen, Wäsche zu waschen oder Haustiere zu versorgen."
  }
];

const Ginnheim = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst in Ginnheim für die häusliche Versorgung</title>
        <meta name="description" content="Der Avyta Pflegedienst in Ginnheim ist an 365 Tagen im Jahr für Sie im Einsatz. Häusliche Pflege ist mit unserem Einsatz in jeder Situation möglich." />
        <link rel="canonical" href="https://www.avyta.de/pflegedienst-ginnheim" />
        <meta property="og:title" content="Pflegedienst in Ginnheim für die häusliche Versorgung" />
        <meta property="og:description" content="Der Avyta Pflegedienst in Ginnheim ist an 365 Tagen im Jahr für Sie im Einsatz." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Standorte", url: "https://www.avyta.de/standorte/frankfurt" },
          { name: "Ginnheim", url: "https://www.avyta.de/pflegedienst-ginnheim" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(ginnheimFaqs)}</script>
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
                  Frankfurts Pflegedienst in Ginnheim – in der Region für Sie unterwegs
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Häusliche Pflege ist eine Aufgabe für viele. Wenn Ihnen der Alltag aufgrund von altersbedingten Beschwerden, Krankheit oder Verletzungen zur Last wird, reichen wir von Avyta Ihnen helfende Hände.
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
                    Unsere ausgebildeten Pflegefachkräfte kümmern sich nach Plan um Ihre medizinische Versorgung und unterstützen Sie bei allen Hürden des Alltags. Aufgaben wie Treppensteigen, Kochen oder die tägliche Hygiene fallen mit der Unterstützung unseres Pflegedienstes in Ginnheim leichter, sodass Sie sich trotz Einschränkungen im gewohnten Umfeld wohlfühlen können.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Ganzheitlicher Blick</span>
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

          {/* Würdevoll leben */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Würdevoll zu Hause leben mit Unterstützung vom Pflegedienst in Ginnheim
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Eine Verschlechterung des Gesundheitszustands bedeutet für Betroffene und ihre Angehörigen vielfältige Belastung. Die Lebensqualität sollte jedoch nicht unter körperlichen oder geistigen Einschränkungen leiden.
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {leistungen.map((leistung, index) => (
                  <Card key={index} variant="elevated" className="group hover:border-primary/30 transition-all">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <leistung.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-foreground mb-2">
                        {leistung.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {leistung.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Für Angehörige */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
                  Häusliche Pflege wird möglich mit dem Avyta Pflegedienst Ginnheim
                </h2>
                <Card variant="elevated">
                  <CardContent className="p-8">
                    <p className="text-muted-foreground mb-4">
                      Angehörige werden durch Krankheitsfälle in der Familie oft doppelt belastet. Neben der Sorge um eine liebe Person wird auch der eigene Alltag eingeschränkt. Wir sind Ihr Ansprechpartner für alle Fragen rund um den Pflegedienst in Ginnheim und bei medizinischen Fragen zum Zustand von Pflegebedürftigen.
                    </p>
                    <p className="text-muted-foreground">
                      Wachsen Ihnen medizinische Aufgaben über den Kopf, leiten unsere kompetenten Pflegefachkräfte Sie Schritt für Schritt zum richtigen Umgang mit der neuen Alltagssituation an. Gemeinsam erarbeiten wir einen Plan, wie Sie Ihre Angehörigen im Krankheitsfall am besten unterstützen und zu Hause pflegen können.
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
                  Der Pflegedienst in Ginnheim mit ganzheitlichem Blick
                </h2>
                <p className="text-muted-foreground mb-4">
                  Wir von Avyta betrachten Menschen und ihre Probleme ganzheitlich, um die Lebensqualität von Pflegebedürftigen zu erhalten und zu verbessern. Unser Team ist breit aufgestellt, sodass wir Ihnen bei allen Problemen des Alltags zur Seite stehen können.
                </p>
                <p className="text-muted-foreground mb-8">
                  Der besondere Fokus unserer Arbeit liegt vor allem im Zwischenmenschlichen. Neben hygienischen Maßnahmen, Mobilitätshilfe und Medikamentenvergabe haben wir stets ein offenes Ohr für Ihre Fragen und Anliegen. Für ein unverbindliches Erstgespräch stehen unsere Mitarbeiter jederzeit für Sie bereit.
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
                      Welche medizinischen Leistungen kann Avyta, der Pflegedienst in Ginnheim, zu Hause übernehmen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ihre Gesundheit steht für uns an oberster Stelle. Blutzuckermessungen oder Blutdruckmessungen führen unsere Mitarbeiter routiniert durch. Zur Versorgung von medizinischen Geräten wie Anus Praeter, Tracheostoma oder Urostoma setzen wir ausgebildete Fachkräfte ein. Auch die Vergabe von Injektionen und Infusionen ist mit unserer Unterstützung bequem zu Hause möglich.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie können Palliativpatienten mit einem Pflegedienst in Ginnheim zu Hause versorgt werden?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Wir begleiten Palliativpatienten und ihre Angehörigen mit Einfühlungsvermögen und Fachkompetenz. Unser Ziel ist es, Schmerzen zu lindern und eine würdevolle Betreuung zu gewährleisten.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Maßnahmen zur Vorsorge von Krankheiten betreibt der Pflegedienst in Ginnheim?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Wir achten auf Prophylaxe-Maßnahmen wie Dekubitusprophylaxe, Sturzprävention und regelmäßige Vitalzeichen-Kontrollen, um Komplikationen frühzeitig zu erkennen und zu vermeiden.
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

export default Ginnheim;
