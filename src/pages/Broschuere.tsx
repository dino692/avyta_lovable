import { Helmet } from "react-helmet-async";
import { Phone, Mail, Heart, Shield, Clock, Users, MapPin, Star, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import avytaLogo from "@/assets/avyta-logo.png";

const Broschuere = () => {
  return (
    <>
      <Helmet>
        <title>AVYTA Infobroschüre - Ambulanter Pflegedienst Frankfurt</title>
        <meta name="description" content="Informationsbroschüre von AVYTA - Ihrem ambulanten Pflegedienst in Frankfurt am Main. Alle Leistungen im Überblick." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      {/* Print-optimized styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 15mm;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
          .print-break {
            page-break-before: always;
          }
        }
      `}</style>

      {/* Print Button */}
      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <Button 
          onClick={() => window.print()} 
          className="bg-primary hover:bg-primary/90 shadow-lg"
        >
          Als PDF speichern / Drucken
        </Button>
        <Button 
          variant="outline" 
          onClick={() => window.history.back()}
        >
          Zurück
        </Button>
      </div>

      <div className="min-h-screen bg-white">
        {/* Page 1: Cover */}
        <section className="min-h-[297mm] p-8 md:p-12 flex flex-col bg-gradient-to-br from-primary/5 via-white to-accent/5 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          {/* Header */}
          <div className="flex justify-between items-start mb-12 relative z-10">
            <img src={avytaLogo} alt="AVYTA Logo" className="h-16 md:h-20" />
            <div className="text-right text-sm text-muted-foreground">
              <p>Ambulanter Pflegedienst</p>
              <p>Frankfurt am Main</p>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 flex flex-col justify-center max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full w-fit mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Über 12 Jahre Erfahrung</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Liebevolle Pflege
              <span className="block text-primary">in Ihrem Zuhause</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Wir begleiten Sie und Ihre Angehörigen mit Herz, Kompetenz und 
              individueller Betreuung – für ein selbstbestimmtes Leben in vertrauter Umgebung.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="text-center p-4 bg-white/80 rounded-xl shadow-sm border border-border/50">
                <div className="text-3xl font-bold text-primary">12+</div>
                <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-xl shadow-sm border border-border/50">
                <div className="text-3xl font-bold text-primary">2500+</div>
                <div className="text-sm text-muted-foreground">Betreute Patienten</div>
              </div>
              <div className="text-center p-4 bg-white/80 rounded-xl shadow-sm border border-border/50">
                <div className="text-3xl font-bold text-primary">5,0</div>
                <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  Google
                </div>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 relative z-10 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Jetzt kostenlos beraten lassen!</h2>
                <p className="text-primary-foreground/80">Wir sind für Sie da – auch am Wochenende</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+496915391405" 
                  className="flex items-center gap-3 bg-white text-primary px-6 py-4 rounded-xl font-bold hover:bg-white/90 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs text-primary/70">Rufen Sie uns an</div>
                    <div className="text-lg">069 153 914 05</div>
                  </div>
                </a>
                <a 
                  href="mailto:info@avyta.de" 
                  className="flex items-center gap-3 bg-white/20 text-white px-6 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border border-white/30"
                >
                  <Mail className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs text-white/70">Schreiben Sie uns</div>
                    <div className="text-lg">info@avyta.de</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Page 2: Services */}
        <section className="min-h-[297mm] p-8 md:p-12 print-break">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Unsere Leistungen im Überblick
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Von der Grundpflege bis zur Intensivpflege – wir bieten Ihnen ein umfassendes 
              Leistungsspektrum für jede Pflegesituation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: Heart,
                title: "Grundpflege",
                description: "Unterstützung bei der Körperpflege, beim An- und Auskleiden, bei der Ernährung und Mobilität.",
                highlight: "SGB XI"
              },
              {
                icon: Shield,
                title: "Behandlungspflege",
                description: "Medizinische Versorgung wie Wundversorgung, Injektionen, Medikamentengabe und Verbandswechsel.",
                highlight: "SGB V"
              },
              {
                icon: Clock,
                title: "24-Stunden-Pflege",
                description: "Rund-um-die-Uhr-Betreuung in vertrauter häuslicher Umgebung durch qualifizierte Pflegekräfte.",
                highlight: "Individuell"
              },
              {
                icon: Users,
                title: "Verhinderungspflege",
                description: "Vertretung pflegender Angehöriger bei Urlaub, Krankheit oder sonstiger Verhinderung.",
                highlight: "Bis 1.612€/Jahr"
              }
            ].map((service, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-muted/50 to-transparent rounded-xl border border-border/50 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {service.highlight}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="bg-muted/30 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-foreground mb-6">Weitere Leistungen</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Intensivpflege",
                "Pflegeberatung §37.3",
                "Haushaltshilfe",
                "Betreuungsleistungen",
                "Demenzbetreuung",
                "Palliativpflege"
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm font-medium">MDK Note 1,6</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm font-medium">5,0 Google Rating</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm font-medium">24/7 Erreichbar</div>
            </div>
          </div>

          {/* Mid-page CTA */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Kostenlose Erstberatung vereinbaren</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Wir beraten Sie unverbindlich zu allen Pflegeleistungen und helfen Ihnen bei der Antragstellung.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+496915391405" 
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                069 153 914 05
              </a>
              <a 
                href="mailto:info@avyta.de" 
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-colors border border-white/30"
              >
                <Mail className="w-5 h-5" />
                info@avyta.de
              </a>
            </div>
          </div>
        </section>

        {/* Page 3: About & Contact */}
        <section className="min-h-[297mm] p-8 md:p-12 print-break bg-gradient-to-b from-white to-muted/30">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* About */}
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Warum AVYTA?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Familiärer Pflegedienst",
                    description: "Wir sind ein inhabergeführtes Unternehmen mit persönlichem Kontakt und kurzen Entscheidungswegen."
                  },
                  {
                    title: "Qualifiziertes Team",
                    description: "Über 20 Mitarbeiter mit langjähriger Erfahrung und regelmäßigen Fortbildungen."
                  },
                  {
                    title: "Flexibel & Individuell",
                    description: "Wir passen uns Ihren Bedürfnissen an – zeitlich und inhaltlich."
                  },
                  {
                    title: "Rundum-Betreuung",
                    description: "Von der Beratung bis zur Umsetzung – alles aus einer Hand."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coverage Area */}
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Unser Einzugsgebiet
              </h2>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="font-bold text-lg">Frankfurt am Main & Umgebung</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "Bockenheim", "Bornheim", "Sachsenhausen", "Nordend",
                    "Westend", "Ostend", "Griesheim", "Höchst",
                    "Niederrad", "Rödelheim", "Ginnheim", "Praunheim",
                    "Bad Vilbel", "Eschersheim", "Dornbusch", "Heddernheim"
                  ].map((district, index) => (
                    <div key={index} className="flex items-center gap-2 py-1">
                      <CheckCircle className="w-4 h-4 text-primary/60" />
                      <span>{district}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Financing Info */}
          <div className="bg-muted/50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Kostenübernahme durch Pflegekasse
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { grade: "Pflegegrad 1", amount: "131€", label: "Entlastungsbetrag" },
                { grade: "Pflegegrad 2", amount: "761€", label: "Sachleistung" },
                { grade: "Pflegegrad 3", amount: "1.432€", label: "Sachleistung" },
                { grade: "Pflegegrad 4", amount: "1.778€", label: "Sachleistung" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-sm text-muted-foreground mb-1">{item.grade}</div>
                  <div className="text-2xl font-bold text-primary">{item.amount}</div>
                  <div className="text-xs text-muted-foreground">{item.label}/Monat</div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              * Wir beraten Sie gerne zu Ihren individuellen Ansprüchen und übernehmen die Antragstellung.
            </p>
          </div>

          {/* Final CTA */}
          <div className="bg-foreground text-background rounded-2xl p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Jetzt Kontakt aufnehmen!
            </h2>
            <p className="text-background/80 mb-8 max-w-xl mx-auto text-lg">
              Wir freuen uns auf Ihren Anruf oder Ihre E-Mail. 
              Unsere erste Beratung ist immer kostenlos und unverbindlich.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
              <a 
                href="tel:+496915391405" 
                className="flex items-center justify-center gap-4 bg-primary text-primary-foreground px-10 py-6 rounded-2xl font-bold text-xl hover:bg-primary/90 transition-colors shadow-lg"
              >
                <Phone className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-sm text-primary-foreground/70">Telefon</div>
                  <div>069 153 914 05</div>
                </div>
              </a>
              <a 
                href="mailto:info@avyta.de" 
                className="flex items-center justify-center gap-4 bg-white text-foreground px-10 py-6 rounded-2xl font-bold text-xl hover:bg-white/90 transition-colors shadow-lg"
              >
                <Mail className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">E-Mail</div>
                  <div>info@avyta.de</div>
                </div>
              </a>
            </div>

            {/* Office Info */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Büro: Mo-Fr 8-12 Uhr | Pflege: 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Bürgeler Str. 3, 60386 Frankfurt</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <img src={avytaLogo} alt="AVYTA" className="h-8" />
              <span>© {new Date().getFullYear()} AVYTA GmbH</span>
            </div>
            <div>
              www.avyta.de
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Broschuere;
