import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight, Phone, Clock, Heart, Shield, Users, Home, Stethoscope, CheckCircle, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import CTADropdownButton from "@/components/CTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generateFAQSchema } from "@/lib/faqSchema";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";
import { generateServiceSchema } from "@/lib/serviceSchema";

const frankfurtFaqs = [
  {
    question: "Welche Leistungen bietet ein Pflegedienst in Frankfurt an?",
    answer: "Ein Pflegedienst in Frankfurt bietet Grundpflege (SGB XI), Behandlungspflege (SGB V), Intensivpflege mit Heimbeatmung, 24-Stunden-Betreuung, Verhinderungspflege, Haushaltshilfe sowie Pflegeberatung. AVYTA deckt alle diese Leistungen ab und ist zusätzlich auf Demenz- und Diabetesversorgung spezialisiert."
  },
  {
    question: "Was kostet ein ambulanter Pflegedienst in Frankfurt?",
    answer: "Die Kosten richten sich nach dem individuellen Pflegebedarf und dem Pflegegrad. Behandlungspflege (SGB V) wird vollständig von der Krankenkasse übernommen. Grundpflege (SGB XI) wird je nach Pflegegrad bezuschusst – bei Pflegegrad 2 z. B. mit bis zu 761 € monatlich an Sachleistungen. Wir beraten Sie kostenlos zu Ihren Ansprüchen."
  },
  {
    question: "Wie beantrage ich einen Pflegegrad in Frankfurt?",
    answer: "Den Pflegegrad beantragen Sie bei Ihrer Pflegekasse – formlos per Telefon oder Schreiben. Anschließend erfolgt eine Begutachtung durch den MD (ehemals MDK). Unser Pflegedienst in Frankfurt unterstützt Sie kostenlos bei der Antragstellung, bereitet Sie auf den Begutachtungstermin vor und hilft bei einem Widerspruch."
  },
  {
    question: "In welchen Frankfurter Stadtteilen ist der Pflegedienst tätig?",
    answer: "Unser Pflegedienst versorgt Patienten in über 20 Frankfurter Stadtteilen – darunter Bockenheim, Sachsenhausen, Nordend, Bornheim, Westend, Ostend, Dornbusch, Eckenheim, Eschersheim, Rödelheim, Höchst, Niederrad, Griesheim und Seckbach. Zusätzlich betreuen wir Patienten in Bad Vilbel."
  },
  {
    question: "Was ist der Entlastungsbetrag und wie nutze ich ihn in Frankfurt?",
    answer: "Der Entlastungsbetrag beträgt 125 € monatlich und steht allen Pflegebedürftigen ab Pflegegrad 1 zu. Er kann für Haushaltshilfe, Betreuungsangebote oder Tages-/Nachtpflege eingesetzt werden. Nicht genutzte Beträge können bis zum 30. Juni des Folgejahres übertragen werden. Unser Pflegedienst in Frankfurt rechnet direkt mit Ihrer Pflegekasse ab."
  },
  {
    question: "Bietet der Pflegedienst Frankfurt auch Intensivpflege zu Hause an?",
    answer: "Ja, unser Pflegedienst in Frankfurt bietet außerklinische Intensivpflege mit Heimbeatmung an. Unsere spezialisierten Pflegefachkräfte betreuen Beatmungspatienten professionell und individuell in ihrem Zuhause – rund um die Uhr."
  },
  {
    question: "Wie kann ich Verhinderungspflege in Frankfurt nutzen?",
    answer: "Verhinderungspflege steht Ihnen ab Pflegegrad 2 zu, wenn Ihre reguläre Pflegeperson verhindert ist – z. B. durch Urlaub oder Krankheit. Jährlich stehen bis zu 1.612 € zur Verfügung. Unser Pflegedienst in Frankfurt übernimmt die Vertretung und rechnet direkt mit Ihrer Kasse ab."
  },
  {
    question: "Ist der Pflegedienst Frankfurt auch am Wochenende und nachts erreichbar?",
    answer: "Ja, unser Pflegedienst in Frankfurt ist an 365 Tagen im Jahr für Sie da – auch an Wochenenden und Feiertagen. Bei Notfällen erreichen Sie uns rund um die Uhr unter 069 153 914 05."
  }
];

