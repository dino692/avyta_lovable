import { Helmet } from "react-helmet-async";
import { Printer, ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import avytaLogo from "@/assets/avyta-logo.png";

// Data from SGB XI Leistungsliste
const kategorien = [
  {
    title: "Körperpflege",
    color: "bg-primary/10 text-primary",
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
    color: "bg-accent/10 text-accent",
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
    color: "bg-primary/10 text-primary",
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
    color: "bg-accent/10 text-accent",
    leistungen: [
      { nr: "16", name: "Erstgespräch durch eine Pflegefachkraft", punkte: 900, preis: 78.21 },
      { nr: "17", name: "Folgegespräch bei Änderung der Pflegestufe", punkte: 300, preis: 26.07 },
      { nr: "18.3", name: "Beratungseinsatz §37 Abs. 3 – Pflegegrad 1–5", punkte: null, preis: 87.00 },
      { nr: "18.4", name: "Beratungseinsatz per Videokonferenz", punkte: null, preis: 58.00 },
    ],
  },
  {
    title: "Hausbesuchspauschalen",
    color: "bg-primary/10 text-primary",
    leistungen: [
      { nr: "19.1", name: "Volle Hausbesuchspauschale (6–20 Uhr)", punkte: null, preis: 7.85 },
      { nr: "19.2", name: "½ Hausbesuchspauschale", punkte: null, preis: 3.58 },
      { nr: "19.3", name: "¼ Hausbesuchspauschale", punkte: null, preis: 1.79 },
      { nr: "20.1", name: "Erhöhte Hausbesuchspauschale (20–6 Uhr, Sa/So/Feiertag)", punkte: null, preis: 15.70 },
      { nr: "20.2", name: "½ erhöhte Hausbesuchspauschale", punkte: null, preis: 7.16 },
      { nr: "20.3", name: "¼ erhöhte Hausbesuchspauschale", punkte: null, preis: 3.58 },
    ],
  },
  {
    title: "Entlastungsleistungen §45b SGB XI",
    color: "bg-accent/10 text-accent",
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
    color: "bg-primary/10 text-primary",
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
          @page { size: A4 portrait; margin: 12mm 10mm; }
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          .no-print { display: none !important; }
          .print-container { max-width: 100% !important; padding: 0 !important; }
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
        {/* Header */}
        <div className="flex items-start justify-between mb-6 pb-4 border-b-2 border-primary/20">
          <div>
            <img src={avytaLogo} alt="AVYTA" className="h-10 mb-2" />
            <h1 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Leistungskatalog <span className="text-primary">SGB XI</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Ambulanter Pflegedienst · Gültig ab 2026 · IK Nr. 462645797
            </p>
          </div>
          <div className="text-right text-[11px] text-muted-foreground space-y-0.5 hidden sm:block">
            <div className="flex items-center gap-1.5 justify-end"><Phone className="w-3 h-3 text-primary" /> 069 153 914 05</div>
            <div className="flex items-center gap-1.5 justify-end"><Mail className="w-3 h-3 text-primary" /> info@avyta.de</div>
            <div className="flex items-center gap-1.5 justify-end"><MapPin className="w-3 h-3 text-primary" /> Allerheiligentor 2-4, 60311 Frankfurt</div>
            <div className="flex items-center gap-1.5 justify-end"><Clock className="w-3 h-3 text-primary" /> Büro Mo–Fr 8–12 Uhr · Pflege 24/7</div>
          </div>
        </div>

        {/* Categories */}
        {kategorien.map((kat, ki) => (
          <div key={ki} className="mb-5">
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-2 ${kat.color}`}>
              {kat.title}
            </div>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-primary/15">
                  <th className="text-left py-1.5 px-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider w-16">LK Nr.</th>
                  <th className="text-left py-1.5 px-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Leistung</th>
                  <th className="text-right py-1.5 px-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider w-16">Punkte</th>
                  <th className="text-right py-1.5 px-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider w-20">Preis</th>
                </tr>
              </thead>
              <tbody>
                {kat.leistungen.map((l, li) => {
                  const isMain = !l.nr.includes(".") && !l.nr.includes("b");
                  return (
                    <tr
                      key={li}
                      className={`border-b border-border/30 ${isMain ? "bg-muted/30 font-semibold" : ""}`}
                    >
                      <td className="py-1.5 px-2 text-xs text-primary font-mono font-semibold">{l.nr}</td>
                      <td className={`py-1.5 px-2 text-xs ${isMain ? "text-foreground" : "text-muted-foreground pl-4"}`}>
                        {l.name}
                      </td>
                      <td className="py-1.5 px-2 text-xs text-right text-muted-foreground">
                        {l.punkte ?? "–"}
                      </td>
                      <td className="py-1.5 px-2 text-xs text-right font-semibold text-foreground">
                        {formatPreis(l.preis)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}

        {/* Footer */}
        <div className="mt-8 pt-4 border-t-2 border-primary/20">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground text-xs mb-0.5">AVYTA GmbH – Ambulanter Pflegedienst</p>
              <p>Allerheiligentor 2-4 · 60311 Frankfurt am Main · Tel: 069 153 914 05 · info@avyta.de</p>
              <p>IK Nr.: 462645797 · www.avyta.de</p>
            </div>
            <div className="text-right">
              <p className="text-primary font-semibold text-xs">Kostenlose Beratung</p>
              <p className="text-foreground font-bold text-sm">069 153 914 05</p>
              <p className="text-[9px]">Alle Preise inkl. MwSt. · Stand 2026</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leistungskatalog;
