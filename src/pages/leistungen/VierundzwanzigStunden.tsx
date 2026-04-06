import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Clock, Users, FileCheck, Heart } from "lucide-react";
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
import TrustBadges from "@/components/TrustBadges";

const alltagshilfe = [
  "Hilfe beim Ausfüllen von Anträgen",
  "Hilfe und Gesellschaft bei Spaziergängen",
  "Hilfe bei der Besorgung von Medikamenten",
  "Hilfe bei Services im Alltag wie z.B. Friseurbesuchen",
  "uvm",
];

const grundpflege = [
  "Unterstützung beim Trinken und Essen",
  "Unterstützung bei der Körperpflege und bei Ausscheidungen",
  "Unterstützung bei der Mobilität",
  "Unterstützung beim An- und Auskleiden",
  "Unterstützung im Haushalt",
  "uvm",
];

const behandlungspflege = [
  "Kontrolle von Blutdruck und Blutzucker",
  "Perenterale und enterale Ernährung",
  "Wechseln bzw. An- und Ausziehen von Kompressionsstrümpfen",
  "Bereitstellen und Verabreichen von Medikamenten",
  "Injektionen und Infusionen",
  "Tracheostomaversorgung",
  "Versorgung von Anus Praeter und Urostoma",
  "uvm",
];

const intensivpflege = [
  "Lagerungsbehandlung",
  "Mobilisation",
  "Überwachung des Patienten",
  "Vitalisierung des Patienten",
  "Legen eines Blasenkatheters",
  "Endotracheales Absaugen",
  "Heimbeatmung",
  "uvm",
];

const faqs = [
  {
    question: "Was kostet eine 24 Stunden Pflege in Frankfurt?",
    answer: "Jeder Mensch ist individuell und genau so individuell sind auch unsere Pflegeangebote. Wir stellen Ihnen stets ein eigens auf Sie zugeschnittenes Pflegepaket vor und machen Ihnen dazu einen Kostenvoranschlag, mit dem Sie bei Ihrer Kranken- oder Pflegekasse einen Antrag auf Kostenübernahme stellen können – dort erfolgt dann auch direkt die Abrechnung mit uns."
  },
  {
    question: "Was zeichnet eine gute 24 Stunden Pflege in Frankfurt aus?",
    answer: "Eine gute 24 Stunden Pflege in Frankfurt zeichnet sich durch Verlässlichkeit, Vertrauen, Kompetenz und Einfühlsamkeit aus. Mit über 12 Jahren Erfahrung und mehr als 2.500 bereits betreuten Patienten können wir von Avyta Ihnen genau das bieten. Unsere MDK-Note von 1,6 bestätigt unsere hohe Pflegequalität."
  },
  {
    question: "Was gehört zum Aufgabengebiet der 24 Stunden Pflege in Frankfurt?",
    answer: "Dank unserer langjährigen Erfahrung stehen wir Ihnen bei allen Aufgaben rund um die Pflege zur Seite. Dazu gehören kleine Hilfen im Alltag, die Grund- und Behandlungspflege sowie die Intensivpflege mit komplexen medizinischen Leistungen oder die Heimbeatmung."
  },
  {
    question: "Wie wird die 24 Stunden Pflege in Frankfurt finanziert?",
    answer: "Die Finanzierung der 24 Stunden Pflege in Frankfurt erfolgt über verschiedene Bausteine: Pflegesachleistungen (bis 2.299 €/Monat bei PG 5), Pflegegeld, Verhinderungspflege und den Entlastungsbetrag. Bei medizinischen Leistungen übernimmt die Krankenkasse die Kosten. AVYTA berät Sie kostenlos zur optimalen Kombinationsleistung."
  },
  {
    question: "Kann ich zwischen 24h-Pflege und Pflegeheim wählen?",
    answer: "Ja, die 24 Stunden Pflege in Frankfurt ist eine echte Alternative zum Pflegeheim. Viele Patienten bevorzugen die vertraute Umgebung ihres Zuhauses. Mit AVYTA erhalten Sie professionelle Rund-um-die-Uhr-Versorgung – oft zu vergleichbaren Kosten wie ein Pflegeheimplatz, aber mit deutlich mehr Selbstbestimmung."
  },
  {
    question: "Welche Pflegekräfte kommen bei der 24h-Pflege in Frankfurt zum Einsatz?",
    answer: "Bei der 24 Stunden Pflege in Frankfurt setzt AVYTA examinierte Pflegefachkräfte, qualifizierte Pflegehelfer und Betreuungskräfte ein – je nach individuellem Bedarf. Unser mehrsprachiges Team (Deutsch, Englisch, Bosnisch, Kroatisch, Serbisch, Polnisch) kann auch Patienten betreuen, die kein oder wenig Deutsch sprechen."
  },
];

