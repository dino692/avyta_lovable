import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import JobsSidebar from "@/components/JobsSidebar";
import { Sparkles, CheckCircle2, ArrowRight, Euro, GraduationCap, Building2, TrendingUp, Calendar, Car, Dumbbell, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import JobCTADropdownButton from "@/components/JobCTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const aufgaben = [
  "Durchführung der medizinischen Pflege, inklusive Medikamentengabe und Verbandswechsel",
  "Unterstützung bei alltäglichen Aktivitäten wie Körperpflege, Ernährung und Mobilisation",
  "Ansprechpartner für Patienten und deren Angehörige, mit Fokus auf psychosoziale Betreuung",
  "Enge Zusammenarbeit mit anderen Pflegekräften und medizinischen Fachkräften",
  "Reaktion auf Notfallsituationen",
  "Begleitung zu Terminen und bei Aktivitäten, einschließlich Transport und Unterstützung bei Freizeitaktivitäten",
];

const anforderungen = [
  "Abgeschlossene Ausbildung als Pflegefachkraft",
  "Berufserfahrung im Pflegebereich",
  "Belastungsfähige Persönlichkeit, die auch in stressigen Situationen Ruhe bewahrt",
  "Teamfähigkeit und Kommunikationsstärke",
  "Bereitschaft zur kontinuierlichen Fortbildung",
  "Kenntnisse in der modernen Pflegedokumentation und digitale Kompetenzen",
  "Führerschein Klasse B (Voraussetzung)",
];

const karrierechancen = [
  "Spezialisierung auf Intensivpflege, Geriatrie oder Palliativpflege",
  "Führungsverantwortung im Pflegemanagement",
  "Karriere in der Pflegepädagogik oder -beratung",
  "Flexible Arbeitsmodelle bei Avyta",
  "Teil eines engagierten und professionellen Teams",
];

const benefits = [
  { icon: Euro, title: "Attraktives Gehalt", description: "Überdurchschnittliche Vergütung mit Zuschlägen für Nacht-, Sonntags- und Feiertagsarbeit sowie leistungsbasierte Prämien und Urlaubsprämien. Geburtstagsgeschenke bis zu 60 Euro." },
  { icon: GraduationCap, title: "Fortbildungsmöglichkeiten", description: "Zugang zu zahlreichen Weiterbildungsangeboten, von Fachkursen bis zu akademischen Studiengängen." },
  { icon: Building2, title: "Lebensqualität", description: "Leben und Arbeiten in einer Metropole mit hervorragender Infrastruktur, kultureller Vielfalt und vielfältigen Freizeitmöglichkeiten. Bei Bedarf stellen wir Ihnen eine Unterkunft." },
  { icon: TrendingUp, title: "Karriereperspektiven", description: "Frankfurt bietet zahlreiche Aufstiegschancen in einem dynamischen Arbeitsmarkt." },
  { icon: Calendar, title: "Urlaub", description: "30 Urlaubstage pro Jahr." },
  { icon: Car, title: "Firmenwagen", description: "Auch zur privaten Nutzung." },
  { icon: Dumbbell, title: "Firmenfitness", description: "Wellpass-Mitgliedschaft zusätzlich zum Gehalt." },
  { icon: Shirt, title: "Berufskleidung", description: "Bereitstellung von Berufskleidung für alle Wetterbedingungen, um stets ein gepflegtes Erscheinungsbild zu gewährleisten." },
];

const sidebarBenefits = [
  "Überdurchschnittliches Gehalt",
  "30 Tage Urlaub jährlich",
  "Firmenwagen zur privaten Nutzung",
  "Wellpass-Mitgliedschaft",
  "Fort- und Weiterbildungen",
  "Karriereperspektiven",
];

const faqs = [
  {
    question: "Welche Aufgaben übernimmt eine Pflegefachkraft in Frankfurt?",
    answer: "Eine Pflegefachkraft in Frankfurt ist für die medizinische und pflegerische Betreuung von Patienten verantwortlich. Dazu gehören Aufgaben wie die Grundpflege, das Verabreichen von Medikamenten, die Wundversorgung und die Dokumentation der Pflegemaßnahmen. Im ambulanten Bereich, etwa bei Avyta, unterstützen Pflegefachkräfte Patienten direkt in deren häuslichem Umfeld, fördern deren Selbstständigkeit und stehen in enger Kommunikation mit Angehörigen und Ärzten."
  },
  {
    question: "Was ist der Unterschied zwischen einer Pflegehilfskraft und einer Pflegefachkraft in Frankfurt?",
    answer: "Der wesentliche Unterschied liegt in der Ausbildung und den Aufgabenbereichen. Eine Pflegefachkraft hat eine dreijährige Ausbildung absolviert und ist für die medizinische Versorgung und Koordination der Pflege verantwortlich. Pflegehilfskräfte unterstützen die Fachkräfte bei der Grundpflege und benötigen eine kürzere Qualifikation."
  },
  {
    question: "Welche Qualifikationen benötigt eine Pflegefachkraft in Frankfurt?",
    answer: "Um als Pflegefachkraft in Frankfurt zu arbeiten, benötigen Sie eine abgeschlossene dreijährige Ausbildung an einer staatlich anerkannten Pflegeschule. Berufserfahrung ist von Vorteil, ebenso wie Kenntnisse in der digitalen Pflegedokumentation. Ein Führerschein der Klasse B ist für die ambulante Pflege Voraussetzung."
  },
];

