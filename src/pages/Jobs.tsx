import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, Users, Heart, Clock, MapPin, ArrowRight, CheckCircle2, Sparkles, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobCategories = [
  {
    title: "Alle Stellenangebote",
    href: "/jobs/stellenangebote",
    description: "Übersicht aller offenen Positionen bei AVYTA",
    icon: Briefcase,
    count: "5 Stellen",
  },
  {
    title: "Pflegefachkraft",
    href: "/jobs/pflegefachkraft",
    description: "Examinierte Fachkräfte gesucht",
    icon: Sparkles,
    count: "1 Stelle",
  },
  {
    title: "Pflegehilfskraft",
    href: "/jobs/pflegehilfskraft",
    description: "Mit Basisqualifikation in der Pflege",
    icon: Users,
    count: "1 Stelle",
  },
  {
    title: "Pflegehelfer/in",
    href: "/jobs/pflegehelfer",
    description: "Einstieg in die Pflege ohne Ausbildung",
    icon: Heart,
    count: "2 Stellen",
  },
  {
    title: "Haushaltshilfe",
    href: "/jobs/haushaltshilfe",
    description: "Unterstützung im Alltag",
    icon: Home,
    count: "1 Stelle",
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

const Jobs = () => {
  return (
    <>
      <Helmet>
        <title>Jobs & Karriere | AVYTA Pflegegesellschaft mbH</title>
        <meta name="description" content="Werden Sie Teil unseres Teams! Aktuelle Stellenangebote für Pflegehelfer, Pflegehilfskräfte und Pflegefachkräfte bei AVYTA in Frankfurt." />
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
                <Briefcase className="w-4 h-4" />
                Karriere bei AVYTA
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Werden Sie Teil unseres Teams
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Bei AVYTA arbeiten Sie in einem wertschätzenden Umfeld mit flexiblen Arbeitszeiten 
                und überdurchschnittlicher Vergütung. Wir freuen uns auf Sie!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/jobs/stellenangebote">
                    Alle Stellen ansehen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-foreground mb-12 text-center">
              Offene Positionen
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {jobCategories.map((category) => (
                <Link
                  key={category.href}
                  to={category.href}
                  className="group p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <category.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    {category.count}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Das bieten wir Ihnen
                </h2>
                <p className="text-muted-foreground">
                  Bei AVYTA erwartet Sie mehr als nur ein Job
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

        {/* Why AVYTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Warum AVYTA?
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Nur Frauen im Team</h3>
                      <p className="text-muted-foreground">Wir sind ein reines Frauenteam – für viele Patientinnen ein wichtiger Wohlfühlfaktor.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Flexible Arbeitszeiten</h3>
                      <p className="text-muted-foreground">Wir passen uns Ihrem Leben an – nicht umgekehrt.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Touren in Ihrer Nähe</h3>
                      <p className="text-muted-foreground">Wir planen Ihre Einsätze so, dass Sie kurze Wege haben.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-display font-bold text-primary mb-4">20+</div>
                    <p className="text-xl text-foreground font-medium">Mitarbeiterinnen</p>
                    <p className="text-muted-foreground mt-2">im AVYTA Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold text-primary-foreground mb-4">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Bewerben Sie sich jetzt initiativ oder schauen Sie sich unsere offenen Stellen an.
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

export default Jobs;
