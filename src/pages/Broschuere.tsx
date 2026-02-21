import { Helmet } from "react-helmet-async";
import { Phone, Mail, Heart, Shield, Clock, Users, MapPin, Star, CheckCircle, Briefcase, Car, GraduationCap, Smile, Home, Utensils, Stethoscope, Pill, AlertTriangle, Printer, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import avytaLogo from "@/assets/avyta-logo.png";

// Images
import heroImg from "@/assets/hero-image.jpg";
import grundpflegeImg from "@/assets/services/grundpflege.jpg";
import behandlungspflegeImg from "@/assets/services/behandlungspflege.jpg";
import haushaltshilfeImg from "@/assets/services/haushaltshilfe.jpg";
import pflegeberatungImg from "@/assets/services/pflegeberatung.jpg";
import vierundzwanzigImg from "@/assets/services/24-stunden-pflege.jpg";
import verhinderungspflegeImg from "@/assets/services/verhinderungspflege.jpg";
import intensivpflegeImg from "@/assets/services/intensivpflege.jpg";
import teamGroupImg from "@/assets/team/team-group.jpg";
import demenzImg from "@/assets/about/demenz-betreuung.jpg";
import teamFrauenImg from "@/assets/about/team-frauen.jpg";

// Partner & Krankenkassen Logos
import aokLogo from "@/assets/partners/aok-logo.jpg";
import barmerLogo from "@/assets/partners/barmer-logo.png";
import dakLogo from "@/assets/partners/dak-logo.jpg";
import bkkLogo from "@/assets/partners/bkk-logo.png";
import vdekLogo from "@/assets/partners/vdek-logo.jpg";
import gkvLogo from "@/assets/partners/gkv-logo.svg";
import pkvLogo from "@/assets/partners/pkv-logo.png";
import mdkLogo from "@/assets/partners/mdk-logo.webp";
import googleLogo from "@/assets/partners/google-logo.png";

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

      <div className="no-print text-center py-3 text-sm text-muted-foreground">
        <p>Vorschau: DIN A4 Querformat, 2 Seiten – zum Falten in der Mitte</p>
      </div>

      {/* ===== SEITE 1 (Außenseite): Rückseite links + Deckblatt rechts ===== */}
      <div className="print-page bg-white relative flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {/* Falzlinie */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-px w-px border-l border-dashed border-border z-10 no-print" />

        {/* LINKE HÄLFTE = Rückseite */}
        <div className="w-1/2 flex flex-col relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-muted/20" />
          
          <div className="relative z-10 p-7 flex flex-col h-full">
            {/* Emotional Hook - Angst → Hoffnung */}
            <div className="bg-primary/5 border border-primary/15 rounded-xl p-3.5 mb-4">
              <div className="flex items-start gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-foreground leading-relaxed">
                  <strong>Wussten Sie?</strong> Über 80% der pflegenden Angehörigen sind chronisch überlastet. 
                  Viele wissen nicht, dass ihnen <strong>kostenlose Unterstützung</strong> zusteht.
                </p>
              </div>
              <p className="text-[10px] text-primary font-semibold ml-6">
                → Wir helfen Ihnen, alle Ansprüche geltend zu machen.
              </p>
            </div>

            {/* Kontaktdaten */}
            <h3 className="text-base font-bold text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              So erreichen Sie uns
            </h3>
            
            <div className="space-y-2.5 mb-4">
              {[
                { icon: MapPin, label: "Frankfurt", detail: "Allerheiligentor 2-4, 60311 Frankfurt" },
                { icon: MapPin, label: "Bad Vilbel", detail: "Standort Bad Vilbel" },
                { icon: Phone, label: "Telefon", detail: "069 153 914 05", highlight: true },
                { icon: Mail, label: "E-Mail", detail: "info@avyta.de", highlight: true },
                { icon: Clock, label: "Büro Mo–Fr 8–12 Uhr", detail: "Pflege: 24/7 an 365 Tagen", highlight: true },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <c.icon className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-foreground">{c.label}</p>
                    <p className={`text-[10px] leading-tight ${c.highlight ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sprachen */}
            <div className="bg-muted/30 rounded-lg p-2.5 mb-4">
              <p className="text-[9px] font-semibold text-primary uppercase tracking-wider mb-0.5">Wir sprechen Ihre Sprache</p>
              <p className="text-[10px] text-muted-foreground">Deutsch · English · Bosnisch · Kroatisch · Serbisch · Polnisch</p>
            </div>

            {/* Partner Logos */}
            <div className="mt-auto">
              <p className="text-[8px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Unsere Partner & Krankenkassen</p>
              <div className="grid grid-cols-4 gap-2 items-center">
                {[
                  { src: aokLogo, alt: "AOK" },
                  { src: barmerLogo, alt: "Barmer" },
                  { src: dakLogo, alt: "DAK" },
                  { src: bkkLogo, alt: "BKK" },
                  { src: vdekLogo, alt: "vdek" },
                  { src: gkvLogo, alt: "GKV" },
                  { src: pkvLogo, alt: "PKV" },
                  { src: mdkLogo, alt: "MDK" },
                ].map((logo, i) => (
                  <div key={i} className="bg-white rounded-md p-1.5 flex items-center justify-center h-8 border border-border/30">
                    <img src={logo.src} alt={logo.alt} className="max-h-5 max-w-full object-contain" />
                  </div>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t border-border/30 flex items-center justify-between">
                <p className="text-[8px] text-muted-foreground">IK Nr.: 462645797 · © {new Date().getFullYear()} AVYTA GmbH</p>
                <p className="text-[9px] font-semibold text-primary">www.avyta.de</p>
              </div>
            </div>
          </div>
        </div>

        {/* RECHTE HÄLFTE = Deckblatt (Titelseite) */}
        <div className="w-1/2 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img src={heroImg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/60" />
          </div>
          
          {/* Decorative */}
          <div className="absolute top-12 right-6 w-20 h-20 border-2 border-white/10 rounded-2xl rotate-12" />
          <div className="absolute bottom-28 right-12 w-14 h-14 border-2 border-white/10 rounded-full" />

          <div className="relative z-10 p-7 flex flex-col h-full text-white">
            {/* Logo */}
            <div className="flex items-center justify-between mb-auto">
              <img src={avytaLogo} alt="AVYTA" className="h-10 brightness-0 invert" />
              <div className="bg-white/15 backdrop-blur rounded-lg px-2.5 py-1">
                <p className="text-[8px] uppercase tracking-wider text-white/70">Ambulanter</p>
                <p className="text-[9px] font-bold">Pflegedienst</p>
              </div>
            </div>
            
            {/* Main content */}
            <div className="my-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 backdrop-blur rounded-full mb-4">
                <Heart className="w-3 h-3" />
                <span className="text-[9px] font-semibold uppercase tracking-wider">Seit über 12 Jahren für Sie da</span>
              </div>
              
              <h1 className="text-3xl font-bold leading-[1.15] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Wenn Pflege
                <br />
                zur <span className="underline decoration-white/40 decoration-2 underline-offset-4">Herzens­angelegenheit</span>
                <br />
                wird.
              </h1>
              
              <p className="text-[11px] text-white/80 leading-relaxed max-w-[240px] mb-5">
                Sie verdienen mehr als nur Versorgung. Sie verdienen jemanden, 
                der sich <strong className="text-white">wirklich kümmert</strong> – professionell, 
                liebevoll und zuverlässig.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { val: "12+", label: "Jahre Erfahrung", icon: Shield },
                  { val: "20+", label: "Pflegekräfte", icon: Users },
                  { val: "5,0", label: "Google Bewertung", icon: Star },
                  { val: "24/7", label: "Für Sie erreichbar", icon: Clock },
                ].map((s, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-2 flex items-center gap-2">
                    <s.icon className="w-4 h-4 text-white/70 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold leading-tight">{s.val}</div>
                      <div className="text-[8px] text-white/60 uppercase tracking-wider">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white text-primary rounded-xl p-3 flex items-center gap-3 shadow-lg">
              <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-[8px] text-primary/60 uppercase tracking-wider font-semibold">Kostenlose & unverbindliche Beratung</p>
                <p className="text-base font-bold text-primary">069 153 914 05</p>
              </div>
              <Heart className="w-4 h-4 text-primary/30 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== SEITE 2 (Innenseite): Leistungen links + Vertrauen & Karriere rechts ===== */}
      <div className="print-page bg-white relative flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-px w-px border-l border-dashed border-border z-10 no-print" />

        {/* LINKE HÄLFTE = Leistungen */}
        <div className="w-1/2 p-6 flex flex-col overflow-hidden">
          <div className="mb-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 rounded-full mb-2">
              <Stethoscope className="w-3 h-3 text-primary" />
              <span className="text-[8px] font-semibold text-primary uppercase tracking-wider">Für Sie & Ihre Liebsten</span>
            </div>
            <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Unsere <span className="text-primary">Leistungen</span>
            </h2>
          </div>

          {/* Services with images */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            {[
              { img: grundpflegeImg, title: "Körperpflege", desc: "Bad, Dusche, Ankleiden, Haarpflege, Mundpflege" },
              { img: behandlungspflegeImg, title: "Behandlungspflege", desc: "Medikamente, Wundversorgung, Injektionen" },
              { img: haushaltshilfeImg, title: "Haushaltshilfe", desc: "Reinigung, Wäsche, Kochen, Einkaufsservice" },
              { img: demenzImg, title: "Betreuung & Begleitung", desc: "Spaziergänge, Arztbesuche, Demenzbetreuung" },
            ].map((s, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border/40 bg-white">
                <div className="h-20 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-2">
                  <p className="text-[10px] font-bold text-foreground">{s.title}</p>
                  <p className="text-[9px] text-muted-foreground leading-snug">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services with images */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            {[
              { img: vierundzwanzigImg, title: "24-Stunden-Pflege", desc: "Rund-um-die-Uhr-Betreuung zu Hause" },
              { img: verhinderungspflegeImg, title: "Verhinderungspflege", desc: "Entlastung für pflegende Angehörige" },
              { img: intensivpflegeImg, title: "Intensivpflege", desc: "Spezialisierte medizinische Versorgung" },
              { img: pflegeberatungImg, title: "Pflegeberatung §37.3", desc: "Kostenlose Beratung & Antragshilfe" },
            ].map((s, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border/40 bg-white">
                <div className="h-14 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-1.5">
                  <p className="text-[9px] font-bold text-foreground">{s.title}</p>
                  <p className="text-[8px] text-muted-foreground leading-snug">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empfehlungsprämie */}
          <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-xl p-3 mb-2 shadow-md">
            <p className="text-[11px] font-bold mb-0.5 flex items-center gap-1.5">
              <Star className="w-4 h-4" />
              Bis zu 1.000 € Empfehlungsprämie!
            </p>
            <p className="text-[9px] text-white/90 leading-relaxed">
              Empfehlen Sie uns weiter – für jede erfolgreiche Vermittlung eines neuen Patienten 
              oder Mitarbeiters erhalten Sie eine <strong className="text-white">Prämie bis zu 1.000 €</strong>.
            </p>
          </div>

          {/* Emotional urgency box */}
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-2.5 mb-2">
            <p className="text-[10px] font-bold mb-0.5 flex items-center gap-1.5">
              <AlertTriangle className="w-3 h-3" />
              Viele Leistungen verfallen ungenutzt!
            </p>
            <p className="text-[8px] text-white/80 leading-relaxed">
              Jährlich verfallen Milliarden Euro an Pflegeleistungen. 
              <strong className="text-white"> Wir sorgen dafür, dass Ihnen nichts entgeht.</strong>
            </p>
          </div>

          {/* Kostenübernahme */}
          <div className="mt-auto">
            <p className="text-[9px] font-bold text-foreground mb-1.5">Ihr Anspruch auf Pflegeleistungen:</p>
            <div className="grid grid-cols-5 gap-1">
              {[
                { g: "PG 1", a: "131€" },
                { g: "PG 2", a: "761€" },
                { g: "PG 3", a: "1.432€" },
                { g: "PG 4", a: "1.778€" },
                { g: "PG 5", a: "2.200€" },
              ].map((p, i) => (
                <div key={i} className="text-center bg-primary/5 rounded-lg p-1">
                  <div className="text-[7px] font-semibold text-primary">{p.g}</div>
                  <div className="text-[10px] font-bold text-foreground">{p.a}</div>
                  <div className="text-[6px] text-muted-foreground">/Monat</div>
                </div>
              ))}
            </div>
            <p className="text-[8px] text-primary mt-1 font-medium">
              ✓ Wir übernehmen die komplette Antragstellung für Sie!
            </p>
          </div>
        </div>

        {/* RECHTE HÄLFTE = Vertrauen + Karriere */}
        <div className="w-1/2 p-6 flex flex-col overflow-hidden">
          {/* Team Image + Trust */}
          <div className="flex gap-2.5 mb-3">
            <div className="w-[90px] h-[80px] rounded-xl overflow-hidden flex-shrink-0">
              <img src={teamFrauenImg} alt="AVYTA Team" className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex-1">
              <h2 className="text-base font-bold text-foreground mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                Warum Familien uns <span className="text-primary">vertrauen</span>
              </h2>
              <p className="text-[9px] text-muted-foreground leading-relaxed">
                Seit über 12 Jahren begleiten wir Familien in Frankfurt mit Herz und Kompetenz.
              </p>
            </div>
          </div>

          {/* Google Bewertung Highlight */}
          <div className="bg-white border-2 border-primary/20 rounded-xl p-3 mb-2.5 flex items-center gap-3 shadow-sm">
            <img src={googleLogo} alt="Google" className="w-8 h-8 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-base font-bold text-foreground ml-1">5,0</span>
              </div>
              <p className="text-[9px] text-muted-foreground">Höchstbewertung auf Google – von zufriedenen Patienten & Angehörigen</p>
            </div>
          </div>

          {/* Trust Points */}
          <div className="space-y-1.5 mb-2.5">
            {[
              { t: "Inhabergeführt & familiär", d: "Persönlicher Kontakt, keine anonyme Großorganisation" },
              { t: "MDK-Bestnote 1,6", d: "Geprüfte Qualität durch den Medizinischen Dienst" },
              { t: "Feste Bezugspersonen", d: "Kein ständiger Wechsel – immer vertraute Gesichter" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold text-foreground">{item.t}</span>
                  <span className="text-[9px] text-muted-foreground"> – {item.d}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Einzugsgebiet */}
          <div className="bg-muted/30 rounded-lg p-2.5 mb-3">
            <div className="flex items-center gap-1 mb-1.5">
              <MapPin className="w-3 h-3 text-primary" />
              <span className="text-[9px] font-bold text-foreground">Wir kommen zu Ihnen – in ganz Frankfurt & Bad Vilbel</span>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-0.5">
              {["Bockenheim", "Bornheim", "Sachsenhausen", "Nordend", "Westend", "Ostend", "Griesheim", "Höchst", "Niederrad", "Rödelheim", "Ginnheim", "Eschersheim", "Dornbusch", "Heddernheim", "Bad Vilbel"].map((d, i) => (
                <span key={i} className="text-[8px] text-muted-foreground">{d}{i < 14 ? " ·" : ""}</span>
              ))}
            </div>
          </div>

          {/* Hoffnung / Testimonial */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-3 mb-3">
            <p className="text-[10px] text-foreground italic leading-relaxed">
              „Seit AVYTA sich um meine Mutter kümmert, kann ich endlich wieder ruhig schlafen. 
              Ich weiß, sie ist in den besten Händen."
            </p>
            <p className="text-[9px] text-primary font-semibold mt-1.5">— Familie M. aus Frankfurt</p>
          </div>

          {/* Karriere */}
          <div className="mt-auto bg-foreground text-white rounded-xl p-3.5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/30 rounded-full blur-[30px]" />
            <div className="relative z-10">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Briefcase className="w-3.5 h-3.5 text-primary" />
                <span className="text-[8px] font-semibold text-primary uppercase tracking-wider">Karriere bei AVYTA</span>
              </div>
              <h3 className="text-sm font-bold mb-1.5" style={{ fontFamily: "'Playfair Display', serif" }}>
                Werden Sie Teil unseres Teams!
              </h3>
              <div className="grid grid-cols-2 gap-1 mb-2">
                {[
                  { icon: Car, t: "Firmenwagen privat" },
                  { icon: GraduationCap, t: "Weiterbildungen" },
                  { icon: Smile, t: "30 Tage Urlaub" },
                  { icon: Heart, t: "Betriebliche AV" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-1 bg-white/10 rounded-md px-1.5 py-1">
                    <b.icon className="w-2.5 h-2.5 text-primary flex-shrink-0" />
                    <span className="text-[8px] text-white/90">{b.t}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 text-[9px]">
                <span className="flex items-center gap-1"><Phone className="w-2.5 h-2.5 text-primary" /> <strong>069 153 914 05</strong></span>
                <span className="flex items-center gap-1"><Mail className="w-2.5 h-2.5 text-primary" /> <strong>info@avyta.de</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="no-print py-6 text-center text-xs text-muted-foreground">
        <p>Tipp: Wählen Sie beim Drucken <strong>„Querformat"</strong> und aktivieren Sie <strong>„Hintergrundgrafiken"</strong>.</p>
      </div>
    </>
  );
};

export default Broschuere;
