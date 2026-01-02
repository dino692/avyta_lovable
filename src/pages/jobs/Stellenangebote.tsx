import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import JobsSidebar from "@/components/JobsSidebar";
import { Briefcase, CheckCircle2, ArrowRight, Sparkles, Heart, Users, Home, Dumbbell, Infinity, Palette, Globe, CalendarCheck, Euro, Calendar, Car, Award, Gift, Building2, Shirt, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import JobCTADropdownButton from "@/components/JobCTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stellenangebote = [
  { 
    title: "Pflegefachkräfte", 
    href: "/karriere/pflegefachkraft-frankfurt", 
    icon: Sparkles,
    description: "Als Pflegefachkraft übernehmen Sie die medizinische Versorgung von Patienten in der häuslichen Pflege. Sie stehen in engem Kontakt mit Pflegebedürftigen und ihren Angehörigen und koordinieren die Aufgaben Ihrer Kollegen."
  },
  { 
    title: "Pflegehelfer (m/w/d)", 
    href: "/karriere/pflegehelfer-frankfurt", 
    icon: Heart,
    description: "Nach einjähriger Ausbildung an einer staatlich anerkannten Krankenfachschule können Sie als Pflegehelfer im ambulanten Dienst tätig werden. Diese Anstellungsform ist für Berufseinsteiger und Berufswechsler besonders interessant."
  },
  { 
    title: "Pflegehilfskraft", 
    href: "/karriere/pflegehilfskraft-frankfurt", 
    icon: Users,
    description: "Pflegehilfskräfte begleiten unsere Fachkräfte im ambulanten Dienst und liefern körperliche und soziale Unterstützung. Von der Aufstellung von Gehhilfen und Rollstühlen bis hin zum Anziehen von Kompressionsstrümpfen erwarten Sie als Hilfskraft täglich neue Aufgaben."
  },
  { 
    title: "Haushaltshilfen", 
    href: "/karriere/haushaltshilfe-frankfurt", 
    icon: Home,
    description: "Unsere ambulante Pflege Stellenangebote für Frankfurt stehen auch für Haushaltshilfen ohne besondere Vorausbildung offen. Im ambulanten Einsatz tragen Sie mit der Erledigung von Haushaltsaufgaben wie Kochen, Wäsche waschen oder Reinigen zum Wohlbefinden von Pflegebedürftigen bei."
  },
];

const benefits = [
  { icon: Euro, title: "Übertarifliches Gehalt", description: "Je nach Qualifikation und Erfahrung" },
  { icon: Award, title: "Zuschläge", description: "Sonntag, Feiertag und Nachtzuschläge" },
  { icon: Calendar, title: "30 Urlaubstage", description: "Jährlich garantiert" },
  { icon: Car, title: "PKW", description: "Auch privat zur Verfügung" },
  { icon: Dumbbell, title: "Firmenfitness", description: "Wellpass-Mitgliedschaft monatlich" },
  { icon: Gift, title: "Prämien", description: "Urlaubsprämien, Feiertagsprämien und leistungsbasierte Prämien" },
  { icon: Users, title: "Teamzusammenhalt", description: "Geburtstage mit steuerfreien Geschenken bis 60€" },
  { icon: Building2, title: "Unterkunft", description: "Bei Bedarf Apartment oder WG" },
  { icon: Shirt, title: "Berufskleidung", description: "Für alle Wetterbedingungen" },
  { icon: Laptop, title: "Digital", description: "Größtenteils papierlose Arbeit" },
];

const sidebarBenefits = [
  "Übertarifliches Gehalt",
  "30 Tage Urlaub jährlich",
  "Firmenwagen zur privaten Nutzung",
  "Wellpass-Mitgliedschaft",
  "Zuschläge für Sonn- und Feiertage",
  "Familiäres Arbeitsumfeld",
];

const wellpassFeatures = [
  { icon: Infinity, label: "Unlimitiert" },
  { icon: Palette, label: "Vielfältig" },
  { icon: Globe, label: "Überall" },
  { icon: CalendarCheck, label: "Flexibel" },
];

const faqs = [
  {
    question: "Wann kann ich mich als Pflegehilfskraft oder Haushaltshilfe bewerben?",
    answer: "Pflegehilfskräfte und Haushaltshilfen benötigen keine besondere Vorausbildung und können sich sofort auf Stellenangebote in der Pflege Frankfurt bewerben und in den Beruf einsteigen. Sie sollten ein Händchen für den freundlichen Umgang mit Menschen haben und auch engen Kontakt nicht scheuen."
  },
  {
    question: "Welche Aufgaben erwarten mich in der ambulanten Pflege?",
    answer: "Die Aufgabenfelder für unsere Mitarbeiter variieren von Einsatzort zu Einsatzort. Manchmal stehen Sie Pflegefachkräften als Beobachter und Dokumentator zur Seite, zu anderen Gelegenheiten helfen Sie Pflegebedürftigen beim An- und Ausziehen oder legen Katheter. Abhängig von Ihrem beruflichen Qualifikationsgrad erledigen Sie sämtliche Aufgaben, die zur Verbesserung der Lebensqualität von Pflegebedürftigen beitragen."
  },
  {
    question: "Welche Eigenschaften müssen Bewerber auf Stellenangebote in der Pflege Frankfurt mitbringen?",
    answer: "Unser Pflegedienst mit Herz ist bekannt für seine Zuverlässigkeit. Pflegebedürftige und ihre Angehörigen übertragen uns Verantwortung für ihr Wohlbefinden. Bei der Auswahl von Bewerbern sind Engagement und Motivation die wichtigsten Kriterien. Wenn Sie gern mit Menschen zusammenarbeiten und anderen helfen, sind Sie in unserem Team genau richtig."
  },
];

