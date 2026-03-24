import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Home, Users, FileCheck, Clock, Heart, Shield, Phone, MapPin, Star, Brain, Utensils, Music, Flower2 } from "lucide-react";
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
import TrustBadges from "@/components/TrustBadges";

const vorteile = [
  {
    title: "24/7 Betreuung in familiärer Atmosphäre",
    description: "In unserer Demenz WG in Frankfurt erhalten Bewohner eine ganztägige, professionelle Betreuung – in einer kleinen Gruppe, die ein echtes Zuhause-Gefühl vermittelt."
  },
  {
    title: "Speziell geschultes Pflegepersonal",
    description: "Unsere Pflegekräfte sind im Umgang mit Demenzerkrankungen speziell ausgebildet. Von Validation bis Biografiearbeit – wir kennen die Bedürfnisse demenzerkrankter Menschen."
  },
  {
    title: "Strukturierter Tagesablauf",
    description: "Routinen geben Sicherheit. In der Demenz WG Frankfurt sorgen feste Rituale, gemeinsame Mahlzeiten und aktivierende Beschäftigung für Orientierung und Wohlbefinden."
  },
  {
    title: "Individuelle Pflegekonzepte",
    description: "Jeder Bewohner unserer Demenz-Wohngemeinschaft erhält einen persönlichen Pflegeplan, abgestimmt auf den Krankheitsverlauf, die Biografie und individuelle Vorlieben."
  },
  {
    title: "Entlastung für Angehörige",
    description: "Die Demenz WG in Frankfurt und Bad Vilbel bietet Familien die Gewissheit, dass ihre Liebsten rund um die Uhr bestens versorgt sind – ohne die Anonymität eines Pflegeheims."
  },
  {
    title: "Gemeinschaft statt Isolation",
    description: "Gemeinsames Kochen, Spaziergänge im Garten, Musik und kreative Aktivitäten – die Wohngemeinschaft fördert soziale Teilhabe und beugt Vereinsamung vor."
  },
];

const angebote = [
  { icon: Brain, title: "Demenzgerechte Betreuung", desc: "Validation, Erinnerungspflege und sensorische Stimulation" },
  { icon: Utensils, title: "Gemeinsame Mahlzeiten", desc: "Frisch zubereitetes Essen in gemütlicher Runde" },
  { icon: Music, title: "Aktivierung & Beschäftigung", desc: "Musik, Bewegung, Gedächtnistraining und kreative Angebote" },
  { icon: Flower2, title: "Wohnliches Ambiente", desc: "Barrierefreie, liebevoll gestaltete Räumlichkeiten" },
  { icon: Shield, title: "Medizinische Versorgung", desc: "Behandlungspflege, Medikamentenmanagement und Arztkoordination" },
  { icon: Heart, title: "Angehörigenarbeit", desc: "Regelmäßige Beratung, Austausch und Einbindung der Familien" },
];

