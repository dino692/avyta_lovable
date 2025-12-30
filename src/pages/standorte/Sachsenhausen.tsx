import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";

const PflegedienstSachsenhausen = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Sachsenhausen | AVYTA Ambulante Pflege Frankfurt</title>
        <meta name="description" content="Ambulante Pflege in Frankfurt Sachsenhausen. Professioneller Pflegedienst für Behandlungspflege, Grundpflege und 24h-Betreuung. Tel: 069 153 914 05" />
        <meta name="keywords" content="Pflegedienst Sachsenhausen, ambulante Pflege Frankfurt Sachsenhausen, häusliche Pflege" />
        <meta property="og:title" content="Pflegedienst Sachsenhausen | AVYTA" />
        <meta property="og:description" content="Professioneller Pflegedienst in Frankfurt Sachsenhausen." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://avyta.de/pflegedienst-frankfurt-sachsenhausen" />
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
                  Pflegedienst Sachsenhausen
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Ihr zuverlässiger ambulanter Pflegedienst in Frankfurt Sachsenhausen.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto prose prose-lg text-muted-foreground">
                <p className="mb-6 leading-relaxed">
                  Als <strong>ambulanter Pflegedienst in Frankfurt Sachsenhausen</strong> bieten wir Ihnen 
                  professionelle häusliche Pflege. Unser erfahrenes Team unterstützt Sie bei allen 
                  pflegerischen Belangen.
                </p>
                <p className="leading-relaxed">
                  Kontaktieren Sie uns für ein kostenloses Beratungsgespräch!
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PflegedienstSachsenhausen;
