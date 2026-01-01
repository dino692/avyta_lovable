import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, Users, Heart, Clock, MapPin, ArrowRight, CheckCircle2, Sparkles, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobCategories = [
  {
    title: "Pflege Jobs",
    href: "/jobs/pflege-jobs",
    description: "Alle Pflegestellen im Überblick",
    icon: Heart,
    count: "4 Stellen",
  },
  {
    title: "Alle Stellenangebote",
    href: "/karriere/stellenangebote-pflege-frankfurt",
    description: "Übersicht aller offenen Positionen bei AVYTA",
    icon: Briefcase,
    count: "5 Stellen",
  },
  {
    title: "Pflegefachkraft",
    href: "/karriere/pflegefachkraft-frankfurt",
    description: "Examinierte Fachkräfte gesucht",
    icon: Sparkles,
    count: "1 Stelle",
  },
  {
    title: "Pflegehilfskraft",
    href: "/karriere/pflegehilfskraft-frankfurt",
    description: "Mit Basisqualifikation in der Pflege",
    icon: Users,
    count: "1 Stelle",
  },
  {
    title: "Pflegehelfer/in",
    href: "/karriere/pflegehelfer-frankfurt",
    description: "Einstieg in die Pflege ohne Ausbildung",
    icon: Heart,
    count: "2 Stellen",
  },
  {
    title: "Haushaltshilfe",
    href: "/karriere/haushaltshilfe-frankfurt",
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
        <title>Pflege Jobs Frankfurt: Ihre Karriere bei AVYTA | Stellenangebote</title>
        <meta name="description" content="Pflege Jobs in Frankfurt am Main bei AVYTA. Stellenangebote für Pflegefachkräfte, Pflegehelfer und Haushaltshilfen. Überdurchschnittliche Vergütung, flexible Arbeitszeiten, familiäres Team. Jetzt bewerben!" />
        <meta name="keywords" content="Pflege Jobs Frankfurt, Pflegefachkraft Stellenangebote Frankfurt, Pflegehelfer Jobs, Karriere Pflegedienst Frankfurt" />
        <meta property="og:title" content="Pflege Jobs Frankfurt: Ihre Karriere bei AVYTA" />
        <meta property="og:description" content="Die Wichtigkeit der Ambulanten Pflege steigt! Bewerben Sie sich jetzt bei AVYTA für ein familiäres Arbeitsumfeld mit flacher Hierarchie." />
        <link rel="canonical" href="https://www.avyta.de/karriere" />
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      </main>

      <Footer />
    </>
  );
};

export default Jobs;
