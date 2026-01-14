import { Heart, Users, Clock, Award, Sparkles } from "lucide-react";

const features = [
  { 
    icon: Users, 
    title: "Nur Frauen als Pflegerinnen", 
    description: "Unser Team besteht ausschließlich aus qualifizierten Pflegerinnen – für ein besonders vertrauensvolles Pflegeerlebnis.",
    gradient: "from-rose-500 to-pink-500"
  },
  { 
    icon: Clock, 
    title: "24/7 Erreichbarkeit", 
    description: "Ob Tag oder Nacht – wir sind immer für Sie da. Unsere Notfall-Hotline ist rund um die Uhr besetzt.",
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    icon: Heart, 
    title: "Spezialisiert auf Demenz", 
    description: "Wir sind speziell geschult im Umgang mit Demenzerkrankungen und bieten einfühlsame, kompetente Betreuung.",
    gradient: "from-violet-500 to-purple-500"
  },
  { 
    icon: Award, 
    title: "Spezialisiert auf Diabetes", 
    description: "Unsere Pflegekräfte sind Experten für die Betreuung von Diabetes-Patienten mit allen notwendigen Versorgungsleistungen.",
    gradient: "from-amber-500 to-orange-500"
  },
];

const AboutSection = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="about">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Floating orbs */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Features */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent/10 to-primary/10 backdrop-blur-sm rounded-full border border-accent/20 mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">Wer sind wir</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Was uns <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">besonders</span> macht
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Unser Team aus qualifizierten Pflegekräften versteht, dass gute Pflege mehr ist als nur medizinische Versorgung – es geht um Menschlichkeit, Würde und Lebensqualität.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Card glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  <div className="relative p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 h-full">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
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
          
          {/* Right side - Mission Card */}
          <div className="relative">
            {/* Background glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-50" />
            
            <div className="relative">
              {/* Main mission card */}
              <div className="bg-gradient-to-br from-primary via-primary to-accent rounded-3xl p-10 text-primary-foreground shadow-2xl">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10 rounded-3xl overflow-hidden">
                  <div className="absolute top-10 right-10 w-40 h-40 border border-white rounded-full" />
                  <div className="absolute bottom-10 left-10 w-32 h-32 border border-white rounded-full" />
                </div>
                
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                    <Heart className="w-4 h-4" fill="currentColor" />
                    <span className="text-sm font-semibold">Unsere Mission</span>
                  </div>
                  
                  <h3 className="font-display text-3xl font-bold mb-6">
                    Mit Herz und Expertise für Sie da
                  </h3>
                  <p className="text-xl leading-relaxed opacity-90 mb-8">
                    Im Laufe der Jahre und mit stetiger Nachfrage haben wir entschieden unsere Fähigkeiten zu erweitern und uns für ein Fachgebiet spezialisiert und zertifiziert: Demenz- und Diabetes Erkrankungen.
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl border-2 border-white/30">
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
              <div className="absolute -bottom-8 -right-8 lg:-right-12 z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-2xl blur-xl opacity-50" />
                  <div className="relative bg-card/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">20+</div>
                        <div className="text-sm text-muted-foreground">Mitarbeiter</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-display font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">2</div>
                        <div className="text-sm text-muted-foreground">Standorte</div>
                      </div>
                    </div>
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
