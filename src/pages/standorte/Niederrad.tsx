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

const niederradFaqs = [
  {
    question: "Welche Bereiche der Grundpflege werden vom Pflegedienst in Frankfurt Niederrad übernommen?",
    answer: "In der Grundpflege übernehmen wir vom Avyta Pflegedienst in Frankfurt Niederrad beispielsweise die Unterstützung in Alltagsaufgaben wie Essen und Trinken, Mobilität, Haushalt, Körperpflege und Ausscheidungen, An- und Auskleiden und noch vieles mehr."
  },
  {
    question: "Welche Leistungen kann der Pflegedienst in Frankfurt Niederrad in der Behandlungs- und Intensivpflege übernehmen?",
    answer: "Unser Avyta Pflegedienst in Frankfurt Niederrad kann in der Behandlungspflege beispielsweise die Blutdruck- und Blutzuckerkontrolle, die Wund- und Tracheostomaversorgung, die Versorgung von Anus Praeter und Urostoma, die parenterale und enterale Ernährung, die Medikamentengabe, Injektionen und Infusionen übernehmen. In der Intensivpflege helfen wir mit Lagerungsbehandlungen, Mobilisation, Überwachung und Vitalisierung des Patienten, Katheterlegen, endotrochalem Absaugen und der Heimbeatmung."
  },
  {
    question: "Wie beauftragt man den Pflegedienst in Frankfurt Niederrad?",
    answer: "Der Weg zu unserem Avyta Pflegedienst in Frankfurt Niederrad führt zunächst über einen Antrag an die Kranken- oder Pflegekasse, um die Pflegebedürftigkeit und einen Pflegegrad feststellen zu lassen. Dabei können vielerlei Hilfsorganisationen Sie unterstützen. Danach wird über den medizinischen Dienst ein Termin vereinbart, und wir können einen Kostenvoranschlag zur Abrechnung mit den Kassen erstellen."
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
  "Wundversorgung",
  "Blutdruckkontrolle",
  "Blutzuckerkontrolle",
  "Tracheostomaversorgung",
  "Versorgung von Anus Praeter sowie Urostoma",
  "Parenterale & enterale Ernährung",
  "Kompressionsstrümpfe an- und ausziehen",
  "Herrichten und Verabreichen von Medikamenten",
  "Injektionen",
  "Infusionen"
];

const Niederrad = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Niederrad - Hilfe im alltäglichen Leben</title>
        <meta name="description" content="In Frankfurt Niederrad sind wir für Sie präsent und rund um die Uhr erreichbar. Überzeugen Sie sich von unserem ambulanten Pflegedienst. | avyta.de" />
        <link rel="canonical" href="https://www.avyta.de/pflegedienst-niederrad" />
        <meta property="og:title" content="Pflegedienst Niederrad - Hilfe im alltäglichen Leben" />
        <meta property="og:description" content="In Frankfurt Niederrad sind wir für Sie präsent und rund um die Uhr erreichbar." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateFAQSchema(niederradFaqs)}</script>
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
                  Pflegedienst in Frankfurt Niederrad: Pflege in vertrauter Umgebung
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Ihre Angehörigen oder Sie können den Alltag nicht mehr allein bewältigen und suchen nach einem <Link to="/" className="text-primary hover:underline font-medium">ambulanten Pflegedienst</Link>? Unser <strong>Pflegedienst in Frankfurt Niederrad</strong> unterstützt Sie gerne und bietet Ihnen eine auf Ihre <strong>individuellen Bedürfnisse</strong> abgestimmte Betreuung im Alltag an.
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
                    Eine <strong>Pflegebedürftigkeit</strong> entsteht durch die unterschiedlichsten Gründe. Personen sind unter anderem aufgrund von geistigen <strong>Einschränkungen</strong>, einem fortgeschrittenen Alter oder aufgrund eines schweren Unfalles auf Hilfe im Alltag angewiesen. Unser Pflegedienst in <strong>Frankfurt Niederrad</strong> bietet Ihnen oder Ihren Angehörigen eine <strong>individuell</strong> auf Sie angepasste <strong>Hilfe und Betreuung</strong> im Alltag.
                  </p>
                  <p className="mb-6">
                    Mit dem <Link to="/team" className="text-primary hover:underline font-medium">Avyta Pflegedienst</Link> in Frankfurt Niederrad erhalten Sie oder Ihre Angehörigen in Ihrer gewohnten häuslichen Umgebung eine attraktive Lebensqualität, da Sie nicht in ein Pflegeheim umziehen müssen. Sie oder Ihre Angehörigen können Ihre Eigenständigkeit behalten und gleichzeitig die bestmögliche Pflege erhalten, denn wir, der <strong>ambulante Pflegedienst in Frankfurt Niederrad</strong>, kommt zu Ihnen.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Auch nachts erreichbar</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Herzliche Pflege</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Individuelle Pflege */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Avyta Pflegedienst in Frankfurt Niederrad bietet Ihnen eine individuelle Pflege
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Unser ambulanter Pflegedienst in <strong>Frankfurt Niederrad</strong> hat ein umfangreiches Leistungsspektrum entwickelt, damit jeder Person eine individuell angepasste Pflege ermöglicht wird. Die Pflegebedürfnisse sind je nach Person und Situation sehr verschiedenen. Daher reichen die verschiedenen Facetten des <strong>Leistungsspektrums</strong> von klassischen Elementen der <strong>Grundpflege</strong> bis hin zu medizinischen und alltäglichen <strong>Versorgungen</strong>.
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
                      <strong>Die Grundpflege</strong> beinhaltet alle Maßnahmen, die der Versorgung des Körpers behilflich sind. Die folgenden <Link to="/leistungen/grundpflege" className="text-primary hover:underline font-medium">Maßnahmen der Grundpflege</Link> führt der ambulante Pflegedienst in Frankfurt Niederrad für Sie oder Ihre Angehörigen durch:
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
                      Unser <strong>hochqualifiziertes Personal</strong> des Pflegedienstes in Frankfurt Niederrad führt bei Bedarf auch <strong>Maßnahmen der Behandlungspflege</strong> aus. <Link to="/leistungen/behandlungspflege" className="text-primary hover:underline font-medium">Die Behandlungspflege</Link> stellt einen weiteren Bereich der ambulanten Pflege dar:
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
                      <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" className="text-primary hover:underline font-medium">Die Intensivpflege</Link> ist ein weiterer Bereich der Behandlungspflege. Unser geschultes Personal ermöglicht Ihnen oder Ihren Angehörigen auch <strong>Maßnahmen der Intensivpflege</strong> in Ihrer gewohnten Umgebung. Die Leistungen der Intensivpflege, die von unserem Pflegedienst in Frankfurt Niederrad durchgeführt werden, sind unter anderem die Lagerungsbehandlungen und Mobilisation, die Überwachung & Vitalisierung des Patienten, das Legen eines Blasenkatheters, das endotracheale Absaugen oder auch eine Heimbeatmung.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Wir, der <strong>Avyta Pflegedienst in Frankfurt Niederrad</strong>, bieten Ihnen oder Ihren Angehörigen auch weitere Serviceleistungen an. Diese sind zum Beispiel Vermittlung von Friseuren, Hilfe beim Ausfüllen von Anträgen, Hilfe bei der Besorgung von Medikamenten oder Unterstützung und Begleitung von Spaziergängen.
                    </p>
                    <p className="text-muted-foreground text-sm mt-3">
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
                  Pflegedienst in Frankfurt Niederrad – herzliche und familiäre Pflege
                </h2>
                <p className="text-muted-foreground mb-4">
                  Wir bieten Ihnen eine individuelle und auf Sie abgestimmte <strong>Pflege</strong> ganz nach Ihren persönlichen Bedürfnissen und Ihrem Pflegegrad. Neben Ihrem gesundheitlichen Zustand berücksichtigen wir dabei auch Ihre kulturellen, sozialen und religiösen Anforderungen an eine Pflege. Die Menschlichkeit spielt eine große Rolle bei Avyta.
                </p>
                <p className="text-muted-foreground mb-4">
                  Die <strong>langjährige Erfahrung</strong> unseres Pflegedienstes garantiert Ihnen eine sehr hohe <strong>Pflegequalität</strong>. Zudem wird die Beständigkeit der <strong>Qualität</strong> in einem permanenten Prozess der <strong>Qualitätssicherung</strong> überprüft. Dadurch wird Ihnen oder Ihren Angehörigen eine <strong>professionelle und herzliche Pflege</strong> in Ihrer häuslichen Umgebung durch den <strong>Avyta Pflegedienst in Niederrad</strong> sichergestellt. Unser Pflegedienst in Frankfurt und Umgebung ist immer für Sie da, auch an <strong>Wochenenden</strong> und <strong>Feiertagen</strong>. Bei <strong>Notfällen</strong> sind wir selbstverständlich auch in der Nacht für Sie und Ihre Angehörigen erreichbar.
                </p>
                <p className="text-muted-foreground mb-8">
                  Für eine erste unverbindliche Beratung unseres Angebotes oder bei Fragen zu unseren Pflegeleistungen können Sie gerne mit dem Pflegedienst Niederrad <Link to="/kontakt" className="text-primary hover:underline font-medium">Kontakt</Link> aufnehmen. Wir freuen uns darauf, Sie und Ihre Angehörigen kennenzulernen.
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
                      Welche Bereiche der Grundpflege werden vom Pflegedienst in Frankfurt Niederrad übernommen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      In der Grundpflege übernehmen wir vom <strong>Avyta Pflegedienst in Frankfurt Niederrad</strong> beispielsweise die Unterstützung in <strong>Alltagsaufgaben</strong> wie Essen und Trinken, Mobilität, Haushalt, Körperpflege und Ausscheidungen, An- und Auskleiden und noch vieles mehr.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Leistungen kann der Pflegedienst in Frankfurt Niederrad in der Behandlungs- und Intensivpflege übernehmen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser Avyta Pflegedienst in Frankfurt Niederrad kann in der <strong>Behandlungspflege</strong> beispielsweise die Blutdruck- und Blutzuckerkontrolle, die Wund- und Tracheostomaversorgung, die Versorgung von Anus Praeter und Urostoma, die parenterale und enterale Ernährung, die Medikamentengabe, Injektionen und Infusionen übernehmen. In der <strong>Intensivpflege</strong> helfen wir mit Lagerungsbehandlungen, Mobilisation, Überwachung und Vitalisierung des Patienten, Katheterlegen, endotrochalem Absaugen und der Heimbeatmung. Sprechen Sie uns gerne auf weitere Leistungen an.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie beauftragt man den Pflegedienst in Frankfurt Niederrad?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Der Weg zu unserem Avyta Pflegedienst in Frankfurt Niederrad führt zunächst über einen <strong>Antrag an die Kranken- oder Pflegekasse</strong>, um die Pflegebedürftigkeit und einen Pflegegrad feststellen zu lassen. Dabei können vielerlei Hilfsorganisationen Sie unterstützen. Danach wird über den medizinischen Dienst ein Termin vereinbart, und wir können einen Kostenvoranschlag zur Abrechnung mit den Kassen erstellen.
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

export default Niederrad;