const faqs = [
  {
    question: "Was kostet ein Platz in einer Demenz WG in Frankfurt?",
    answer: "Die Kosten für eine Demenz WG in Frankfurt setzen sich aus Miete, Betreuungspauschale und individuellen Pflegeleistungen zusammen. Bei vorliegendem Pflegegrad übernimmt die Pflegekasse einen Großteil der Kosten. Zusätzlich gibt es den Wohngruppenzuschlag von 224 € monatlich. Wir beraten Sie kostenlos und unverbindlich zu allen Finanzierungsmöglichkeiten Ihrer Demenz-Wohngemeinschaft."
  },
  {
    question: "Welcher Pflegegrad ist für eine Demenz WG erforderlich?",
    answer: "Für den Einzug in eine Demenz WG in Frankfurt oder Bad Vilbel ist in der Regel ein Pflegegrad von mindestens 2 erforderlich. Auch mit Pflegegrad 1 kann ein Einzug möglich sein, wenn eine Demenzdiagnose vorliegt. Wir unterstützen Sie bei der Beantragung und Höherstufung des Pflegegrads – kostenfrei und mit langjähriger Erfahrung."
  },
  {
    question: "Wie unterscheidet sich eine Demenz WG von einem Pflegeheim?",
    answer: "Eine Demenz WG in Frankfurt bietet eine familiäre Wohnform mit maximal 8–12 Bewohnern, individuellem Tagesablauf und selbstbestimmtem Leben. Im Gegensatz zum Pflegeheim haben Angehörige Mitspracherecht bei Personalauswahl und Alltagsgestaltung. Die Demenz-Wohngemeinschaft verbindet professionelle Pflege mit dem Gefühl eines echten Zuhauses."
  },
  {
    question: "Gibt es Demenz-Wohngemeinschaften in Bad Vilbel?",
    answer: "Ja, AVYTA plant und betreut Demenz WG Konzepte sowohl in Frankfurt am Main als auch in Bad Vilbel. Wir beraten Sie zu bestehenden Wohngruppen und unterstützen beim Aufbau neuer Demenz-Wohngemeinschaften in der Region Frankfurt und Bad Vilbel. Kontaktieren Sie uns für eine persönliche Beratung."
  },
  {
    question: "Wie läuft der Alltag in einer Demenz WG Frankfurt ab?",
    answer: "Der Tagesablauf in unserer Demenz WG Frankfurt folgt festen Strukturen, die Sicherheit geben: gemeinsames Frühstück, aktivierende Beschäftigung wie Gedächtnistraining oder Spaziergänge, gemeinsames Kochen und individuelle Ruhephasen. Jeder Tag wird an die Bedürfnisse und die Tagesform der Bewohner angepasst – professionell betreut und liebevoll begleitet."
  },
  {
    question: "Wer übernimmt die Pflege in der Demenz-Wohngemeinschaft?",
    answer: "In der Demenz WG Frankfurt übernehmen examinierte Pflegefachkräfte und speziell geschulte Betreuungskräfte die tägliche Versorgung. Unser Personal ist in Demenzpflege fortgebildet und verfügt über langjährige Erfahrung. AVYTA als ambulanter Pflegedienst stellt die medizinische Versorgung, Behandlungspflege und Betreuung sicher – 24 Stunden am Tag, 7 Tage die Woche."
  },
];

