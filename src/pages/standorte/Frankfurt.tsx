import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight, Phone, Clock, Heart, Shield, Users, Home, Stethoscope, CheckCircle, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import CTADropdownButton from "@/components/CTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generateFAQSchema } from "@/lib/faqSchema";

const frankfurtFaqs = [
  {
    question: "Welche Kompetenzen bringt der Avyta Pflegedienst in Frankfurt mit?",
    answer: "Beim Avyta Pflegedienst in Frankfurt können wir von der Grundpflege bis zur Intensivpflege alle Stufen übernehmen und die Leistungen genau auf Ihre Bedürfnisse zuschneiden. Mit mehr als 12 Jahren Erfahrung im Bereich der Pflege können Sie uns beruhigt Ihr Vertrauen schenken."
  },
  {
    question: "Welche Kosten erwarten mich beim Avyta Pflegedienst in Frankfurt am Main?",
    answer: "Die Kosten für unseren Pflegedienst richten sich nach dem individuellen Pflegebedarf und dem Pflegegrad. Wir beraten Sie gerne ausführlich zu den Kosten und möglichen Finanzierungswegen über die Pflegekasse."
  },
  {
    question: "Wie kann ein Pflegedienst in Frankfurt beantragt werden?",
    answer: "Kontaktieren Sie uns für ein unverbindliches Erstgespräch. Wir helfen Ihnen bei allen notwendigen Anträgen und der Kommunikation mit Ihrer Pflegekasse."
  },
];
const stadtteile = [
  { name: "Bockenheim", href: "/pflegedienst-bockenheim" },
  { name: "Bornheim", href: "/pflegedienst-bornheim" },
  { name: "Dornbusch", href: "/pflegedienst-dornbusch" },
  { name: "Eckenheim", href: "/pflegedienst-eckenheim" },
  { name: "Eschersheim", href: "/pflegedienst-eschersheim" },
  { name: "Ginnheim", href: "/pflegedienst-ginnheim" },
  { name: "Griesheim", href: "/pflegedienst-griesheim" },
  { name: "Heddernheim", href: "/pflegedienst-heddernheim" },
  { name: "Höchst", href: "/pflegedienst-frankfurt-hoechst" },
  { name: "Nieder-Eschbach", href: "/pflegedienst-nieder-eschbach" },
  { name: "Niederrad", href: "/pflegedienst-niederrad" },
  { name: "Nordend", href: "/pflegedienst-nordend" },
  { name: "Ostend", href: "/pflegedienst-ostend" },
  { name: "Praunheim", href: "/pflegedienst-praunheim" },
  { name: "Preungesheim", href: "/pflegedienst-preungesheim" },
  { name: "Rödelheim", href: "/pflegedienst-roedelheim" },
  { name: "Sachsenhausen", href: "/pflegedienst-frankfurt-sachsenhausen" },
  { name: "Seckbach", href: "/pflegedienst-seckbach" },
  { name: "Westend", href: "/pflegedienst-westend" },
];

const vorteile = [
  {
    icon: Home,
    title: "Alltag möglichst beibehalten",
    description: "Unser Ziel ist es, dass Pflegebedürftige möglichst viel Selbstständigkeit in Ihrem Leben beibehalten können."
  },
  {
    icon: Users,
    title: "Flexibilität & Individualität",
    description: "Unsere Dienste sind genauso vielseitig, wie die Personen, die sie in Anspruch nehmen. Somit richten wir uns individuell nach den Pflegebedürftigen."
  },
  {
    icon: Shield,
    title: "Gesicherte Pflegequalität",
    description: "Durch hochqualifizierte Mitarbeiter und einen permanenten Prozess zur Qualitätssicherung kann Ihnen unser Ambulanter Pflegedienst Frankfurt eine hohe Qualität garantieren."
  },
  {
    icon: Stethoscope,
    title: "Angebotsvielfalt für Intensivpflege",
    description: "Nach jedem Unfall oder plötzlicher Pflegebedürftigkeit geht es um eine optimale Versorgungsqualität. Die Verfügbarkeit individueller Wohnformen für die Intensivpflege ist sehr reichhaltig."
  },
  {
    icon: Heart,
    title: "Ganzheitliche Pflegedienste",
    description: "Unsere Pflegedienste beziehen ethnische, kulturelle, soziale und religiöse Bedürfnisse mit ein."
  }
];

