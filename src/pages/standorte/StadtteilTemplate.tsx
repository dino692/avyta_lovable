import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";

interface StadtteilTemplateProps {
  name: string;
}

const StadtteilTemplate = ({ name }: StadtteilTemplateProps) => {
  return (
    <>
      <Helmet>
        <title>Ambulante Pflege Frankfurt {name} | AVYTA</title>
        <meta name="description" content={`Ambulante Pflege in Frankfurt ${name}. Professioneller Pflegedienst für Behandlungspflege, Grundpflege und 24h-Betreuung. Tel: 069 153 914 05`} />
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
                  Ambulante Pflege in Frankfurt {name}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Ihr zuverlässiger Pflegedienst in {name} und Umgebung.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CTADropdownButton />
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+496915391405"><Phone className="w-4 h-4 mr-2" />069 153 914 05</a>
                  </Button>
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

export default StadtteilTemplate;
