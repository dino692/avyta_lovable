import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Printer, ArrowLeft, Phone, Mail, MapPin, Clock, Heart, Shield, Star, Users, CheckCircle2, FileText, ClipboardList, Euro, Lightbulb, HandHeart, Download, ChevronRight, AlertCircle, Home, Moon, Stethoscope, Scale, Briefcase, FileCheck, Calculator, ArrowRightLeft, CalendarDays, Lock, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import avytaLogo from "@/assets/avyta-logo.png";
import heroImg from "@/assets/ratgeber/hero-caring-hands.jpg";
import beratungImg from "@/assets/ratgeber/beratung.jpg";
import mobilitaetImg from "@/assets/ratgeber/mobilitaet.jpg";

/* ─── Section Components ─── */

const SectionNumber = ({ num, color = "bg-primary" }: { num: number; color?: string }) => (
  <div className={`${color} text-primary-foreground w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold shrink-0 shadow-md`}>
    {num}
  </div>
);

const TipBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 bg-accent/5 border border-accent/20 rounded-xl p-4 mt-4">
    <Lightbulb className="w-5 h-5 text-accent shrink-0 mt-0.5" />
    <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
  </div>
);

const CheckItem = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex gap-3 py-3">
    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
    <div>
      <p className="font-semibold text-foreground text-sm">{title}</p>
      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{children}</p>
    </div>
  </div>
);