const stadtteile = [
  { name: "Bockenheim", href: "/standorte/frankfurt/pflegedienst-bockenheim" },
  { name: "Bornheim", href: "/standorte/frankfurt/bornheim" },
  { name: "Dornbusch", href: "/standorte/frankfurt/dornbusch" },
  { name: "Eckenheim", href: "/standorte/frankfurt/eckenheim" },
  { name: "Eschersheim", href: "/standorte/frankfurt/eschersheim" },
  { name: "Ginnheim", href: "/standorte/frankfurt/pflegedienst-ginnheim" },
  { name: "Griesheim", href: "/standorte/frankfurt/griesheim" },
  { name: "Heddernheim", href: "/standorte/frankfurt/heddernheim" },
  { name: "Höchst", href: "/standorte/frankfurt/hoechst" },
  { name: "Nieder-Eschbach", href: "/standorte/frankfurt/nieder-eschbach" },
  { name: "Niederrad", href: "/standorte/frankfurt/niederrad" },
  { name: "Nordend", href: "/standorte/frankfurt/nordend" },
  { name: "Ostend", href: "/standorte/frankfurt/ostend" },
  { name: "Praunheim", href: "/standorte/frankfurt/pflegedienst-praunheim" },
  { name: "Preungesheim", href: "/standorte/frankfurt/preungesheim" },
  { name: "Rödelheim", href: "/standorte/frankfurt/pflegedienst-roedelheim" },
  { name: "Sachsenhausen", href: "/standorte/frankfurt/pflegedienst-frankfurt-sachsenhausen" },
  { name: "Seckbach", href: "/standorte/frankfurt/seckbach" },
  { name: "Westend", href: "/standorte/frankfurt/westend" },
];

const vorteile = [
  {
    icon: Home,
    title: "Alltag möglichst beibehalten",
    description: "Unser Ziel ist es, dass Pflegebedürftige möglichst viel Selbstständigkeit in Ihrem Leben beibehalten können."
  },
  {
    icon: Users,
    title: "Flexibilität & Individualität",
    description: "Unsere Dienste sind genauso vielseitig, wie die Personen, die sie in Anspruch nehmen. Somit richten wir uns individuell nach den Pflegebedürftigen."
  },
  {
    icon: Shield,
    title: "Gesicherte Pflegequalität",
    description: "Durch hochqualifizierte Mitarbeiter und einen permanenten Prozess zur Qualitätssicherung kann Ihnen unser Pflegedienst Frankfurt eine hohe Qualität garantieren."
  },
  {
    icon: Stethoscope,
    title: "Intensivpflege zu Hause",
    description: "Nach jedem Unfall oder plötzlicher Pflegebedürftigkeit geht es um eine optimale Versorgungsqualität. Wir bieten Intensivpflege mit Heimbeatmung direkt bei Ihnen zu Hause."
  },
  {
    icon: Heart,
    title: "Ganzheitliche Pflegedienste",
    description: "Unsere Pflegedienste beziehen ethnische, kulturelle, soziale und religiöse Bedürfnisse mit ein."
  }
];

const grundpflegeLeistungen = [
  "Körperpflege",
  "Unterstützung bei dem An- und Auskleiden",
  "Hilfe bei der Ausscheidung",
  "Hilfe beim Essen und Trinken",
  "Maßnahmen zur Mobilität",
  "Hauswirtschaftliche Hilfe",
  "Begleitung und Betreuung",
  "Sonstige Hilfestellungen"
];

const behandlungspflegeLeistungen = [
  "Herrichten und Verabreichen von Medikamenten",
  "Kompressionsstrümpfe an- und ausziehen",
  "Injektionen",
  "Infusionen",
  "Blutdruckkontrolle",
  "Blutzuckerkontrolle",
  "Wundversorgung",
  "Tracheostomaversorgung",
  "Versorgung von Anus Praeter sowie Urostoma",
  "Parenterale & enterale Ernährung"
];

const intensivpflegeLeistungen = [
  "Überwachung & Vitalisierung des Patienten",
  "Legen eines Blasenkatheters",
  "Endotracheales Absaugen",
  "Lagerungsbehandlungen und Mobilisation",
  "Intensivpflege mit Heimbeatmung"
];

const serviceleistungen = [
  "Hilfe bei Antragsstellungen",
  "Beratung in sozialen und pflegerischen Fragen",
  "Vermittlung von Friseur, Fußpflege, Hilfsmittel, etc.",
  "Abwicklung der Medikamentenbeschaffung",
  "und vieles mehr ..."
];

