import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Stethoscope, Home, Activity, Utensils, Clock, FileText, UserCheck, Check, HeartPulse, Sparkles, ChevronDown, Shield, Star, Zap, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import CTADropdownButton from "@/components/CTADropdownButton";

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
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    shadowColor: "shadow-rose-500/30",
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
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    shadowColor: "shadow-blue-500/30",
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
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    shadowColor: "shadow-violet-500/30",
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
    gradient: "from-amber-500 via-orange-500 to-red-500",
    shadowColor: "shadow-amber-500/30",
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
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    shadowColor: "shadow-emerald-500/30",
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
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    shadowColor: "shadow-sky-500/30",
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
    gradient: "from-pink-500 via-rose-500 to-red-500",
    shadowColor: "shadow-pink-500/30",
  },
];

const features = [
  {
    icon: Shield,
    title: "Kostenlose Beratung",
    description: "Wir beraten Sie unverbindlich zu allen Leistungen und Fördermöglichkeiten.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: HeartPulse,
    title: "Individuelle Pflege",
    description: "Jeder Pflegeplan wird individuell auf Ihre Bedürfnisse abgestimmt.",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: Phone,
    title: "24/7 Erreichbarkeit",
    description: "Wir sind rund um die Uhr für Sie da – auch an Wochenenden und Feiertagen.",
    gradient: "from-blue-500 to-cyan-500",
  },
];

