import { Helmet } from "react-helmet-async";
import { Phone, Mail, Heart, Shield, Clock, Users, MapPin, Star, CheckCircle, ArrowRight, Briefcase, Car, GraduationCap, Smile, Home, Utensils, Stethoscope, Pill, HandHelping } from "lucide-react";
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
      
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 12mm;
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

      <div className="min-h-screen bg-white font-sans">

        {/* ==================== PAGE 1: COVER ==================== */}
        <section className="min-h-[297mm] p-8 md:p-12 flex flex-col relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-accent/3" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[80px]" />
          
          {/* Decorative shape */}
          <div className="absolute top-20 right-8 w-32 h-32 border-[3px] border-primary/10 rounded-3xl rotate-12" />
          <div className="absolute bottom-40 right-20 w-20 h-20 border-[3px] border-accent/10 rounded-full" />

          {/* Header */}
          <div className="flex justify-between items-center mb-16 relative z-10">
            <img src={avytaLogo} alt="AVYTA Logo" className="h-14 md:h-20" />
            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Ambulanter Pflegedienst</p>
              <p className="text-sm text-muted-foreground">Frankfurt am Main & Bad Vilbel</p>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 flex flex-col justify-center max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 rounded-full w-fit mb-8">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Persönlich. Zuverlässig. Vor Ort.</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6">
              Ihre Pflege{" "}
              <span className="text-primary">in</span>
              <br />
              <span className="text-primary">vertrauten Händen</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Wir begleiten Sie und Ihre Angehörigen mit Herz und Kompetenz – 
              für ein selbstbestimmtes Leben in Ihrem Zuhause.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { value: "12+", label: "Jahre Erfahrung" },
                { value: "20+", label: "Mitarbeiter" },
                { value: "5,0", label: "Google Bewertung", icon: Star },
                { value: "24/7", label: "Erreichbar" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-white/70 backdrop-blur rounded-2xl border border-primary/10 shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-primary flex items-center justify-center gap-1">
                    {stat.value}
                    {stat.icon && <stat.icon className="w-4 h-4 fill-primary text-primary" />}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Bar */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 relative z-10 shadow-xl mt-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-display font-bold mb-1">Jetzt kostenlos beraten lassen!</h2>
                <p className="text-primary-foreground/70 text-sm">Wir sind 365 Tage im Jahr für Sie da</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+496915391405" className="flex items-center gap-3 bg-white text-primary px-6 py-3.5 rounded-xl font-bold hover:bg-white/90 transition-colors">
                  <Phone className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-[10px] text-primary/60 uppercase tracking-wider">Telefon</div>
                    <div className="text-lg leading-tight">069 153 914 05</div>
                  </div>
                </a>
                <a href="mailto:info@avyta.de" className="flex items-center gap-3 bg-white/15 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-white/25 transition-colors border border-white/20">
                  <Mail className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-[10px] text-white/60 uppercase tracking-wider">E-Mail</div>
                    <div className="text-lg leading-tight">info@avyta.de</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== PAGE 2: LEISTUNGEN ==================== */}
        <section className="min-h-[297mm] p-8 md:p-12 print-break">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Stethoscope className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Unser Leistungsspektrum</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3">
              Unsere <span className="text-primary">Leistungen</span> im Überblick
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Von der Grundpflege bis zur Intensivpflege – wir bieten Ihnen umfassende 
              Versorgung für jede Pflegesituation.
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {[
              {
                icon: Heart,
                title: "Individuelle Körperpflege",
                description: "Unterstützung bei der täglichen Hygieneroutine: Bad, Dusche, Haarpflege, Rasieren, Zähneputzen und Mundspülung.",
                tag: "Grundpflege"
              },
              {
                icon: Pill,
                title: "Medikamentengabe",
                description: "Sichere und zuverlässige Medikamentengabe nach ärztlicher Anordnung. Verblistert und kontrolliert durch Fachpersonal.",
                tag: "Behandlungspflege"
              },
              {
                icon: Utensils,
                title: "Hilfe bei der Nahrungsaufnahme",
                description: "Unterstützung beim Essen und Trinken, Vorbereitung von Mahlzeiten und das Anrichten von Speisen.",
                tag: "Hauswirtschaft"
              },
              {
                icon: Home,
                title: "Haushaltsservice",
                description: "Staubsaugen, Wischen, Bügeln, Fensterputzen, Reinigung von Bad und Küche. Ein- oder zweimal pro Woche.",
                tag: "Haushaltshilfe"
              },
              {
                icon: Users,
                title: "Spaziergänge & Begleitung",
                description: "Regelmäßige körperliche Aktivität sowie Begleitung bei Spaziergängen im Freien und zu Arztterminen.",
                tag: "Betreuung"
              },
              {
                icon: Clock,
                title: "24-Stunden-Betreuung",
                description: "Rund-um-die-Uhr-Betreuung in vertrauter häuslicher Umgebung. Individuell auf Ihre Bedürfnisse zugeschnitten.",
                tag: "Intensivpflege"
              },
            ].map((service, i) => (
              <div key={i} className="group relative p-5 rounded-2xl border border-border/60 bg-gradient-to-br from-white to-muted/30 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-bold text-foreground text-lg">{service.title}</h3>
                    </div>
                    <span className="inline-block text-[10px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                      {service.tag}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="bg-muted/40 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Weitere Leistungen
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Verhinderungspflege",
                "Pflegeberatung nach §37.3",
                "Demenzbetreuung",
                "Palliativpflege",
                "Betreuungsleistungen",
                "Einkaufsservice"
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pflegeberatung Highlight */}
          <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <HandHelping className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-display font-bold mb-2">Beratungseinsatz nach §37.3</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Pflegebedürftige mit Pflegegrad, die ausschließlich von Angehörigen oder ehrenamtlichen 
                  Helfern betreut werden, müssen regelmäßig einen ambulanten Pflegedienst in Anspruch nehmen. 
                  Wir übernehmen das Beratungsgespräch und den Nachweis gegenüber der Pflegekasse.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== PAGE 3: KOSTENÜBERNAHME & ÜBER UNS ==================== */}
        <section className="min-h-[297mm] p-8 md:p-12 print-break">
          {/* Kostenübernahme */}
          <div className="mb-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
                Kostenübernahme durch <span className="text-primary">Pflegekasse</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm">
                Viele unserer Leistungen werden von der Pflegekasse übernommen. Wir beraten Sie gerne 
                zu Ihren individuellen Ansprüchen.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { grade: "Pflegegrad 1", amount: "131€", label: "Entlastungsbetrag" },
                { grade: "Pflegegrad 2", amount: "761€", label: "Sachleistung" },
                { grade: "Pflegegrad 3", amount: "1.432€", label: "Sachleistung" },
                { grade: "Pflegegrad 4", amount: "1.778€", label: "Sachleistung" },
                { grade: "Pflegegrad 5", amount: "2.200€", label: "Sachleistung" },
              ].map((item, i) => (
                <div key={i} className="text-center p-4 bg-white rounded-2xl shadow-sm border border-primary/10">
                  <div className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-2">{item.grade}</div>
                  <div className="text-2xl font-bold text-foreground">{item.amount}</div>
                  <div className="text-xs text-muted-foreground">{item.label}/Monat</div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">
              * Wir übernehmen die Antragstellung bei Ihrer Pflegekasse und beraten Sie unverbindlich.
            </p>
          </div>

          {/* Warum AVYTA */}
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Warum <span className="text-primary">AVYTA</span>?
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Familiärer Pflegedienst", desc: "Inhabergeführt mit persönlichem Kontakt und kurzen Entscheidungswegen." },
                  { title: "Qualifiziertes Team", desc: "Über 20 Mitarbeiter mit langjähriger Erfahrung und regelmäßigen Fortbildungen." },
                  { title: "Flexibel & Individuell", desc: "Wir passen uns Ihren Bedürfnissen an – zeitlich und inhaltlich." },
                  { title: "Mehrsprachig", desc: "Wir sprechen Deutsch, Rumänisch, Bulgarisch, Griechisch, Serbisch, Kroatisch und weitere Sprachen." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Einzugsgebiet */}
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Unser <span className="text-primary">Einzugsgebiet</span>
              </h2>
              <div className="bg-muted/30 rounded-2xl p-5 border border-border/50">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-bold text-foreground">Frankfurt am Main & Bad Vilbel</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                  {[
                    "Bockenheim", "Bornheim", "Sachsenhausen", "Nordend",
                    "Westend", "Ostend", "Griesheim", "Höchst",
                    "Niederrad", "Rödelheim", "Ginnheim", "Praunheim",
                    "Eschersheim", "Dornbusch", "Heddernheim", "Bad Vilbel"
                  ].map((d, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span className="text-foreground text-xs">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {[
              { icon: Shield, label: "MDK Note 1,6" },
              { icon: Star, label: "5,0 Google Rating" },
              { icon: Clock, label: "Pflege 24/7" },
              { icon: Heart, label: "12+ Jahre Erfahrung" },
            ].map((badge, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <badge.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-xs font-semibold text-foreground">{badge.label}</div>
              </div>
            ))}
          </div>

          {/* Karriere / Mitarbeitersuche Section */}
          <div className="bg-foreground text-background rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-[60px]" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Karriere bei AVYTA</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                Werden Sie Teil unseres <span className="text-primary">Teams!</span>
              </h3>
              <p className="text-background/70 text-sm mb-6 max-w-2xl leading-relaxed">
                Wir suchen engagierte Pflegefachkräfte, Pflegehilfskräfte und Haushaltshilfen 
                für unser wachsendes Team in Frankfurt und Bad Vilbel.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { icon: Car, text: "Firmenwagen zur privaten Nutzung" },
                  { icon: GraduationCap, text: "Fort- und Weiterbildungen" },
                  { icon: Smile, text: "30 Tage Urlaub" },
                  { icon: Heart, text: "Betriebliche Altersvorsorge" },
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/10 rounded-xl p-3">
                    <benefit.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-xs text-background/90">{benefit.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+496915391405" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
                  <Phone className="w-4 h-4" />
                  Jetzt bewerben: 069 153 914 05
                </a>
                <a href="mailto:bewerbung@avyta.de" className="inline-flex items-center justify-center gap-2 bg-white/15 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/25 transition-colors border border-white/20">
                  <Mail className="w-4 h-4" />
                  bewerbung@avyta.de
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== PAGE 4: KONTAKT ==================== */}
        <section className="min-h-[297mm] p-8 md:p-12 print-break flex flex-col">
          <div className="flex-1 flex flex-col justify-center">
            {/* Final CTA */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Wir sind <span className="text-primary">für Sie da</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Kontaktieren Sie uns für eine kostenlose und unverbindliche Erstberatung. 
                Wir helfen Ihnen gerne weiter.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
              <a 
                href="tel:+496915391405" 
                className="flex items-center justify-center gap-4 bg-primary text-primary-foreground px-10 py-6 rounded-2xl font-bold text-xl hover:bg-primary/90 transition-colors shadow-lg"
              >
                <Phone className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs text-primary-foreground/60 uppercase tracking-wider">Telefon</div>
                  <div className="text-2xl">069 153 914 05</div>
                </div>
              </a>
              <a 
                href="mailto:info@avyta.de" 
                className="flex items-center justify-center gap-4 bg-foreground text-background px-10 py-6 rounded-2xl font-bold text-xl hover:bg-foreground/90 transition-colors shadow-lg"
              >
                <Mail className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs text-background/60 uppercase tracking-wider">E-Mail</div>
                  <div className="text-2xl">info@avyta.de</div>
                </div>
              </a>
            </div>

            {/* Office Info */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              <div className="text-center p-5 bg-muted/30 rounded-2xl">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-foreground text-sm mb-1">Bürozeiten</h4>
                <p className="text-xs text-muted-foreground">Mo–Fr: 08:00–12:00 Uhr</p>
                <p className="text-xs text-primary font-semibold">Pflege: 24/7 erreichbar</p>
              </div>
              <div className="text-center p-5 bg-muted/30 rounded-2xl">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-foreground text-sm mb-1">Standort Frankfurt</h4>
                <p className="text-xs text-muted-foreground">Bürgeler Str. 3</p>
                <p className="text-xs text-muted-foreground">60386 Frankfurt am Main</p>
              </div>
              <div className="text-center p-5 bg-muted/30 rounded-2xl">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-foreground text-sm mb-1">Standort Bad Vilbel</h4>
                <p className="text-xs text-muted-foreground">Frankfurter Str. 59</p>
                <p className="text-xs text-muted-foreground">61118 Bad Vilbel</p>
              </div>
            </div>

            {/* IK Number */}
            <div className="text-center mb-8">
              <p className="text-xs text-muted-foreground">IK Nr.: 462647061</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <img src={avytaLogo} alt="AVYTA" className="h-8" />
              <span>© {new Date().getFullYear()} AVYTA GmbH</span>
            </div>
            <div className="text-sm font-semibold text-primary">
              www.avyta.de
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Broschuere;
