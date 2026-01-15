import { Phone, FileText, Users, Calendar, Heart, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Erstkontakt",
    description: "Rufen Sie uns an oder füllen Sie unser Kontaktformular aus. Wir melden uns innerhalb von 24 Stunden.",
    color: "from-primary/20 to-primary/5",
  },
  {
    number: "02",
    icon: Users,
    title: "Persönliches Kennenlernen",
    description: "Wir besuchen Sie zu Hause und lernen Sie und Ihre Situation persönlich kennen.",
    color: "from-accent/20 to-accent/5",
  },
  {
    number: "03",
    icon: FileText,
    title: "Bedarfsanalyse",
    description: "Gemeinsam ermitteln wir Ihren individuellen Pflegebedarf und besprechen alle Möglichkeiten.",
    color: "from-primary/20 to-primary/5",
  },
  {
    number: "04",
    icon: Calendar,
    title: "Pflegeplan erstellen",
    description: "Wir erstellen einen maßgeschneiderten Pflegeplan, der genau auf Ihre Bedürfnisse abgestimmt ist.",
    color: "from-accent/20 to-accent/5",
  },
  {
    number: "05",
    icon: Heart,
    title: "Pflege beginnt",
    description: "Ihr persönliches Pflegeteam startet die liebevolle Betreuung in Ihrem Zuhause.",
    color: "from-primary/20 to-primary/5",
  },
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
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
    <section ref={sectionRef} className="py-16 md:py-28 relative overflow-hidden" id="how-it-works">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background" />
      
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '48px 48px' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-10 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-primary/10 rounded-full mb-4 md:mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wider">
              So funktioniert's
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 md:mb-6">
            In 5 Schritten zu{" "}
            <span className="text-primary">Ihrer Pflege</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed px-2">
            Wir machen es Ihnen so einfach wie möglich. Von der ersten Anfrage bis 
            zur regelmäßigen Betreuung – wir begleiten Sie auf jedem Schritt.
          </p>
        </div>

        {/* Steps - Desktop Timeline */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Connection Line */}
          <div className="absolute top-[140px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
          
          {/* Progress Line */}
          <div 
            className="absolute top-[140px] left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-500"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />
          
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => {
              const isActive = index <= activeStep;
              return (
                <div
                  key={step.number}
                  className={`relative cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Step card */}
                  <div className={`text-center group ${isActive ? 'scale-105' : ''} transition-transform duration-300`}>
                    {/* Icon circle */}
                    <div className={`relative mx-auto mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} border-2 transition-all duration-300 ${isActive ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'}`}>
                      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isActive ? 'scale-110' : ''}`}>
                        <step.icon className={`w-8 h-8 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                    </div>
                    
                    {/* Connection dot */}
                    <div className={`absolute left-1/2 -translate-x-1/2 top-[88px] w-4 h-4 rounded-full border-4 transition-all duration-300 ${isActive ? 'bg-primary border-primary-foreground scale-125' : 'bg-background border-border'}`} />
                    
                    {/* Step number */}
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold mb-3 transition-all duration-300 ${isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {step.number}
                    </div>
                    
                    {/* Content */}
                    <h3 className={`font-display font-semibold text-lg mb-2 transition-colors duration-300 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-all duration-300 ${isActive ? 'text-muted-foreground opacity-100' : 'opacity-60'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Steps - Mobile Cards */}
        <div className="lg:hidden space-y-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative p-4 md:p-6 rounded-xl md:rounded-2xl glass border border-border/50 shadow-sm transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3 md:gap-4">
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center border border-primary/20`}>
                  <step.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <span className="text-[10px] md:text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 md:py-1 rounded-full">
                      Schritt {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-base md:text-lg text-foreground mb-0.5 md:mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow - hidden on smallest screens */}
                {index < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground/50 hidden sm:block flex-shrink-0" />
                )}
              </div>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 md:left-10 top-full w-0.5 h-3 bg-gradient-to-b from-primary/30 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-10 md:mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="tel:+496915391405"
            className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group text-sm md:text-base"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
            Jetzt Erstgespräch vereinbaren
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;