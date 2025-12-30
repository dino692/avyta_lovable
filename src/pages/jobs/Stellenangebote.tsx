import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobsSidebar from "@/components/JobsSidebar";
import { Briefcase, MapPin, Clock, Euro, ArrowRight, Heart, Users, Sparkles, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    title: "Pflegefachkraft (m/w/d)",
    type: "Vollzeit / Teilzeit",
    location: "Frankfurt am Main",
    salary: "Nach Tarif + Zulagen",
    href: "/jobs/pflegefachkraft",
    icon: Sparkles,
    urgent: true,
  },
  {
    title: "Pflegehilfskraft (m/w/d)",
    type: "Vollzeit / Teilzeit",
    location: "Frankfurt am Main",
    salary: "Übertariflich",
    href: "/jobs/pflegehilfskraft",
    icon: Users,
    urgent: false,
  },
  {
    title: "Pflegehelfer/in (m/w/d)",
    type: "Vollzeit / Teilzeit",
    location: "Frankfurt am Main",
    salary: "Nach Vereinbarung",
    href: "/jobs/pflegehelfer",
    icon: Heart,
    urgent: false,
  },
  {
    title: "Haushaltshilfe (m/w/d)",
    type: "Teilzeit / Minijob",
    location: "Frankfurt am Main",
    salary: "Nach Vereinbarung",
    href: "/jobs/haushaltshilfe",
    icon: Home,
    urgent: false,
  },
  {
    title: "Pflegehelfer/in (m/w/d) - Quereinsteiger",
    type: "Teilzeit",
    location: "Frankfurt / Bad Vilbel",
    salary: "Nach Vereinbarung",
    href: "/jobs/pflegehelfer",
    icon: Heart,
    urgent: false,
  },
];

const Stellenangebote = () => {
  return (
    <>
      <Helmet>
        <title>Stellenangebote | AVYTA Pflegegesellschaft mbH</title>
        <meta name="description" content="Aktuelle Stellenangebote bei AVYTA. Finden Sie Ihren neuen Job in der ambulanten Pflege in Frankfurt und Umgebung." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Link to="/jobs" className="text-primary hover:underline text-sm mb-4 inline-block">
                ← Zurück zu Jobs
              </Link>
              <h1 className="text-4xl font-display font-bold text-foreground mb-4">
                Alle Stellenangebote
              </h1>
              <p className="text-lg text-muted-foreground">
                Entdecken Sie unsere aktuellen Jobangebote und finden Sie Ihre neue Herausforderung bei AVYTA.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3 space-y-6">
                  {jobs.map((job, index) => (
                    <Link
                      key={index}
                      to={job.href}
                      className="group block p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                          <job.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {job.title}
                            </h2>
                            {job.urgent && (
                              <span className="px-2 py-1 bg-rose-500/10 text-rose-600 text-xs font-medium rounded-full">
                                Dringend gesucht
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
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
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="hidden lg:block">
                  <div className="sticky top-28">
                    <JobsSidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Nichts Passendes gefunden?
            </h2>
            <p className="text-muted-foreground mb-6">
              Bewerben Sie sich initiativ – wir freuen uns auf Sie!
            </p>
            <Button variant="hero" asChild>
              <a href="mailto:jobs@avyta.de">
                Initiativ bewerben
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Stellenangebote;
