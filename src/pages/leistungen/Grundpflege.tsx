import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

const leistungen = [
  "Körperpflege (Waschen, Duschen, Baden)",
  "An- und Auskleiden",
  "Hilfe beim Essen und Trinken",
  "Mobilisation und Lagerung",
  "Toilettengang und Inkontinenzversorgung",
  "Haar- und Nagelpflege",
  "Mundpflege und Zahnpflege",
  "Unterstützung beim Aufstehen und Zubettgehen",
];

const Grundpflege = () => {
  return (
    <>
      <Helmet>
        <title>Grundpflege Frankfurt | Körperpflege & Alltagsunterstützung | HerzPflege</title>
        <meta name="description" content="Professionelle Grundpflege in Frankfurt. Unterstützung bei Körperpflege, Mobilität und alltäglichen Verrichtungen. Würdevolle Pflege zu Hause. Jetzt beraten lassen!" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Home className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Grundpflege
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Würdevolle Unterstützung bei der Körperpflege und allen alltäglichen Verrichtungen – 
                  einfühlsam und respektvoll.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" asChild>
                    <a href="/#contact">Kostenlose Erstberatung</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+496915391405">
                      <Phone className="w-4 h-4 mr-2" />
                      069 153 914 05
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                    Was ist Grundpflege?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Die Grundpflege, auch körperbezogene Pflegemaßnahmen genannt, umfasst 
                    alle Hilfestellungen, die Sie bei der täglichen Körperpflege und den 
                    grundlegenden Verrichtungen des Alltags benötigen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Unsere erfahrenen Pflegekräfte unterstützen Sie dabei, Ihre Selbstständigkeit 
                    so lange wie möglich zu erhalten. Dabei achten wir stets auf Ihre Würde, 
                    Ihre Wünsche und Ihre individuellen Bedürfnisse.
                  </p>

                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    Unsere Leistungen im Überblick
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {leistungen.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                        Finanzierung über Pflegekasse
                      </h3>
                      <p className="text-muted-foreground">
                        Bei anerkanntem Pflegegrad werden die Kosten für Grundpflege von 
                        der Pflegekasse übernommen. Wir beraten Sie zu Ihren Ansprüchen 
                        und helfen bei der Antragstellung.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                        Feste Bezugspfleger
                      </h3>
                      <p className="text-muted-foreground">
                        Bei uns werden Sie von festen Bezugspflegern betreut. So entsteht 
                        ein Vertrauensverhältnis, das gerade bei der intimen Körperpflege 
                        besonders wichtig ist.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold mb-4">
                        Jetzt beraten lassen
                      </h3>
                      <p className="opacity-90 mb-4">
                        Wir beraten Sie kostenlos und unverbindlich zu allen Fragen 
                        rund um die Grundpflege.
                      </p>
                      <Button variant="secondary" asChild>
                        <a href="/#contact">
                          Erstberatung anfragen
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Other Services */}
          <section className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Weitere Leistungen
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild>
                  <Link to="/leistungen/behandlungspflege">Behandlungspflege</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/intensivpflege">Intensivpflege</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/haushaltshilfe">Haushaltshilfe</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/24-stunden">24-Stunden-Pflege</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/pflegeberatung">Pflegeberatung</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/verhinderungspflege">Verhinderungspflege</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Grundpflege;
