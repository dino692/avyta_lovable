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
      { name: "Intensivpflege", href: "/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" },
      { name: "Haushaltshilfe", href: "/leistungen/haushaltshilfe" },
      { name: "24-Stunden-Pflege", href: "/leistungen/24-stunden-pflege" },
      { name: "Pflegeberatung", href: "/leistungen/pflegeberatung-frankfurt" },
      { name: "Verhinderungspflege", href: "/leistungen/verhinderungspflege-frankfurt" },
    ],
  },
  {
    title: "Standorte",
    icon: MapPin,
    links: [
      { name: "Frankfurt", href: "/standorte/frankfurt" },
      { name: "Bad Vilbel", href: "/pflegedienst-bad-vilbel" },
      { name: "Bornheim", href: "/pflegedienst-bornheim" },
      { name: "Bockenheim", href: "/standorte/frankfurt/pflegedienst-bockenheim" },
      { name: "Griesheim", href: "/pflegedienst-griesheim" },
      { name: "Ginnheim", href: "/pflegedienst-ginnheim" },
      { name: "Sachsenhausen", href: "/standorte/frankfurt/pflegedienst-frankfurt-sachsenhausen" },
      { name: "Praunheim", href: "/pflegedienst-praunheim" },
      { name: "Niederrad", href: "/standorte/frankfurt/niederrad" },
      { name: "Höchst", href: "/standorte/frankfurt/hoechst" },
      { name: "Rödelheim", href: "/pflegedienst-roedelheim" },
      { name: "Nordend", href: "/pflegedienst-nordend" },
      { name: "Ostend", href: "/pflegedienst-ostend" },
      { name: "Westend", href: "/pflegedienst-westend" },
      { name: "Dornbusch", href: "/pflegedienst-dornbusch" },
      { name: "Heddernheim", href: "/pflegedienst-heddernheim" },
      { name: "Preungesheim", href: "/pflegedienst-preungesheim" },
      { name: "Eschersheim", href: "/pflegedienst-eschersheim" },
      { name: "Eckenheim", href: "/pflegedienst-eckenheim" },
      { name: "Nieder-Eschbach", href: "/pflegedienst-nieder-eschbach" },
      { name: "Seckbach", href: "/pflegedienst-seckbach" },
    ],
  },
  {
    title: "Jobs & Karriere",
    icon: Briefcase,
    links: [
      { name: "Karriere", href: "/karriere" },
      { name: "Stellenangebote", href: "/karriere/stellenangebote-pflege-frankfurt" },
      { name: "Pflegefachkraft", href: "/karriere/pflegefachkraft-frankfurt" },
      { name: "Pflegehelfer", href: "/karriere/pflegehelfer-frankfurt" },
      { name: "Pflegehilfskraft", href: "/karriere/pflegehilfskraft-frankfurt" },
      { name: "Haushaltshilfe", href: "/karriere/haushhaltshilfe-frankfurt" },
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
        <meta property="og:title" content="Sitemap | AVYTA Pflegegesellschaft mbH" />
        <meta property="og:description" content="Sitemap der AVYTA Pflegegesellschaft mbH - Übersicht aller Seiten unserer Website." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <link rel="canonical" href="https://www.avyta.de/sitemap" />
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
