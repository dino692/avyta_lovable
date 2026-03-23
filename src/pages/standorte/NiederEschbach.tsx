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

const niederEschbachFaqs = [
  {
    "question": "Welche Stadtteile betreut der Pflegedienst Frankfurt Nieder-Eschbach?",
    "answer": "Unser Pflegedienst ist in ganz Frankfurt und Umgebung tätig. Neben Nieder-Eschbach betreuen wir auch die angrenzenden Frankfurter Stadtteile wie Harheim, Nieder-Erlenbach und Bonames sowie alle weiteren Stadtteile in Frankfurt."
  },
  {
    "question": "Wie oft kommt der Pflegedienst Frankfurt Nieder-Eschbach zu mir?",
    "answer": "Die Besuchsfrequenz unseres Pflegedienstes in Frankfurt Nieder-Eschbach richten wir individuell nach Ihrem Bedarf – von einmal täglich bis mehrmals am Tag. Auch Wochenend- und Feiertagsbesuche sind bei unserem Pflegedienst in Frankfurt selbstverständlich."
  },
  {
    "question": "Bietet der Pflegedienst Frankfurt Nieder-Eschbach auch Intensivpflege an?",
    "answer": "Ja, unser Pflegedienst in Frankfurt Nieder-Eschbach bietet auch Intensivpflege mit Heimbeatmung und spezieller medizinischer Versorgung an. Unsere examinierten Pflegefachkräfte in Frankfurt sind für diese anspruchsvollen Aufgaben qualifiziert."
  },
  {
    "question": "Wie beantrage ich Leistungen für den Pflegedienst in Frankfurt Nieder-Eschbach?",
    "answer": "Unser Pflegedienst in Frankfurt Nieder-Eschbach unterstützt Sie bei der Antragstellung für Pflegeleistungen. Wir helfen Ihnen beim Pflegegrad beantragen und beraten Sie zu allen verfügbaren Leistungen der Pflegekasse."
  },
  {
    "question": "Was kostet der Pflegedienst Frankfurt Nieder-Eschbach pro Monat?",
    "answer": "Die monatlichen Kosten für unseren Pflegedienst in Frankfurt Nieder-Eschbach hängen vom individuellen Pflegebedarf und dem Pflegegrad ab. Bei Pflegegrad 2 bis 5 übernimmt die Pflegekasse Sachleistungen von 761 bis 2.200 Euro monatlich. Behandlungspflege wird zusätzlich von der Krankenkasse finanziert."
  },
  {
    "question": "Betreut der Pflegedienst Frankfurt Nieder-Eschbach auch Demenzpatienten?",
    "answer": "Ja, unser Pflegedienst in Frankfurt Nieder-Eschbach hat erfahrene Mitarbeiter für die Betreuung von Menschen mit Demenz. Wir bieten geduldige Begleitung im Alltag und entlasten pflegende Angehörige in Frankfurt durch Verhinderungspflege und stundenweise Betreuung."
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

const NiederEschbach = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Frankfurt Nieder-Eschbach ✓ Ambulante Pflege | avyta.de</title>
        <meta name="description" content="Pflegedienst Frankfurt Nieder-Eschbach ✓ Zuverlässige ambulante Pflege im Frankfurter Norden ✓ Grundpflege, Behandlungspflege & Intensivpflege ✓ Tel: 069 153 914 05" />
        <link rel="canonical" href="https://www.avyta.de/standorte/frankfurt/nieder-eschbach" />
        <meta property="og:title" content="Pflegedienst Frankfurt Nieder-Eschbach ✓ Ambulante Pflege | avyta.de" />
        <meta property="og:description" content="Pflegedienst Frankfurt Nieder-Eschbach – zuverlässige ambulante Pflege im Frankfurter Norden." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Standorte", url: "https://www.avyta.de/standorte/frankfurt" },
          { name: "Nieder-Eschbach", url: "https://www.avyta.de/standorte/frankfurt/nieder-eschbach" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(niederEschbachFaqs)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Pflegedienst Frankfurt Nieder-Eschbach – Zuverlässig für Sie da
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Sie suchen einen zuverlässigen <strong>Pflegedienst in Frankfurt Nieder-Eschbach</strong>? AVYTA bietet Ihnen professionelle und herzliche ambulante Pflege direkt in Ihrem Zuhause im Frankfurter Norden.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Ihr ambulanter Pflegedienst in Frankfurt Nieder-Eschbach
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    Der <strong>Pflegedienst Frankfurt Nieder-Eschbach</strong> von AVYTA ermöglicht es Ihnen, trotz Pflegebedürftigkeit in Ihrer vertrauten Umgebung am nördlichen Stadtrand von Frankfurt zu bleiben. Nieder-Eschbach in Frankfurt bietet eine angenehme Wohnatmosphäre mit dörflichem Charakter – und unser ambulanter Pflegedienst sorgt dafür, dass Sie diese Vorzüge auch bei gesundheitlichen Einschränkungen weiterhin genießen können.
                  </p>
                  <p className="mb-6">
                    Unser <strong>Pflegedienst in Frankfurt Nieder-Eschbach</strong> ist spezialisiert auf die individuelle Betreuung von Menschen aller Pflegegrade. Ob altersbedingte Einschränkungen, Pflege nach einem Krankenhausaufenthalt oder bei chronischen Erkrankungen – das Team unseres Pflegedienstes in Frankfurt steht Ihnen mit Kompetenz und Einfühlungsvermögen zur Seite.
                  </p>
                  <p className="mb-6">
                    Als zugelassener <strong>Pflegedienst in Frankfurt</strong> arbeiten wir mit allen gesetzlichen und privaten Pflege- und Krankenkassen zusammen. Wir übernehmen die gesamte Abrechnung und beraten Sie zu Ihren Leistungsansprüchen – damit Sie sich auf das Wesentliche konzentrieren können.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Verlässlich & Pünktlich</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Persönliche Betreuung</span>
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

          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Leistungen unseres Pflegedienstes in Frankfurt Nieder-Eschbach
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Der <strong>Pflegedienst Frankfurt Nieder-Eschbach</strong> bietet ein umfassendes Spektrum – von der <Link to="/leistungen/grundpflege" className="text-primary hover:underline">Grundpflege</Link> über die <Link to="/leistungen/behandlungspflege" className="text-primary hover:underline">Behandlungspflege</Link> bis zur <Link to="/leistungen/intensivpflege" className="text-primary hover:underline">Intensivpflege</Link>.
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Grundpflege in Frankfurt Nieder-Eschbach
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Unser Pflegedienst in Frankfurt Nieder-Eschbach unterstützt Sie bei allen grundlegenden Verrichtungen des täglichen Lebens:
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
                      Behandlungspflege in Frankfurt Nieder-Eschbach
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
                      Intensivpflege vom Pflegedienst Frankfurt Nieder-Eschbach
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Unser <strong>Pflegedienst in Frankfurt Nieder-Eschbach</strong> bietet auch Intensivpflege mit Heimbeatmung an. Unsere examinierten Pflegefachkräfte übernehmen die Überwachung und Vitalisierung, das Legen von Blasenkathetern, endotracheales Absaugen sowie Lagerungsbehandlungen und Mobilisation. Mehr zur <Link to="/leistungen/intensivpflege" className="text-primary hover:underline">Intensivpflege in Frankfurt</Link>.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
                  Weitere Angebote unseres Pflegedienstes in Frankfurt Nieder-Eschbach
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Verhinderungspflege in Frankfurt</h3>
                      <p className="text-sm text-muted-foreground">Entlastung für pflegende Angehörige. Mehr zur <Link to="/leistungen/verhinderungspflege" className="text-primary hover:underline">Verhinderungspflege</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Pflegeberatung in Frankfurt Nieder-Eschbach</h3>
                      <p className="text-sm text-muted-foreground">Beratung zu Pflegegraden und Leistungsansprüchen. Mehr zur <Link to="/leistungen/pflegeberatung" className="text-primary hover:underline">Pflegeberatung</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">24-Stunden-Pflege in Frankfurt</h3>
                      <p className="text-sm text-muted-foreground">Rund-um-die-Uhr-Betreuung. Mehr zur <Link to="/leistungen/24-stunden-pflege" className="text-primary hover:underline">24h-Pflege</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Haushaltshilfe in Frankfurt Nieder-Eschbach</h3>
                      <p className="text-sm text-muted-foreground">Einkauf, Reinigung und Alltagshilfe. Mehr zur <Link to="/leistungen/haushaltshilfe" className="text-primary hover:underline">Haushaltshilfe</Link>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  AVYTA – Ihr Pflegedienst in Frankfurt Nieder-Eschbach
                </h2>
                <p className="text-muted-foreground mb-8">
                  Der <strong>Pflegedienst Frankfurt Nieder-Eschbach</strong> von AVYTA kennt die lokalen Gegebenheiten und versteht die Bedürfnisse der Bewohner im Frankfurter Norden. Rufen Sie uns an unter <strong>069 153 914 05</strong> oder nutzen Sie unser <Link to="/kontakt" className="text-primary hover:underline">Kontaktformular</Link> für eine unverbindliche Pflegeberatung.
                </p>
                <CTADropdownButton />
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
                  <HelpCircle className="w-8 h-8 text-primary" />
                  Häufige Fragen zum Pflegedienst Frankfurt Nieder-Eschbach
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Stadtteile betreut der Pflegedienst Frankfurt Nieder-Eschbach?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser Pflegedienst ist in ganz Frankfurt und Umgebung tätig. Neben Nieder-Eschbach betreuen wir auch die angrenzenden Frankfurter Stadtteile wie Harheim, Nieder-Erlenbach und Bonames sowie alle weiteren Stadtteile in Frankfurt.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie oft kommt der Pflegedienst Frankfurt Nieder-Eschbach zu mir?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die Besuchsfrequenz unseres Pflegedienstes in Frankfurt Nieder-Eschbach richten wir individuell nach Ihrem Bedarf – von einmal täglich bis mehrmals am Tag. Auch Wochenend- und Feiertagsbesuche sind bei unserem Pflegedienst in Frankfurt selbstverständlich.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Bietet der Pflegedienst Frankfurt Nieder-Eschbach auch Intensivpflege an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unser Pflegedienst in Frankfurt Nieder-Eschbach bietet auch <Link to="/leistungen/intensivpflege" className="text-primary hover:underline">Intensivpflege</Link> mit Heimbeatmung und spezieller medizinischer Versorgung an. Unsere examinierten Pflegefachkräfte in Frankfurt sind für diese anspruchsvollen Aufgaben qualifiziert.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie beantrage ich Leistungen für den Pflegedienst in Frankfurt Nieder-Eschbach?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser Pflegedienst in Frankfurt Nieder-Eschbach unterstützt Sie bei der Antragstellung für Pflegeleistungen. Wir helfen Ihnen beim <Link to="/blog/pflegegrad-beantragen" className="text-primary hover:underline">Pflegegrad beantragen</Link> und beraten Sie zu allen verfügbaren Leistungen der Pflegekasse.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Was kostet der Pflegedienst Frankfurt Nieder-Eschbach pro Monat?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die monatlichen Kosten für unseren Pflegedienst in Frankfurt Nieder-Eschbach hängen vom individuellen Pflegebedarf und dem Pflegegrad ab. Bei Pflegegrad 2 bis 5 übernimmt die Pflegekasse Sachleistungen von 761 bis 2.200 Euro monatlich. Behandlungspflege wird zusätzlich von der Krankenkasse finanziert.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Betreut der Pflegedienst Frankfurt Nieder-Eschbach auch Demenzpatienten?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unser Pflegedienst in Frankfurt Nieder-Eschbach hat erfahrene Mitarbeiter für die Betreuung von Menschen mit Demenz. Wir bieten geduldige Begleitung im Alltag und entlasten pflegende Angehörige in Frankfurt durch Verhinderungspflege und stundenweise Betreuung.
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

export default NiederEschbach;
