import { Helmet } from "react-helmet-async";
import { Printer, ArrowLeft, Phone, Mail, MapPin, Clock, Heart, Shield, Star, Users, CheckCircle2, FileText, ClipboardList, Euro, Lightbulb, HandHeart, Download, ChevronRight, AlertCircle, Home, Moon, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
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
            <Button variant="outline" size="sm" asChild className="gap-2">
              <a href="/downloads/Ratgeber_fuer_Angehoerige.pdf" download>
                <Download className="w-4 h-4" />
                PDF herunterladen
              </a>
            </Button>
            <Button onClick={() => window.print()} size="sm" className="gap-2 bg-primary hover:bg-primary/90">
              <Printer className="w-4 h-4" />
              Drucken
            </Button>
          </div>
        </div>
      </div>

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

        {/* ═══ SECTION 4: Entlastung ═══ */}
        <section className="mb-12 no-break">
          <div className="flex items-center gap-3 mb-6">
            <SectionNumber num={4} />
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

        {/* ═══ SECTION 5: Kontakte ═══ */}
        <section className="mb-10 no-break">
          <div className="flex items-center gap-3 mb-6">
            <SectionNumber num={5} />
            <div>
              <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                Wichtige Kontakte & Anlaufstellen
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: ClipboardList, title: "Pflegekasse", desc: "Zuständig für Pflegegrad, Leistungen und Begutachtung." },
              { icon: Stethoscope, title: "Hausarzt & Fachärzte", desc: "Dokumentation der gesundheitlichen Situation." },
              { icon: Users, title: "Pflegestützpunkte", desc: "Unabhängige, kostenlose Beratung vor Ort." },
            ].map((item, i) => (
              <div key={i} className="bg-muted/30 rounded-xl p-5 text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-bold text-foreground text-sm mb-1">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
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
