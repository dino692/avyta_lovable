import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import JobsSidebar from "@/components/JobsSidebar";
import { Home, CheckCircle2, ArrowRight, Car, Calendar, Gift, Dumbbell, Award, Building2, Shirt, Euro, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import JobCTADropdownButton from "@/components/JobCTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";
import { generateFAQSchema } from "@/lib/faqSchema";
import { generateJobPostingSchema } from "@/lib/jobPostingSchema";
import TrustBadges from "@/components/TrustBadges";

const aufgaben = [
  "Unterstützung bei der Reinigung und Ordnung des Haushalts",
  "Zubereitung von Mahlzeiten und Unterstützung bei Einkäufen",
  "Hilfe bei der Wäschepflege (Waschen, Bügeln, Sortieren)",
  "Begleitung zu Arztterminen und bei Freizeitaktivitäten",
  "Empathische Kommunikation und Aufbau einer vertrauensvollen Beziehung zu den Klienten",
];

const qualifikationen = [
  "Berufserfahrung als Haushaltshilfe oder Pflegehelfer",
  "Freundliches, respektvolles Auftreten",
  "Gute Deutschkenntnisse (mindestens B1)",
  "Kommunikationsfähigkeit",
  "Zuverlässigkeit und Verantwortungsbewusstsein",
  "Führerschein Klasse B (empfohlen)",
  "Auge fürs Detail",
];

const benefits = [
  { icon: Euro, title: "Überdurchschnittliches Gehalt", description: "Abhängig von Qualifikation und Erfahrung" },
  { icon: Clock, title: "Zuschläge", description: "Für Sonn- und Feiertage sowie Nachtarbeit" },
  { icon: Calendar, title: "Urlaub", description: "30 Tage jährlich" },
  { icon: Car, title: "Firmenwagen", description: "Zur privaten Nutzung" },
  { icon: Dumbbell, title: "Firmenfitness", description: "Monatliche Wellpass-Mitgliedschaft" },
  { icon: Award, title: "Prämien", description: "Urlaubs-, Feiertags- und leistungsbasierte Prämien" },
  { icon: Gift, title: "Teamzusammenhalt", description: "Geburtstagsgeschenke bis zu 60 Euro" },
  { icon: Building2, title: "Unterkunft", description: "Bei Bedarf eine angemessene Wohnung oder WG" },
  { icon: Shirt, title: "Berufskleidung", description: "Für alle Wetterbedingungen, stets ein gepflegtes Erscheinungsbild" },
];

const sidebarBenefits = [
  "Überdurchschnittliches Gehalt",
  "30 Tage Urlaub jährlich",
  "Firmenwagen zur privaten Nutzung",
  "Wellpass-Mitgliedschaft",
  "Sonn- und Feiertagszuschläge",
  "Familiäres Arbeitsumfeld",
];

const faqs = [
  {
    question: "Welche Aufgaben übernimmt eine Haushaltshilfe in Frankfurt?",
    answer: "Eine Haushaltshilfe in Frankfurt unterstützt bei vielfältigen Tätigkeiten des täglichen Lebens. Dazu zählen die Reinigung der Wohnräume, Wäschepflege, Zubereitung von Mahlzeiten sowie Einkäufe. Zudem kann sie bei der Körperpflege helfen und Begleitung zu Arztterminen oder Freizeitaktivitäten bieten. Durch diese Unterstützung wird der Alltag erleichtert und die Lebensqualität gesteigert."
  },
  {
    question: "Wird die Stelle als Haushaltshilfe in Frankfurt auch als Teilzeitstelle angeboten?",
    answer: "Ja, bei Avyta bieten wir die Position als Haushaltshilfe in Frankfurt sowohl in Vollzeit als auch in Teilzeit und als geringfügige Beschäftigung an. So können Sie Ihre Arbeitszeit flexibel an Ihre persönliche Lebenssituation anpassen."
  },
  {
    question: "Welche Vorteile bietet die Position als Haushaltshilfe in Frankfurt bei Avyta?",
    answer: "Bei Avyta profitieren Sie von einem überdurchschnittlichen Gehalt, 30 Tagen Urlaub, einem Firmenwagen zur privaten Nutzung, einer Wellpass-Mitgliedschaft für Firmenfitness sowie attraktiven Prämien. Zudem bieten wir bei Bedarf eine Unterkunft und stellen Berufskleidung für alle Wetterbedingungen."
  },
];

const HaushaltshilfeJob = () => {
  return (
    <>
      <Helmet>
        <title>Haushaltshilfe Frankfurt ✅ Job | avyta.de</title>
        <meta name="description" content="Haushaltshilfe in Frankfurt gesucht ✓ Übertarifliches Gehalt ✓ 30 Urlaubstage ✓ Firmenwagen ✓ Flexible Arbeitszeiten ✓ Jetzt bewerben | avyta.de" />
        <link rel="canonical" href="https://www.avyta.de/karriere/haushaltshilfe-frankfurt" />
        <meta property="og:title" content="Haushaltshilfe Frankfurt ✅ Job | avyta.de" />
        <meta property="og:description" content="Haushaltshilfe in Frankfurt gesucht ✓ Übertarifliches Gehalt ✓ 30 Urlaubstage ✓ Firmenwagen ✓ Jetzt bewerben" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/og-image.jpg" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Karriere", url: "https://www.avyta.de/karriere" },
          { name: "Haushaltshilfe", url: "https://www.avyta.de/karriere/haushaltshilfe-frankfurt" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(faqs)}</script>
        <script type="application/ld+json">{generateJobPostingSchema({
          title: "Haushaltshilfe (m/w/d) – Pflegedienst Frankfurt",
          description: "Haushaltshilfe für den ambulanten Pflegedienst AVYTA in Frankfurt gesucht. Hauswirtschaft, Mahlzeiten, Einkäufe, Begleitung. 30 Urlaubstage, Firmenwagen, Wellpass.",
          datePosted: "2025-01-01",
          employmentType: "FULL_TIME",
          canonicalUrl: "https://www.avyta.de/karriere/haushaltshilfe-frankfurt",
        })}</script>
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
                  <Home className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-display font-bold text-foreground mb-4">
                    Haushaltshilfe in Frankfurt (m/w/d)
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Ihre Karriere bei AVYTA in Frankfurt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

          {/* Trust Badges */}
          <TrustBadges />

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                  {/* Intro */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Haushaltshilfe in Frankfurt gesucht
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      In einer lebendigen Stadt wie Frankfurt kann der Alltag eine echte Herausforderung sein, 
                      insbesondere wenn gesundheitliche Einschränkungen hinzukommen. Als führender Anbieter in 
                      der ambulanten Pflege sucht Avyta engagierte und einfühlsame Haushaltshilfen in Frankfurt, 
                      die unseren Klienten mit Herz und Kompetenz zur Seite stehen. Unterstützen Sie Menschen 
                      dabei, ihren Alltag zu bewältigen und ihre Lebensqualität zu steigern.
                    </p>
                  </div>

                  {/* Warum Haushaltshilfe */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Warum eine Tätigkeit als Haushaltshilfe in Frankfurt?
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Als Haushaltshilfe in Frankfurt tragen Sie dazu bei, das Leben unserer Klienten zu erleichtern, 
                      indem Sie alltägliche Aufgaben wie Reinigung, Wäschepflege und Einkäufe übernehmen. Ihre Arbeit 
                      sorgt dafür, dass Menschen, vor allem Senioren und mobilitätseingeschränkte Personen, ein hohes 
                      Maß an Selbstständigkeit und Lebensqualität bewahren können.
                    </p>
                  </div>

                  {/* Aufgaben */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Ihre Aufgaben als Haushaltshilfe in Frankfurt
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      In Ihrer neuen Rolle erwartet Sie ein abwechslungsreiches Aufgabenspektrum, das individuell 
                      auf die Bedürfnisse unserer Klienten abgestimmt wird. Zu Ihren Aufgaben gehören unter anderem:
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

                  {/* Qualifikationen */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Qualifikationen für Haushaltshilfen in Frankfurt bei Avyta
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Für eine erfolgreiche Tätigkeit als Haushaltshilfe in Frankfurt bei Avyta legen wir großen 
                      Wert auf sowohl fachliche Kompetenz als auch Einfühlungsvermögen. Idealerweise bringen Sie mit:
                    </p>
                    <ul className="space-y-3">
                      {qualifikationen.map((qual, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Ihre Vorteile als Haushaltshilfe in Frankfurt
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Bei Avyta erwarten Sie nicht nur abwechslungsreiche und erfüllende Aufgaben, sondern auch 
                      ein Arbeitsumfeld, das Ihre Leistung und Ihr Engagement besonders wertschätzt. Wir legen 
                      großen Wert darauf, dass sich unsere Haushaltshilfen in ihrem Beruf wohlfühlen und motiviert 
                      bleiben. Daher bieten wir Ihnen attraktive Arbeitsbedingungen:
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

                  {/* Teil des Teams werden */}
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                      Werden Sie Teil unseres Teams als Haushaltshilfe in Frankfurt
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Wenn Sie eine neue berufliche Herausforderung suchen und Freude daran haben, Menschen in 
                      ihrem Alltag zu unterstützen, freuen wir uns auf Ihre Bewerbung. Nach einer persönlichen 
                      Beratung und einer individuellen Einarbeitung sorgen wir dafür, dass Sie sich bei uns gut 
                      aufgehoben fühlen. Regelmäßige Abstimmungen und Weiterbildungen stellen sicher, dass Sie 
                      in Ihrer Rolle wachsen und langfristig zufrieden sind. Zögern Sie nicht, uns zu kontaktieren 
                      und mehr über die Möglichkeiten bei Avyta zu erfahren. Wir freuen uns, Sie bald in unserem 
                      Team begrüßen zu dürfen!
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                    <p className="text-foreground font-medium mb-2">
                      Ergreifen Sie Ihre Chance und starten Sie Ihre Karriere als Haushaltshilfe in Frankfurt!
                    </p>
                    <p className="text-muted-foreground">
                      Rufen Sie uns noch heute an oder senden Sie uns Ihre Bewerbung per E-Mail. 
                      Wir freuen uns darauf, Sie kennenzulernen!
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

                    <JobCTADropdownButton jobTitle="Haushaltshilfe" />

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

export default HaushaltshilfeJob;