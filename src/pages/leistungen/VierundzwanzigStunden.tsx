import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import CTADropdownButton from "@/components/CTADropdownButton";

const leistungen = [
  "Rund-um-die-Uhr Betreuung",
  "Grundpflege und Körperpflege",
  "Hauswirtschaftliche Versorgung",
  "Begleitung und Gesellschaft",
  "Nachtbereitschaft",
  "Mahlzeitenzubereitung",
  "Unterstützung bei der Mobilität",
  "Demenzbetreuung",
];

const VierundzwanzigStunden = () => {
  return (
    <>
      <Helmet>
        <title>24-Stunden-Pflege Frankfurt | Rund-um-die-Uhr Betreuung | AVYTA</title>
        <meta name="description" content="24-Stunden-Pflege in Frankfurt. Rund-um-die-Uhr Betreuung zu Hause durch qualifizierte Pflegekräfte. Alternative zum Pflegeheim. Jetzt beraten lassen!" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  24-Stunden-Pflege
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Rund-um-die-Uhr Betreuung in Ihren eigenen vier Wänden – 
                  die liebevolle Alternative zum Pflegeheim.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
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
                    Was ist 24-Stunden-Pflege?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Bei der 24-Stunden-Pflege wohnt eine Betreuungskraft bei Ihnen zu Hause 
                    und ist rund um die Uhr für Sie da. So können Sie in Ihrer gewohnten 
                    Umgebung bleiben und erhalten dennoch die Unterstützung, die Sie brauchen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Die Betreuungskraft übernimmt die Grundpflege, den Haushalt und leistet 
                    Ihnen Gesellschaft. So bleiben Sie selbstständig und sind gleichzeitig 
                    nie allein.
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
                        Kombinierte Finanzierung
                      </h3>
                      <p className="text-muted-foreground">
                        Die 24-Stunden-Pflege kann durch verschiedene Leistungen der 
                        Pflegekasse finanziert werden. Wir beraten Sie zu allen 
                        Möglichkeiten der Kostenübernahme.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                        Alternative zum Pflegeheim
                      </h3>
                      <p className="text-muted-foreground">
                        Für viele Menschen ist die 24-Stunden-Pflege eine echte Alternative 
                        zum Pflegeheim. Sie bleiben in Ihrer vertrauten Umgebung und 
                        bestimmen selbst über Ihren Alltag.
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
                        rund um die 24-Stunden-Pflege.
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
                  <Link to="/leistungen/grundpflege">Grundpflege</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/intensivpflege">Intensivpflege</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/haushaltshilfe">Haushaltshilfe</Link>
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

export default VierundzwanzigStunden;