const VierundzwanzigStunden = () => {
  return (
    <>
      <Helmet>
        <title>24 Stunden Pflege Frankfurt ✓ Rund um die Uhr | avyta.de</title>
        <meta name="description" content="Mit einer 24 Stunden Pflege in Frankfurt sind Sie rund um die Uhr versorgt. ✅ Avyta hilft Ihnen auch in schweren Fällen mit Herz und Erfahrung" />
        <meta name="keywords" content="24 Stunden Pflege Frankfurt, Rund um die Uhr Pflege, Häusliche Pflege Frankfurt" />
        <link rel="canonical" href="https://www.avyta.de/leistungen/24-stunden-pflege" />
        <meta property="og:title" content="24 Stunden Pflege Frankfurt ✓ Rund um die Uhr | avyta.de" />
        <meta property="og:description" content="Mit einer 24 Stunden Pflege in Frankfurt sind Sie rund um die Uhr versorgt. Avyta hilft Ihnen auch in schweren Fällen mit Herz und Erfahrung." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Leistungen", url: "https://www.avyta.de/leistungen" },
          { name: "24 Stunden Pflege", url: "https://www.avyta.de/leistungen/24-stunden-pflege" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(faqs)}</script>
        <script type="application/ld+json">{generateServiceSchema({
          serviceName: "24 Stunden Pflege Frankfurt am Main",
          serviceDescription: "Professionelle 24 Stunden Pflege in Frankfurt: Rund-um-die-Uhr-Versorgung mit Grundpflege, Behandlungspflege und Intensivpflege durch erfahrene Pflegekräfte.",
          serviceType: "24-Stunden-Pflege",
          canonicalUrl: "https://www.avyta.de/leistungen/24-stunden-pflege",
        })}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-12 md:py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-14 h-14 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 md:mb-6">
                  24 Stunden Pflege in Frankfurt mit Avyta
                </h1>
                <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                  Eine <strong>Pflegebedürftigkeit</strong> kann jeden treffen. Fortschreitendes Alter, geistige oder körperliche Einschränkungen als auch ein schwerer Unfall können dazu führen, dass die <strong>pflegerische Betreuung</strong> nötig wird. Gerade in schweren Fällen ist es beruhigend, immer Hilfe an Ihrer Seite zu wissen – die <strong>24 Stunden Pflege in Frankfurt</strong> von <Link to="/ueber-uns" className="text-primary hover:underline font-medium">Avyta</Link> leistet genau das für Sie. Wir sind <strong>rund um die Uhr</strong> für Sie ansprechbar und können Ihnen mit viel Herz und Kompetenz bei <strong>allen Pflegeleistungen</strong> unter die Arme greifen.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          {/* Trust Badges */}
          <TrustBadges />

          {/* Intro Content */}
          <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                  Mit mehr als <strong>12 Jahren Erfahrung</strong> im Pflegebereich bieten wir sowohl das fachliche Know-how als auch die Menschlichkeit, die in einer guten Pflege wichtig sind. Sprechen Sie gern mit uns über Ihre Vorstellungen zur <strong>24 Stunden Pflege</strong> in Frankfurt.
                </p>
              </div>
            </div>
          </section>

          {/* Leistungen */}
          <section className="py-12 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 md:mb-6">
                  Leistungen in der 24 Stunden Pflege in Frankfurt
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
                  Als Anbieter für die <strong>24 Stunden Pflege in Frankfurt</strong> ist es uns bei Avyta wichtig, dass wir Ihnen ein <Link to="/leistungen/pflegeberatung-frankfurt" className="text-primary hover:underline font-medium">individuell abgestimmtes Leistungspaket</Link> bieten, welches sowohl Ihre Bedürfnisse hinsichtlich der Pflege berücksichtigt, als auch Ihren <em><strong>kulturellen</strong></em>, <em><strong>sozialen</strong></em> und <em><strong>religiösen</strong></em> Hintergrund. Wir setzen ganz auf unser Motto der Pflege „von Menschen, für Menschen" und setzen Sie oder Ihre Angehörigen in den Mittelpunkt unserer Arbeit. Eine gute <strong>24 Stunden Pflege</strong> in Frankfurt bedeutet auch, dass wir von einfachen Hilfstätigkeiten bis hin zu komplexen <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" className="text-primary hover:underline font-medium">Leistungen der Intensivpflege</Link> alle Bereiche abdecken können. So übernehmen wir die Alltagshilfe, die <Link to="/leistungen/grundpflege" className="text-primary hover:underline font-medium">Grundpflege</Link>, die <Link to="/leistungen/behandlungspflege" className="text-primary hover:underline font-medium">Behandlungspflege</Link> und die <strong>Intensivpflege</strong> je nach Bedarf.
                </p>

                {/* Alltagshilfe */}
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3 md:mb-4">
                    Im Bereich der einfachen Alltagshilfe können wir für Sie die folgenden Leistungen übernehmen:
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {alltagshilfe.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 md:p-3 bg-background rounded-lg border border-border/50">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grundpflege */}
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3 md:mb-4">
                    In der Grundpflege können unsere Leistungen für Sie so aussehen:
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {grundpflege.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 md:p-3 bg-background rounded-lg border border-border/50">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Behandlungspflege */}
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3 md:mb-4">
                    Diese Aufgaben können in der Behandlungspflege abgedeckt werden:
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {behandlungspflege.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 md:p-3 bg-background rounded-lg border border-border/50">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Intensivpflege */}
                <div>
                  <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3 md:mb-4">
                    In der Intensivpflege decken wir unter anderem folgende Bereiche ab:
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {intensivpflege.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 md:p-3 bg-background rounded-lg border border-border/50">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mitarbeiter */}
          <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 md:mb-6">
                    24 Stunden Pflege in Frankfurt: Unsere Mitarbeiter sind für Sie da
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                    Über die <strong>Pflege</strong> wird gerade in letzter Zeit viel gesprochen – der demografische Wandel sorgt für immer mehr <strong>pflegebedürftige Patienten</strong> und immer weniger Arbeitskräfte in dem Bereich. Wir können mit Stolz sagen, dass wir mit einem <strong>starken Team</strong> aufgestellt sind, um Ihre <strong>24 Stunden Pflege in Frankfurt</strong> ohne Probleme abdecken zu können.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                    <strong>Unser Team</strong> besteht aus <em><strong>hochmotivierten</strong></em> und <em><strong>einfühlsamen</strong></em> <Link to="/karriere" className="text-primary hover:underline font-medium">Pflegefachkräften</Link>, <Link to="/karriere/pflegehelfer-frankfurt" className="text-primary hover:underline font-medium">Pflegehelfern</Link> und Haushaltshilfskräften, die Sie und Ihre Angehörigen unterstützen. Da viele unsere Mitarbeiter <strong>mehrsprachig</strong> sind, können wir auch Patienten betreuen, die kein oder nur wenig Deutsch sprechen. Vertrauen Sie uns in der <strong>24 Stunden Pflege</strong> in Frankfurt – gerne besprechen wir mit Ihnen ein <strong>individualisiertes Leistungspaket</strong> und klären <Link to="/kontakt" className="text-primary hover:underline font-medium">Ihre Fragen</Link>.
                  </p>
                  <p className="text-sm md:text-base text-foreground font-medium mb-4 md:mb-6">
                    Wir stehen Ihnen <strong>gerne zur Verfügung</strong> Rufen Sie uns an vereinbaren einen unverbindlichen Termin - <strong>gerne bei Ihnen zu Hause</strong>.
                  </p>
                  <CTADropdownButton />
                </div>

                <div className="space-y-4 md:space-y-6 mt-6 lg:mt-0">
                  <Card variant="elevated">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center">
                          <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">
                          Starkes Team
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Unser Team besteht aus hochmotivierten und einfühlsamen 
                        Pflegefachkräften, Pflegehelfern und Haushaltshilfskräften.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center">
                          <FileCheck className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">
                          Über 12 Jahre Erfahrung
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Mit mehr als 12 Jahren Erfahrung im Pflegebereich bieten wir 
                        sowohl das fachliche Know-how als auch die Menschlichkeit.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center">
                          <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">
                          Mehrsprachiges Team
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Viele unserer Mitarbeiter sind mehrsprachig und können auch 
                        Patienten betreuen, die kein oder nur wenig Deutsch sprechen.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 md:mb-8 text-center">
                  Häufige Fragen
                </h2>
                <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
                  <AccordionItem 
                    value="item-0"
                    className="bg-background rounded-xl border border-border/50 px-4 md:px-6"
                  >
                    <AccordionTrigger className="text-left text-sm md:text-base font-medium text-foreground hover:text-primary py-3 md:py-4">
                      Was kostet eine 24 Stunden Pflege in Frankfurt?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground pb-3 md:pb-4">
                      Jeder Mensch ist <strong>individuell</strong> und genau so <strong>individuell</strong> sind auch unsere <strong>Pflegeangebote</strong>. Wir stellen Ihnen stets ein eigens auf Sie <strong>zugeschnittenes Pflegepaket</strong> vor und machen Ihnen dazu einen <strong>Kostenvoranschlag</strong>, mit dem Sie bei Ihrer <strong>Kranken- oder Pflegekasse</strong> einen Antrag auf <strong>Kostenübernahme</strong> stellen können – dort erfolgt dann auch direkt die <strong>Abrechnung</strong> mit uns.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem 
                    value="item-1"
                    className="bg-background rounded-xl border border-border/50 px-4 md:px-6"
                  >
                    <AccordionTrigger className="text-left text-sm md:text-base font-medium text-foreground hover:text-primary py-3 md:py-4">
                      Was zeichnet eine gute 24 Stunden Pflege in Frankfurt aus?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground pb-3 md:pb-4">
                      Eine gute 24 Stunden Pflege in Frankfurt zeichnet sich immer durch <strong>Verlässlichkeit</strong>, <strong>Vertrauen</strong>, <strong>Kompetenz</strong> und <strong>Einfühlsamkeit</strong> aus. Mit mehr als <strong>10 Jahren Erfahrung</strong> in der <strong>Pflege</strong> können wir von <strong>Avyta</strong> Ihnen genau das bieten. Von einfachen <strong>Hilfsleistungen bis hin zur Intensivpflege</strong> haben wir das nötige <strong>Know-how</strong>, um Ihnen <strong>rund um die Uhr</strong> zur Seite zu stehen.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem 
                    value="item-2"
                    className="bg-background rounded-xl border border-border/50 px-4 md:px-6"
                  >
                    <AccordionTrigger className="text-left text-sm md:text-base font-medium text-foreground hover:text-primary py-3 md:py-4">
                      Was gehört zum Aufgabengebiet der 24 Stunden Pflege in Frankfurt?
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-base text-muted-foreground pb-3 md:pb-4">
                      Dank unserer <strong>langjährigen Erfahrung</strong> stehen wir Ihnen bei allen Aufgaben rund um die Pflege zur Seite. Dazu gehören beispielsweise kleine <em><strong>Hilfen im Alltag</strong></em>, die <strong>Grund- und Behandlungspflege</strong> sowie die <strong>Intensivpflege</strong> mit komplexen medizinischen Leistungen oder die Heimbeatmung.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* Other Services */}
          <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 md:mb-8 text-center">
                Weitere Leistungen
              </h2>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/behandlungspflege">Behandlungspflege</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/grundpflege">Grundpflege</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main">Intensivpflege</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/haushaltshilfe">Haushaltshilfe</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/pflegeberatung-frankfurt">Pflegeberatung</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/verhinderungspflege-frankfurt">Verhinderungspflege</Link>
                </Button>
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

export default VierundzwanzigStunden;
