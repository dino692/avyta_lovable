import { MapPin, Phone, ArrowRight, Navigation, Clock, Users, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const locations = [
  { 
    city: "Frankfurt", 
    address: "Allerheiligentor 2-4, 60311 Frankfurt", 
    phone: "069 153 914 05", 
    link: "/standorte/frankfurt",
    description: "Unser Hauptsitz im Herzen Frankfurts – zentral gelegen für optimale Erreichbarkeit",
    gradient: "from-primary via-primary/80 to-accent",
    stats: { patients: "500+", years: "10+", rating: "5,0" },
    hours: "Mo-Fr 8:00-18:00",
    isMain: true,
  },
  { 
    city: "Bad Vilbel", 
    address: "Wetteraukreis", 
    phone: "069 153 914 05", 
    link: "/standorte/bad-vilbel",
    description: "Für die Region Wetterau – persönliche Betreuung in Ihrer Nähe",
    gradient: "from-accent via-accent/80 to-primary",
    stats: { patients: "200+", years: "5+", rating: "5,0" },
    hours: "Mo-Fr 8:00-17:00",
    isMain: false,
  },
];

const stadtteile = [
  { name: "Bockenheim", link: "/standorte/frankfurt/pflegedienst-bockenheim" },
  { name: "Bornheim", link: "/standorte/frankfurt/bornheim" },
  { name: "Dornbusch", link: "/standorte/frankfurt/dornbusch" },
  { name: "Eckenheim", link: "/standorte/frankfurt/eckenheim" },
  { name: "Eschersheim", link: "/standorte/frankfurt/eschersheim" },
  { name: "Ginnheim", link: "/standorte/frankfurt/pflegedienst-ginnheim" },
  { name: "Griesheim", link: "/standorte/frankfurt/griesheim" },
  { name: "Heddernheim", link: "/standorte/frankfurt/heddernheim" },
  { name: "Höchst", link: "/standorte/frankfurt/hoechst" },
  { name: "Nieder-Eschbach", link: "/standorte/frankfurt/nieder-eschbach" },
  { name: "Niederrad", link: "/standorte/frankfurt/niederrad" },
  { name: "Nordend", link: "/standorte/frankfurt/nordend" },
  { name: "Ostend", link: "/standorte/frankfurt/ostend" },
  { name: "Praunheim", link: "/standorte/frankfurt/pflegedienst-praunheim" },
  { name: "Preungesheim", link: "/standorte/frankfurt/preungesheim" },
  { name: "Rödelheim", link: "/standorte/frankfurt/pflegedienst-roedelheim" },
  { name: "Sachsenhausen", link: "/standorte/frankfurt/pflegedienst-frankfurt-sachsenhausen" },
  { name: "Seckbach", link: "/standorte/frankfurt/seckbach" },
  { name: "Westend", link: "/standorte/frankfurt/westend" },
];

const LocationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeLocation, setActiveLocation] = useState(0);
  const [hoveredStadtteil, setHoveredStadtteil] = useState<number | null>(null);

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

  // Auto-rotate locations
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveLocation((prev) => (prev + 1) % locations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden" id="locations">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      {/* Floating map markers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          >
            <MapPin className="w-4 h-4 text-primary/10" />
          </div>
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-4xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-full mb-8 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <Navigation className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Unsere Standorte
            </span>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Immer in{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                Ihrer Nähe
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 4 150 4 198 10" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="50%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Von Frankfurt bis Bad Vilbel – wir sind schnell bei Ihnen für eine 
            <span className="text-foreground font-medium"> optimale Versorgung</span> direkt vor Ort.
          </p>
        </div>

        {/* Main Location Showcase */}
        <div className={`grid lg:grid-cols-5 gap-8 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Location Selector */}
          <div className="lg:col-span-2 space-y-4">
            {locations.map((location, index) => (
              <button
                key={location.city}
                onClick={() => setActiveLocation(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-500 group relative overflow-hidden ${
                  activeLocation === index 
                    ? 'bg-gradient-to-br from-primary to-accent text-white shadow-2xl shadow-primary/20 scale-[1.02]' 
                    : 'bg-card border border-border hover:border-primary/50 hover:shadow-lg'
                }`}
              >
                {/* Progress bar for active */}
                {activeLocation === index && (
                  <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
                    <div className="h-full bg-white animate-[progress_5s_linear_infinite]" />
                  </div>
                )}
                
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeLocation === index 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : 'bg-primary/10 group-hover:bg-primary/20'
                  }`}>
                    <MapPin className={`w-7 h-7 ${activeLocation === index ? 'text-white' : 'text-primary'}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={`font-display font-bold text-xl ${activeLocation === index ? 'text-white' : 'text-foreground'}`}>
                        {location.city}
                      </h3>
                      {location.isMain && (
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          activeLocation === index ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
                        }`}>
                          Hauptsitz
                        </span>
                      )}
                    </div>
                    <p className={`text-sm ${activeLocation === index ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {location.address}
                    </p>
                  </div>
                  
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    activeLocation === index ? 'text-white rotate-90' : 'text-muted-foreground group-hover:translate-x-1'
                  }`} />
                </div>
              </button>
            ))}
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { icon: Users, value: "700+", label: "Patienten" },
                { icon: Clock, value: "24/7", label: "Erreichbar" },
                { icon: Star, value: "4.9", label: "Bewertung" },
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="font-display font-bold text-lg text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Active Location Detail Card */}
          <div className="lg:col-span-3">
            <Link 
              to={locations[activeLocation].link}
              className="block group"
            >
              <div className={`relative h-full min-h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br ${locations[activeLocation].gradient} p-1 transition-all duration-500`}>
                {/* Glassmorphism inner card */}
                <div className="relative h-full rounded-[22px] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm p-8 md:p-10 flex flex-col">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
                  
                  {/* Map Pattern */}
                  <div className="absolute inset-0 opacity-10" style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60M0 30L60 30M15 15L45 45M45 15L15 45' stroke='white' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")` 
                  }} />
                  
                  <div className="relative z-10 flex-1 flex flex-col text-white">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <Navigation className="w-8 h-8" />
                        </div>
                        <div>
                          <div className="text-white/60 text-sm uppercase tracking-wider mb-1">Standort</div>
                          <h3 className="font-display font-bold text-3xl md:text-4xl">{locations[activeLocation].city}</h3>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/90 text-lg mb-8 max-w-md leading-relaxed">
                      {locations[activeLocation].description}
                    </p>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                        <Users className="w-5 h-5 mx-auto mb-2 text-white/80" />
                        <div className="font-bold text-xl">{locations[activeLocation].stats.patients}</div>
                        <div className="text-xs text-white/60">Patienten</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                        <Clock className="w-5 h-5 mx-auto mb-2 text-white/80" />
                        <div className="font-bold text-xl">{locations[activeLocation].stats.years}</div>
                        <div className="text-xs text-white/60">Jahre</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                        <Star className="w-5 h-5 mx-auto mb-2 text-white/80" />
                        <div className="font-bold text-xl">{locations[activeLocation].stats.rating}</div>
                        <div className="text-xs text-white/60">Bewertung</div>
                      </div>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="mt-auto flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{locations[activeLocation].address}</span>
                      </div>
                      <div className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm font-semibold">{locations[activeLocation].phone}</span>
                      </div>
                      <div className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{locations[activeLocation].hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Stadtteile Section */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
              Frankfurter Stadtteile
            </h3>
            <p className="text-muted-foreground">
              Wir betreuen Patienten in allen Stadtteilen
            </p>
          </div>
          
          {/* Interactive Stadtteil Grid */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card via-card to-muted/30 border border-border">
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />
            
            <div className="flex flex-wrap justify-center gap-3">
              {stadtteile.map((stadtteil, index) => (
                <Link 
                  key={stadtteil.name} 
                  to={stadtteil.link}
                  onMouseEnter={() => setHoveredStadtteil(index)}
                  onMouseLeave={() => setHoveredStadtteil(null)}
                  className={`group relative px-5 py-3 rounded-xl transition-all duration-300 ${
                    hoveredStadtteil === index
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 scale-105 z-10'
                      : 'bg-background border border-border text-foreground hover:border-primary/50'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 20}ms`,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-3.5 h-3.5 transition-all duration-300 ${
                      hoveredStadtteil === index ? 'text-white' : 'text-primary/50 group-hover:text-primary'
                    }`} />
                    <span className="text-sm font-medium">{stadtteil.name}</span>
                  </div>
                  
                  {/* Hover arrow */}
                  <ArrowRight className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 transition-all duration-300 ${
                    hoveredStadtteil === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`} />
                </Link>
              ))}
            </div>
            
            {/* Bottom CTA */}
            <div className="flex justify-center mt-8">
              <Link 
                to="/kontakt"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <span>Finden Sie Ihren nächsten Standort</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default LocationsSection;
