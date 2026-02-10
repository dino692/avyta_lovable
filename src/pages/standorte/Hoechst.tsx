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

const hoechstFaqs = [
  {
    question: "Welche Aufgaben übernimmt der Pflegedienst in Frankfurt Höchst?",
    answer: "Unser ambulanter Pflegedienst in Frankfurt Höchst unterstützt Sie bei den Bereichen Körperpflege, Ankleiden, Mobilität, Verpflegung, Ausscheidungen und Hauswirtschaft. Daneben bieten wir Ihnen Hilfe bei Behördengängen und Anträgen. Auch die Intensivpflege können wir für Sie übernehmen."
  },
  {
    question: "Welche Kosten fallen für einen Pflegedienst in Frankfurt Höchst an?",
    answer: "Die Kosten für einen Pflegedienst in Frankfurt Höchst können variieren, je nachdem welche Pflegeleistungen erbracht werden. Sie werden mit einem Kostenvoranschlag ermittelt und in der Regel direkt mit der Krankenkasse oder Pflegekasse abgerechnet."
  },
  {
    question: "Welche Pflegegrade betreut der Pflegedienst in Frankfurt Höchst?",
    answer: "Wir können sämtliche Pflegegrade mit unseren Leistungen abdecken, von kleinen Hilfen im Alltag bis hin zur Intensivpflege in schweren Fällen. Unser Pflegedienst in Frankfurt Höchst berät Sie gerne, wenn Sie weitere Fragen zu unserem Angebot haben."
  },
];

const grundpflegeLeistungen = [
  "Hilfe beim Essen und Trinken",
  "Hilfe bei der Ausscheidung",
  "Maßnahmen zur Mobilität",
  "Hauswirtschaftliche Hilfe",
  "Hilfe bei der Körperpflege",
  "Unterstützung bei dem An- und Auskleiden"
];

const behandlungspflegeLeistungen = [
  "Blutdruckkontrolle",
  "Blutzuckerkontrolle",
  "Tracheostomaversorgung",
  "Versorgung von Anus Praeter sowie Urostoma",
  "Parenterale & enterale Ernährung",
  "Kompressionsstrümpfe an- und ausziehen",
  "Herrichten und Verabreichen von Medikamenten",
  "Injektionen",
  "Infusionen",
  "Wundversorgung"
];

