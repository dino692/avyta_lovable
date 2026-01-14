import { Heart, Users, Clock, Award, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const features = [
  { 
    icon: Users, 
    title: "Nur Frauen als Pflegerinnen", 
    description: "Unser Team besteht ausschließlich aus qualifizierten Pflegerinnen – für ein besonders vertrauensvolles Pflegeerlebnis.",
    gradient: "from-pink-500/20 to-primary/10",
  },
  { 
    icon: Clock, 
    title: "24/7 Erreichbarkeit", 
    description: "Ob Tag oder Nacht – wir sind immer für Sie da. Unsere Notfall-Hotline ist rund um die Uhr besetzt.",
    gradient: "from-blue-500/20 to-accent/10",
  },
  { 
    icon: Heart, 
    title: "Spezialisiert auf Demenz", 
    description: "Wir sind speziell geschult im Umgang mit Demenzerkrankungen und bieten einfühlsame, kompetente Betreuung.",
    gradient: "from-rose-500/20 to-primary/10",
  },
  { 
    icon: Award, 
    title: "Spezialisiert auf Diabetes", 
    description: "Unsere Pflegekräfte sind Experten für die Betreuung von Diabetes-Patienten mit allen notwendigen Versorgungsleistungen.",
    gradient: "from-amber-500/20 to-accent/10",
  },
];

const AboutSection = () => {
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
    <section ref={sectionRef} className="py-28 overflow-hidden relative" id="about">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left side - Content */}
          <div className="space-y-10">
            {/* Header */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 rounded-full mb-6">
                <Heart className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                  Wer sind wir
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Was uns{" "}
                <span className="relative">
                  <span className="text-primary">besonders</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 4 150 4 198 10" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
                  </svg>
                </span>{" "}
                macht
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unser Team aus qualifizierten Pflegekräften versteht, dass gute Pflege mehr ist als nur medizinische Versorgung – es geht um Menschlichkeit, Würde und Lebensqualität.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className={`group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Mission card */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
            
            {/* Main card */}
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-10 text-primary-foreground shadow-2xl shadow-primary/20">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10 overflow-hidden rounded-3xl">
                  <div className="absolute top-4 right-4 w-32 h-32 border border-white rounded-full" />
                  <div className="absolute bottom-4 left-4 w-20 h-20 border border-white rounded-full" />
                </div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-semibold">Unsere Mission</span>
                  </div>
                  
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    Spezialisiert auf das, was zählt
                  </h3>
                  
                  <p className="text-lg leading-relaxed opacity-90 mb-8">
                    Im Laufe der Jahre und mit stetiger Nachfrage haben wir entschieden unsere Fähigkeiten zu erweitern und uns für ein Fachgebiet spezialisiert und zertifiziert: Demenz- und Diabetes Erkrankungen.
                  </p>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl border-2 border-white/30">
                      👩‍⚕️
                    </div>
                    <div>
                      <div className="font-display font-bold text-lg">Jasmina Müller</div>
                      <div className="text-sm opacity-80">Geschäftsleitung, PDL & Praxisanleitung</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats card */}
              <div className="absolute -bottom-8 right-4 md:-right-8 glass rounded-2xl p-6 shadow-xl border border-white/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-display font-bold text-primary">20+</div>
                    <div className="text-sm text-muted-foreground">Mitarbeiter</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-display font-bold text-accent">2</div>
                    <div className="text-sm text-muted-foreground">Standorte</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;