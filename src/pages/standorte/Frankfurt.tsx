import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTADropdownButton from "@/components/CTADropdownButton";

const stadtteile = [
  { name: "Bornheim", href: "/standorte/frankfurt/bornheim" },
  { name: "Bockenheim", href: "/standorte/frankfurt/bockenheim" },
  { name: "Griesheim", href: "/standorte/frankfurt/griesheim" },
  { name: "Ginnheim", href: "/standorte/frankfurt/ginnheim" },
  { name: "Sachsenhausen", href: "/standorte/frankfurt/sachsenhausen" },
  { name: "Praunheim", href: "/standorte/frankfurt/praunheim" },
  { name: "Niederrad", href: "/standorte/frankfurt/niederrad" },
  { name: "Höchst", href: "/standorte/frankfurt/hoechst" },
  { name: "Rödelheim", href: "/standorte/frankfurt/roedelheim" },
];

const Frankfurt = () => {
  return (
    <>
      <Helmet>
        <title>Ambulante Pflege Frankfurt | AVYTA Pflegedienst</title>
        <meta name="description" content="Ambulante Pflege in Frankfurt am Main. Professioneller Pflegedienst in allen Frankfurter Stadtteilen. Behandlungspflege, Grundpflege, 24h-Pflege. Tel: 069 153 914 05" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Ambulante Pflege in Frankfurt
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Ihr zuverlässiger Pflegedienst in Frankfurt am Main und allen Stadtteilen.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          <section className="py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Unsere Stadtteile in Frankfurt
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {stadtteile.map((stadtteil) => (
                  <Card key={stadtteil.name} variant="elevated" className="group cursor-pointer hover:border-primary/30">
                    <CardContent className="p-6">
                      <Link to={stadtteil.href} className="flex items-center justify-between">
                        <span className="font-display font-semibold text-foreground group-hover:text-primary">
                          {stadtteil.name}
                        </span>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Frankfurt;
