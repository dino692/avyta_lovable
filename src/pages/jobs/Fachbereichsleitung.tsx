import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import JobsSidebar from "@/components/JobsSidebar";
import { CheckCircle2, Award, Euro, Calendar, Car, Dumbbell, Gift, Users, Shirt, Laptop, GraduationCap, TrendingUp } from "lucide-react";
import JobCTADropdownButton from "@/components/JobCTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generateFAQSchema } from "@/lib/faqSchema";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";

const aufgaben = [
  "Fachliche Leitung und Steuerung eines Pflegebereichs im ambulanten Pflegedienst",
  "Sicherstellung und Weiterentwicklung der Pflegequalität nach aktuellen Standards",
  "Anleitung, Beratung und fachliche Supervision von Pflegekräften",
  "Durchführung von Pflegevisiten und Qualitätskontrollen",
  "Mitwirkung bei MDK-Prüfungen und Qualitätsaudits",
  "Erstellung und Überwachung individueller Pflegeplanungen",
  "Enge Zusammenarbeit mit Ärzten, Therapeuten und Angehörigen",
  "Beratung von Pflegebedürftigen und Angehörigen zu Pflegeleistungen und -ansprüchen",
  "Unterstützung bei der Einarbeitung neuer Mitarbeiter",
  "Mitwirkung an der konzeptionellen Weiterentwicklung des Pflegedienstes",
];

const anforderungen = [
  "Abgeschlossene Ausbildung als Pflegefachkraft (Gesundheits- und Krankenpfleger/in, Altenpfleger/in oder vergleichbar)",
  "Weiterbildung zur Fachbereichsleitung, Pflegeexperte oder vergleichbare Qualifikation (z. B. Wundexperte, Pain Nurse, Praxisanleiter)",
  "Mehrjährige Berufserfahrung in der ambulanten oder stationären Pflege",
  "Führungskompetenz und Erfahrung in der Anleitung von Pflegeteams",
  "Fundierte Kenntnisse in Pflegedokumentation und Qualitätsmanagement",
  "Eigenverantwortliche, strukturierte Arbeitsweise",
  "Kommunikationsstärke und Teamfähigkeit",
  "Führerschein Klasse B (Voraussetzung)",
];

const benefits = [
  { icon: Euro, title: "Übertarifliches Gehalt", description: "Attraktive Vergütung je nach Qualifikation und Erfahrung mit Zuschlägen" },
  { icon: GraduationCap, title: "Weiterbildung", description: "Individuelle Fort- und Weiterbildungsmöglichkeiten" },
  { icon: Calendar, title: "30 Urlaubstage", description: "Jährlich garantiert" },
  { icon: Car, title: "Firmenwagen", description: "Auch zur privaten Nutzung" },
  { icon: Dumbbell, title: "Firmenfitness", description: "Wellpass-Mitgliedschaft zusätzlich zum Gehalt" },
  { icon: Gift, title: "Prämien", description: "Urlaubs-, Feiertags- und leistungsbasierte Prämien" },
  { icon: Users, title: "Familiäres Team", description: "Flache Hierarchien und kurze Entscheidungswege" },
  { icon: TrendingUp, title: "Karriereperspektiven", description: "Aufstiegsmöglichkeiten im wachsenden Unternehmen" },
];

const sidebarBenefits = [
  "Überdurchschnittliches Gehalt",
  "30 Tage Urlaub jährlich",
  "Firmenwagen zur privaten Nutzung",
  "Wellpass-Mitgliedschaft",
  "Fort- und Weiterbildungen",
  "Führungsverantwortung",
];

const faqs = [
  {
    question: "Was macht eine Fachbereichsleitung im ambulanten Pflegedienst?",
    answer: "Als Fachbereichsleitung übernehmen Sie die fachliche Steuerung eines Pflegebereichs. Sie stellen die Pflegequalität sicher, leiten Pflegekräfte an, führen Pflegevisiten durch und arbeiten eng mit Ärzten, Therapeuten und Angehörigen zusammen. Sie sind die zentrale Ansprechperson für alle fachlichen Fragestellungen in Ihrem Bereich."
  },
  {
    question: "Welche Qualifikation braucht man als Pflegeexperte in Frankfurt?",
    answer: "Sie benötigen eine abgeschlossene Ausbildung als Pflegefachkraft sowie eine Weiterbildung im Bereich Fachbereichsleitung, Pflegeexperte oder eine vergleichbare Zusatzqualifikation (z. B. Wundexperte, Pain Nurse, Praxisanleiter). Mehrjährige Berufserfahrung und Führungskompetenz sind wichtige Voraussetzungen."
  },
  {
    question: "Wie sind die Karrierechancen als Fachbereichsleitung Pflege in Frankfurt?",
    answer: "Frankfurt bietet als Gesundheitsstandort hervorragende Karrierechancen. Bei Avyta haben Sie die Möglichkeit, sich in einem wachsenden Unternehmen weiterzuentwickeln – von der Fachbereichsleitung bis hin zu übergeordneten Leitungspositionen. Wir fördern Ihre individuelle Weiterentwicklung aktiv."
  },
];

