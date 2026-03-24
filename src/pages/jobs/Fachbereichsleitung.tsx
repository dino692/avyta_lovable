import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import JobsSidebar from "@/components/JobsSidebar";
import { CheckCircle2, Award, Euro, Calendar, Car, Dumbbell, Gift, Users, GraduationCap, TrendingUp } from "lucide-react";
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
  "Fachliche Leitung und Steuerung eines Pflegebereichs als Bereichsleitung Pflege im ambulanten Dienst",
  "Sicherstellung und Weiterentwicklung der Pflegequalität nach aktuellen MDK-Standards und Qualitätsmanagement-Richtlinien",
  "Anleitung, Beratung und fachliche Supervision von Pflegefachkräften und Pflegehelfern",
  "Durchführung von Pflegevisiten, Fallbesprechungen und Qualitätskontrollen",
  "Verantwortung für Pflegedokumentation und Pflegeplanung nach SGB V und SGB XI",
  "Mitwirkung bei MDK-Prüfungen, Qualitätsaudits und internen Audits",
  "Enge Zusammenarbeit mit Ärzten, Therapeuten, Kostenträgern und Angehörigen",
  "Beratung von Pflegebedürftigen und Angehörigen zu Pflegeleistungen und Pflegegraden",
  "Einarbeitung, Anleitung und Praxisbegleitung neuer Mitarbeiter",
  "Konzeptionelle Weiterentwicklung des Pflegedienstes und Umsetzung neuer Pflegestandards",
];

const anforderungen = [
  "Abgeschlossene Ausbildung als examinierte Pflegefachkraft (Gesundheits- und Krankenpfleger/in, Altenpfleger/in oder vergleichbar)",
  "Weiterbildung zur Pflegedienstleitung (PDL), Fachbereichsleitung oder vergleichbare Qualifikation (z. B. Wundexperte, Pain Nurse, Praxisanleiter, Palliative Care)",
  "Mehrjährige Berufserfahrung in der ambulanten Pflege oder stationären Pflege in Frankfurt oder Rhein-Main",
  "Führungskompetenz und nachgewiesene Erfahrung in der Leitung von Pflegeteams",
  "Fundierte Kenntnisse in Pflegedokumentation, Qualitätsmanagement Pflege und Pflegeprozesssteuerung",
  "Kenntnisse der aktuellen Pflegegesetzgebung (SGB V, SGB XI, Hessisches Pflegegesetz)",
  "Eigenverantwortliche, strukturierte Arbeitsweise mit hoher Organisationsfähigkeit",
  "Führerschein Klasse B (Voraussetzung für ambulante Einsätze in Frankfurt)",
];

const benefits = [
  { icon: Euro, title: "Übertarifliches Gehalt", description: "Attraktive Vergütung für Pflegedienstleitung mit Zuschlägen für Sonn-, Feiertags- und Nachtarbeit" },
  { icon: GraduationCap, title: "Fort- und Weiterbildung", description: "Individuelle Weiterbildungsmöglichkeiten zur PDL, Qualitätsmanagementbeauftragten oder Pflegeberaterin" },
  { icon: Calendar, title: "30 Urlaubstage", description: "Jährlich garantiert für Ihre Work-Life-Balance" },
  { icon: Car, title: "Firmenwagen", description: "Auch zur privaten Nutzung – ideal für ambulante Pflege in Frankfurt" },
  { icon: Dumbbell, title: "Firmenfitness", description: "Wellpass-Mitgliedschaft zusätzlich zum Gehalt" },
  { icon: Gift, title: "Prämien & Sonderzahlungen", description: "Urlaubs-, Feiertags- und leistungsbasierte Prämien sowie Geburtstagsgeschenke" },
  { icon: Users, title: "Familiäres Team", description: "Flache Hierarchien und kurze Entscheidungswege in unserem Pflegedienst Frankfurt" },
  { icon: TrendingUp, title: "Karriereperspektiven", description: "Aufstieg zur Pflegedienstleitung oder Einrichtungsleitung im wachsenden Unternehmen" },
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
    question: "Was macht eine Pflegedienstleitung (PDL) im ambulanten Pflegedienst Frankfurt?",
    answer: "Eine Pflegedienstleitung (PDL) im ambulanten Pflegedienst Frankfurt verantwortet die fachliche und organisatorische Steuerung der Pflegeprozesse. Dazu gehören die Sicherstellung der Pflegequalität, Personalführung, Dienstplangestaltung, Pflegedokumentation sowie die Zusammenarbeit mit Ärzten, Krankenkassen und MDK. Bei Avyta übernimmt die Fachbereichsleitung diese Aufgaben in einem unterstützenden, familiären Umfeld."
  },
  {
    question: "Welche Qualifikation braucht man als Fachbereichsleitung Pflege in Frankfurt?",
    answer: "Für eine Stelle als Fachbereichsleitung Pflege oder Pflegedienstleitung in Frankfurt benötigen Sie eine abgeschlossene Ausbildung als examinierte Pflegefachkraft sowie eine Weiterbildung zur PDL, Fachbereichsleitung oder eine vergleichbare Zusatzqualifikation. Mehrjährige Berufserfahrung in der ambulanten oder stationären Pflege und Führungskompetenz sind Voraussetzung."
  },
  {
    question: "Wie hoch ist das Gehalt als Pflegedienstleitung in Frankfurt?",
    answer: "Das Gehalt als Pflegedienstleitung in Frankfurt liegt branchenüblich zwischen 48.000 und 66.000 Euro brutto jährlich. Bei Avyta bieten wir eine übertarifliche Vergütung mit zusätzlichen Prämien, 30 Urlaubstagen, Firmenwagen zur privaten Nutzung und Wellpass-Mitgliedschaft – deutlich über dem Branchendurchschnitt."
  },
  {
    question: "Was ist der Unterschied zwischen Pflegedienstleitung und Fachbereichsleitung?",
    answer: "Eine Pflegedienstleitung (PDL) ist für die gesamte pflegerische Organisation eines Pflegedienstes verantwortlich. Eine Fachbereichsleitung übernimmt die fachliche Steuerung eines spezifischen Pflegebereichs und kann als Vorstufe oder spezialisierte Variante der PDL verstanden werden. Beide Positionen erfordern Führungskompetenz und pflegefachliches Expertenwissen."
  },
  {
    question: "Welche Karrierechancen bietet eine Bereichsleitung Pflege in Frankfurt am Main?",
    answer: "Frankfurt am Main bietet als Gesundheitsstandort in der Rhein-Main-Region hervorragende Karrierechancen in der Pflege. Von der Bereichsleitung Pflege können Sie zur Pflegedienstleitung, stellvertretenden Einrichtungsleitung oder ins Qualitätsmanagement aufsteigen. Bei Avyta fördern wir Ihre Entwicklung mit individuellen Weiterbildungen aktiv."
  },
  {
    question: "Kann ich mich auch als stellvertretende Pflegedienstleitung bei Avyta bewerben?",
    answer: "Ja, auch Bewerbungen als stellvertretende Pflegedienstleitung sind bei Avyta willkommen. Wenn Sie Erfahrung als Pflegefachkraft mitbringen und den nächsten Karriereschritt zur Leitungsposition anstreben, unterstützen wir Sie mit Weiterbildungsangeboten und einer strukturierten Einarbeitung in die Führungsrolle."
  },
];

const jobPostingSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Fachbereichsleitung / Pflegedienstleitung (m/w/d)",
  "description": "Als Fachbereichsleitung / Pflegeexperte bei Avyta übernehmen Sie die fachliche Steuerung eines Pflegebereichs im ambulanten Pflegedienst Frankfurt. Verantwortung für Pflegequalität, Teamleitung und Qualitätsmanagement.",
  "datePosted": "2026-03-24",
  "validThrough": "2026-12-31",
  "employmentType": ["FULL_TIME", "PART_TIME"],
  "hiringOrganization": {
    "@type": "Organization",
    "name": "AVYTA Pflegedienst",
    "sameAs": "https://www.avyta.de",
    "logo": "https://www.avyta.de/images/avyta-logo.png"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Eckenheimer Landstraße 93",
      "addressLocality": "Frankfurt am Main",
      "addressRegion": "Hessen",
      "postalCode": "60318",
      "addressCountry": "DE"
    }
  },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "EUR",
    "value": {
      "@type": "QuantitativeValue",
      "minValue": 48000,
      "maxValue": 66000,
      "unitText": "YEAR"
    }
  },
  "jobBenefits": "Übertarifliches Gehalt, 30 Urlaubstage, Firmenwagen zur privaten Nutzung, Wellpass-Mitgliedschaft, Fort- und Weiterbildungen, Prämien",
  "qualifications": "Examinierte Pflegefachkraft mit Weiterbildung zur PDL oder Fachbereichsleitung",
  "industry": "Ambulante Pflege / Gesundheitswesen"
});

