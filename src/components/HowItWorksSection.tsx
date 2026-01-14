import { Phone, FileText, Users, Calendar, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Erstkontakt",
    description: "Rufen Sie uns an oder füllen Sie unser Kontaktformular aus. Wir melden uns innerhalb von 24 Stunden.",
  },
  {
    number: "02",
    icon: Users,
    title: "Persönliches Kennenlernen",
    description: "Wir besuchen Sie zu Hause und lernen Sie und Ihre Situation persönlich kennen.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Bedarfsanalyse",
    description: "Gemeinsam ermitteln wir Ihren individuellen Pflegebedarf und besprechen alle Möglichkeiten.",
  },
  {
    number: "04",
    icon: Calendar,
    title: "Pflegeplan erstellen",
    description: "Wir erstellen einen maßgeschneiderten Pflegeplan, der genau auf Ihre Bedürfnisse abgestimmt ist.",
  },
  {
    number: "05",
    icon: Heart,
    title: "Pflege beginnt",
    description: "Ihr persönliches Pflegeteam startet die liebevolle Betreuung in Ihrem Zuhause.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-secondary/30" id="how-it-works">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            So funktioniert's
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            In 5 Schritten zu Ihrer Pflege
          </h2>
          <p className="text-lg text-muted-foreground">
            Wir machen es Ihnen so einfach wie möglich. Von der ersten Anfrage bis 
            zur regelmäßigen Betreuung – wir begleiten Sie auf jedem Schritt.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <Card
                key={step.number}
                variant="elevated"
                className="relative z-10 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shadow-md">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <step.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
