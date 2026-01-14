import { ArrowRight, Stethoscope, Home, Activity, Utensils, Clock, FileText, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  { 
    icon: Stethoscope, 
    title: "Behandlungspflege", 
    description: "Medizinische Versorgung nach ärztlicher Verordnung: Wundversorgung, Injektionen, Verbandswechsel.", 
    link: "/leistungen/behandlungspflege",
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-500/10 to-pink-500/10"
  },
  { 
    icon: Home, 
    title: "Grundpflege", 
    description: "Unterstützung bei der Körperpflege, An- und Auskleiden, Mobilität und alltäglichen Verrichtungen.", 
    link: "/leistungen/grundpflege",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-500/10 to-indigo-500/10"
  },
  { 
    icon: Activity, 
    title: "Intensivpflege", 
    description: "Spezialisierte Betreuung für beatmungspflichtige Patienten und komplexe Pflegesituationen.", 
    link: "/leistungen/ausserklinische-intensivpflege-frankfurt-am-main",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-500/10 to-teal-500/10"
  },
  { 
    icon: Utensils, 
    title: "Haushaltshilfe", 
    description: "Hilfe im Haushalt: Einkaufen, Kochen, Reinigung und Organisation des Alltags.", 
    link: "/leistungen/haushaltshilfe",
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-500/10 to-orange-500/10"
  },
  { 
    icon: Clock, 
    title: "24-Stunden-Pflege", 
    description: "Rund-um-die-Uhr Betreuung zu Hause – die Alternative zum Pflegeheim.", 
    link: "/leistungen/24-stunden-pflege",
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-500/10 to-purple-500/10"
  },
  { 
    icon: FileText, 
    title: "Pflegeberatung", 
    description: "Kostenlose Beratung zu Pflegeleistungen, Pflegegrad und Ansprüchen.", 
    link: "/leistungen/pflegeberatung-frankfurt",
    gradient: "from-cyan-500 to-sky-600",
    bgGradient: "from-cyan-500/10 to-sky-500/10"
  },
  { 
    icon: UserCheck, 
    title: "Verhinderungspflege", 
    description: "Professionelle Vertretung für pflegende Angehörige bei Urlaub oder Krankheit.", 
    link: "/leistungen/verhinderungspflege-frankfurt",
    gradient: "from-fuchsia-500 to-pink-600",
    bgGradient: "from-fuchsia-500/10 to-pink-500/10"
  },
];

const ServicesSection = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="services">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Unsere Leistungen</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Umfassende Pflege für <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">jede Situation</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Von der Grundpflege bis zur spezialisierten Intensivpflege – wir bieten alle Leistungen aus einer Hand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="group relative block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <div className="relative h-full bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Background pattern on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-200">
                    Mehr erfahren 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg" 
            asChild
          >
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
