import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Heart, Award, Shield, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CTADropdownButton from "@/components/CTADropdownButton";

const UeberUns = () => {
  return (
    <>
      <Helmet>
        <title>Über uns | AVYTA Pflegegesellschaft mbH Frankfurt</title>
        <meta name="description" content="Lernen Sie das Team von AVYTA kennen. Ihr ambulanter Pflegedienst in Frankfurt mit langjähriger Erfahrung, Pflegeleitbild und höchsten Qualitätsstandards." />
        <meta name="keywords" content="AVYTA Team, Pflegedienst Frankfurt, ambulante Pflege, Pflegeleitbild, Pflegequalität" />
        <meta property="og:title" content="Über uns | AVYTA Pflegedienst Frankfurt" />
        <meta property="og:description" content="Lernen Sie das Team von AVYTA kennen. Ambulanter Pflegedienst mit Herz." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://avyta.de/ueber-uns" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Über uns
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Lernen Sie das Team von AVYTA kennen – Ihr ambulanter Pflegedienst in Frankfurt am Main.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          {/* Wir stellen uns vor */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                  Wir stellen uns vor
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6 leading-relaxed">
                    Die Avyta Pflegegesellschaft mbH ist ein <strong>ambulanter Pflegedienst</strong> mit Sitz 
                    in Frankfurt am Main. Wir betreuen Pflegebedürftige in ihrem häuslichen Umfeld und 
                    ermöglichen ihnen so, in ihrer vertrauten Umgebung zu bleiben.
                  </p>
                  <p className="mb-6 leading-relaxed">
                    Unser Team besteht aus <strong>examinierten Pflegefachkräften, Pflegehelfern und 
                    Haushaltshilfen</strong>, die mit Herz und Kompetenz für unsere Patienten da sind. 
                    Wir sind spezialisiert auf die Betreuung von Menschen mit <strong>Demenz und Diabetes</strong>.
                  </p>
                  <p className="leading-relaxed">
                    Mit mehr als <strong>10 Jahren Erfahrung</strong> in der ambulanten Pflege verstehen wir 
                    die Bedürfnisse unserer Patienten und ihrer Angehörigen. Wir wissen, wie wichtig 
                    Vertrauen, Zuverlässigkeit und eine persönliche Betreuung sind.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Unser Miteinander */}
          <section className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-foreground">
                    Unser Miteinander
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6 leading-relaxed">
                    Bei AVYTA legen wir großen Wert auf ein <strong>respektvolles und wertschätzendes 
                    Miteinander</strong>. Das gilt sowohl im Umgang mit unseren Patienten als auch 
                    innerhalb unseres Teams.
                  </p>
                  <p className="mb-6 leading-relaxed">
                    Unsere Mitarbeiter kommen aus <strong>verschiedenen Kulturen und sprechen mehrere 
                    Sprachen</strong>. Diese Vielfalt ist unsere Stärke – sie ermöglicht es uns, 
                    auf die individuellen Bedürfnisse unserer Patienten einzugehen und eine 
                    vertrauensvolle Beziehung aufzubauen.
                  </p>
                  <p className="leading-relaxed">
                    „Von Menschen, für Menschen" – das ist unser Motto. Wir sehen den <strong>Menschen 
                    hinter dem Patienten</strong> und berücksichtigen das kulturelle, religiöse und 
                    soziale Umfeld bei unserer Pflege.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pflegeleitbild */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-foreground">
                    Pflegeleitbild
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                  <p className="mb-6 leading-relaxed">
                    Unser Pflegeleitbild basiert auf dem <strong>Modell der fördernden Prozesspflege 
                    nach Monika Krohwinkel</strong>. Im Mittelpunkt steht dabei immer der Mensch mit 
                    seinen individuellen Bedürfnissen und Fähigkeiten.
                  </p>
                  <p className="leading-relaxed">
                    Wir fördern die <strong>Selbstständigkeit</strong> unserer Patienten und unterstützen 
                    sie dabei, ihren Alltag so eigenständig wie möglich zu gestalten. Dabei respektieren 
                    wir ihre Würde und ihre persönlichen Wünsche.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                        Aktivitäten und existentielle Erfahrungen des Lebens (AEDL)
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Kommunizieren können</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Sich bewegen können</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Vitale Funktionen aufrechterhalten</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Sich pflegen können</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                        Weitere AEDL-Bereiche
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Essen und trinken können</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Ausscheiden können</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Ruhen und schlafen können</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Soziale Bereiche sichern können</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Pflegequalität */}
          <section className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-foreground">
                    Pflegequalität
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                  <p className="mb-6 leading-relaxed">
                    Qualität ist bei uns kein Zufall, sondern das Ergebnis kontinuierlicher Arbeit. 
                    Wir arbeiten nach dem <strong>PDCA-Zyklus</strong> (Plan-Do-Check-Act), um unsere 
                    Pflegeleistungen stetig zu verbessern.
                  </p>
                  <p className="leading-relaxed">
                    Unsere Pflegekräfte werden <strong>regelmäßig fortgebildet</strong> und sind immer 
                    auf dem neuesten Stand der Pflegewissenschaft. Durch interne Qualitätskontrollen 
                    und die Zusammenarbeit mit dem MDK stellen wir sicher, dass unsere Leistungen 
                    höchsten Standards entsprechen.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-background rounded-2xl border border-border">
                    <div className="text-3xl font-bold text-primary mb-2">Plan</div>
                    <div className="text-sm text-muted-foreground">Pflegeplanung</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-2xl border border-border">
                    <div className="text-3xl font-bold text-primary mb-2">Do</div>
                    <div className="text-sm text-muted-foreground">Durchführung</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-2xl border border-border">
                    <div className="text-3xl font-bold text-primary mb-2">Check</div>
                    <div className="text-sm text-muted-foreground">Überprüfung</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-2xl border border-border">
                    <div className="text-3xl font-bold text-primary mb-2">Act</div>
                    <div className="text-sm text-muted-foreground">Verbesserung</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-display font-bold mb-4">
                Lernen Sie uns persönlich kennen
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Vereinbaren Sie ein kostenloses Erstgespräch – wir beraten Sie gerne zu allen 
                Fragen rund um die häusliche Pflege.
              </p>
              <CTADropdownButton size="lg" />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default UeberUns;