const StepCard = ({ num, title, items }: { num: number; title: string; items: string[] }) => (
  <div className="bg-card rounded-xl border border-border/50 p-5 hover:shadow-md transition-shadow">
    <div className="flex items-center gap-3 mb-3">
      <div className="bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold">
        {num}
      </div>
      <h4 className="font-semibold text-foreground text-sm">{title}</h4>
    </div>
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
          <ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

/* ─── Main Component ─── */

const Ratgeber = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadUnlocked, setDownloadUnlocked] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsSubmitting(true);
    // Small delay for UX
    await new Promise((r) => setTimeout(r, 600));
    setIsSubmitting(false);
    setDownloadUnlocked(true);
    setShowEmailModal(false);
    // Trigger download
    const link = document.createElement("a");
    link.href = "/downloads/Ratgeber_fuer_Angehoerige.pdf";
    link.download = "AVYTA_Ratgeber_fuer_Angehoerige.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadClick = () => {
    if (downloadUnlocked) {
      const link = document.createElement("a");
      link.href = "/downloads/Ratgeber_fuer_Angehoerige.pdf";
      link.download = "AVYTA_Ratgeber_fuer_Angehoerige.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setShowEmailModal(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Ratgeber für Angehörige – AVYTA Pflegedienst Frankfurt</title>
        <meta name="description" content="Ratgeber für pflegende Angehörige: Checkliste, Pflegegrad beantragen, Leistungen & Entlastung – AVYTA ambulanter Pflegedienst Frankfurt." />
        <link rel="canonical" href="https://www.avyta.de/ratgeber" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <style>{`
        @media print {
          @page { size: A4 portrait; margin: 12mm 10mm; }
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          .no-print { display: none !important; }
          .print-container { max-width: 100% !important; padding: 0 !important; }
          .page-break { break-before: page; }
          .no-break { break-inside: avoid; }
        }
      `}</style>

      {/* Toolbar */}
      <div className="no-print sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border/50 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => window.history.back()} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </Button>
           <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2" onClick={handleDownloadClick}>
                <Download className="w-4 h-4" />
                PDF herunterladen
              </Button>
              <Button onClick={() => window.print()} size="sm" className="gap-2 bg-primary hover:bg-primary/90">
                <Printer className="w-4 h-4" />
                Drucken
              </Button>
            </div>
          </div>
        </div>

        {/* Email Modal */}
        {showEmailModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-card rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in-95 duration-200">
              <button onClick={() => setShowEmailModal(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
              <div className="text-center mb-5">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Ratgeber kostenlos herunterladen
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Geben Sie Ihre E-Mail-Adresse ein und erhalten Sie den Ratgeber sofort als PDF.
                </p>
              </div>
              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10"
                    autoFocus
                  />
                </div>
                <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {isSubmitting ? "Wird vorbereitet..." : "Jetzt herunterladen"}
                </Button>
                <p className="text-[10px] text-muted-foreground text-center">
                  Kein Spam. Ihre Daten werden vertraulich behandelt.
                </p>
              </form>
            </div>
          </div>
        )}

      <div className="print-container max-w-4xl mx-auto px-4 py-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* ═══ HERO ═══ */}
        <div className="relative rounded-2xl overflow-hidden mb-10">
          <div className="h-64 sm:h-72">
            <img src={heroImg} alt="Pflegende Hände" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/40" />
          </div>
          <div className="absolute inset-0 flex items-center p-8 sm:p-12">
            <div className="text-primary-foreground max-w-xl">
              <img src={avytaLogo} alt="AVYTA" className="h-8 brightness-0 invert mb-4 opacity-90" />
              <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ratgeber für <br className="hidden sm:block" />
                <span className="text-primary-foreground/80">Angehörige</span>
              </h1>
              <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-md">
                Ihr Leitfaden mit klaren Schritten, Leistungen & Entlastung – wenn ein Familienmitglied pflegebedürftig wird.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                {[
                  { icon: Shield, label: "Kostenlose Beratung" },
                  { icon: Star, label: "Google 5,0 ★" },
                  { icon: Heart, label: "...mit Herz an Ihrer Seite" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-white/15 backdrop-blur rounded-full px-3 py-1.5">
                    <s.icon className="w-3 h-3" />
                    <span className="text-[11px] font-semibold">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-muted/40 rounded-xl px-5 py-3 mb-10 text-xs text-muted-foreground">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-primary" /> 069 153 914 05</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-primary" /> info@avyta.de</span>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-primary" /> Allerheiligentor 2-4, 60311 Frankfurt</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-primary" /> Büro Mo–Fr 8–12 · Pflege 24/7</span>
          </div>
        </div>

        {/* ═══ SECTION 1: Checkliste ═══ */}
        <section className="mb-12 no-break">
          <div className="flex items-center gap-3 mb-6">
            <SectionNumber num={1} />
            <div>
              <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                Checkliste: Erste Schritte bei Pflegebedürftigkeit
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">Was Sie jetzt wissen müssen – Schritt für Schritt</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <StepCard num={1} title="Bedarf erkennen" items={[
              "Alltagssituationen beobachten: Körperpflege, Mobilität, Ernährung, Medikamente, geistige Orientierung.",
              "Ggf. Pflegetagebuch führen."
            ]} />
            <StepCard num={2} title="Antrag stellen" items={[
              "Kontakt mit der Pflegekasse aufnehmen (schriftlich/telefonisch).",
              "Das Datum des Antrags sichert den Leistungsbeginn."
            ]} />
            <StepCard num={3} title="Unterlagen sammeln" items={[
              "Arztberichte, Krankenhausentlassungsbericht.",
              "Diagnosen, Medikamentenliste."
            ]} />
            <StepCard num={4} title="Begutachtung (MD)" items={[
              "Terminvereinbarung mit der Pflegekasse.",
              "Realität der Pflegebedürftigkeit im Alltag schildern."
            ]} />
            <StepCard num={5} title="Nach dem Bescheid" items={[
              "Pflegegrad prüfen und Leistungen aktiv beantragen.",
              "Beratungsgespräch einplanen (Pflegeberatungspflicht)."
            ]} />
          </div>
        </section>

        {/* ═══ SECTION 2: Pflegegrad beantragen ═══ */}
        <section className="mb-12 no-break">
          <div className="flex items-center gap-3 mb-6">
            <SectionNumber num={2} />
            <div>
              <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                So beantragen Sie den richtigen Pflegegrad
              </h2>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="sm:w-48 h-40 sm:h-auto rounded-xl overflow-hidden shrink-0">
              <img src={beratungImg} alt="Pflegeberatung" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="space-y-3">
                {[
                  { n: 1, text: "Antrag bei der Pflegekasse stellen (per Telefon, Brief oder online möglich)." },
                  { n: 2, text: "Termin für Begutachtung wird vereinbart." },
                  { n: 3, text: "Gutachter bewertet anhand der Alltagssituation." },
                  { n: 4, text: "Sie bekommen einen schriftlichen Bescheid mit dem Pflegegrad (1–5)." },
                ].map((step) => (
                  <div key={step.n} className="flex items-start gap-3 bg-muted/30 rounded-lg px-4 py-3">
                    <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {step.n}
                    </span>
                    <p className="text-sm text-foreground">{step.text}</p>
                  </div>
                ))}
              </div>
              <TipBox>
                Bei falscher Einstufung ist ein <strong>Widerspruch</strong> möglich – am besten mit Belegen und Pflegetagebuch.
              </TipBox>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 3: Leistungen ═══ */}
        <section className="mb-12 page-break">
          <div className="flex items-center gap-3 mb-6">
            <SectionNumber num={3} />
            <div>
              <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                Welche Leistungen Ihnen zustehen
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">Aktuelle Zahlen 2025/2026</p>
            </div>
          </div>

          {/* Pflegegeld Table */}
          <div className="no-break mb-8">
            <h3 className="flex items-center gap-2 text-sm font-bold text-foreground mb-3">
              <Euro className="w-4 h-4 text-primary" />
              Pflegegeld & Pflegesachleistungen (monatlich)
            </h3>
            <div className="rounded-xl border border-border/50 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider">Pflegegrad</th>
                    <th className="text-right py-3 px-4 text-xs font-bold uppercase tracking-wider">Pflegegeld</th>
                    <th className="text-right py-3 px-4 text-xs font-bold uppercase tracking-wider">Pflegesachleistung</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { grad: "Pflegegrad 1", geld: "–", sach: "–", highlight: false },
                    { grad: "Pflegegrad 2", geld: "347 €", sach: "796 €", highlight: false },
                    { grad: "Pflegegrad 3", geld: "599 €", sach: "1.497 €", highlight: true },
                    { grad: "Pflegegrad 4", geld: "800 €", sach: "1.859 €", highlight: false },
                    { grad: "Pflegegrad 5", geld: "990 €", sach: "2.299 €", highlight: true },
                  ].map((row, i) => (
                    <tr key={i} className={`border-t border-border/30 ${row.highlight ? "bg-primary/[0.04]" : ""}`}>
                      <td className="py-3 px-4 font-semibold text-foreground">{row.grad}</td>
                      <td className="py-3 px-4 text-right text-muted-foreground font-medium">{row.geld}</td>
                      <td className="py-3 px-4 text-right font-bold text-primary">{row.sach}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <TipBox>
              Sie können <strong>Pflegegeld und Pflegesachleistung kombinieren</strong> – z.&nbsp;B. wenn ein Teil der Pflege durch einen Pflegedienst und ein Teil durch Angehörige erfolgt.
            </TipBox>
          </div>

          {/* Entlastungsbetrag */}
          <div className="no-break grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <HandHeart className="w-5 h-5 text-primary" />
                <h4 className="font-bold text-foreground text-sm">Entlastungsbetrag</h4>
              </div>
              <p className="text-2xl font-bold text-primary mb-1">131 €<span className="text-sm font-normal text-muted-foreground"> / Monat</span></p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Für Betreuungs- und Entlastungsangebote wie Haushaltshilfe, Alltagsbegleitung, Betreuungsgruppen. Gilt für alle Pflegegrade.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-accent" />
                <h4 className="font-bold text-foreground text-sm">Gemeinsames Budget</h4>
              </div>
              <p className="text-2xl font-bold text-accent mb-1">3.539 €<span className="text-sm font-normal text-muted-foreground"> / Jahr</span></p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Flexibel für Kurzzeit- und Verhinderungspflege nutzbar (ab 1. Juli 2025). Keine Vorpflegezeit mehr nötig; Ersatzpflege bis zu ca. 8 Wochen möglich.
              </p>
            </div>
          </div>

          {/* Weitere Leistungen */}
          <div className="no-break">
            <h3 className="text-sm font-bold text-foreground mb-3">Weitere Leistungen im Überblick</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { icon: Stethoscope, title: "Pflegehilfsmittel", value: "42 € / Monat", desc: "Verbrauchsmaterialien wie Handschuhe, Bettschutzeinlagen." },
                { icon: Home, title: "Wohnraumanpassung", value: "4.180 € einmalig", desc: "Z.B. barrierefreie Dusche oder Treppenlift, je Maßnahme." },
                { icon: Moon, title: "Tages-/Nachtpflege", value: "Eigenes Budget", desc: "Teilstationäre Pflege als Ergänzung zur häuslichen Versorgung." },
              ].map((item, i) => (
                <div key={i} className="border border-border/50 rounded-xl p-4 text-center">
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs font-bold text-foreground mb-0.5">{item.title}</p>
                  <p className="text-base font-bold text-primary mb-1">{item.value}</p>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 4: Kombinationsleistung ═══ */}
        <section className="mb-12 no-break">
          <div className="flex items-center gap-3 mb-6">
            <SectionNumber num={4} />
            <div>
              <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                Kombinationsleistung – So funktioniert's
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">Pflegegeld und Sachleistung clever kombinieren</p>
            </div>
          </div>

          <div className="bg-muted/30 rounded-xl p-5 mb-4">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Sie müssen sich nicht zwischen Pflegegeld und Pflegesachleistung entscheiden. 
              Wenn Sie einen Teil der Pflege selbst übernehmen und für den Rest einen Pflegedienst beauftragen, 
              können Sie <strong className="text-foreground">beide Leistungen anteilig kombinieren</strong>.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <ArrowRightLeft className="w-4 h-4 text-primary shrink-0" />
              <h4 className="font-bold text-foreground text-sm">Rechenbeispiel – Pflegegrad 3</h4>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Sachleistung genutzt</p>
                <p className="text-lg font-bold text-primary">60 %</p>
                <p className="text-xs text-muted-foreground">898,20 € von 1.497 €</p>
              </div>
              <div className="bg-card border border-border/50 rounded-lg p-4 text-center">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Pflegegeld-Anteil</p>
                <p className="text-lg font-bold text-accent">40 %</p>
                <p className="text-xs text-muted-foreground">239,60 € von 599 €</p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
                <p className="text-[10px] text-primary uppercase tracking-wider font-semibold mb-1">Gesamtleistung</p>
                <p className="text-lg font-bold text-primary">1.137,80 €</p>
                <p className="text-xs text-muted-foreground">pro Monat</p>
              </div>
            </div>
          </div>
          <TipBox>
            Die Kombinationsleistung wird automatisch berechnet. Je weniger Sachleistung Sie nutzen, desto höher fällt Ihr anteiliges Pflegegeld aus.
          </TipBox>
        </section>

        {/* ═══ SECTION 5: Pflegezeit & Familienpflegezeit ═══ */}
        <section className="mb-12 no-break page-break">
          <div className="flex items-center gap-3 mb-6">
            <SectionNumber num={5} />
            <div>
              <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                Pflegezeit & Familienpflegezeit
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">Ihre Rechte als berufstätige Angehörige</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="border border-border/50 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-5 h-5 text-primary" />
                <h4 className="font-bold text-foreground text-sm">Kurzzeitige Arbeitsverhinderung</h4>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" /><span>Bis zu <strong className="text-foreground">10 Arbeitstage</strong> Freistellung bei akutem Pflegefall</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" /><span><strong className="text-foreground">Pflegeunterstützungsgeld</strong> als Lohnersatz bei der Pflegekasse beantragbar</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" /><span>Gilt für alle Arbeitnehmer, unabhängig von Betriebsgröße</span></li>
              </ul>
            </div>
            <div className="border border-border/50 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <CalendarDays className="w-5 h-5 text-accent" />
                <h4 className="font-bold text-foreground text-sm">Pflegezeit (bis 6 Monate)</h4>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" /><span>Vollständige oder teilweise Freistellung für bis zu <strong className="text-foreground">6 Monate</strong></span></li>
                <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" /><span>Rechtsanspruch ab 15 Beschäftigten im Betrieb</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" /><span><strong className="text-foreground">Kündigungsschutz</strong> während der gesamten Pflegezeit</span></li>
              </ul>
            </div>
          </div>
          <div className="border border-border/50 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <CalendarDays className="w-5 h-5 text-primary" />
              <h4 className="font-bold text-foreground text-sm">Familienpflegezeit (bis 24 Monate)</h4>
            </div>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" /><span>Reduzierung der Arbeitszeit auf mind. <strong className="text-foreground">15 Stunden/Woche</strong> für bis zu 24 Monate</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" /><span>Rechtsanspruch ab 25 Beschäftigten im Betrieb</span></li>
              <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" /><span>Zinsloses Darlehen vom Bundesamt für Familie möglich, um Einkommenseinbußen abzufedern</span></li>
            </ul>
          </div>
        </section>

        {/* ═══ SECTION 6: Vollmachten ═══ */}
        <section className="mb-12 no-break">
          <div className="flex items-center gap-3 mb-6">
            <SectionNumber num={6} />
            <div>
              <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                Vollmachten & Patientenverfügung
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">Rechtzeitig vorsorgen – bevor es dringend wird</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: FileCheck,
                title: "Vorsorgevollmacht",
                desc: "Benennen Sie eine Vertrauensperson, die in Ihrem Namen handeln darf – bei Finanzen, Behörden und Gesundheitsfragen.",
                tip: "Notarielle Beglaubigung wird empfohlen."
              },
              {
                icon: Lock,
                title: "Betreuungsverfügung",
                desc: "Falls keine Vollmacht vorliegt, bestimmt das Gericht einen Betreuer. Mit einer Betreuungsverfügung können Sie Wünsche äußern.",
                tip: "Ergänzt die Vorsorgevollmacht."
              },
              {
                icon: Heart,
                title: "Patientenverfügung",
                desc: "Legen Sie fest, welche medizinischen Maßnahmen Sie wünschen oder ablehnen – für den Fall, dass Sie sich nicht mehr äußern können.",
                tip: "Sollte regelmäßig aktualisiert werden."
              },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-muted/40 to-muted/20 border border-border/50 rounded-xl p-5">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-foreground text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2">{item.desc}</p>
                <p className="text-[10px] text-primary font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {item.tip}
                </p>
              </div>
            ))}
          </div>
          <TipBox>
            Alle drei Dokumente sind <strong>ohne Notar gültig</strong>, sollten aber schriftlich vorliegen und für Angehörige zugänglich aufbewahrt werden. Formulare erhalten Sie bei Betreuungsvereinen oder im Internet.
          </TipBox>
        </section>

        {/* ═══ SECTION 7: Steuerliche Vorteile ═══ */}
        <section className="mb-12 no-break">
          <div className="flex items-center gap-3 mb-6">
            <SectionNumber num={7} />
            <div>
              <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                Steuerliche Vorteile für pflegende Angehörige
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Calculator className="w-5 h-5 text-primary" />
                <h4 className="font-bold text-foreground text-sm">Pflege-Pauschbetrag</h4>
              </div>
              <div className="space-y-2 text-xs text-muted-foreground">
                <div className="flex justify-between items-center bg-card rounded-lg px-3 py-2">
                  <span>Pflegegrad 2</span>
                  <span className="font-bold text-foreground">600 €</span>
                </div>
                <div className="flex justify-between items-center bg-card rounded-lg px-3 py-2">
                  <span>Pflegegrad 3</span>
                  <span className="font-bold text-foreground">1.100 €</span>
                </div>
                <div className="flex justify-between items-center bg-primary/5 rounded-lg px-3 py-2 border border-primary/10">
                  <span>Pflegegrad 4 & 5</span>
                  <span className="font-bold text-primary">1.800 €</span>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground mt-2">Jährlich, ohne Nachweispflicht für einzelne Kosten.</p>
            </div>
            <div className="border border-border/50 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Scale className="w-5 h-5 text-accent" />
                <h4 className="font-bold text-foreground text-sm">Weitere Absetzbarkeiten</h4>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" /><span><strong className="text-foreground">Pflegekosten</strong> als außergewöhnliche Belastung absetzbar (z.B. Pflegedienst, Medikamente, Umbaukosten)</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" /><span><strong className="text-foreground">Haushaltsnahe Dienstleistungen:</strong> 20 % der Kosten, max. 4.000 €/Jahr Steuerermäßigung</span></li>
                <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" /><span><strong className="text-foreground">Fahrtkosten</strong> zu Arztbesuchen und Pflegeeinrichtungen</span></li>
              </ul>
            </div>
          </div>
          <TipBox>
            Der Pflege-Pauschbetrag kann auch aufgeteilt werden, wenn mehrere Angehörige pflegen. Sprechen Sie mit Ihrem Steuerberater für eine optimale Gestaltung.
          </TipBox>
        </section>

        {/* ═══ SECTION 8: Entlastung ═══ */}
        <section className="mb-12 no-break">
          <div className="flex items-center gap-3 mb-6">
            <SectionNumber num={8} />
            <div>
              <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                Tipps zur Entlastung pflegender Angehöriger
              </h2>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <div className="space-y-1 divide-y divide-border/30">
                <CheckItem title="Frühzeitig Unterstützung einplanen">
                  Pflegedienst, Haushaltshilfen, Nachbarschaftshilfen nutzen.
                </CheckItem>
                <CheckItem title="Auszeiten sichern">
                  Verhinderungs- und Kurzzeitpflege gezielt für Urlaube oder Krankheit nutzen.
                </CheckItem>
                <CheckItem title="Struktur schaffen">
                  Wochenplan für Pflegetermine, Medikamentengabe, Arztbesuche.
                </CheckItem>
                <CheckItem title="Emotionale Unterstützung suchen">
                  Austauschgruppen, Beratungsstellen oder Supervisionen nutzen.
                </CheckItem>
                <CheckItem title="Entlastungsbetrag sinnvoll einsetzen">
                  Auch für Freizeitangebote oder Entlastungsgruppen verwendbar.
                </CheckItem>
              </div>
            </div>
            <div className="sm:w-48 h-48 sm:h-auto rounded-xl overflow-hidden shrink-0">
              <img src={mobilitaetImg} alt="Mobilität und Unterstützung" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* ═══ SECTION 9: Kontakte ═══ */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <SectionNumber num={9} />
            <div>
              <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                Wichtige Kontakte & Anlaufstellen in Frankfurt
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">Kostenlose Beratung und Unterstützung in Ihrer Nähe</p>
            </div>
          </div>

          {/* AVYTA highlight */}
          <div className="no-break bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-5 mb-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-foreground text-sm">AVYTA GmbH – Ambulanter Pflegedienst</p>
                <p className="text-xs text-muted-foreground mt-1">Allerheiligentor 2-4 · 60311 Frankfurt am Main</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-primary" /> 069 153 914 05</span>
                  <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-primary" /> info@avyta.de</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-primary" /> Mo–Fr 8–12 Uhr · Pflege 24/7</span>
                </div>
                <p className="text-[10px] text-primary font-semibold mt-2">Kostenlose Erstberatung · Hilfe bei Antragstellung · Ambulante Pflege & Betreuung</p>
              </div>
            </div>
          </div>

          {/* Contact cards */}
          <div className="space-y-3">
            {[
              {
                icon: MapPin,
                title: "Pflegestützpunkt Frankfurt am Main",
                address: "Hansaallee 150 (Rathaus für Senioren, EG)",
                plz: "60320 Frankfurt am Main",
                tel: "0800 58936 59 (kostenfrei)",
                email: "pflegestuetzpunkt@frankfurt.de",
                hours: "Mi 10–12 Uhr · Do 16–18 Uhr",
                note: "Unabhängige, kostenlose Beratung zu allen Pflegefragen"
              },
              {
                icon: Heart,
                title: "DRK Beratungshotline für pflegende Angehörige",
                address: "\"Du pflegst – wir hören Dir zu\"",
                plz: "Deutsches Rotes Kreuz, Bezirksverband Frankfurt",
                tel: "069 589 975 181",
                email: "ichpflege@drkfrankfurt.de",
                hours: "Mo–Fr 10–16 Uhr",
                note: "Kostenlos, anonym und unverbindlich"
              },
              {
                icon: Scale,
                title: "Sozialverband VdK – Kreisverband Frankfurt",
                address: "Beratung zu Pflegerecht, Schwerbehinderung, Rente",
                plz: "Frankfurt am Main",
                tel: "Termin über vdk.de vereinbaren",
                email: "kv-frankfurt@vdk-ht.de",
                hours: "Nach Terminvereinbarung",
                note: "Beratung zu Pflegeversicherungsrecht und Widersprüchen"
              },
            ].map((item, i) => (
              <div key={i} className="no-break border border-border/50 rounded-xl p-4 flex items-start gap-4">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.address}</p>
                  <p className="text-[10px] text-muted-foreground">{item.plz}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-1.5 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-primary" /> {item.tel}</span>
                    <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-primary" /> {item.email}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-primary" /> {item.hours}</span>
                  </div>
                  <p className="text-[10px] text-accent font-medium mt-1.5">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* General contacts */}
          <div className="no-break grid sm:grid-cols-3 gap-3 mt-4">
            {[
              { icon: ClipboardList, title: "Ihre Pflegekasse", desc: "Erreichbar über Ihre Krankenkasse – zuständig für Pflegegrad, Leistungen und MD-Begutachtung." },
              { icon: Stethoscope, title: "Hausarzt & Fachärzte", desc: "Dokumentation der gesundheitlichen Situation, Verordnungen für häusliche Krankenpflege." },
              { icon: Users, title: "Nachbarschaftshilfen", desc: "Ehrenamtliche Unterstützung in vielen Frankfurter Stadtteilen verfügbar." },
            ].map((item, i) => (
              <div key={i} className="bg-muted/30 rounded-xl p-4 text-center">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <p className="font-bold text-foreground text-xs mb-0.5">{item.title}</p>
                <p className="text-[10px] text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 sm:p-10 text-primary-foreground text-center mb-8 no-break">
          <Heart className="w-10 h-10 mx-auto mb-4 text-primary-foreground/80" />
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Wir begleiten Sie – persönlich & kompetent
          </h2>
          <p className="text-sm text-primary-foreground/80 max-w-lg mx-auto mb-5">
            Sie haben Fragen oder brauchen Unterstützung bei der Organisation der Pflege? 
            Rufen Sie uns an – wir beraten Sie kostenlos und unverbindlich.
          </p>
          <div className="text-3xl font-bold mb-1">069 153 914 05</div>
          <p className="text-xs text-primary-foreground/60">info@avyta.de · www.avyta.de</p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-border/30 flex flex-wrap items-center justify-between gap-4 text-[10px] text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground text-xs mb-0.5">AVYTA GmbH – Ambulanter Pflegedienst</p>
            <p>Allerheiligentor 2-4 · 60311 Frankfurt am Main</p>
          </div>
          <div className="text-right">
            <p className="text-[9px]">Stand 2026 · www.avyta.de</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ratgeber;
