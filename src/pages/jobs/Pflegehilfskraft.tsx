import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import JobsSidebar from "@/components/JobsSidebar";
import { Users, CheckCircle2, MapPin, Clock, Euro, ArrowRight, Heart, Award, Car, Dumbbell, Gift, Home, Shirt, TrendingUp, Calendar, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import JobCTADropdownButton from "@/components/JobCTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const aufgaben = [
  "Hilfe bei der Körperpflege",
  "Unterstützung bei der Nahrungsaufnahme",
  "Mobilisation der Patienten",
  "Hauswirtschaftliche Tätigkeiten wie Reinigen der Wohnräume",
  "Zubereitung von Mahlzeiten",
  "Unterstützung der Pflegefachkräfte bei der täglichen Versorgung",
];

const anforderungen = [
  "Berufserfahrung oder abgeschlossene Ausbildung im Pflegebereich",
  "Einfühlungsvermögen und Geduld",
  "Verantwortungsbewusstsein",
  "Körperliche Belastbarkeit",
  "Freude am Umgang mit Menschen",
  "Führerschein Klasse B (zwingend)",
  "Gute Deutschkenntnisse",
];

const benefits = [
  {
    icon: Euro,
    title: "Überdurchschnittliches Gehalt",
    description: "Je nach Qualifikation und Erfahrung"
  },
  {
    icon: Moon,
    title: "Zuschläge",
    description: "Für Nacht-, Sonn- und Feiertagsarbeit"
  },
  {
    icon: Calendar,
    title: "30 Urlaubstage",
    description: "Jährlich garantiert"
  },
  {
    icon: Car,
    title: "PKW",
    description: "Auch zur privaten Nutzung"
  },
  {
    icon: Dumbbell,
    title: "Firmenfitness",
    description: "Wellpass-Mitgliedschaft monatlich"
  },
  {
    icon: Gift,
    title: "Prämien",
    description: "Urlaubs-, Feiertags- und Leistungsprämien"
  },
  {
    icon: Home,
    title: "Unterkunft",
    description: "Bei Bedarf Apartment oder WG"
  },
  {
    icon: Shirt,
    title: "Berufskleidung",
    description: "Für alle Wetterbedingungen"
  },
];

const sidebarBenefits = [
  "Überdurchschnittliches Gehalt",
  "30 Tage Urlaub",
  "PKW zur privaten Nutzung",
  "Wellpass-Mitgliedschaft",
  "Weiterbildungsmöglichkeiten",
  "Zusätzliche Rentenversicherung",
  "Familiäres Arbeitsumfeld",
];

const faqs = [
  {
    question: "Welche Aufgaben übernimmt eine Pflegehilfskraft in Frankfurt?",
    answer: "Als Pflegehilfskraft in Frankfurt unterstützen Sie Pflegefachkräfte bei der Betreuung und Versorgung von Patienten im häuslichen Umfeld. Ihre Aufgaben umfassen die Hilfe bei der Körperpflege, Unterstützung bei der Nahrungsaufnahme, Mobilisation der Patienten sowie hauswirtschaftliche Tätigkeiten wie das Reinigen der Wohnräume oder das Zubereiten von Mahlzeiten. Durch Ihre Arbeit ermöglichen Sie es den Patienten, so lange wie möglich in ihrer vertrauten Umgebung zu bleiben und tragen somit zur Erhaltung ihrer Lebensqualität bei."
  },
  {
    question: "Wird die Stelle als Pflegehilfskraft in Frankfurt auch als Teilzeitstelle angeboten?",
    answer: "Ja, wir bieten die Position als Pflegehilfskraft in Frankfurt sowohl in Vollzeit als auch in Teilzeit an. Wir sind flexibel und passen die Arbeitszeiten an Ihre Bedürfnisse an."
  },
  {
    question: "Welche Vorteile bietet die Position als Pflegehilfskraft in Frankfurt bei Avyta?",
    answer: "Als Pflegehilfskraft bei Avyta profitieren Sie von überdurchschnittlichem Gehalt, 30 Urlaubstagen, einem Firmenwagen zur privaten Nutzung, Wellpass-Firmenfitness, Prämien sowie Weiterbildungsmöglichkeiten. Zudem bieten wir bei Bedarf eine Unterkunft und legen großen Wert auf ein familiäres Arbeitsumfeld."
  },
];

