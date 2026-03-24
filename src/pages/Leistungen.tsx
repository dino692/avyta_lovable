import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Stethoscope, Home, Activity, Utensils, Clock, FileText, UserCheck, Check, HeartPulse, Sparkles, Shield, Phone, Brain, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import CTADropdownButton from "@/components/CTADropdownButton";

// Service Images
import behandlungspflegeImg from "@/assets/services/behandlungspflege.jpg";
import grundpflegeImg from "@/assets/services/grundpflege.jpg";
import intensivpflegeImg from "@/assets/services/intensivpflege.jpg";
import haushaltshilfeImg from "@/assets/services/haushaltshilfe.jpg";
import vierundzwanzigImg from "@/assets/services/24-stunden-pflege.jpg";
import pflegeberatungImg from "@/assets/services/pflegeberatung.jpg";
import verhinderungspflegeImg from "@/assets/services/verhinderungspflege.jpg";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";

const services = [
  {
    id: "behandlungspflege",
    icon: Stethoscope,
    title: "Behandlungspflege",
    shortDescription: "Medizinische Versorgung nach ärztlicher Verordnung",
    description: "Medizinische Versorgung nach ärztlicher Verordnung: Wundversorgung, Injektionen, Verbandswechsel und mehr.",
    details: [
      "Wundversorgung und Verbandswechsel",
      "Injektionen und Infusionen",
      "Blutdruck- und Blutzuckermessung",
      "Medikamentengabe nach Anordnung",
      "Katheterpflege",
      "Stomapflege",
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    image: behandlungspflegeImg,
  },
  {
    id: "grundpflege",
    icon: Home,
    title: "Grundpflege",
    shortDescription: "Unterstützung bei alltäglichen Verrichtungen",
    description: "Unterstützung bei der Körperpflege, An- und Auskleiden, Mobilität und allen alltäglichen Verrichtungen.",
    details: [
      "Körperpflege und Hygiene",
      "An- und Auskleiden",
      "Hilfe bei der Nahrungsaufnahme",
      "Mobilisation und Lagerung",
      "Begleitung zu Arztterminen",
      "Aktivierende Pflege",
    ],
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    image: grundpflegeImg,
  },
  {
    id: "ausserklinische-intensivpflege-frankfurt-am-main",
    icon: Activity,
    title: "Intensivpflege",
    shortDescription: "Spezialisierte Betreuung rund um die Uhr",
    description: "Spezialisierte Betreuung für beatmungspflichtige Patienten und komplexe Pflegesituationen.",
    details: [
      "24-Stunden-Betreuung",
      "Beatmungspflege",
      "Tracheostoma-Versorgung",
      "Überwachung der Vitalzeichen",
      "Notfallmanagement",
      "Spezielle Wundversorgung",
    ],
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-500/10",
    image: intensivpflegeImg,
  },
  {
    id: "haushaltshilfe",
    icon: Utensils,
    title: "Haushaltshilfe",
    shortDescription: "Hilfe im Haushalt und Alltag",
    description: "Hilfe im Haushalt: Einkaufen, Kochen, Reinigung und Organisation des Alltags.",
    details: [
      "Einkaufen und Besorgungen",
      "Mahlzeitenzubereitung",
      "Wohnungsreinigung",
      "Wäschepflege",
      "Begleitung bei Aktivitäten",
      "Administrative Unterstützung",
    ],
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    image: haushaltshilfeImg,
  },
  {
    id: "24-stunden-pflege",
    icon: Clock,
    title: "24-Stunden-Pflege",
    shortDescription: "Rund-um-die-Uhr Betreuung zu Hause",
    description: "Rund-um-die-Uhr Betreuung zu Hause – die Alternative zum Pflegeheim.",
    details: [
      "Betreuung rund um die Uhr",
      "Hauswirtschaftliche Versorgung",
      "Gesellschaft und Aktivierung",
      "Unterstützung im Alltag",
      "Flexible Betreuungsmodelle",
      "Entlastung pflegender Angehöriger",
    ],
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    image: vierundzwanzigImg,
  },
  {
    id: "pflegeberatung-frankfurt",
    icon: FileText,
    title: "Pflegeberatung",
    shortDescription: "Kostenlose Beratung zu Pflegeleistungen",
    description: "Kostenlose Beratung zu Pflegeleistungen, Pflegegrad und Ansprüchen.",
    details: [
      "Beratung nach § 37.3 SGB XI",
      "Unterstützung bei Pflegegradantrag",
      "Informationen zu Leistungsansprüchen",
      "Hilfe bei Widerspruchsverfahren",
      "Vermittlung weiterer Hilfsangebote",
      "Entlastung pflegender Angehöriger",
    ],
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500/10",
    image: pflegeberatungImg,
  },
  {
    id: "verhinderungspflege-frankfurt",
    icon: UserCheck,
    title: "Verhinderungspflege",
    shortDescription: "Vertretung für pflegende Angehörige",
    description: "Professionelle Vertretung für pflegende Angehörige bei Urlaub oder Krankheit.",
    details: [
      "Stundenweise Entlastung",
      "Tageweise Vertretung",
      "Urlaubsvertretung",
      "Vertretung bei Krankheit",
      "Flexible Einsatzzeiten",
      "Kombinierbar mit Kurzzeitpflege",
    ],
    color: "from-cyan-500 to-teal-500",
    bgColor: "bg-cyan-500/10",
    image: verhinderungspflegeImg,
  },
  {
    id: "demenz-wg-frankfurt",
    icon: Brain,
    title: "Demenz WG",
    shortDescription: "Betreute Wohngemeinschaft für Demenz",
    description: "Betreute Wohngemeinschaft für Menschen mit Demenz – 24/7 Betreuung in familiärer Atmosphäre in Frankfurt und Bad Vilbel.",
    details: [
      "24/7 professionelle Betreuung",
      "Familiäre Atmosphäre",
      "Geschultes Pflegepersonal",
      "Strukturierter Tagesablauf",
      "Aktivierende Beschäftigung",
      "Individuelle Pflegekonzepte",
    ],
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-500/10",
    image: grundpflegeImg,
  },
  {
    id: "betreutes-wohnen-frankfurt",
    icon: Building2,
    title: "Betreutes Wohnen",
    shortDescription: "Selbstbestimmt leben mit Unterstützung",
    description: "Selbstbestimmt leben mit professioneller Pflege und Betreuung – die Alternative zum Pflegeheim in Frankfurt und Bad Vilbel.",
    details: [
      "Eigenständiges Wohnen",
      "Barrierefreie Wohnungen",
      "24/7 Notrufsystem",
      "Hauswirtschaftliche Hilfe",
      "Pflegerische Versorgung",
      "Flexible Betreuungspakete",
    ],
    color: "from-indigo-500 to-violet-500",
    bgColor: "bg-indigo-500/10",
    image: pflegeberatungImg,
  },
];

const stats = [
  { value: "9+", label: "Leistungsbereiche", icon: Sparkles },
  { value: "24/7", label: "Erreichbarkeit", icon: Phone },
  { value: "100%", label: "Individuell", icon: HeartPulse },
  { value: "Top", label: "Qualität", icon: Shield },
];

const Leistungen = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Unsere Leistungen | Ambulante Pflege Frankfurt | AVYTA</title>
        <meta name="description" content="Professionelle Pflegeleistungen in Frankfurt: Grundpflege, Behandlungspflege, Intensivpflege, 24-Stunden-Pflege, Verhinderungspflege, Haushaltshilfe und Pflegeberatung. Jetzt beraten lassen!" />
        <meta name="keywords" content="Ambulante Pflege Leistungen Frankfurt, Grundpflege, Behandlungspflege, Intensivpflege, 24 Stunden Pflege, Pflegeberatung" />
        <meta property="og:title" content="Unsere Leistungen | AVYTA Ambulanter Pflegedienst" />
        <meta property="og:description" content="Von der Grundpflege bis zur spezialisierten Intensivpflege – alle Leistungen aus einer Hand." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <link rel="canonical" href="https://www.avyta.de/leistungen" />
      </Helmet>
      
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Header />
      
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full mb-6 md:mb-8">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary animate-pulse" />
                <span className="text-sm md:text-base font-medium text-primary">Professionelle Pflegeleistungen</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 md:mb-8 leading-tight">
                Pflege, die{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                    bewegt
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-3 md:h-4 bg-primary/20 -rotate-1 rounded" />
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
                Von der Grundpflege bis zur spezialisierten Intensivpflege – wir bieten 
                alle Leistungen aus einer Hand, individuell auf Ihre Bedürfnisse abgestimmt.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="group relative p-4 md:p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section ref={sectionRef} className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 md:mb-6">
                Alle Leistungen im Überblick
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Klicken Sie auf eine Leistung, um mehr zu erfahren
              </p>
            </div>

            {/* Services Cards - Compact like Blog Categories */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isSelected = selectedService.id === service.id;
                
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    onMouseEnter={() => setHoveredCard(service.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`group relative transition-all duration-300 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className={`relative flex items-center gap-3 px-5 py-3 rounded-2xl border-2 transition-all duration-300 ${
                      isSelected 
                        ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                        : "border-border/50 bg-card hover:border-primary/50 hover:shadow-lg"
                    }`}>
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isSelected 
                          ? "bg-primary-foreground/20" 
                          : `bg-gradient-to-br ${service.color}`
                      }`}>
                        <Icon className={`w-5 h-5 ${isSelected ? "text-primary-foreground" : "text-white"}`} />
                      </div>
                      
                      {/* Text */}
                      <div className="text-left">
                        <span className={`font-semibold text-sm md:text-base transition-colors duration-300 ${
                          isSelected ? "text-primary-foreground" : "text-foreground"
                        }`}>
                          {service.title}
                        </span>
                      </div>

                      {/* Arrow indicator on hover/selected */}
                      <ArrowRight className={`w-4 h-4 transition-all duration-300 ${
                        isSelected 
                          ? "text-primary-foreground opacity-100 translate-x-0" 
                          : "text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      }`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Service Details Panel */}
            <div className="relative">
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${selectedService.color} opacity-5 blur-3xl rounded-3xl`} />
              
              <Card className="relative overflow-hidden border-2 border-primary/20 bg-card/80 backdrop-blur-sm">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full" />
                
                <CardContent className="relative z-10 p-6 md:p-10 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Side - Info with Image */}
                    <div>
                      {/* Service Image */}
                      <div className="relative mb-6 md:mb-8 rounded-2xl overflow-hidden group">
                        <img 
                          src={selectedService.image} 
                          alt={selectedService.title}
                          className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`} />
                        <div className="absolute bottom-4 left-4 flex items-center gap-3">
                          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center shadow-lg`}>
                            <selectedService.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                          </div>
                          <div>
                            <span className="text-xs text-white/70 font-medium">Ausgewählte Leistung</span>
                            <h2 className="text-xl md:text-2xl font-display font-bold text-white">
                              {selectedService.title}
                            </h2>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                        {selectedService.description}
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                        <CTADropdownButton />
                        <Button size="lg" variant="outline" className="group" asChild>
                          <Link to={`/leistungen/${selectedService.id}`}>
                            Mehr erfahren
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Right Side - Details */}
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        Was wir bieten
                      </h3>
                      
                      <div className="grid gap-3 md:gap-4">
                        {selectedService.details.map((detail, index) => (
                          <div 
                            key={index}
                            className="group flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:shadow-md"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                              <Check className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm md:text-base text-foreground font-medium">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Ihre Vorteile
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Warum AVYTA?
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                Wir setzen auf Qualität, Empathie und individuelle Betreuung
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Check,
                  title: "Kostenlose Beratung",
                  description: "Wir beraten Sie unverbindlich zu allen Leistungen und Fördermöglichkeiten.",
                  gradient: "from-emerald-500 to-teal-500"
                },
                {
                  icon: HeartPulse,
                  title: "Individuelle Pflege",
                  description: "Jeder Pflegeplan wird individuell auf Ihre Bedürfnisse abgestimmt.",
                  gradient: "from-rose-500 to-pink-500"
                },
                {
                  icon: Activity,
                  title: "24/7 Erreichbarkeit",
                  description: "Wir sind rund um die Uhr für Sie da – auch an Wochenenden und Feiertagen.",
                  gradient: "from-blue-500 to-indigo-500"
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="group relative p-8 md:p-10 rounded-2xl md:rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
                >
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 rounded-2xl md:rounded-3xl transition-opacity duration-500`} />
                  
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <benefit.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground text-center mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-center text-base md:text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent" />
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full" />
            <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white rounded-full" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Bereit für professionelle Pflege?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 md:mb-10">
              Kontaktieren Sie uns für eine kostenlose und unverbindliche Beratung. 
              Wir finden gemeinsam die beste Lösung für Ihre Situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTADropdownButton variant="default" />
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/kontakt">
                  Kontakt aufnehmen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <NewsletterSection />
        <Footer />
      </div>
    </>
  );
};

export default Leistungen;
