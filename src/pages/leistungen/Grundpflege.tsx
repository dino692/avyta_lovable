import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Home, Users, FileCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import CTADropdownButton from "@/components/CTADropdownButton";
import TrustBadges from "@/components/TrustBadges";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generateFAQSchema } from "@/lib/faqSchema";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";
import { generateServiceSchema } from "@/lib/serviceSchema";

const leistungen = [
  {
    title: "Hilfe bei der Körperpflege",
    description: "Wir unterstützen beim An- und Auskleiden sowie bei der täglichen Hygiene."
  },
  {
    title: "Haushaltshilfe",
    description: "Während Ihrer Abwesenheit kümmern wir uns um das Kochen, die Wäschepflege und die Reinigung der Wohnung. Auch kleine Einkäufe übernehmen wir, wenn sie nicht mehr eigenständig erledigt werden können."
  },
  {
    title: "Unterstützung bei der Mobilität",
    description: "Wir sind zur Stelle, um beim Aufstehen aus dem Bett, beim Treppensteigen oder während kurzer Spaziergänge zu helfen, damit Ihre Angehörigen sicher und selbstbestimmt bleiben können."
  },
  {
    title: "Medikamentenmanagement",
    description: "Wir stellen sicher, dass Ihre Angehörigen pünktlich und in der richtigen Dosierung ihre benötigten Medikamente einnehmen."
  },
  {
    title: "Soziale Betreuung",
    description: "Wir bieten nicht nur Unterstützung im Alltag, sondern auch eine vertraute Gesellschaft für Ihre Angehörigen."
  },
];

const faqs = [
  {
    question: "Was kostet Grundpflege in Frankfurt am Main?",
    answer: "Die Kosten für Grundpflege in Frankfurt werden bei anerkanntem Pflegegrad von der Pflegekasse übernommen. Je nach Pflegegrad stehen Ihnen Pflegesachleistungen von 761 € (PG 2) bis 2.299 € (PG 5) monatlich zu. AVYTA rechnet direkt mit Ihrer Pflegekasse ab – für Sie entstehen keine Vorleistungen."
  },
  {
    question: "Ab welchem Pflegegrad bekomme ich Grundpflege in Frankfurt?",
    answer: "Grundpflege in Frankfurt können Sie ab Pflegegrad 2 als Pflegesachleistung in Anspruch nehmen. Bei Pflegegrad 1 steht Ihnen der Entlastungsbetrag von 131 € monatlich zur Verfügung, mit dem ebenfalls pflegerische Unterstützung finanziert werden kann. Wir beraten Sie kostenlos zu Ihren Ansprüchen."
  },
  {
    question: "Wie wird die Grundpflege in Frankfurt finanziert?",
    answer: "Die Leistungen der Grundpflege werden über die Pflegekasse als Pflegesachleistungen abgerechnet. Die finanzielle Unterstützung hängt vom jeweiligen Pflegegrad ab. Sie können auch Pflegegeld und Sachleistungen kombinieren (Kombinationsleistung). Wir unterstützen Sie gerne bei der Antragstellung."
  },
  {
    question: "Welche Qualifikationen haben die Pflegekräfte für die Grundpflege?",
    answer: "Unser Team bei AVYTA besteht aus examinierten Pflegefachkräften und qualifizierten Pflegehelfern. Alle Mitarbeiter werden regelmäßig fortgebildet. Mit einer MDK-Note von 1,6 und über 2.500 bereits betreuten Patienten seit 2013 stehen wir für höchste Qualität in der Grundpflege Frankfurt."
  },
  {
    question: "Kann ich Grundpflege und Behandlungspflege in Frankfurt kombinieren?",
    answer: "Ja, bei AVYTA erhalten Sie Grundpflege und Behandlungspflege aus einer Hand. Die Grundpflege wird über die Pflegekasse, die Behandlungspflege über die Krankenkasse finanziert. So können Sie beide Leistungen gleichzeitig in Anspruch nehmen – wir koordinieren alles für Sie."
  },
  {
    question: "Wie schnell kann die Grundpflege in Frankfurt beginnen?",
    answer: "Nach einem Erstgespräch und der Klärung der Finanzierung kann die Grundpflege in Frankfurt oft innerhalb weniger Tage starten. Bei dringendem Bedarf, z. B. nach einem Krankenhausaufenthalt, organisieren wir auch kurzfristige Einsätze. Rufen Sie uns an: 069 153 914 05."
  },
];

