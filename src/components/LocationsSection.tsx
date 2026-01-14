import { MapPin, Phone, ArrowRight, Navigation } from "lucide-react";
import { Link } from "react-router-dom";

const locations = [
  { city: "Frankfurt", address: "Hauptstandort", phone: "069 153 914 05", link: "/standorte/frankfurt" },
  { city: "Bad Vilbel", address: "Wetteraukreis", phone: "069 153 914 05", link: "/standorte/bad-vilbel" },
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
  return (
    <section className="py-32 relative overflow-hidden" id="locations">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute top-40 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent/10 to-primary/10 backdrop-blur-sm rounded-full border border-accent/20 mb-6">
            <Navigation className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Unsere Standorte</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Immer in <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Ihrer Nähe</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            In Frankfurt und Bad Vilbel sind wir schnell bei Ihnen – für eine optimale Versorgung vor Ort.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {locations.map((location, index) => (
            <Link 
              key={location.city}
              to={location.link}
              className="group relative block"
            >
              {/* Card glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              
              <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-8 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Decorative map pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="20" cy="20" r="2" fill="currentColor" />
                    <circle cx="40" cy="30" r="2" fill="currentColor" />
                    <circle cx="60" cy="20" r="2" fill="currentColor" />
                    <circle cx="80" cy="40" r="2" fill="currentColor" />
                    <circle cx="30" cy="60" r="2" fill="currentColor" />
                    <circle cx="50" cy="50" r="3" fill="currentColor" className="text-primary" />
                    <circle cx="70" cy="70" r="2" fill="currentColor" />
                    <circle cx="20" cy="80" r="2" fill="currentColor" />
                    <line x1="20" y1="20" x2="40" y2="30" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="40" y1="30" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="50" y1="50" x2="60" y2="20" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="50" y1="50" x2="80" y2="40" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="50" y1="50" x2="30" y2="60" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {location.city}
                    </h3>
                    <p className="text-muted-foreground mb-4">{location.address}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary">
                      <Phone className="w-4 h-4" />
                      <span className="font-semibold">{location.phone}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stadtteile */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/50 backdrop-blur-sm rounded-full border border-border/50 mb-8">
            <span className="text-sm font-semibold text-foreground">Frankfurter Stadtteile</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {stadtteile.map((stadtteil, index) => (
              <Link 
                key={stadtteil.name} 
                to={stadtteil.link} 
                className="group relative"
                style={{ animationDelay: `${index * 0.02}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                <span className="relative inline-block px-5 py-2.5 rounded-full bg-card border border-border/50 text-foreground hover:border-primary/30 hover:text-primary transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md">
                  {stadtteil.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
