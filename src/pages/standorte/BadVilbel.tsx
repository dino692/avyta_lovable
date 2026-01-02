import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Heart, Shield, Users, CheckCircle, HelpCircle } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const grundpflegeLeistungen = [
  "Körperpflege",
  "Unterstützung beim An- und Auskleiden",
  "Hilfe bei der Ausscheidung",
  "Hilfe beim Essen und Trinken",
  "Maßnahmen zur Mobilität",
  "Hauswirtschaftliche Hilfe"
];

const behandlungspflegeLeistungen = [
  "Herrichten und Verabreichen von Medikamenten",
  "Kompressionsstrümpfe an- und ausziehen",
  "Injektionen und Infusionen",
  "Blutdruck- und Blutzuckerkontrolle",
  "Wundversorgung",
  "Tracheostomaversorgung",
  "Versorgung von Anus Praeter und Urostoma",
  "Parenterale und enterale Ernährung"
];

const BadVilbel = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Bad Vilbel | AVYTA Ambulante Pflege</title>
        <meta name="description" content="Pflegedienst Bad Vilbel - ganzheitliche und hochqualifizierte Betreuung. Grundpflege, Behandlungspflege, Intensivpflege. 24h erreichbar. Tel: 069 153 914 05" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Pflegedienst Bad Vilbel – wir sind für Sie da
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Mit unserem Pflegedienst in Bad Vilbel bieten wir Ihnen oder Ihren Angehörigen eine ganzheitliche und hochqualifizierte Betreuung.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          {/* Intro Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    Die Gründe, die zu einer Pflegebedürftigkeit führen, sind so individuell wie der Mensch selbst. Schon ein unglücklicher Unfall oder eine altersbedingte Einschränkung der Mobilität oder des Geistes reichen, dass sich mit der Frage nach der richtigen Krankenpflege auseinandergesetzt werden muss.
                  </p>
                  <p className="mb-6">
                    Wenn Sie sich für den ambulanten Pflegedienst in Bad Vilbel entscheiden, kann die Lebensqualität und der Alltag durch die bekannte Umgebung bestmöglich gewahrt werden. Wir von AVYTA stellen einen an Ihren Bedürfnissen ausgerichteten Hilfsplan zusammen und bieten Ihnen so eine flexible und professionelle Unterstützung in allen Lebenslagen.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">24h Notfall-Erreichbarkeit</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Gesicherte Pflegequalität</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Was uns auszeichnet */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                  Ambulanter Pflegedienst in Bad Vilbel – was uns auszeichnet
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Heart className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-foreground mb-2">
                        Von Menschen, für Menschen
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Neben der individuellen gesundheitlichen Situation nehmen wir Rücksicht auf ethnische, kulturelle, soziale und religiöse Bedürfnisse. So schaffen wir einen Rundum-Wohlfühlfaktor.
                      </p>
                    </CardContent>
                  </Card>
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-foreground mb-2">
                        Immer erreichbar
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Bei Notfällen sind wir auch außerhalb der Öffnungszeiten 24 Stunden erreichbar. Dank langjähriger Erfahrung garantieren wir eine gesicherte und hohe Qualität für jeden Pflegegrad.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Leistungen */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Pflegedienst in Bad Vilbel: Unsere Leistungen im Überblick
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Wir haben ein umfassendes Leistungsspektrum geschaffen, das nicht nur die klassischen Anforderungen der Grundpflege abdeckt, sondern auch die Herausforderungen der anspruchsvollen, medizinischen Versorgung erfüllt.
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Grundpflege */}
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Grundpflege
                    </h3>
                    <ul className="space-y-2">
                      {grundpflegeLeistungen.map((leistung, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {leistung}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Behandlungspflege */}
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Behandlungspflege
                    </h3>
                    <ul className="space-y-2">
                      {behandlungspflegeLeistungen.map((leistung, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {leistung}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 max-w-3xl mx-auto">
                <Card variant="elevated" className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Intensivpflege & Serviceleistungen
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Im Rahmen der Behandlungspflege können Sie auch die Intensivpflege mit Heimbeatmung wählen. Unsere hochqualifizierten Fachkräfte übernehmen lebensnotwendige Maßnahmen wie die Überwachung und Vitalisierung des Patienten oder Lagerungsbehandlungen und Mobilisation.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Zusätzlich können Sie weitere Serviceleistungen buchen: Hilfe bei Antragstellungen, Bestellung von Medikamenten und Beratung in sozialen und pflegerischen Fragen. Unser ambulanter Pflegedienst richtet sich auch an Menschen, die sich nur eine Unterstützung oder Gesellschaft im Alltag wünschen.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Pflegedienst in Bad Vilbel – mit Herz an Ihrer Seite
                </h2>
                <p className="text-muted-foreground mb-8">
                  Egal welche Anforderungen Sie mit Ihrer individuellen Situation an einen Pflegedienst in Bad Vilbel stellen, wir finden garantiert die richtige Lösung für Sie. Unser Pflegedienst ist von sämtlichen Pflege- und Krankenkassen zugelassen und garantiert rasche Hilfe auch in schwierigen Betreuungssituationen – ganz ohne aufwendigen Bürokratiekram.
                </p>
                <CTADropdownButton />
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
                  <HelpCircle className="w-8 h-8 text-primary" />
                  Häufige Fragen
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie arbeitet der Avyta Pflegedienst Bad Vilbel?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Beim Avyta Pflegedienst in Bad Vilbel legen wir Wert auf echte Menschlichkeit. Der soziale, ethische, kulturelle und religiöse Kontext eines jeden Patienten wird bei unseren Pflegeleistungen stets mitberücksichtigt, ganz nach unserem Motto „Von Menschen, für Menschen."
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Kosten fallen für einen Pflegedienst in Bad Vilbel an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die Kosten richten sich nach dem individuellen Pflegebedarf und Pflegegrad. Wir beraten Sie gerne zu den Kosten und möglichen Finanzierungswegen über die Pflegekasse.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Leistungen bietet der Pflegedienst in Bad Vilbel?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Wir bieten ein umfassendes Spektrum von der Grundpflege über die Behandlungspflege bis hin zur Intensivpflege mit Heimbeatmung. Zusätzlich unterstützen wir Sie mit Serviceleistungen wie Hilfe bei Antragstellungen und Beratung.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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

export default BadVilbel;
