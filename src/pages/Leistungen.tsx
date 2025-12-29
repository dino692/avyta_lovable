import { useState } from "react";
import { ArrowRight, Stethoscope, Home, Pill, Activity, HeartPulse, Utensils, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    id: "behandlungspflege",
    icon: Stethoscope,
    title: "Behandlungspflege",
    shortDescription: "Medizinische Versorgung nach ärztlicher Verordnung",
    description: "Medizinische Versorgung nach ärztlicher Verordnung: Wundversorgung, Injektionen, Verbandswechsel und mehr.",
    details: [
      "Wundversorgung und Verbandswechsel",
      "Injektionen und Infusionen",
      "Blutdruck- und Blutzuckermessung",
      "Medikamentengabe nach Anordnung",
      "Katheterpflege",
      "Stomapflege",
    ],
  },
  {
    id: "grundpflege",
    icon: Home,
    title: "Grundpflege",
    shortDescription: "Unterstützung bei alltäglichen Verrichtungen",
    description: "Unterstützung bei der Körperpflege, An- und Auskleiden, Mobilität und allen alltäglichen Verrichtungen.",
    details: [
      "Körperpflege und Hygiene",
      "An- und Auskleiden",
      "Hilfe bei der Nahrungsaufnahme",
      "Mobilisation und Lagerung",
      "Begleitung zu Arztterminen",
      "Aktivierende Pflege",
    ],
  },
  {
    id: "medikamente",
    icon: Pill,
    title: "Medikamentenmanagement",
    shortDescription: "Sichere Verwaltung Ihrer Medikamente",
    description: "Sichere Verwaltung und Verabreichung Ihrer Medikamente – pünktlich und zuverlässig.",
    details: [
      "Medikamente stellen und verabreichen",
      "Überwachung der Einnahme",
      "Dokumentation der Medikation",
      "Abstimmung mit Ärzten und Apotheken",
      "Beratung zu Wechselwirkungen",
      "Rezeptmanagement",
    ],
  },
  {
    id: "intensivpflege",
    icon: Activity,
    title: "Intensivpflege",
    shortDescription: "Spezialisierte Betreuung rund um die Uhr",
    description: "Spezialisierte Betreuung für beatmungspflichtige Patienten und komplexe Pflegesituationen.",
    details: [
      "24-Stunden-Betreuung",
      "Beatmungspflege",
      "Tracheostoma-Versorgung",
      "Überwachung der Vitalzeichen",
      "Notfallmanagement",
      "Spezielle Wundversorgung",
    ],
  },
  {
    id: "palliativ",
    icon: HeartPulse,
    title: "Palliativpflege",
    shortDescription: "Würdevolle Begleitung in der letzten Lebensphase",
    description: "Einfühlsame Begleitung in der letzten Lebensphase – würdevoll und schmerzfrei.",
    details: [
      "Schmerzmanagement",
      "Symptomkontrolle",
      "Psychosoziale Betreuung",
      "Begleitung der Angehörigen",
      "Trauerbegleitung",
      "Koordination mit Hospizen",
    ],
  },
  {
    id: "hauswirtschaft",
    icon: Utensils,
    title: "Hauswirtschaft",
    shortDescription: "Hilfe im Haushalt und Alltag",
    description: "Hilfe im Haushalt: Einkaufen, Kochen, Reinigung und Organisation des Alltags.",
    details: [
      "Einkaufen und Besorgungen",
      "Mahlzeitenzubereitung",
      "Wohnungsreinigung",
      "Wäschepflege",
      "Begleitung bei Aktivitäten",
      "Administrative Unterstützung",
    ],
  },
];

const Leistungen = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Unsere Leistungen
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Professionelle Pflege für jeden Bedarf
            </h1>
            <p className="text-lg text-muted-foreground">
              Von der Grundpflege bis zur spezialisierten Intensivpflege – wir bieten 
              alle Leistungen aus einer Hand, individuell auf Ihre Bedürfnisse abgestimmt.
            </p>
          </div>
        </div>
      </section>

      {/* Services Selection Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service List - Left Side */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-display font-semibold text-foreground mb-6">
                Wählen Sie eine Leistung
              </h2>
              <div className="space-y-3">
                {services.map((service) => {
                  const Icon = service.icon;
                  const isSelected = selectedService.id === service.id;
                  
                  return (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                        isSelected 
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                          : "bg-card hover:bg-secondary border border-border hover:border-primary/30"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        isSelected ? "bg-primary-foreground/20" : "bg-primary/10"
                      }`}>
                        <Icon className={`w-6 h-6 ${isSelected ? "text-primary-foreground" : "text-primary"}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold ${isSelected ? "text-primary-foreground" : "text-foreground"}`}>
                          {service.title}
                        </h3>
                        <p className={`text-sm ${isSelected ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                          {service.shortDescription}
                        </p>
                      </div>
                      {isSelected && (
                        <ArrowRight className="w-5 h-5 text-primary-foreground" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Service Details - Right Side */}
            <div className="lg:col-span-2">
              <Card variant="elevated" className="h-full">
                <CardContent className="p-8">
                  {/* Service Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <selectedService.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-foreground mb-2">
                        {selectedService.title}
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        {selectedService.description}
                      </p>
                    </div>
                  </div>

                  {/* Service Details List */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Was wir bieten
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {selectedService.details.map((detail, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                        >
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="group">
                      Jetzt Beratung anfragen
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="outline">
                      Mehr erfahren
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="flat" className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  Kostenlose Beratung
                </h3>
                <p className="text-muted-foreground">
                  Wir beraten Sie unverbindlich zu allen Leistungen und Fördermöglichkeiten.
                </p>
              </CardContent>
            </Card>
            
            <Card variant="flat" className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <HeartPulse className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  Individuelle Pflege
                </h3>
                <p className="text-muted-foreground">
                  Jeder Pflegeplan wird individuell auf Ihre Bedürfnisse abgestimmt.
                </p>
              </CardContent>
            </Card>
            
            <Card variant="flat" className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  24/7 Erreichbarkeit
                </h3>
                <p className="text-muted-foreground">
                  Wir sind rund um die Uhr für Sie da – auch an Wochenenden und Feiertagen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leistungen;
