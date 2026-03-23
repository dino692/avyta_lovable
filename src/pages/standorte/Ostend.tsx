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

const ostendFaqs = [
  {
    "question": "Welche Qualifikationen haben die Mitarbeiter des Pflegedienstes Frankfurt Ostend?",
    "answer": "Das Team unseres Pflegedienstes in Frankfurt Ostend besteht aus examinierten Pflegefachkräften, Pflegehelfern und Betreuungskräften. Alle Mitarbeiter werden regelmäßig fortgebildet und arbeiten nach höchsten Qualitätsstandards in der ambulanten Pflege in Frankfurt."
  },
  {
    "question": "Bekomme ich beim Pflegedienst Frankfurt Ostend feste Pflegekräfte?",
    "answer": "Ja, unser Pflegedienst in Frankfurt Ostend achtet auf Kontinuität in der Pflege. Nach Möglichkeit betreuen Sie dieselben Pflegekräfte, damit ein Vertrauensverhältnis entstehen kann."
  },
  {
    "question": "Wie kontaktiere ich den Pflegedienst Frankfurt Ostend?",
    "answer": "Rufen Sie unseren Pflegedienst in Frankfurt Ostend an unter 069 153 914 05 oder nutzen Sie unser Kontaktformular. Wir vereinbaren dann einen Termin für ein persönliches Beratungsgespräch, gerne bei Ihnen zu Hause im Ostend."
  },
  {
    "question": "Übernimmt die Krankenkasse die Kosten für den Pflegedienst in Frankfurt Ostend?",
    "answer": "Die Grundpflege wird bei Vorliegen eines Pflegegrades von der Pflegekasse übernommen. Behandlungspflege wird über ärztliche Verordnung von der Krankenkasse finanziert. Unser Pflegedienst in Frankfurt Ostend berät Sie zu allen Finanzierungsmöglichkeiten."
  },
  {
    "question": "Welche Pflegegrade betreut der Pflegedienst Frankfurt Ostend?",
    "answer": "Unser Pflegedienst in Frankfurt Ostend betreut Patienten aller Pflegegrade von 1 bis 5. Ob einfache Alltagsunterstützung bei Pflegegrad 1 oder komplexe Intensivpflege bei Pflegegrad 5 – wir passen unsere Leistungen in Frankfurt individuell an."
  },
  {
    "question": "Bietet der Pflegedienst Frankfurt Ostend auch Beratung zur Pflegefinanzierung?",
    "answer": "Ja, unser Pflegedienst in Frankfurt Ostend berät Sie umfassend zu Pflegegeld, Sachleistungen, Kombinationsleistungen, Verhinderungspflege und dem Entlastungsbetrag von 131 Euro monatlich. Wir helfen Ihnen, alle Ihnen zustehenden Leistungen optimal zu nutzen."
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

const Ostend = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Frankfurt Ostend ✓ Ambulante Pflege | avyta.de</title>
        <meta name="description" content="Pflegedienst Frankfurt Ostend ✓ Professionelle ambulante Pflege ✓ Grundpflege, Behandlungspflege & Intensivpflege ✓ 12+ Jahre Erfahrung ✓ Tel: 069 153 914 05" />
        <link rel="canonical" href="https://www.avyta.de/standorte/frankfurt/ostend" />
        <meta property="og:title" content="Pflegedienst Frankfurt Ostend ✓ Ambulante Pflege | avyta.de" />
        <meta property="og:description" content="Pflegedienst Frankfurt Ostend – professionelle ambulante Pflege vor Ort." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Standorte", url: "https://www.avyta.de/standorte/frankfurt" },
          { name: "Ostend", url: "https://www.avyta.de/standorte/frankfurt/ostend" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(ostendFaqs)}</script>
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
                  Pflegedienst Frankfurt Ostend – Professionelle Pflege vor Ort
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Sie suchen einen kompetenten <strong>Pflegedienst in Frankfurt Ostend</strong>? AVYTA bietet Ihnen professionelle ambulante Pflege in Ihrem vertrauten Zuhause im dynamischen Frankfurter Ostend.
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
                  Ihr ambulanter Pflegedienst in Frankfurt Ostend
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    Der <strong>Pflegedienst Frankfurt Ostend</strong> von AVYTA ist Ihr zuverlässiger Partner für häusliche Pflege in einem der modernsten Stadtteile Frankfurts. Das Ostend in Frankfurt hat sich zu einem lebendigen Viertel mit Mainufer-Promenade und der EZB als Wahrzeichen entwickelt – und unser ambulanter Pflegedienst sorgt dafür, dass Sie auch bei Pflegebedürftigkeit von dieser Lebensqualität profitieren.
                  </p>
                  <p className="mb-6">
                    Ob in den neuen Wohnanlagen am Mainufer oder in den traditionsreichen Altbauten – unser <strong>Pflegedienst in Frankfurt Ostend</strong> kommt zu Ihnen und bietet professionelle Pflegeleistungen direkt in Ihrem Zuhause. Wir erstellen einen individuellen Pflegeplan, der genau auf Ihre Bedürfnisse und Ihren Tagesrhythmus zugeschnitten ist.
                  </p>
                  <p className="mb-6">
                    Als zugelassener <strong>Pflegedienst in Frankfurt</strong> arbeiten wir mit allen Pflege- und Krankenkassen zusammen und übernehmen die komplette Abrechnung. So können Sie sich voll und ganz auf Ihr Wohlbefinden konzentrieren.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">24h Erreichbarkeit</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Individuelle Betreuung</span>
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
                Leistungen unseres Pflegedienstes in Frankfurt Ostend
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Der <strong>Pflegedienst Frankfurt Ostend</strong> bietet ein umfassendes Angebot – von der <Link to="/leistungen/grundpflege" className="text-primary hover:underline">Grundpflege</Link> über die <Link to="/leistungen/behandlungspflege" className="text-primary hover:underline">Behandlungspflege</Link> bis zur <Link to="/leistungen/intensivpflege" className="text-primary hover:underline">Intensivpflege</Link>.
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Grundpflege in Frankfurt Ostend
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Unser Pflegedienst in Frankfurt Ostend unterstützt Sie bei allen Verrichtungen des täglichen Lebens:
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
                      Behandlungspflege in Frankfurt Ostend
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
                      Intensivpflege vom Pflegedienst Frankfurt Ostend
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Unser <strong>Pflegedienst in Frankfurt Ostend</strong> bietet auch Intensivpflege mit Heimbeatmung an. Unsere examinierten Pflegefachkräfte übernehmen die Überwachung und Vitalisierung, das Legen von Blasenkathetern, endotracheales Absaugen sowie Lagerungsbehandlungen und Mobilisation. Mehr zur <Link to="/leistungen/intensivpflege" className="text-primary hover:underline">Intensivpflege in Frankfurt</Link>.
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
                  Weitere Angebote unseres Pflegedienstes in Frankfurt Ostend
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Verhinderungspflege in Frankfurt</h3>
                      <p className="text-sm text-muted-foreground">Entlastung für pflegende Angehörige im Ostend. Mehr zur <Link to="/leistungen/verhinderungspflege" className="text-primary hover:underline">Verhinderungspflege</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Pflegeberatung in Frankfurt Ostend</h3>
                      <p className="text-sm text-muted-foreground">Beratung zu Pflegegraden und Leistungsansprüchen. Mehr zur <Link to="/leistungen/pflegeberatung" className="text-primary hover:underline">Pflegeberatung</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">24-Stunden-Pflege in Frankfurt</h3>
                      <p className="text-sm text-muted-foreground">Rund-um-die-Uhr-Betreuung im Ostend. Mehr zur <Link to="/leistungen/24-stunden-pflege" className="text-primary hover:underline">24h-Pflege</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Haushaltshilfe in Frankfurt Ostend</h3>
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
                  AVYTA – Ihr Pflegedienst in Frankfurt Ostend
                </h2>
                <p className="text-muted-foreground mb-8">
                  Der <strong>Pflegedienst Frankfurt Ostend</strong> von AVYTA verbindet langjährige Erfahrung mit einem qualifizierten Team. Wir sind für Sie da – täglich, zuverlässig und mit Herz. Rufen Sie uns an unter <strong>069 153 914 05</strong> oder nutzen Sie unser <Link to="/kontakt" className="text-primary hover:underline">Kontaktformular</Link>.
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
                  Häufige Fragen zum Pflegedienst Frankfurt Ostend
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Qualifikationen haben die Mitarbeiter des Pflegedienstes Frankfurt Ostend?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Das Team unseres Pflegedienstes in Frankfurt Ostend besteht aus examinierten Pflegefachkräften, Pflegehelfern und Betreuungskräften. Alle Mitarbeiter werden regelmäßig fortgebildet und arbeiten nach höchsten Qualitätsstandards in der ambulanten Pflege in Frankfurt.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Bekomme ich beim Pflegedienst Frankfurt Ostend feste Pflegekräfte?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unser Pflegedienst in Frankfurt Ostend achtet auf Kontinuität in der Pflege. Nach Möglichkeit betreuen Sie dieselben Pflegekräfte, damit ein Vertrauensverhältnis entstehen kann.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie kontaktiere ich den Pflegedienst Frankfurt Ostend?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Rufen Sie unseren Pflegedienst in Frankfurt Ostend an unter 069 153 914 05 oder nutzen Sie unser <Link to="/kontakt" className="text-primary hover:underline">Kontaktformular</Link>. Wir vereinbaren dann einen Termin für ein persönliches Beratungsgespräch, gerne bei Ihnen zu Hause im Ostend.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Übernimmt die Krankenkasse die Kosten für den Pflegedienst in Frankfurt Ostend?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die Grundpflege wird bei Vorliegen eines Pflegegrades von der Pflegekasse übernommen. Behandlungspflege wird über ärztliche Verordnung von der Krankenkasse finanziert. Unser Pflegedienst in Frankfurt Ostend berät Sie zu allen Finanzierungsmöglichkeiten.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Pflegegrade betreut der Pflegedienst Frankfurt Ostend?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser Pflegedienst in Frankfurt Ostend betreut Patienten aller Pflegegrade von 1 bis 5. Ob einfache Alltagsunterstützung bei Pflegegrad 1 oder komplexe Intensivpflege bei Pflegegrad 5 – wir passen unsere Leistungen in Frankfurt individuell an.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Bietet der Pflegedienst Frankfurt Ostend auch Beratung zur Pflegefinanzierung?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unser Pflegedienst in Frankfurt Ostend berät Sie umfassend zu Pflegegeld, Sachleistungen, Kombinationsleistungen, Verhinderungspflege und dem Entlastungsbetrag von 131 Euro monatlich. Wir helfen Ihnen, alle Ihnen zustehenden Leistungen optimal zu nutzen.
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

export default Ostend;
