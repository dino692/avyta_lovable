import { Helmet } from "react-helmet-async";
import { Printer, ArrowLeft, Phone, Mail, MapPin, Clock, Heart, Shield, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import avytaLogo from "@/assets/avyta-logo.png";

// Category images
import grundpflegeImg from "@/assets/broschuere/grundpflege.jpg";
import behandlungspflegeImg from "@/assets/broschuere/behandlungspflege.jpg";
import haushaltshilfeImg from "@/assets/broschuere/haushaltshilfe.jpg";
import pflegeberatungImg from "@/assets/broschuere/pflegeberatung.jpg";
import intensivpflegeImg from "@/assets/broschuere/intensivpflege.jpg";
import demenzImg from "@/assets/broschuere/demenz-betreuung.jpg";
import vierundzwanzigImg from "@/assets/broschuere/24-stunden-pflege.jpg";
import heroImg from "@/assets/broschuere/hero.jpg";
import teamImg from "@/assets/broschuere/team-group.jpg";

const kategorien = [
  {
    title: "Körperpflege",
    img: grundpflegeImg,
    desc: "Professionelle Unterstützung bei der täglichen Hygiene – von der Teilwäsche bis zum Vollbad. Unsere einfühlsamen Pflegekräfte sorgen für Würde und Wohlbefinden.",
    leistungen: [
      { nr: "1", name: "Kleine Körperpflege", punkte: 400, preis: 34.76 },
      { nr: "1.1", name: "Teilwaschen", punkte: 260, preis: 22.59 },
      { nr: "1.4", name: "Hilfe beim Aufsuchen/Verlassen des Bettes", punkte: 40, preis: 3.48 },
      { nr: "1.5", name: "Kämmen und/oder Rasieren", punkte: 50, preis: 4.35 },
      { nr: "1.6", name: "Einfache Hilfe bei Ausscheidungen", punkte: 50, preis: 4.35 },
      { nr: "2", name: "Große Körperpflege", punkte: 510, preis: 44.32 },
      { nr: "2.1", name: "Ganzkörperwäsche/Dusche", punkte: 370, preis: 32.15 },
      { nr: "3", name: "Große erweiterte Körperpflege", punkte: 610, preis: 53.01 },
      { nr: "3.1", name: "Vollbad", punkte: 470, preis: 40.84 },
    ],
  },
  {
    title: "Mobilität & Ernährung",
    img: intensivpflegeImg,
    desc: "Von der Lagerung über Mobilisation bis zur Ernährungshilfe – wir unterstützen Ihre Selbstständigkeit im Alltag und sorgen für eine sichere Versorgung zu Hause.",
    leistungen: [
      { nr: "4", name: "Spezielle Lagerung bei Bettlägerigkeit", punkte: 100, preis: 8.69 },
      { nr: "5", name: "Umfangreiche Hilfe bei Ausscheidungen", punkte: 150, preis: 13.04 },
      { nr: "6", name: "Hilfe bei Nahrungsaufnahme – einfach", punkte: 100, preis: 8.69 },
      { nr: "7", name: "Hilfe bei Nahrungsaufnahme – umfangreich", punkte: 250, preis: 21.73 },
      { nr: "8", name: "Enterale Ernährung über Sonde", punkte: 150, preis: 13.04 },
      { nr: "9", name: "Hilfestellung beim Aufstehen/Zubettgehen", punkte: 100, preis: 8.69 },
      { nr: "10", name: "Hilfe beim Verlassen/Wiederaufsuchen der Wohnung", punkte: 120, preis: 10.43 },
      { nr: "11", name: "Mobilisation in der Wohnung", punkte: 120, preis: 10.43 },
      { nr: "12", name: "Begleitung bei Aktivitäten", punkte: 150, preis: 13.04 },
    ],
  },
  {
    title: "Hauswirtschaft & Betreuung",
    img: haushaltshilfeImg,
    desc: "Entlastung im Haushalt und liebevolle Betreuung – wir übernehmen Einkäufe, Reinigung und pflegerische Betreuungsmaßnahmen, damit Sie sich auf das Wesentliche konzentrieren können.",
    leistungen: [
      { nr: "13", name: "Haushaltsführung – 15 Min. Takt", punkte: 150, preis: 8.57 },
      { nr: "13b", name: "Haushaltsführung – 5 Min. Takt", punkte: 50, preis: 2.86 },
      { nr: "14", name: "Pflegerische Betreuungsleistung – 30 Min.", punkte: 300, preis: 21.33 },
      { nr: "14b", name: "Pflegerische Betreuungsmaßnahme – 10 Min.", punkte: 100, preis: 7.11 },
      { nr: "15a", name: "Pflegefachliche Anleitung – 15 Min.", punkte: 150, preis: 13.04 },
      { nr: "15b", name: "Pflegefachliche Anleitung – 5 Min.", punkte: 50, preis: 4.35 },
    ],
  },
  {
    title: "Beratung & Erstgespräch",
    img: pflegeberatungImg,
    desc: "Individuelle Pflegeberatung durch erfahrene Fachkräfte – wir helfen bei der Antragstellung, klären Ihre Ansprüche und begleiten Sie bei Änderungen des Pflegegrades.",
    leistungen: [
      { nr: "16", name: "Erstgespräch durch eine Pflegefachkraft", punkte: 900, preis: 78.21 },
      { nr: "17", name: "Folgegespräch bei Änderung der Pflegestufe", punkte: 300, preis: 26.07 },
      { nr: "18.3", name: "Beratungseinsatz §37 Abs. 3 – Pflegegrad 1–5", punkte: null, preis: 87.00 },
      { nr: "18.4", name: "Beratungseinsatz per Videokonferenz", punkte: null, preis: 58.00 },
    ],
  },
  {
    title: "Hausbesuchspauschalen",
    img: heroImg,
    desc: "Transparente Pauschalen für jeden Hausbesuch – gestaffelt nach Tageszeit und Wochentag, damit Sie immer wissen, welche Kosten entstehen.",
    leistungen: [
      { nr: "19.1", name: "Volle Hausbesuchspauschale (6–20 Uhr)", punkte: null, preis: 7.85 },
      { nr: "19.2", name: "½ Hausbesuchspauschale", punkte: null, preis: 3.58 },
      { nr: "19.3", name: "¼ Hausbesuchspauschale", punkte: null, preis: 1.79 },
      { nr: "20.1", name: "Erhöhte Pauschale (20–6 Uhr, Sa/So/Feiertag)", punkte: null, preis: 15.70 },
      { nr: "20.2", name: "½ erhöhte Hausbesuchspauschale", punkte: null, preis: 7.16 },
      { nr: "20.3", name: "¼ erhöhte Hausbesuchspauschale", punkte: null, preis: 3.58 },
    ],
  },
  {
    title: "Entlastungsleistungen §45b SGB XI",
    img: demenzImg,
    desc: "Zusätzliche Betreuungs- und Entlastungsleistungen für Pflegebedürftige aller Pflegegrade – finanziert über den monatlichen Entlastungsbetrag von 131 € pro Monat.",
    leistungen: [
      { nr: "X1", name: "Haushaltsführung – 5 Min. Takt", punkte: 50, preis: 2.86 },
      { nr: "X2", name: "Haushaltsführung – 15 Min. Takt", punkte: 150, preis: 8.57 },
      { nr: "X3", name: "Haushaltsführung – 60 Min. Takt", punkte: 600, preis: 34.26 },
      { nr: "Y1", name: "Pflegerische Betreuung – 10 Min.", punkte: 100, preis: 7.11 },
      { nr: "Y2", name: "Pflegerische Betreuung – 30 Min.", punkte: 300, preis: 21.33 },
      { nr: "Y3", name: "Pflegerische Betreuung – 60 Min.", punkte: 600, preis: 42.66 },
      { nr: "Z1", name: "Grundpflege – 5 Min. Takt", punkte: 50, preis: 4.35 },
      { nr: "Z2", name: "Grundpflege – 10 Min. Takt", punkte: 100, preis: 8.69 },
      { nr: "Z3", name: "Grundpflege – 15 Min. Takt", punkte: 150, preis: 13.04 },
      { nr: "Z4", name: "Grundpflege – 30 Min. Takt", punkte: 300, preis: 26.07 },
      { nr: "Z5", name: "Grundpflege – 45 Min. Takt", punkte: 450, preis: 39.11 },
      { nr: "Z6", name: "Grundpflege – 60 Min. Takt", punkte: 600, preis: 52.14 },
    ],
  },
  {
    title: "Sonderleistungen & Betreuung",
    img: vierundzwanzigImg,
    desc: "Intensive Betreuung über den Standard hinaus – ob Nachtpflege, Einsatz einer zweiten Pflegekraft oder stundenweise Betreuung für Ihre Sicherheit.",
    leistungen: [
      { nr: "S03", name: "Betreuung pro Stunde", punkte: 600, preis: 42.66 },
      { nr: "S04", name: "Einsatz zweite Pflegekraft", punkte: 600, preis: 42.66 },
      { nr: "S05", name: "Nachtbetreuung", punkte: 600, preis: 42.66 },
      { nr: "§45b", name: "Zusätzliche Betreuungsleistung", punkte: null, preis: 40.00 },
      { nr: "§124.1", name: "Häusliche Betreuung", punkte: 50, preis: 3.56 },
    ],
  },
];

const formatPreis = (preis: number) =>
  preis.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";

const Leistungskatalog = () => {
  return (
    <>
      <Helmet>
        <title>Leistungskatalog SGB XI – AVYTA Pflegedienst Frankfurt</title>
        <meta name="description" content="Leistungskatalog mit allen Preisen und Leistungsnummern nach SGB XI – AVYTA ambulanter Pflegedienst Frankfurt am Main." />
        <link rel="canonical" href="https://www.avyta.de/leistungskatalog" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <style>{`
        @media print {
          @page { size: A4 portrait; margin: 10mm 8mm; }
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          .no-print { display: none !important; }
          .print-container { max-width: 100% !important; padding: 0 !important; }
          .kategorie-block { break-inside: avoid; }
        }
      `}</style>

      {/* Toolbar */}
      <div className="no-print sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border/50 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => window.history.back()} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </Button>
          <Button onClick={() => window.print()} className="gap-2 bg-primary hover:bg-primary/90">
            <Printer className="w-4 h-4" />
            Drucken / Als PDF speichern
          </Button>
        </div>
      </div>

      <div className="print-container max-w-4xl mx-auto px-4 py-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* Hero Header */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <div className="h-48 sm:h-56">
            <img src={teamImg} alt="Das AVYTA Team" className="w-full h-full object-cover" style={{ objectPosition: "center 22%" }} />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
          </div>
          <div className="absolute inset-0 flex items-center p-6 sm:p-10">
            <div className="text-white max-w-lg">
              <img src={avytaLogo} alt="AVYTA" className="h-9 brightness-0 invert mb-3" />
              <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Leistungskatalog <span className="text-white/80">SGB XI</span>
              </h1>
              <p className="text-sm text-white/80 leading-relaxed max-w-md">
                Alle Leistungen, Leistungsnummern und Preise unseres ambulanten Pflegedienstes auf einen Blick – transparent und fair.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {[
                  { icon: Shield, label: "12+ Jahre Erfahrung" },
                  { icon: Star, label: "Google 5,0 ★" },
                  { icon: Users, label: "20+ Pflegekräfte" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-white/15 backdrop-blur rounded-full px-3 py-1">
                    <s.icon className="w-3 h-3" />
                    <span className="text-[11px] font-semibold">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-muted/40 rounded-xl px-5 py-3 mb-8 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-primary" /> 069 153 914 05</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-primary" /> info@avyta.de</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-primary" /> Allerheiligentor 2-4, 60311 Frankfurt</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-primary" /> Büro Mo–Fr 8–12 · Pflege 24/7</span>
          </div>
        </div>

        {/* Categories */}
        {kategorien.map((kat, ki) => (
          <div key={ki} className="kategorie-block mb-8">
            {/* Category Header with Image */}
            <div className="flex flex-col sm:flex-row gap-4 mb-3">
              <div className="sm:w-40 h-28 sm:h-auto rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={kat.img}
                  alt={kat.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 30%" }}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-lg font-bold text-foreground mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <span className="text-primary">{kat.title}</span>
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed">{kat.desc}</p>
              </div>
            </div>

            {/* Table */}
            <div className="rounded-xl border border-border/50 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/5">
                    <th className="text-left py-2 px-3 text-[10px] font-bold text-primary uppercase tracking-wider w-16">LK Nr.</th>
                    <th className="text-left py-2 px-3 text-[10px] font-bold text-primary uppercase tracking-wider">Leistung</th>
                    <th className="text-right py-2 px-3 text-[10px] font-bold text-primary uppercase tracking-wider w-16">Punkte</th>
                    <th className="text-right py-2 px-3 text-[10px] font-bold text-primary uppercase tracking-wider w-24">Preis</th>
                  </tr>
                </thead>
                <tbody>
                  {kat.leistungen.map((l, li) => {
                    const isMain = !l.nr.includes(".") && !l.nr.includes("b") && !l.nr.startsWith("§");
                    return (
                      <tr
                        key={li}
                        className={`border-t border-border/20 transition-colors ${
                          isMain ? "bg-primary/[0.03]" : "hover:bg-muted/30"
                        }`}
                      >
                        <td className="py-2 px-3 text-xs font-mono font-bold text-primary">{l.nr}</td>
                        <td className={`py-2 px-3 text-xs ${isMain ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                          {l.name}
                        </td>
                        <td className="py-2 px-3 text-xs text-right text-muted-foreground">
                          {l.punkte ?? "–"}
                        </td>
                        <td className="py-2 px-3 text-xs text-right font-bold text-foreground">
                          {formatPreis(l.preis)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 sm:p-8 text-white text-center mb-8">
          <Heart className="w-8 h-8 mx-auto mb-3 text-white/80" />
          <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Kostenlose & unverbindliche Beratung
          </h2>
          <p className="text-sm text-white/80 max-w-md mx-auto mb-4">
            Sie haben Fragen zu unseren Leistungen oder möchten wissen, welche Kosten Ihre Pflegekasse übernimmt? 
            Wir beraten Sie gerne – kostenlos und unverbindlich.
          </p>
          <div className="text-2xl font-bold">069 153 914 05</div>
          <p className="text-xs text-white/60 mt-1">info@avyta.de · www.avyta.de</p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-border/30 flex flex-wrap items-center justify-between gap-4 text-[10px] text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground text-xs mb-0.5">AVYTA GmbH – Ambulanter Pflegedienst</p>
            <p>Allerheiligentor 2-4 · 60311 Frankfurt am Main · IK Nr.: 462645797</p>
          </div>
          <div className="text-right">
            <p className="text-[9px]">Alle Preise inkl. MwSt. · Stand 2026 · www.avyta.de</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leistungskatalog;
