import { ArrowRight, Stethoscope, Home, Activity, Utensils, Clock, FileText, UserCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const services = [
  { 
    icon: Stethoscope, 
    title: "Behandlungspflege", 
    description: "Medizinische Versorgung nach ärztlicher Verordnung: Wundversorgung, Injektionen, Verbandswechsel.", 
    link: "/leistungen/behandlungspflege",
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
  },
  { 
    icon: Home, 
    title: "Grundpflege", 
    description: "Unterstützung bei der Körperpflege, An- und Auskleiden, Mobilität und alltäglichen Verrichtungen.", 
    link: "/leistungen/grundpflege",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
  },
  { 
    icon: Activity, 
    title: "Intensivpflege", 
    description: "Spezialisierte Betreuung für beatmungspflichtige Patienten und komplexe Pflegesituationen.", 
    link: "/leistungen/ausserklinische-intensivpflege-frankfurt-am-main",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
  },
  { 
    icon: Utensils, 
    title: "Haushaltshilfe", 
    description: "Hilfe im Haushalt: Einkaufen, Kochen, Reinigung und Organisation des Alltags.", 
    link: "/leistungen/haushaltshilfe",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
  },
  { 
    icon: Clock, 
    title: "24-Stunden-Pflege", 
    description: "Rund-um-die-Uhr Betreuung zu Hause – die Alternative zum Pflegeheim.", 
    link: "/leistungen/24-stunden-pflege",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
  },
  { 
    icon: FileText, 
    title: "Pflegeberatung", 
    description: "Kostenlose Beratung zu Pflegeleistungen, Pflegegrad und Ansprüchen.", 
    link: "/leistungen/pflegeberatung-frankfurt",
    color: "from-primary to-accent",
    bgColor: "bg-primary/5",
  },
  { 
    icon: UserCheck, 
    title: "Verhinderungspflege", 
    description: "Professionelle Vertretung für pflegende Angehörige bei Urlaub oder Krankheit.", 
    link: "/leistungen/verhinderungspflege-frankfurt",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 relative overflow-hidden" id="services">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30" />
      
      {/* Decorative blobs */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Unsere Leistungen
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Umfassende Pflege für{" "}
            <span className="text-primary">jede Situation</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Von der Grundpflege bis zur spezialisierten Intensivpflege – wir bieten alle Leistungen aus einer Hand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.05}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative p-6 md:p-8 h-full bg-card border border-border/50 rounded-3xl transition-all duration-500 ${hoveredIndex === index ? 'border-transparent shadow-2xl -translate-y-2' : 'hover:shadow-lg'}`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110`}>
                    <service.icon className={`w-8 h-8 text-primary group-hover:text-white transition-colors duration-300`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1 group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-primary font-semibold group-hover:text-white transition-colors duration-300">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button size="lg" className="group px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all" asChild>
            <Link to="/leistungen">
              Alle Leistungen entdecken
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;