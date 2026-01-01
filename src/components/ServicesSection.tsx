import { ArrowRight, Stethoscope, Home, Activity, Utensils, Clock, FileText, UserCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  { icon: Stethoscope, title: "Behandlungspflege", description: "Medizinische Versorgung nach ärztlicher Verordnung: Wundversorgung, Injektionen, Verbandswechsel.", link: "/leistungen/behandlungspflege" },
  { icon: Home, title: "Grundpflege", description: "Unterstützung bei der Körperpflege, An- und Auskleiden, Mobilität und alltäglichen Verrichtungen.", link: "/leistungen/grundpflege" },
  { icon: Activity, title: "Intensivpflege", description: "Spezialisierte Betreuung für beatmungspflichtige Patienten und komplexe Pflegesituationen.", link: "/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" },
  { icon: Utensils, title: "Haushaltshilfe", description: "Hilfe im Haushalt: Einkaufen, Kochen, Reinigung und Organisation des Alltags.", link: "/leistungen/haushaltshilfe" },
  { icon: Clock, title: "24-Stunden-Pflege", description: "Rund-um-die-Uhr Betreuung zu Hause – die Alternative zum Pflegeheim.", link: "/leistungen/24-stunden-pflege" },
  { icon: FileText, title: "Pflegeberatung", description: "Kostenlose Beratung zu Pflegeleistungen, Pflegegrad und Ansprüchen.", link: "/leistungen/pflegeberatung-frankfurt" },
  { icon: UserCheck, title: "Verhinderungspflege", description: "Professionelle Vertretung für pflegende Angehörige bei Urlaub oder Krankheit.", link: "/leistungen/verhinderungspflege-frankfurt" },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-secondary/30" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Unsere Leistungen</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Umfassende Pflege für jede Situation</h2>
          <p className="text-lg text-muted-foreground">Von der Grundpflege bis zur spezialisierten Intensivpflege – wir bieten alle Leistungen aus einer Hand.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={service.title} variant="elevated" className="group cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{service.description}</p>
                <Link to={service.link} className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200">
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="group" asChild>
            <Link to="/leistungen">Alle Leistungen entdecken <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
