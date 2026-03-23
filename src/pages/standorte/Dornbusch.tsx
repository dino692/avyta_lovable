import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Heart, Shield, CheckCircle, HelpCircle, Users, Star } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";
import { generateFAQSchema } from "@/lib/faqSchema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const dornbuschFaqs = [
  {
    "question": "Wie oft kommt der Pflegedienst Frankfurt Dornbusch zu mir nach Hause?",
    "answer": "Die Besuchsfrequenz unseres Pflegedienstes in Frankfurt Dornbusch richtet sich ganz nach Ihrem individuellen Bedarf. Von einem täglichen Besuch bis zu mehrfachen Einsätzen am Tag passen wir den Pflegeplan flexibel an Ihre Situation an. Auch an Wochenenden und Feiertagen sind unsere Pflegekräfte für Sie in Frankfurt Dornbusch im Einsatz."
  },
  {
    "question": "Unterstützt der Pflegedienst Frankfurt Dornbusch auch bei Demenz?",
    "answer": "Ja, unser Pflegedienst in Frankfurt Dornbusch hat erfahrene Mitarbeiter, die speziell für die Betreuung von Menschen mit Demenz geschult sind. Wir bieten liebevolle und geduldige Begleitung im Alltag sowie Entlastungsangebote für pflegende Angehörige in Frankfurt."
  },
  {
    "question": "Übernimmt die Pflegekasse die Kosten für den Pflegedienst in Frankfurt Dornbusch?",
    "answer": "Bei Vorliegen eines Pflegegrades übernimmt die Pflegekasse einen Großteil der Kosten für unseren ambulanten Pflegedienst in Frankfurt Dornbusch. Behandlungspflege wird über ärztliche Verordnung von der Krankenkasse finanziert. Wir beraten Sie gerne zu Ihren Ansprüchen und unterstützen bei der Beantragung eines Pflegegrades."
  },
  {
    "question": "Kann der Pflegedienst Frankfurt Dornbusch auch kurzfristig einspringen?",
    "answer": "In vielen Fällen ja. Rufen Sie unseren Pflegedienst in Frankfurt Dornbusch unter 069 153 914 05 an und wir schauen gemeinsam, wie wir Ihnen schnellstmöglich helfen können. Bei Notfällen sind wir rund um die Uhr erreichbar."
  },
  {
    "question": "Welche Leistungen bietet der Pflegedienst Frankfurt Dornbusch an?",
    "answer": "Unser Pflegedienst in Frankfurt Dornbusch bietet Grundpflege, Behandlungspflege, Intensivpflege mit Heimbeatmung, Verhinderungspflege, hauswirtschaftliche Hilfe und Pflegeberatung. Wir decken alle Pflegegrade ab und erstellen einen individuellen Pflegeplan für Sie."
  },
  {
    "question": "Brauche ich einen Pflegegrad für den Pflegedienst Frankfurt Dornbusch?",
    "answer": "Für Leistungen der Pflegekasse benötigen Sie einen Pflegegrad. Behandlungspflege kann auch ohne Pflegegrad über eine ärztliche Verordnung veranlasst werden. Unser Pflegedienst in Frankfurt Dornbusch unterstützt Sie gerne bei der Beantragung eines Pflegegrades beim Medizinischen Dienst."
  }
];

const grundpflegeLeistungen = [
  "Hilfe bei der Körperpflege (Waschen, Duschen, Baden)",
  "Unterstützung beim An- und Auskleiden",
  "Hilfe beim Essen und Trinken",
  "Hilfe bei der Ausscheidung",
  "Maßnahmen zur Mobilität und Lagerung",
  "Hauswirtschaftliche Versorgung"
];

const behandlungspflegeLeistungen = [
  "Herrichten und Verabreichen von Medikamenten",
  "Kompressionsstrümpfe an- und ausziehen",
  "Injektionen und Infusionen",
  "Blutdruck- und Blutzuckerkontrolle",
  "Wundversorgung und Verbandswechsel",
  "Tracheostomaversorgung",
  "Versorgung von Anus Praeter und Urostoma",
  "Parenterale und enterale Ernährung"
];

