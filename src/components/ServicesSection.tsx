import { ArrowRight, Stethoscope, Home, Activity, Utensils, Clock, FileText, UserCheck, Sparkles, Play, ChevronRight, Star, Brain, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect, forwardRef } from "react";

// Import service images
import behandlungspflegeImg from "@/assets/services/behandlungspflege.jpg";
import grundpflegeImg from "@/assets/services/grundpflege.jpg";
import intensivpflegeImg from "@/assets/services/intensivpflege.jpg";
import haushaltshilfeImg from "@/assets/services/haushaltshilfe.jpg";
import vierundzwanzigStundenImg from "@/assets/services/24-stunden-pflege.jpg";
import pflegeberatungImg from "@/assets/services/pflegeberatung.jpg";
import verhinderungspflegeImg from "@/assets/services/verhinderungspflege.jpg";

const services = [
  { 
    icon: Stethoscope, 
    title: "Behandlungspflege", 
    shortTitle: "Behandlung",
    description: "Medizinische Versorgung nach ärztlicher Verordnung: Wundversorgung, Injektionen, Verbandswechsel und mehr.", 
    link: "/leistungen/behandlungspflege",
    features: ["Wundversorgung", "Injektionen", "Medikamentengabe", "Verbandswechsel"],
    color: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-500/20 via-rose-500/5 to-transparent",
    accentColor: "rose",
    image: behandlungspflegeImg,
  },
  { 
    icon: Home, 
    title: "Grundpflege", 
    shortTitle: "Grundpflege",
    description: "Unterstützung bei der Körperpflege, An- und Auskleiden, Mobilität und alltäglichen Verrichtungen.", 
    link: "/leistungen/grundpflege",
    features: ["Körperpflege", "Mobilisation", "Ernährung", "Lagerung"],
    color: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-500/20 via-blue-500/5 to-transparent",
    accentColor: "blue",
    image: grundpflegeImg,
  },
  { 
    icon: Activity, 
    title: "Intensivpflege", 
    shortTitle: "Intensiv",
    description: "Spezialisierte Betreuung für beatmungspflichtige Patienten und komplexe Pflegesituationen.", 
    link: "/leistungen/ausserklinische-intensivpflege-frankfurt-am-main",
    features: ["Beatmungspflege", "24/7 Betreuung", "Monitoring", "Notfallversorgung"],
    color: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-500/20 via-violet-500/5 to-transparent",
    accentColor: "violet",
    image: intensivpflegeImg,
  },
  { 
    icon: Utensils, 
    title: "Haushaltshilfe", 
    shortTitle: "Haushalt",
    description: "Hilfe im Haushalt: Einkaufen, Kochen, Reinigung und Organisation des Alltags.", 
    link: "/leistungen/haushaltshilfe",
    features: ["Einkaufen", "Kochen", "Reinigung", "Wäsche"],
    color: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-500/20 via-amber-500/5 to-transparent",
    accentColor: "amber",
    image: haushaltshilfeImg,
  },
  { 
    icon: Clock, 
    title: "24-Stunden-Pflege", 
    shortTitle: "24h Pflege",
    description: "Rund-um-die-Uhr Betreuung zu Hause – die liebevolle Alternative zum Pflegeheim.", 
    link: "/leistungen/24-stunden-pflege",
    features: ["Rund um die Uhr", "Im eigenen Zuhause", "Persönlich", "Flexibel"],
    color: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    accentColor: "emerald",
    image: vierundzwanzigStundenImg,
  },
  { 
    icon: FileText, 
    title: "Pflegeberatung", 
    shortTitle: "Beratung",
    description: "Kostenlose Beratung zu Pflegeleistungen, Pflegegrad und Ihren Ansprüchen.", 
    link: "/leistungen/pflegeberatung-frankfurt",
    features: ["Kostenlos", "Pflegegrad", "Ansprüche", "Förderung"],
    color: "from-primary to-accent",
    bgGradient: "from-primary/20 via-primary/5 to-transparent",
    accentColor: "primary",
    image: pflegeberatungImg,
  },
  { 
    icon: UserCheck, 
    title: "Verhinderungspflege", 
    shortTitle: "Vertretung",
    description: "Professionelle Vertretung für pflegende Angehörige bei Urlaub oder Krankheit.", 
    link: "/leistungen/verhinderungspflege-frankfurt",
    features: ["Urlaubsvertretung", "Krankheitsvertretung", "Flexibel", "Entlastung"],
    color: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-500/20 via-pink-500/5 to-transparent",
    accentColor: "pink",
    image: verhinderungspflegeImg,
  },
  { 
    icon: Brain, 
    title: "Demenz WG", 
    shortTitle: "Demenz WG",
    description: "Betreute Wohngemeinschaft für Menschen mit Demenz – 24/7 Betreuung in familiärer Atmosphäre.", 
    link: "/leistungen/demenz-wg-frankfurt",
    features: ["24/7 Betreuung", "Familiäre Atmosphäre", "Geschultes Personal", "Aktivierung"],
    color: "from-teal-500 to-cyan-600",
    bgGradient: "from-teal-500/20 via-teal-500/5 to-transparent",
    accentColor: "teal",
    image: grundpflegeImg,
  },
  { 
    icon: Building2, 
    title: "Betreutes Wohnen", 
    shortTitle: "Bet. Wohnen",
    description: "Selbstbestimmt leben mit professioneller Pflege und Betreuung in Frankfurt und Bad Vilbel.", 
    link: "/leistungen/betreutes-wohnen-frankfurt",
    features: ["Eigenständig", "Barrierefrei", "Notrufsystem", "Flexibel"],
    color: "from-indigo-500 to-violet-600",
    bgGradient: "from-indigo-500/20 via-indigo-500/5 to-transparent",
    accentColor: "indigo",
    image: pflegeberatungImg,
  },
];

