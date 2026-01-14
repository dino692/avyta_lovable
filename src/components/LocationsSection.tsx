import { MapPin, Phone, ArrowRight, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const locations = [
  { 
    city: "Frankfurt", 
    address: "Allerheiligentor 2-4, 60311 Frankfurt", 
    phone: "069 153 914 05", 
    link: "/standorte/frankfurt",
    description: "Unser Hauptsitz im Herzen Frankfurts",
    gradient: "from-primary to-accent",
  },
  { 
    city: "Bad Vilbel", 
    address: "Wetteraukreis", 
    phone: "069 153 914 05", 
    link: "/standorte/bad-vilbel",
    description: "Für die Region Wetterau und Umgebung",
    gradient: "from-accent to-primary",
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 relative overflow-hidden" id="locations">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Decorative map pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 rounded-full mb-6">
            <Navigation className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Unsere Standorte
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Immer in{" "}
            <span className="text-primary">Ihrer Nähe</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            In Frankfurt und Bad Vilbel sind wir schnell bei Ihnen – für eine optimale Versorgung vor Ort.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {locations.map((location, index) => (
            <Link
              key={location.city}
              to={location.link}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`relative p-8 md:p-10 bg-gradient-to-br ${location.gradient} text-white`}>
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <ArrowRight className="w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                  
                  <h3 className="font-display font-bold text-3xl mb-2">{location.city}</h3>
                  <p className="text-white/80 mb-4">{location.description}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm font-semibold">{location.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stadtteile */}
        <div className={`text-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8">
            Frankfurter Stadtteile
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {stadtteile.map((stadtteil, index) => (
              <Link 
                key={stadtteil.name} 
                to={stadtteil.link} 
                className="group px-5 py-2.5 rounded-full bg-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5"
                style={{ animationDelay: `${index * 0.02}s` }}
              >
                {stadtteil.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;