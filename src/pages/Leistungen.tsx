import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Stethoscope, Home, Activity, Utensils, Clock, FileText, UserCheck, Check, HeartPulse } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import CTADropdownButton from "@/components/CTADropdownButton";

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
    id: "ausserklinische-intensivpflege-frankfurt-am-main",
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
    id: "haushaltshilfe",
    icon: Utensils,
    title: "Haushaltshilfe",
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
  {
    id: "24-stunden-pflege",
    icon: Clock,
    title: "24-Stunden-Pflege",
    shortDescription: "Rund-um-die-Uhr Betreuung zu Hause",
    description: "Rund-um-die-Uhr Betreuung zu Hause – die Alternative zum Pflegeheim.",
    details: [
      "Betreuung rund um die Uhr",
      "Hauswirtschaftliche Versorgung",
      "Gesellschaft und Aktivierung",
      "Unterstützung im Alltag",
      "Flexible Betreuungsmodelle",
      "Entlastung pflegender Angehöriger",
    ],
  },
  {
    id: "pflegeberatung-frankfurt",
    icon: FileText,
    title: "Pflegeberatung",
    shortDescription: "Kostenlose Beratung zu Pflegeleistungen",
    description: "Kostenlose Beratung zu Pflegeleistungen, Pflegegrad und Ansprüchen.",
    details: [
      "Beratung nach § 37.3 SGB XI",
      "Unterstützung bei Pflegegradantrag",
      "Informationen zu Leistungsansprüchen",
      "Hilfe bei Widerspruchsverfahren",
      "Vermittlung weiterer Hilfsangebote",
      "Entlastung pflegender Angehöriger",
    ],
  },
  {
    id: "verhinderungspflege-frankfurt",
    icon: UserCheck,
    title: "Verhinderungspflege",
    shortDescription: "Vertretung für pflegende Angehörige",
    description: "Professionelle Vertretung für pflegende Angehörige bei Urlaub oder Krankheit.",
    details: [
      "Stundenweise Entlastung",
      "Tageweise Vertretung",
      "Urlaubsvertretung",
      "Vertretung bei Krankheit",
      "Flexible Einsatzzeiten",
      "Kombinierbar mit Kurzzeitpflege",
    ],
  },
];

const Leistungen = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <>
      <Helmet>
        <title>Unsere Leistungen | Ambulante Pflege Frankfurt | AVYTA</title>
        <meta name="description" content="Professionelle Pflegeleistungen in Frankfurt: Grundpflege, Behandlungspflege, Intensivpflege, 24-Stunden-Pflege, Verhinderungspflege, Haushaltshilfe und Pflegeberatung. Jetzt beraten lassen!" />
        <meta name="keywords" content="Ambulante Pflege Leistungen Frankfurt, Grundpflege, Behandlungspflege, Intensivpflege, 24 Stunden Pflege, Pflegeberatung" />
        <meta property="og:title" content="Unsere Leistungen | AVYTA Ambulanter Pflegedienst" />
        <meta property="og:description" content="Von der Grundpflege bis zur spezialisierten Intensivpflege – alle Leistungen aus einer Hand." />
        <link rel="canonical" href="https://www.avyta.de/leistungen" />
      </Helmet>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              Unsere Leistungen
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-foreground mb-4 md:mb-6">
              Professionelle Pflege für jeden Bedarf
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
              Von der Grundpflege bis zur spezialisierten Intensivpflege – wir bieten 
              alle Leistungen aus einer Hand, individuell auf Ihre Bedürfnisse abgestimmt.
            </p>
          </div>
        </div>
      </section>

      {/* Services Selection Section */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Service List - Left Side / Top on Mobile */}
            <div className="lg:col-span-1">
              <h2 className="text-lg md:text-xl font-display font-semibold text-foreground mb-4 md:mb-6">
                Wählen Sie eine Leistung
              </h2>
              
              {/* Mobile: Horizontal Scrollable Pills */}
              <div className="lg:hidden overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => {
                    const Icon = service.icon;
                    const isSelected = selectedService.id === service.id;
                    
                    return (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
                          isSelected 
                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                            : "bg-card border border-border hover:border-primary/30"
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isSelected ? "text-primary-foreground" : "text-primary"}`} />
                        <span className={`text-sm font-medium ${isSelected ? "text-primary-foreground" : "text-foreground"}`}>
                          {service.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Desktop: Vertical List */}
              <div className="hidden lg:block space-y-3">
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

            {/* Service Details - Right Side / Below on Mobile */}
            <div className="lg:col-span-2">
              <Card variant="elevated" className="h-full">
                <CardContent className="p-5 md:p-8">
                  {/* Service Header */}
                  <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 mb-6 md:mb-8">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <selectedService.icon className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                        {selectedService.title}
                      </h2>
                      <p className="text-base md:text-lg text-muted-foreground">
                        {selectedService.description}
                      </p>
                    </div>
                  </div>

                  {/* Service Details List */}
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                      Was wir bieten
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {selectedService.details.map((detail, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                        >
                          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                          </div>
                          <span className="text-sm md:text-base text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <CTADropdownButton />
                    <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                      <Link to={`/leistungen/${selectedService.id}`}>Mehr erfahren</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <Card variant="flat" className="text-center p-4 md:p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Check className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-base md:text-lg text-foreground mb-2">
                  Kostenlose Beratung
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Wir beraten Sie unverbindlich zu allen Leistungen und Fördermöglichkeiten.
                </p>
              </CardContent>
            </Card>
            
            <Card variant="flat" className="text-center p-4 md:p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <HeartPulse className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-base md:text-lg text-foreground mb-2">
                  Individuelle Pflege
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Jeder Pflegeplan wird individuell auf Ihre Bedürfnisse abgestimmt.
                </p>
              </CardContent>
            </Card>
            
            <Card variant="flat" className="text-center p-4 md:p-6 sm:col-span-2 md:col-span-1">
              <CardContent className="p-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Activity className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-base md:text-lg text-foreground mb-2">
                  24/7 Erreichbarkeit
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Wir sind rund um die Uhr für Sie da – auch an Wochenenden und Feiertagen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
    </>
  );
};

export default Leistungen;
