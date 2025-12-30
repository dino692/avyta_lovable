import { useState, useRef, useEffect } from "react";
import { Phone, Mail, FileText, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const ctaOptions = [
    { label: "Anruf", icon: Phone, href: "tel:+496915391405" },
    { label: "Email", icon: Mail, href: "mailto:info@avyta.de" },
    { label: "Kontaktformular", icon: FileText, href: "#contact" },
    { label: "Termin direkt buchen", icon: Calendar, href: "#contact" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-x-clip">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Jetzt kostenlose Beratung sichern
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
              Liebevolle Pflege
              <span className="block text-primary">in Ihrem Zuhause</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Wir begleiten Sie und Ihre Angehörigen mit Herz, Kompetenz und 
              individueller Betreuung. Unser erfahrenes Team sorgt für ein 
              selbstbestimmtes Leben in vertrauter Umgebung.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* CTA Dropdown Button */}
              <div className="relative z-50" ref={dropdownRef}>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="group"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Kostenloses Erstgespräch
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </Button>
                
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl border border-border shadow-2xl z-[100] overflow-hidden animate-fade-in">
                    {ctaOptions.map((option) => (
                      <a
                        key={option.label}
                        href={option.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-colors group/item"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                          <option.icon className="w-5 h-5 text-primary group-hover/item:text-primary-foreground" />
                        </div>
                        <span className="font-medium text-foreground">{option.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary">2.500+</div>
                <div className="text-sm text-muted-foreground">Betreute Patienten</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Zufriedenheit</div>
              </div>
            </div>
          </div>

          {/* YouTube Video */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <iframe
                src="https://www.youtube.com/embed/ITIyAG6rOUY?si=tPuFV7w-FSBCewNE"
                title="AVYTA Pflegedienst"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border hidden md:block animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">💚</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Persönliche Betreuung</div>
                  <div className="text-sm text-muted-foreground">24/7 für Sie da</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
