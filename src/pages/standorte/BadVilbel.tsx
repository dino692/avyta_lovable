import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Heart, Shield, Users, CheckCircle, HelpCircle, Sparkles, Star, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const grundpflegeLeistungen = [
  "Körperpflege",
  "Unterstützung beim An- und Auskleiden",
  "Hilfe bei der Ausscheidung",
  "Hilfe beim Essen und Trinken",
  "Maßnahmen zur Mobilität",
  "Hauswirtschaftliche Hilfe"
];

const behandlungspflegeLeistungen = [
  "Herrichten und Verabreichen von Medikamenten",
  "Kompressionsstrümpfe an- und ausziehen",
  "Injektionen und Infusionen",
  "Blutdruck- und Blutzuckerkontrolle",
  "Wundversorgung",
  "Tracheostomaversorgung",
  "Versorgung von Anus Praeter und Urostoma",
  "Parenterale und enterale Ernährung"
];

const BadVilbel = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Bad Vilbel | AVYTA Ambulante Pflege</title>
        <meta name="description" content="Pflegedienst Bad Vilbel - ganzheitliche und hochqualifizierte Betreuung. Grundpflege, Behandlungspflege, Intensivpflege. 24h erreichbar. Tel: 069 153 914 05" />
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
                    <MapPin className="w-12 h-12 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center animate-glow">
                    <Sparkles className="w-3 h-3 text-accent-foreground" />
                  </div>
                </div>
                
                {/* Headline with gradient text */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8">
                  <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    Pflegedienst
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                    Bad Vilbel
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                  Mit unserem Pflegedienst in Bad Vilbel bieten wir Ihnen oder Ihren Angehörigen eine 
                  <span className="text-foreground font-medium"> ganzheitliche und hochqualifizierte </span>
                  Betreuung.
                </p>
                
                {/* CTA Button with shine effect */}
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
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Die Gründe, die zu einer Pflegebedürftigkeit führen, sind so individuell wie der Mensch selbst. Schon ein unglücklicher Unfall oder eine altersbedingte Einschränkung der Mobilität oder des Geistes reichen, dass sich mit der Frage nach der richtigen Krankenpflege auseinandergesetzt werden muss.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Wenn Sie sich für den ambulanten Pflegedienst in Bad Vilbel entscheiden, kann die Lebensqualität und der Alltag durch die bekannte Umgebung bestmöglich gewahrt werden. Wir von AVYTA stellen einen an Ihren Bedürfnissen ausgerichteten Hilfsplan zusammen und bieten Ihnen so eine flexible und professionelle Unterstützung in allen Lebenslagen.
                    </p>
                  </div>
                  
                  {/* Feature badges */}
                  <div className="flex flex-wrap gap-4 justify-center mt-10">
                    <div className="group flex items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-3 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-semibold">24h Notfall-Erreichbarkeit</span>
                    </div>
                    <div className="group flex items-center gap-3 bg-gradient-to-r from-accent/10 to-accent/5 px-6 py-3 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
                      <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                        <Shield className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <span className="text-foreground font-semibold">Gesicherte Pflegequalität</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Was uns auszeichnet */}
          <section className="relative py-32 overflow-hidden">
            {/* Multi-layer background */}
            <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card/50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
            
            {/* Floating orbs */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-morph-blob" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                    <Star className="w-4 h-4" />
                    <span>Unsere Qualitäten</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
                    <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      Was uns
                    </span>
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> auszeichnet</span>
                  </h2>
                </div>
                
                {/* Feature cards */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Card 1 */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Card className="relative h-full bg-background/80 backdrop-blur-xl border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                      <CardContent className="p-8">
                        <div className="relative w-16 h-16 mb-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                          <div className="relative w-full h-full bg-background rounded-2xl flex items-center justify-center border border-primary/20">
                            <Heart className="w-8 h-8 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                          Von Menschen, für Menschen
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Neben der individuellen gesundheitlichen Situation nehmen wir Rücksicht auf ethnische, kulturelle, soziale und religiöse Bedürfnisse. So schaffen wir einen Rundum-Wohlfühlfaktor.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Card className="relative h-full bg-background/80 backdrop-blur-xl border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                      <CardContent className="p-8">
                        <div className="relative w-16 h-16 mb-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/60 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                          <div className="relative w-full h-full bg-background rounded-2xl flex items-center justify-center border border-accent/20">
                            <Phone className="w-8 h-8 text-accent-foreground" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                          Immer erreichbar
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Bei Notfällen sind wir auch außerhalb der Öffnungszeiten 24 Stunden erreichbar. Dank langjähriger Erfahrung garantieren wir eine gesicherte und hohe Qualität für jeden Pflegegrad.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Leistungen */}
          <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
            
            <div className="container mx-auto px-4 relative z-10">
              {/* Section header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span>Leistungsübersicht</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Unsere
                  </span>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Leistungen</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Wir haben ein umfassendes Leistungsspektrum geschaffen, das nicht nur die klassischen Anforderungen der Grundpflege abdeckt, sondern auch die Herausforderungen der anspruchsvollen, medizinischen Versorgung erfüllt.
                </p>
              </div>
              
              {/* Service cards grid */}
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
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
                        <h3 className="text-2xl font-display font-bold text-foreground">
                          Grundpflege
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {grundpflegeLeistungen.map((leistung, index) => (
                          <li 
                            key={index} 
                            className="flex items-start gap-3 text-muted-foreground group/item hover:text-foreground transition-colors"
                            style={{ animationDelay: `${index * 50}ms` }}
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
                            <Shield className="w-7 h-7 text-accent-foreground" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-display font-bold text-foreground">
                          Behandlungspflege
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {behandlungspflegeLeistungen.map((leistung, index) => (
                          <li 
                            key={index} 
                            className="flex items-start gap-3 text-muted-foreground group/item hover:text-foreground transition-colors"
                            style={{ animationDelay: `${index * 50}ms` }}
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

              {/* Intensivpflege highlight card */}
              <div className="max-w-4xl mx-auto">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <Card className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 backdrop-blur-xl border-primary/30 rounded-3xl overflow-hidden">
                    <CardContent className="p-8 md:p-10">
                      <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl animate-glow" />
                          <div className="relative w-full h-full bg-background/90 rounded-2xl flex items-center justify-center border border-primary/30">
                            <Users className="w-8 h-8 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                            Intensivpflege & Serviceleistungen
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            Im Rahmen der Behandlungspflege können Sie auch die Intensivpflege mit Heimbeatmung wählen. Unsere hochqualifizierten Fachkräfte übernehmen lebensnotwendige Maßnahmen wie die Überwachung und Vitalisierung des Patienten oder Lagerungsbehandlungen und Mobilisation.
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            Zusätzlich können Sie weitere Serviceleistungen buchen: Hilfe bei Antragstellungen, Bestellung von Medikamenten und Beratung in sozialen und pflegerischen Fragen.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
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
                  <Heart className="w-4 h-4" />
                  <span>Mit Herz an Ihrer Seite</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-8">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Pflegedienst in
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                    Bad Vilbel
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                  Egal welche Anforderungen Sie mit Ihrer individuellen Situation an einen Pflegedienst in Bad Vilbel stellen, wir finden garantiert die richtige Lösung für Sie. Unser Pflegedienst ist von sämtlichen Pflege- und Krankenkassen zugelassen.
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
                      question: "Wie arbeitet der Avyta Pflegedienst Bad Vilbel?",
                      answer: "Beim Avyta Pflegedienst in Bad Vilbel legen wir Wert auf echte Menschlichkeit. Der soziale, ethische, kulturelle und religiöse Kontext eines jeden Patienten wird bei unseren Pflegeleistungen stets mitberücksichtigt, ganz nach unserem Motto 'Von Menschen, für Menschen'."
                    },
                    {
                      question: "Welche Kosten fallen für einen Pflegedienst in Bad Vilbel an?",
                      answer: "Die Kosten richten sich nach dem individuellen Pflegebedarf und Pflegegrad. Wir beraten Sie gerne zu den Kosten und möglichen Finanzierungswegen über die Pflegekasse."
                    },
                    {
                      question: "Welche Leistungen bietet der Pflegedienst in Bad Vilbel?",
                      answer: "Wir bieten ein umfassendes Spektrum von der Grundpflege über die Behandlungspflege bis hin zur Intensivpflege mit Heimbeatmung. Zusätzlich unterstützen wir Sie mit Serviceleistungen wie Hilfe bei Antragstellungen und Beratung."
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

export default BadVilbel;