const Fachbereichsleitung = () => {
  return (
    <>
      <Helmet>
        <title>Fachbereichsleitung Pflege Frankfurt ✅ Pflegeexperte gesucht | avyta.de</title>
        <meta name="description" content="Fachbereichsleitung / Pflegeexperte (m/w/d) in Frankfurt gesucht ✔ Übertarifliches Gehalt ✔ 30 Tage Urlaub ✔ Firmenwagen ✔ Weiterbildung | Jetzt bewerben bei Avyta" />
        <meta name="keywords" content="Fachbereichsleitung Pflege Frankfurt, Pflegeexperte Frankfurt, Pflegedienstleitung Frankfurt, Leitende Pflegefachkraft Frankfurt, Stellenangebote Pflege Leitung Frankfurt" />
        <link rel="canonical" href="https://www.avyta.de/karriere/fachbereichsleitung-frankfurt" />
        <meta property="og:title" content="Fachbereichsleitung Pflege Frankfurt ✅ Pflegeexperte gesucht | avyta.de" />
        <meta property="og:description" content="Fachbereichsleitung / Pflegeexperte (m/w/d) in Frankfurt gesucht ✔ Übertarifliches Gehalt ✔ 30 Tage Urlaub ✔ Firmenwagen" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Karriere", url: "https://www.avyta.de/karriere" },
          { name: "Fachbereichsleitung", url: "https://www.avyta.de/karriere/fachbereichsleitung-frankfurt" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(faqs)}</script>
      </Helmet>

      <Header />

      <main className="pt-20 overflow-x-hidden">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Link to="/karriere/stellenangebote-pflege-frankfurt" className="text-primary hover:underline text-sm mb-4 inline-block">
                ← Zurück zu Stellenangebote
              </Link>
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                      Fachbereichsleitung / Pflegeexperte (m/w/d)
                    </h1>
                    <span className="px-3 py-1 bg-rose-500/10 text-rose-600 text-sm font-medium rounded-full">
                      Neu
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Leitende Pflegefachkraft im ambulanten Pflegedienst Frankfurt
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
                      Fachbereichsleitung Pflege in Frankfurt gesucht
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Als <strong>Fachbereichsleitung / Pflegeexperte</strong> bei Avyta übernehmen Sie eine Schlüsselrolle in unserem ambulanten Pflegedienst in Frankfurt. Sie verantworten die fachliche Steuerung eines Pflegebereichs, sichern die Qualität unserer Pflege und sind zentrale Ansprechperson für Ihr Team, Ärzte und Angehörige.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Wir suchen eine erfahrene <strong>leitende Pflegefachkraft</strong>, die mit Fachkompetenz und Führungsstärke unser Team in Frankfurt bereichert. Bei uns erwartet Sie ein familiäres Arbeitsumfeld mit flachen Hierarchien und echten Entwicklungsmöglichkeiten.
                    </p>
                  </div>

                  {/* Aufgaben */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Ihre Aufgaben als Fachbereichsleitung
                    </h2>
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
                      Anforderungen an Pflegeexperten in Frankfurt
                    </h2>
                    <ul className="space-y-3">
                      {anforderungen.map((anf, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{anf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                      Ihre Vorteile als Fachbereichsleitung bei Avyta
                    </h2>
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

                  {/* CTA */}
                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">
                      Werden Sie Fachbereichsleitung bei Avyta!
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Sie bringen die nötige Qualifikation und Leidenschaft für die Pflege mit? Dann freuen wir uns auf Ihre Bewerbung – ob in Vollzeit oder Teilzeit. Gestalten Sie die Zukunft der ambulanten Pflege in Frankfurt aktiv mit!
                    </p>
                    <JobCTADropdownButton jobTitle="Fachbereichsleitung / Pflegeexperte" />
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

                    <JobCTADropdownButton jobTitle="Fachbereichsleitung / Pflegeexperte" />

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

export default Fachbereichsleitung;