const Hoechst = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Frankfurt Höchst - langjährige Erfahrung</title>
        <meta name="description" content="Alle Pflegebedürftigen rund um Frankfurt Höchst sind bei uns in guten Händen. Tägliche Versorgung möglich ✓ Rund um die Uhr erreichbar ✓ | avyta.de" />
        <script type="application/ld+json">{generateFAQSchema(hoechstFaqs)}</script>
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
                  Pflegedienst Frankfurt Höchst: ambulante Pflege für Sie
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Sie oder Ihre Angehörigen suchen nach einem ambulanten Pflegedienst, da Sie Unterstützung in Ihrem Alltag benötigen? Wir bieten Ihnen oder Ihren Angehörigen mit unserem <strong>Pflegedienst Frankfurt Höchst</strong> eine individuelle, auf Ihre Bedürfnisse abgestimmte <strong>Betreuung im Alltag</strong>.
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
                    Die unterschiedlichsten Gründe führen dazu, dass Personen im Alltag auf Hilfe angewiesen sind. Mögliche Gründe für eine <strong>Pflegebedürftigkeit</strong> sind geistige Einschränkungen, schwere Unfälle oder ein fortgeschrittenes Alter. Unser ambulanter <strong>Pflegedienst Frankfurt Höchst</strong> richtet sich somit an Personen, die Ihre alltäglichen Aufgaben nicht mehr selbstständig erledigen können. Dabei bieten wir Ihnen oder Ihren Angehörigen eine individuell auf Sie angepasste Hilfe.
                  </p>
                  <p className="mb-6">
                    Mit dem <strong>Pflegedienst Frankfurt Höchst</strong> erhalten Sie oder Ihre Angehörigen eine attraktive Lebensqualität in Ihrer häuslichen Umgebung in Höchst, daher müssen Sie nicht in ein Pflegeheim umziehen. Wir, der Pflegedienst Frankfurt Höchst, kommen zu Ihnen. Dementsprechend können Sie oder Ihre Angehörigen die <strong>bestmögliche Pflege</strong> erhalten und trotzdem die Eigenständigkeit beibehalten.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Auch an Feiertagen</span>
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

          {/* Ganzheitliche Pflege */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Pflegedienst Frankfurt Höchst bietet Ihnen eine ganzheitliche Pflege
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Ein <strong>umfangreiches Leistungsspektrum</strong> wurde vom ambulanten Pflegedienst Frankfurt Höchst entwickelt, damit jeder Person eine <strong>individuell angepasste Pflege</strong> ermöglicht wird. Denn die Pflegebedürfnisse sind so verschiedenen wie die Personen selbst. Dabei reichen die verschiedenen Facetten des Leistungsspektrums von klassischen Elementen der Grundpflege bis hin zu medizinischen und <strong>alltäglichen Versorgungen</strong>.
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
                      Unser <strong>ambulanter Pflegedienst</strong> Frankfurt Höchst bietet Ihnen oder Ihren Angehörigen eine <strong>Grundpflege</strong> an. <Link to="/leistungen/grundpflege" className="text-primary hover:underline font-medium">Die Grundpflege</Link> beinhaltet alle Maßnahmen, die der Versorgung des Körpers behilflich sind:
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
                      Ein weiter Bereich der ambulanten Pflege stellt <strong>die Behandlungspflege</strong> dar. <Link to="/leistungen/behandlungspflege" className="text-primary hover:underline font-medium">Die Behandlungspflege</Link> beinhaltet verschiedene medizinische Maßnahmen, die Ihnen oder Ihren Angehörigen von Ihrem Arzt verschrieben wurden:
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
                      Ein weiterer Bereich der Behandlungspflege ist <strong>die Intensivpflege</strong>. Bei Bedarf ermöglicht Ihnen <strong>unser geschultes Personal</strong> auch <strong>Maßnahmen der Intensivpflege</strong> in Ihrer gewohnten Umgebung durchzuführen. Die <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" className="text-primary hover:underline font-medium">Leistungen der Intensivpflege</Link>, die von unserem Pflegedienst Frankfurt Höchst durchgeführt werden, sind unter anderem die Überwachung & Vitalisierung des Patienten, das Legen eines Blasenkatheters, das endotracheale Absaugen, die Lagerungsbehandlungen und Mobilisation oder auch eine Heimbeatmung.
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      Zudem bieten wir, der <strong>Pflegedienst Frankfurt Höchst</strong>, Ihnen oder Ihren Angehörigen <strong>weitere Serviceleistungen</strong> an. Diese sind zum Beispiel Hilfe beim Ausfüllen von Anträgen, Hilfe bei der Besorgung von Medikamenten oder Unterstützung und Begleitung von Spaziergängen.
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
                  Pflegedienst Frankfurt Höchst – Pflege mit Herz!
                </h2>
                <p className="text-muted-foreground mb-4">
                  Unser <strong>Pflegedienst Frankfurt</strong> und Umgebung ist immer für Sie da, auch an Wochenenden und Feiertagen. Bei <strong>Notfällen</strong> sind wir selbstverständlich auch in der <strong>Nacht für Sie da</strong>. Je nach Pflegegrad und Ihren persönlichen Bedürfnissen, wie soziale, kulturelle oder religiöse Ansprüche bieten wir Ihnen oder Ihren Angehörigen eine auf Sie abgestimmte Pflege. Bei uns kommt die <strong>Menschlichkeit</strong> nicht zu kurz.
                </p>
                <p className="text-muted-foreground mb-4">
                  Aufgrund <strong>langjähriger Erfahrung</strong> garantiert Ihnen der <strong>Pflegedienst Frankfurt Höchst</strong> eine sehr <strong>hohe Qualität</strong>. Die Beständigkeit der Qualität wird zudem in einem permanenten Prozess der <strong>Qualitätssicherung</strong> überprüft. Dadurch wird Ihnen oder Ihren Angehörigen eine professionelle und herzliche Pflege in Ihrer häuslichen Umgebung durch den <strong>Pflegedienst Höchst</strong> sichergestellt.
                </p>
                <p className="text-muted-foreground mb-8">
                  Bei Fragen zu unseren Pflegeleistungen oder für eine erste unverbindliche Beratung unseres Angebotes können Sie gerne mit dem Pflegedienst Frankfurt Höchst <Link to="/kontakt" className="text-primary hover:underline font-medium">Kontakt</Link> aufnehmen. Wir freuen uns darauf, Sie und Ihre Angehörigen kennenzulernen.
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
                      Welche Aufgaben übernimmt der Pflegedienst in Frankfurt Höchst?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser ambulanter Pflegedienst in Frankfurt Höchst unterstützt Sie bei den Bereichen <strong><em>Körperpflege, Ankleiden, Mobilität, Verpflegung, Ausscheidungen und Hauswirtschaft</em></strong>. Daneben bieten wir Ihnen Hilfe bei <em><strong>Behördengängen und Anträgen</strong></em>. Auch die Intensivpflege können wir für Sie übernehmen.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Kosten fallen für einen Pflegedienst in Frankfurt Höchst an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die Kosten für einen Pflegedienst in Frankfurt Höchst können <strong>variieren</strong>, je nachdem welche Pflegeleistungen erbracht werden. Sie werden mit einem <strong>Kostenvoranschlag</strong> ermittelt und in der Regel direkt mit der <strong>Krankenkasse oder Pflegekasse</strong> abgerechnet.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Pflegegrade betreut der Pflegedienst in Frankfurt Höchst?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Wir können sämtliche Pflegegrade mit unseren Leistungen abdecken, von kleinen <strong>Hilfen im Alltag bis hin zur Intensivpflege</strong> in schweren Fällen. Unser Pflegedienst in Frankfurt Höchst <Link to="/leistungen/pflegeberatung-frankfurt" className="text-primary hover:underline">berät Sie</Link> gerne, wenn Sie weitere Fragen zu unserem Angebot haben.
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

export default Hoechst;
