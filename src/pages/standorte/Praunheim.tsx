import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Heart, Shield, Users, Utensils, Brain, HelpCircle } from "lucide-react";
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

const praunheimFaqs = [
  {
    question: "Wie kann ich den Avyta Pflegedienst in Frankfurt Praunheim in Anspruch nehmen?",
    answer: "Unser freundliches Team können Sie noch vor der Beantragung eines Pflegegrads für ein persönliches Erstgespräch kontaktieren. Wir beraten Sie gern zu nötigen Anträgen bei Ihrer Krankenkasse und Finanzierungsmöglichkeiten. Der Antrag für die Pflege wird über die zuständige Krankenkasse erteilt."
  },
  {
    question: "Welche Pflegegrade können vom Avyta Pflegedienst in Frankfurt Praunheim versorgt werden?",
    answer: "Wir betreuen Patienten aller Pflegegrade – von der einfachen Alltagsunterstützung bis zur komplexen Intensivpflege mit Beatmung."
  },
  {
    question: "Wie sieht der Alltag mit einem Pflegedienst in Frankfurt Praunheim als Hilfe aus?",
    answer: "Wir passen uns Ihrem Tagesablauf an und kommen zu den vereinbarten Zeiten. Sie behalten Ihre Selbstständigkeit und erhalten genau die Unterstützung, die Sie benötigen."
  },
,
  {
    question: "Was kostet der Pflegedienst in Frankfurt Praunheim?",
    answer: "Die Kosten für unseren Pflegedienst in Frankfurt Praunheim werden größtenteils von der Pflegekasse übernommen. Ab Pflegegrad 2 stehen Sachleistungen von 761 bis 2.200 Euro monatlich zur Verfügung. Wir erstellen gerne einen individuellen Kostenvoranschlag."
  },
  {
    question: "Ist der Pflegedienst Frankfurt Praunheim auch am Wochenende verfügbar?",
    answer: "Ja, unser Pflegedienst in Frankfurt Praunheim ist an 365 Tagen im Jahr für Sie da – auch an Wochenenden und Feiertagen. Bei Notfällen erreichen Sie uns rund um die Uhr unter 069 153 914 05."
  },
  {
    question: "Bietet der Pflegedienst Frankfurt Praunheim auch Behandlungspflege an?",
    answer: "Ja, unser Pflegedienst in Frankfurt Praunheim bietet umfassende Behandlungspflege an: Medikamentengabe, Wundversorgung, Injektionen, Blutzucker- und Blutdruckkontrolle, Kompressionsstrümpfe sowie Tracheostoma- und Stomaversorgung."
  }
];
const leistungen = [
  {
    icon: Heart,
    title: "Grundpflege",
    description: "An- und Auskleiden, hygienische Körperpflege und eine normale Aufsteh-Routine sind mit unserer Unterstützung keine Hürden für Pflegebedürftige."
  },
  {
    icon: Shield,
    title: "Behandlungspflege",
    description: "Medizinische Injektionen, Messungen des Blutzuckerspiegels oder Maßnahmen zur Wundversorgung kann unser Fachpersonal bequem bei Ihnen zu Hause durchführen."
  },
  {
    icon: Users,
    title: "Intensivpflege",
    description: "Unser ausgebildetes Personal ermöglicht die häusliche Pflege von bettlägerigen Intensivpatienten. Beatmungsgeräte und Katheter sind bei uns in sicheren Händen."
  },
  {
    icon: Heart,
    title: "Palliativpflege",
    description: "Nicht heilbare Menschen und ihre Angehörigen begleiten wir in jeder Phase. Unsere Pfleger bieten emotionalen Beistand für ein würdevolles Leben."
  },
  {
    icon: Utensils,
    title: "Ernährung",
    description: "Wir unterstützen Sie bei der parenteralen und enteralen Ernährung oder helfen bei der Organisation von Lieferdiensten und Einkäufen."
  },
  {
    icon: Brain,
    title: "Soziale Pflege",
    description: "Unser Team ist speziell für den Umgang mit Demenzpatienten und älteren Menschen geschult. Wir schaffen ein vertrautes Umfeld und regen die mentale Aktivität an."
  }
];