const Pflegehilfskraft = () => {
  return (
    <>
      <Helmet>
        <title>Pflegehilfskraft in Frankfurt | Jobs bei AVYTA</title>
        <meta name="description" content="Pflegehilfskraft in Frankfurt gesucht! Überdurchschnittliches Gehalt, 30 Tage Urlaub, Firmenwagen & Wellpass. Jetzt bei AVYTA bewerben!" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Link to="/jobs/stellenangebote" className="text-primary hover:underline text-sm mb-4 inline-block">
                ← Zurück zu Stellenangebote
              </Link>
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-display font-bold text-foreground mb-4">
                    Pflegehilfskraft in Frankfurt – Ihre Chance in der ambulanten Pflege
                  </h1>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Vollzeit / Teilzeit
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Frankfurt am Main
                    </span>
                    <span className="flex items-center gap-1">
                      <Euro className="w-4 h-4" />
                      Übertarifliche Vergütung
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                  {/* Intro */}
                  <div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Als Pflegehilfskraft in Frankfurt leisten Sie einen wertvollen Beitrag zur Betreuung und Unterstützung pflegebedürftiger Menschen in ihrem häuslichen Umfeld. Ihre Tätigkeit ist essenziell für das Wohlbefinden der Patienten und trägt maßgeblich zur Entlastung des Pflegefachpersonals bei. In einer Stadt wie Frankfurt, die für ihre Vielfalt und Dynamik bekannt ist, bieten sich zahlreiche Möglichkeiten, Ihre Fähigkeiten im Bereich der ambulanten Pflege einzusetzen und weiterzuentwickeln.
                    </p>
                  </div>

                  {/* Aufgaben */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Aufgaben einer Pflegehilfskraft in Frankfurt
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Als Pflegehilfskraft in Frankfurt unterstützen Sie Pflegefachkräfte bei der täglichen Versorgung der Patienten. Ihre Aufgaben umfassen die Hilfe bei der Körperpflege, Unterstützung bei der Nahrungsaufnahme und Mobilisation der Patienten. Zudem übernehmen Sie hauswirtschaftliche Tätigkeiten wie das Reinigen der Wohnräume oder das Zubereiten von Mahlzeiten. Durch Ihre Arbeit ermöglichen Sie es den Patienten, so lange wie möglich in ihrer vertrauten Umgebung zu bleiben.
                    </p>
                    <ul className="space-y-3">
                      {aufgaben.map((aufgabe, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{aufgabe}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Anforderungen */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Anforderungen an eine Pflegehilfskraft in Frankfurt
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Berufserfahrung oder eine abgeschlossene Ausbildung im Pflegebereich sind Voraussetzung für die Tätigkeit als Pflegehilfskraft in Frankfurt. Einfühlungsvermögen, Geduld und Verantwortungsbewusstsein sind essenziell, um den Bedürfnissen der Patienten gerecht zu werden. Zudem sollten Sie körperlich belastbar sein und Freude am Umgang mit Menschen haben.
                    </p>
                    <ul className="space-y-3">
                      {anforderungen.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Vorteile */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Vorteile einer Tätigkeit als Pflegehilfskraft in Frankfurt
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Eine Tätigkeit als Pflegehilfskraft in Frankfurt bietet nicht nur vielfältige Einsatzmöglichkeiten, sondern ist auch sinnstiftend, da Sie direkt zur Verbesserung der Lebensqualität pflegebedürftiger Menschen beitragen. Sie können in verschiedenen Stadtteilen Frankfurts arbeiten, die ideal zu Ihrem Wohnort passen. Dabei profitieren Sie von flexiblen Arbeitszeiten, die es Ihnen ermöglichen, je nach Bedarf in Teilzeit oder Vollzeit zu arbeiten. Zudem bieten wir Ihnen umfangreiche Weiterbildungsangebote, um Ihre beruflichen Fähigkeiten kontinuierlich zu erweitern.
                    </p>
                  </div>

                  {/* Benefits Grid */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                      Benefits
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <benefit.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Karrierechancen */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Karrierechancen für Pflegehilfskräfte bei Avyta in Frankfurt
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Als Pflegehilfskraft in Frankfurt haben Sie die Möglichkeit, sich beruflich weiterzuentwickeln. Durch den Besuch von Fortbildungen können Sie zusätzliche Qualifikationen erwerben und beispielsweise in die Position einer Pflegefachkraft aufsteigen. Wir bieten interne Schulungsprogramme an, die Ihnen den Erwerb von Fachwissen erleichtern. Zudem besteht die Möglichkeit, sich auf bestimmte Fachbereiche wie Demenzbetreuung oder Palliativpflege zu spezialisieren, was Ihre Einsatzmöglichkeiten erweitert.
                    </p>
                  </div>

                  {/* Unterstützung */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Unterstützung durch Avyta für Pflegehilfskräfte in Frankfurt
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Avyta, als Anbieter für ambulante Pflege in Frankfurt, legt großen Wert auf die Unterstützung und Weiterentwicklung seiner Mitarbeiter. Als Pflegehilfskraft bei Avyta profitieren Sie von einem angenehmen Betriebsklima mit flachen Hierarchien und einem engagierten Team. Zudem bietet Avyta überdurchschnittliche Gehälter und zusätzliche Rentenversicherungen. Durch regelmäßige Schulungen und Fortbildungen werden Sie in Ihrer beruflichen Entwicklung gefördert und erhalten die Möglichkeit, Ihre Fähigkeiten kontinuierlich zu erweitern.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Jetzt als Pflegehilfskraft in Frankfurt bewerben
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Ergreifen Sie Ihre Chance und starten Sie Ihre Karriere als Pflegehilfskraft in Frankfurt! Werden Sie Teil von Avyta und profitieren Sie von vielfältigen beruflichen und persönlichen Perspektiven. Arbeiten Sie in einem sympathischen Team, das Ihnen mit Wertschätzung und Anerkennung begegnet. Bewerben Sie sich noch heute und gestalten Sie Ihre Zukunft in der Pflege!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <JobCTADropdownButton jobTitle="Pflegehilfskraft" />
                      <Button variant="outline" size="lg" asChild>
                        <a href="tel:+496915391405">
                          Anrufen: 069 153 914 05
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                      Häufige Fragen
                    </h2>
                    <Accordion type="single" collapsible className="space-y-3">
                      {faqs.map((faq, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`item-${index}`}
                          className="bg-muted/30 rounded-xl border border-border/50 px-6"
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

                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="sticky top-28 space-y-6">
                    <div className="p-6 bg-muted/30 rounded-2xl">
                      <h3 className="font-semibold text-foreground mb-4">Das bieten wir</h3>
                      <ul className="space-y-3">
                        {sidebarBenefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <JobCTADropdownButton jobTitle="Pflegehilfskraft" />

                    <p className="text-sm text-muted-foreground text-center">
                      oder rufen Sie uns an: <br />
                      <a href="tel:+496915391405" className="text-primary font-medium">069 153 914 05</a>
                    </p>

                    <JobsSidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <NewsletterSection />
      <Footer />
    </>
  );
};

export default Pflegehilfskraft;
