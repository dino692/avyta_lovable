import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Stethoscope, Users, FileCheck, Clock } from "lucide-react";
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
    title: "Medikamentenmanagement",
    description: "Wir gewährleisten, dass Ihre Angehörigen ihre Medikamente pünktlich und korrekt einnehmen"
  },
  {
    title: "Verbandswechsel und Wundversorgung",
    description: "Unsere qualifizierten Pflegekräfte sorgen für eine fachgerechte Versorgung von Wunden und Verletzungen"
  },
  {
    title: "Injektionen und Infusionen",
    description: "Wir führen medizinische Injektionen und Infusionen durch, um die Gesundheit Ihrer Angehörigen zu gewährleisten"
  },
  {
    title: "Kontrolle von Vitalwerten",
    description: "Wir überwachen und dokumentieren regelmäßig wichtige Vitalparameter, um sicherzustellen, dass Ihre Angehörigen die bestmögliche medizinische Betreuung erhalten"
  },
  {
    title: "Krankenhausnachsorge",
    description: "Bei Bedarf begleiten wir Ihre Angehörigen bei Arztbesuchen oder Krankenhausaufenthalten und sorgen für eine nahtlose Betreuung"
  },
];

const faqs = [
  {
    question: "Wie wird die Behandlungspflege in Frankfurt finanziert?",
    answer: "Die Behandlungspflege in Frankfurt wird bei ärztlicher Verordnung vollständig von der Krankenkasse übernommen. Sie benötigen eine Verordnung häuslicher Krankenpflege (Muster 12) von Ihrem Arzt. Wir bei AVYTA kümmern uns um alle Formalitäten und rechnen direkt mit Ihrer Kasse ab – für Sie entstehen in der Regel keine Kosten."
  },
  {
    question: "Welche Qualifikationen haben die Pflegekräfte für die Behandlungspflege?",
    answer: "Unsere Behandlungspflegekräfte bei AVYTA sind examinierte Pflegefachkräfte mit staatlicher Anerkennung. Sie werden regelmäßig in Wundversorgung, Injektionstechniken und Medikamentenmanagement fortgebildet. Mit einer MDK-Note von 1,6 garantieren wir höchste medizinische Qualität in der Behandlungspflege Frankfurt."
  },
  {
    question: "Wie schnell kann die Behandlungspflege in Frankfurt beginnen?",
    answer: "Bei AVYTA kann die Behandlungspflege in Frankfurt oft innerhalb von 24–48 Stunden nach Eingang der ärztlichen Verordnung starten. In dringenden Fällen, z. B. nach einer Krankenhausentlassung, organisieren wir auch kurzfristigere Einsätze. Rufen Sie uns an unter 069 153 914 05."
  },
  {
    question: "Was ist der Unterschied zwischen Behandlungspflege und Grundpflege?",
    answer: "Die Behandlungspflege in Frankfurt umfasst medizinische Maßnahmen wie Wundversorgung, Injektionen und Medikamentengabe – diese werden von der Krankenkasse finanziert. Die Grundpflege hingegen umfasst pflegerische Hilfen wie Körperpflege und Mobilisation und wird über die Pflegekasse abgerechnet. AVYTA bietet beides aus einer Hand."
  },
  {
    question: "Kann ich Behandlungspflege auch ohne Pflegegrad erhalten?",
    answer: "Ja, die Behandlungspflege in Frankfurt ist unabhängig vom Pflegegrad. Sie benötigen lediglich eine ärztliche Verordnung. Die Kosten werden von der Krankenkasse (nicht Pflegekasse) übernommen. Auch Menschen ohne Pflegegrad können so professionelle medizinische Pflege zu Hause erhalten."
  },
  {
    question: "Wie lange kann ich die Behandlungspflege in Frankfurt in Anspruch nehmen?",
    answer: "Die Dauer der Behandlungspflege richtet sich nach Ihrer ärztlichen Verordnung und kann bei Bedarf verlängert werden. Bei chronischen Erkrankungen ist auch eine dauerhafte Behandlungspflege möglich. Wir passen unsere Pflegepläne flexibel an Ihren Gesundheitszustand an."
  },
];

