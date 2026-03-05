import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Heart, Shield, CheckCircle, HelpCircle, Users, Star } from "lucide-react";
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

const Eschersheim = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Frankfurt Eschersheim ✓ Ambulante Pflege | avyta.de</title>
        <meta name="description" content="Pflegedienst Frankfurt Eschersheim ✓ Kompetente häusliche Pflege ✓ Grundpflege, Behandlungspflege & Intensivpflege ✓ 12+ Jahre Erfahrung ✓ Tel: 069 153 914 05" />
        <link rel="canonical" href="https://www.avyta.de/standorte/frankfurt/eschersheim" />
        <meta property="og:title" content="Pflegedienst Frankfurt Eschersheim ✓ Ambulante Pflege | avyta.de" />
        <meta property="og:description" content="Pflegedienst Frankfurt Eschersheim – kompetente häusliche Pflege in familiärer Atmosphäre." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Standorte", url: "https://www.avyta.de/standorte/frankfurt" },
          { name: "Eschersheim", url: "https://www.avyta.de/standorte/frankfurt/eschersheim" },
        ])}</script>
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
                  Pflegedienst Frankfurt Eschersheim – Kompetent und Herzlich
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Sie suchen einen kompetenten <strong>Pflegedienst in Frankfurt Eschersheim</strong>? AVYTA bietet Ihnen erstklassige ambulante Pflege in familiärer Atmosphäre – direkt in Ihrem Zuhause im grünen Eschersheim.
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
                  Ihr ambulanter Pflegedienst in Frankfurt Eschersheim
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    Der <strong>Pflegedienst Frankfurt Eschersheim</strong> von AVYTA ist seit über 12 Jahren Ihr Partner für häusliche Pflege im Frankfurter Norden. Eschersheim in Frankfurt ist bekannt für seine grünen Straßen und das entspannte Wohngefühl – und wir möchten, dass Sie diese Lebensqualität auch bei Pflegebedürftigkeit genießen können.
                  </p>
                  <p className="mb-6">
                    Mit der Hilfe unseres <strong>Pflegedienstes in Frankfurt Eschersheim</strong> meistern Sie den Alltag, ohne auf Ihre Unabhängigkeit verzichten zu müssen. Wir passen unsere Leistungen genau an Ihre individuellen Bedürfnisse an und arbeiten eng mit Ihren Angehörigen und behandelnden Ärzten in Frankfurt zusammen.
                  </p>
                  <p className="mb-6">
                    Unser ambulanter <strong>Pflegedienst in Frankfurt</strong> ist zugelassen und rechnet direkt mit allen gesetzlichen und privaten Pflege- und Krankenkassen ab. So haben Sie keine unnötige Bürokratie und können sich auf Ihre Gesundheit konzentrieren.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Flexibel für Sie da</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Herzliche Betreuung</span>
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
                Leistungen unseres Pflegedienstes in Frankfurt Eschersheim
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Der <strong>Pflegedienst Frankfurt Eschersheim</strong> bietet ein umfassendes Leistungsspektrum – von der <Link to="/leistungen/grundpflege" className="text-primary hover:underline">Grundpflege</Link> über die <Link to="/leistungen/behandlungspflege" className="text-primary hover:underline">Behandlungspflege</Link> bis zur <Link to="/leistungen/intensivpflege" className="text-primary hover:underline">Intensivpflege</Link>.
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Grundpflege in Frankfurt Eschersheim
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Unser Pflegedienst in Frankfurt Eschersheim unterstützt Sie bei allen grundlegenden Verrichtungen:
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
                      Behandlungspflege in Frankfurt Eschersheim
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
                      Intensivpflege vom Pflegedienst Frankfurt Eschersheim
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Unser <strong>Pflegedienst in Frankfurt Eschersheim</strong> bietet auch Intensivpflege mit Heimbeatmung an. Unsere examinierten Pflegefachkräfte übernehmen die Überwachung und Vitalisierung, das Legen von Blasenkathetern, endotracheales Absaugen sowie Lagerungsbehandlungen und Mobilisation. Mehr zur <Link to="/leistungen/intensivpflege" className="text-primary hover:underline">Intensivpflege in Frankfurt</Link>.
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
                  Weitere Angebote unseres Pflegedienstes in Frankfurt Eschersheim
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Verhinderungspflege in Frankfurt</h3>
                      <p className="text-sm text-muted-foreground">Entlastung für pflegende Angehörige durch unseren Pflegedienst in Frankfurt Eschersheim. Mehr zur <Link to="/leistungen/verhinderungspflege" className="text-primary hover:underline">Verhinderungspflege</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Pflegeberatung in Frankfurt Eschersheim</h3>
                      <p className="text-sm text-muted-foreground">Umfassende Beratung zu Pflegegraden und Ansprüchen. Mehr zur <Link to="/leistungen/pflegeberatung" className="text-primary hover:underline">Pflegeberatung</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">24-Stunden-Pflege in Frankfurt</h3>
                      <p className="text-sm text-muted-foreground">Rund-um-die-Uhr-Betreuung in Frankfurt Eschersheim. Mehr zur <Link to="/leistungen/24-stunden-pflege" className="text-primary hover:underline">24h-Pflege</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Haushaltshilfe in Frankfurt Eschersheim</h3>
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
                  AVYTA – Ihr Pflegedienst in Frankfurt Eschersheim
                </h2>
                <p className="text-muted-foreground mb-8">
                  Vertrauen Sie auf die Erfahrung und Kompetenz unseres <strong>Pflegedienstes in Frankfurt Eschersheim</strong>. Rufen Sie uns an unter <strong>069 153 914 05</strong> oder nutzen Sie unser <Link to="/kontakt" className="text-primary hover:underline">Kontaktformular</Link> für ein persönliches Beratungsgespräch.
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
                  Häufige Fragen zum Pflegedienst Frankfurt Eschersheim
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie schnell kann der Pflegedienst Frankfurt Eschersheim starten?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      In der Regel kann unser Pflegedienst in Frankfurt Eschersheim innerhalb weniger Tage mit der Pflege beginnen. Bei dringenden Fällen finden wir auch kurzfristig eine Lösung – rufen Sie uns einfach an.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Bietet der Pflegedienst Frankfurt Eschersheim auch Pflegeberatung an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unser Pflegedienst in Frankfurt Eschersheim bietet umfassende Pflegeberatung an. Wir helfen Ihnen bei Fragen zu Pflegegraden, Leistungsansprüchen und der Organisation der häuslichen Pflege in Frankfurt.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Hilft der Pflegedienst Eschersheim auch bei der Haushaltsführung?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, hauswirtschaftliche Hilfe gehört zum Leistungsspektrum unseres Pflegedienstes in Frankfurt Eschersheim. Wir unterstützen bei Einkäufen, Reinigung und anderen alltäglichen Aufgaben in Ihrem Zuhause.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Übernimmt die Pflegekasse die Kosten für den Pflegedienst in Frankfurt Eschersheim?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Bei Vorliegen eines Pflegegrades übernimmt die Pflegekasse einen Großteil der Kosten. Behandlungspflege wird über ärztliche Verordnung von der Krankenkasse finanziert. Unser Pflegedienst in Frankfurt Eschersheim berät Sie gerne zu Ihren individuellen Ansprüchen.
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

export default Eschersheim;
