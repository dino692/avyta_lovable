import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, UserCheck, Users, FileCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import CTADropdownButton from "@/components/CTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const leistungen = [
  {
    title: "Grundpflege",
    description: "Hilfe beim An- und Auskleiden, bei der täglichen Hygiene und bei Toilettengängen."
  },
  {
    title: "Haushaltshilfe",
    description: "Wir unterstützen Pflegebedürftige während Ihrer Abwesenheit beim Kochen, beim Wäsche säubern oder bei der Reinigung der Wohnung. Auch kleine Einkäufe führen wir durch, wenn diese nicht mehr selbst erledigt werden können."
  },
  {
    title: "Unterstützung bei der Mobilität",
    description: "Beim Aufstehen aus dem Bett, beim Treppensteigen oder während kurzer Spaziergänge besteht mit unserer Begleitung keine Gefahr. Wir greifen Pflegebedürftigen buchstäblich unter die Arme, damit sie sich selbstbestimmt und uneingeschränkt bewegen können."
  },
  {
    title: "Medikamentenmanagement",
    description: "Auf unser Timing bei der Medikamentenvergabe ist Verlass. Wir stellen sicher, dass Pflegebedürftige pünktlich die Medikamente einnehmen, die sie benötigen."
  },
  {
    title: "Bekannte Gesellschaft",
    description: "Nach Möglichkeit setzen wir fest zugeteilte Mitarbeiter für die ambulante Verhinderungspflege in Frankfurt ein. Ihre Angehörigen werden so täglich von bekannten Gesichtern begrüßt, die in Urlaubs- und Krankheitsphasen zuverlässig für Sie einspringen."
  },
];

const faqs = [
  {
    question: "Wie wird die Verhinderungspflege in Frankfurt finanziert?",
    answer: "Leistungen zur Verhinderungspflege werden wie die reguläre ambulante Pflege über die Kranken- oder Pflegekasse abgerechnet. Die Höhe des finanziellen Spielraums hängt vom bewilligten Pflegegrad ab. Wir unterstützen Sie gern bei der Antragstellung und bei der finanziellen Planung der Verhinderungspflege."
  },
  {
    question: "Wie kann ich die Verhinderungspflege in Frankfurt verlängern?",
    answer: "Die Dauer der Verhinderungspflege kann je nach Bedarf angepasst werden. Wir erstellen temporäre Pflegepläne individuell über die Dauer von wenigen Stunden, mehreren Tagen oder sogar einigen Wochen. Sprechen Sie uns an, wenn Sie eine Verlängerung benötigen."
  },
  {
    question: "Welche Qualifikation haben Pflegekräfte im ambulanten Einsatz?",
    answer: "Unsere Pflegekräfte sind ausgebildete Pflegefachkräfte und Pflegehelfer mit entsprechenden Qualifikationen. Sie werden regelmäßig geschult und verfügen über langjährige Erfahrung in der ambulanten Pflege."
  },
];

