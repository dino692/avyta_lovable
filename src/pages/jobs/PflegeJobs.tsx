import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobsSidebar from "@/components/JobsSidebar";
import { Briefcase, MapPin, Clock, Euro, ArrowRight, Heart, Users, Sparkles, Home, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTADropdownButton from "@/components/CTADropdownButton";

const pflegeJobs = [
  {
    title: "Pflegefachkraft (m/w/d)",
    type: "Vollzeit / Teilzeit",
    location: "Frankfurt & Bad Vilbel",
    salary: "Ab 3.800€ / Monat",
    href: "/jobs/pflegefachkraft",
    icon: Sparkles,
    urgent: true,
    highlights: ["Examiniert", "Alle Fachrichtungen", "Sofort verfügbar"],
  },
  {
    title: "Pflegehilfskraft (m/w/d)",
    type: "Vollzeit / Teilzeit",
    location: "Frankfurt & Bad Vilbel",
    salary: "Ab 2.800€ / Monat",
    href: "/jobs/pflegehilfskraft",
    icon: Users,
    urgent: true,
    highlights: ["Mit Qualifikation §43b", "Erfahrung erwünscht"],
  },
  {
    title: "Pflegehelfer/in (m/w/d)",
    type: "Vollzeit / Teilzeit / Minijob",
    location: "Frankfurt & Bad Vilbel",
    salary: "Ab 2.400€ / Monat",
    href: "/jobs/pflegehelfer",
    icon: Heart,
    urgent: false,
    highlights: ["Quereinsteiger willkommen", "Einarbeitung garantiert"],
  },
  {
    title: "Haushaltshilfe (m/w/d)",
    type: "Teilzeit / Minijob",
    location: "Frankfurt & Bad Vilbel",
    salary: "Ab 14€ / Stunde",
    href: "/jobs/haushaltshilfe",
    icon: Home,
    urgent: false,
    highlights: ["Flexible Zeiten", "Wohnortnah"],
  },
];

const benefits = [
  "Überdurchschnittliche Vergütung",
  "Flexible Arbeitszeiten",
  "Unbefristeter Arbeitsvertrag",
  "Fortbildungsmöglichkeiten",
  "Familiäres Team",
  "Betriebliche Altersvorsorge",
  "30 Tage Urlaub",
  "Firmenwagen möglich",
];

const PflegeJobs = () => {
  return (
    <>
      <Helmet>
        <title>Pflege Jobs | AVYTA Pflegegesellschaft mbH</title>
        <meta name="description" content="Finden Sie Ihren Traumjob in der Pflege bei AVYTA. Aktuelle Stellenangebote für Pflegefachkräfte, Pflegehilfskräfte und Pflegehelfer in Frankfurt und Bad Vilbel." />
        <meta name="keywords" content="Pflege Jobs, Pflegefachkraft, Pflegehilfskraft, Pflegehelfer, Frankfurt, Bad Vilbel, Stellenangebote" />
        <link rel="canonical" href="https://avyta.de/jobs/pflege-jobs" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Pflege Jobs bei AVYTA
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Ihre Karriere in der <span className="text-primary">Pflege</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Wir suchen engagierte Pflegekräfte für unser Team. Bei AVYTA erwartet Sie ein wertschätzendes Arbeitsumfeld, 
                flexible Arbeitszeiten und überdurchschnittliche Vergütung.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/jobs/stellenangebote">
                    Alle Stellen ansehen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <CTADropdownButton variant="default" size="lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Jobs Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="flex-1">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                  Aktuelle Pflege-Stellenangebote
                </h2>
                
                <div className="space-y-6">
                  {pflegeJobs.map((job) => (
                    <Link
                      key={job.href}
                      to={job.href}
                      className="group block p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                          <job.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {job.title}
                            </h3>
                            {job.urgent && (
                              <span className="px-2 py-1 bg-destructive/10 text-destructive text-xs font-medium rounded-full">
                                Dringend gesucht
                              </span>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Euro className="w-4 h-4" />
                              {job.salary}
                            </span>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {job.highlights.map((highlight, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center text-primary font-medium">
                          <span className="hidden md:inline">Details</span>
                          <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-80">
                <JobsSidebar />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Ihre Vorteile bei AVYTA
                </h2>
                <p className="text-muted-foreground">
                  Wir bieten Ihnen mehr als nur einen Arbeitsplatz
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border/50"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold text-primary-foreground mb-4">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Bewerben Sie sich jetzt und werden Sie Teil unseres Teams. Wir freuen uns auf Sie!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/jobs/stellenangebote">
                  Stellenangebote ansehen
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="mailto:jobs@avyta.de">
                  Initiativ bewerben
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PflegeJobs;