const Leistungen = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleServiceSelect = (service: typeof services[0]) => {
    if (service.id === selectedService.id) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedService(service);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <>
      <Helmet>
        <title>Unsere Leistungen | Ambulante Pflege Frankfurt | AVYTA</title>
        <meta name="description" content="Professionelle Pflegeleistungen in Frankfurt: Grundpflege, Behandlungspflege, Intensivpflege, 24-Stunden-Pflege, Verhinderungspflege, Haushaltshilfe und Pflegeberatung. Jetzt beraten lassen!" />
        <meta name="keywords" content="Ambulante Pflege Leistungen Frankfurt, Grundpflege, Behandlungspflege, Intensivpflege, 24 Stunden Pflege, Pflegeberatung" />
        <meta property="og:title" content="Unsere Leistungen | AVYTA Ambulanter Pflegedienst" />
        <meta property="og:description" content="Von der Grundpflege bis zur spezialisierten Intensivpflege – alle Leistungen aus einer Hand." />
        <link rel="canonical" href="https://www.avyta.de/leistungen" />
      </Helmet>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Header />
      
        {/* ========== HERO SECTION - Ultra Modern ========== */}
        <section className="relative pt-32 pb-24 lg:pb-32 overflow-hidden">
          {/* Multi-layer gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.08),transparent_60%)]" />
          
          {/* Animated morphing blobs */}
          <div className="absolute top-10 left-[5%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 animate-morph-blob blur-3xl opacity-50" />
          <div className="absolute bottom-10 right-[5%] w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-gradient-to-br from-accent/20 via-primary/10 to-accent/10 animate-morph-blob blur-3xl opacity-40" style={{ animationDelay: "-5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-primary/5 via-accent/8 to-primary/5 rounded-full blur-3xl animate-glow" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          {/* Grain texture */}
          <div className="absolute inset-0 grain-overlay" />
          
          {/* Floating decorative elements */}
          <div className="absolute top-40 right-[12%] hidden lg:block">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/10 animate-float-slow flex items-center justify-center">
              <HeartPulse className="w-7 h-7 text-primary/60" />
            </div>
          </div>
          <div className="absolute bottom-32 left-[8%] hidden lg:block">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-accent/10 animate-float-slow flex items-center justify-center" style={{ animationDelay: "-3s" }}>
              <Stethoscope className="w-6 h-6 text-accent/60" />
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Premium floating badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-background/60 backdrop-blur-2xl border border-primary/20 rounded-full text-sm font-semibold mb-10 shadow-2xl shadow-primary/10 animate-fade-in group hover:border-primary/40 transition-all duration-500 cursor-default">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-accent blur-sm animate-glow" />
                </div>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">Unsere Leistungen</span>
                <Sparkles className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform duration-300" />
              </div>
              
              {/* Main headline */}
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 animate-fade-up tracking-tight leading-[1.1]">
                <span className="text-foreground">Professionelle Pflege </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">für jeden Bedarf</span>
                  {/* Underline decoration */}
                  <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-60 animate-gradient-x bg-[length:200%_auto]" />
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: "0.15s" }}>
                Von der{" "}
                <span className="relative inline-block">
                  <span className="text-primary font-semibold">Grundpflege</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/40 rounded-full" />
                </span>{" "}
                bis zur spezialisierten{" "}
                <span className="relative inline-block">
                  <span className="text-accent font-semibold">Intensivpflege</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent/40 rounded-full" />
                </span>{" "}
                – alle Leistungen aus einer Hand.
              </p>
              
              {/* Animated decorative lines */}
              <div className="flex justify-center gap-3 mt-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                <div className="w-10 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
                <div className="w-5 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
              </div>
              
              {/* Scroll indicator */}
              <div className="mt-14 animate-fade-up" style={{ animationDelay: "0.5s" }}>
                <div className="inline-flex flex-col items-center gap-2 text-muted-foreground/60 group cursor-pointer hover:text-primary transition-colors duration-300">
                  <span className="text-xs font-medium tracking-widest uppercase">Leistungen erkunden</span>
                  <ChevronDown className="w-5 h-5 animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== SERVICES SELECTION - Ultra Premium ========== */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          {/* Floating blobs */}
          <div className="absolute top-40 left-[5%] w-[200px] h-[200px] bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl animate-float-slow opacity-40" />
          <div className="absolute bottom-40 right-[5%] w-[250px] h-[250px] bg-gradient-to-br from-accent/10 to-primary/5 rounded-full blur-3xl animate-float-slow opacity-30" style={{ animationDelay: "-4s" }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Service List - Left Side */}
              <div className="lg:col-span-5 xl:col-span-4">
                <div className="sticky top-28">
                  {/* Section label */}
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-background/80 backdrop-blur-xl border border-primary/20 rounded-full text-sm font-semibold mb-8 shadow-lg">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-primary">Wählen Sie eine Leistung</span>
                  </div>
                  
                  {/* Mobile: Horizontal Scrollable Pills */}
                  <div className="lg:hidden overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
                    <div className="flex gap-3">
                      {services.map((service, index) => {
                        const Icon = service.icon;
                        const isSelected = selectedService.id === service.id;
                        
                        return (
                          <button
                            key={service.id}
                            onClick={() => handleServiceSelect(service)}
                            className={`relative group flex items-center gap-2 px-5 py-3 rounded-2xl transition-all duration-500 shrink-0 ${
                              isSelected 
                                ? "bg-primary text-primary-foreground shadow-xl shadow-primary/30" 
                                : "bg-background/80 backdrop-blur-xl border border-border/50 hover:border-primary/30"
                            }`}
                          >
                            {/* Glow effect for selected */}
                            {isSelected && (
                              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-40 -z-10" />
                            )}
                            
                            <Icon className={`w-5 h-5 ${isSelected ? "text-primary-foreground" : "text-primary"}`} />
                            <span className={`text-sm font-semibold whitespace-nowrap ${isSelected ? "text-primary-foreground" : "text-foreground"}`}>
                              {service.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Desktop: Vertical List */}
                  <div className="hidden lg:flex flex-col gap-3">
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      const isSelected = selectedService.id === service.id;
                      
                      return (
                        <button
                          key={service.id}
                          onClick={() => handleServiceSelect(service)}
                          className={`group relative w-full flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-500 ${
                            isSelected 
                              ? "bg-background shadow-2xl" 
                              : "bg-background/60 backdrop-blur-xl hover:bg-background/90 border border-transparent hover:border-primary/20"
                          }`}
                          style={{ animationDelay: `${index * 0.05}s` }}
                        >
                          {/* Gradient border for selected */}
                          {isSelected && (
                            <>
                              <div className={`absolute -inset-[2px] bg-gradient-to-r ${service.gradient} rounded-2xl opacity-70`} />
                              <div className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-30`} />
                            </>
                          )}
                          
                          <div className={`relative z-10 flex items-center gap-4 w-full ${isSelected ? "bg-background rounded-[14px] p-4 -m-4" : ""}`}>
                            {/* Icon container */}
                            <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                              isSelected 
                                ? `bg-gradient-to-br ${service.gradient} shadow-lg ${service.shadowColor}` 
                                : "bg-primary/10 group-hover:bg-primary/15"
                            }`}>
                              <Icon className={`w-7 h-7 ${isSelected ? "text-white" : "text-primary"}`} />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <h3 className={`font-display font-bold text-lg transition-colors duration-300 ${isSelected ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"}`}>
                                {service.title}
                              </h3>
                              <p className={`text-sm truncate transition-colors duration-300 ${isSelected ? "text-muted-foreground" : "text-muted-foreground/70 group-hover:text-muted-foreground"}`}>
                                {service.shortDescription}
                              </p>
                            </div>
                            
                            {/* Arrow indicator */}
                            <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                              isSelected 
                                ? "text-primary opacity-100 translate-x-0" 
                                : "text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                            }`} />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Service Details - Right Side */}
              <div className="lg:col-span-7 xl:col-span-8" ref={detailsRef}>
                <div className={`relative transition-all duration-300 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
                  {/* Card glow effect */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${selectedService.gradient} rounded-[3rem] blur-3xl opacity-20`} />
                  
                  {/* Gradient border */}
                  <div className={`absolute -inset-[2px] bg-gradient-to-br ${selectedService.gradient} rounded-3xl opacity-40`} />
                  
                  {/* Main card */}
                  <div className="relative bg-background/95 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl">
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shine pointer-events-none" style={{ animationDuration: "3s" }} />
                    
                    {/* Inner gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50" />
                    
                    <div className="relative p-8 md:p-10 lg:p-12">
                      {/* Service Header */}
                      <div className="flex flex-col sm:flex-row items-start gap-6 mb-10">
                        {/* Icon with glow */}
                        <div className="relative shrink-0">
                          <div className={`absolute inset-0 bg-gradient-to-br ${selectedService.gradient} rounded-2xl blur-xl opacity-50`} />
                          <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center shadow-2xl ${selectedService.shadowColor}`}>
                            <selectedService.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          {/* Role badge */}
                          <div className="mb-3">
                            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${selectedService.gradient} text-white shadow-lg ${selectedService.shadowColor}`}>
                              <Star className="w-3 h-3" />
                              Leistung
                            </span>
                          </div>
                          
                          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
                            {selectedService.title}
                          </h2>
                          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            {selectedService.description}
                          </p>
                        </div>
                      </div>

                      {/* Service Details List */}
                      <div className="mb-10">
                        <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center`}>
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          Was wir bieten
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {selectedService.details.map((detail, index) => (
                            <div 
                              key={index}
                              className="group relative flex items-center gap-4 p-4 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-up"
                              style={{ animationDelay: `${index * 0.05}s` }}
                            >
                              {/* Hover glow */}
                              <div className={`absolute -inset-1 bg-gradient-to-r ${selectedService.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                              
                              <div className={`relative w-10 h-10 rounded-xl bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center shadow-lg ${selectedService.shadowColor} shrink-0`}>
                                <Check className="w-5 h-5 text-white" />
                              </div>
                              <span className="relative text-foreground font-medium">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative group">
                          {/* Button glow */}
                          <div className={`absolute -inset-1 bg-gradient-to-r ${selectedService.gradient} rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                          <CTADropdownButton className="relative" />
                        </div>
                        
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="relative group overflow-hidden rounded-xl border-2 border-primary/30 hover:border-primary/50 transition-all duration-300" 
                          asChild
                        >
                          <Link to={`/leistungen/${selectedService.id}`} className="flex items-center gap-2">
                            {/* Shine effect */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            <span className="relative">Mehr erfahren</span>
                            <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FEATURES SECTION - Ultra Premium ========== */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          {/* Multi-layer background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />
          
          {/* Animated blobs */}
          <div className="absolute top-20 right-[10%] w-[300px] h-[300px] bg-gradient-to-br from-primary/15 to-accent/10 rounded-full blur-3xl animate-glow opacity-40" />
          <div className="absolute bottom-20 left-[10%] w-[250px] h-[250px] bg-gradient-to-br from-accent/15 to-primary/10 rounded-full blur-3xl animate-glow opacity-30" style={{ animationDelay: "-2s" }} />
          
          {/* Top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-background/80 backdrop-blur-xl border border-primary/20 rounded-full text-sm font-semibold mb-8 shadow-lg">
                <Shield className="w-4 h-4 text-primary" />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Unsere Vorteile</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
                <span className="text-foreground">Warum </span>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">AVYTA?</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Vertrauen Sie auf unsere Erfahrung und unser Engagement.
              </p>
            </div>
            
            {/* Features grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Card glow */}
                  <div className={`absolute -inset-2 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500`} />
                  
                  {/* Main card */}
                  <div className="relative bg-background/90 backdrop-blur-2xl border border-border/50 rounded-3xl p-8 md:p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:border-primary/30 overflow-hidden">
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    
                    {/* Inner gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon */}
                    <div className="relative mb-6 flex justify-center">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
                        <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                          <feature.icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="relative font-display font-bold text-xl md:text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="relative text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FINAL CTA - Ultra Premium ========== */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="relative max-w-5xl mx-auto">
              {/* Background glow layers */}
              <div className="absolute -inset-8 md:-inset-12 bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 rounded-[4rem] blur-[80px] opacity-30" />
              <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[3rem] blur-3xl opacity-50" />
              
              <div className="relative overflow-hidden rounded-3xl md:rounded-[2.5rem]">
                {/* Main gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
                
                {/* Pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
                
                {/* Animated blobs */}
                <div className="absolute top-0 right-0 w-60 h-60 md:w-80 md:h-80 bg-white/10 rounded-full blur-3xl animate-morph-blob" />
                <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl animate-morph-blob" style={{ animationDelay: "-7s" }} />
                
                {/* Shine sweep effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shine pointer-events-none" style={{ animationDuration: "4s" }} />
                
                <div className="relative p-10 md:p-16 lg:p-20 text-center">
                  {/* Icon */}
                  <div className="relative mb-8 inline-block">
                    <div className="absolute inset-0 bg-white/30 rounded-3xl blur-2xl animate-glow" />
                    <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-white/20 backdrop-blur-2xl flex items-center justify-center border border-white/30 shadow-2xl mx-auto">
                      <HeartPulse className="w-12 h-12 md:w-14 md:h-14 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 tracking-tight">
                    Lassen Sie sich beraten!
                  </h3>
                  <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Wir helfen Ihnen, die passenden Pflegeleistungen für Ihre Situation zu finden – kostenlos und unverbindlich.
                  </p>
                  
                  {/* CTA Button */}
                  <div className="inline-block relative group">
                    {/* Button glow */}
                    <div className="absolute -inset-2 bg-white rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-300 animate-glow" />
                    
                    <div className="relative px-10 py-5 bg-white rounded-2xl font-bold text-primary flex items-center gap-3 shadow-2xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                      {/* Shine sweep */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      
                      <Phone className="w-5 h-5 relative z-10" />
                      <a href="tel:+4969920388770" className="relative z-10">Jetzt anrufen</a>
                      <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
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