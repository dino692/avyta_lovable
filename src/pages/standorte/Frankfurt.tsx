import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight, Phone, Clock, Heart, Shield, Users, Home, Stethoscope, CheckCircle, HelpCircle, Sparkles, Star, Building } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    description: "Unsere Dienste sind genauso vielseitig, wie die Personen, die sie in Anspruch nehmen."
  },
  {
    icon: Shield,
    title: "Gesicherte Pflegequalität",
    description: "Durch hochqualifizierte Mitarbeiter und permanente Qualitätssicherung garantieren wir höchste Qualität."
  },
  {
    icon: Stethoscope,
    title: "Angebotsvielfalt für Intensivpflege",
    description: "Die Verfügbarkeit individueller Wohnformen für die Intensivpflege ist sehr reichhaltig."
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
        <title>Ambulante Pflege Frankfurt | AVYTA Pflegedienst</title>
        <meta name="description" content="Ambulante Pflege in Frankfurt am Main. Professioneller Pflegedienst in allen Frankfurter Stadtteilen. Behandlungspflege, Grundpflege, 24h-Pflege. Tel: 069 153 914 05" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-32 md:py-40 overflow-hidden">
            {/* Multi-layer gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/3 to-transparent" />
            
            {/* Animated gradient orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-morph-blob opacity-60" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float-slow opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-2xl" />
            
            {/* Grain overlay */}
            <div className="absolute inset-0 grain-overlay opacity-30" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-5xl mx-auto text-center">
                {/* Animated icon */}
                <div className="relative w-24 h-24 mx-auto mb-8 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                  <div className="relative w-full h-full bg-background/80 backdrop-blur-xl rounded-3xl flex items-center justify-center border border-primary/20 shadow-lg shadow-primary/20">
                    <Building className="w-12 h-12 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center animate-glow">
                    <Sparkles className="w-3 h-3 text-accent-foreground" />
                  </div>
                </div>
                
                {/* Headline with gradient text */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8">
                  <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    Ambulanter Pflegedienst
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                    Frankfurt
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                  Falls Sie einen hochqualifizierten Pflegedienst in Frankfurt am Main und Umgebung suchen, sind Sie hier richtig! Wir bieten eine 
                  <span className="text-foreground font-medium"> ganzheitliche Betreuung </span>
                  für Pflegebedürftige an.
                </p>
                
                {/* CTA Buttons with shine effect */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+4969920388770"
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 active:scale-95"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <Phone className="w-5 h-5" />
                    <span>Jetzt anrufen</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <Link 
                    to="/kontakt"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-background/80 backdrop-blur-xl border-2 border-primary/30 text-foreground rounded-2xl font-semibold text-lg transition-all duration-300 hover:border-primary hover:bg-primary/5"
                  >
                    Kontakt aufnehmen
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Intro Section */}
          <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                {/* Glassmorphism card */}
                <div className="relative bg-background/60 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-border/50 shadow-2xl">
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-3xl" />
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Wir sind spezialisiert darauf, auch in den schwierigsten Situationen gemeinsam mit Ihnen Lösungen zu erarbeiten. Falls Sie oder einer Ihrer Angehörigen pflegebedürftig wird, sind wir mit all unserer Erfahrung und Überzeugung voll für Sie da. Gemeinsam mit Ihnen erstellen wir einen Hilfsplan, der zu Ihren Anforderungen passt und Sie in Ihrem täglichen Leben bestmöglich unterstützt.
                  </p>
                  
                  {/* Feature badges */}
                  <div className="flex flex-wrap gap-4 justify-center mt-10">
                    <div className="group flex items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-3 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-semibold">Auch am Wochenende verfügbar</span>
                    </div>
                    <div className="group flex items-center gap-3 bg-gradient-to-r from-accent/10 to-accent/5 px-6 py-3 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
                      <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                        <Phone className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <span className="text-foreground font-semibold">24h Notfall-Erreichbarkeit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Was macht ein ambulanter Pflegedienst */}
          <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-5xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                    <HelpCircle className="w-4 h-4" />
                    <span>Wozu ein Pflegedienst?</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      Ambulanter Pflegedienst
                    </span>
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> in Frankfurt</span>
                  </h2>
                </div>
                
                {/* Info cards */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Card className="relative h-full bg-background/80 backdrop-blur-xl border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                          Das macht der Ambulante Pflegedienst
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Früher oder später kann es bei jeder Person passieren, dass Sie auf Pflege angewiesen ist. In Folge von Krankheiten, durch Unfälle oder altersbedingt kann der Alltag nicht mehr allein bewältigt werden.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          Der große Vorzug am ambulanten Pflegedienst ist, dass dieser sich um die Versorgung der Pflegebedürftigen in deren häuslichem Umfeld kümmert. Somit bleiben Selbstständigkeit und die gewohnte Umgebung beibehalten.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Card className="relative h-full bg-gradient-to-br from-primary/10 via-background to-accent/10 backdrop-blur-xl border-primary/30 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                          Geeignet in vielen Fällen
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Als Faustregel lässt sich sagen, dass der Ambulante Pflegedienst immer dann für Personen geeignet ist, wenn diese ihre alltäglichen Aufgaben nicht mehr allein bewältigen können. Dies kann nach Unfällen, im Alter sowie bei geistigen Einschränkungen der Fall sein. Sollte gleichzeitig der Wunsch nach einem Verbleib in der häuslichen Umgebung gegeben sein, ist der Ambulante Pflegedienst in Frankfurt die beste Wahl.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vorteile Section */}
          <section className="relative py-32 overflow-hidden">
            {/* Multi-layer background */}
            <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card/50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
            
            {/* Floating orbs */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-morph-blob" />
            
            <div className="container mx-auto px-4 relative z-10">
              {/* Section header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                  <Star className="w-4 h-4" />
                  <span>Unsere Stärken</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Das macht
                  </span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> AVYTA besonders</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Es gibt viele Pflegedienste in Frankfurt am Main. Was spricht für die Avyta Pflegegesellschaft mbH?
                </p>
              </div>
              
              {/* Vorteile grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {vorteile.map((vorteil, index) => (
                  <div 
                    key={index} 
                    className="group relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Card className="relative h-full bg-background/80 backdrop-blur-xl border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.02]">
                      <CardContent className="p-6">
                        <div className="relative w-14 h-14 mb-5">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                          <div className="relative w-full h-full bg-background rounded-xl flex items-center justify-center border border-primary/20">
                            <vorteil.icon className="w-7 h-7 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {vorteil.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {vorteil.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Leistungen Section */}
          <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
            
            <div className="container mx-auto px-4 relative z-10">
              {/* Section header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span>Leistungsübersicht</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Unsere
                  </span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Leistungen</span>
                </h2>
              </div>
              
              {/* Service cards grid */}
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Grundpflege */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Card className="relative h-full bg-background/80 backdrop-blur-xl border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-14 h-14">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                          <div className="relative w-full h-full bg-background rounded-xl flex items-center justify-center border border-primary/20">
                            <Heart className="w-7 h-7 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-display font-bold text-foreground">Grundpflege</h3>
                          <p className="text-sm text-muted-foreground">Körperliche Versorgung & Vorsorge</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {grundpflegeLeistungen.map((leistung, index) => (
                          <li 
                            key={index} 
                            className="flex items-start gap-3 text-muted-foreground group/item hover:text-foreground transition-colors"
                          >
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                              <CheckCircle className="w-3 h-3 text-primary" />
                            </div>
                            <span>{leistung}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Behandlungspflege */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Card className="relative h-full bg-background/80 backdrop-blur-xl border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-14 h-14">
                          <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/60 rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                          <div className="relative w-full h-full bg-background rounded-xl flex items-center justify-center border border-accent/20">
                            <Stethoscope className="w-7 h-7 text-accent-foreground" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-display font-bold text-foreground">Behandlungspflege</h3>
                          <p className="text-sm text-muted-foreground">Medizinische Maßnahmen</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {behandlungspflegeLeistungen.map((leistung, index) => (
                          <li 
                            key={index} 
                            className="flex items-start gap-3 text-muted-foreground group/item hover:text-foreground transition-colors"
                          >
                            <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-accent/20 transition-colors">
                              <CheckCircle className="w-3 h-3 text-accent-foreground" />
                            </div>
                            <span>{leistung}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Intensivpflege */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Card className="relative h-full bg-background/80 backdrop-blur-xl border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-14 h-14">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                          <div className="relative w-full h-full bg-background rounded-xl flex items-center justify-center border border-primary/20">
                            <Shield className="w-7 h-7 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-display font-bold text-foreground">Intensivpflege</h3>
                          <p className="text-sm text-muted-foreground">Mit Heimbeatmung</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {intensivpflegeLeistungen.map((leistung, index) => (
                          <li 
                            key={index} 
                            className="flex items-start gap-3 text-muted-foreground group/item hover:text-foreground transition-colors"
                          >
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                              <CheckCircle className="w-3 h-3 text-primary" />
                            </div>
                            <span>{leistung}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Serviceleistungen */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Card className="relative h-full bg-background/80 backdrop-blur-xl border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-14 h-14">
                          <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary/60 rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                          <div className="relative w-full h-full bg-background rounded-xl flex items-center justify-center border border-accent/20">
                            <Users className="w-7 h-7 text-accent-foreground" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-display font-bold text-foreground">Serviceleistungen</h3>
                          <p className="text-sm text-muted-foreground">Zusätzliche Unterstützung</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {serviceleistungen.map((leistung, index) => (
                          <li 
                            key={index} 
                            className="flex items-start gap-3 text-muted-foreground group/item hover:text-foreground transition-colors"
                          >
                            <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-accent/20 transition-colors">
                              <CheckCircle className="w-3 h-3 text-accent-foreground" />
                            </div>
                            <span>{leistung}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Stadtteile Section */}
          <section className="relative py-32 overflow-hidden">
            {/* Multi-layer background */}
            <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card/50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
            
            {/* Floating orbs */}
            <div className="absolute top-1/3 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-morph-blob" />
            
            <div className="container mx-auto px-4 relative z-10">
              {/* Section header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>Stadtteile</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Unsere Stadtteile
                  </span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> in Frankfurt</span>
                </h2>
              </div>
              
              {/* Stadtteile grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {stadtteile.map((stadtteil, index) => (
                  <Link
                    key={stadtteil.name}
                    to={stadtteil.href}
                    className="group relative"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02]">
                      <div className="flex items-center justify-between">
                        <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                          {stadtteil.name}
                        </span>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-32 overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient-x bg-[length:200%_200%]" />
            
            {/* Floating orbs */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-morph-blob" />
            
            {/* Grain overlay */}
            <div className="absolute inset-0 grain-overlay opacity-20" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8 animate-glow">
                  <HelpCircle className="w-4 h-4" />
                  <span>Noch Fragen?</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-8">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Wir beraten Sie
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                    gerne persönlich
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                  Der Ambulante Pflegedienst in Frankfurt ist eine sehr attraktive und beliebte Lösung. Hier stehen Aktivität, Lebensqualität und Wohlfühlfaktor bei den betreuten Personen an erster Stelle.
                </p>
                
                <a 
                  href="tel:+4969920388770"
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Phone className="w-6 h-6" />
                  <span>Jetzt kostenlos anrufen</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                    <HelpCircle className="w-4 h-4" />
                    <span>FAQ</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      Häufige
                    </span>
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Fragen</span>
                  </h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {[
                    {
                      question: "Welche Kompetenzen bringt der Avyta Pflegedienst in Frankfurt mit?",
                      answer: "Beim Avyta Pflegedienst in Frankfurt können wir von der Grundpflege bis zur Intensivpflege alle Stufen übernehmen und die Leistungen genau auf Ihre Bedürfnisse zuschneiden. Mit mehr als 10 Jahren Erfahrung im Bereich der Pflege können Sie uns beruhigt Ihr Vertrauen schenken."
                    },
                    {
                      question: "Welche Kosten erwarten mich beim Avyta Pflegedienst in Frankfurt am Main?",
                      answer: "Die Kosten für unseren Pflegedienst richten sich nach dem individuellen Pflegebedarf und dem Pflegegrad. Wir beraten Sie gerne ausführlich zu den Kosten und möglichen Finanzierungswegen über die Pflegekasse."
                    },
                    {
                      question: "Wie kann ein Pflegedienst in Frankfurt beantragt werden?",
                      answer: "Kontaktieren Sie uns für ein unverbindliches Erstgespräch. Wir helfen Ihnen bei allen notwendigen Anträgen und der Kommunikation mit Ihrer Pflegekasse."
                    }
                  ].map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index + 1}`} 
                      className="group bg-background/60 backdrop-blur-xl rounded-2xl border border-border/50 px-6 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 data-[state=open]:border-primary/40 data-[state=open]:shadow-xl data-[state=open]:shadow-primary/10"
                    >
                      <AccordionTrigger className="text-left font-display font-semibold text-lg py-6 hover:no-underline group-hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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