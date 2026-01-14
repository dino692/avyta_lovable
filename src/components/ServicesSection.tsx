import { ArrowRight, Stethoscope, Home, Activity, Utensils, Clock, FileText, UserCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  { 
    icon: Stethoscope, 
    title: "Behandlungspflege", 
    description: "Medizinische Versorgung nach ärztlicher Verordnung: Wundversorgung, Injektionen, Verbandswechsel.", 
    link: "/leistungen/behandlungspflege",
    gradient: "from-rose-500 to-pink-500",
    iconBg: "bg-rose-500/10",
  },
  { 
    icon: Home, 
    title: "Grundpflege", 
    description: "Unterstützung bei der Körperpflege, An- und Auskleiden, Mobilität und alltäglichen Verrichtungen.", 
    link: "/leistungen/grundpflege",
    gradient: "from-blue-500 to-indigo-500",
    iconBg: "bg-blue-500/10",
  },
  { 
    icon: Activity, 
    title: "Intensivpflege", 
    description: "Spezialisierte Betreuung für beatmungspflichtige Patienten und komplexe Pflegesituationen.", 
    link: "/leistungen/ausserklinische-intensivpflege-frankfurt-am-main",
    gradient: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-500/10",
  },
  { 
    icon: Utensils, 
    title: "Haushaltshilfe", 
    description: "Hilfe im Haushalt: Einkaufen, Kochen, Reinigung und Organisation des Alltags.", 
    link: "/leistungen/haushaltshilfe",
    gradient: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-500/10",
  },
  { 
    icon: Clock, 
    title: "24-Stunden-Pflege", 
    description: "Rund-um-die-Uhr Betreuung zu Hause – die Alternative zum Pflegeheim.", 
    link: "/leistungen/24-stunden-pflege",
    gradient: "from-violet-500 to-purple-500",
    iconBg: "bg-violet-500/10",
  },
  { 
    icon: FileText, 
    title: "Pflegeberatung", 
    description: "Kostenlose Beratung zu Pflegeleistungen, Pflegegrad und Ansprüchen.", 
    link: "/leistungen/pflegeberatung-frankfurt",
    gradient: "from-cyan-500 to-sky-500",
    iconBg: "bg-cyan-500/10",
  },
  { 
    icon: UserCheck, 
    title: "Verhinderungspflege", 
    description: "Professionelle Vertretung für pflegende Angehörige bei Urlaub oder Krankheit.", 
    link: "/leistungen/verhinderungspflege-frankfurt",
    gradient: "from-fuchsia-500 to-pink-500",
    iconBg: "bg-fuchsia-500/10",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="services">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-full border border-primary/20 mb-8 shadow-lg">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Unsere Leistungen</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Umfassende Pflege für{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">jede Situation</span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 to-accent/20 blur-sm rounded-full" />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Von der Grundpflege bis zur spezialisierten Intensivpflege – wir bieten alle Leistungen aus einer Hand.
          </p>
        </div>

        {/* Services Grid - Bento-style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className={`group relative block ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Card glow */}
              <div className={`absolute -inset-px bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
              
              <div className="relative h-full bg-card/80 backdrop-blur-xl rounded-3xl border border-border/50 p-7 hover:border-primary/30 transition-all duration-500 overflow-hidden group-hover:-translate-y-1 group-hover:shadow-2xl">
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                
                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${service.gradient} opacity-5 rounded-bl-[4rem]`} />
                
                {/* Content */}
                <div className="relative">
                  {/* Icon with animated ring */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`absolute inset-0 rounded-2xl border-2 ${service.iconBg.replace('bg-', 'border-').replace('/10', '')} opacity-0 group-hover:opacity-50 group-hover:scale-125 transition-all duration-500`} />
                  </div>
                  
                  <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all duration-300">
                    <span>Mehr erfahren</span>
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
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
            className="group bg-gradient-to-r from-primary via-primary to-accent hover:opacity-90 text-white shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 px-10 py-7 text-lg rounded-full" 
            asChild
          >
            <Link to="/leistungen">
              <span>Alle Leistungen entdecken</span>
              <div className="w-8 h-8 ml-3 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;