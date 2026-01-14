import { Phone, FileText, Users, Calendar, Heart, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Erstkontakt",
    description: "Rufen Sie uns an oder füllen Sie unser Kontaktformular aus. Wir melden uns innerhalb von 24 Stunden.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconGradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: Users,
    title: "Persönliches Kennenlernen",
    description: "Wir besuchen Sie zu Hause und lernen Sie und Ihre Situation persönlich kennen.",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconGradient: "from-violet-500 to-purple-500",
  },
  {
    number: "03",
    icon: FileText,
    title: "Bedarfsanalyse",
    description: "Gemeinsam ermitteln wir Ihren individuellen Pflegebedarf und besprechen alle Möglichkeiten.",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconGradient: "from-amber-500 to-orange-500",
  },
  {
    number: "04",
    icon: Calendar,
    title: "Pflegeplan erstellen",
    description: "Wir erstellen einen maßgeschneiderten Pflegeplan, der genau auf Ihre Bedürfnisse abgestimmt ist.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconGradient: "from-emerald-500 to-teal-500",
  },
  {
    number: "05",
    icon: Heart,
    title: "Pflege beginnt",
    description: "Ihr persönliches Pflegeteam startet die liebevolle Betreuung in Ihrem Zuhause.",
    gradient: "from-rose-500/20 to-pink-500/20",
    iconGradient: "from-rose-500 to-pink-500",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="how-it-works">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              So funktioniert's
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">5 Schritten</span> zu Ihrer Pflege
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Wir machen es Ihnen so einfach wie möglich. Von der ersten Anfrage bis 
            zur regelmäßigen Betreuung – wir begleiten Sie auf jedem Schritt.
          </p>
        </div>

        {/* Steps - Timeline Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="h-full bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50" />
          </div>
          
          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-[calc(50%-40px)] ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className="group relative">
                    {/* Card glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${step.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-lg group-hover:border-primary/30 group-hover:shadow-xl transition-all duration-500">
                      {/* Step number badge */}
                      <div className={`absolute -top-4 ${index % 2 === 0 ? "lg:right-8 left-8 lg:left-auto" : "left-8"} px-4 py-1 bg-gradient-to-r ${step.iconGradient} rounded-full text-white text-sm font-bold shadow-lg`}>
                        Schritt {step.number}
                      </div>
                      
                      <div className={`flex items-start gap-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <step.icon className="w-8 h-8 text-foreground" />
                        </div>
                        <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                          <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.iconGradient} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-[calc(50%-40px)]" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            Jetzt starten
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
