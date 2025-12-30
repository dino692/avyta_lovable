import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import CTADropdownButton from "@/components/CTADropdownButton";

const leistungen = [
  "Wundversorgung und Verbandswechsel",
  "Injektionen und Infusionen",
  "Medikamentengabe",
  "Blutdruck- und Blutzuckermessung",
  "Stomaversorgung",
  "Katheterversorgung",
  "Portversorgung",
  "Dekubitusprophylaxe",
];

const Behandlungspflege = () => {
  return (
    <>
      <Helmet>
        <title>Behandlungspflege Frankfurt | Medizinische Pflege | AVYTA</title>
        <meta name="description" content="Professionelle Behandlungspflege in Frankfurt. Medizinische Versorgung nach ärztlicher Verordnung: Wundversorgung, Injektionen, Verbandswechsel. Jetzt beraten lassen!" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Stethoscope className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Behandlungspflege
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Professionelle medizinische Versorgung nach ärztlicher Verordnung – 
                  durchgeführt von examinierten Pflegefachkräften.
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
                    Was ist Behandlungspflege?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Behandlungspflege umfasst alle medizinischen Maßnahmen, die von einem Arzt 
                    verordnet und von qualifizierten Pflegefachkräften durchgeführt werden. 
                    Im Gegensatz zur Grundpflege handelt es sich hierbei um medizinisch 
                    notwendige Leistungen, die direkt von der Krankenkasse übernommen werden.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Unser Team aus examinierten Pflegefachkräften übernimmt die komplette 
                    medizinische Versorgung in Ihrem Zuhause – professionell, zuverlässig 
                    und mit viel Einfühlungsvermögen.
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
                        Kostenübernahme
                      </h3>
                      <p className="text-muted-foreground">
                        Die Kosten für Behandlungspflege werden bei ärztlicher Verordnung 
                        vollständig von Ihrer Krankenkasse übernommen. Wir kümmern uns um 
                        alle Formalitäten und rechnen direkt mit Ihrer Kasse ab.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                        Qualifiziertes Personal
                      </h3>
                      <p className="text-muted-foreground">
                        Alle unsere Behandlungspflegekräfte sind examiniert und werden 
                        regelmäßig geschult. So gewährleisten wir höchste medizinische 
                        Qualität und Sicherheit.
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
                        rund um die Behandlungspflege.
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

export default Behandlungspflege;
