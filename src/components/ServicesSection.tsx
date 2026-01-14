import { ArrowRight, Stethoscope, Home, Activity, Utensils, Clock, FileText, UserCheck, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const services = [
  { 
    icon: Stethoscope, 
    title: "Behandlungspflege", 
    description: "Medizinische Versorgung nach ärztlicher Verordnung: Wundversorgung, Injektionen, Verbandswechsel.", 
    link: "/leistungen/behandlungspflege",
    features: ["Wundversorgung", "Injektionen", "Medikamentengabe"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
  },
  { 
    icon: Home, 
    title: "Grundpflege", 
    description: "Unterstützung bei der Körperpflege, An- und Auskleiden, Mobilität und alltäglichen Verrichtungen.", 
    link: "/leistungen/grundpflege",
    features: ["Körperpflege", "Mobilisation", "Ernährung"],
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=400&fit=crop",
  },
  { 
    icon: Activity, 
    title: "Intensivpflege", 
    description: "Spezialisierte Betreuung für beatmungspflichtige Patienten und komplexe Pflegesituationen.", 
    link: "/leistungen/ausserklinische-intensivpflege-frankfurt-am-main",
    features: ["Beatmungspflege", "24/7 Betreuung", "Spezialisiert"],
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop",
  },
  { 
    icon: Utensils, 
    title: "Haushaltshilfe", 
    description: "Hilfe im Haushalt: Einkaufen, Kochen, Reinigung und Organisation des Alltags.", 
    link: "/leistungen/haushaltshilfe",
    features: ["Einkaufen", "Kochen", "Reinigung"],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
  },
  { 
    icon: Clock, 
    title: "24-Stunden-Pflege", 
    description: "Rund-um-die-Uhr Betreuung zu Hause – die Alternative zum Pflegeheim.", 
    link: "/leistungen/24-stunden-pflege",
    features: ["Rund um die Uhr", "Zu Hause", "Persönlich"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop",
  },
  { 
    icon: FileText, 
    title: "Pflegeberatung", 
    description: "Kostenlose Beratung zu Pflegeleistungen, Pflegegrad und Ansprüchen.", 
    link: "/leistungen/pflegeberatung-frankfurt",
    features: ["Kostenlos", "Pflegegrad", "Ansprüche"],
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=400&fit=crop",
  },
  { 
    icon: UserCheck, 
    title: "Verhinderungspflege", 
    description: "Professionelle Vertretung für pflegende Angehörige bei Urlaub oder Krankheit.", 
    link: "/leistungen/verhinderungspflege-frankfurt",
    features: ["Vertretung", "Flexibel", "Entlastung"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setActiveCard(index);
  };

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden" id="services">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Floating orbs */}
      <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl animate-morph opacity-60" />
      <div className="absolute bottom-40 -right-20 w-[600px] h-[600px] bg-gradient-to-tl from-accent/10 to-primary/5 rounded-full blur-3xl animate-morph opacity-50" style={{ animationDelay: '-4s' }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-4xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full mb-8 shadow-lg">
            <div className="relative">
              <Sparkles className="w-5 h-5 text-primary" />
              <div className="absolute inset-0 animate-ping">
                <Sparkles className="w-5 h-5 text-primary opacity-50" />
              </div>
            </div>
            <span className="text-sm font-bold text-foreground uppercase tracking-widest">
              Unsere Leistungen
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8 leading-tight">
            Pflege, die{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                berührt
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 4 150 4 198 10" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="50%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Von der Grundpflege bis zur spezialisierten Intensivpflege – 
            wir bieten alle Leistungen aus einer Hand mit Herz und Kompetenz.
          </p>
        </div>

        {/* Featured Service - Large Card */}
        <div className={`mb-12 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link 
            to={services[0].link}
            className="group relative block overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-accent p-1"
          >
            <div className="relative rounded-[1.75rem] overflow-hidden bg-card">
              <div className="grid lg:grid-cols-2">
                {/* Image side */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={services[0].image}
                    alt={services[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card lg:bg-gradient-to-r" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:hidden" />
                </div>
                
                {/* Content side */}
                <div className="relative p-8 lg:p-12 flex flex-col justify-center">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full w-fit mb-6">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-bold text-primary">Beliebteste Leistung</span>
                  </div>
                  
                  {/* Icon */}
                  {(() => {
                    const IconComponent = services[0].icon;
                    return (
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/30">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    );
                  })()}
                  
                  <h3 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4 group-hover:text-primary transition-colors">
                    {services[0].title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {services[0].description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {services[0].features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary font-bold text-lg group-hover:gap-4 transition-all">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(1).map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index + 2) * 0.1}s` }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card with spotlight effect */}
              <div className="relative h-full p-[2px] rounded-3xl bg-gradient-to-br from-border via-border to-border group-hover:from-primary group-hover:via-accent group-hover:to-primary transition-all duration-500">
                <div className="relative h-full bg-card rounded-[calc(1.5rem-2px)] overflow-hidden">
                  {/* Spotlight effect */}
                  {activeCard === index && (
                    <div 
                      className="absolute w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none transition-opacity duration-300"
                      style={{
                        left: mousePosition.x - 150,
                        top: mousePosition.y - 150,
                      }}
                    />
                  )}
                  
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    
                    {/* Floating icon */}
                    <div className="absolute bottom-4 left-6 w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-6 pt-4">
                    <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature) => (
                        <span 
                          key={feature}
                          className="px-3 py-1 bg-primary/5 rounded-full text-xs font-medium text-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      <span>Details</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button 
              size="lg" 
              className="group px-10 py-7 text-lg rounded-full shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90" 
              asChild
            >
              <Link to="/leistungen">
                Alle Leistungen entdecken
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
            
            <span className="text-muted-foreground">oder</span>
            
            <a 
              href="tel:+496915391405"
              className="inline-flex items-center gap-2 px-6 py-4 text-primary font-semibold hover:text-accent transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                📞
              </span>
              Kostenlos beraten lassen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;