const Dornbusch = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Frankfurt Dornbusch ✓ Ambulante Pflege | avyta.de</title>
        <meta name="description" content="Pflegedienst Frankfurt Dornbusch ✓ Ambulante Pflege mit Herz ✓ Grundpflege, Behandlungspflege & Intensivpflege ✓ 12+ Jahre Erfahrung ✓ Jetzt beraten lassen: 069 153 914 05" />
        <link rel="canonical" href="https://www.avyta.de/standorte/frankfurt/dornbusch" />
        <meta property="og:title" content="Pflegedienst Frankfurt Dornbusch ✓ Ambulante Pflege | avyta.de" />
        <meta property="og:description" content="Pflegedienst Frankfurt Dornbusch – professionelle ambulante Pflege mit Herz. Grundpflege, Behandlungspflege & Intensivpflege." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Standorte", url: "https://www.avyta.de/standorte/frankfurt" },
          { name: "Dornbusch", url: "https://www.avyta.de/standorte/frankfurt/dornbusch" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(dornbuschFaqs)}</script>
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
                  Pflegedienst Frankfurt Dornbusch – Familiäre Pflege in Ihrer Nähe
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Sie suchen einen zuverlässigen <strong>Pflegedienst in Frankfurt Dornbusch</strong>? AVYTA bietet Ihnen professionelle ambulante Pflege mit persönlicher Note – direkt in Ihrem Zuhause im grünen Dornbusch.
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
                  Ihr ambulanter Pflegedienst in Frankfurt Dornbusch
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    Der <strong>Pflegedienst Frankfurt Dornbusch</strong> von AVYTA ist seit über 12 Jahren Ihr verlässlicher Partner für häusliche Pflege. Der Dornbusch in Frankfurt ist bekannt für seine ruhige, grüne Wohnlage zwischen Eschersheimer Landstraße und Marbachweg – und genau diese Lebensqualität möchten wir mit unserem ambulanten Pflegedienst für Sie bewahren.
                  </p>
                  <p className="mb-6">
                    Unser <strong>Pflegedienst in Frankfurt Dornbusch</strong> nimmt sich Zeit für Sie und Ihre individuellen Anliegen. Gemeinsam mit unserem qualifizierten Pflegeteam finden wir die beste Lösung, um Ihren Alltag trotz gesundheitlicher Einschränkungen so angenehm wie möglich zu gestalten. Dabei arbeiten wir eng mit Ihren Angehörigen und behandelnden Ärzten in Frankfurt zusammen, um eine ganzheitliche Versorgung sicherzustellen.
                  </p>
                  <p className="mb-6">
                    Als zugelassener ambulanter <strong>Pflegedienst in Frankfurt</strong> rechnen wir unsere Leistungen direkt mit allen Pflege- und Krankenkassen ab. So können Sie sich voll und ganz auf Ihre Genesung und Ihr Wohlbefinden konzentrieren – wir kümmern uns um den Rest.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Auch am Wochenende</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Familiäre Atmosphäre</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Star className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">12+ Jahre Erfahrung</span>
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
                Leistungen unseres Pflegedienstes in Frankfurt Dornbusch
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Der <strong>Pflegedienst Frankfurt Dornbusch</strong> bietet Ihnen ein umfassendes Leistungsspektrum – von der <Link to="/leistungen/grundpflege" className="text-primary hover:underline">Grundpflege</Link> über die <Link to="/leistungen/behandlungspflege" className="text-primary hover:underline">Behandlungspflege</Link> bis hin zur <Link to="/leistungen/intensivpflege" className="text-primary hover:underline">Intensivpflege</Link>.
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Grundpflege in Frankfurt Dornbusch
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Unser Pflegedienst unterstützt Sie bei allen Verrichtungen des täglichen Lebens in Ihrem Zuhause im Dornbusch:
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
                      Behandlungspflege in Frankfurt Dornbusch
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Medizinische Maßnahmen durch examinierte Pflegefachkräfte unseres Pflegedienstes in Frankfurt:
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
                      Intensivpflege vom Pflegedienst Frankfurt Dornbusch
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Unser <strong>Pflegedienst in Frankfurt Dornbusch</strong> bietet auch Intensivpflege mit Heimbeatmung an. Unsere examinierten Pflegefachkräfte übernehmen die Überwachung und Vitalisierung, das Legen von Blasenkathetern, endotracheales Absaugen sowie Lagerungsbehandlungen und Mobilisation. Erfahren Sie mehr über unsere <Link to="/leistungen/intensivpflege" className="text-primary hover:underline">Intensivpflege in Frankfurt</Link>.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Weitere Leistungen */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
                  Weitere Angebote unseres Pflegedienstes in Frankfurt Dornbusch
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Verhinderungspflege in Frankfurt</h3>
                      <p className="text-sm text-muted-foreground">Wenn pflegende Angehörige Entlastung benötigen, übernimmt unser Pflegedienst in Frankfurt Dornbusch die <Link to="/leistungen/verhinderungspflege" className="text-primary hover:underline">Verhinderungspflege</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Pflegeberatung in Frankfurt Dornbusch</h3>
                      <p className="text-sm text-muted-foreground">Wir beraten Sie umfassend zu Pflegegraden, Leistungsansprüchen und der Organisation der häuslichen Pflege. Mehr zur <Link to="/leistungen/pflegeberatung" className="text-primary hover:underline">Pflegeberatung</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">24-Stunden-Pflege in Frankfurt</h3>
                      <p className="text-sm text-muted-foreground">Für eine Rund-um-die-Uhr-Betreuung bieten wir auch <Link to="/leistungen/24-stunden-pflege" className="text-primary hover:underline">24-Stunden-Pflege</Link> in Frankfurt Dornbusch an.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Haushaltshilfe in Frankfurt Dornbusch</h3>
                      <p className="text-sm text-muted-foreground">Unser Pflegedienst unterstützt Sie auch bei der <Link to="/leistungen/haushaltshilfe" className="text-primary hover:underline">Haushaltshilfe</Link> – vom Einkauf bis zur Wohnungsreinigung.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  AVYTA – Ihr Pflegedienst in Frankfurt Dornbusch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Der <strong>Pflegedienst Frankfurt Dornbusch</strong> von AVYTA ist Teil Ihrer Nachbarschaft. Wir kennen die Besonderheiten des Stadtteils und verstehen die Bedürfnisse unserer Patienten in Frankfurt. Rufen Sie uns an unter <strong>069 153 914 05</strong> oder nutzen Sie unser <Link to="/kontakt" className="text-primary hover:underline">Kontaktformular</Link> – wir freuen uns auf Sie.
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
                  Häufige Fragen zum Pflegedienst Frankfurt Dornbusch
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie oft kommt der Pflegedienst Frankfurt Dornbusch zu mir nach Hause?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die Besuchsfrequenz unseres Pflegedienstes in Frankfurt Dornbusch richtet sich ganz nach Ihrem individuellen Bedarf. Von einem täglichen Besuch bis zu mehrfachen Einsätzen am Tag passen wir den Pflegeplan flexibel an Ihre Situation an. Auch an Wochenenden und Feiertagen sind unsere Pflegekräfte für Sie in Frankfurt Dornbusch im Einsatz.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Unterstützt der Pflegedienst Frankfurt Dornbusch auch bei Demenz?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unser Pflegedienst in Frankfurt Dornbusch hat erfahrene Mitarbeiter, die speziell für die Betreuung von Menschen mit Demenz geschult sind. Wir bieten liebevolle und geduldige Begleitung im Alltag sowie Entlastungsangebote für pflegende Angehörige in Frankfurt.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Übernimmt die Pflegekasse die Kosten für den Pflegedienst in Frankfurt Dornbusch?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Bei Vorliegen eines Pflegegrades übernimmt die Pflegekasse einen Großteil der Kosten für unseren ambulanten Pflegedienst in Frankfurt Dornbusch. Behandlungspflege wird über ärztliche Verordnung von der Krankenkasse finanziert. Wir beraten Sie gerne zu Ihren Ansprüchen und unterstützen bei der <Link to="/blog/pflegegrad-beantragen" className="text-primary hover:underline">Beantragung eines Pflegegrades</Link>.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Kann der Pflegedienst Frankfurt Dornbusch auch kurzfristig einspringen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      In vielen Fällen ja. Rufen Sie unseren Pflegedienst in Frankfurt Dornbusch unter 069 153 914 05 an und wir schauen gemeinsam, wie wir Ihnen schnellstmöglich helfen können. Bei Notfällen sind wir rund um die Uhr erreichbar.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Leistungen bietet der Pflegedienst Frankfurt Dornbusch an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser Pflegedienst in Frankfurt Dornbusch bietet Grundpflege, Behandlungspflege, Intensivpflege mit Heimbeatmung, Verhinderungspflege, hauswirtschaftliche Hilfe und Pflegeberatung. Wir decken alle Pflegegrade ab und erstellen einen individuellen Pflegeplan für Sie.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Brauche ich einen Pflegegrad für den Pflegedienst Frankfurt Dornbusch?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Für Leistungen der Pflegekasse benötigen Sie einen Pflegegrad. Behandlungspflege kann auch ohne Pflegegrad über eine ärztliche Verordnung veranlasst werden. Unser Pflegedienst in Frankfurt Dornbusch unterstützt Sie gerne bei der Beantragung eines Pflegegrades beim Medizinischen Dienst.
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

export default Dornbusch;