const Praunheim = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Frankfurt Praunheim ✓ Pflege | avyta.de</title>
        <meta name="description" content="Ihr Pflegedienst in Frankfurt Praunheim für medizinische Versorgung und Pflege zu Hause. ✓ Individuelle Pflege für Menschen, die helfende Hände brauchen." />
        <link rel="canonical" href="https://www.avyta.de/standorte/frankfurt/pflegedienst-praunheim" />
        <meta property="og:title" content="Pflegedienst Frankfurt Praunheim ✓ Pflege | avyta.de" />
        <meta property="og:description" content="Ihr Pflegedienst in Frankfurt Praunheim für medizinische Versorgung und Pflege zu Hause." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/og-image.jpg" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Standorte", url: "https://www.avyta.de/standorte/frankfurt" },
          { name: "Praunheim", url: "https://www.avyta.de/standorte/frankfurt/pflegedienst-praunheim" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(praunheimFaqs)}</script>
        <script type="application/ld+json">{generateServiceSchema({
          serviceName: "Ambulanter Pflegedienst Frankfurt Praunheim",
          serviceDescription: "Ambulanter Pflegedienst in Frankfurt Praunheim: Grundpflege, Behandlungspflege und Intensivpflege zu Hause.",
          serviceType: "Ambulanter Pflegedienst",
          canonicalUrl: "https://www.avyta.de/standorte/frankfurt/pflegedienst-praunheim",
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
                  Avyta – Ihr herzlicher Pflegedienst in Frankfurt Praunheim
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Selbstbestimmung ist der Schlüssel zu voller Lebensqualität. Wenn Sie oder Ihre Angehörigen alltägliche Aufgaben nicht mehr ohne Hilfe bewältigen können, ist unser ambulanter Pflegedienst für Sie da.
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
                    Wir unterstützen Sie bei der Bewältigung Ihres Alltags, damit normale Aufgaben wie tägliches Waschen, medizinische Versorgung oder die Haushaltsführung möglichst geringe Herausforderungen darstellen. Kontaktieren Sie unser freundliches Team jederzeit, um über Ihre persönliche Pflegesituation zu sprechen.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Mit Herz und Seele</span>
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

          {/* Leistungen */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Der Pflegedienst in Frankfurt Praunheim für jeden Bedarf
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Neben der praktischen Hilfe stehen unsere freundlichen und einfühlsamen Mitarbeiter stets als Ansprechpartner für alle Fragen rund um Ihre Gesundheit und Ihre Pflege bereit.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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

          {/* Unterstützung für Angehörige */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
                  Unterstützung für Sie und Ihre Angehörigen
                </h2>
                <Card variant="elevated" className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8">
                    <p className="text-muted-foreground mb-4">
                      Auch Helfer benötigen manchmal Hilfe. Wir von Avyta wissen, wie belastend Pflegesituationen für Angehörige sein können. Verschlechtert sich der Gesundheitszustand eines lieben Menschen, fallen medizinische Aufgaben an, die Sie vielleicht nicht mehr allein bewältigen können.
                    </p>
                    <p className="text-muted-foreground">
                      Im Alltag entlasten wir nicht nur Betroffene, sondern den gesamten Haushalt und haben stets ein offenes Ohr für Probleme und Fragen. Wir helfen Ihnen, anderen zu helfen und Ihre Angehörigen in ihrer gewohnten Umgebung zu versorgen.
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
                  Der Pflegedienst in Frankfurt Praunheim an Ihrer Seite
                </h2>
                <p className="text-muted-foreground mb-4">
                  Unser erfahrenes Avyta-Team steht mit voller Überzeugung hinter unserer Arbeit. In schweren Zeiten schafft unser Fachpersonal einen sicheren Rahmen, in dem Sie Ihre Bedürfnisse frei kommunizieren können.
                </p>
                <p className="text-muted-foreground mb-8">
                  Ein würdevolles Leben zu Hause ist mit unserer Unterstützung auch unter erschwerten Umständen das ganze Leben lang möglich. Ob zur Überbrückung von Regenerationszeiten nach Unfällen oder Operationen, oder als dauerhafte Haushalts- und Pflegehilfe – der Avyta Pflegedienst arbeitet mit Herz und Seele für Ihr Wohlbefinden.
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
                      Wie kann ich den Avyta Pflegedienst in Frankfurt Praunheim in Anspruch nehmen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser freundliches Team können Sie noch vor der Beantragung eines Pflegegrads für ein persönliches Erstgespräch kontaktieren. Wir beraten Sie gern zu nötigen Anträgen bei Ihrer Krankenkasse und Finanzierungsmöglichkeiten. Der Antrag für die Pflege wird über die zuständige Krankenkasse erteilt.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Pflegegrade können vom Avyta Pflegedienst in Frankfurt Praunheim versorgt werden?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Wir betreuen Patienten aller Pflegegrade – von der einfachen Alltagsunterstützung bis zur komplexen Intensivpflege mit Beatmung.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie sieht der Alltag mit einem Pflegedienst in Frankfurt Praunheim als Hilfe aus?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Wir passen uns Ihrem Tagesablauf an und kommen zu den vereinbarten Zeiten. Sie behalten Ihre Selbstständigkeit und erhalten genau die Unterstützung, die Sie benötigen.
                    </AccordionContent>
                  </AccordionItem>
                                  <AccordionItem value="item-4" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Was kostet der Pflegedienst in Frankfurt Praunheim?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die Kosten für unseren Pflegedienst in Frankfurt Praunheim werden größtenteils von der Pflegekasse übernommen. Ab Pflegegrad 2 stehen Sachleistungen von 761 bis 2.200 Euro monatlich zur Verfügung. Wir erstellen gerne einen individuellen Kostenvoranschlag.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Ist der Pflegedienst Frankfurt Praunheim auch am Wochenende verfügbar?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unser Pflegedienst in Frankfurt Praunheim ist an 365 Tagen im Jahr für Sie da – auch an Wochenenden und Feiertagen. Bei Notfällen erreichen Sie uns rund um die Uhr unter 069 153 914 05.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Bietet der Pflegedienst Frankfurt Praunheim auch Behandlungspflege an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unser Pflegedienst in Frankfurt Praunheim bietet umfassende Behandlungspflege an: Medikamentengabe, Wundversorgung, Injektionen, Blutzucker- und Blutdruckkontrolle, Kompressionsstrümpfe sowie Tracheostoma- und Stomaversorgung.
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

export default Praunheim;