const ServicesSection = forwardRef<HTMLElement>((_, ref) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate through services
  useEffect(() => {
    if (!isVisible || !isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVisible, isAutoPlaying]);

  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <section ref={sectionRef} className="py-16 md:py-32 relative overflow-hidden" id="services">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Dynamic gradient based on active service */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${activeService.bgGradient} transition-all duration-1000`}
        style={{ opacity: 0.5 }}
      />
      
      {/* Floating orbs - hidden on mobile for performance */}
      <div className="hidden md:block absolute top-20 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl animate-morph opacity-40" />
      <div className="hidden md:block absolute bottom-20 -right-40 w-[700px] h-[700px] bg-gradient-to-tl from-accent/10 to-primary/5 rounded-full blur-3xl animate-morph opacity-30" style={{ animationDelay: '-4s' }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '48px 48px' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-4xl mx-auto mb-10 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 glass rounded-full mb-5 md:mb-8 shadow-lg border border-primary/20">
            <div className="relative">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <div className="absolute inset-0 animate-ping opacity-50 hidden md:block">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
            </div>
            <span className="text-xs md:text-sm font-bold text-foreground uppercase tracking-widest">
              Unsere Leistungen
            </span>
          </div>
          
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-4 md:mb-8 leading-tight">
            Pflege mit{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Herz & Verstand
              </span>
            </span>
          </h2>
          
          <p className="text-base md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
            Von der Grundpflege bis zur spezialisierten Intensivpflege – entdecken Sie unser umfassendes Leistungsspektrum.
          </p>
        </div>

        {/* Main Interactive Section */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left: Service Selector - horizontal scroll on mobile, vertical list on desktop */}
          <div className="lg:col-span-5 xl:col-span-4">
            {/* Mobile: horizontal scrollable pills */}
            <div className={`flex lg:hidden overflow-x-auto gap-2 pb-3 -mx-4 px-4 scrollbar-hide transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isActive = activeIndex === index;
                
                return (
                  <button
                    key={service.title}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`flex-shrink-0 flex items-center gap-2 px-3 py-2.5 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${
                      isActive 
                        ? 'bg-card border-primary shadow-lg shadow-primary/10' 
                        : 'bg-card/50 border-border/50'
                    }`}
                  >
                    {isActive && isAutoPlaying && (
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent animate-[progress_5s_linear]" style={{ width: '100%' }} />
                    )}
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? `bg-gradient-to-br ${service.color}` 
                        : 'bg-primary/10'
                    }`}>
                      <IconComponent className={`w-4 h-4 transition-colors ${isActive ? 'text-white' : 'text-primary'}`} />
                    </div>
                    <span className={`font-display font-bold text-xs whitespace-nowrap transition-colors ${isActive ? 'text-primary' : 'text-foreground'}`}>
                      {service.shortTitle}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Desktop: vertical list */}
            <div className={`hidden lg:flex flex-col space-y-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isActive = activeIndex === index;
                
                return (
                  <button
                    key={service.title}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-500 group relative overflow-hidden ${
                      isActive 
                        ? 'bg-card border-primary shadow-xl shadow-primary/10 scale-[1.02]' 
                        : 'bg-card/50 border-border/50 hover:border-primary/30 hover:bg-card hover:shadow-lg'
                    }`}
                    style={{ transitionDelay: `${index * 0.05}s` }}
                  >
                    {isActive && isAutoPlaying && (
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent animate-[progress_5s_linear]" style={{ width: '100%' }} />
                    )}
                    
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? `bg-gradient-to-br ${service.color} shadow-lg` 
                          : 'bg-primary/10 group-hover:bg-primary/20'
                      }`}>
                        <IconComponent className={`w-7 h-7 transition-colors ${isActive ? 'text-white' : 'text-primary'}`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-display font-bold text-lg transition-colors ${isActive ? 'text-primary' : 'text-foreground'}`}>
                          {service.title}
                        </h3>
                        <p className={`text-sm truncate transition-colors ${isActive ? 'text-muted-foreground' : 'text-muted-foreground/70'}`}>
                          {service.features.slice(0, 2).join(" • ")}
                        </p>
                      </div>
                      
                      <ChevronRight className={`w-5 h-5 transition-all duration-300 flex-shrink-0 ${
                        isActive ? 'text-primary translate-x-1' : 'text-muted-foreground opacity-0 group-hover:opacity-100'
                      }`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Right: Active Service Detail */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Detail Card */}
              <div className="relative group">
                {/* Glow effect - hidden on mobile */}
                <div className={`hidden md:block absolute -inset-2 bg-gradient-to-r ${activeService.color} rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700`} />
                
                <div className="relative bg-card rounded-2xl md:rounded-[2rem] border border-border/50 overflow-hidden shadow-xl md:shadow-2xl">
                  {/* Header with image */}
                  <div className="relative h-48 md:h-72 overflow-hidden">
                    {/* Background image */}
                    <img 
                      src={activeService.image} 
                      alt={activeService.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${activeService.color} opacity-60`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Icon badge */}
                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/20 rounded-xl md:rounded-2xl blur-lg scale-150" />
                        <div className={`relative w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br ${activeService.color} flex items-center justify-center border border-white/30 shadow-xl`}>
                          <ActiveIcon className="w-7 h-7 md:w-10 md:h-10 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Service number */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs md:text-sm font-bold">
                      {String(activeIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                    </div>
                    
                    {/* Rating badge */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full">
                      <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-300 fill-yellow-300" />
                      <span className="text-white text-xs md:text-sm font-bold">5.0</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5 md:p-10">
                    <h3 className="font-display font-bold text-xl md:text-4xl text-foreground mb-3 md:mb-4">
                      {activeService.title}
                    </h3>
                    
                    <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-5 md:mb-8">
                      {activeService.description}
                    </p>
                    
                    {/* Features grid */}
                    <div className="grid grid-cols-2 gap-2 md:gap-4 mb-5 md:mb-8">
                      {activeService.features.map((feature, idx) => (
                        <div 
                          key={feature}
                          className="flex items-center gap-2 md:gap-3 p-2.5 md:p-4 rounded-lg md:rounded-xl bg-secondary/50 border border-border/50"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          <div className={`w-6 h-6 md:w-8 md:h-8 rounded-md md:rounded-lg bg-gradient-to-br ${activeService.color} flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white text-[10px] md:text-xs font-bold">{idx + 1}</span>
                          </div>
                          <span className="font-medium text-foreground text-xs md:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                      <Button 
                        size="lg" 
                        className={`flex-1 bg-gradient-to-r ${activeService.color} hover:opacity-90 text-white shadow-lg group text-sm md:text-base`}
                        asChild
                      >
                        <Link to={activeService.link}>
                          Mehr erfahren
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="flex-1 border-2 group text-sm md:text-base"
                        asChild
                      >
                        <a href="tel:+496915391405">
                          <Play className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                          Jetzt beraten lassen
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick navigation dots */}
              <div className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-8">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${
                      activeIndex === index 
                        ? 'w-6 md:w-8 bg-primary' 
                        : 'w-1.5 md:w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to service ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 md:mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 md:gap-6">
            <Button 
              size="lg" 
              className="group px-6 md:px-10 py-5 md:py-7 text-sm md:text-lg rounded-full shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90" 
              asChild
            >
              <Link to="/leistungen">
                Alle Leistungen entdecken
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
            
            <div className="flex items-center gap-2 md:gap-3 text-muted-foreground">
              <div className="flex -space-x-2 md:-space-x-3">
                {['👩‍⚕️', '👩‍⚕️', '👩‍⚕️'].map((emoji, i) => (
                  <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center text-base md:text-lg">
                    {emoji}
                  </div>
                ))}
              </div>
              <span className="text-xs md:text-sm">20+ qualifizierte Pflegerinnen</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframe for progress animation */}
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
});

export default ServicesSection;