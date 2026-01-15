import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import CTADropdownButton from "@/components/CTADropdownButton";

const leistungen = [
  "Reinigung der Wohnung",
  "Wäsche waschen und bügeln",
  "Einkaufen gehen",
  "Mahlzeiten zubereiten",
  "Geschirr spülen",
  "Müll entsorgen",
  "Blumen gießen und Pflanzenpflege",
  "Begleitung bei Arztbesuchen",
];

const Haushaltshilfe = () => {
  return (
    <>
      <Helmet>
        <title>Haushaltshilfe Frankfurt | Hauswirtschaft & Alltagsbegleitung | AVYTA</title>
        <meta name="description" content="Professionelle Haushaltshilfe in Frankfurt. Unterstützung im Haushalt, beim Einkaufen und Kochen. Entlastung für Senioren und pflegende Angehörige. Jetzt beraten lassen!" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-12 md:py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-14 h-14 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Utensils className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 md:mb-6">
                  Haushaltshilfe
                </h1>
                <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                  Professionelle Unterstützung im Haushalt – damit Sie sich auf das 
                  Wesentliche konzentrieren können.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 md:mb-6">
                    Was ist Haushaltshilfe?
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                    Unsere Haushaltshilfe unterstützt Sie bei allen anfallenden Aufgaben 
                    im Haushalt. Ob Putzen, Waschen, Einkaufen oder Kochen – wir nehmen 
                    Ihnen die Arbeit ab, die Sie selbst nicht mehr bewältigen können.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
                    Für viele Menschen ist es wichtig, so lange wie möglich in den 
                    eigenen vier Wänden wohnen zu bleiben. Mit unserer Haushaltshilfe 
                    machen wir das möglich und sorgen gleichzeitig für soziale Kontakte.
                  </p>

                  <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3 md:mb-4">
                    Unsere Leistungen im Überblick
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2 md:gap-3">
                    {leistungen.map((item) => (
                      <div key={item} className="flex items-center gap-2 p-2 md:p-3 bg-secondary/30 rounded-lg">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6 mt-6 lg:mt-0">
                  <Card variant="elevated">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3 md:mb-4">
                        Finanzierung
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Bei einem anerkannten Pflegegrad können hauswirtschaftliche Leistungen 
                        über den Entlastungsbetrag (131€/Monat) oder als Sachleistung 
                        finanziert werden.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3 md:mb-4">
                        Flexible Zeiten
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Wir passen uns Ihrem Tagesablauf an. Ob morgens, mittags oder 
                        nachmittags – wir kommen, wann es Ihnen am besten passt.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-display font-semibold mb-3 md:mb-4">
                        Jetzt beraten lassen
                      </h3>
                      <p className="text-sm md:text-base opacity-90 mb-3 md:mb-4">
                        Wir beraten Sie kostenlos und unverbindlich zu allen Fragen 
                        rund um die Haushaltshilfe.
                      </p>
                      <Button variant="secondary" size="sm" className="text-xs md:text-sm" asChild>
                        <a href="/#contact">
                          Erstberatung anfragen
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Other Services */}
          <section className="py-12 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 md:mb-8 text-center">
                Weitere Leistungen
              </h2>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/behandlungspflege">Behandlungspflege</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/grundpflege">Grundpflege</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main">Intensivpflege</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/24-stunden-pflege">24-Stunden-Pflege</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/pflegeberatung-frankfurt">Pflegeberatung</Link>
                </Button>
                <Button variant="outline" size="sm" className="text-xs md:text-sm" asChild>
                  <Link to="/leistungen/verhinderungspflege-frankfurt">Verhinderungspflege</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <NewsletterSection />
        <Footer />
      </div>
    </>
  );
};

export default Haushaltshilfe;