const grundpflegeLeistungen = [
  "Körperpflege",
  "Unterstützung bei dem An- und Auskleiden",
  "Hilfe bei der Ausscheidung",
  "Hilfe beim Essen und Trinken",
  "Maßnahmen zur Mobilität",
  "Hauswirtschaftliche Hilfe",
  "Begleitung und Betreuung",
  "Sonstige Hilfestellungen"
];

const behandlungspflegeLeistungen = [
  "Herrichten und Verabreichen von Medikamenten",
  "Kompressionsstrümpfe an- und ausziehen",
  "Injektionen",
  "Infusionen",
  "Blutdruckkontrolle",
  "Blutzuckerkontrolle",
  "Wundversorgung",
  "Tracheostomaversorgung",
  "Versorgung von Anus Praeter sowie Urostoma",
  "Parenterale & enterale Ernährung"
];

const intensivpflegeLeistungen = [
  "Überwachung & Vitalisierung des Patienten",
  "Legen eines Blasenkatheters",
  "Endotracheales Absaugen",
  "Lagerungsbehandlungen und Mobilisation",
  "Intensivpflege mit Heimbeatmung"
];

const serviceleistungen = [
  "Hilfe bei Antragsstellungen",
  "Beratung in sozialen und pflegerischen Fragen",
  "Vermittlung von Friseur, Fußpflege, Hilfsmittel, etc.",
  "Abwicklung der Medikamentenbeschaffung",
  "und vieles mehr ..."
];

