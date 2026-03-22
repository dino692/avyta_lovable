import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Home, Users, FileCheck, Clock, Heart, Shield, Phone, MapPin, Star, Building2, Utensils, Accessibility, Flower2, HandHelping, Eye } from "lucide-react";
import betreutesWohnenHeroImg from "@/assets/leistungen/betreutes-wohnen-hero.jpg";
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

const vorteile = [
  {
    title: "Selbstbestimmtes Leben mit Unterstützung",
    description: "Betreutes Wohnen in Frankfurt ermöglicht Ihnen oder Ihren Angehörigen ein eigenständiges Leben in der eigenen Wohnung – mit professioneller Pflege und Betreuung, wann immer sie gebraucht wird."
  },
  {
    title: "Individuelle Betreuungspakete",
    description: "Von der hauswirtschaftlichen Unterstützung über Grundpflege bis zur medizinischen Versorgung – unsere Betreuungspakete für betreutes Wohnen in Frankfurt und Bad Vilbel passen sich Ihren Bedürfnissen an."
  },
  {
    title: "Soziale Teilhabe & Gemeinschaft",
    description: "Gemeinsame Aktivitäten, Ausflüge und Gesprächsrunden fördern den sozialen Zusammenhalt. Betreutes Wohnen bedeutet bei AVYTA: Lebensqualität statt Einsamkeit."
  },
  {
    title: "Qualifiziertes Pflegepersonal",
    description: "Unsere examinierten Pflegekräfte und Betreuungsassistenten in Frankfurt sind speziell geschult, um Bewohnern im betreuten Wohnen einfühlsam und kompetent zur Seite zu stehen."
  },
  {
    title: "Entlastung für pflegende Angehörige",
    description: "Betreutes Wohnen in Bad Vilbel und Frankfurt gibt Familien die Sicherheit, dass ihre Liebsten bestens versorgt sind – ohne den Verlust von Selbstständigkeit und Privatsphäre."
  },
  {
    title: "Flexible Pflegegrade nutzbar",
    description: "Ob Pflegegrad 1 oder Pflegegrad 5 – betreutes Wohnen lässt sich mit allen Pflegeleistungen kombinieren. Wir beraten Sie kostenlos zur optimalen Finanzierung."
  },
];

const angebote = [
  { icon: Building2, title: "Barrierefreies Wohnen", desc: "Altersgerechte Wohnungen mit moderner Ausstattung und Sicherheitskonzept" },
  { icon: Utensils, title: "Hauswirtschaftliche Hilfe", desc: "Einkaufen, Kochen, Reinigung und Wäscheversorgung nach Bedarf" },
  { icon: Accessibility, title: "Mobilisierung & Begleitung", desc: "Begleitung zu Arztterminen, Spaziergänge und Alltagsunterstützung" },
  { icon: Flower2, title: "Freizeitgestaltung", desc: "Kulturelle Angebote, Gruppenaktivitäten und individuelle Beschäftigung" },
  { icon: HandHelping, title: "Pflegerische Versorgung", desc: "Grund- und Behandlungspflege nach individuellem Pflegeplan" },
  { icon: Shield, title: "Notrufsystem 24/7", desc: "Rund-um-die-Uhr-Erreichbarkeit für Notfälle und dringende Anliegen" },
];

