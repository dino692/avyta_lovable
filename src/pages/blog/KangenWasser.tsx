import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { ArrowLeft, Calendar, Clock, User, BookOpen, Droplets, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";
import kangenWasserImage from "@/assets/blog/kangen-wasser.jpg";

const KangenWasser = () => {
  const faqData = [
    {
      question: "Was ist Kangen Wasser?",
      answer: "Kangen Wasser ist elektrolytisch ionisiertes, basisches (alkalisches) Wasser, das mit speziellen Wasserionisierern der japanischen Firma Enagic hergestellt wird. Der pH-Wert liegt typischerweise zwischen 8,5 und 9,5."
    },
    {
      question: "Ist Kangen Wasser wissenschaftlich belegt?",
      answer: "Die meisten gesundheitlichen Versprechen rund um Kangen Wasser sind wissenschaftlich nicht ausreichend belegt. Einzelne Studien deuten auf mögliche antioxidative Eigenschaften von ionisiertem Wasser hin, doch hochwertige klinische Studien fehlen weitgehend."
    },
    {
      question: "Wie viel kostet ein Kangen Wasser Gerät?",
      answer: "Kangen Wasser Geräte von Enagic kosten zwischen 2.000 und 6.000 Euro. Es gibt günstigere Alternativen anderer Hersteller, wobei die Qualitätsunterschiede erheblich sein können."
    },
    {
      question: "Kann Kangen Wasser Krankheiten heilen?",
      answer: "Nein, es gibt keine wissenschaftlichen Belege dafür, dass Kangen Wasser Krankheiten heilt. Solche Behauptungen sind in Deutschland als Heilversprechen rechtlich nicht zulässig. Konsultieren Sie bei gesundheitlichen Problemen immer einen Arzt."
    },
    {
      question: "Ist Kangen Wasser für Senioren und Pflegebedürftige geeignet?",
      answer: "Grundsätzlich ist ausreichende Flüssigkeitszufuhr für Senioren wichtig. Ob basisches Wasser Vorteile gegenüber normalem Trinkwasser bietet, ist wissenschaftlich nicht belegt. Bei Pflegebedürftigen sollte die Flüssigkeitszufuhr immer mit dem behandelnden Arzt abgestimmt werden."
    },
    {
      question: "Welche Alternativen gibt es zu Kangen Wasser?",
      answer: "Deutsches Leitungswasser gehört zu den am strengsten kontrollierten Lebensmitteln weltweit. Wer den pH-Wert erhöhen möchte, kann natürliches Mineralwasser mit hohem Hydrogencarbonat-Gehalt trinken oder dem Wasser eine Prise Natron hinzufügen."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Kangen Wasser: Wirkung, Erfahrungen & wissenschaftliche Fakten 2026 | AVYTA Blog</title>
        <meta name="description" content="Was ist Kangen Wasser wirklich? ✅ Wissenschaftliche Fakten ✅ Echte Erfahrungen ✅ Vorteile & Nachteile ✅ Kosten & Alternativen – Umfassender Ratgeber 2026." />
        <link rel="canonical" href="https://www.avyta.de/blog/kangen-wasser" />
        <meta property="og:title" content="Kangen Wasser: Wirkung, Erfahrungen & wissenschaftliche Fakten 2026" />
        <meta property="og:description" content="Was ist Kangen Wasser wirklich? Wissenschaftliche Fakten, echte Erfahrungen, Vorteile & Nachteile sowie Kosten und Alternativen im umfassenden Ratgeber." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Kangen Wasser: Wirkung, Erfahrungen & wissenschaftliche Fakten 2026",
          "datePublished": "2026-03-18",
          "dateModified": "2026-03-18",
          "author": {"@type": "Organization", "name": "AVYTA Pflegegesellschaft mbH"},
          "publisher": {"@type": "Organization", "name": "AVYTA Pflegegesellschaft mbH", "logo": {"@type": "ImageObject", "url": "https://www.avyta.de/images/avyta-logo.png"}},
          "mainEntityOfPage": "https://www.avyta.de/blog/kangen-wasser",
          "description": "Umfassender Ratgeber zu Kangen Wasser: Wirkung, Erfahrungen, wissenschaftliche Fakten, Vorteile, Nachteile und Alternativen.",
          "wordCount": 2800
        })}</script>
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Blog", url: "https://www.avyta.de/blog" },
          { name: "Kangen Wasser", url: "https://www.avyta.de/blog/kangen-wasser" },
        ])}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}</script>
      </Helmet>

      <Header />

      <main className="pt-20">
        <article className="py-12">
          <div className="container mx-auto px-4">
            {/* Back Link */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Blog
            </Link>

            {/* Header */}
            <header className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Droplets className="w-4 h-4" />
                Gesundheit
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Kangen Wasser: Wirkung, Erfahrungen & wissenschaftliche Fakten 2026
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Alles, was Sie über ionisiertes basisches Wasser wissen müssen – objektiv, fundiert und verständlich erklärt.
              </p>
              <div className="flex items-center justify-center gap-6 text-muted-foreground flex-wrap">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  18. März 2026
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  12 Min. Lesezeit
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  AVYTA Team
                </span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="max-w-4xl mx-auto mb-12">
              <img
                src={kangenWasserImage}
                alt="Glas mit klarem basischem Wasser und pH-Teststreifen auf einer modernen Küchentheke – Kangen Wasser Ratgeber"
                className="w-full rounded-2xl shadow-lg"
                loading="eager"
              />
            </div>

            {/* Table of Contents */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="bg-muted/50 border border-border/50 rounded-2xl p-6 md:p-8">
                <h2 className="text-lg font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Inhaltsverzeichnis
                </h2>
                <nav>
                  <ol className="space-y-2 text-muted-foreground">
                    <li><a href="#was-ist-kangen-wasser" className="hover:text-primary transition-colors">1. Was ist Kangen Wasser?</a></li>
                    <li><a href="#wie-funktioniert" className="hover:text-primary transition-colors">2. Wie funktioniert ein Kangen Wasser Gerät?</a></li>
                    <li><a href="#ph-wert" className="hover:text-primary transition-colors">3. pH-Wert und basisches Wasser erklärt</a></li>
                    <li><a href="#behauptete-wirkungen" className="hover:text-primary transition-colors">4. Behauptete Wirkungen von Kangen Wasser</a></li>
                    <li><a href="#wissenschaft" className="hover:text-primary transition-colors">5. Was sagt die Wissenschaft?</a></li>
                    <li><a href="#vorteile-nachteile" className="hover:text-primary transition-colors">6. Vorteile und Nachteile im Überblick</a></li>
                    <li><a href="#erfahrungen" className="hover:text-primary transition-colors">7. Kangen Wasser Erfahrungen aus Deutschland</a></li>
                    <li><a href="#kosten" className="hover:text-primary transition-colors">8. Kosten und Wirtschaftlichkeit</a></li>
                    <li><a href="#alternativen" className="hover:text-primary transition-colors">9. Alternativen zu Kangen Wasser</a></li>
                    <li><a href="#senioren-pflege" className="hover:text-primary transition-colors">10. Kangen Wasser in der Pflege und für Senioren</a></li>
                    <li><a href="#fazit" className="hover:text-primary transition-colors">11. Fazit: Lohnt sich Kangen Wasser?</a></li>
                    <li><a href="#faq" className="hover:text-primary transition-colors">12. Häufig gestellte Fragen (FAQ)</a></li>
                  </ol>
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto prose prose-lg prose-slate">
              <p className="lead text-xl text-muted-foreground mb-8">
                <strong>Kangen Wasser</strong> ist in den letzten Jahren zu einem der meistdiskutierten Gesundheitstrends geworden. 
                Befürworter schwören auf die heilende Wirkung des ionisierten, basischen Wassers, während Kritiker vor 
                unbelegten Gesundheitsversprechen warnen. In diesem umfassenden Ratgeber beleuchten wir das Thema 
                objektiv und wissenschaftlich fundiert.
              </p>

              {/* Section 1 */}
              <h2 id="was-ist-kangen-wasser" className="text-2xl font-display font-bold text-foreground mt-12 mb-4">
                1. Was ist Kangen Wasser?
              </h2>
              <p className="text-muted-foreground mb-4">
                Der Begriff <strong>„Kangen"</strong> stammt aus dem Japanischen und bedeutet <em>„Rückkehr zum Ursprung"</em>. 
                Kangen Wasser bezeichnet <strong>elektrolytisch ionisiertes, basisches Trinkwasser</strong>, das mit speziellen 
                Wasserionisierern der japanischen Firma <strong>Enagic</strong> hergestellt wird.
              </p>
              <p className="text-muted-foreground mb-4">
                Das Unternehmen Enagic wurde 1974 in Japan gegründet und vertreibt seine Geräte weltweit über ein 
                <strong> Network-Marketing-System</strong> (MLM). Die Geräte werden direkt an der Wasserleitung angeschlossen 
                und erzeugen durch <strong>Elektrolyse</strong> Wasser mit verschiedenen pH-Werten.
              </p>
              <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 my-8">
                <p className="text-foreground font-medium mb-0">
                  <strong>Gut zu wissen:</strong> „Kangen Wasser" ist ein geschützter Markenname von Enagic. 
                  Andere Hersteller bieten vergleichbare Wasserionisierer an, dürfen den Begriff „Kangen" jedoch nicht verwenden.
                </p>
              </div>

              {/* Section 2 */}
              <h2 id="wie-funktioniert" className="text-2xl font-display font-bold text-foreground mt-12 mb-4">
                2. Wie funktioniert ein Kangen Wasser Gerät?
              </h2>
              <p className="text-muted-foreground mb-4">
                Ein Kangen Wasser Gerät (Wasserionisierer) nutzt das Prinzip der <strong>Elektrolyse</strong>, um 
                Leitungswasser in verschiedene Fraktionen aufzuteilen:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
                  <h3 className="text-base font-bold text-emerald-700 dark:text-emerald-400 mb-2">Basisches Wasser (Kathode)</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• pH-Wert: 8,5 – 9,5</li>
                    <li>• Zum Trinken gedacht</li>
                    <li>• Enthält gelösten Wasserstoff (H₂)</li>
                    <li>• Negatives Oxidations-Reduktions-Potenzial (ORP)</li>
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                  <h3 className="text-base font-bold text-amber-700 dark:text-amber-400 mb-2">Saures Wasser (Anode)</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• pH-Wert: 4,0 – 6,0</li>
                    <li>• Für äußere Anwendungen</li>
                    <li>• Hautpflege und Reinigung</li>
                    <li>• Nicht zum Trinken geeignet</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Die Geräte verfügen über <strong>Titanplatten</strong>, die mit Platin beschichtet sind. Durch Anlegen 
                einer elektrischen Spannung werden die im Wasser gelösten Mineralien an den jeweiligen Elektroden 
                angereichert. Kangen Geräte bieten typischerweise <strong>5 verschiedene pH-Stufen</strong> an – 
                von stark sauer (pH 2,5) bis stark basisch (pH 11,5).
              </p>

              {/* Section 3 */}
              <h2 id="ph-wert" className="text-2xl font-display font-bold text-foreground mt-12 mb-4">
                3. pH-Wert und basisches Wasser erklärt
              </h2>
              <p className="text-muted-foreground mb-4">
                Der <strong>pH-Wert</strong> gibt an, wie sauer oder basisch eine Flüssigkeit ist. Die Skala reicht von 
                0 (extrem sauer) bis 14 (extrem basisch), wobei 7 neutral ist.
              </p>
              <div className="bg-muted/50 rounded-xl p-6 my-6">
                <h3 className="text-base font-bold text-foreground mb-3">pH-Wert-Skala im Alltag:</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-right font-mono font-bold text-red-500">pH 1-3</span>
                    <span>Magensäure, Zitronensaft, Cola</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-right font-mono font-bold text-orange-500">pH 4-6</span>
                    <span>Kaffee, Bier, Regen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-right font-mono font-bold text-emerald-500">pH 7</span>
                    <span>Reines Wasser (neutral)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-right font-mono font-bold text-blue-500">pH 8-9</span>
                    <span>Kangen Wasser, Natron-Lösung</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-right font-mono font-bold text-violet-500">pH 10-14</span>
                    <span>Seife, Bleichmittel, Natronlauge</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>Wichtig:</strong> Der menschliche Körper reguliert seinen pH-Wert im Blut äußerst präzise 
                zwischen <strong>7,35 und 7,45</strong>. Diese Regulation erfolgt über die Lunge, die Nieren und 
                verschiedene Puffersysteme – unabhängig davon, welches Wasser wir trinken. Der Magen hat einen 
                pH-Wert von ca. 1,5–3,5 und neutralisiert basisches Wasser sofort.
              </p>

              {/* Section 4 */}
              <h2 id="behauptete-wirkungen" className="text-2xl font-display font-bold text-foreground mt-12 mb-4">
                4. Behauptete Wirkungen von Kangen Wasser
              </h2>
              <p className="text-muted-foreground mb-4">
                Vertreiber und Befürworter von Kangen Wasser behaupten zahlreiche gesundheitliche Vorteile. 
                Hier die häufigsten Behauptungen im Überblick:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">•</span>
                  <span><strong>Entgiftung und Entsäuerung</strong> des Körpers durch basisches Wasser</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">•</span>
                  <span><strong>Antioxidative Wirkung</strong> durch gelösten molekularen Wasserstoff (H₂)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">•</span>
                  <span><strong>Bessere Hydration</strong> durch kleinere Wassercluster (Micro-Clustering)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">•</span>
                  <span><strong>Stärkung des Immunsystems</strong> und mehr Energie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">•</span>
                  <span><strong>Vorbeugung von Krankheiten</strong> wie Krebs, Diabetes und Herzkrankheiten</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary">•</span>
                  <span><strong>Anti-Aging-Effekte</strong> durch Neutralisierung freier Radikale</span>
                </li>
              </ul>

              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-6 my-8 flex gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-medium mb-2">Achtung: Heilversprechen sind nicht zulässig</p>
                  <p className="text-muted-foreground text-sm mb-0">
                    In Deutschland und der EU sind <strong>gesundheitsbezogene Werbaussagen</strong> für Wasser 
                    streng reguliert. Behauptungen wie „Kangen Wasser heilt Krebs" sind rechtlich unzulässig 
                    und wissenschaftlich nicht belegt.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <h2 id="wissenschaft" className="text-2xl font-display font-bold text-foreground mt-12 mb-4">
                5. Was sagt die Wissenschaft?
              </h2>
              <p className="text-muted-foreground mb-4">
                Die wissenschaftliche Evidenz zu Kangen Wasser und alkalischem Wasser ist <strong>begrenzt und widersprüchlich</strong>. 
                Hier ein differenzierter Blick auf den aktuellen Forschungsstand:
              </p>

              <h3 className="text-xl font-display font-semibold text-foreground mt-8 mb-3">
                Was teilweise unterstützt wird:
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Molekularer Wasserstoff (H₂)</strong>: Einige Tierstudien zeigen antioxidative Eigenschaften. Die Übertragbarkeit auf den Menschen ist jedoch unklar.</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Säure-Reflux</strong>: Eine Studie (Koufman & Johnston, 2012) zeigte, dass pH 8,8-Wasser das Pepsin-Enzym deaktivieren kann.</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Geschmack</strong>: Viele Nutzer berichten, dass basisches Wasser weicher und angenehmer schmeckt.</span>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold text-foreground mt-8 mb-3">
                Was wissenschaftlich widerlegt oder unbelegt ist:
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Entsäuerung des Körpers</strong>: Der Körper reguliert seinen pH-Wert selbstständig. Basisches Wasser wird im Magen sofort neutralisiert.</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Micro-Clustering</strong>: Das Konzept kleinerer Wassercluster für bessere Hydration ist physikalisch nicht haltbar. Wassercluster lösen sich in Nanosekunden auf und bilden sich neu.</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Krebsprävention</strong>: Es gibt keine belastbaren Studien, die eine krebsvorbeugende Wirkung von basischem Wasser belegen.</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Entgiftung</strong>: Der Körper entgiftet über Leber und Nieren. Es gibt keinen wissenschaftlichen Beleg, dass basisches Wasser diesen Prozess unterstützt.</span>
                </div>
              </div>

              {/* Section 6 */}
              <h2 id="vorteile-nachteile" className="text-2xl font-display font-bold text-foreground mt-12 mb-4">
                6. Vorteile und Nachteile im Überblick
              </h2>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
                  <h3 className="text-base font-bold text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Mögliche Vorteile
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Kann zu mehr Wasserkonsum motivieren</li>
                    <li>• Weicherer, angenehmerer Geschmack</li>
                    <li>• Filterfunktion entfernt Schadstoffe</li>
                    <li>• Saures Wasser nützlich für Reinigung</li>
                    <li>• Mögliche antioxidative Eigenschaften (H₂)</li>
                    <li>• Reduziert Plastikmüll (kein Flaschenwasser)</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-5">
                  <h3 className="text-base font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Nachteile und Risiken
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Sehr hohe Anschaffungskosten (2.000–6.000 €)</li>
                    <li>• MLM-Vertriebsstruktur mit hohem Preisaufschlag</li>
                    <li>• Meiste Gesundheitsversprechen unbelegt</li>
                    <li>• Kann Medikamentenaufnahme beeinflussen</li>
                    <li>• Regelmäßige Wartung und Filter nötig</li>
                    <li>• Deutsches Leitungswasser bereits sehr hochwertig</li>
                  </ul>
                </div>
              </div>

              {/* Section 7 */}
              <h2 id="erfahrungen" className="text-2xl font-display font-bold text-foreground mt-12 mb-4">
                7. Kangen Wasser Erfahrungen aus Deutschland
              </h2>
              <p className="text-muted-foreground mb-4">
                Die Erfahrungsberichte zu Kangen Wasser in Deutschland sind <strong>stark polarisiert</strong>:
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-muted/50 rounded-xl p-5 border border-border/50">
                  <p className="text-foreground font-medium mb-2">Positive Erfahrungen:</p>
                  <p className="text-muted-foreground text-sm">
                    Viele Nutzer berichten von mehr Energie, besserem Hautbild und verbesserter Verdauung. 
                    Diese Effekte könnten jedoch auch darauf zurückzuführen sein, dass Nutzer insgesamt 
                    <strong> mehr Wasser trinken</strong> und bewusster auf ihre Gesundheit achten (Placebo-Effekt, Hawthorne-Effekt).
                  </p>
                </div>
                <div className="bg-muted/50 rounded-xl p-5 border border-border/50">
                  <p className="text-foreground font-medium mb-2">Kritische Erfahrungen:</p>
                  <p className="text-muted-foreground text-sm">
                    Kritiker bemängeln das <strong>MLM-Vertriebssystem</strong>, bei dem bestehende Kunden für das 
                    Anwerben neuer Käufer Provisionen erhalten. Dies führe zu übertriebenen Gesundheitsversprechen 
                    und einem stark überhöhten Preis gegenüber vergleichbaren Produkten anderer Hersteller.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <h2 id="kosten" className="text-2xl font-display font-bold text-foreground mt-12 mb-4">
                8. Kosten und Wirtschaftlichkeit
              </h2>
              <p className="text-muted-foreground mb-4">
                Die Kosten für ein Kangen Wasser System sind ein wesentlicher Entscheidungsfaktor:
              </p>
              <div className="bg-muted/50 rounded-xl p-6 my-6">
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center border-b border-border/50 pb-3">
                    <span className="text-foreground font-medium">Enagic Leveluk SD501</span>
                    <span className="text-foreground font-bold">ca. 3.980 €</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/50 pb-3">
                    <span className="text-foreground font-medium">Enagic Leveluk K8</span>
                    <span className="text-foreground font-bold">ca. 5.480 €</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/50 pb-3">
                    <span className="text-foreground font-medium">Jährliche Filterkosten</span>
                    <span className="text-foreground font-bold">ca. 80–150 €</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/50 pb-3">
                    <span className="text-foreground font-medium">Wartung/Entkalkung</span>
                    <span className="text-foreground font-bold">ca. 50–100 €/Jahr</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-muted-foreground">Alternative Wasserionisierer</span>
                    <span className="text-foreground font-bold">ab ca. 400–1.500 €</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>Zum Vergleich:</strong> Ein Liter deutsches Leitungswasser kostet durchschnittlich 
                <strong> 0,2 Cent</strong> und gehört zu den am strengsten kontrollierten Lebensmitteln weltweit. 
                Die <strong>Trinkwasserverordnung (TrinkwV)</strong> schreibt über 50 mikrobiologische und chemische 
                Grenzwerte vor.
              </p>

              {/* Section 9 */}
              <h2 id="alternativen" className="text-2xl font-display font-bold text-foreground mt-12 mb-4">
                9. Alternativen zu Kangen Wasser
              </h2>
              <p className="text-muted-foreground mb-4">
                Wer die potenziellen Vorteile von basischem Wasser nutzen möchte, hat günstigere Alternativen:
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-muted/50 rounded-xl p-5 border border-border/50">
                  <h3 className="text-base font-bold text-foreground mb-2">💧 Natürliches Mineralwasser</h3>
                  <p className="text-muted-foreground text-sm">
                    Mineralwasser mit hohem <strong>Hydrogencarbonat-Gehalt</strong> (über 600 mg/l) hat von Natur aus 
                    einen leicht basischen pH-Wert. Marken wie Gerolsteiner oder Staatl. Fachingen bieten dies an.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-xl p-5 border border-border/50">
                  <h3 className="text-base font-bold text-foreground mb-2">🍋 Zitronenwasser</h3>
                  <p className="text-muted-foreground text-sm">
                    Obwohl Zitronen sauer sind, werden sie im Körper basisch verstoffwechselt. Ein Glas 
                    warmes Wasser mit Zitrone am Morgen ist eine beliebte und kostengünstige Alternative.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-xl p-5 border border-border/50">
                  <h3 className="text-base font-bold text-foreground mb-2">⚗️ Günstigere Wasserionisierer</h3>
                  <p className="text-muted-foreground text-sm">
                    Es gibt zahlreiche <strong>Wasserionisierer ab 400 €</strong>, die nach dem gleichen Prinzip 
                    arbeiten wie Kangen Geräte. Der Preisunterschied liegt hauptsächlich am MLM-Vertriebsmodell 
                    von Enagic.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-xl p-5 border border-border/50">
                  <h3 className="text-base font-bold text-foreground mb-2">🥬 Basische Ernährung</h3>
                  <p className="text-muted-foreground text-sm">
                    Eine <strong>obst- und gemüsereiche Ernährung</strong> liefert natürliche Basenbildner und ist 
                    wissenschaftlich besser belegt als basisches Wasser.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <h2 id="senioren-pflege" className="text-2xl font-display font-bold text-foreground mt-12 mb-4">
                10. Kangen Wasser in der Pflege und für Senioren
              </h2>
              <p className="text-muted-foreground mb-4">
                Als <strong>ambulanter Pflegedienst</strong> werden wir häufig von Angehörigen gefragt, ob Kangen 
                Wasser für pflegebedürftige Senioren geeignet ist. Hier unsere fachliche Einschätzung:
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 my-6">
                <h3 className="text-lg font-display font-bold text-foreground mb-4">
                  Unsere Empfehlung als Pflegeexperten:
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Ausreichend trinken ist das Wichtigste:</strong> Viele Senioren trinken zu wenig. Ob das Wasser basisch ist oder nicht, ist zweitrangig.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong>Medikamentenwechselwirkungen beachten:</strong> Basisches Wasser kann die Aufnahme bestimmter Medikamente beeinflussen. Besprechen Sie Änderungen der Trinkgewohnheiten immer mit dem behandelnden Arzt.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Ganzheitlicher Ansatz:</strong> Eine ausgewogene Ernährung, regelmäßige Bewegung und professionelle Pflege haben einen wesentlich größeren Einfluss auf die Gesundheit als die Wahl des Trinkwassers.</span>
                  </li>
                </ul>
              </div>
              <p className="text-muted-foreground mb-4">
                Bei AVYTA legen wir großen Wert auf eine <strong>evidenzbasierte Beratung</strong> unserer 
                Patienten und deren Angehörigen. Wir unterstützen Sie gerne bei allen Fragen rund um 
                Ernährung und Gesundheit im Pflegealltag.
              </p>

              {/* Section 11 */}
              <h2 id="fazit" className="text-2xl font-display font-bold text-foreground mt-12 mb-4">
                11. Fazit: Lohnt sich Kangen Wasser?
              </h2>
              <p className="text-muted-foreground mb-4">
                <strong>Kangen Wasser</strong> ist ein kontroverses Thema. Während die grundlegende Technologie 
                der Wasserionisierung funktioniert, sind die meisten <strong>gesundheitlichen Versprechen 
                wissenschaftlich nicht ausreichend belegt</strong>.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Unser Fazit:</strong>
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary font-bold">→</span>
                  <span>Wenn Sie mehr Wasser trinken möchten und der Geschmack Sie motiviert: Warum nicht – aber günstigere Ionisierer liefern vergleichbare Ergebnisse.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary font-bold">→</span>
                  <span>Kaufen Sie <strong>kein</strong> Kangen Gerät wegen medizinischer Heilversprechen – diese sind nicht belegt.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary font-bold">→</span>
                  <span>Deutsches Leitungswasser ist von hervorragender Qualität und für die Gesundheit absolut ausreichend.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary font-bold">→</span>
                  <span>Investieren Sie lieber in eine <strong>ausgewogene Ernährung</strong> und <strong>professionelle Pflege</strong> – hier ist der gesundheitliche Nutzen wissenschaftlich belegt.</span>
                </li>
              </ul>

              {/* Section 12 - FAQ */}
              <h2 id="faq" className="text-2xl font-display font-bold text-foreground mt-12 mb-6">
                12. Häufig gestellte Fragen (FAQ)
              </h2>
              <div className="space-y-4 mb-8">
                {faqData.map((faq, index) => (
                  <details key={index} className="group bg-muted/50 border border-border/50 rounded-xl overflow-hidden">
                    <summary className="cursor-pointer p-5 font-medium text-foreground hover:text-primary transition-colors list-none flex justify-between items-center">
                      <span>{faq.question}</span>
                      <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-5 pb-5 text-muted-foreground text-sm">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>

              {/* CTA Box */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-12">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Fragen zur Ernährung und Gesundheit in der Pflege?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Unser erfahrenes Pflegeteam berät Sie gerne zu allen Fragen rund um Ernährung, 
                  Flüssigkeitszufuhr und ganzheitliche Gesundheitsförderung für Ihre Angehörigen. 
                  Kontaktieren Sie uns für eine kostenlose Erstberatung.
                </p>
                <CTADropdownButton size="default" />
              </div>

              {/* Internal Links */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <h3 className="text-lg font-display font-bold text-foreground mb-4">Weiterführende Artikel:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <Link to="/blog/demenz-pflege-tipps" className="flex items-center gap-2 text-primary hover:underline text-sm">
                    <ArrowLeft className="w-3 h-3 rotate-180" />
                    10 Tipps für die häusliche Demenzpflege
                  </Link>
                  <Link to="/blog/pflegegrad-beantragen" className="flex items-center gap-2 text-primary hover:underline text-sm">
                    <ArrowLeft className="w-3 h-3 rotate-180" />
                    Pflegegrad beantragen: Schritt für Schritt
                  </Link>
                  <Link to="/leistungen/pflegeberatung-frankfurt" className="flex items-center gap-2 text-primary hover:underline text-sm">
                    <ArrowLeft className="w-3 h-3 rotate-180" />
                    Pflegeberatung in Frankfurt
                  </Link>
                  <Link to="/blog/entlastungsbetrag-nutzen" className="flex items-center gap-2 text-primary hover:underline text-sm">
                    <ArrowLeft className="w-3 h-3 rotate-180" />
                    Entlastungsbetrag richtig nutzen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <NewsletterSection />
      <Footer />
    </>
  );
};

export default KangenWasser;
