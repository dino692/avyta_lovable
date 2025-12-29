import { ArrowRight, Stethoscope, Home, Pill, Activity, HeartPulse, Utensils } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Stethoscope,
    title: "Behandlungspflege",
    description: "Medizinische Versorgung nach ärztlicher Verordnung: Wundversorgung, Injektionen, Verbandswechsel und mehr.",
    link: "/leistungen/behandlungspflege",
  },
  {
    icon: Home,
    title: "Grundpflege",
    description: "Unterstützung bei der Körperpflege, An- und Auskleiden, Mobilität und allen alltäglichen Verrichtungen.",
    link: "/leistungen/grundpflege",
  },
  {
    icon: Pill,
    title: "Medikamentenmanagement",
    description: "Sichere Verwaltung und Verabreichung Ihrer Medikamente – pünktlich und zuverlässig.",
    link: "/leistungen/medikamente",
  },
  {
    icon: Activity,
    title: "Intensivpflege",
    description: "Spezialisierte Betreuung für beatmungspflichtige Patienten und komplexe Pflegesituationen.",
    link: "/leistungen/intensivpflege",
  },
  {
    icon: HeartPulse,
    title: "Palliativpflege",
    description: "Einfühlsame Begleitung in der letzten Lebensphase – würdevoll und schmerzfrei.",
    link: "/leistungen/palliativ",
  },
  {
    icon: Utensils,
    title: "Hauswirtschaft",
    description: "Hilfe im Haushalt: Einkaufen, Kochen, Reinigung und Organisation des Alltags.",
    link: "/leistungen/hauswirtschaft",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-secondary/30" id="services">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Umfassende Pflege für jede Situation
          </h2>
          <p className="text-lg text-muted-foreground">
            Von der Grundpflege bis zur spezialisierten Intensivpflege – wir bieten 
            alle Leistungen aus einer Hand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              variant="elevated"
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="group">
            Alle Leistungen entdecken
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
