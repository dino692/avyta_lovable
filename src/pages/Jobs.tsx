import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { 
  Briefcase, 
  Users, 
  Heart, 
  Clock, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Home,
  Euro,
  Calendar,
  GraduationCap,
  Car,
  Shield,
  Smile,
  Trophy,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import JobCTADropdownButton from "@/components/JobCTADropdownButton";

const jobCategories = [
  {
    title: "Pflege Jobs",
    href: "/jobs/pflege-jobs",
    description: "Alle Pflegestellen im Überblick",
    icon: Heart,
    count: "4 Stellen",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    title: "Alle Stellenangebote",
    href: "/karriere/stellenangebote-pflege-frankfurt",
    description: "Übersicht aller offenen Positionen bei AVYTA",
    icon: Briefcase,
    count: "5 Stellen",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Pflegefachkraft",
    href: "/karriere/pflegefachkraft-frankfurt",
    description: "Examinierte Fachkräfte gesucht",
    icon: Sparkles,
    count: "1 Stelle",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Pflegehilfskraft",
    href: "/karriere/pflegehilfskraft-frankfurt",
    description: "Mit Basisqualifikation in der Pflege",
    icon: Users,
    count: "1 Stelle",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Pflegehelfer/in",
    href: "/karriere/pflegehelfer-frankfurt",
    description: "Einstieg in die Pflege ohne Ausbildung",
    icon: Heart,
    count: "2 Stellen",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Haushaltshilfe",
    href: "/karriere/haushaltshilfe-frankfurt",
    description: "Unterstützung im Alltag",
    icon: Home,
    count: "1 Stelle",
    gradient: "from-cyan-500 to-blue-600",
  },
];

const benefits = [
  {
    icon: Euro,
    title: "Überdurchschnittliche Vergütung",
    description: "Faire Bezahlung über Branchendurchschnitt",
  },
  {
    icon: Clock,
    title: "Flexible Arbeitszeiten",
    description: "Vereinbarkeit von Beruf und Familie",
  },
  {
    icon: Shield,
    title: "Unbefristeter Vertrag",
    description: "Sichere Zukunftsperspektive",
  },
  {
    icon: GraduationCap,
    title: "Fortbildungsmöglichkeiten",
    description: "Kontinuierliche Weiterentwicklung",
  },
  {
    icon: Users,
    title: "Familiäres Team",
    description: "Wertschätzende Arbeitsatmosphäre",
  },
  {
    icon: Calendar,
    title: "30 Tage Urlaub",
    description: "Mehr Zeit für Erholung",
  },
  {
    icon: Car,
    title: "Firmenwagen möglich",
    description: "Mobilität für Ihre Touren",
  },
  {
    icon: Smile,
    title: "Betriebliche Altersvorsorge",
    description: "Vorsorge für die Zukunft",
  },
];

const stats = [
  { value: "20+", label: "Mitarbeiter", icon: Users },
  { value: "12+", label: "Jahre Erfahrung", icon: Trophy },
  { value: "500+", label: "Zufriedene Patienten", icon: Heart },
  { value: "98%", label: "Mitarbeiterzufriedenheit", icon: Star },
];

const faqs = [
  {
    question: "Welche Qualifikationen benötige ich?",
    answer: "Je nach Position variieren die Anforderungen. Für Pflegefachkräfte benötigen Sie eine abgeschlossene Ausbildung. Für Pflegehelfer und Haushaltshilfen bieten wir auch Quereinsteigern Möglichkeiten mit entsprechender Einarbeitung.",
  },
  {
    question: "Wie läuft der Bewerbungsprozess ab?",
    answer: "Nach Eingang Ihrer Bewerbung melden wir uns innerhalb von 48 Stunden. Anschließend laden wir Sie zu einem persönlichen Gespräch ein, bei dem Sie unser Team kennenlernen können.",
  },
  {
    question: "Gibt es Teilzeitmöglichkeiten?",
    answer: "Ja, wir bieten flexible Arbeitszeitmodelle an. Ob Vollzeit, Teilzeit oder Minijob – wir finden gemeinsam die passende Lösung für Sie.",
  },
  {
    question: "Welche Fortbildungen werden angeboten?",
    answer: "Wir investieren in die Weiterentwicklung unserer Mitarbeiter. Regelmäßige interne und externe Schulungen, Fachfortbildungen und Zertifizierungen gehören bei uns dazu.",
  },
  {
    question: "Wie ist das Arbeitsklima bei AVYTA?",
    answer: "Bei AVYTA legen wir großen Wert auf ein familiäres und wertschätzendes Arbeitsumfeld. Flache Hierarchien, offene Kommunikation und gegenseitige Unterstützung prägen unseren Alltag.",
  },
];

const Jobs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Pflege Jobs Frankfurt: Ihre Karriere bei AVYTA | Stellenangebote</title>
        <meta name="description" content="Pflege Jobs in Frankfurt am Main bei AVYTA. Stellenangebote für Pflegefachkräfte, Pflegehelfer und Haushaltshilfen. Überdurchschnittliche Vergütung, flexible Arbeitszeiten, familiäres Team. Jetzt bewerben!" />
        <meta name="keywords" content="Pflege Jobs Frankfurt, Pflegefachkraft Stellenangebote Frankfurt, Pflegehelfer Jobs, Karriere Pflegedienst Frankfurt" />
        <meta property="og:title" content="Pflege Jobs Frankfurt: Ihre Karriere bei AVYTA" />
        <meta property="og:description" content="Die Wichtigkeit der Ambulanten Pflege steigt! Bewerben Sie sich jetzt bei AVYTA für ein familiäres Arbeitsumfeld mit flacher Hierarchie." />
        <link rel="canonical" href="https://www.avyta.de/karriere/uebersicht" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/10 overflow-visible">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
            
            {/* Floating Elements */}
            <div className="absolute top-32 right-1/4 animate-bounce" style={{ animationDuration: "3s" }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
            </div>
            <div className="absolute bottom-40 left-1/4 animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm flex items-center justify-center">
                <Heart className="w-7 h-7 text-accent" />
              </div>
            </div>
            <div className="absolute top-1/3 left-20 animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "1s" }}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 backdrop-blur-sm flex items-center justify-center">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div 
              className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-semibold mb-8 border border-primary/20">
                <Sparkles className="w-4 h-4" />
                Karriere bei AVYTA
                <Sparkles className="w-4 h-4" />
              </span>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
                <span className="text-foreground">Werden Sie Teil</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                  unseres Teams
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
                Bei AVYTA arbeiten Sie in einem wertschätzenden Umfeld mit flexiblen Arbeitszeiten, 
                überdurchschnittlicher Vergütung und echten Entwicklungsmöglichkeiten.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <JobCTADropdownButton 
                  size="lg" 
                  variant="hero"
                  jobTitle="Allgemeine Bewerbung"
                />
                <Button variant="outline" size="lg" asChild className="group">
                  <Link to="/karriere/stellenangebote-pflege-frankfurt">
                    Alle Stellen ansehen
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-[bounce_1s_ease-in-out_infinite]" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`relative group transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative p-6 md:p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl text-center overflow-hidden">
                    {/* Animated Ring */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/20 rounded-full animate-ping" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4" />
                Offene Positionen
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                Finden Sie Ihren{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Traumjob
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Entdecken Sie unsere vielfältigen Karrieremöglichkeiten in der ambulanten Pflege
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {jobCategories.map((category, index) => (
                <Link
                  key={category.href}
                  to={category.href}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-full p-8 bg-background rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                    {/* Glow Effect */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-20 blur-sm`} />
                    </div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div 
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                      >
                        <category.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {category.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${category.gradient} text-white text-sm font-medium`}>
                          {category.count}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Particles */}
                    {hoveredCard === index && (
                      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} animate-ping`}
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animationDelay: `${i * 0.2}s`,
                              animationDuration: "1.5s",
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 via-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <CheckCircle2 className="w-4 h-4" />
                Ihre Vorteile
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                Das bieten wir{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Ihnen
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Bei AVYTA profitieren Sie von zahlreichen Vorteilen, die Ihren Arbeitsalltag bereichern
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  <div className="relative h-full p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl text-center overflow-hidden">
                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <benefit.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Animated Ring */}
                    {hoveredBenefit === index && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-primary/20 rounded-full animate-ping" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why AVYTA Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <Heart className="w-4 h-4" />
                    Warum AVYTA?
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                    Mehr als nur ein{" "}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Arbeitsplatz
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Bei AVYTA sind Sie nicht nur eine Nummer. Wir schätzen jeden einzelnen Mitarbeiter 
                    und investieren in Ihre persönliche und berufliche Entwicklung.
                  </p>

                  <div className="space-y-4">
                    {[
                      "Flache Hierarchien und offene Kommunikation",
                      "Individuelle Einarbeitung und Mentoring",
                      "Regelmäßige Teamevents und Zusammenkünfte",
                      "Moderne Arbeitsmittel und digitale Dokumentation",
                      "Gesundheitsförderung mit EGYM Wellpass",
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Element */}
                <div className="relative">
                  <div className="relative aspect-square max-w-md mx-auto">
                    {/* Decorative Rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/10 animate-pulse" />
                    <div className="absolute inset-8 rounded-full border-2 border-accent/10 animate-pulse" style={{ animationDelay: "0.5s" }} />
                    <div className="absolute inset-16 rounded-full border-2 border-primary/10 animate-pulse" style={{ animationDelay: "1s" }} />
                    
                    {/* Center Content */}
                    <div className="absolute inset-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
                      <div className="text-center text-white">
                        <div className="text-4xl font-bold mb-2">98%</div>
                        <div className="text-sm opacity-90">Zufriedenheit</div>
                      </div>
                    </div>

                    {/* Floating Cards */}
                    <div className="absolute -top-4 right-0 p-4 bg-background rounded-2xl shadow-xl border border-border/50 animate-bounce" style={{ animationDuration: "3s" }}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground">Team</div>
                          <div className="text-xs text-muted-foreground">50+ Mitarbeiter</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-4 left-0 p-4 bg-background rounded-2xl shadow-xl border border-border/50 animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground">Bewertung</div>
                          <div className="text-xs text-muted-foreground">5 Sterne Arbeitgeber</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Jetzt bewerben
              </div>
              
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Werden Sie Teil eines Teams, das Pflege mit Herz lebt. Wir freuen uns auf Ihre Bewerbung!
              </p>

              <div className="flex justify-center">
                <JobCTADropdownButton 
                  size="lg"
                  variant="hero"
                  jobTitle="Allgemeine Bewerbung"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  Häufige Fragen
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Fragen & Antworten
                </h2>
                <p className="text-muted-foreground">
                  Hier finden Sie Antworten auf die häufigsten Fragen rund um die Karriere bei AVYTA
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-background rounded-2xl border border-border/50 px-6 overflow-hidden hover:border-primary/30 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 [&[data-state=open]]:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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
    </>
  );
};

export default Jobs;