const faqItems = [
  {
    question: "Was ist betreutes Wohnen und für wen eignet es sich?",
    answer: "Betreutes Wohnen in Frankfurt und Bad Vilbel richtet sich an Senioren und pflegebedürftige Menschen, die selbstbestimmt leben möchten, aber regelmäßige Unterstützung im Alltag benötigen. Es kombiniert eigenständiges Wohnen mit professionellen Pflege- und Betreuungsleistungen – ideal für Menschen ab Pflegegrad 1."
  },
  {
    question: "Welche Kosten entstehen beim betreuten Wohnen in Frankfurt?",
    answer: "Die Kosten für betreutes Wohnen in Frankfurt setzen sich aus der Miete für die barrierefreie Wohnung und den individuellen Betreuungsleistungen zusammen. Viele Leistungen werden von der Pflegekasse übernommen, etwa über Pflegegeld, Pflegesachleistungen oder den Entlastungsbetrag. Wir beraten Sie kostenlos zur Finanzierung."
  },
  {
    question: "Kann ich meinen eigenen Haushalt im betreuten Wohnen führen?",
    answer: "Ja, genau das ist das Prinzip des betreuten Wohnens. Sie behalten Ihre eigene Wohnung und Ihren Alltag – ergänzt durch professionelle Unterstützung bei Bedarf. Ob Einkaufen, Kochen oder Körperpflege: Sie entscheiden, welche Hilfe Sie in Anspruch nehmen."
  },
  {
    question: "Bietet AVYTA betreutes Wohnen auch in Bad Vilbel an?",
    answer: "Ja, AVYTA bietet betreutes Wohnen sowohl in Frankfurt als auch in Bad Vilbel und Umgebung an. Unsere Pflegekräfte kommen direkt zu Ihnen nach Hause und unterstützen Sie im gewohnten Umfeld – ob in der Frankfurter Innenstadt oder im Raum Bad Vilbel."
  },
  {
    question: "Welche Pflegegrade werden beim betreuten Wohnen berücksichtigt?",
    answer: "Betreutes Wohnen bei AVYTA ist mit allen Pflegegraden (1–5) möglich. Je nach Pflegegrad stehen Ihnen unterschiedliche Leistungen der Pflegeversicherung zu. Unsere Pflegeberater helfen Ihnen, den optimalen Pflegegrad zu beantragen und alle Ansprüche auszuschöpfen."
  },
  {
    question: "Wie unterscheidet sich betreutes Wohnen von einem Pflegeheim?",
    answer: "Im Gegensatz zum Pflegeheim leben Sie beim betreuten Wohnen in Ihrer eigenen Wohnung mit maximaler Selbstständigkeit. Sie erhalten nur die Unterstützung, die Sie tatsächlich brauchen – ohne starre Tagesabläufe oder Gemeinschaftsunterbringung. Das betreute Wohnen von AVYTA in Frankfurt ist die perfekte Alternative für Menschen, die Wert auf Privatsphäre und Eigenständigkeit legen."
  },
];

