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
import TrustBadges from "@/components/TrustBadges";

const heddernheimFaqs = [
  {
    "question": "Was kostet der Pflegedienst Frankfurt Heddernheim?",
    "answer": "Die Kosten für unseren Pflegedienst in Frankfurt Heddernheim werden größtenteils von der Pflegekasse übernommen. Wir erstellen Ihnen gerne einen individuellen Kostenvoranschlag und beraten Sie umfassend zu Ihren Ansprüchen auf Pflegegeld und Sachleistungen."
  },
  {
    "question": "Wie kann ich einen Pflegegrad für den Pflegedienst in Frankfurt beantragen?",
    "answer": "Unser Pflegedienst in Frankfurt Heddernheim unterstützt Sie gerne bei der Antragstellung und bereitet Sie auf die Begutachtung durch den Medizinischen Dienst vor."
  },
  {
    "question": "Bietet der Pflegedienst Frankfurt Heddernheim auch Verhinderungspflege an?",
    "answer": "Ja, unser Pflegedienst in Frankfurt Heddernheim bietet Verhinderungspflege an, wenn pflegende Angehörige Urlaub machen oder krank sind. So ist die Versorgung Ihres Angehörigen in Frankfurt immer gesichert."
  },
  {
    "question": "Ist der Pflegedienst Frankfurt Heddernheim auch am Wochenende verfügbar?",
    "answer": "Ja, unser Pflegedienst in Frankfurt Heddernheim ist auch an Wochenenden und Feiertagen für Sie da. Bei Notfällen erreichen Sie uns rund um die Uhr unter 069 153 914 05."
  },
  {
    "question": "Welche Qualifikationen haben die Pflegekräfte des Pflegedienstes Frankfurt Heddernheim?",
    "answer": "Unser Pflegedienst in Frankfurt Heddernheim beschäftigt examinierte Pflegefachkräfte, Pflegehelfer und Betreuungskräfte. Alle Mitarbeiter werden regelmäßig fortgebildet und sind für die ambulante Pflege in Frankfurt qualifiziert – auch für Intensivpflege und Demenzbetreuung."
  },
  {
    "question": "Kann der Pflegedienst Frankfurt Heddernheim auch Intensivpflege übernehmen?",
    "answer": "Ja, unser Pflegedienst in Frankfurt Heddernheim bietet auch außerklinische Intensivpflege mit Heimbeatmung an. Unsere spezialisierten Pflegefachkräfte betreuen Beatmungspatienten professionell und individuell in ihrem Zuhause in Frankfurt."
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

const Heddernheim = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Heddernheim ✓ Ambulante Pflege | avyta.de</title>
        <meta name="description" content="Pflegedienst Heddernheim ✓ Zuverlässige ambulante Pflege ✓ Grund-, Behandlungs- & Intensivpflege ✓ 12+ Jahre Erfahrung ✓ 069 153 914 05" />
        <link rel="canonical" href="https://www.avyta.de/standorte/frankfurt/heddernheim" />
        <meta property="og:title" content="Pflegedienst Frankfurt Heddernheim ✓ Ambulante Pflege | avyta.de" />
        <meta property="og:description" content="Pflegedienst Frankfurt Heddernheim – zuverlässige ambulante Pflege in Ihrer Nähe." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Standorte", url: "https://www.avyta.de/standorte/frankfurt" },
          { name: "Heddernheim", url: "https://www.avyta.de/standorte/frankfurt/heddernheim" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(heddernheimFaqs)}</script>
        <script type="application/ld+json">{generateServiceSchema({
          serviceName: "Ambulanter Pflegedienst Frankfurt Heddernheim",
          serviceDescription: "Ambulanter Pflegedienst in Frankfurt Heddernheim: Grundpflege, Behandlungspflege und Intensivpflege zu Hause.",
          serviceType: "Ambulanter Pflegedienst",
          canonicalUrl: "https://www.avyta.de/standorte/frankfurt/heddernheim",
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
                  Pflegedienst Frankfurt Heddernheim – Zuverlässig an Ihrer Seite
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Sie suchen einen verlässlichen <strong>Pflegedienst in Frankfurt Heddernheim</strong>? AVYTA ist Ihr erfahrener Partner für ambulante Pflege – mit Einfühlungsvermögen und Kompetenz, direkt in Ihrem Zuhause.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          {/* Trust Badges */}
          <TrustBadges />

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Ihr ambulanter Pflegedienst in Frankfurt Heddernheim
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    Der <strong>Pflegedienst Frankfurt Heddernheim</strong> von AVYTA fügt sich nahtlos in die lebendige Gemeinschaft des Frankfurter Nordens ein. Heddernheim in Frankfurt bietet eine Mischung aus Tradition und Moderne – und unser ambulanter Pflegedienst stellt sicher, dass Sie diese Lebensqualität auch bei gesundheitlichen Einschränkungen genießen können.
                  </p>
                  <p className="mb-6">
                    Ob Sie Hilfe bei der täglichen Körperpflege benötigen oder eine komplexe medizinische Versorgung – unser qualifiziertes Team des <strong>Pflegedienstes in Frankfurt Heddernheim</strong> ist für Sie da. Wir arbeiten eng mit Ihren Angehörigen und behandelnden Ärzten in Frankfurt zusammen, um die bestmögliche Pflege zu gewährleisten.
                  </p>
                  <p className="mb-6">
                    Als zugelassener <strong>Pflegedienst in Frankfurt</strong> rechnen wir alle Leistungen direkt mit Ihrer Pflege- und Krankenkasse ab. Unser Pflegeteam berät Sie umfassend zu Ihren Ansprüchen und hilft bei der Beantragung von Pflegegraden.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Zuverlässig & Pünktlich</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Einfühlsame Pflege</span>
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
                Leistungen unseres Pflegedienstes in Frankfurt Heddernheim
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Der <strong>Pflegedienst Frankfurt Heddernheim</strong> bietet Ihnen ein breites Spektrum – von der <Link to="/leistungen/grundpflege" className="text-primary hover:underline">Grundpflege</Link> über die <Link to="/leistungen/behandlungspflege" className="text-primary hover:underline">Behandlungspflege</Link> bis zur <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" className="text-primary hover:underline">Intensivpflege</Link>.
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Grundpflege in Frankfurt Heddernheim
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Unser Pflegedienst in Frankfurt Heddernheim unterstützt Sie bei allen Verrichtungen des täglichen Lebens:
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
                      Behandlungspflege in Frankfurt Heddernheim
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
                      Intensivpflege vom Pflegedienst Frankfurt Heddernheim
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Unser <strong>Pflegedienst in Frankfurt Heddernheim</strong> bietet auch Intensivpflege mit Heimbeatmung an. Unsere examinierten Pflegefachkräfte übernehmen die Überwachung und Vitalisierung, das Legen von Blasenkathetern, endotracheales Absaugen sowie Lagerungsbehandlungen und Mobilisation. Mehr zur <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" className="text-primary hover:underline">Intensivpflege in Frankfurt</Link>.
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
                  Weitere Angebote unseres Pflegedienstes in Frankfurt Heddernheim
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Verhinderungspflege in Frankfurt</h3>
                      <p className="text-sm text-muted-foreground">Entlastung für pflegende Angehörige. Mehr zur <Link to="/leistungen/verhinderungspflege-frankfurt" className="text-primary hover:underline">Verhinderungspflege</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Pflegeberatung in Frankfurt Heddernheim</h3>
                      <p className="text-sm text-muted-foreground">Beratung zu Pflegegraden und Ansprüchen. Mehr zur <Link to="/leistungen/pflegeberatung-frankfurt" className="text-primary hover:underline">Pflegeberatung</Link>.</p>
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
                      <h3 className="font-display font-semibold text-foreground mb-1">Haushaltshilfe in Frankfurt Heddernheim</h3>
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
                  AVYTA – Ihr Pflegedienst in Frankfurt Heddernheim
                </h2>
                <p className="text-muted-foreground mb-8">
                  Wir sind mehr als ein Pflegedienst – wir sind Ihr Partner für ein selbstbestimmtes Leben zu Hause in Frankfurt Heddernheim. Rufen Sie uns an unter <strong>069 153 914 05</strong> oder nutzen Sie unser <Link to="/kontakt" className="text-primary hover:underline">Kontaktformular</Link>.
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
                  Häufige Fragen zum Pflegedienst Frankfurt Heddernheim
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Was kostet der Pflegedienst Frankfurt Heddernheim?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die Kosten für unseren Pflegedienst in Frankfurt Heddernheim werden größtenteils von der Pflegekasse übernommen. Wir erstellen Ihnen gerne einen individuellen Kostenvoranschlag und beraten Sie umfassend zu Ihren Ansprüchen auf <Link to="/blog/pflegegeld-tabelle-2025" className="text-primary hover:underline">Pflegegeld</Link> und Sachleistungen.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie kann ich einen Pflegegrad für den Pflegedienst in Frankfurt beantragen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser Pflegedienst in Frankfurt Heddernheim unterstützt Sie gerne bei der Antragstellung und bereitet Sie auf die Begutachtung vor. Lesen Sie dazu auch unseren Ratgeber zum <Link to="/blog/pflegegrad-beantragen" className="text-primary hover:underline">Pflegegrad beantragen</Link>.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Bietet der Pflegedienst Frankfurt Heddernheim auch Verhinderungspflege an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unser Pflegedienst in Frankfurt Heddernheim bietet <Link to="/leistungen/verhinderungspflege-frankfurt" className="text-primary hover:underline">Verhinderungspflege</Link> an, wenn pflegende Angehörige Urlaub machen oder krank sind. So ist die Versorgung Ihres Angehörigen in Frankfurt immer gesichert.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Ist der Pflegedienst Frankfurt Heddernheim auch am Wochenende verfügbar?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unser Pflegedienst in Frankfurt Heddernheim ist auch an Wochenenden und Feiertagen für Sie da. Bei Notfällen erreichen Sie uns rund um die Uhr unter 069 153 914 05.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Qualifikationen haben die Pflegekräfte des Pflegedienstes Frankfurt Heddernheim?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser Pflegedienst in Frankfurt Heddernheim beschäftigt examinierte Pflegefachkräfte, Pflegehelfer und Betreuungskräfte. Alle Mitarbeiter werden regelmäßig fortgebildet und sind für die ambulante Pflege in Frankfurt qualifiziert – auch für Intensivpflege und Demenzbetreuung.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Kann der Pflegedienst Frankfurt Heddernheim auch Intensivpflege übernehmen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unser Pflegedienst in Frankfurt Heddernheim bietet auch außerklinische Intensivpflege mit Heimbeatmung an. Unsere spezialisierten Pflegefachkräfte betreuen Beatmungspatienten professionell und individuell in ihrem Zuhause in Frankfurt.
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

export default Heddernheim;
