import { useState } from "react";
import { ArrowRight, Stethoscope, Home, Activity, Utensils, Clock, FileText, UserCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  { 
    id: "grundpflege",
    icon: Home, 
    title: "Grundpflege", 
    description: "Unterstützung bei der Körperpflege, An- und Auskleiden, Mobilität und alltäglichen Verrichtungen.",
    details: [
      "Körperpflege (Waschen, Duschen, Baden)",
      "An- und Auskleiden",
      "Hilfe bei der Nahrungsaufnahme",
      "Mobilisation und Lagerung",
    ],
    link: "/leistungen/grundpflege",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-500/10",
  },
  { 
    id: "behandlungspflege",
    icon: Stethoscope, 
    title: "Behandlungspflege", 
    description: "Medizinische Versorgung nach ärztlicher Verordnung: Wundversorgung, Injektionen, Verbandswechsel.",
    details: [
      "Wundversorgung und Verbandswechsel",
      "Medikamentengabe und Injektionen",
      "Blutdruck- und Blutzuckermessung",
      "Katheter- und Stomaversorgung",
    ],
    link: "/leistungen/behandlungspflege",
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-500/10",
  },
  { 
    id: "hauswirtschaft",
    icon: Utensils, 
    title: "Hauswirtschaft", 
    description: "Hilfe im Haushalt: Einkaufen, Kochen, Reinigung und Organisation des Alltags.",
    details: [
      "Reinigung der Wohnung (Saugen, Wischen)",
      "Einkaufen und Besorgungen",
      "Zubereitung von Mahlzeiten",
      "Wäsche waschen und bügeln",
    ],
    link: "/leistungen/haushaltshilfe",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
  },
  { 
    id: "betreuung",
    icon: Clock, 
    title: "24h-Betreuung", 
    description: "Rund-um-die-Uhr Betreuung zu Hause – die Alternative zum Pflegeheim.",
    details: [
      "Ganztägige Anwesenheit",
      "Begleitung zu Terminen",
      "Gesellschaft und Aktivitäten",
      "Nachtwache bei Bedarf",
    ],
    link: "/leistungen/24-stunden-pflege",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
  },
  { 
    id: "beratung",
    icon: FileText, 
    title: "Beratung", 
    description: "Kostenlose Beratung zu Pflegeleistungen, Pflegegrad und Ansprüchen.",
    details: [
      "Pflegegrad-Beantragung",
      "Beratung nach §37.3 SGB XI",
      "Hilfsmittelberatung",
      "Entlastungsleistungen",
    ],
    link: "/leistungen/pflegeberatung-frankfurt",
    color: "from-cyan-500 to-sky-500",
    bgColor: "bg-cyan-500/10",
  },
];

const TabServicesSection = () => {
  const [activeTab, setActiveTab] = useState("grundpflege");
  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-[#f7f9fc] to-white" id="services">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Individuelle Unterstützung
          </h2>
          <p className="text-xl text-muted-foreground">
            Wählen Sie einen Bereich aus, um mehr zu erfahren.
          </p>
        </div>

        {/* Tab Navigation - Horizontal pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 overflow-hidden ${
                activeTab === service.id
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30"
                  : "bg-white text-foreground/70 hover:text-primary hover:bg-primary/10 border border-border hover:border-primary/30 shadow-sm"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left - All service cards as overview */}
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={service.link}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(service.id);
                }}
                className={`group relative block p-6 rounded-3xl border-2 transition-all duration-300 cursor-pointer ${
                  activeTab === service.id
                    ? "border-primary bg-white shadow-xl shadow-primary/10"
                    : "border-border/50 bg-white/80 hover:border-primary/30 hover:shadow-lg"
                }`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                {/* Arrow link */}
                <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
                  <span>Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Active indicator */}
                {activeTab === service.id && (
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary animate-pulse" />
                )}
              </Link>
            ))}
          </div>

          {/* Right - Active service detail */}
          <div className="relative">
            {/* Glow effect */}
            <div className={`absolute -inset-4 bg-gradient-to-r ${activeService.color} rounded-[3rem] blur-2xl opacity-10`} />
            
            <div className="relative bg-white rounded-3xl border border-border/50 shadow-2xl shadow-primary/5 overflow-hidden">
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${activeService.color} p-8 text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <activeService.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-white/70 font-bold">Hilfe im Alltag</span>
                    <h3 className="text-2xl font-display font-bold">{activeService.title}</h3>
                  </div>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Details list */}
              <div className="p-8">
                <ul className="space-y-4">
                  {activeService.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-foreground/80">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-8">
                  <Button
                    size="lg"
                    className={`group w-full bg-gradient-to-r ${activeService.color} hover:opacity-90 text-white rounded-2xl py-6 font-bold text-lg shadow-lg`}
                    asChild
                  >
                    <a href="tel:+4969920388770">
                      <Phone className="w-5 h-5 mr-2" />
                      <span>Anfragen</span>
                    </a>
                  </Button>
                </div>

                {/* Location badge */}
                <div className="mt-4 flex justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-semibold">
                    In Frankfurt & Umgebung
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA to all services */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline"
            className="group border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 px-10 py-7 text-lg rounded-full" 
            asChild
          >
            <Link to="/leistungen">
              <span className="font-bold">Alle Leistungen</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TabServicesSection;