import { generateFAQSchema } from "@/lib/faqSchema";

const Pflegefachkraft = () => {
  return (
    <>
      <Helmet>
        <title>Pflegefachkraft in Frankfurt – Karrierechancen bei Avyta</title>
        <meta name="description" content="Pflegefachkraft in Frankfurt bei Avyta ✔ 30 Tage Urlaub & Rentenversicherung ✔ Toyota Aygo zur privaten Nutzung ✔ Angenehmes Arbeitsumfeld" />
        <script type="application/ld+json">{generateFAQSchema(faqs)}</script>
      </Helmet>

      <Header />

      <main className="pt-20 overflow-x-hidden">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Link to="/jobs/stellenangebote" className="text-primary hover:underline text-sm mb-4 inline-block">
                ← Zurück zu Stellenangebote
              </Link>
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-4xl font-display font-bold text-foreground">
                      Pflegefachkraft (m/w/d)
                    </h1>
                    <span className="px-3 py-1 bg-rose-500/10 text-rose-600 text-sm font-medium rounded-full">
                      Dringend gesucht
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Chancen, Aufgaben und Perspektiven in Frankfurt
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
                      Pflegefachkraft in Frankfurt gesucht
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Als Pflegefachkraft in Frankfurt übernehmen Sie eine zentrale Verantwortung für die Betreuung 
                      und Versorgung von pflegebedürftigen Menschen. Ihre Arbeit geht weit über die reine medizinische 
                      Pflege hinaus – Sie leisten einen wichtigen Beitrag zur Verbesserung der Lebensqualität Ihrer 
                      Patienten. In einer Stadt wie Frankfurt, die sowohl berufliche Chancen als auch ein attraktives 
                      Lebensumfeld bietet, erwarten Sie spannende und vielseitige Perspektiven.
                    </p>
                  </div>

                  {/* Aufgaben */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Ihr Aufgabenbereich als Pflegefachkraft in Frankfurt
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Die Tätigkeit als Pflegefachkraft in Frankfurt umfasst ein breites Spektrum an Aufgaben, 
                      bei denen Sie sowohl medizinische als auch soziale Kompetenzen einbringen. Zu Ihren 
                      Hauptaufgaben zählen:
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
                      Anforderungen an eine Pflegefachkraft in Frankfurt
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Um als Pflegefachkraft in Frankfurt arbeiten zu können, benötigen Sie eine entsprechende 
                      abgeschlossene Ausbildung sowie Berufserfahrung im Pflegebereich. Darüber hinaus werden 
                      belastungsfähige Persönlichkeiten gesucht, die auch in stressigen Situationen Ruhe bewahren.
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

                  {/* Karrierechancen */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Karrierechancen für Pflegefachkräfte in Frankfurt
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Frankfurt bietet Pflegefachkräften zahlreiche Entwicklungsmöglichkeiten. Neben der klassischen 
                      Pflegearbeit können Sie sich auf spezifische Fachbereiche wie Intensivpflege, Geriatrie oder 
                      Palliativpflege spezialisieren. Wer Führungsverantwortung übernehmen möchte, hat die Option, 
                      im Pflegemanagement tätig zu werden. Ebenso bietet sich eine Karriere in der Pflegepädagogik 
                      oder -beratung an, wenn Sie Ihr Wissen an Nachwuchskräfte weitergeben möchten.
                    </p>
                    <ul className="space-y-3">
                      {karrierechancen.map((chance, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{chance}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                      Vorteile einer Tätigkeit als Pflegefachkraft in Frankfurt
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
                      Starten Sie Ihre Karriere bei Avyta!
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Als Pflegefachkraft bei Avyta in Frankfurt profitieren Sie nicht nur von einer sicheren 
                      beruflichen Perspektive, sondern auch von einer hohen Wertschätzung Ihrer Arbeit. Wir bieten 
                      Ihnen ein motivierendes Arbeitsumfeld, in dem Sie sich entfalten können.
                    </p>
                    <p className="text-foreground font-medium">
                      Sichern Sie sich Ihre berufliche Zukunft in einem aufgeschlossenen Team und profitieren Sie 
                      von umfangreichen Entwicklungsmöglichkeiten. Bewerben Sie sich noch heute, ob in Vollzeit, 
                      Teilzeit oder als geringfügige Beschäftigung – wir freuen uns, Sie kennenzulernen!
                    </p>
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

                    <JobCTADropdownButton jobTitle="Pflegefachkraft" />

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

export default Pflegefachkraft;