const Stellenangebote = () => {
  return (
    <>
      <Helmet>
        <title>Stellenangebote Pflege Frankfurt | Jobs bei AVYTA Pflegedienst</title>
        <meta name="description" content="Stellenangebote für die Pflege in Frankfurt bei AVYTA. Pflegefachkräfte, Pflegehelfer und Haushaltshilfen gesucht. Übertarifliche Bezahlung, 30 Tage Urlaub, Firmenwagen. Jetzt bewerben!" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Link to="/jobs" className="text-primary hover:underline text-sm mb-4 inline-block">
                ← Zurück zu Karriere
              </Link>
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-display font-bold text-foreground mb-4">
                    Stellenangebote Pflege Frankfurt
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Mit Herz dabei – Werden Sie Teil unseres Teams
                  </p>
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
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Stellenangebote für die Pflege in Frankfurt
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Sie arbeiten gern eng mit Menschen zusammen und fühlen sich wohl im sozialen Arbeitsumfeld? 
                      Wir von Avyta vergrößern regelmäßig unser familiäres Team in der ambulanten Pflege. 
                      Pflegefachkräfte, Pflegehelfer und Haushaltshilfen sind bei uns stets gefragt. Bei uns erwartet 
                      Sie ein abwechslungsreicher Arbeitsalltag mit größter Wertschätzung für Ihren Einsatz und Ihre 
                      Fähigkeiten. Unsere ambulante Pflege mit Stellenangeboten für Frankfurt begrüßt Bewerber jeden 
                      Alters, jeden Geschlechts und jeder Herkunft. Werden Sie Teil des Avyta Teams!
                    </p>
                  </div>

                  {/* Freie Stellenangebote */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Freie Stellenangebote in der Pflege Frankfurt
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Unsere Aufgaben im privaten Umfeld von Pflegebedürftigen sind so vielfältig wie die Menschen, 
                      die wir täglich versorgen. Darum ist auch unser Team breit aufgestellt und Sie können sich mit 
                      unterschiedlichen Qualifikationen bewerben:
                    </p>

                    <div className="space-y-4">
                      {stellenangebote.map((job) => (
                        <Link
                          key={job.href}
                          to={job.href}
                          className="group block p-5 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                              <job.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                                {job.title}
                              </h3>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {job.description}
                              </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Diese Vorteile erwarten Sie
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Grundpflege, Behandlungspflege, Intensivpflege oder einfache Haushaltshilfe – wir helfen 
                      Pflegebedürftigen dort, wo sie Hilfe benötigen. Wir wissen Ihren herzlichen 
                      Einsatz zu schätzen, darum bieten wir für Stellenangebote in der Pflege Frankfurt eine 
                      Reihe von besonderen Benefits für Angestellte:
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl border border-border/50">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <benefit.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">{benefit.title}</h4>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arbeiten bei Avyta */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Arbeiten bei Avyta – Eine Zukunft voller Möglichkeiten
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Wir sind Ihr zuverlässiger Partner und Arbeitgeber in der Pflegebranche mit Sitz im Herzen 
                      von Frankfurt. Bei uns stehen nicht nur die Bedürfnisse unserer Patienten im Mittelpunkt, 
                      sondern auch das Wohlbefinden und die berufliche Entwicklung unserer Mitarbeiter.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Als Teil unseres Teams genießen Sie nicht nur die Sicherheit und die Vorzüge eines etablierten 
                      Pflegedienstes, sondern auch Gesundheits- und Wellnessangebote durch unsere Mitgliedschaft bei 
                      Wellpass. Wir glauben daran, dass die Gesundheit unserer Mitarbeiter direkt zu einer höheren 
                      Qualität in der Pflege unserer Kunden beiträgt.
                    </p>

                    {/* Wellpass Box */}
                    <div className="p-6 bg-muted/30 rounded-2xl border border-border/50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Dumbbell className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground">Firmenfitness mit Wellpass</h3>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {wellpassFeatures.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <feature.icon className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{feature.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arbeiten mit Wertschätzung */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Arbeiten mit Wertschätzung
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Sie sprechen Deutsch auf B1-Niveau oder höher und haben eine Fahrerlaubnis für Klasse B Fahrzeuge? 
                      Damit sind die ersten Hürden für eine Bewerbung auf unsere Stellenangebote in der Pflege in Frankfurt 
                      bereits überwunden. Menschen mit Freude an sozialer Arbeit und neuen Kontakten sind bei uns stets 
                      willkommen, unabhängig von ihrem Qualifikationsgrad.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                    <p className="text-foreground font-medium mb-2">
                      Wir stehen Ihnen gerne zur Verfügung
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Bewerben Sie sich jetzt und lernen Sie unser freundliches Arbeitsumfeld kennen.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <JobCTADropdownButton jobTitle="Stellenangebot" />
                      <Button variant="outline" size="lg" asChild>
                        <a href="tel:+496915391405">
                          Anrufen: 069 153 914 05
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* FAQ */}
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
                      <h3 className="font-semibold text-foreground mb-4">Benefits</h3>
                      <ul className="space-y-3">
                        {sidebarBenefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <JobCTADropdownButton jobTitle="Stellenangebot" />

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

export default Stellenangebote;