const Frankfurt = () => {
  return (
    <>
      <Helmet>
        <title>Ambulante Pflege Frankfurt | AVYTA Pflegedienst</title>
        <meta name="description" content="Ambulante Pflege in Frankfurt am Main. Professioneller Pflegedienst in allen Frankfurter Stadtteilen. Behandlungspflege, Grundpflege, 24h-Pflege. Tel: 069 153 914 05" />
        <script type="application/ld+json">{generateFAQSchema(frankfurtFaqs)}</script>
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
                  AVYTA - Ihr Ambulanter Pflegedienst in Frankfurt
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Falls Sie einen hochqualifizierten Pflegedienst in Frankfurt am Main und Umgebung suchen, sind Sie hier richtig! Wir von der Avyta Pflegegesellschaft mbH bieten eine ganzheitliche Betreuung für Pflegebedürftige an.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          {/* Intro Section */}
          <section className="py-16 bg-card/50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    Wir sind spezialisiert darauf, auch in den schwierigsten Situationen gemeinsam mit Ihnen Lösungen zu erarbeiten. Falls Sie oder einer Ihrer Angehörigen pflegebedürftig wird, sind wir mit all unserer Erfahrung und Überzeugung voll für Sie da. Gemeinsam mit Ihnen erstellen wir einen Hilfsplan, der zu Ihren Anforderungen passt und Sie in Ihrem täglichen Leben bestmöglich unterstützt.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Auch am Wochenende verfügbar</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">24h Notfall-Erreichbarkeit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Was macht ein ambulanter Pflegedienst */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
                  Wozu brauchen Sie einen Ambulanten Pflegedienst in Frankfurt?
                </h2>
                <div className="bg-card rounded-2xl p-8 border border-border/50 mb-8">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    Das macht der Ambulante Pflegedienst
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Früher oder später kann es bei jeder Person passieren, dass Sie auf Pflege angewiesen ist. In Folge von Krankheiten, durch Unfälle oder altersbedingt kann der Alltag nicht mehr allein bewältigt werden.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Sie können sich selbst um Ihre pflegebedürftigen Angehörigen kümmern oder aber diese Aufgabe delegieren. Der große Vorzug am ambulanten Pflegedienst ist, dass dieser sich um die Versorgung der Pflegebedürftigen in deren häuslichem Umfeld kümmert.
                  </p>
                  <p className="text-muted-foreground">
                    Somit bleiben Selbstständigkeit und die gewohnte Umgebung nach Möglichkeit beibehalten und die Lebensqualität der betroffenen Personen fällt höher aus.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    Der Ambulante Pflegedienst Frankfurt – geeignet in vielen Fällen
                  </h3>
                  <p className="text-muted-foreground">
                    Als Faustregel lässt sich sagen, dass der Ambulante Pflegedienst immer dann für Personen geeignet ist, wenn diese ihre alltäglichen Aufgaben nicht mehr allein bewältigen können. Dies kann nach Unfällen, im Alter sowie bei geistigen Einschränkungen der Fall sein. Sollte gleichzeitig der Wunsch nach einem Verbleib in der häuslichen Umgebung gegeben sein, ist der Ambulante Pflegedienst in Frankfurt die beste Wahl.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Vorteile */}
          <section className="py-20 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Das macht AVYTA für Sie besonders vielversprechend
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                Es gibt viele Pflegedienste in Frankfurt am Main. Was spricht für die Avyta Pflegegesellschaft mbH?
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {vorteile.map((vorteil, index) => (
                  <Card key={index} variant="elevated" className="group hover:border-primary/30 transition-all">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <vorteil.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-foreground mb-2">
                        {vorteil.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {vorteil.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Leistungen */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-12 text-center">
                Diese Leistungen bietet Ihnen unser Ambulanter Pflegedienst Frankfurt
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Grundpflege */}
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Grundpflege
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Mit der Grundpflege sind die Maßnahmen zur Versorgung des Körpers gemeint. Auch Handlungen zur Vorsorge zählen zur Grundpflege.
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
                      <Stethoscope className="w-5 h-5 text-primary" />
                      Behandlungspflege
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Unter der Behandlungspflege sind medizinische Maßnahmen zu verstehen, die vom Arzt angeordnet werden.
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

                {/* Intensivpflege */}
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Intensivpflege mit Heimbeatmung
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Ein weiterer großer Bestandteil der Behandlungspflege ist die Intensivpflege mit Heimbeatmung.
                    </p>
                    <ul className="space-y-2">
                      {intensivpflegeLeistungen.map((leistung, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {leistung}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Serviceleistungen */}
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Serviceleistungen
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Diese können Sie außerhalb des Leistungskataloges der Pflegeversicherung auch ohne Pflegeeinstufung wählen.
                    </p>
                    <ul className="space-y-2">
                      {serviceleistungen.map((leistung, index) => (
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

          {/* Stadtteile */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Unsere Stadtteile in Frankfurt
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {stadtteile.map((stadtteil) => (
                  <Card key={stadtteil.name} variant="elevated" className="group cursor-pointer hover:border-primary/30">
                    <CardContent className="p-6">
                      <Link to={stadtteil.href} className="flex items-center justify-between">
                        <span className="font-display font-semibold text-foreground group-hover:text-primary">
                          {stadtteil.name}
                        </span>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Sie haben noch Fragen?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Der Ambulante Pflegedienst in Frankfurt ist eine sehr attraktive und beliebte Lösung. Hier stehen Aktivität, Lebensqualität und Wohlfühlfaktor bei den betreuten Personen an erster Stelle. Rufen Sie uns an und vereinbaren Sie einen unverbindlichen Termin - gerne bei Ihnen zu Hause.
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
                      Welche Kompetenzen bringt der Avyta Pflegedienst in Frankfurt mit?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Beim Avyta Pflegedienst in Frankfurt können wir von der Grundpflege bis zur Intensivpflege alle Stufen übernehmen und die Leistungen genau auf Ihre Bedürfnisse zuschneiden. Mit mehr als 12 Jahren Erfahrung im Bereich der Pflege können Sie uns beruhigt Ihr Vertrauen schenken.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Kosten erwarten mich beim Avyta Pflegedienst in Frankfurt am Main?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die Kosten für unseren Pflegedienst richten sich nach dem individuellen Pflegebedarf und dem Pflegegrad. Wir beraten Sie gerne ausführlich zu den Kosten und möglichen Finanzierungswegen über die Pflegekasse.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie kann ein Pflegedienst in Frankfurt beantragt werden?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Kontaktieren Sie uns für ein unverbindliches Erstgespräch. Wir helfen Ihnen bei allen notwendigen Anträgen und der Kommunikation mit Ihrer Pflegekasse.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </main>
        <NewsletterSection />
        <Footer />
      </div>
    </>
  );
};

export default Frankfurt;
