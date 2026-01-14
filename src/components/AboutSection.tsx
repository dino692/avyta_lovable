import { Heart, Users, Clock, Award, Sparkles, Quote } from "lucide-react";

const features = [
  { 
    icon: Users, 
    title: "Nur Frauen als Pflegerinnen", 
    description: "Unser Team besteht ausschließlich aus qualifizierten Pflegerinnen – für ein besonders vertrauensvolles Pflegeerlebnis.",
    gradient: "from-rose-500 to-pink-400",
    bg: "bg-rose-500/10"
  },
  { 
    icon: Clock, 
    title: "24/7 Erreichbarkeit", 
    description: "Ob Tag oder Nacht – wir sind immer für Sie da. Unsere Notfall-Hotline ist rund um die Uhr besetzt.",
    gradient: "from-blue-500 to-cyan-400",
    bg: "bg-blue-500/10"
  },
  { 
    icon: Heart, 
    title: "Spezialisiert auf Demenz", 
    description: "Wir sind speziell geschult im Umgang mit Demenzerkrankungen und bieten einfühlsame, kompetente Betreuung.",
    gradient: "from-violet-500 to-purple-400",
    bg: "bg-violet-500/10"
  },
  { 
    icon: Award, 
    title: "Spezialisiert auf Diabetes", 
    description: "Unsere Pflegekräfte sind Experten für die Betreuung von Diabetes-Patienten mit allen notwendigen Versorgungsleistungen.",
    gradient: "from-amber-500 to-orange-400",
    bg: "bg-amber-500/10"
  },
];

const AboutSection = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="about">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] -left-32 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] -right-32 w-80 h-80 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Features */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent/10 to-primary/10 backdrop-blur-sm rounded-full border border-accent/20 mb-8 shadow-lg">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-sm font-bold text-accent uppercase tracking-wider">Wer sind wir</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                Was uns{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">besonders</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M2 6C50 2 150 2 198 6" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
                  </svg>
                </span>{" "}
                macht
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Unser Team aus qualifizierten Pflegekräften versteht, dass gute Pflege mehr ist als nur medizinische Versorgung – es geht um Menschlichkeit, Würde und Lebensqualität.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="group relative"
                >
                  {/* Hover glow */}
                  <div className={`absolute -inset-px bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                  
                  <div className="relative p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 h-full group-hover:-translate-y-1 group-hover:shadow-xl">
                    {/* Icon */}
                    <div className="relative mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className={`absolute inset-0 rounded-2xl ${feature.bg} blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
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
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/25 via-accent/20 to-primary/25 rounded-[3rem] blur-3xl opacity-50" />
            
            <div className="relative">
              {/* Main mission card */}
              <div className="relative bg-gradient-to-br from-primary via-primary to-accent rounded-3xl p-10 lg:p-12 text-primary-foreground shadow-2xl overflow-hidden">
                {/* Decorative patterns */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 right-10 w-40 h-40 border-2 border-white rounded-full" />
                  <div className="absolute top-20 right-20 w-24 h-24 border border-white rounded-full" />
                  <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
                  <div className="absolute bottom-16 left-16 w-16 h-16 border border-white rounded-full" />
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-sm rounded-full mb-8 border border-white/20">
                    <Heart className="w-5 h-5" fill="currentColor" />
                    <span className="text-sm font-bold">Unsere Mission</span>
                  </div>
                  
                  <h3 className="font-display text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    Mit Herz und Expertise für Sie da
                  </h3>
                  
                  <div className="relative mb-8">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-white/20" />
                    <p className="text-lg lg:text-xl leading-relaxed opacity-90 pl-6">
                      Im Laufe der Jahre und mit stetiger Nachfrage haben wir entschieden unsere Fähigkeiten zu erweitern und uns für ein Fachgebiet spezialisiert und zertifiziert: Demenz- und Diabetes Erkrankungen.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-5 pt-6 border-t border-white/20">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl border-2 border-white/30 shadow-lg">
                      👩‍⚕️
                    </div>
                    <div>
                      <div className="font-display font-bold text-xl">Jasmina Müller</div>
                      <div className="text-sm opacity-80">Geschäftsleitung, PDL & Praxisanleitung</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats card floating */}
              <div className="absolute -bottom-8 -right-8 lg:-right-12 z-20 hidden md:block">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="relative bg-card/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-border/50">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="text-center">
                        <div className="text-4xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">20+</div>
                        <div className="text-sm text-muted-foreground font-medium">Mitarbeiter</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-display font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">2</div>
                        <div className="text-sm text-muted-foreground font-medium">Standorte</div>
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