const BetreutesWohnen = () => {
  const faqSchema = generateFAQSchema(faqItems);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Startseite", url: "https://www.avyta.de/" },
    { name: "Leistungen", url: "https://www.avyta.de/leistungen" },
    { name: "Betreutes Wohnen Frankfurt", url: "https://www.avyta.de/leistungen/betreutes-wohnen-frankfurt" },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Betreutes Wohnen Frankfurt & Bad Vilbel",
    "description": "Professionelles betreutes Wohnen in Frankfurt und Bad Vilbel. Selbstbestimmt leben mit individueller Pflege und Betreuung durch AVYTA.",
    "provider": {
      "@type": "Organization",
      "name": "AVYTA Pflegegesellschaft mbH",
      "url": "https://www.avyta.de",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Frankfurt am Main",
        "addressRegion": "Hessen",
        "addressCountry": "DE"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Frankfurt am Main" },
      { "@type": "City", "name": "Bad Vilbel" }
    ],
    "serviceType": "Betreutes Wohnen"
  };

  return (
    <>
      <Helmet>
        <title>Betreutes Wohnen Frankfurt & Bad Vilbel ✅ Selbstbestimmt leben | avyta.de</title>
        <meta name="description" content="Betreutes Wohnen in Frankfurt & Bad Vilbel ✓ Selbstbestimmt leben mit professioneller Pflege ✓ Individuelle Betreuung ✓ Alle Pflegegrade ✓ Kostenlose Beratung ▸ Jetzt informieren!" />
        <meta property="og:title" content="Betreutes Wohnen Frankfurt & Bad Vilbel ✅ AVYTA Pflegegesellschaft" />
        <meta property="og:description" content="Betreutes Wohnen in Frankfurt & Bad Vilbel. Selbstbestimmt leben mit individueller Pflege und Betreuung. Jetzt kostenlos beraten lassen!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <link rel="canonical" href="https://www.avyta.de/leistungen/betreutes-wohnen-frankfurt" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-primary/10 via-secondary/30 to-background overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-slide-2.jpg')] bg-cover bg-center opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link to="/" className="hover:text-primary transition-colors">Startseite</Link>
                <span>/</span>
                <Link to="/leistungen" className="hover:text-primary transition-colors">Leistungen</Link>
                <span>/</span>
                <span className="text-foreground font-medium">Betreutes Wohnen</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                Betreutes Wohnen in <span className="text-primary">Frankfurt</span> & <span className="text-primary">Bad Vilbel</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                Selbstbestimmt leben – mit der Sicherheit professioneller Pflege. AVYTA bietet betreutes Wohnen in Frankfurt am Main und Bad Vilbel: individuelle Betreuung, flexible Pflegeleistungen und ein Zuhause, das Ihnen gehört.
              </p>
              <div className="flex">
                <CTADropdownButton size="lg" />
              </div>

              <div className="flex flex-wrap gap-6 mt-10">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Alle Pflegegrade</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Kostenlose Beratung</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>24/7 Notrufsystem</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Was ist Betreutes Wohnen */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Was ist betreutes Wohnen? Definition & Vorteile
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  <strong>Betreutes Wohnen in Frankfurt</strong> ist eine moderne Wohnform für Senioren und pflegebedürftige Menschen, die selbstständig in ihrer eigenen Wohnung leben möchten, dabei aber auf professionelle Unterstützung zurückgreifen können. Anders als im Pflegeheim behalten die Bewohner ihre volle Autonomie – sie gestalten ihren Alltag selbst und nehmen nur die Hilfe in Anspruch, die sie wirklich benötigen.
                </p>
                <p>
                  Bei AVYTA verstehen wir <strong>betreutes Wohnen in Frankfurt und Bad Vilbel</strong> als ganzheitliches Konzept: Wir kombinieren barrierefreies Wohnen mit individuellen Pflege- und Betreuungsleistungen, sozialen Aktivitäten und einem zuverlässigen Notrufsystem. So entsteht ein sicheres Umfeld, das Lebensqualität und Eigenständigkeit in den Mittelpunkt stellt.
                </p>
                <p>
                  Betreutes Wohnen eignet sich besonders für Menschen, die noch relativ selbstständig sind, aber im Alltag punktuell Unterstützung benötigen – etwa beim Einkaufen, bei der Körperpflege oder bei Arztbesuchen. Auch für Angehörige ist betreutes Wohnen eine ideale Lösung: Die professionelle Betreuung entlastet die Familie, ohne dass der pflegebedürftige Mensch seine gewohnte Umgebung verlassen muss.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vorteile */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Ihre Vorteile: Betreutes Wohnen bei AVYTA
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Warum sich immer mehr Familien in Frankfurt und Bad Vilbel für betreutes Wohnen von AVYTA entscheiden
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {vorteile.map((v, i) => (
                <Card key={i} className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Unsere Leistungen */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Leistungen im betreuten Wohnen Frankfurt & Bad Vilbel
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Unser umfassendes Angebot für ein selbstbestimmtes Leben mit professioneller Unterstützung
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {angebote.map((a, i) => (
                <Card key={i} className="border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <a.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">{a.title}</h3>
                    <p className="text-muted-foreground text-sm">{a.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Für wen eignet sich betreutes Wohnen */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Für wen eignet sich betreutes Wohnen in Frankfurt?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Betreutes Wohnen in Frankfurt am Main und Bad Vilbel ist die ideale Lösung für verschiedene Lebenssituationen. Ob nach einem Krankenhausaufenthalt, bei zunehmender Einschränkung im Alter oder als vorsorgliche Maßnahme – das Konzept passt sich flexibel an Ihre individuelle Situation an.
                </p>
                <p>
                  <strong>Betreutes Wohnen eignet sich besonders für:</strong>
                </p>
                <ul className="list-none space-y-3 pl-0">
                  {[
                    "Senioren, die selbstständig leben möchten, aber Sicherheit im Alltag wünschen",
                    "Menschen mit Pflegegrad 1–3, die noch keine Vollzeitpflege benötigen",
                    "Personen nach Krankenhausaufenthalt oder Rehabilitation",
                    "Ehepaare, bei denen ein Partner pflegebedürftig wird",
                    "Angehörige, die Entlastung bei der Pflege suchen",
                    "Menschen mit leichter Demenz im Frühstadium",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Auch bei höheren Pflegegraden (4 und 5) kann betreutes Wohnen in Kombination mit unserer <Link to="/leistungen/24-stunden-pflege" className="text-primary hover:underline">24-Stunden-Pflege</Link> eine Alternative zum Pflegeheim sein. Unsere <Link to="/leistungen/pflegeberatung-frankfurt" className="text-primary hover:underline">Pflegeberatung in Frankfurt</Link> hilft Ihnen, die beste Lösung zu finden.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kosten & Finanzierung */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Kosten & Finanzierung: Betreutes Wohnen in Frankfurt
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Die Kosten für <strong>betreutes Wohnen in Frankfurt</strong> variieren je nach Umfang der gewünschten Leistungen. Grundsätzlich setzen sich die Kosten aus der Miete für die barrierefreie Wohnung und den individuellen Betreuungsleistungen zusammen. Viele dieser Leistungen werden von der Pflegekasse übernommen.
                </p>
                <p>
                  <strong>Finanzierungsmöglichkeiten im Überblick:</strong>
                </p>
                <div className="grid sm:grid-cols-2 gap-4 not-prose">
                  {[
                    { title: "Pflegegeld", desc: "Ab Pflegegrad 2 erhalten Sie monatliches Pflegegeld für die häusliche Pflege" },
                    { title: "Pflegesachleistungen", desc: "Professionelle Pflegeleistungen werden direkt mit der Kasse abgerechnet" },
                    { title: "Entlastungsbetrag", desc: "131 € monatlich für Betreuungs- und Entlastungsangebote ab Pflegegrad 1" },
                    { title: "Verhinderungspflege", desc: "Bis zu 1.612 € jährlich für Ersatzpflege bei Verhinderung der Hauptpflegeperson" },
                  ].map((f, i) => (
                    <Card key={i} className="border-border/50">
                      <CardContent className="p-4">
                        <h4 className="font-display font-semibold text-foreground mb-1">{f.title}</h4>
                        <p className="text-sm text-muted-foreground">{f.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <p>
                  Unser Tipp: Nutzen Sie unsere <strong>kostenlose Pflegeberatung</strong>, um alle Finanzierungsmöglichkeiten auszuschöpfen. Wir helfen Ihnen auch beim <Link to="/blog/pflegegrad-beantragen" className="text-primary hover:underline">Pflegegrad beantragen</Link> und bei der Kommunikation mit der Pflegekasse.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Standorte */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Betreutes Wohnen in Frankfurt & Bad Vilbel – unsere Standorte
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                AVYTA bietet betreutes Wohnen an zwei Hauptstandorten und versorgt zahlreiche Frankfurter Stadtteile
              </p>
              <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Card className="border-border/50 hover:border-primary/30 transition-all">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">Frankfurt am Main</h3>
                    <p className="text-sm text-muted-foreground mb-4">Alle Stadtteile von Bockenheim bis Sachsenhausen</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/standorte/frankfurt">Mehr erfahren</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-border/50 hover:border-primary/30 transition-all">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">Bad Vilbel</h3>
                    <p className="text-sm text-muted-foreground mb-4">Betreutes Wohnen im Raum Bad Vilbel und Umgebung</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/standorte/bad-vilbel">Mehr erfahren</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">
                Häufige Fragen zum betreuten Wohnen in Frankfurt
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-10">
                Alles Wichtige rund um betreutes Wohnen in Frankfurt und Bad Vilbel
              </p>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Betreutes Wohnen in Frankfurt – jetzt beraten lassen
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Erfahren Sie in einem kostenlosen Beratungsgespräch, wie betreutes Wohnen von AVYTA Ihr Leben oder das Ihrer Angehörigen bereichern kann. Wir beraten Sie zu allen Fragen rund um Pflegegrade, Finanzierung und verfügbare Leistungen.
              </p>
              <div className="flex justify-center">
                <CTADropdownButton size="lg" />
              </div>
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 text-primary" />
                  <span>5,0 Sterne bei Google</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Über 2.500 betreute Kunden</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>Seit 2013 in Frankfurt</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Verwandte Leistungen */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">
                Verwandte Leistungen in Frankfurt
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Grundpflege", href: "/leistungen/grundpflege", icon: HandHelping },
                  { name: "24-Stunden-Pflege", href: "/leistungen/24-stunden-pflege", icon: Clock },
                  { name: "Demenz WG", href: "/leistungen/demenz-wg-frankfurt", icon: Home },
                  { name: "Haushaltshilfe", href: "/leistungen/haushaltshilfe", icon: Home },
                  { name: "Pflegeberatung", href: "/leistungen/pflegeberatung-frankfurt", icon: FileCheck },
                  { name: "Verhinderungspflege", href: "/leistungen/verhinderungspflege-frankfurt", icon: Heart },
                ].map((s, i) => (
                  <Link
                    key={i}
                    to={s.href}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                  >
                    <s.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">{s.name}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <NewsletterSection />
      </main>

      <Footer />
    </>
  );
};

export default BetreutesWohnen;
