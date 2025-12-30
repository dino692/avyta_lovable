import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import CTADropdownButton from "@/components/CTADropdownButton";

const leistungen = [
  "Stundenweise Entlastung",
  "Tageweise Vertretung",
  "Urlaubsvertretung (bis zu 6 Wochen)",
  "Grundpflege",
  "Behandlungspflege",
  "Hauswirtschaftliche Versorgung",
  "Betreuung und Begleitung",
  "Nachtpflege bei Bedarf",
];

const Verhinderungspflege = () => {
  return (
    <>
      <Helmet>
        <title>Verhinderungspflege Frankfurt | Entlastung für Angehörige | AVYTA</title>
        <meta name="description" content="Verhinderungspflege in Frankfurt. Professionelle Vertretung pflegender Angehöriger bei Urlaub, Krankheit oder Erholung. Bis zu 1.612€ im Jahr. Jetzt beraten lassen!" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <UserCheck className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Verhinderungspflege
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Professionelle Vertretung für pflegende Angehörige – 
                  damit auch Sie mal durchatmen können.
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
                    Was ist Verhinderungspflege?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Die Verhinderungspflege springt ein, wenn die private Pflegeperson 
                    verhindert ist – sei es durch Urlaub, Krankheit, berufliche 
                    Verpflichtungen oder einfach zur Erholung.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Als pflegender Angehöriger haben Sie Anspruch auf bis zu 1.612€ 
                    pro Jahr für die Verhinderungspflege. Wir übernehmen während Ihrer 
                    Abwesenheit die komplette Versorgung Ihres Angehörigen.
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
                        Bis zu 1.612€ pro Jahr
                      </h3>
                      <p className="text-muted-foreground">
                        Die Pflegekasse übernimmt die Kosten für bis zu 6 Wochen 
                        Verhinderungspflege im Jahr. Dieser Anspruch kann auch stundenweise 
                        genutzt werden.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                        Kombination möglich
                      </h3>
                      <p className="text-muted-foreground">
                        Sie können bis zu 50% des Kurzzeitpflege-Budgets (806€) zusätzlich 
                        für Verhinderungspflege nutzen. So stehen Ihnen insgesamt bis zu 
                        2.418€ zur Verfügung.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold mb-4">
                        Planen Sie Ihre Auszeit
                      </h3>
                      <p className="opacity-90 mb-4">
                        Wir beraten Sie zur optimalen Nutzung Ihrer Ansprüche und 
                        organisieren die Vertretung für Ihren Angehörigen.
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
                  <Link to="/leistungen/24-stunden">24-Stunden-Pflege</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/pflegeberatung">Pflegeberatung</Link>
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

export default Verhinderungspflege;
