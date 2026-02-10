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
import { Link } from "react-router-dom";
import { generateFAQSchema } from "@/lib/faqSchema";

const badVilbelFaqs = [
  {
    question: "Wie arbeitet der Avyta Pflegedienst Bad Vilbel?",
    answer: "Beim Avyta Pflegedienst in Bad Vilbel legen wir Wert auf echte Menschlichkeit. Der soziale, ethische, kulturelle und religiöse Kontext eines jeden Patienten wird bei unseren Pflegeleistungen stets mitberücksichtigt, ganz nach unserem Motto 'Von Menschen, für Menschen.'"
  },
  {
    question: "Welche Kosten fallen für einen Pflegedienst in Bad Vilbel an?",
    answer: "Die Kosten für unseren Pflegedienst in Bad Vilbel lassen sich nicht pauschal festlegen, da eine Pflegeleistung immer individuell auf den jeweiligen Patienten abgestimmt wird. Wir lassen Ihnen jedoch sofort nach Kontaktaufnahme einen Kostenvoranschlag zukommen, abgerechnet wird dann mit der Kranken- oder Pflegekasse direkt."
  },
  {
    question: "Welche Leistungen bietet der Pflegedienst in Bad Vilbel?",
    answer: "Bei unserem Avyta Pflegedienst in Bad Vilbel übernehmen wir Leistungen sämtlicher Pflegestufen. Ob einfache Alltagshilfe, Grundpflege, oder Intensivpflege inklusive Beatmung, wir können uns um alle Bedürfnisse der pflegebedürftigen Patienten kümmern – mit viel Fachwissen und genauso viel Herz."
  },
];

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
        <title>Pflegedienst Bad Vilbel - der richtige Ansprechpartner</title>
        <meta name="description" content="Ihr ambulanter Pflegedienst in Bad Vilbel. Wir sind täglich für Sie da und helfen Ihnen im Alltag, ohne dass Sie Ihren Wohnort verlassen müssen. | avyta.de" />
        <script type="application/ld+json">{generateFAQSchema(badVilbelFaqs)}</script>
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
                  Mit unserem <strong>Pflegedienst in Bad Vilbel</strong> bieten wir Ihnen oder Ihren Angehörigen eine ganzheitliche und hochqualifizierte Betreuung. Im Folgenden erfahren Sie, warum unsere Leistung für Pflegebedürftige die <strong>beste Wahl</strong> ist.
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
                    Die Gründe, die zu einer Pflegebedürftigkeit führen sind so individuell, wie der Mensch selbst. Schon ein unglücklicher Unfall oder eine altersbedingte Einschränkung der Mobilität oder des Geistes reichen, dass sich mit der Frage nach der richtigen Krankenpflege auseinandergesetzt werden muss. Dabei wird oftmals, die erstbeste Lösung gewählt: Das Pflegeheim. Für Sie oder Ihre Angehörigen bedeutet dies jedoch ein abruptes Verlassen des gewohnten, häuslichen Umfelds und oftmals auch ein nicht unerheblicher Verlust der eigenen Selbstständigkeit.
                  </p>
                  <p className="mb-6">
                    Wenn Sie sich für den <strong>ambulanten Pflegedienst</strong> in Bad Vilbel entscheiden, kann die Lebensqualität und der Alltag durch die bekannte Umgebung bestmöglich gewahrt werden. <Link to="/team" className="text-primary hover:underline font-medium">Wir von AVYTA</Link> stellen einen an Ihren Bedürfnissen ausgerichteten Hilfsplan zusammen und bieten Ihnen so eine <strong>flexible</strong> und <strong>professionelle</strong> Unterstützung in allen Lebenslagen.
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
                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                  <p>
                    Ganz nach dem Motto „Von Menschen, für Menschen" steht bei unserem <strong>Pflegedienst in Bad Vilbel</strong> die Menschlichkeit im Fokus. Das heißt neben der jeweiligen individuellen gesundheitlichen Situation, nehmen wir ebenfalls Rücksicht auf ethnische, kulturelle, soziale und religiöse Bedürfnisse. So schaffen wir einen Rundum-Wohlfühlfaktor, der Ihnen dabei hilft Ihre Kräfte zu mobilisieren und ein glückliches Leben zu führen – flexibel und persönlich.
                  </p>
                  <p>
                    Wir sind an Ihrer Seite – ohne Ausnahmen. Unseren Pflegedienst in <strong>Bad Vilbel</strong> können Sie bei Notfällen auch außerhalb der Öffnungszeiten <Link to="/leistungen/24-stunden-pflege" className="text-primary hover:underline font-medium">24 Stunden erreichen</Link> und bekommen so jederzeit die Hilfe, die Sie benötigen. Dank <strong>langjähriger Erfahrung</strong> und unseren permanenten Prozess der Qualitätssicherung, bieten wir Ihnen garantiert eine gesicherte und hohe Qualität egal für welchen Pflegegrad.
                  </p>
                  <p>
                    Wir stehen Ihnen <strong>gerne zur Verfügung</strong> Rufen Sie uns an vereinbaren einen unverbindlichen Termin - <strong>gerne bei Ihnen zu Hause</strong>.
                  </p>
                </div>
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
                Wir wissen, dass eine Pflegebedürftigkeit sich in den unterschiedlichsten Facetten äußern kann. Deswegen haben wir ein umfassendes Leistungsspektrum für den Pflegedienst in Bad Vilbel geschaffen, das nicht nur die klassischen <Link to="/leistungen/grundpflege" className="text-primary hover:underline font-medium">Anforderungen der Grundpflege</Link> abdeckt, sondern auch die Herausforderungen der anspruchsvollen, medizinischen Versorgung erfüllt.
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Grundpflege */}
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Grundpflege
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Im Bereich der <strong>Grundpflege</strong> werden mit dem Pflegedienst in Bad Vilbel unter anderem folgende Leistungen abgedeckt:
                    </p>
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
                    <p className="text-muted-foreground text-sm mb-4">
                      Bei der <strong>Behandlungspflege</strong> übernimmt <Link to="/karriere" className="text-primary hover:underline">unser geschultes Pflegepersonal</Link> beispielsweise die nachfolgenden medizinischen Maßnahmen:
                    </p>
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
                      Außerdem können Sie im Rahmen der <Link to="/leistungen/behandlungspflege" className="text-primary hover:underline font-medium">Behandlungspflege</Link> die <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" className="text-primary hover:underline font-medium">Intensivpflege</Link> mit Heimbeatmung separat dazu wählen. Unsere <strong>hochqualifizierten Fachkräfte</strong> des Pflegedienstes in Bad Vilbel übernehmen dabei lebensnotwendige Maßnahmen, wie die Überwachung und Vitalisierung des Patienten oder Lagerungsbehandlungen und Mobilisation.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Selbstverständlich können Sie für Ihren persönlichen Bedarf auch weitere Serviceleistungen buchen und erhalten so beispielsweise Hilfe bei <strong>Antragstellungen</strong> oder der Bestellung von Medikamenten. Außerdem stehen wir Ihnen jederzeit für die Beratung in sozialen und pflegerischen Fragen zur Verfügung. Demnach richtet sich unser <strong>ambulanter Pflegedienst in Bad Vilbel</strong> auch an gesunde Menschen, die sich beispielsweise nur eine <strong>Unterstützung</strong> oder Gesellschaft im Alltag wünschen.
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
                <p className="text-muted-foreground mb-4">
                  Egal welche Anforderungen Sie mit Ihrer individuellen Situation an einen Pflegedienst in Bad Vilbel stellen, wir finden garantiert die richtige Lösung für Sie und unterstützen Sie mit Erfahrung und Hingabe bei der Bewältigung Ihres Alltags. Unser <Link to="/" className="text-primary hover:underline font-medium">Pflegedienst in Frankfurt</Link> und Umgebung ist von sämtlichen Pflege- und Krankenkassen zugelassen und garantiert so eine rasche Hilfe auch in schwierigen Betreuungssituationen – ganz ohne aufwendigen Bürokratiekram.
                </p>
                <p className="text-muted-foreground mb-8">
                  <strong><Link to="/kontakt" className="text-primary hover:underline">Kontaktieren</Link> Sie uns gerne für eine erste unverbindliche Beratung zum Pflegedienst in Bad Vilbel. Wir freuen uns bereits darauf Sie kennenzulernen.</strong>
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
                      Beim Avyta Pflegedienst in Bad Vilbel legen wir Wert auf echte <strong>Menschlichkeit</strong>. Der soziale, ethische, kulturelle und religiöse Kontext eines jeden Patienten wird bei unseren <strong>Pflegeleistungen</strong> stets mitberücksichtigt, ganz nach unserem Motto „Von Menschen, für Menschen."
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Kosten fallen für einen Pflegedienst in Bad Vilbel an?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die Kosten für unseren Pflegedienst in Bad Vilbel lassen sich <strong>nicht pauschal</strong> festlegen, da eine Pflegeleistung immer <strong>individuell</strong> auf den jeweiligen Patienten abgestimmt wird. Wir lassen Ihnen jedoch sofort nach <Link to="/kontakt" className="text-primary hover:underline">Kontaktaufnahme</Link> einen Kostenvoranschlag zukommen, abgerechnet wird dann mit der <strong>Kranken- oder Pflegekasse</strong> direkt.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Leistungen bietet der Pflegedienst in Bad Vilbel?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Bei unserem Avyta Pflegedienst in Bad Vilbel übernehmen wir Leistungen sämtlicher Pflegestufen. Ob einfache <strong>Alltagshilfe</strong>, <strong>Grundpflege</strong>, oder <strong>Intensivpflege</strong> inklusive Beatmung, wir können uns um <strong>alle Bedürfnisse</strong> der pflegebedürftigen Patienten kümmern – mit viel Fachwissen und genauso viel Herz.
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
