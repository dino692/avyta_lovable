import { Heart, Users, Clock, Award, ArrowRight, Shield, Star, CheckCircle2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import about images
import teamFrauenImg from "@/assets/about/team-frauen.webp";
import demenzBetreuungImg from "@/assets/about/demenz-betreuung.webp";
import diabetesPflegeImg from "@/assets/about/diabetes-pflege.webp";
import nachtpflegeImg from "@/assets/about/nachtpflege.webp";

const features = [
  { 
    icon: Users, 
    title: "Nur Frauen als Pflegerinnen", 
    description: "Unser Team besteht ausschließlich aus qualifizierten Pflegerinnen – für ein besonders vertrauensvolles Pflegeerlebnis.",
    stat: "100%",
    statLabel: "Weibliches Team",
    image: teamFrauenImg,
  },
  { 
    icon: Clock, 
    title: "24/7 Erreichbarkeit", 
    description: "Ob Tag oder Nacht – wir sind immer für Sie da. Unsere Notfall-Hotline ist rund um die Uhr besetzt.",
    stat: "24/7",
    statLabel: "Erreichbar",
    image: nachtpflegeImg,
  },
  { 
    icon: Heart, 
    title: "Spezialisiert auf Demenz", 
    description: "Wir sind speziell geschult im Umgang mit Demenzerkrankungen und bieten einfühlsame, kompetente Betreuung.",
    stat: "12+",
    statLabel: "Jahre Erfahrung",
    image: demenzBetreuungImg,
  },
  { 
    icon: Award, 
    title: "Spezialisiert auf Diabetes", 
    description: "Unsere Pflegekräfte sind Experten für die Betreuung von Diabetes-Patienten mit allen notwendigen Versorgungsleistungen.",
    stat: "1,6",
    statLabel: "MDK Note",
    image: diabetesPflegeImg,
  },
];

const achievements = [
  { icon: Shield, label: "Zertifiziert", value: "TÜV geprüft" },
  { icon: Star, label: "Google", value: "5.0 Sterne" },
  { icon: CheckCircle2, label: "Kassen", value: "Alle zugelassen" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
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

  // Auto-rotate features
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 md:py-32 overflow-hidden relative" id="about">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/20" />
      
      {/* Decorative elements - hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-20 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-4xl mx-auto mb-10 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 glass rounded-full mb-5 md:mb-8 shadow-lg">
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary animate-pulse" />
            <span className="text-xs md:text-sm font-bold text-foreground uppercase tracking-widest">
              Wer wir sind
            </span>
          </div>
          
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-5 md:mb-8 leading-tight">
            Mit{" "}
            <span className="relative inline-block">
              <span className="text-primary">Herz</span>
              <svg className="absolute -bottom-1 left-0 w-full h-3 md:h-4" viewBox="0 0 100 15" preserveAspectRatio="none">
                <path d="M0 10 Q25 0 50 10 T100 10" stroke="hsl(var(--accent))" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            {" "}und{" "}
            <span className="text-accent">Kompetenz</span>
          </h2>
          
          <p className="text-base md:text-2xl text-muted-foreground leading-relaxed px-2">
            Unser Team aus qualifizierten Pflegekräften versteht, dass gute Pflege mehr ist als nur medizinische Versorgung – es geht um Menschlichkeit, Würde und Lebensqualität.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Left: Feature Cards */}
          <div className="lg:col-span-7 space-y-3 md:space-y-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isActive = activeFeature === index;
              
              return (
                <div
                  key={feature.title}
                  className={`group relative cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setActiveFeature(index)}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className={`relative p-4 md:p-8 rounded-2xl md:rounded-3xl border-2 transition-all duration-500 overflow-hidden ${
                    isActive 
                      ? 'bg-card border-primary shadow-2xl shadow-primary/10 scale-[1.01] md:scale-[1.02]' 
                      : 'bg-card/50 border-border/50 hover:border-primary/30 hover:bg-card'
                  }`}>
                    {/* Active indicator line */}
                    <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 md:w-1.5 h-12 md:h-16 rounded-r-full bg-gradient-to-b from-primary to-accent transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                    
                    {/* Spotlight effect */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
                    )}
                    
                    <div className="relative flex items-start gap-4 md:gap-6">
                      {/* Image thumbnail */}
                      <div className="flex-shrink-0 relative">
                        <div className={`relative w-16 h-16 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 ${
                          isActive 
                            ? 'shadow-lg shadow-primary/30 ring-2 ring-primary' 
                            : 'ring-1 ring-border/50'
                        }`}>
                          <img 
                            src={feature.image} 
                            alt={feature.title}
                            loading="lazy"
                            className={`w-full h-full object-cover transition-all duration-500 ${
                              isActive ? 'scale-110' : 'scale-100'
                            }`}
                          />
                          {/* Gradient overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent transition-opacity duration-300 ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          }`} />
                          
                          {/* Icon overlay */}
                          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          }`}>
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/90 flex items-center justify-center">
                              <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Stat badge */}
                        <div className={`absolute -bottom-1.5 -right-1.5 md:-bottom-2 md:-right-2 px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-bold transition-all duration-500 ${
                          isActive 
                            ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md scale-105 md:scale-110' 
                            : 'bg-primary/10 text-primary scale-100'
                        }`}>
                          {feature.stat}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                          <h3 className={`font-display font-bold text-base md:text-xl transition-colors duration-300 ${
                            isActive ? 'text-primary' : 'text-foreground'
                          }`}>
                            {feature.title}
                          </h3>
                          <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ${
                            isActive ? 'opacity-100 translate-x-0 text-primary' : 'opacity-0 -translate-x-2'
                          }`} />
                        </div>
                        <p className={`text-sm md:text-base text-muted-foreground leading-relaxed transition-all duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-70'
                        }`}>
                          {feature.description}
                        </p>
                        {/* Stat label on mobile */}
                        <div className={`mt-2 text-xs text-muted-foreground transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <span className="font-semibold text-primary">{feature.stat}</span> {feature.statLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Right: Mission Card & Stats */}
          <div className={`lg:col-span-5 space-y-4 md:space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            {/* Mission Card */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl md:rounded-[2rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-primary via-primary to-accent rounded-2xl md:rounded-3xl p-6 md:p-10 text-white overflow-hidden">
                {/* Decorative patterns */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 border border-white rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-36 md:w-48 h-36 md:h-48 border border-white rounded-full translate-y-1/2 -translate-x-1/2" />
                  <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/30 rounded-full" />
                </div>
                
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-50" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4 md:mb-6">
                    <Award className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Unsere Mission</span>
                  </div>
                  
                  <h3 className="font-display text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">
                    Spezialisiert auf das, was wirklich zählt
                  </h3>
                  
                  <p className="text-sm md:text-lg leading-relaxed opacity-90 mb-5 md:mb-8">
                    Im Laufe der Jahre haben wir uns auf zwei wichtige Fachgebiete spezialisiert und zertifiziert: Demenz- und Diabetes Erkrankungen. Diese Expertise macht uns zu Ihrem vertrauensvollen Partner.
                  </p>
                  
                  {/* Team member */}
                  <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/20">
                    <div className="relative">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/30 flex items-center justify-center text-2xl md:text-3xl border-2 border-white/40">
                        👩‍⚕️
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-green-400 rounded-full flex items-center justify-center border-2 border-white">
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm md:text-lg">Jasmina Müller</div>
                      <div className="text-xs md:text-sm opacity-80">Geschäftsleitung, PDL & Praxisanleitung</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="glass rounded-xl md:rounded-2xl p-4 md:p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-0.5 md:mb-1 group-hover:scale-110 transition-transform">20+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Mitarbeiter</div>
              </div>
              <div className="glass rounded-xl md:rounded-2xl p-4 md:p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl md:text-4xl font-display font-bold text-accent mb-0.5 md:mb-1 group-hover:scale-110 transition-transform">2</div>
                <div className="text-xs md:text-sm text-muted-foreground">Standorte</div>
              </div>
            </div>
            
            {/* Achievement badges */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {achievements.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={item.label}
                    className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 glass rounded-full text-xs md:text-sm"
                  >
                    <IconComponent className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                    <span className="font-semibold text-foreground">{item.value}</span>
                  </div>
                );
              })}
            </div>
            
            {/* CTA */}
            <Link 
              to="/ueber-uns"
              className="group flex items-center justify-between p-4 md:p-6 glass rounded-xl md:rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="font-display font-bold text-base md:text-lg text-foreground mb-0.5 md:mb-1">Unser Team kennenlernen</div>
                <div className="text-xs md:text-sm text-muted-foreground">Erfahren Sie mehr über uns</div>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;