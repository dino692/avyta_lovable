import { Helmet } from "react-helmet-async";
import { Phone, Mail, Heart, Shield, Clock, Users, MapPin, Star, CheckCircle, Briefcase, Car, GraduationCap, Smile, Home, Utensils, Stethoscope, Pill, HandHelping, Download, Printer, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import avytaLogo from "@/assets/avyta-logo.png";

const Broschuere = () => {
  return (
    <>
      <Helmet>
        <title>AVYTA Infobroschüre - Ambulanter Pflegedienst Frankfurt</title>
        <meta name="description" content="Informationsbroschüre von AVYTA - Ihrem ambulanten Pflegedienst in Frankfurt am Main. Alle Leistungen im Überblick." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <style>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 0;
          }
          html, body {
            margin: 0;
            padding: 0;
            width: 297mm;
            height: 210mm;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
          .print-page {
            width: 297mm;
            height: 210mm;
            page-break-after: always;
            page-break-inside: avoid;
            overflow: hidden;
          }
          .print-page:last-child {
            page-break-after: auto;
          }
        }
        @media screen {
          .print-page {
            width: 297mm;
            height: 210mm;
            margin: 20px auto;
            box-shadow: 0 4px 24px rgba(0,0,0,0.12);
            overflow: hidden;
          }
        }
      `}</style>

      {/* Toolbar */}
      <div className="no-print sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border/50 px-4 py-3">
        <div className="max-w-[297mm] mx-auto flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => window.history.back()} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </Button>
          <div className="flex gap-2">
            <Button onClick={() => window.print()} className="gap-2 bg-primary hover:bg-primary/90">
              <Printer className="w-4 h-4" />
              Drucken / Als PDF speichern
            </Button>
          </div>
        </div>
      </div>

      <div className="no-print text-center py-4 text-sm text-muted-foreground">
        <p>Vorschau der Broschüre (DIN A4 Querformat, 2 Seiten = 4 Felder beim Falten)</p>
        <p className="text-xs mt-1">Drücken Sie <strong>Strg+P</strong> oder klicken Sie auf „Drucken", um die Broschüre als PDF zu speichern.</p>
      </div>

      {/* ===== SEITE 1 (Außenseite): Deckblatt links + Rückseite rechts ===== */}
      <div className="print-page bg-white relative flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {/* Falzlinie */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-px w-px border-l border-dashed border-gray-200 z-10 no-print" />

        {/* LINKE HÄLFTE = Rückseite (wird beim Falten zur Rückseite) */}
        <div className="w-1/2 p-8 flex flex-col relative overflow-hidden">
          {/* Decorative bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-muted/40 to-white" />
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px]" />
          
          <div className="relative z-10 flex flex-col h-full">
            {/* Kontakt */}
            <div className="mb-auto">
              <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Kontakt & Standorte
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Standort Frankfurt</p>
                    <p className="text-[11px] text-muted-foreground">Bürgeler Str. 3, 60386 Frankfurt</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Standort Bad Vilbel</p>
                    <p className="text-[11px] text-muted-foreground">Frankfurter Str. 59, 61118 Bad Vilbel</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Telefon</p>
                    <p className="text-[11px] text-primary font-semibold">069 153 914 05</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">E-Mail</p>
                    <p className="text-[11px] text-primary font-semibold">info@avyta.de</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Erreichbarkeit</p>
                    <p className="text-[11px] text-muted-foreground">Büro: Mo–Fr 8–12 Uhr</p>
                    <p className="text-[11px] text-primary font-semibold">Pflege: 24/7 an 365 Tagen</p>
                  </div>
                </div>
              </div>

              {/* Sprachen */}
              <div className="bg-primary/5 rounded-xl p-3 mb-4">
                <p className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-1">Wir sprechen</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Deutsch · Rumänisch · Bulgarisch · Griechisch · Serbisch · Kroatisch
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-border/50 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-muted-foreground">IK Nr.: 462647061</p>
                <p className="text-[10px] text-muted-foreground">© {new Date().getFullYear()} AVYTA GmbH</p>
              </div>
              <p className="text-[11px] font-semibold text-primary">www.avyta.de</p>
            </div>
          </div>
        </div>

        {/* RECHTE HÄLFTE = Deckblatt (Titelseite) */}
        <div className="w-1/2 relative overflow-hidden">
          {/* Full background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent" />
          <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-[60px]" />
          
          {/* Decorative shapes */}
          <div className="absolute top-16 right-8 w-24 h-24 border-2 border-white/10 rounded-2xl rotate-12" />
          <div className="absolute bottom-32 right-16 w-16 h-16 border-2 border-white/10 rounded-full" />

          <div className="relative z-10 p-8 flex flex-col h-full text-white">
            {/* Logo */}
            <div className="mb-auto">
              <img src={avytaLogo} alt="AVYTA" className="h-12 brightness-0 invert" />
            </div>
            
            {/* Main content */}
            <div className="mb-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 rounded-full mb-5">
                <Heart className="w-3 h-3" />
                <span className="text-[10px] font-semibold uppercase tracking-wider">Ambulanter Pflegedienst</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ihre Pflege
                <br />
                in vertrauten
                <br />
                Händen
              </h1>
              
              <p className="text-sm text-white/80 leading-relaxed max-w-[220px] mb-8">
                Professionelle häusliche Pflege in Frankfurt am Main und Bad Vilbel – 
                persönlich, zuverlässig, vor Ort.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { val: "12+", label: "Jahre Erfahrung" },
                  { val: "20+", label: "Mitarbeiter" },
                  { val: "5,0 ★", label: "Google Rating" },
                  { val: "24/7", label: "Erreichbar" },
                ].map((s, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-2.5 text-center">
                    <div className="text-lg font-bold">{s.val}</div>
                    <div className="text-[9px] text-white/70 uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white/15 backdrop-blur rounded-xl p-3 flex items-center gap-3">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <div>
                <p className="text-[10px] text-white/60 uppercase tracking-wider">Kostenlose Beratung</p>
                <p className="text-base font-bold">069 153 914 05</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SEITE 2 (Innenseite): Leistungen + Karriere ===== */}
      <div className="print-page bg-white relative flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {/* Falzlinie */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-px w-px border-l border-dashed border-gray-200 z-10 no-print" />

        {/* LINKE HÄLFTE = Leistungen */}
        <div className="w-1/2 p-7 flex flex-col overflow-hidden">
          <div className="mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full mb-3">
              <Stethoscope className="w-3 h-3 text-primary" />
              <span className="text-[9px] font-semibold text-primary uppercase tracking-wider">Leistungsüberblick</span>
            </div>
            <h2 className="text-xl font-bold text-foreground leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Unsere <span className="text-primary">Leistungen</span>
            </h2>
          </div>

          {/* Service List */}
          <div className="space-y-2.5 mb-5">
            {[
              { icon: Heart, title: "Individuelle Körperpflege", desc: "Bad, Dusche, Haarpflege, Rasieren, Zähneputzen, Mundpflege" },
              { icon: Pill, title: "Medikamentengabe", desc: "Sichere Medikation nach ärztlicher Anordnung, verblistert" },
              { icon: Utensils, title: "Hilfe bei der Nahrungsaufnahme", desc: "Essen & Trinken, Zubereitung, Anrichten von Mahlzeiten" },
              { icon: Home, title: "Haushaltsservice", desc: "Reinigung, Wäsche, Einkauf – 1-2x pro Woche" },
              { icon: Users, title: "Spaziergänge & Begleitung", desc: "Arztbesuche, Freizeitaktivitäten, Bewegung an der frischen Luft" },
              { icon: Clock, title: "24-Stunden-Betreuung", desc: "Rund-um-die-Uhr-Versorgung in Ihrem Zuhause" },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <s.icon className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-foreground leading-tight">{s.title}</p>
                  <p className="text-[10px] text-muted-foreground leading-snug">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Weitere Leistungen */}
          <div className="bg-muted/40 rounded-xl p-3 mb-4">
            <p className="text-[10px] font-bold text-foreground mb-1.5">Weitere Leistungen:</p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
              {["Verhinderungspflege", "Pflegeberatung §37.3", "Demenzbetreuung", "Palliativpflege", "Intensivpflege", "Betreuungsleistungen"].map((s, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-[10px] text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kostenübernahme */}
          <div className="mt-auto">
            <p className="text-[10px] font-bold text-foreground mb-2">Kostenübernahme durch Pflegekasse:</p>
            <div className="grid grid-cols-5 gap-1.5">
              {[
                { g: "PG 1", a: "131€" },
                { g: "PG 2", a: "761€" },
                { g: "PG 3", a: "1.432€" },
                { g: "PG 4", a: "1.778€" },
                { g: "PG 5", a: "2.200€" },
              ].map((p, i) => (
                <div key={i} className="text-center bg-primary/5 rounded-lg p-1.5">
                  <div className="text-[8px] font-semibold text-primary">{p.g}</div>
                  <div className="text-[11px] font-bold text-foreground">{p.a}</div>
                  <div className="text-[7px] text-muted-foreground">/Monat</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RECHTE HÄLFTE = Warum AVYTA + Karriere */}
        <div className="w-1/2 p-7 flex flex-col overflow-hidden">
          {/* Warum AVYTA */}
          <div className="mb-5">
            <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Warum <span className="text-primary">AVYTA</span>?
            </h2>
            <div className="space-y-2">
              {[
                { t: "Familiärer Pflegedienst", d: "Inhabergeführt, persönlicher Kontakt, kurze Wege" },
                { t: "Qualifiziertes Team", d: "20+ Mitarbeiter mit Erfahrung und Fortbildungen" },
                { t: "Flexibel & Individuell", d: "Angepasst an Ihre Bedürfnisse – zeitlich und inhaltlich" },
                { t: "MDK Note 1,6", d: "Geprüfte Qualität durch den Medizinischen Dienst" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold text-foreground">{item.t}</span>
                    <span className="text-[10px] text-muted-foreground"> – {item.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Einzugsgebiet */}
          <div className="bg-muted/30 rounded-xl p-3 mb-5">
            <div className="flex items-center gap-1.5 mb-2">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="text-[10px] font-bold text-foreground">Einzugsgebiet: Frankfurt & Bad Vilbel</span>
            </div>
            <div className="grid grid-cols-3 gap-x-2 gap-y-0.5">
              {["Bockenheim", "Bornheim", "Sachsenhausen", "Nordend", "Westend", "Ostend", "Griesheim", "Höchst", "Niederrad", "Rödelheim", "Ginnheim", "Eschersheim", "Dornbusch", "Heddernheim", "Bad Vilbel"].map((d, i) => (
                <span key={i} className="text-[9px] text-muted-foreground">{d}</span>
              ))}
            </div>
          </div>

          {/* Karriere */}
          <div className="mt-auto bg-foreground text-white rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/30 rounded-full blur-[40px]" />
            <div className="relative z-10">
              <div className="flex items-center gap-1.5 mb-2">
                <Briefcase className="w-3.5 h-3.5 text-primary" />
                <span className="text-[9px] font-semibold text-primary uppercase tracking-wider">Karriere bei AVYTA</span>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Werden Sie Teil unseres Teams!
              </h3>
              <p className="text-[10px] text-white/70 mb-3 leading-relaxed">
                Wir suchen Pflegefachkräfte, Pflegehilfskräfte und Haushaltshilfen.
              </p>
              <div className="grid grid-cols-2 gap-1.5 mb-3">
                {[
                  { icon: Car, t: "Firmenwagen privat" },
                  { icon: GraduationCap, t: "Weiterbildungen" },
                  { icon: Smile, t: "30 Tage Urlaub" },
                  { icon: Heart, t: "Betriebliche AV" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-white/10 rounded-lg px-2 py-1.5">
                    <b.icon className="w-3 h-3 text-primary flex-shrink-0" />
                    <span className="text-[9px] text-white/90">{b.t}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-[10px]">
                <Mail className="w-3 h-3 text-primary" />
                <span className="font-semibold">bewerbung@avyta.de</span>
                <span className="text-white/40">|</span>
                <Phone className="w-3 h-3 text-primary" />
                <span className="font-semibold">069 153 914 05</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="no-print py-8 text-center text-xs text-muted-foreground">
        <p>Tipp: Wählen Sie beim Drucken <strong>„Querformat"</strong> und <strong>„Hintergrundgrafiken"</strong> für das beste Ergebnis.</p>
      </div>
    </>
  );
};

export default Broschuere;
