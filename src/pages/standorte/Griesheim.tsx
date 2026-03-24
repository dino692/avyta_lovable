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
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";
import { generateServiceSchema } from "@/lib/serviceSchema";
import TrustBadges from "@/components/TrustBadges";

const griesheimFaqs = [
  {
    question: "Welche Leistungen übernimmt der Avyta Pflegedienst in Griesheim?",
    answer: "Unser Pflegedienst in Griesheim übernimmt alle üblichen Hilfen rund um Mobilität, Körperpflege, An- und Auskleiden, Hauswirtschaft, Verpflegung und Ausscheidungen. Außerdem können wir Sie und Ihre Angehörigen auch in Bereichen der Intensivpflege und bei Behördengängen und Anträgen unterstützen."
  },
  {
    question: "Wer kann den Pflegedienst in Griesheim in Anspruch nehmen?",
    answer: "Unser Pflegedienst in Griesheim ist für alle geeignet, die aus unterschiedlichsten Gründen den Alltag nicht mehr eigenständig bewältigen können. Gründe dafür können beispielsweise das Alter sein, geistige Krankheiten oder schwere Unfälle mit kurzfristigen oder langfristigen Einschränkungen."
  },
  {
    question: "Wie sehr kann der Pflegedienst in Griesheim individualisiert werden?",
    answer: "Bei unserem Angebot haben Sie selbstverständlich die Möglichkeit, eine Leistung genau passend zu Ihren individuellen Umständen zu erhalten. So kann unser Pflegedienst in Griesheim auch an Wochenenden, Feiertagen und notfalls in der Nacht an Ihrer Seite sein. Ebenfalls berücksichtigen wir die sozialen, kulturellen und religiösen Bedürfnisse der zu pflegenden Person."
  },
,
  {
    question: "Was kostet der Pflegedienst in Frankfurt Griesheim pro Monat?",
    answer: "Die monatlichen Kosten für unseren Pflegedienst in Frankfurt Griesheim hängen vom individuellen Pflegebedarf ab. Bei Vorliegen eines Pflegegrades übernimmt die Pflegekasse Sachleistungen zwischen 761 und 2.200 Euro monatlich. Wir erstellen Ihnen gerne einen Kostenvoranschlag."
  },
  {
    question: "Bietet der Pflegedienst Griesheim auch Verhinderungspflege an?",
    answer: "Ja, unser Pflegedienst in Frankfurt Griesheim bietet Verhinderungspflege an. Ab 2025 steht ein flexibles Budget von bis zu 3.539 Euro jährlich zur Verfügung, wenn pflegende Angehörige eine Auszeit brauchen."
  },
  {
    question: "Wie schnell ist der Pflegedienst Griesheim einsatzbereit?",
    answer: "Nach einem kostenlosen Erstgespräch kann unser Pflegedienst in Frankfurt Griesheim meist innerhalb weniger Tage starten. Bei dringenden Fällen finden wir kurzfristig eine Lösung. Rufen Sie uns an unter 069 153 914 05."
  }
];

const grundpflegeLeistungen = [
  "Maßnahmen zur Mobilität",
  "Hauswirtschaftliche Hilfe",
  "Hilfe bei der Körperpflege",
  "Unterstützung bei dem An- und Auskleiden",
  "Hilfe beim Essen und Trinken",
  "Hilfe bei der Ausscheidung"
];

const behandlungspflegeLeistungen = [
  "Tracheostomaversorgung",
  "Versorgung von Anus Praeter sowie Urostoma",
  "Parenterale & enterale Ernährung",
  "Kompressionsstrümpfe an- und ausziehen",
  "Herrichten und Verabreichen von Medikamenten",
  "Injektionen",
  "Infusionen",
  "Blutdruckkontrolle",
  "Blutzuckerkontrolle",
  "Wundversorgung"
];

