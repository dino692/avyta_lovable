import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import CTADropdownButton from "@/components/CTADropdownButton";

const leistungen = [
  "Ermittlung des Pflegebedarfs",
  "Beratung zu Pflegeleistungen",
  "Hilfe bei der Antragstellung",
  "Vorbereitung auf die MDK-Begutachtung",
  "Beratung zu Pflegehilfsmitteln",
  "Wohnraumanpassung",
  "Entlastungsangebote für Angehörige",
  "Finanzierungsberatung",
];

const Pflegeberatung = () => {
  return (
    <>
      <Helmet>
        <title>Pflegeberatung Frankfurt | Kostenlose Beratung | AVYTA</title>
        <meta name="description" content="Kostenlose Pflegeberatung in Frankfurt. Beratung zu Pflegeleistungen, Pflegegrad-Antrag und MDK-Begutachtung. Kompetente Hilfe für Pflegebedürftige und Angehörige." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Pflegeberatung
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Kostenlose und unverbindliche Beratung zu allen Fragen rund um 
                  Pflege, Pflegegrad und Leistungsansprüche.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CTADropdownButton />
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
                    Was ist Pflegeberatung?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Wenn ein Angehöriger pflegebedürftig wird, stehen viele Fragen im Raum: 
                    Welche Leistungen stehen uns zu? Wie beantrage ich einen Pflegegrad? 
                    Wie bereite ich mich auf die MDK-Begutachtung vor?
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Unsere erfahrenen Pflegeberater helfen Ihnen durch den Dschungel der 
                    Pflegeversicherung. Wir beraten Sie kostenlos, unabhängig und persönlich 
                    – bei Ihnen zu Hause oder telefonisch.
                  </p>

                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    Unsere Beratungsthemen
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
                        §37.3 Beratungseinsatz
                      </h3>
                      <p className="text-muted-foreground">
                        Wenn Sie Pflegegeld beziehen, sind regelmäßige Beratungseinsätze 
                        vorgeschrieben. Wir führen diese Einsätze durch und beraten Sie 
                        dabei umfassend.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                        MDK-Vorbereitung
                      </h3>
                      <p className="text-muted-foreground">
                        Wir bereiten Sie optimal auf die Begutachtung durch den 
                        Medizinischen Dienst vor. So erreichen Sie den Pflegegrad, 
                        der Ihnen zusteht.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold mb-4">
                        Kostenlose Beratung
                      </h3>
                      <p className="opacity-90 mb-4">
                        Unsere Pflegeberatung ist für Sie komplett kostenlos. 
                        Vereinbaren Sie jetzt Ihren persönlichen Beratungstermin.
                      </p>
                      <Button variant="secondary" asChild>
                        <a href="/#contact">
                          Beratung anfragen
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
                  <Link to="/leistungen/grundpflege">Grundpflege</Link>
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

export default Pflegeberatung;
