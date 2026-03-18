import { MapPin, Phone, ArrowRight, Navigation, Clock, Users, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

// Import location images
import frankfurtSkylineImg from "@/assets/locations/frankfurt-skyline.jpg";
import badVilbelImg from "@/assets/locations/bad-vilbel.jpg";

const locations = [
  { 
    city: "Frankfurt", 
    address: "Allerheiligentor 2-4, 60311 Frankfurt", 
    phone: "069 153 914 05", 
    link: "/standorte/frankfurt",
    description: "Unser Hauptsitz im Herzen Frankfurts – zentral gelegen für optimale Erreichbarkeit",
    gradient: "from-primary via-primary/80 to-accent",
    stats: { patients: "100+", years: "12+", rating: "5,0" },
    hours: "Mo-Fr 8-12 Uhr",
    isMain: true,
    image: frankfurtSkylineImg,
  },
  { 
    city: "Bad Vilbel", 
    address: "Wetteraukreis", 
    phone: "069 153 914 05", 
    link: "/standorte/bad-vilbel",
    description: "Für die Region Wetterau – persönliche Betreuung in Ihrer Nähe",
    gradient: "from-accent via-accent/80 to-primary",
    stats: { patients: "200+", years: "12+", rating: "5,0" },
    hours: "Mo-Fr 8-12 Uhr",
    isMain: false,
    image: badVilbelImg,
  },
];

const stadtteile = [
  { name: "Bockenheim", link: "/standorte/frankfurt/pflegedienst-bockenheim" },
  { name: "Bornheim", link: "/standorte/frankfurt/bornheim" },
  { name: "Dornbusch", link: "/pflegedienst-dornbusch" },
  { name: "Eckenheim", link: "/pflegedienst-eckenheim" },
  { name: "Eschersheim", link: "/pflegedienst-eschersheim" },
  { name: "Ginnheim", link: "/standorte/frankfurt/pflegedienst-ginnheim" },
  { name: "Griesheim", link: "/standorte/frankfurt/griesheim" },
  { name: "Heddernheim", link: "/pflegedienst-heddernheim" },
  { name: "Höchst", link: "/standorte/frankfurt/hoechst" },
  { name: "Nieder-Eschbach", link: "/pflegedienst-nieder-eschbach" },
  { name: "Niederrad", link: "/standorte/frankfurt/niederrad" },
  { name: "Nordend", link: "/pflegedienst-nordend" },
  { name: "Ostend", link: "/pflegedienst-ostend" },
  { name: "Praunheim", link: "/standorte/frankfurt/pflegedienst-praunheim" },
  { name: "Preungesheim", link: "/pflegedienst-preungesheim" },
  { name: "Rödelheim", link: "/standorte/frankfurt/pflegedienst-roedelheim" },
  { name: "Sachsenhausen", link: "/standorte/frankfurt/pflegedienst-frankfurt-sachsenhausen" },
  { name: "Seckbach", link: "/pflegedienst-seckbach" },
  { name: "Westend", link: "/pflegedienst-westend" },
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
    <section ref={sectionRef} className="py-16 md:py-32 relative overflow-hidden" id="locations">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      {/* Floating map markers - hidden on mobile */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
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

      {/* Glowing orbs - hidden on mobile */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-4xl mx-auto mb-10 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-full mb-5 md:mb-8 border border-primary/20">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" />
            <Navigation className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wider">
              Unsere Standorte
            </span>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent animate-pulse" />
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 md:mb-6">
            Immer in{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                Ihrer Nähe
              </span>
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
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
          
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto px-2">
            Von Frankfurt bis Bad Vilbel – wir sind schnell bei Ihnen für eine 
            <span className="text-foreground font-medium"> optimale Versorgung</span> direkt vor Ort.
          </p>
        </div>

        {/* Main Location Showcase */}
        <div className={`grid lg:grid-cols-5 gap-4 md:gap-8 mb-10 md:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Location Selector */}
          <div className="lg:col-span-2 space-y-3 md:space-y-4">
            {locations.map((location, index) => (
              <button
                key={location.city}
                onClick={() => setActiveLocation(index)}
                className={`w-full text-left p-4 md:p-6 rounded-xl md:rounded-2xl transition-all duration-500 group relative overflow-hidden ${
                  activeLocation === index 
                    ? 'bg-gradient-to-br from-primary to-accent text-white shadow-2xl shadow-primary/20 scale-[1.01] md:scale-[1.02]' 
                    : 'bg-card border border-border hover:border-primary/50 hover:shadow-lg'
                }`}
              >
                {/* Progress bar for active */}
                {activeLocation === index && (
                  <div className="absolute bottom-0 left-0 h-0.5 md:h-1 bg-white/30 w-full">
                    <div className="h-full bg-white animate-[progress_5s_linear_infinite]" />
                  </div>
                )}
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeLocation === index 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : 'bg-primary/10 group-hover:bg-primary/20'
                  }`}>
                    <MapPin className={`w-5 h-5 md:w-7 md:h-7 ${activeLocation === index ? 'text-white' : 'text-primary'}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5 md:mb-1">
                      <h3 className={`font-display font-bold text-base md:text-xl ${activeLocation === index ? 'text-white' : 'text-foreground'}`}>
                        {location.city}
                      </h3>
                      {location.isMain && (
                        <span className={`text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 rounded-full ${
                          activeLocation === index ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
                        }`}>
                          Hauptsitz
                        </span>
                      )}
                    </div>
                    <p className={`text-xs md:text-sm ${activeLocation === index ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {location.address}
                    </p>
                  </div>
                  
                  <ChevronRight className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 flex-shrink-0 ${
                    activeLocation === index ? 'text-white rotate-90' : 'text-muted-foreground group-hover:translate-x-1'
                  }`} />
                </div>
              </button>
            ))}
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 md:gap-3 mt-4 md:mt-6">
              {[
                { icon: Users, value: "150+", label: "Patienten" },
                { icon: Clock, value: "24/7", label: "Erreichbar" },
                { icon: Star, value: "5,0", label: "Bewertung" },
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="bg-card border border-border rounded-lg md:rounded-xl p-3 md:p-4 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-primary mx-auto mb-1 md:mb-2" />
                  <div className="font-display font-bold text-sm md:text-lg text-foreground">{stat.value}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">{stat.label}</div>
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
              <div className={`relative h-full min-h-[300px] md:min-h-[400px] rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500`}>
                {/* Background Image */}
                <img 
                  src={locations[activeLocation].image} 
                  alt={locations[activeLocation].city}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${locations[activeLocation].gradient} opacity-75`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Glassmorphism inner card */}
                <div className="relative h-full p-5 md:p-10 flex flex-col">
                  
                  <div className="relative z-10 flex-1 flex flex-col text-white">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4 md:mb-8">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <Navigation className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <div>
                          <div className="text-white/60 text-xs md:text-sm uppercase tracking-wider mb-0.5 md:mb-1">Standort</div>
                          <h3 className="font-display font-bold text-2xl md:text-4xl">{locations[activeLocation].city}</h3>
                        </div>
                      </div>
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/90 text-sm md:text-lg mb-5 md:mb-8 max-w-md leading-relaxed">
                      {locations[activeLocation].description}
                    </p>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 md:gap-4 mb-5 md:mb-8">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-2.5 md:p-4 text-center">
                        <Users className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-1 md:mb-2 text-white/80" />
                        <div className="font-bold text-base md:text-xl">{locations[activeLocation].stats.patients}</div>
                        <div className="text-[10px] md:text-xs text-white/60">Patienten</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-2.5 md:p-4 text-center">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-1 md:mb-2 text-white/80" />
                        <div className="font-bold text-base md:text-xl">{locations[activeLocation].stats.years}</div>
                        <div className="text-[10px] md:text-xs text-white/60">Jahre</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-2.5 md:p-4 text-center">
                        <Star className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-1 md:mb-2 text-white/80" />
                        <div className="font-bold text-base md:text-xl">{locations[activeLocation].stats.rating}</div>
                        <div className="text-[10px] md:text-xs text-white/60">Bewertung</div>
                      </div>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="mt-auto flex flex-wrap gap-2 md:gap-3">
                      <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm truncate max-w-[120px] md:max-w-none">{locations[activeLocation].address}</span>
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                        <Phone className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm font-semibold">{locations[activeLocation].phone}</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                        <Clock className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm">{locations[activeLocation].hours}</span>
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
          <div className="text-center mb-6 md:mb-10">
            <h3 className="text-xl md:text-3xl font-display font-bold text-foreground mb-2 md:mb-3">
              Frankfurter Stadtteile
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Wir betreuen Patienten in allen Stadtteilen
            </p>
          </div>
          
          {/* Interactive Stadtteil Grid */}
          <div className="relative p-4 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-card via-card to-muted/30 border border-border">
            {/* Decorative corner elements - hidden on mobile */}
            <div className="hidden md:block absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
            <div className="hidden md:block absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
            <div className="hidden md:block absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
            <div className="hidden md:block absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />
            
            <div className="flex flex-wrap justify-center gap-1.5 md:gap-3">
              {stadtteile.map((stadtteil, index) => (
                <Link 
                  key={stadtteil.name} 
                  to={stadtteil.link}
                  onMouseEnter={() => setHoveredStadtteil(index)}
                  onMouseLeave={() => setHoveredStadtteil(null)}
                  className={`group relative px-3 py-2 md:px-5 md:py-3 rounded-lg md:rounded-xl transition-all duration-300 ${
                    hoveredStadtteil === index
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 scale-105 z-10'
                      : 'bg-background border border-border text-foreground hover:border-primary/50'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 20}ms`,
                  }}
                >
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <MapPin className={`w-3 h-3 md:w-3.5 md:h-3.5 transition-all duration-300 ${
                      hoveredStadtteil === index ? 'text-white' : 'text-primary/50 group-hover:text-primary'
                    }`} />
                    <span className="font-medium text-xs md:text-sm whitespace-nowrap">{stadtteil.name}</span>
                  </div>
                </Link>
              ))}
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