const DemenzWG = () => {
  return (
    <>
      <Helmet>
        <title>Demenz WG Frankfurt & Bad Vilbel ✅ Wohngemeinschaft für Demenz | avyta.de</title>
        <meta name="description" content="Demenz WG in Frankfurt & Bad Vilbel ✓ 24/7 Betreuung ✓ Familiäre Atmosphäre ✓ Speziell geschultes Personal ✓ Kostenübernahme durch Pflegekasse. Jetzt kostenlos beraten lassen!" />
        <meta name="keywords" content="Demenz WG Frankfurt, Demenz Wohngemeinschaft Frankfurt, Demenz WG Bad Vilbel, Demenz-WG Frankfurt am Main, betreute Wohngemeinschaft Demenz, ambulant betreute Wohngruppe Demenz Frankfurt" />
        <link rel="canonical" href="https://www.avyta.de/leistungen/demenz-wg-frankfurt" />
        <meta property="og:title" content="Demenz WG Frankfurt & Bad Vilbel – Wohngemeinschaft für Demenz | AVYTA" />
        <meta property="og:description" content="Professionelle Demenz WG in Frankfurt & Bad Vilbel. 24/7 Betreuung in familiärer Atmosphäre. Speziell geschultes Personal. Jetzt kostenlos beraten lassen!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Leistungen", url: "https://www.avyta.de/leistungen" },
          { name: "Demenz WG Frankfurt", url: "https://www.avyta.de/leistungen/demenz-wg-frankfurt" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(faqs)}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Demenz WG Frankfurt & Bad Vilbel",
          "provider": {
            "@type": "LocalBusiness",
            "name": "AVYTA Pflegegesellschaft mbH",
            "url": "https://www.avyta.de",
            "telephone": "+496915391405",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Allerheiligentor 2-4",
              "addressLocality": "Frankfurt am Main",
              "postalCode": "60311",
              "addressCountry": "DE"
            }
          },
          "areaServed": [
            { "@type": "City", "name": "Frankfurt am Main" },
            { "@type": "City", "name": "Bad Vilbel" }
          ],
          "description": "Ambulant betreute Demenz-Wohngemeinschaft in Frankfurt am Main und Bad Vilbel. Professionelle 24/7 Betreuung in familiärer Atmosphäre.",
          "serviceType": "Demenz-Wohngemeinschaft"
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
                  <Home className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 md:mb-6">
                  Demenz WG in Frankfurt & Bad Vilbel
                </h1>
                <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
                  Ambulant betreute Wohngemeinschaft für Menschen mit Demenz – professionelle Pflege in familiärer Atmosphäre. 
                  24/7 Betreuung durch speziell geschultes Personal von AVYTA.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          {/* Trust Badges */}
          <TrustBadges />

          {/* Einleitung - SEO Textblock 1 */}
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 md:mb-6">
                  Was ist eine Demenz WG in Frankfurt?
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  Eine <strong>Demenz WG in Frankfurt</strong> ist eine ambulant betreute Wohngemeinschaft, in der Menschen mit Demenz 
                  gemeinsam in einer familiären Umgebung leben. Im Gegensatz zum klassischen Pflegeheim bietet die 
                  <strong> Demenz-Wohngemeinschaft Frankfurt</strong> eine selbstbestimmte Wohnform mit individueller Betreuung. 
                  Kleine Gruppen von 8 bis 12 Bewohnern teilen sich eine barrierefreie Wohnung, in der professionelle 
                  Pflegekräfte rund um die Uhr für Sicherheit und Wohlbefinden sorgen.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  Als erfahrener ambulanter Pflegedienst in Frankfurt am Main mit über 12 Jahren Expertise unterstützt 
                  AVYTA Demenz-Wohngemeinschaften in Frankfurt und Bad Vilbel mit qualifiziertem Personal. Unser Team 
                  ist speziell für die Betreuung demenzerkrankter Menschen geschult und bietet von der Grundpflege bis 
                  zur Behandlungspflege alle Leistungen aus einer Hand.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Die <strong>Demenz WG Bad Vilbel</strong> und Frankfurt bietet eine echte Alternative für Familien, die eine würdevolle 
                  Betreuungsform suchen – ohne die Anonymität großer Einrichtungen. Angehörige sind aktiv in die 
                  Gestaltung des Alltags eingebunden und haben Mitspracherecht bei wichtigen Entscheidungen.
                </p>
              </div>
            </div>
          </section>

          {/* Vorteile */}
          <section className="py-12 md:py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                  Vorteile einer Demenz WG in Frankfurt am Main
                </h2>
                <p className="text-base text-muted-foreground mb-8">
                  Eine betreute Wohngemeinschaft für Demenz in Frankfurt verbindet professionelle Pflege mit einem 
                  wohnlichen Umfeld. Diese Vorteile bietet die Demenz WG Frankfurt:
                </p>
                <div className="space-y-3 md:space-y-4">
                  {vorteile.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-background rounded-xl border border-border/50">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-sm md:text-base text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Unsere Leistungen in der Demenz WG */}
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                    Unsere Leistungen in der Demenz-Wohngemeinschaft
                  </h2>
                  <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                    AVYTA bietet als ambulanter Pflegedienst alle pflegerischen und betreuerischen Leistungen 
                    für Ihre Demenz WG in Frankfurt und Bad Vilbel.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {angebote.map((item, index) => (
                    <Card key={index} variant="elevated">
                      <CardContent className="p-5 md:p-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Kostenübernahme & Finanzierung */}
          <section className="py-12 md:py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start max-w-5xl mx-auto">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 md:mb-6">
                    Kosten & Finanzierung der Demenz WG Frankfurt
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    Die Kosten einer <strong>Demenz WG in Frankfurt</strong> setzen sich aus verschiedenen Bausteinen zusammen: 
                    Miete für den Wohnraum, eine Betreuungspauschale sowie individuelle Pflegeleistungen je nach 
                    Pflegegrad. Die gute Nachricht: Ein Großteil der Kosten wird von der Pflegekasse übernommen.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                    Bewohner einer ambulant betreuten Demenz-Wohngemeinschaft in Frankfurt haben Anspruch auf den 
                    <strong> Wohngruppenzuschlag von 224 € monatlich</strong> (Stand 2026). Zusätzlich stehen je nach Pflegegrad 
                    Sachleistungen, Pflegegeld und der Entlastungsbetrag von 131 € monatlich zur Verfügung. 
                    Wir übernehmen die komplette Antragstellung für Sie.
                  </p>
                  <CTADropdownButton />
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                    Finanzielle Unterstützung im Überblick
                  </h3>
                  {[
                    { label: "Pflegesachleistungen", desc: "Bis zu 2.299 €/Monat (PG 5)", icon: FileCheck },
                    { label: "Wohngruppenzuschlag", desc: "224 €/Monat zusätzlich", icon: Home },
                    { label: "Entlastungsbetrag", desc: "131 €/Monat für Betreuung", icon: Heart },
                    { label: "Kostenlose Pflegeberatung", desc: "Wir helfen bei der Antragstellung", icon: Users },
                  ].map((item, i) => (
                    <Card key={i} variant="elevated">
                      <CardContent className="p-4 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">{item.label}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Standorte */}
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 md:mb-6">
                  Demenz WG in Frankfurt und Bad Vilbel – Unsere Standorte
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  AVYTA betreut Demenz-Wohngemeinschaften in Frankfurt am Main und Bad Vilbel. Unsere ambulanten 
                  Pflegeteams versorgen die Bewohner direkt vor Ort – professionell, zuverlässig und mit Herz. 
                  Ob <strong>Demenz WG Frankfurt</strong> Innenstadt, in den Stadtteilen oder <strong>Demenz WG Bad Vilbel</strong> – 
                  wir sind für Sie da.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">Frankfurt am Main</h3>
                          <p className="text-sm text-muted-foreground">Allerheiligentor 2-4, 60311</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Demenz WG Betreuung in allen Frankfurter Stadtteilen: Bockenheim, Bornheim, Sachsenhausen, 
                        Nordend, Westend, Ostend, Niederrad und weiteren.
                      </p>
                      <Link to="/standorte/frankfurt" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                        Mehr zu Frankfurt <ArrowRight className="w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">Bad Vilbel</h3>
                          <p className="text-sm text-muted-foreground">Standort Bad Vilbel</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Auch in Bad Vilbel unterstützen wir Demenz-Wohngemeinschaften mit unserem erfahrenen 
                        Pflegeteam – direkt in Ihrer Nähe.
                      </p>
                      <Link to="/standorte/bad-vilbel" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                        Mehr zu Bad Vilbel <ArrowRight className="w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Warum AVYTA */}
          <section className="py-12 md:py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 md:mb-6">
                  Warum AVYTA als Pflegedienst für Ihre Demenz WG?
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  Als inhabergeführter ambulanter Pflegedienst in Frankfurt am Main mit über 12 Jahren Erfahrung 
                  und einer Google-Bewertung von 5,0 Sternen bieten wir die ideale Kombination aus Professionalität 
                  und persönlicher Nähe für Ihre Demenz-Wohngemeinschaft.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { val: "12+", label: "Jahre Erfahrung", icon: Shield },
                    { val: "5,0", label: "Google Bewertung", icon: Star },
                    { val: "24/7", label: "Erreichbarkeit", icon: Clock },
                    { val: "20+", label: "Pflegekräfte", icon: Users },
                  ].map((s, i) => (
                    <div key={i} className="text-center p-5 bg-background rounded-xl border border-border/50">
                      <s.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">{s.val}</div>
                      <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3 text-center">
                  Häufige Fragen zur Demenz WG in Frankfurt
                </h2>
                <p className="text-base text-muted-foreground text-center mb-8">
                  Alles Wichtige zur Demenz-Wohngemeinschaft in Frankfurt und Bad Vilbel auf einen Blick.
                </p>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="bg-background border border-border/50 rounded-xl px-5">
                      <AccordionTrigger className="text-left text-sm md:text-base font-semibold text-foreground py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 md:py-20 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Kostenlose Beratung zur Demenz WG in Frankfurt
                </h2>
                <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                  Sie suchen eine <strong>Demenz WG in Frankfurt</strong> oder <strong>Bad Vilbel</strong>? 
                  Wir beraten Sie kostenlos und unverbindlich zu allen Möglichkeiten der ambulant betreuten 
                  Demenz-Wohngemeinschaft. Rufen Sie uns an oder nutzen Sie unser Kontaktformular.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          {/* Interne Verlinkung */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-lg font-display font-semibold text-foreground mb-6 text-center">
                  Weitere Leistungen von AVYTA
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { name: "Grundpflege", href: "/leistungen/grundpflege" },
                    { name: "Behandlungspflege", href: "/leistungen/behandlungspflege" },
                    { name: "24-Stunden-Pflege", href: "/leistungen/24-stunden-pflege" },
                    { name: "Pflegeberatung", href: "/leistungen/pflegeberatung-frankfurt" },
                    { name: "Intensivpflege", href: "/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" },
                    { name: "Verhinderungspflege", href: "/leistungen/verhinderungspflege-frankfurt" },
                    { name: "Haushaltshilfe", href: "/leistungen/haushaltshilfe" },
                    { name: "Alle Leistungen", href: "/leistungen" },
                  ].map((link, i) => (
                    <Link key={i} to={link.href} className="text-sm text-primary hover:underline flex items-center gap-1 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                      <ArrowRight className="w-3 h-3 flex-shrink-0" />
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DemenzWG;