const Grundpflege = () => {
  return (
    <>
      <Helmet>
        <title>Grundpflege in Frankfurt am Main | AVYTA Pflegedienst</title>
        <meta name="description" content="Grundpflege Frankfurt ✓ Körperpflege, Mobilisation & Haushaltshilfe ✓ Würdevolle Pflege zu Hause ✓ Finanzierung über Pflegekasse!" />
        <meta name="keywords" content="Grundpflege Frankfurt, Körperpflege Frankfurt, Ambulante Pflege Frankfurt" />
        <link rel="canonical" href="https://www.avyta.de/leistungen/grundpflege" />
        <meta property="og:title" content="Grundpflege in Frankfurt am Main | AVYTA Pflegedienst" />
        <meta property="og:description" content="Professionelle Grundpflege in Frankfurt am Main. Körperpflege, Mobilisation, Haushaltshilfe. Würdevolle Pflege zu Hause." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Leistungen", url: "https://www.avyta.de/leistungen" },
          { name: "Grundpflege", url: "https://www.avyta.de/leistungen/grundpflege" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(faqs)}</script>
        <script type="application/ld+json">{generateServiceSchema({
          serviceName: "Grundpflege Frankfurt am Main",
          serviceDescription: "Professionelle Grundpflege in Frankfurt: Körperpflege, Mobilisation, Haushaltshilfe und soziale Betreuung durch qualifizierte Pflegekräfte.",
          serviceType: "Grundpflege",
          canonicalUrl: "https://www.avyta.de/leistungen/grundpflege",
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
                  Grundpflege in Frankfurt am Main
                </h1>
                <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                  Suchen Sie nach professioneller Grundpflege in Frankfurt? Avyta versteht die Bedeutung Ihrer Zeit und Ihres Wohlbefindens.
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
                  Als pflegender Angehöriger geben Sie täglich Ihr Bestes, um Ihre Lieben zu versorgen. Diese Fürsorge 
                  erfordert Zeit, körperlichen Einsatz und viel Herz. Dennoch sollten Sie nicht Ihre eigenen Bedürfnisse 
                  vernachlässigen müssen, wenn Sie aufgrund von Krankheit, Terminen oder anderen Verpflichtungen einmal 
                  nicht voll einsatzfähig sind. Bei Avyta stehen wir Ihnen in solchen Momenten zur Seite. Egal, ob Sie 
                  kurzfristig verhindert sind, wichtige Termine haben oder einfach eine Auszeit benötigen – unsere 
                  Pflegefachkräfte und Pflegehelfer bei Avyta sind bereit, die Grundpflege Ihrer Angehörigen 
                  verantwortungsbewusst und mit Empathie zu übernehmen.
                </p>
              </div>
            </div>
          </section>

          {/* Avyta übernimmt */}
          <section className="py-12 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 md:mb-6">
                  Avyta übernimmt Ihre Grundpflege in Frankfurt am Main
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
                  Unsere Grundpflege in Frankfurt bietet Ihnen die Sicherheit, die Sie benötigen, um Ihr Leben sorgenfrei 
                  zu gestalten. Unser Leistungsspektrum umfasst die Grundpflege für Menschen mit verschiedenen Pflegegraden. 
                  Wir sind da, um Ihre Angehörigen im Haushalt zu unterstützen und ein offenes Ohr für sie zu haben. 
                  Grundpflege in Frankfurt ist eine wichtige Ergänzung zur häuslichen Pflege, die es Angehörigen ermöglicht, 
                  die volle Verantwortung für pflegebedürftige Personen zu übernehmen, ohne sich selbst zu stark einschränken 
                  zu müssen. Wir fördern soziale Bindungen und helfen Familien dabei, ihre Angehörigen in ihrer vertrauten 
                  Umgebung zu versorgen.
                </p>

                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-4 md:mb-6">
                  Unsere Aufgaben in der Grundpflege in Frankfurt umfassen:
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {leistungen.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-background rounded-xl border border-border/50">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm md:text-base text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Erfahrene Mitarbeiter */}
          <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 md:mb-6">
                    Grundpflege in Frankfurt am Main durch erfahrene Mitarbeiter
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                    Die Grundpflege in Frankfurt – zuverlässig, ob kurz oder lang. Als Ihr vertrauensvoller 
                    Ansprechpartner in allen Fragen der häuslichen Pflege ermöglichen wir Pflegebedürftigen, 
                    auch in Ihrer Abwesenheit einen normalen Alltag fortzuführen. Während Ihrer Abwesenheit 
                    dokumentieren wir Pflegemaßnahmen und Gesundheitsdaten genau, um Ihnen volle Transparenz zu bieten.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
                    Die Dauer unserer Grundpflege in Frankfurt richtet sich nach Ihrem Bedarf. Wir erstellen 
                    individuelle Pflegepläne für wenige Stunden, mehrere Tage oder sogar Wochen. In enger 
                    Absprache mit Ihnen und Ihren Angehörigen passen wir unsere Termine und Leistungen an 
                    Ihre aktuelle Situation an.
                  </p>
                  <p className="text-sm md:text-base text-foreground font-medium mb-4 md:mb-6">
                    Kontaktieren Sie uns noch heute, um die Grundpflege in Frankfurt flexibel und 
                    bedarfsgerecht einzurichten.
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
                          Qualifiziertes Personal
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Alle unsere Pflegekräfte sind qualifiziert und werden 
                        regelmäßig geschult. So gewährleisten wir höchste 
                        Qualität und Sicherheit in der Grundpflege.
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
                          Finanzierung über Pflegekasse
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Bei anerkanntem Pflegegrad werden die Kosten für Grundpflege von 
                        der Pflegekasse übernommen. Wir beraten Sie zu Ihren Ansprüchen 
                        und helfen bei der Antragstellung.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center">
                          <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">
                          Flexible Zeiten
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Wir passen unsere Termine flexibel an Ihre Bedürfnisse an – 
                        für kurzfristige oder langfristige Betreuung, ganz nach Ihren 
                        Anforderungen.
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
                  Häufige Fragen zur Grundpflege in Frankfurt
                </h2>
                <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-background rounded-xl border border-border/50 px-4 md:px-6"
                    >
                      <AccordionTrigger className="text-left text-sm md:text-base font-medium text-foreground hover:text-primary py-3 md:py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm md:text-base text-muted-foreground pb-3 md:pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
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
                  <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main">Intensivpflege</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/haushaltshilfe">Haushaltshilfe</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/24-stunden-pflege">24-Stunden-Pflege</Link>
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

export default Grundpflege;