const Griesheim = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Griesheim - flexibel und individuell</title>
        <meta name="description" content="In Frankfurts Stadtteil Griesheim sind wir für Sie unterwegs. Als ambulanter Pflegedienst können wir Sie in Ihrem täglichen Leben unterstützen. | avyta.de" />
        <link rel="canonical" href="https://www.avyta.de/standorte/frankfurt/griesheim" />
        <meta property="og:title" content="Pflegedienst Griesheim - flexibel und individuell" />
        <meta property="og:description" content="In Frankfurts Stadtteil Griesheim sind wir für Sie unterwegs." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Standorte", url: "https://www.avyta.de/standorte/frankfurt" },
          { name: "Griesheim", url: "https://www.avyta.de/standorte/frankfurt/griesheim" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(griesheimFaqs)}</script>
        <script type="application/ld+json">{generateServiceSchema({
          serviceName: "Ambulanter Pflegedienst Frankfurt Griesheim",
          serviceDescription: "Ambulanter Pflegedienst in Frankfurt Griesheim: Grundpflege, Behandlungspflege und Intensivpflege zu Hause.",
          serviceType: "Ambulanter Pflegedienst",
          canonicalUrl: "https://www.avyta.de/standorte/frankfurt/griesheim",
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
                  Pflegedienst Griesheim: Individuelle Pflege für Ihre Bedürfnisse
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Sie suchen für sich oder Ihre Angehörigen einen professionellen <strong>Pflegedienst in Griesheim</strong>, da Sie in Ihrem Alltag Unterstützung benötigen? Mit unserem Pflegedienst in Griesheim bieten wir Ihnen oder Ihren Angehörigen eine <strong>individuelle</strong> und auf Ihre Bedürfnisse abgestimmte <strong>Betreuung</strong>.
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
                    Unser <strong>Pflegedienst in Frankfurt-Griesheim</strong> richtet sich an alle Personen, die Ihre alltäglichen Aufgaben nicht mehr selbstständig erledigen können. Verschiedene Gründe führen dazu, dass man auf Hilfe angewiesen ist. So können einige Personen nach schweren Unfällen aufgrund geistiger Einschränkungen oder aufgrund Ihres Alters Ihren Alltag nicht ohne Hilfe bewältigen. Unser <strong>Pflegedienst in Griesheim</strong> bietet Ihnen und Ihren Angehörigen eine individuelle und auf Ihre Bedürfnisse angepasst Hilfe.
                  </p>
                  <p className="mb-6">
                    Mit dem Pflegedienst in Griesheim können Sie oder Ihre Angehörigen die <strong>Eigenständigkeit</strong> und <strong>Pflegebedürftigkeit</strong> kombinieren. Sie oder Ihre Angehörigen können in Ihrer vertrauten und häuslichen Umgebung verbleiben und müssen nicht in ein Pflegeheim umziehen, denn der Pflegedienst in Griesheim kommt zu Ihnen. Eine <strong>attraktive Lebensqualität</strong> in Ihrer persönlichen <strong>Wohlfühlatmosphäre</strong> erhalten Sie durch die <strong>professionelle Pflege</strong> des Pflegedienstes in Frankfurt Griesheim.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Auch nachts erreichbar</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Menschlichkeit im Mittelpunkt</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ganzheitliche Pflegeleistungen */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Pflegedienst in Griesheim - ganzheitliche Pflegeleistungen
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Jede Person hat <strong>unterschiedliche Bedürfnisse</strong> und Ansprüche an eine <strong>Pflege</strong>, je nach Pflegegrad. Die <strong>Pflegebedürfnisse</strong> der Personen haben verschiedene Facetten, daher hat der <strong>Pflegedienst in Griesheim</strong> ein <strong>umfangreiches Leistungsspektrum</strong> ausgearbeitet. Dieses Leistungsspektrum ermöglicht jeder Person eine für Sie <strong>angepasste Pflege</strong>. Wir, der Pflegedienst in Griesheim, bieten Ihnen oder Ihren Angehörigen die klassischen <strong>Elemente der Grundpflege</strong>, aber es auch medizinische und <strong>alltägliche Versorgungen</strong> an.
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
                      Im Allgemeinen beschreibt <strong>die Grundpflege</strong> alle Maßnahmen, die der Versorgung des Körpers dienen. In der <Link to="/leistungen/grundpflege" className="text-primary hover:underline font-medium">Grundpflege</Link> bieten wir, der <strong>Pflegedienst aus Frankfurt Griesheim</strong>, Ihnen oder Ihren Angehörigen unter anderem diese Hilfsangebote an:
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
                      Neben der Grundpflege bieten wir Ihnen oder Ihren Angehörigen auch <strong>eine Behandlungspflege</strong> an. Der Begriff <Link to="/leistungen/behandlungspflege" className="text-primary hover:underline font-medium">Behandlungspflege</Link> beschreibt verschiedene medizinische Maßnahmen, die Ihnen von Ihrem Arzt verschrieben wurden. Die folgenden medizinische Maßnahmen werden von unserem <strong>hochqualifizierten Personal</strong> des <Link to="/" className="text-primary hover:underline font-medium">ambulanten Pflegedienstes</Link> aus Griesheim durchgeführt:
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
                      Im Rahmen der Behandlungspflege übernehmen wir bei Bedarf auch Maßnahmen der <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" className="text-primary hover:underline font-medium">Intensivpflege</Link>. Unsere <strong>Leistungen in der Intensivpflege</strong> beinhalten unter anderem die Heimbeatmung, die Überwachung & Vitalisierung des Patienten, das Legen eines Blasenkatheters, das endotracheales Absaugen oder Lagerungsbehandlungen und Mobilisation.
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      Weitere Serviceleistungen, die der <strong>Pflegedienst in Frankfurt Griesheim</strong> Ihnen oder Ihren Angehörigen anbietet, sind zum Beispiel Hilfe bei Besorgungen von Medikamenten, Hilfestellungen beim Ausfüllen von Anträgen oder Unterstützung und Begleitung von Spaziergängen.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Wir stehen Ihnen <strong>gerne zur Verfügung</strong> Rufen Sie uns an vereinbaren einen unverbindlichen Termin - <strong>gerne bei Ihnen zu Hause</strong>.
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
                  Pflegedienst in Griesheim – Familiär und mit Herz!
                </h2>
                <p className="text-muted-foreground mb-4">
                  Unser <Link to="/ueber-uns" className="text-primary hover:underline font-medium">Pflegedienst in Frankfurt</Link> und Umgebung ist immer für Sie da, an <strong>Wochenenden</strong> und <strong>Feiertagen</strong> und bei <strong>Notfällen</strong> auch in der Nacht. Wir bieten Ihnen oder Ihren Angehörigen eine auf Sie abgestimmte Pflege, je nach Ihren individuellen Bedürfnissen und Ihrem Pflegegrad. Dabei berücksichtigen wir nicht nur Ihren gesundheitlichen Zustand, sondern auch Ihre <strong>sozialen, kulturellen oder religiösen Bedürfnisse</strong>. Denn <strong>Menschlichkeit</strong> steht für unseren Pflegedienst in Griesheim im Mittelpunkt.
                </p>
                <p className="text-muted-foreground mb-4">
                  Sie werden von unseren <strong>hochqualifizierten und herzlichen Mitarbeitern</strong> in Ihrer gewohnten Umgebung betreut. Die langjährige Erfahrung des Pflegedienstes in Frankfurt Griesheim garantiert Ihnen eine sehr hohe Qualität der ganzheitlichen Pflege in einer familiären Atmosphäre. Zudem wird die Qualität durch einen permanenten Prozess der Qualitätssicherung überprüft.
                </p>
                <p className="text-muted-foreground mb-8">
                  Gerne können Sie für eine erste <strong>unverbindliche Beratung</strong> unserer Angebote des Pflegedienstes in Griesheim oder bei Fragen <Link to="/kontakt" className="text-primary hover:underline font-medium">Kontakt</Link> mit uns aufnehmen. <strong>Wir freuen uns darauf, Sie und Ihre Angehörigen kennenzulernen.</strong>
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
                      Welche Leistungen übernimmt der Avyta Pflegedienst in Griesheim?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser Pflegedienst in Griesheim übernimmt alle <strong>üblichen Hilfen</strong> rund um Mobilität, Körperpflege, An- und Auskleiden, Hauswirtschaft, Verpflegung und Ausscheidungen. Außerdem können wir Sie und Ihre Angehörigen auch in Bereichen der <strong>Intensivpflege</strong> und bei <strong>Behördengängen</strong> und <strong>Anträgen</strong> unterstützen.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wer kann den Pflegedienst in Griesheim in Anspruch nehmen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser Pflegedienst in Griesheim ist für alle geeignet, die aus unterschiedlichsten Gründen den Alltag <strong>nicht mehr eigenständig</strong> bewältigen können. Gründe dafür können beispielsweise das Alter sein, geistige Krankheiten oder schwere Unfälle mit kurzfristigen oder langfristigen Einschränkungen.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie sehr kann der Pflegedienst in Griesheim individualisiert werden?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Bei unserem Angebot haben Sie selbstverständlich die Möglichkeit, eine Leistung genau <strong>passend zu Ihren individuellen Umständen</strong> zu erhalten. So kann unser Pflegedienst in Griesheim auch an <strong>Wochenenden, Feiertagen und notfalls in der Nacht</strong> an Ihrer Seite sein. Ebenfalls berücksichtigen wir die sozialen, kulturellen und religiösen Bedürfnisse der zu pflegenden Person.
                    </AccordionContent>
                  </AccordionItem>
                                  <AccordionItem value="item-4" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Was kostet der Pflegedienst in Frankfurt Griesheim pro Monat?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die monatlichen Kosten für unseren Pflegedienst in Frankfurt Griesheim hängen vom individuellen Pflegebedarf ab. Bei Vorliegen eines Pflegegrades übernimmt die Pflegekasse Sachleistungen zwischen 761 und 2.200 Euro monatlich. Wir erstellen Ihnen gerne einen Kostenvoranschlag.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Bietet der Pflegedienst Griesheim auch Verhinderungspflege an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unser Pflegedienst in Frankfurt Griesheim bietet Verhinderungspflege an. Ab 2025 steht ein flexibles Budget von bis zu 3.539 Euro jährlich zur Verfügung, wenn pflegende Angehörige eine Auszeit brauchen.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie schnell ist der Pflegedienst Griesheim einsatzbereit?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Nach einem kostenlosen Erstgespräch kann unser Pflegedienst in Frankfurt Griesheim meist innerhalb weniger Tage starten. Bei dringenden Fällen finden wir kurzfristig eine Lösung. Rufen Sie uns an unter 069 153 914 05.
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

export default Griesheim;