const Frankfurt = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Frankfurt ✅ 24/7 | MDK 1,6 | avyta.de</title>
        <meta name="description" content="Pflegedienst Frankfurt ✓ MDK 1,6 ✓ 5.0 Sterne ✓ 20+ Stadtteile ✓ Grund-, Behandlungs- & Intensivpflege ✓ Tel: 069 153 914 05" />
        <link rel="canonical" href="https://www.avyta.de/standorte/frankfurt" />
        <meta property="og:title" content="Pflegedienst Frankfurt ✅ 24/7 erreichbar | MDK Note 1,6" />
        <meta property="og:description" content="Pflegedienst Frankfurt in 20+ Stadtteilen ✓ MDK Bestnote 1,6 ✓ 5.0 Sterne Google ✓ Grund- & Behandlungspflege, Intensivpflege, 24h-Pflege" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/og-image.jpg" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Standorte", url: "https://www.avyta.de/standorte/frankfurt" },
          { name: "Frankfurt", url: "https://www.avyta.de/standorte/frankfurt" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(frankfurtFaqs)}</script>
        <script type="application/ld+json">{generateServiceSchema({
          serviceName: "Ambulanter Pflegedienst Frankfurt am Main",
          serviceDescription: "Ambulanter Pflegedienst in Frankfurt am Main: Grundpflege, Behandlungspflege, Intensivpflege und 24h-Pflege in über 20 Stadtteilen. Seit 2013, MDK-Note 1,6.",
          serviceType: "Ambulanter Pflegedienst",
          canonicalUrl: "https://www.avyta.de/standorte/frankfurt",
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
                  Pflegedienst Frankfurt – Ihr ambulanter Pflegedienst seit 2013
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  AVYTA ist Ihr erfahrener <strong>Pflegedienst in Frankfurt am Main</strong> mit MDK-Bestnote 1,6 und 5.0 Google-Sternen. 
                  Seit 2013 betreuen wir über 2.500 Patienten in mehr als 20 Stadtteilen – von der <Link to="/leistungen/grundpflege" className="text-primary hover:underline">Grundpflege</Link> bis 
                  zur <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" className="text-primary hover:underline">Intensivpflege</Link>. 
                  24/7 erreichbar unter <a href="tel:+496915391405" className="text-primary hover:underline font-semibold">069 153 914 05</a>.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>


          {/* Intro Section */}
          <section className="py-16 bg-card/50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    Als <strong>ambulanter Pflegedienst in Frankfurt</strong> sind wir darauf spezialisiert, auch in den schwierigsten Situationen gemeinsam mit Ihnen Lösungen zu erarbeiten. 
                    Falls Sie oder einer Ihrer Angehörigen pflegebedürftig wird, sind wir mit all unserer Erfahrung und Überzeugung voll für Sie da. 
                    Gemeinsam erstellen wir einen individuellen Pflegeplan, der zu Ihren Anforderungen passt und Sie in Ihrem täglichen Leben bestmöglich unterstützt.
                  </p>
                  <p className="mb-6">
                    Unser <strong>Pflegedienst Frankfurt</strong> bietet Ihnen das gesamte Spektrum ambulanter Pflege: 
                    von der <Link to="/leistungen/grundpflege" className="text-primary hover:underline">Grundpflege</Link> über 
                    die <Link to="/leistungen/behandlungspflege" className="text-primary hover:underline">Behandlungspflege</Link> bis 
                    zur <Link to="/leistungen/verhinderungspflege-frankfurt" className="text-primary hover:underline">Verhinderungspflege</Link> und 
                    der <Link to="/leistungen/haushaltshilfe" className="text-primary hover:underline">Haushaltshilfe</Link>. 
                    Zusätzlich sind wir auf <Link to="/leistungen/demenz-wg-frankfurt" className="text-primary hover:underline">Demenz-Betreuung</Link> und 
                    Diabetes-Versorgung spezialisiert.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Auch am Wochenende verfügbar</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">24h Notfall-Erreichbarkeit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Was macht ein ambulanter Pflegedienst */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
                  Ambulanter Pflegedienst Frankfurt – so unterstützen wir Sie
                </h2>
                <div className="bg-card rounded-2xl p-8 border border-border/50 mb-8">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    Das leistet ein ambulanter Pflegedienst
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Früher oder später kann es bei jeder Person passieren, dass sie auf Pflege angewiesen ist. In Folge von Krankheiten, durch Unfälle oder altersbedingt kann der Alltag nicht mehr allein bewältigt werden.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Sie können sich selbst um Ihre pflegebedürftigen Angehörigen kümmern oder aber diese Aufgabe an einen professionellen Pflegedienst delegieren. Der große Vorteil am ambulanten Pflegedienst: Die Versorgung findet im häuslichen Umfeld statt.
                  </p>
                  <p className="text-muted-foreground">
                    Somit bleiben Selbstständigkeit und die gewohnte Umgebung erhalten – die Lebensqualität der betroffenen Personen bleibt deutlich höher als bei stationärer Unterbringung.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    Pflegedienst Frankfurt – für wen ist ambulante Pflege geeignet?
                  </h3>
                  <p className="text-muted-foreground">
                    Ein ambulanter Pflegedienst in Frankfurt ist immer dann die richtige Wahl, wenn alltägliche Aufgaben nicht mehr allein bewältigt werden können – nach Unfällen, im Alter oder bei geistigen Einschränkungen. 
                    Gleichzeitig bleibt der Wunsch bestehen, in der vertrauten häuslichen Umgebung zu leben. Mit der <Link to="/leistungen/pflegeberatung-frankfurt" className="text-primary hover:underline">kostenlosen Pflegeberatung</Link> von AVYTA finden wir gemeinsam die passende Lösung.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Vorteile */}
          <section className="py-20 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Pflegedienst Frankfurt – warum AVYTA?
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                Es gibt viele Pflegedienste in Frankfurt am Main. Was spricht für AVYTA? MDK-Bestnote 1,6, 5.0 Google-Sterne und über 12 Jahre Erfahrung.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {vorteile.map((vorteil, index) => (
                  <Card key={index} variant="elevated" className="group hover:border-primary/30 transition-all">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <vorteil.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-foreground mb-2">
                        {vorteil.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {vorteil.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Leistungen */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-12 text-center">
                Leistungen unseres Pflegedienstes in Frankfurt
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Grundpflege */}
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      <Link to="/leistungen/grundpflege" className="hover:text-primary transition-colors">Grundpflege</Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Mit der Grundpflege sind die Maßnahmen zur Versorgung des Körpers gemeint. Auch Handlungen zur Vorsorge zählen zur Grundpflege.
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
                      <Stethoscope className="w-5 h-5 text-primary" />
                      <Link to="/leistungen/behandlungspflege" className="hover:text-primary transition-colors">Behandlungspflege</Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Unter der Behandlungspflege sind medizinische Maßnahmen zu verstehen, die vom Arzt angeordnet werden.
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

                {/* Intensivpflege */}
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" className="hover:text-primary transition-colors">Intensivpflege mit Heimbeatmung</Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Ein weiterer großer Bestandteil der Behandlungspflege ist die Intensivpflege mit Heimbeatmung.
                    </p>
                    <ul className="space-y-2">
                      {intensivpflegeLeistungen.map((leistung, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {leistung}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Serviceleistungen */}
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Serviceleistungen
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Diese können Sie außerhalb des Leistungskataloges der Pflegeversicherung auch ohne Pflegeeinstufung wählen.
                    </p>
                    <ul className="space-y-2">
                      {serviceleistungen.map((leistung, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {leistung}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Stadtteile */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Pflegedienst Frankfurt – unsere Stadtteile
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {stadtteile.map((stadtteil) => (
                  <Card key={stadtteil.name} variant="elevated" className="group cursor-pointer hover:border-primary/30">
                    <CardContent className="p-6">
                      <Link to={stadtteil.href} className="flex items-center justify-between">
                        <span className="font-display font-semibold text-foreground group-hover:text-primary">
                          {stadtteil.name}
                        </span>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Pflegedienst Frankfurt – jetzt kostenlos beraten lassen
                </h2>
                <p className="text-muted-foreground mb-8">
                  Der ambulante Pflegedienst ist eine attraktive Lösung, bei der Aktivität, Lebensqualität und Wohlfühlfaktor an erster Stelle stehen. 
                  Rufen Sie uns an und vereinbaren Sie einen unverbindlichen Termin – gerne bei Ihnen zu Hause.
                </p>
                <CTADropdownButton />
              </div>
            </div>
          </section>

          {/* FAQ Section - rendered from array */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
                  <HelpCircle className="w-8 h-8 text-primary" />
                  Häufige Fragen zum Pflegedienst Frankfurt
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {frankfurtFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="bg-card rounded-xl border border-border/50 px-6">
                      <AccordionTrigger className="text-left font-display font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        </main>
        <NewsletterSection />
        <Footer />
      </div>
    </>
  );
};

export default Frankfurt;
