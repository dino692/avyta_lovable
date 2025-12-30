import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";

const BadVilbel = () => {
  return (
    <>
      <Helmet>
        <title>Ambulante Pflege Bad Vilbel | AVYTA Pflegedienst</title>
        <meta name="description" content="Ambulante Pflege in Bad Vilbel. Professioneller Pflegedienst für Behandlungspflege, Grundpflege und 24h-Betreuung. Tel: 069 153 914 05" />
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
                  Ambulante Pflege in Bad Vilbel
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Ihr zuverlässiger Pflegedienst in Bad Vilbel und Umgebung.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BadVilbel;