const Verhinderungspflege = () => {
  return (
    <>
      <Helmet>
        <title>Avyta Verhinderungspflege in Frankfurt | Ihre Zeit liegt uns am Herzen | AVYTA</title>
        <meta name="description" content="Verhinderungspflege in Frankfurt von Avyta. Professionelle Vertretung pflegender Angehöriger bei Urlaub, Krankheit oder Erholung. Grundpflege, Behandlungspflege und Intensivpflege. Jetzt beraten lassen!" />
        <meta name="keywords" content="Verhinderungspflege Frankfurt, Kurzzeitpflege, Urlaubsvertretung Pflege" />
        <link rel="canonical" href="https://www.avyta.de/leistungen/verhinderungspflege" />
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
                  Unsere Pflegefachkräfte und Pflegehelfer springen gern als Stellvertreter für Sie ein und übernehmen die Pflege Ihrer Angehörigen gewissenhaft und mit Herz.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          {/* Intro Content */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Pflegende Angehörige leisten jeden Tag viel für ihre Lieben. Die tägliche Fürsorge bedeutet für Sie als 
                  Pflegeverantwortliche Einsatz von Zeit, Körper und Herz. Bei Ihrem Einsatz für andere sollten Sie jedoch 
                  nicht ihre eigenen Bedürfnisse zurückstellen müssen. Wenn Angehörige aufgrund von Krankheit, Termindruck 
                  oder aus anderen Gründen mal nicht voll einsatzfähig für die Pflege sind, helfen wir von Avyta bei allen 
                  anstehenden Aufgaben.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sie sind kurzfristig verhindert, haben einen wichtigen Termin oder benötigen einfach mal Urlaub? Unsere 
                  Pflegefachkräfte und Pflegehelfer springen gern als Stellvertreter für Sie ein und übernehmen die Pflege 
                  Ihrer Angehörigen gewissenhaft und mit Herz.
                </p>
              </div>
            </div>
          </section>

          {/* Sorgenfrei das Leben meistern */}
          <section className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Sorgenfrei das Leben meistern mit Verhinderungspflege in Frankfurt
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Unser Angebot für die Verhinderungspflege in Frankfurt umfasst die stellvertretende Grundpflege, 
                  Behandlungspflege und Intensivpflege. Wir können Menschen von Pflegegrad 1 bis 5 versorgen und 
                  unterstützen Ihre Angehörigen im Haushalt oder leihen ihnen ein offenes Ohr. Die Verhinderungspflege 
                  in Frankfurt ist eine wichtige Ergänzung zur häuslichen Pflege. Sie ermöglicht es Angehörigen, volle 
                  Verantwortung für pflegebedürftige Personen zu übernehmen, ohne sich selbst allzu sehr einschränken zu 
                  müssen. Wir fördern ein soziales und enges Miteinander und unterstützen Familien, ihre Angehörigen im 
                  gewohnten Umfeld zu versorgen.
                </p>

                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  Aufgaben der Verhinderungspflege in Frankfurt
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Häusliche Pflege ist eine gemeinschaftliche Aufgabe, die niemand allein bewältigen kann. Wir von Avyta 
                  bieten in der Verhinderungspflege in Frankfurt eine große Bandbreite von Pflegemaßnahmen an, um Sie bei 
                  der Pflege Ihrer Angehörigen zu unterstützen:
                </p>
                <div className="space-y-4">
                  {leistungen.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border/50">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Zuverlässig über kurz oder lang */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                    Verhinderungspflege in Frankfurt – zuverlässig über kurz oder lang
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Wir von Avyta sind Ihr vertrauensvoller Ansprechpartner zu allen Fragen rund um die häusliche Pflege. 
                    Mit dem Angebot der Verhinderungspflege in Frankfurt ermöglichen wir Pflegebedürftigen, auch bei 
                    Abwesenheit von pflegenden Familienmitgliedern einen normalen Alltag weiterzuführen. Während Ihrer 
                    Abwesenheit dokumentieren wir Pflegemaßnahmen und Daten zum Gesundheitszustand genau, um volle 
                    Transparenz zu schaffen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Die Dauer der Verhinderungspflege in Frankfurt variiert ganz nach Ihrem Bedarf. Unsere temporären 
                    Pflegepläne erstellen wir individuell über die Dauer von wenigen Stunden, mehreren Tagen oder sogar 
                    über einige Wochen. In enger Absprache mit Pflegebedürftigen und Angehörigen passen wir Termine und 
                    erforderliche Maßnahmen an Ihre aktuelle Situation an.
                  </p>
                  <p className="text-foreground font-medium mb-6">
                    Kontaktieren Sie uns noch heute, um abrufbare Entlastung in Form von Verhinderungspflege in Frankfurt 
                    einzurichten.
                  </p>
                  <CTADropdownButton />
                </div>

                <div className="space-y-6">
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-display font-semibold text-foreground">
                          Feste Bezugspfleger
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        Nach Möglichkeit setzen wir fest zugeteilte Mitarbeiter ein. 
                        Ihre Angehörigen werden so von bekannten Gesichtern begrüßt, 
                        die zuverlässig für Sie einspringen.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <FileCheck className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-display font-semibold text-foreground">
                          Volle Transparenz
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        Während Ihrer Abwesenheit dokumentieren wir Pflegemaßnahmen 
                        und Daten zum Gesundheitszustand genau, um Ihnen volle 
                        Transparenz zu bieten.
                      </p>
                    </CardContent>
                  </Card>

                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-display font-semibold text-foreground">
                          Flexible Dauer
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        Unsere temporären Pflegepläne erstellen wir individuell über 
                        die Dauer von wenigen Stunden, mehreren Tagen oder sogar 
                        über einige Wochen.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                  Häufige Fragen
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-background rounded-xl border border-border/50 px-6"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
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
