import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Button } from "@/components/ui/button";
import JobCTADropdownButton from "@/components/JobCTADropdownButton";
import { CheckCircle2, ArrowRight, Building2, Share2, ClipboardCopy, CheckCircle, Euro, Calendar, Car, Dumbbell, Gift, Users, Shirt, Laptop } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";
import { generateFAQSchema } from "@/lib/faqSchema";
import { generateJobPostingSchema } from "@/lib/jobPostingSchema";
import TrustBadges from "@/components/TrustBadges";

const SHARE_URL = "https://www.avyta.de/karriere/backoffice-frankfurt";
const SHARE_TEXT = "AVYTA Pflegedienst sucht Verstärkung im Backoffice! Verwaltungskraft (m/w/d) gesucht – Jetzt bewerben:";

const aufgaben = [
  "Koordination von Pflegeeinsätzen & Tourenplanung",
  "Kommunikation mit Krankenkassen & Kostenträgern",
  "Erstellung und Prüfung von Pflegeverträgen",
  "Abrechnung von Pflegeleistungen (SGB V & XI)",
  "Personalverwaltung & Dienstplanunterstützung",
  "Telefon- und E-Mail-Korrespondenz mit Patienten & Angehörigen",
  "Dokumentenmanagement & Qualitätssicherung",
  "Unterstützung bei MDK-Prüfungen & Audits",
];

const anforderungen = [
  "Abgeschlossene kaufmännische Ausbildung oder vergleichbare Qualifikation",
  "Erfahrung in der Büroorganisation, idealerweise im Gesundheitswesen",
  "Sicherer Umgang mit MS Office und gängiger Bürosoftware",
  "Strukturierte, eigenverantwortliche Arbeitsweise",
  "Kommunikationsstärke und Teamfähigkeit",
  "Deutschkenntnisse auf muttersprachlichem Niveau (zwingend)",
];

const benefits = [
  { icon: Euro, title: "Attraktives Gehalt", description: "Je nach Qualifikation und Erfahrung" },
  { icon: Calendar, title: "24 Urlaubstage", description: "Jährlich garantiert" },
  { icon: Car, title: "Gute Verkehrsanbindung", description: "Büro zentral in Frankfurt" },
  { icon: Dumbbell, title: "Firmenfitness", description: "Wellpass-Mitgliedschaft" },
  { icon: Gift, title: "Prämien", description: "Urlaubsprämien und leistungsbasierte Prämien" },
  { icon: Users, title: "Familiäres Team", description: "Flache Hierarchien und angenehmes Betriebsklima" },
  { icon: Shirt, title: "Moderne Ausstattung", description: "Ergonomischer Arbeitsplatz" },
  { icon: Laptop, title: "Digitales Arbeiten", description: "Größtenteils papierlos" },
];

