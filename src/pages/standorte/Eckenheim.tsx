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

const eckenheimFaqs = [
  {
    "question": "Wie werden die Leistungen des Pflegedienstes Frankfurt Eckenheim abgerechnet?",
    "answer": "Die meisten Leistungen unseres Pflegedienstes in Frankfurt Eckenheim werden direkt mit der Pflegekasse abgerechnet. Behandlungspflege wird über ärztliche Verordnung von der Krankenkasse übernommen. Wir beraten Sie gerne zu Ihren Ansprüchen und unterstützen bei der Antragstellung."
  },
  {
    "question": "Können Angehörige in die Pflege des Pflegedienstes Eckenheim einbezogen werden?",
    "answer": "Selbstverständlich! Unser Pflegedienst in Frankfurt Eckenheim bezieht Angehörige gerne ein und bietet auch Pflegeanleitungen an, damit sie bestimmte Aufgaben selbst übernehmen können. So stärken wir die häusliche Pflegesituation gemeinsam."
  },
  {
    "question": "Was ist, wenn sich mein Pflegebedarf in Frankfurt Eckenheim ändert?",
    "answer": "Kein Problem – unser Pflegedienst in Frankfurt Eckenheim passt den Pflegeplan jederzeit an Ihre veränderten Bedürfnisse an. Flexibilität ist uns wichtig, denn Ihre Pflegesituation kann sich im Laufe der Zeit verändern."
  },
  {
    "question": "Wie schnell kann der Pflegedienst Frankfurt Eckenheim starten?",
    "answer": "Nach einem ersten Beratungsgespräch kann unser Pflegedienst in Frankfurt Eckenheim in der Regel innerhalb weniger Tage mit der Pflege beginnen. Bei dringenden Fällen finden wir auch kurzfristig eine Lösung. Rufen Sie uns an unter 069 153 914 05."
  },
  {
    "question": "Welche Pflegegrade versorgt der Pflegedienst Frankfurt Eckenheim?",
    "answer": "Unser Pflegedienst in Frankfurt Eckenheim betreut Patienten aller Pflegegrade – von Pflegegrad 1 bis Pflegegrad 5. Wir bieten Grundpflege, Behandlungspflege und Intensivpflege mit Heimbeatmung an und passen unsere Leistungen individuell an Ihre Bedürfnisse an."
  },
  {
    "question": "Bietet der Pflegedienst Frankfurt Eckenheim auch Verhinderungspflege an?",
    "answer": "Ja, unser Pflegedienst in Frankfurt Eckenheim übernimmt die Verhinderungspflege, wenn pflegende Angehörige eine Auszeit brauchen. Ab 2025 steht ein flexibles Budget von bis zu 3.539 Euro pro Jahr zur Verfügung. Wir beraten Sie gerne zu Ihren Ansprüchen."
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

const Eckenheim = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Eckenheim ✓ Ambulante Pflege | avyta.de</title>
        <meta name="description" content="Pflegedienst Eckenheim ✓ Persönliche ambulante Pflege ✓ Grund-, Behandlungs- & Intensivpflege ✓ 12+ Jahre Erfahrung ✓ 069 153 914 05" />
        <link rel="canonical" href="https://www.avyta.de/standorte/frankfurt/eckenheim" />
        <meta property="og:title" content="Pflegedienst Frankfurt Eckenheim ✓ Ambulante Pflege | avyta.de" />
        <meta property="og:description" content="Pflegedienst Frankfurt Eckenheim – persönliche ambulante Pflege für Ihr Wohlbefinden. Grundpflege, Behandlungspflege & Intensivpflege." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/og-image.jpg" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Standorte", url: "https://www.avyta.de/standorte/frankfurt" },
          { name: "Eckenheim", url: "https://www.avyta.de/standorte/frankfurt/eckenheim" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(eckenheimFaqs)}</script>
        <script type="application/ld+json">{generateServiceSchema({
          serviceName: "Ambulanter Pflegedienst Frankfurt Eckenheim",
          serviceDescription: "Ambulanter Pflegedienst in Frankfurt Eckenheim: Grundpflege, Behandlungspflege und Intensivpflege zu Hause.",
          serviceType: "Ambulanter Pflegedienst",
          canonicalUrl: "https://www.avyta.de/standorte/frankfurt/eckenheim",
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
                  Pflegedienst Frankfurt Eckenheim – Persönlich und Professionell
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Sie suchen einen erfahrenen <strong>Pflegedienst in Frankfurt Eckenheim</strong>? AVYTA bietet Ihnen ambulante Pflege, die sich durch Persönlichkeit und Professionalität auszeichnet – mit Herz und Kompetenz.
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
                  Ihr ambulanter Pflegedienst in Frankfurt Eckenheim
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    Der <strong>Pflegedienst Frankfurt Eckenheim</strong> von AVYTA ermöglicht es Ihnen, trotz Pflegebedürftigkeit in Ihrer vertrauten Umgebung zu bleiben. Eckenheim in Frankfurt verbindet städtisches Leben mit einer angenehmen Wohnatmosphäre – und diese Vorzüge sollen Sie auch weiterhin genießen können.
                  </p>
                  <p className="mb-6">
                    Jeder Mensch ist einzigartig – und so auch die Pflege unseres <strong>Pflegedienstes in Frankfurt Eckenheim</strong>. Wir nehmen uns Zeit, um Ihre individuellen Bedürfnisse zu verstehen und einen maßgeschneiderten Pflegeplan zu erstellen. Ob Grundpflege, medizinische Behandlungspflege oder hauswirtschaftliche Hilfe: Unser qualifiziertes Team in Frankfurt ist flexibel und zuverlässig für Sie da.
                  </p>
                  <p className="mb-6">
                    Als zugelassener <strong>Pflegedienst in Frankfurt</strong> arbeiten wir mit allen Pflege- und Krankenkassen zusammen. Wir unterstützen Sie bei der Beantragung von Leistungen und sorgen dafür, dass Sie die Pflege erhalten, die Ihnen zusteht.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Individuell abgestimmt</span>
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
                Leistungen unseres Pflegedienstes in Frankfurt Eckenheim
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Von der <Link to="/leistungen/grundpflege" className="text-primary hover:underline">Grundpflege</Link> bis zur <Link to="/leistungen/behandlungspflege" className="text-primary hover:underline">Behandlungspflege</Link> – unser <strong>Pflegedienst Frankfurt Eckenheim</strong> deckt alle Bereiche der häuslichen Pflege ab.
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Grundpflege in Frankfurt Eckenheim
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Unser Pflegedienst in Frankfurt Eckenheim unterstützt Sie bei allen Verrichtungen des täglichen Lebens:
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
                      Behandlungspflege in Frankfurt Eckenheim
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
                      Intensivpflege vom Pflegedienst Frankfurt Eckenheim
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Unser <strong>Pflegedienst in Frankfurt Eckenheim</strong> bietet auch Intensivpflege mit Heimbeatmung an. Unsere examinierten Pflegefachkräfte übernehmen die Überwachung und Vitalisierung, das Legen von Blasenkathetern, endotracheales Absaugen sowie Lagerungsbehandlungen und Mobilisation. Mehr zur <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" className="text-primary hover:underline">Intensivpflege in Frankfurt</Link>.
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
                  Weitere Angebote unseres Pflegedienstes in Frankfurt Eckenheim
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Verhinderungspflege in Frankfurt</h3>
                      <p className="text-sm text-muted-foreground">Wenn pflegende Angehörige Entlastung brauchen, übernimmt unser Pflegedienst in Frankfurt Eckenheim die <Link to="/leistungen/verhinderungspflege-frankfurt" className="text-primary hover:underline">Verhinderungspflege</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Pflegeberatung in Frankfurt Eckenheim</h3>
                      <p className="text-sm text-muted-foreground">Umfassende Beratung zu Pflegegraden und Leistungsansprüchen. Mehr zur <Link to="/leistungen/pflegeberatung-frankfurt" className="text-primary hover:underline">Pflegeberatung</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">24-Stunden-Pflege in Frankfurt</h3>
                      <p className="text-sm text-muted-foreground">Rund-um-die-Uhr-Betreuung durch unseren <Link to="/leistungen/24-stunden-pflege" className="text-primary hover:underline">24h-Pflegedienst</Link> in Frankfurt Eckenheim.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Haushaltshilfe in Frankfurt Eckenheim</h3>
                      <p className="text-sm text-muted-foreground">Unterstützung bei Einkauf, Reinigung und alltäglichen Aufgaben. Mehr zur <Link to="/leistungen/haushaltshilfe" className="text-primary hover:underline">Haushaltshilfe</Link>.</p>
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
                  AVYTA – Ihr Pflegedienst in Frankfurt Eckenheim
                </h2>
                <p className="text-muted-foreground mb-8">
                  Lassen Sie uns gemeinsam die beste Lösung für Ihre Pflegesituation in Frankfurt Eckenheim finden. Kontaktieren Sie unseren <strong>Pflegedienst</strong> unter <strong>069 153 914 05</strong> oder über unser <Link to="/kontakt" className="text-primary hover:underline">Kontaktformular</Link> für ein unverbindliches Beratungsgespräch.
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
                  Häufige Fragen zum Pflegedienst Frankfurt Eckenheim
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie werden die Leistungen des Pflegedienstes Frankfurt Eckenheim abgerechnet?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die meisten Leistungen unseres Pflegedienstes in Frankfurt Eckenheim werden direkt mit der Pflegekasse abgerechnet. Behandlungspflege wird über ärztliche Verordnung von der Krankenkasse übernommen. Wir beraten Sie gerne zu Ihren Ansprüchen und unterstützen bei der Antragstellung.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Können Angehörige in die Pflege des Pflegedienstes Eckenheim einbezogen werden?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Selbstverständlich! Unser Pflegedienst in Frankfurt Eckenheim bezieht Angehörige gerne ein und bietet auch Pflegeanleitungen an, damit sie bestimmte Aufgaben selbst übernehmen können. So stärken wir die häusliche Pflegesituation gemeinsam.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Was ist, wenn sich mein Pflegebedarf in Frankfurt Eckenheim ändert?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Kein Problem – unser Pflegedienst in Frankfurt Eckenheim passt den Pflegeplan jederzeit an Ihre veränderten Bedürfnisse an. Flexibilität ist uns wichtig, denn Ihre Pflegesituation kann sich im Laufe der Zeit verändern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie schnell kann der Pflegedienst Frankfurt Eckenheim starten?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Nach einem ersten Beratungsgespräch kann unser Pflegedienst in Frankfurt Eckenheim in der Regel innerhalb weniger Tage mit der Pflege beginnen. Bei dringenden Fällen finden wir auch kurzfristig eine Lösung. Rufen Sie uns an unter 069 153 914 05.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Pflegegrade versorgt der Pflegedienst Frankfurt Eckenheim?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Unser Pflegedienst in Frankfurt Eckenheim betreut Patienten aller Pflegegrade – von Pflegegrad 1 bis Pflegegrad 5. Wir bieten Grundpflege, Behandlungspflege und Intensivpflege mit Heimbeatmung an und passen unsere Leistungen individuell an Ihre Bedürfnisse an.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Bietet der Pflegedienst Frankfurt Eckenheim auch Verhinderungspflege an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Ja, unser Pflegedienst in Frankfurt Eckenheim übernimmt die Verhinderungspflege, wenn pflegende Angehörige eine Auszeit brauchen. Ab 2025 steht ein flexibles Budget von bis zu 3.539 Euro pro Jahr zur Verfügung. Wir beraten Sie gerne zu Ihren Ansprüchen.
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

export default Eckenheim;
