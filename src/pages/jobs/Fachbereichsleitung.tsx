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
  "Fachliche Leitung und Steuerung der außerklinischen Intensivpflege im ambulanten Pflegedienst Frankfurt",
  "Sicherstellung der Pflegequalität bei beatmungspflichtigen und tracheotomierten Patienten nach aktuellen MDK-Standards",
  "Anleitung, Beratung und fachliche Supervision von Intensivpflegefachkräften und Pflegehelfern",
  "Durchführung von Pflegevisiten, Fallbesprechungen und Qualitätskontrollen in der Intensivpflege",
  "Verantwortung für Pflegedokumentation und Pflegeplanung in der außerklinischen Beatmungspflege nach SGB V und SGB XI",
  "Mitwirkung bei MDK-Prüfungen, Qualitätsaudits und Zertifizierungen im Bereich Intensivpflege",
  "Enge Zusammenarbeit mit Intensivmedizinern, Pneumologen, Therapeuten und Kostenträgern",
  "Beratung von Patienten und Angehörigen zu Leistungen der außerklinischen Intensivpflege und Pflegegraden",
  "Einarbeitung und Praxisanleitung neuer Mitarbeiter im Bereich Beatmungspflege und Intensivversorgung",
  "Konzeptionelle Weiterentwicklung der Intensivpflegeleistungen und Umsetzung neuer Pflegestandards",
];

const anforderungen = [
  "Abgeschlossene Ausbildung als examinierte Pflegefachkraft (Gesundheits- und Krankenpfleger/in, Altenpfleger/in oder vergleichbar)",
  "Weiterbildung zur Fachbereichsleitung, Pflegeexperte Intensivpflege oder vergleichbare Qualifikation (z. B. Fachkraft für außerklinische Beatmung, Basale Stimulation, Kinästhetik)",
  "Mehrjährige Berufserfahrung in der außerklinischen Intensivpflege, Beatmungspflege oder Intensivstation",
  "Fundierte Kenntnisse im Umgang mit Beatmungsgeräten, Trachealkanülen und Monitoring-Systemen",
  "Führungskompetenz und Erfahrung in der Anleitung von Pflegeteams im Intensivpflegebereich",
  "Kenntnisse in Pflegedokumentation, Qualitätsmanagement und den relevanten Richtlinien (DIGAB, S2k-Leitlinie)",
  "Eigenverantwortliche, strukturierte Arbeitsweise mit hoher Belastbarkeit",
  "Führerschein Klasse B (Voraussetzung für ambulante Intensivpflege-Einsätze in Frankfurt)",
];

const benefits = [
  { icon: Euro, title: "Übertarifliches Gehalt", description: "Attraktive Vergütung für Fachbereichsleitung Intensivpflege mit Zuschlägen für Sonn-, Feiertags- und Nachtarbeit" },
  { icon: GraduationCap, title: "Fort- und Weiterbildung", description: "Spezialisierte Weiterbildungen in Beatmungspflege, Intensivpflege und Pflegemanagement" },
  { icon: Calendar, title: "30 Urlaubstage", description: "Jährlich garantiert für Ihre Work-Life-Balance" },
  { icon: Car, title: "Firmenwagen", description: "Auch zur privaten Nutzung – ideal für Intensivpflege-Einsätze in Frankfurt" },
  { icon: Dumbbell, title: "Firmenfitness", description: "Wellpass-Mitgliedschaft zusätzlich zum Gehalt" },
  { icon: Gift, title: "Prämien & Sonderzahlungen", description: "Urlaubs-, Feiertags- und leistungsbasierte Prämien sowie Geburtstagsgeschenke" },
  { icon: Users, title: "Familiäres Team", description: "Flache Hierarchien und kurze Entscheidungswege in unserem Pflegedienst Frankfurt" },
  { icon: TrendingUp, title: "Karriereperspektiven", description: "Aufstieg zur Pflegedienstleitung Intensivpflege oder Einrichtungsleitung" },
];

