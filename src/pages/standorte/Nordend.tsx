import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Heart, Shield, CheckCircle, HelpCircle, Users, Star } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";
import { generateServiceSchema } from "@/lib/serviceSchema";
import { generateFAQSchema } from "@/lib/faqSchema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const nordendFaqs = [
  {
    "question": "Wie schnell kann der Pflegedienst Frankfurt Nordend starten?",
    "answer": "Nach einem ersten Beratungsgespräch kann unser Pflegedienst in Frankfurt Nordend in der Regel innerhalb weniger Tage mit der Pflege beginnen. Bei dringenden Fällen finden wir auch kurzfristig eine Lösung für Sie in Frankfurt."
  },
  {
    "question": "Übernimmt die Pflegekasse die Kosten für den Pflegedienst in Frankfurt Nordend?",
    "answer": "Ja, bei Vorliegen eines Pflegegrades übernimmt die Pflegekasse einen Großteil der Kosten für unseren Pflegedienst in Frankfurt Nordend. Behandlungspflege wird über ärztliche Verordnung von der Krankenkasse finanziert."
  },
  {
    "question": "Kann ich den Pflegedienst Frankfurt Nordend auch ohne Pflegegrad nutzen?",
    "answer": "Ja, unsere Serviceleistungen können Sie auch ohne Pflegegrad als Selbstzahler in Anspruch nehmen. Unser Pflegedienst in Frankfurt Nordend hilft Ihnen auch gerne bei der Beantragung eines Pflegegrades."
  },
  {
    "question": "Bekomme ich beim Pflegedienst Frankfurt Nordend feste Pflegekräfte?",
    "answer": "Ja, unser Pflegedienst in Frankfurt Nordend achtet auf Kontinuität in der Pflege. Nach Möglichkeit betreuen Sie dieselben Pflegekräfte, damit ein Vertrauensverhältnis entstehen kann – das ist uns bei der ambulanten Pflege in Frankfurt besonders wichtig."
  },
  {
    "question": "Welche Leistungen umfasst der Pflegedienst Frankfurt Nordend?",
    "answer": "Unser Pflegedienst in Frankfurt Nordend bietet Grundpflege, Behandlungspflege, Intensivpflege, Verhinderungspflege, Pflegeberatung und hauswirtschaftliche Hilfe. Wir betreuen alle Pflegegrade und erstellen individuelle Pflegepläne für Patienten im Nordend."
  },
  {
    "question": "Bietet der Pflegedienst Frankfurt Nordend auch Wundversorgung an?",
    "answer": "Ja, die professionelle Wundversorgung gehört zu den Kernleistungen unseres Pflegedienstes in Frankfurt Nordend. Unsere examinierten Pflegefachkräfte versorgen chronische und akute Wunden fachgerecht bei Ihnen zu Hause."
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

const Nordend = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Nordend ✓ Ambulante Pflege | avyta.de</title>
        <meta name="description" content="Pflegedienst Nordend ✓ Herzliche ambulante Pflege ✓ Grund-, Behandlungs- & Intensivpflege ✓ 12+ Jahre Erfahrung ✓ Tel: 069 153 914 05" />
        <link rel="canonical" href="https://www.avyta.de/standorte/frankfurt/nordend" />
        <meta property="og:title" content="Pflegedienst Frankfurt Nordend ✓ Ambulante Pflege | avyta.de" />
        <meta property="og:description" content="Pflegedienst Frankfurt Nordend – herzliche ambulante Pflege in Ihrem Stadtteil." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/og-image.jpg" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Standorte", url: "https://www.avyta.de/standorte/frankfurt" },
          { name: "Nordend", url: "https://www.avyta.de/standorte/frankfurt/nordend" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(nordendFaqs)}</script>
        <script type="application/ld+json">{generateServiceSchema({
          serviceName: "Ambulanter Pflegedienst Frankfurt Nordend",
          serviceDescription: "Ambulanter Pflegedienst in Frankfurt Nordend: Grundpflege, Behandlungspflege und Intensivpflege zu Hause.",
          serviceType: "Ambulanter Pflegedienst",
          canonicalUrl: "https://www.avyta.de/standorte/frankfurt/nordend",
        })}</script>
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
                  Pflegedienst Frankfurt Nordend – Ihre Pflege in vertrauter Umgebung
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Sie suchen einen zuverlässigen <strong>Pflegedienst in Frankfurt Nordend</strong>? AVYTA bietet Ihnen professionelle und herzliche ambulante Pflege direkt in Ihrem Zuhause im beliebten Frankfurter Nordend.
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
                  Ihr ambulanter Pflegedienst in Frankfurt Nordend
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    Der <strong>Pflegedienst Frankfurt Nordend</strong> von AVYTA ermöglicht es Ihnen, trotz Pflegebedürftigkeit Teil der lebendigen Nordend-Gemeinschaft in Frankfurt zu bleiben. Das Nordend gehört zu den beliebtesten Stadtteilen Frankfurts mit seinen charmanten Altbauten, gemütlichen Cafés und dem Günthersburgpark – und wir verstehen, dass Sie in dieser vertrauten Nachbarschaft bleiben möchten.
                  </p>
                  <p className="mb-6">
                    Unser <strong>Pflegedienst in Frankfurt Nordend</strong> passt seine Leistungen individuell an Ihre Bedürfnisse an. Von der morgendlichen Körperpflege bis zur medizinischen Versorgung am Abend – das erfahrene Team unseres Pflegedienstes in Frankfurt steht Ihnen mit Kompetenz und herzlichem Umgang zur Seite. Wir arbeiten eng mit Ihren Angehörigen und behandelnden Ärzten in Frankfurt zusammen.
                  </p>
                  <p className="mb-6">
                    Als zugelassener <strong>Pflegedienst in Frankfurt</strong> rechnen wir alle Leistungen direkt mit Ihrer Pflege- und Krankenkasse ab. Ob gesetzlich oder privat versichert – wir kümmern uns um die Formalitäten, damit Sie sich auf Ihre Gesundheit konzentrieren können.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Flexibel nach Ihrem Zeitplan</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Pflege mit Herz</span>
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
                Leistungen unseres Pflegedienstes in Frankfurt Nordend
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Der <strong>Pflegedienst Frankfurt Nordend</strong> bietet ein umfassendes Spektrum – von der <Link to="/leistungen/grundpflege" className="text-primary hover:underline">Grundpflege</Link> über die <Link to="/leistungen/behandlungspflege" className="text-primary hover:underline">Behandlungspflege</Link> bis zur <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" className="text-primary hover:underline">Intensivpflege</Link>.
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Grundpflege in Frankfurt Nordend
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Unser Pflegedienst in Frankfurt Nordend unterstützt Sie bei allen Verrichtungen des täglichen Lebens:
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
                      Behandlungspflege in Frankfurt Nordend
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
                      Intensivpflege vom Pflegedienst Frankfurt Nordend
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Unser <strong>Pflegedienst in Frankfurt Nordend</strong> bietet auch Intensivpflege mit Heimbeatmung an. Unsere examinierten Pflegefachkräfte übernehmen die Überwachung und Vitalisierung, das Legen von Blasenkathetern, endotracheales Absaugen sowie Lagerungsbehandlungen und Mobilisation. Mehr zur <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" className="text-primary hover:underline">Intensivpflege in Frankfurt</Link>.
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
                  Weitere Angebote unseres Pflegedienstes in Frankfurt Nordend
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Verhinderungspflege in Frankfurt</h3>
                      <p className="text-sm text-muted-foreground">Entlastung für pflegende Angehörige im Nordend. Mehr zur <Link to="/leistungen/verhinderungspflege-frankfurt" className="text-primary hover:underline">Verhinderungspflege</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Pflegeberatung in Frankfurt Nordend</h3>
                      <p className="text-sm text-muted-foreground">Beratung zu Pflegegraden und Ansprüchen. Mehr zur <Link to="/leistungen/pflegeberatung-frankfurt" className="text-primary hover:underline">Pflegeberatung</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">24-Stunden-Pflege in Frankfurt</h3>
                      <p className="text-sm text-muted-foreground">Rund-um-die-Uhr-Betreuung im Nordend. Mehr zur <Link to="/leistungen/24-stunden-pflege" className="text-primary hover:underline">24h-Pflege</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Haushaltshilfe in Frankfurt Nordend</h3>
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
                  AVYTA – Ihr Pflegedienst in Frankfurt Nordend
                </h2>
                <p className="text-muted-foreground mb-8">
                  Der <strong>Pflegedienst Frankfurt Nordend</strong> von AVYTA ist jeden Tag für Sie da – auch an Wochenenden und Feiertagen. Bei Notfällen erreichen Sie uns rund um die Uhr unter <strong>069 153 914 05</strong>. Nutzen Sie auch unser <Link to="/kontakt" className="text-primary hover:underline">Kontaktformular</Link> für ein unverbindliches Beratungsgespräch.
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
                  Häufige Fragen zum Pflegedienst Frankfurt Nordend
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie schnell kann der Pflegedienst Frankfurt Nordend starten?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Nach einem ersten Beratungsgespräch kann unser Pflegedienst in Frankfurt Nordend in der Regel innerhalb weniger Tage mit der Pflege beginnen. Bei dringenden Fällen finden wir auch kurzfristig eine Lösung für Sie in Frankfurt.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Übernimmt die Pflegekasse die Kosten für den Pflegedienst in Frankfurt Nordend?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, bei Vorliegen eines Pflegegrades übernimmt die Pflegekasse einen Großteil der Kosten für unseren Pflegedienst in Frankfurt Nordend. Behandlungspflege wird über ärztliche Verordnung von der Krankenkasse finanziert. Lesen Sie auch unseren Ratgeber zur <Link to="/blog/pflegegeld-tabelle-2025" className="text-primary hover:underline">Pflegegeld-Tabelle</Link>.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Kann ich den Pflegedienst Frankfurt Nordend auch ohne Pflegegrad nutzen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unsere Serviceleistungen können Sie auch ohne Pflegegrad als Selbstzahler in Anspruch nehmen. Unser Pflegedienst in Frankfurt Nordend hilft Ihnen auch gerne bei der <Link to="/blog/pflegegrad-beantragen" className="text-primary hover:underline">Beantragung eines Pflegegrades</Link>.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Bekomme ich beim Pflegedienst Frankfurt Nordend feste Pflegekräfte?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unser Pflegedienst in Frankfurt Nordend achtet auf Kontinuität in der Pflege. Nach Möglichkeit betreuen Sie dieselben Pflegekräfte, damit ein Vertrauensverhältnis entstehen kann – das ist uns bei der ambulanten Pflege in Frankfurt besonders wichtig.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Leistungen umfasst der Pflegedienst Frankfurt Nordend?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser Pflegedienst in Frankfurt Nordend bietet Grundpflege, Behandlungspflege, Intensivpflege, Verhinderungspflege, Pflegeberatung und hauswirtschaftliche Hilfe. Wir betreuen alle Pflegegrade und erstellen individuelle Pflegepläne für Patienten im Nordend.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Bietet der Pflegedienst Frankfurt Nordend auch Wundversorgung an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, die professionelle Wundversorgung gehört zu den Kernleistungen unseres Pflegedienstes in Frankfurt Nordend. Unsere examinierten Pflegefachkräfte versorgen chronische und akute Wunden fachgerecht bei Ihnen zu Hause.
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

export default Nordend;