const Behandlungspflege = () => {
  return (
    <>
      <Helmet>
        <title>Behandlungspflege in Frankfurt am Main | AVYTA Pflegedienst</title>
        <meta name="description" content="Behandlungspflege Frankfurt ✓ Wundversorgung, Injektionen, Medikamentengabe ✓ Examinierte Fachkräfte ✓ Kostenübernahme durch Krankenkasse!" />
        <meta name="keywords" content="Behandlungspflege Frankfurt, Medizinische Pflege Frankfurt, Wundversorgung, Injektionen" />
        <link rel="canonical" href="https://www.avyta.de/leistungen/behandlungspflege" />
        <meta property="og:title" content="Behandlungspflege in Frankfurt am Main | AVYTA Pflegedienst" />
        <meta property="og:description" content="Professionelle Behandlungspflege in Frankfurt am Main. Wundversorgung, Injektionen, Verbandswechsel. Examinierte Pflegefachkräfte." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Leistungen", url: "https://www.avyta.de/leistungen" },
          { name: "Behandlungspflege", url: "https://www.avyta.de/leistungen/behandlungspflege" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(faqs)}</script>
        <script type="application/ld+json">{generateServiceSchema({
          serviceName: "Behandlungspflege Frankfurt am Main",
          serviceDescription: "Professionelle Behandlungspflege in Frankfurt: Wundversorgung, Injektionen, Infusionen, Medikamentenmanagement und Vitalzeichenkontrolle durch examinierte Pflegefachkräfte.",
          serviceType: "Behandlungspflege",
          canonicalUrl: "https://www.avyta.de/leistungen/behandlungspflege",
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
                  <Stethoscope className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 md:mb-6">
                  Behandlungspflege in Frankfurt am Main
                </h1>
                <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                  Suchen Sie nach professioneller Behandlungspflege in Frankfurt? Bei Avyta steht Ihre Gesundheit im Mittelpunkt.
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
                  Pflegende Angehörige leisten tagtäglich viel, um ihre Lieben bestmöglich zu versorgen. Dieser Einsatz 
                  erfordert Zeit, Kraft und Hingabe. Doch auch Pflegeverantwortliche sollten ihre eigenen Bedürfnisse 
                  nicht vernachlässigen müssen. Wenn Sie aus gesundheitlichen Gründen, Zeitmangel oder anderen 
                  Verpflichtungen nicht in der Lage sind, die notwendige Pflege zu gewährleisten, sind wir von Avyta 
                  für Sie da. Egal ob es sich um eine kurzfristige Verhinderung handelt, einen wichtigen Termin oder 
                  eine notwendige Auszeit – unsere Pflegefachkräfte und Pflegehelfer sind bereit, die Behandlungspflege 
                  Ihrer Angehörigen gewissenhaft und mit Herz zu übernehmen.
                </p>
              </div>
            </div>
          </section>

          {/* Avyta übernimmt */}
          <section className="py-12 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 md:mb-6">
                  Avyta übernimmt Ihre Behandlungspflege in Frankfurt am Main
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
                  Unsere Behandlungspflege in Frankfurt bietet Ihnen die Sicherheit, die Sie benötigen, um Ihre 
                  Gesundheit optimal zu schützen. Unser umfangreiches Angebot umfasst verschiedene Aspekte der 
                  Behandlungspflege, um Ihnen eine Rundumversorgung zu bieten. Unabhängig vom Pflegegrad Ihrer 
                  Angehörigen sind wir in Frankfurt für Sie da und unterstützen Sie nicht nur bei der medizinischen 
                  Versorgung, sondern sind auch eine verlässliche Stütze im Alltag Ihrer Angehörigen.
                </p>

                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-4 md:mb-6">
                  Unsere Behandlungspflege in Frankfurt umfasst unter anderem folgende Leistungen:
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
                    Behandlungspflege in Frankfurt am Main durch erfahrene Mitarbeiter
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                    Behandlungspflege in Frankfurt – Vertrauen Sie auf unsere Erfahrung. Als Ihr verlässlicher 
                    Ansprechpartner in Fragen der medizinischen Pflege ermöglichen wir Ihnen und Ihren Angehörigen, 
                    Ihre Gesundheit optimal zu schützen. Wir dokumentieren medizinische Maßnahmen und Gesundheitsdaten 
                    sorgfältig, um Ihnen volle Transparenz zu bieten.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
                    Unsere Behandlungspflege in Frankfurt passt sich flexibel Ihren Bedürfnissen an. Wir erstellen 
                    individuelle Pflegepläne für kurzfristige oder langfristige Betreuung, ganz nach Ihren 
                    Anforderungen. In enger Absprache mit Ihnen und Ihren Angehörigen passen wir unsere Termine 
                    und Leistungen an Ihre aktuelle Situation an.
                  </p>
                  <p className="text-sm md:text-base text-foreground font-medium mb-4 md:mb-6">
                    Kontaktieren Sie uns noch heute, um die Behandlungspflege in Frankfurt unkompliziert und 
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
                        Alle unsere Behandlungspflegekräfte sind examiniert und werden 
                        regelmäßig geschult. So gewährleisten wir höchste medizinische 
                        Qualität und Sicherheit.
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
                          Kostenübernahme
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Die Kosten für Behandlungspflege werden bei ärztlicher Verordnung 
                        vollständig von Ihrer Krankenkasse übernommen. Wir kümmern uns um 
                        alle Formalitäten und rechnen direkt mit Ihrer Kasse ab.
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
                  Häufige Fragen zur Behandlungspflege in Frankfurt
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
                  <Link to="/leistungen/grundpflege">Grundpflege</Link>
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

export default Behandlungspflege;