const sidebarBenefits = [
  "Überdurchschnittliches Gehalt",
  "30 Tage Urlaub jährlich",
  "Firmenwagen zur privaten Nutzung",
  "Wellpass-Mitgliedschaft",
  "Intensivpflege-Weiterbildungen",
  "Führungsverantwortung",
];

const faqs = [
  {
    question: "Was macht eine Fachbereichsleitung Intensivpflege in Frankfurt?",
    answer: "Als Fachbereichsleitung Intensivpflege in Frankfurt verantworten Sie die fachliche Steuerung der außerklinischen Intensivpflege. Sie leiten das Intensivpflege-Team, sichern die Versorgungsqualität beatmungspflichtiger Patienten und arbeiten eng mit Intensivmedizinern, Therapeuten und Kostenträgern zusammen. Bei Avyta übernehmen Sie diese Schlüsselrolle in einem wachsenden, spezialisierten Pflegedienst."
  },
  {
    question: "Welche Qualifikation braucht man als Pflegeexperte Intensivpflege in Frankfurt?",
    answer: "Für eine Stelle als Pflegeexperte Intensivpflege in Frankfurt benötigen Sie eine abgeschlossene Ausbildung als examinierte Pflegefachkraft und eine Zusatzqualifikation im Bereich Intensivpflege oder außerklinische Beatmung. Erfahrung mit Beatmungsgeräten, Trachealkanülen und Monitoring ist Voraussetzung. Idealerweise bringen Sie eine Weiterbildung als Fachkraft für außerklinische Beatmung (DIGAB) mit."
  },
  {
    question: "Wie hoch ist das Gehalt als Fachbereichsleitung Intensivpflege in Frankfurt?",
    answer: "Das Gehalt als Fachbereichsleitung Intensivpflege in Frankfurt liegt aufgrund der Spezialisierung über dem allgemeinen Pflege-Durchschnitt – branchenüblich zwischen 50.000 und 68.000 Euro brutto jährlich. Bei Avyta bieten wir eine übertarifliche Vergütung mit zusätzlichen Zuschlägen, 30 Urlaubstagen, Firmenwagen und Wellpass-Mitgliedschaft."
  },
  {
    question: "Was ist außerklinische Intensivpflege und welche Patienten werden betreut?",
    answer: "Die außerklinische Intensivpflege umfasst die Versorgung von Patienten mit schweren Erkrankungen außerhalb des Krankenhauses – etwa beatmungspflichtige Patienten, Menschen mit Trachealkanüle oder neurologischen Erkrankungen wie ALS, Schlaganfall oder Querschnittslähmung. Als Pflegeexperte bei Avyta in Frankfurt betreuen Sie diese Patienten in deren häuslichem Umfeld oder in spezialisierten Wohngruppen."
  },
  {
    question: "Welche Karrierechancen bietet die Intensivpflege in Frankfurt am Main?",
    answer: "Die Intensivpflege ist einer der am stärksten wachsenden Bereiche der ambulanten Pflege in Frankfurt am Main. Als Fachbereichsleitung können Sie sich zur Pflegedienstleitung Intensivpflege weiterentwickeln oder ins Qualitätsmanagement wechseln. Bei Avyta fördern wir Ihre Karriere mit spezialisierten Weiterbildungen in Beatmungspflege, Palliative Care und Pflegemanagement."
  },
  {
    question: "Kann ich mich auch ohne Intensivpflege-Erfahrung als Pflegeexperte bewerben?",
    answer: "Wenn Sie eine examinierte Pflegefachkraft mit Führungserfahrung sind und Interesse an der außerklinischen Intensivpflege haben, können Sie sich gerne bewerben. Avyta bietet umfangreiche Einarbeitungsprogramme und finanziert Weiterbildungen wie die Fachkraft für außerklinische Beatmung, um Sie optimal auf die Intensivpflege vorzubereiten."
  },
];

const jobPostingSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Fachbereichsleitung Intensivpflege / Pflegeexperte (m/w/d) Frankfurt",
  "description": "Als Fachbereichsleitung / Pflegeexperte Intensivpflege bei Avyta übernehmen Sie die fachliche Steuerung der außerklinischen Intensivpflege in Frankfurt. Verantwortung für beatmungspflichtige Patienten, Teamleitung und Qualitätsmanagement in der Beatmungspflege.",
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
      "minValue": 50000,
      "maxValue": 68000,
      "unitText": "YEAR"
    }
  },
  "jobBenefits": "Übertarifliches Gehalt, 30 Urlaubstage, Firmenwagen zur privaten Nutzung, Wellpass-Mitgliedschaft, Intensivpflege-Weiterbildungen, Prämien",
  "qualifications": "Examinierte Pflegefachkraft mit Erfahrung in der außerklinischen Intensivpflege oder Beatmungspflege",
  "industry": "Außerklinische Intensivpflege / Ambulante Pflege / Gesundheitswesen"
});

const Fachbereichsleitung = () => {
  return (
    <>
      <Helmet>
        <title>Fachbereichsleitung Intensivpflege Frankfurt ✅ Pflegeexperte gesucht | avyta.de</title>
        <meta name="description" content="Fachbereichsleitung / Pflegeexperte Intensivpflege (m/w/d) in Frankfurt gesucht ✔ Außerklinische Beatmungspflege ✔ Übertarifliches Gehalt ✔ 30 Tage Urlaub ✔ Firmenwagen | Jetzt bewerben bei Avyta" />
        <meta name="keywords" content="Fachbereichsleitung Intensivpflege Frankfurt, Pflegeexperte Intensivpflege Frankfurt, außerklinische Intensivpflege Frankfurt Stellenangebote, Beatmungspflege Frankfurt, Intensivpflege Leitung Frankfurt, Pflegedienstleitung Intensivpflege Frankfurt, Fachkraft außerklinische Beatmung Frankfurt, leitende Pflegefachkraft Intensivpflege, Qualitätsmanagement Intensivpflege Frankfurt" />
        <link rel="canonical" href="https://www.avyta.de/karriere/fachbereichsleitung-frankfurt" />
        <meta property="og:title" content="Fachbereichsleitung Intensivpflege Frankfurt ✅ Pflegeexperte gesucht | avyta.de" />
        <meta property="og:description" content="Fachbereichsleitung / Pflegeexperte Intensivpflege (m/w/d) in Frankfurt ✔ Beatmungspflege ✔ Übertarifliches Gehalt ✔ Firmenwagen" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Karriere", url: "https://www.avyta.de/karriere" },
          { name: "Fachbereichsleitung Intensivpflege", url: "https://www.avyta.de/karriere/fachbereichsleitung-frankfurt" },
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
                      Fachbereichsleitung / Pflegeexperte Intensivpflege (m/w/d) in Frankfurt
                    </h1>
                    <span className="px-3 py-1 bg-destructive/10 text-destructive text-sm font-medium rounded-full">
                      Dringend gesucht
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Außerklinische Intensivpflege & Beatmungspflege – Leitungsposition im Pflegedienst Frankfurt
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
                      Fachbereichsleitung Intensivpflege in Frankfurt gesucht – Ihre Chance bei Avyta
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Sie sind erfahrener <strong>Pflegeexperte in der Intensivpflege</strong> und suchen eine Leitungsposition in Frankfurt? Bei Avyta, einem der führenden ambulanten Pflegedienste in Frankfurt am Main, suchen wir eine <strong>Fachbereichsleitung für die außerklinische Intensivpflege</strong>. In dieser Schlüsselrolle verantworten Sie die fachliche Steuerung unserer <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" className="text-primary hover:underline font-semibold">außerklinischen Intensivpflege</Link> und sichern die bestmögliche Versorgung beatmungspflichtiger Patienten.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Die <strong>außerklinische Intensivpflege in Frankfurt</strong> wächst kontinuierlich – immer mehr Patienten mit Beatmungsbedarf, Trachealkanüle oder schweren neurologischen Erkrankungen werden in ihrem häuslichen Umfeld versorgt. Als <strong>Pflegeexperte Intensivpflege</strong> bei Avyta gestalten Sie diesen wachsenden Fachbereich aktiv mit und übernehmen Verantwortung für ein spezialisiertes Team.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Unser Pflegedienst betreut über <strong>2.500 zufriedene Patienten</strong> in mehr als 20 Frankfurter Stadtteilen. Mit einer <strong>MDK-Note von 1,6</strong> und <strong>5,0 Google-Sternen</strong> gehören wir zu den bestbewerteten Pflegediensten in Frankfurt. Die Intensivpflege ist dabei einer unserer am stärksten wachsenden Fachbereiche – werden Sie Teil dieses Erfolgs.
                    </p>
                  </div>

                  {/* Aufgaben */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Aufgaben als Fachbereichsleitung Intensivpflege bei Avyta
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Als <strong>Pflegeexperte und Fachbereichsleitung Intensivpflege in Frankfurt</strong> übernehmen Sie vielseitige Aufgaben in der Leitung und im Qualitätsmanagement der außerklinischen Beatmungspflege:
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
                      Anforderungen an den Pflegeexperten Intensivpflege in Frankfurt
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Für diese Position als <strong>Fachbereichsleitung Intensivpflege in Frankfurt am Main</strong> bringen Sie idealerweise folgende Qualifikationen mit:
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
                      Vorteile als Fachbereichsleitung Intensivpflege bei Avyta
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

                  {/* Warum Avyta Intensivpflege */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Warum Avyta? Intensivpflege in Frankfurt mit Zukunft
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Die <strong>außerklinische Intensivpflege</strong> ist einer der zukunftssichersten Bereiche im Gesundheitswesen. Der Bedarf an qualifizierten <strong>Pflegeexperten für Intensivpflege in Frankfurt</strong> steigt stetig – durch den demographischen Wandel und den medizinischen Fortschritt werden immer mehr Patienten außerhalb der Klinik intensivpflegerisch versorgt.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Bei Avyta bieten wir Ihnen als <strong>Fachbereichsleitung Intensivpflege</strong> nicht nur eine sichere Anstellung, sondern echte Gestaltungsmöglichkeiten. Sie bauen unseren Intensivpflege-Bereich aktiv mit auf und prägen die Versorgungsqualität für beatmungspflichtige Patienten in Frankfurt.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Ob Sie bereits Erfahrung als <strong>Fachkraft für außerklinische Beatmung</strong>, in der <strong>Intensivstation</strong> oder als <strong>Pflegeexperte</strong> mitbringen – bei Avyta finden Sie die passende Leitungsposition. Wir investieren in Ihre Weiterbildung und unterstützen Sie auf Ihrem Karriereweg in der <Link to="/karriere" className="text-primary hover:underline font-semibold">Pflege in Frankfurt</Link>.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">
                      Jetzt als Pflegeexperte Intensivpflege in Frankfurt bewerben!
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Sie bringen Erfahrung in der <strong>Intensivpflege oder Beatmungspflege</strong> mit und möchten als <strong>Fachbereichsleitung</strong> den nächsten Karriereschritt gehen? Dann freuen wir uns auf Ihre Bewerbung – ob in Vollzeit oder Teilzeit. Gestalten Sie die Zukunft der außerklinischen Intensivpflege in Frankfurt aktiv mit!
                    </p>
                    <JobCTADropdownButton jobTitle="Fachbereichsleitung Intensivpflege" />
                  </div>

                  {/* FAQ */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                      Häufige Fragen zur Fachbereichsleitung Intensivpflege in Frankfurt
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

                    <JobCTADropdownButton jobTitle="Fachbereichsleitung Intensivpflege" />

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
