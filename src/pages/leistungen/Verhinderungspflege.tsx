import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import CTADropdownButton from "@/components/CTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const leistungen = [
  "Grundpflege: Hilfe beim An- und Auskleiden, bei der täglichen Hygiene und bei Toilettengängen",
  "Haushaltshilfe: Unterstützung beim Kochen, Wäsche säubern oder bei der Reinigung der Wohnung",
  "Unterstützung bei der Mobilität: Beim Aufstehen aus dem Bett, beim Treppensteigen oder während kurzer Spaziergänge",
  "Medikamentenmanagement: Pünktliche Medikamentenvergabe",
  "Bekannte Gesellschaft: Fest zugeteilte Mitarbeiter für vertraute Gesichter",
  "Behandlungspflege bei Bedarf",
  "Intensivpflege bei Bedarf",
];

const faqs = [
  {
    question: "Wie wird die Verhinderungspflege in Frankfurt finanziell abgewickelt?",
    answer: "Die Verhinderungspflege wird über das Budget der Verhinderungspflege Ihrer Pflegekasse abgerechnet. Die Pflegekasse übernimmt die Kosten für bis zu 6 Wochen Verhinderungspflege im Jahr (bis zu 1.612€). Zusätzlich können Sie bis zu 50% des Kurzzeitpflege-Budgets (806€) nutzen, sodass Ihnen insgesamt bis zu 2.418€ zur Verfügung stehen."
  },
  {
    question: "Wie lange kann ich die Verhinderungspflege in Anspruch nehmen?",
    answer: "Die Verhinderungspflege kann bei Bedarf unbegrenzt verlängert werden, solange Sie über ein entsprechendes Budget verfügen. Wir passen unsere Leistungen flexibel an Ihre Bedürfnisse an – ob stundenweise Entlastung, tageweise Vertretung oder längere Urlaubsvertretung."
  },
  {
    question: "Wer führt die Verhinderungspflege durch?",
    answer: "Nach Möglichkeit setzen wir fest zugeteilte Mitarbeiter für die ambulante Verhinderungspflege ein. Ihre Angehörigen werden so täglich von bekannten Gesichtern begrüßt, die in Urlaubs- und Krankheitsphasen zuverlässig für Sie einspringen."
  }
];

const Verhinderungspflege = () => {
  return (
    <>
      <Helmet>
        <title>Verhinderungspflege Frankfurt | Ihre Zeit liegt uns am Herzen | AVYTA</title>
        <meta name="description" content="Verhinderungspflege in Frankfurt – professionelle Vertretung für pflegende Angehörige bei Urlaub, Krankheit oder Terminen. Bis zu 2.418€ Budget. Grundpflege, Behandlungspflege & mehr." />
        <meta name="keywords" content="Verhinderungspflege Frankfurt, Entlastung Angehörige, Urlaubsvertretung Pflege, Pflegekasse Budget" />
        <meta property="og:title" content="Verhinderungspflege Frankfurt | AVYTA Pflegedienst" />
        <meta property="og:description" content="Verhinderungspflege in Frankfurt. Bis zu 2.418€ Budget für Entlastung." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.avyta.de/leistungen/verhinderungspflege-frankfurt" />
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
                  Avyta Verhinderungspflege in Frankfurt – Ihre Zeit liegt uns am Herzen
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Pflegende Angehörige leisten jeden Tag viel für ihre Lieben. Bei Ihrem Einsatz für andere 
                  sollten Sie jedoch nicht Ihre eigenen Bedürfnisse zurückstellen müssen.
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
                    Sorgenfrei das Leben meistern mit Verhinderungspflege in Frankfurt
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Wenn Angehörige aufgrund von Krankheit, Termindruck oder aus anderen Gründen mal nicht 
                    voll einsatzfähig für die Pflege sind, helfen wir von Avyta bei allen anstehenden Aufgaben. 
                    Sie sind kurzfristig verhindert, haben einen wichtigen Termin oder benötigen einfach mal Urlaub?
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Unser Angebot für die Verhinderungspflege in Frankfurt umfasst die stellvertretende 
                    Grundpflege, Behandlungspflege und Intensivpflege. Wir können Menschen von Pflegegrad 1 bis 5 
                    versorgen und unterstützen Ihre Angehörigen im Haushalt oder leihen ihnen ein offenes Ohr.
                  </p>

                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    Aufgaben der Verhinderungspflege in Frankfurt
                  </h3>
                  <div className="space-y-3">
                    {leistungen.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                        Bis zu 2.418€ pro Jahr
                      </h3>
                      <p className="text-muted-foreground">
                        Die Pflegekasse übernimmt die Kosten für bis zu 6 Wochen Verhinderungspflege im Jahr 
                        (1.612€). Sie können zusätzlich bis zu 50% des Kurzzeitpflege-Budgets (806€) nutzen – 
                        insgesamt also bis zu 2.418€.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                        Zuverlässig über kurz oder lang
                      </h3>
                      <p className="text-muted-foreground">
                        Die Verhinderungspflege in Frankfurt ermöglicht es Angehörigen, volle Verantwortung 
                        für pflegebedürftige Personen zu übernehmen, ohne sich selbst allzu sehr einschränken 
                        zu müssen. Wir fördern ein soziales und enges Miteinander.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-display font-semibold mb-4">
                        Planen Sie Ihre Auszeit
                      </h3>
                      <p className="opacity-90 mb-4">
                        Wir stehen Ihnen gerne zur Verfügung. Rufen Sie uns an und vereinbaren 
                        einen unverbindlichen Termin – gerne bei Ihnen zu Hause.
                      </p>
                      <Button variant="secondary" asChild>
                        <a href="tel:+496915391405">
                          Jetzt anrufen
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                  Häufige Fragen zur Verhinderungspflege
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* Other Services */}
          <section className="py-24">
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
                  <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main">Intensivpflege</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/24-stunden-pflege">24-Stunden-Pflege</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/leistungen/pflegeberatung-frankfurt">Pflegeberatung</Link>
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
