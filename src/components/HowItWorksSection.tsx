import { Phone, FileText, Users, Calendar, Heart, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Erstkontakt",
    description: "Rufen Sie uns an oder füllen Sie unser Kontaktformular aus. Wir melden uns innerhalb von 24 Stunden.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    number: "02",
    icon: Users,
    title: "Persönliches Kennenlernen",
    description: "Wir besuchen Sie zu Hause und lernen Sie und Ihre Situation persönlich kennen.",
    color: "from-violet-500 to-purple-400",
  },
  {
    number: "03",
    icon: FileText,
    title: "Bedarfsanalyse",
    description: "Gemeinsam ermitteln wir Ihren individuellen Pflegebedarf und besprechen alle Möglichkeiten.",
    color: "from-amber-500 to-orange-400",
  },
  {
    number: "04",
    icon: Calendar,
    title: "Pflegeplan erstellen",
    description: "Wir erstellen einen maßgeschneiderten Pflegeplan, der genau auf Ihre Bedürfnisse abgestimmt ist.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    number: "05",
    icon: Heart,
    title: "Pflege beginnt",
    description: "Ihr persönliches Pflegeteam startet die liebevolle Betreuung in Ihrem Zuhause.",
    color: "from-rose-500 to-pink-400",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="how-it-works">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Decorative line patterns */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.05),transparent_40%),radial-gradient(circle_at_80%_70%,hsl(var(--accent)/0.05),transparent_40%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-full border border-primary/20 mb-8 shadow-lg">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-primary/70 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
              <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
            </div>
            <span className="text-sm font-bold text-primary uppercase tracking-wider">So funktioniert's</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            In <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">5 Schritten</span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 to-accent/20 blur-sm rounded-full" />
            </span> zu Ihrer Pflege
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Wir machen es Ihnen so einfach wie möglich. Von der ersten Anfrage bis 
            zur regelmäßigen Betreuung – wir begleiten Sie auf jedem Schritt.
          </p>
        </div>

        {/* Steps - Modern connected layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection SVG Path */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <path 
              d="M100,80 C300,80 300,200 500,200 S700,320 900,320 S1100,440 1100,440" 
              fill="none" 
              stroke="url(#path-gradient)" 
              strokeWidth="3" 
              strokeDasharray="10 10"
              className="animate-pulse"
              style={{ animationDuration: "3s" }}
            />
            <defs>
              <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`group relative ${index === 3 ? 'lg:col-start-1 lg:translate-x-1/2' : ''} ${index === 4 ? 'lg:col-start-2 lg:translate-x-1/2' : ''}`}
              >
                {/* Card glow */}
                <div className={`absolute -inset-px bg-gradient-to-r ${step.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                
                <div className="relative h-full bg-card/80 backdrop-blur-xl rounded-3xl border border-border/50 p-8 hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  {/* Step number floating */}
                  <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg font-display font-bold text-white text-lg rotate-12 group-hover:rotate-0 transition-transform duration-300`}>
                    {index + 1}
                  </div>
                  
                  {/* Icon with ring animation */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Animated ring */}
                    <div className={`absolute inset-0 rounded-2xl border-2 border-current opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-700`} style={{ color: `hsl(var(--primary))` }} />
                  </div>
                  
                  <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a 
            href="#contact" 
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary via-primary to-accent text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300 text-lg"
          >
            <span>Jetzt starten</span>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;