const Fachbereichsleitung = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienstleitung Frankfurt ✅ Fachbereichsleitung Pflege gesucht | avyta.de</title>
        <meta name="description" content="Pflegedienstleitung / Fachbereichsleitung Pflege (m/w/d) in Frankfurt gesucht ✔ Übertarifliches Gehalt ✔ 30 Tage Urlaub ✔ Firmenwagen ✔ PDL Weiterbildung | Jetzt bewerben bei Avyta" />
        <meta name="keywords" content="Pflegedienstleitung Frankfurt, Fachbereichsleitung Pflege Frankfurt, PDL Frankfurt, Bereichsleitung Pflege Frankfurt, leitende Pflegefachkraft Frankfurt, Pflegeexperte Frankfurt, Pflegeleitung Frankfurt, stellvertretende Pflegedienstleitung Frankfurt, Qualitätsmanagement Pflege Frankfurt, Stellenangebote Pflegedienstleitung Frankfurt" />
        <link rel="canonical" href="https://www.avyta.de/karriere/fachbereichsleitung-frankfurt" />
        <meta property="og:title" content="Pflegedienstleitung Frankfurt ✅ Fachbereichsleitung Pflege gesucht | avyta.de" />
        <meta property="og:description" content="Pflegedienstleitung / Fachbereichsleitung Pflege (m/w/d) in Frankfurt ✔ Übertarifliches Gehalt ✔ Firmenwagen ✔ 30 Tage Urlaub" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Karriere", url: "https://www.avyta.de/karriere" },
          { name: "Pflegedienstleitung / Fachbereichsleitung", url: "https://www.avyta.de/karriere/fachbereichsleitung-frankfurt" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(faqs)}</script>
        <script type="application/ld+json">{jobPostingSchema}</script>
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
                      Pflegedienstleitung / Fachbereichsleitung Pflege (m/w/d) in Frankfurt
                    </h1>
                    <span className="px-3 py-1 bg-destructive/10 text-destructive text-sm font-medium rounded-full">
                      Dringend gesucht
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Leitende Pflegefachkraft & Pflegeexperte im ambulanten Pflegedienst Frankfurt am Main
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
                      Pflegedienstleitung (PDL) in Frankfurt gesucht – Ihre Chance bei Avyta
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Sie suchen eine Stelle als <strong>Pflegedienstleitung in Frankfurt</strong> oder möchten als <strong>Fachbereichsleitung Pflege</strong> den nächsten Karriereschritt gehen? Bei Avyta, Ihrem ambulanten Pflegedienst in Frankfurt am Main, übernehmen Sie als <strong>leitende Pflegefachkraft</strong> eine Schlüsselrolle: Sie verantworten die fachliche Steuerung eines Pflegebereichs, sichern die Qualität unserer Pflege und sind zentrale Ansprechperson für Ihr Team, Ärzte und Angehörige.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Als <strong>Bereichsleitung Pflege</strong> bei Avyta arbeiten Sie in einem familiären Umfeld mit flachen Hierarchien. Ob Sie bereits Erfahrung als <strong>PDL</strong>, <strong>stellvertretende Pflegedienstleitung</strong> oder als <strong>Pflegeexperte</strong> mitbringen – bei uns finden Sie die passende Position mit echten Entwicklungsmöglichkeiten im Raum Frankfurt und Rhein-Main.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Unser Pflegedienst betreut über <strong>2.500 zufriedene Patienten</strong> in mehr als 20 Frankfurter Stadtteilen. Mit einer <strong>MDK-Note von 1,6</strong> und <strong>5,0 Google-Sternen</strong> gehören wir zu den bestbewerteten Pflegediensten in Frankfurt. Werden Sie Teil dieses Erfolgs und gestalten Sie die Zukunft der ambulanten Pflege aktiv mit.
                    </p>
                  </div>

                  {/* Aufgaben */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Aufgaben der Pflegedienstleitung / Fachbereichsleitung bei Avyta
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Als <strong>Pflegeleitung in Frankfurt</strong> übernehmen Sie vielseitige Aufgaben im <strong>Qualitätsmanagement Pflege</strong> und in der fachlichen Führung unseres Teams:
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
                      Anforderungen an die Pflegedienstleitung in Frankfurt
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Für diese Position als <strong>Bereichsleitung Pflege in Frankfurt am Main</strong> bringen Sie idealerweise folgende Qualifikationen mit:
                    </p>
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
                      Vorteile als Pflegedienstleitung bei Avyta in Frankfurt
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

                  {/* Warum Avyta */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Warum Avyta? Ihr Pflegedienst in Frankfurt mit Zukunft
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Als einer der führenden ambulanten Pflegedienste in Frankfurt bieten wir Ihnen als <strong>Pflegedienstleitung</strong> nicht nur eine sichere Anstellung, sondern echte Gestaltungsmöglichkeiten. Unser Team wächst stetig – und damit auch Ihre Karrierechancen.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Von der <strong>Fachbereichsleitung</strong> über die <strong>stellvertretende Pflegedienstleitung</strong> bis zur <strong>Pflegedienstleitung (PDL)</strong> – bei Avyta stehen Ihnen alle Türen offen. Wir investieren in Ihre Weiterbildung und unterstützen Sie auf Ihrem individuellen Karriereweg in der <Link to="/karriere" className="text-primary hover:underline font-semibold">Pflegebranche in Frankfurt</Link>.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">
                      Jetzt als Pflegedienstleitung in Frankfurt bewerben!
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Sie bringen die nötige Qualifikation und Leidenschaft für die Pflege mit? Dann freuen wir uns auf Ihre Bewerbung als <strong>Fachbereichsleitung Pflege</strong> – ob in Vollzeit oder Teilzeit. Gestalten Sie die Zukunft der ambulanten Pflege in Frankfurt aktiv mit!
                    </p>
                    <JobCTADropdownButton jobTitle="Pflegedienstleitung / Fachbereichsleitung" />
                  </div>

                  {/* FAQ */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                      Häufige Fragen zur Pflegedienstleitung in Frankfurt
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

                    <JobCTADropdownButton jobTitle="Pflegedienstleitung / Fachbereichsleitung" />

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
