import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, Users, Briefcase, FileText, MapPin, Phone, Heart, Scale, Shield } from "lucide-react";

const sitemapData = [
  {
    title: "Hauptseiten",
    icon: Home,
    links: [
      { name: "Startseite", href: "/" },
      { name: "Team", href: "/team" },
      { name: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Leistungen",
    icon: Heart,
    links: [
      { name: "Alle Leistungen", href: "/leistungen" },
      { name: "Behandlungspflege", href: "/leistungen/behandlungspflege" },
      { name: "Grundpflege", href: "/leistungen/grundpflege" },
      { name: "Intensivpflege", href: "/leistungen/intensivpflege" },
      { name: "Haushaltshilfe", href: "/leistungen/haushaltshilfe" },
      { name: "24-Stunden-Pflege", href: "/leistungen/24-stunden" },
      { name: "Pflegeberatung", href: "/leistungen/pflegeberatung" },
      { name: "Verhinderungspflege", href: "/leistungen/verhinderungspflege" },
    ],
  },
  {
    title: "Standorte",
    icon: MapPin,
    links: [
      { name: "Frankfurt", href: "/standorte/frankfurt" },
      { name: "Bad Vilbel", href: "/standorte/bad-vilbel" },
      { name: "Bornheim", href: "/standorte/frankfurt/bornheim" },
      { name: "Bockenheim", href: "/standorte/frankfurt/bockenheim" },
      { name: "Griesheim", href: "/standorte/frankfurt/griesheim" },
      { name: "Ginnheim", href: "/standorte/frankfurt/ginnheim" },
      { name: "Sachsenhausen", href: "/standorte/frankfurt/sachsenhausen" },
      { name: "Praunheim", href: "/standorte/frankfurt/praunheim" },
      { name: "Niederrad", href: "/standorte/frankfurt/niederrad" },
      { name: "Höchst", href: "/standorte/frankfurt/hoechst" },
      { name: "Rödelheim", href: "/standorte/frankfurt/roedelheim" },
    ],
  },
  {
    title: "Jobs & Karriere",
    icon: Briefcase,
    links: [
      { name: "Alle Jobs", href: "/jobs" },
      { name: "Pflege Jobs", href: "/jobs/pflege-jobs" },
      { name: "Stellenangebote", href: "/jobs/stellenangebote" },
      { name: "Pflegefachkraft", href: "/jobs/pflegefachkraft" },
      { name: "Pflegehilfskraft", href: "/jobs/pflegehilfskraft" },
      { name: "Pflegehelfer", href: "/jobs/pflegehelfer" },
    ],
  },
  {
    title: "Blog",
    icon: FileText,
    links: [
      { name: "Alle Artikel", href: "/blog" },
      { name: "Empfehlungen", href: "/blog?kategorie=empfehlungen" },
      { name: "Pflegetipps", href: "/blog?kategorie=pflegetipps" },
      { name: "Gesundheit", href: "/blog?kategorie=gesundheit" },
      { name: "Neuigkeiten", href: "/blog?kategorie=neuigkeiten" },
      { name: "Recht & Finanzen", href: "/blog?kategorie=recht-finanzen" },
    ],
  },
  {
    title: "Rechtliches",
    icon: Scale,
    links: [
      { name: "Impressum", href: "/impressum" },
      { name: "Datenschutz", href: "/datenschutz" },
      { name: "Sitemap", href: "/sitemap" },
    ],
  },
];

const Sitemap = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap | AVYTA Pflegegesellschaft mbH</title>
        <meta name="description" content="Sitemap der AVYTA Pflegegesellschaft mbH - Übersicht aller Seiten unserer Website." />
      </Helmet>
      <Header />
      <main className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Sitemap
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Übersicht aller Seiten unserer Website
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapData.map((section) => (
                <div
                  key={section.title}
                  className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-lg font-display font-semibold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 py-1"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary/50" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Sitemap;