const faqs = [
  {
    question: "Welche Aufgaben hat eine Bürokraft im Pflegedienst Frankfurt?",
    answer: "Als Bürokraft im Pflegedienst Frankfurt übernehmen Sie die Koordination von Pflegeeinsätzen, Tourenplanung, Abrechnung von Pflegeleistungen nach SGB V und XI, Kommunikation mit Krankenkassen sowie die Personalverwaltung und Dokumentation."
  },
  {
    question: "Welche Qualifikation braucht man als Verwaltungskraft im Pflegedienst?",
    answer: "Für die Verwaltung im Pflegedienst benötigen Sie eine kaufmännische Ausbildung oder vergleichbare Qualifikation. Erfahrung im Gesundheitswesen ist von Vorteil, aber nicht zwingend. Wichtig sind Organisationstalent, MS-Office-Kenntnisse und Deutschkenntnisse auf muttersprachlichem Niveau."
  },
  {
    question: "Wie viele Urlaubstage gibt es als Bürokraft bei AVYTA?",
    answer: "Als Bürokraft bei AVYTA erhalten Sie 24 Urlaubstage jährlich, dazu kommen Firmenfitness (Wellpass), Prämien und ein moderner, ergonomischer Arbeitsplatz zentral in Frankfurt."
  },
];


  {
    name: "WhatsApp",
    url: `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${SHARE_URL}`)}`,
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    name: "Facebook",
    url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}&quote=${encodeURIComponent(SHARE_TEXT)}`,
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    name: "LinkedIn",
    url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SHARE_URL)}`,
    color: "bg-blue-700 hover:bg-blue-800",
  },
  {
    name: "E-Mail",
    url: `mailto:?subject=${encodeURIComponent("Stellenangebot: Backoffice bei AVYTA Pflegedienst")}&body=${encodeURIComponent(`${SHARE_TEXT}\n\n${SHARE_URL}`)}`,
    color: "bg-muted hover:bg-muted/80 text-foreground",
  },
];

const Backoffice = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${SHARE_TEXT} ${SHARE_URL}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* fallback */ }
  };

  return (
    <>
      <Helmet>
        <title>Bürokraft Pflegedienst Frankfurt ✅ Job | avyta.de</title>
        <meta name="description" content="Bürokraft im Pflegedienst Frankfurt gesucht ✓ Verwaltung, Abrechnung SGB V & XI, Tourenplanung ✓ 30 Urlaubstage ✓ Familiäres Team ✓ Jetzt als Bürofachkraft bewerben | avyta.de" />
        <meta name="keywords" content="Bürokraft Pflegedienst Frankfurt, Verwaltung Pflegedienst Frankfurt, Kauffrau Gesundheitswesen Frankfurt, Bürofachkraft Pflegedienst, Sachbearbeitung Pflege Frankfurt, Backoffice Pflege Frankfurt, Pflegeabrechnung Job Frankfurt" />
        <link rel="canonical" href="https://www.avyta.de/karriere/backoffice-frankfurt" />
        <meta property="og:title" content="Bürokraft Pflegedienst Frankfurt ✅ Verwaltung & Sachbearbeitung | avyta.de" />
        <meta property="og:description" content="Bürokraft im Pflegedienst Frankfurt gesucht ✓ Verwaltung, Abrechnung, Tourenplanung ✓ 30 Urlaubstage ✓ Jetzt bewerben!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.avyta.de/karriere/backoffice-frankfurt" />
        <meta property="og:image" content="https://www.avyta.de/images/og-image.jpg" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Karriere", url: "https://www.avyta.de/karriere" },
          { name: "Bürokraft Pflegedienst Frankfurt", url: "https://www.avyta.de/karriere/backoffice-frankfurt" },
        ])}</script>
        <script type="application/ld+json">{generateJobPostingSchema({
          title: "Bürokraft / Verwaltungskraft (m/w/d) im Pflegedienst",
          description: "Verwaltungskraft für den ambulanten Pflegedienst AVYTA in Frankfurt am Main gesucht. Aufgaben: Tourenplanung, Abrechnung, Personalverwaltung. Benefits: 24 Urlaubstage, Firmenfitness, ergonomischer Arbeitsplatz.",
          datePosted: "2025-01-01",
          employmentType: "FULL_TIME",
          canonicalUrl: "https://www.avyta.de/karriere/backoffice-frankfurt",
        })}</script>
      </Helmet>

      <Header />

      <main className="pt-20 overflow-x-hidden">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Link to="/karriere" className="text-primary hover:underline text-sm mb-4 inline-block">
                ← Zurück zu Karriere
              </Link>
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-4xl font-display font-bold text-foreground mb-2 sm:mb-4">
                    Bürokraft / Verwaltung im Pflegedienst Frankfurt (m/w/d)
                  </h1>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    Sachbearbeitung, Abrechnung & Büroorganisation – werden Sie Teil unseres Teams
                  </p>
                </div>
              </div>

              {/* CTA + Share */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <JobCTADropdownButton jobTitle="Bürokraft / Verwaltung" />

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="lg" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      Stellenanzeige teilen
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-3" align="start">
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground/70 mb-2">Teilen über:</p>
                      {shareLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block w-full text-center text-sm text-white rounded-md py-2 px-3 transition-colors ${link.color}`}
                        >
                          {link.name}
                        </a>
                      ))}
                      <button
                        onClick={handleCopyLink}
                        className="flex items-center justify-center gap-2 w-full text-sm text-foreground border rounded-md py-2 px-3 hover:bg-muted transition-colors"
                      >
                        {copied ? <CheckCircle className="h-4 w-4 text-green-500" /> : <ClipboardCopy className="h-4 w-4" />}
                        {copied ? "Kopiert!" : "Link kopieren"}
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </section>

          {/* Trust Badges */}
          <TrustBadges />

        {/* Aufgaben */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Ihre Aufgaben als Bürokraft im Pflegedienst
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Als <strong>Bürofachkraft in unserem ambulanten Pflegedienst in Frankfurt</strong> sind Sie das 
                organisatorische Rückgrat des Teams. Sie übernehmen die <strong>Sachbearbeitung und Verwaltung</strong> – 
                von der Einsatzplanung über die <strong>Pflegeabrechnung nach SGB V und XI</strong> bis zur 
                Kommunikation mit Krankenkassen und Kostenträgern. Ob als <strong>Kauffrau im Gesundheitswesen</strong>, 
                erfahrene Bürokraft oder Quereinsteigerin mit Verwaltungserfahrung – wir freuen uns auf Ihre Bewerbung.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {aufgaben.map((aufgabe, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{aufgabe}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Anforderungen */}
        <section className="py-12 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                Anforderungen an unsere Bürokraft im Pflegedienst Frankfurt
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Für die <strong>Verwaltung in unserem Pflegedienst in Frankfurt</strong> suchen wir eine strukturierte 
                Persönlichkeit mit Organisationstalent. Idealerweise bringen Sie Erfahrung aus dem 
                Gesundheitswesen mit – aber auch als Bürokauffrau oder Kauffrau für Büromanagement 
                mit Interesse an der Pflegebranche sind Sie bei uns willkommen.
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
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
                Ihre Vorteile als Bürofachkraft bei AVYTA
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
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                Interesse geweckt? Bewerben Sie sich jetzt!
              </h2>
              <p className="text-muted-foreground mb-8">
                Senden Sie uns Ihre Bewerbung per E-Mail. Wir freuen uns darauf, Sie kennenzulernen!
              </p>
              <div className="flex justify-center">
                <JobCTADropdownButton jobTitle="Bürokraft / Verwaltung" />
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

export default Backoffice;
