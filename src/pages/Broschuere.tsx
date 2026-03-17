import { Helmet } from "react-helmet-async";
import { Phone, Mail, Heart, Shield, Clock, Users, MapPin, Star, CheckCircle, Briefcase, Car, GraduationCap, Smile, Home, Stethoscope, AlertTriangle, Printer, ArrowLeft, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import avytaLogo from "@/assets/avyta-logo.png";

// Brochure-specific images
import broschuereHeroImg from "@/assets/broschuere/hero.jpg";
import broschuereGrundpflegeImg from "@/assets/broschuere/grundpflege.jpg";
import broschuereBehandlungspflegeImg from "@/assets/broschuere/behandlungspflege.jpg";
import broschuereHaushaltshilfeImg from "@/assets/broschuere/haushaltshilfe.jpg";
import broschuerePflegeberatungImg from "@/assets/broschuere/pflegeberatung.jpg";
import broschuereVierundzwanzigImg from "@/assets/broschuere/24-stunden-pflege.jpg";
import broschuereVerhinderungspflegeImg from "@/assets/broschuere/verhinderungspflege.jpg";
import broschuereIntensivpflegeImg from "@/assets/broschuere/intensivpflege.jpg";
import broschuereTeamGroupImg from "@/assets/broschuere/team-group.jpg";
import broschuereDemenzImg from "@/assets/broschuere/demenz-betreuung.jpg";

// Partner logos
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
        <link rel="canonical" href="https://www.avyta.de/broschuere" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <style>{`
        @media print {
          @page { size: A4 landscape; margin: 0; }
          html, body { margin: 0; padding: 0; width: 297mm; height: 210mm; }
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          .no-print { display: none !important; }
          .print-page { width: 297mm; height: 210mm; page-break-after: always; page-break-inside: avoid; overflow: hidden; }
          .print-page:last-child { page-break-after: auto; }
        }
        @media screen {
          .print-page { width: 297mm; height: 210mm; margin: 20px auto; box-shadow: 0 8px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04); overflow: hidden; border-radius: 4px; }
        }
      `}</style>

      {/* Toolbar */}
      <div className="no-print sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30 px-4 py-3">
        <div className="max-w-[297mm] mx-auto flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => window.history.back()} className="gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </Button>
          <Button onClick={() => window.print()} className="gap-2 bg-primary hover:bg-primary/90 shadow-md">
            <Printer className="w-4 h-4" />
            Drucken / Als PDF speichern
          </Button>
        </div>
      </div>

      <div className="no-print text-center py-3 text-sm text-muted-foreground">
        <p>Vorschau: DIN A4 Querformat, 2 Seiten – zum Falten in der Mitte</p>
      </div>

      {/* ===== SEITE 1: Rückseite + Deckblatt ===== */}
      <div className="print-page bg-white relative flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-px w-px border-l border-dashed border-border/40 z-10 no-print" />

        {/* LINKE HÄLFTE = Rückseite */}
        <div className="w-1/2 relative overflow-hidden">
          {/* Subtle geometric accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.03] rounded-bl-[80px]" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/[0.03] rounded-tr-[60px]" />

          <div className="relative z-10 p-7 flex flex-col h-full">
            {/* Team photo with overlay badge */}
            <div className="relative rounded-2xl overflow-hidden mb-4 h-[130px] shadow-sm">
              <img src={broschuereTeamGroupImg} alt="Das AVYTA Team" className="w-full h-full object-cover" style={{ objectPosition: 'center 20%' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              <div className="absolute bottom-2.5 left-3 flex items-center gap-2">
                <div className="bg-white/95 backdrop-blur rounded-lg px-2.5 py-1 shadow-sm">
                  <p className="text-[8px] font-bold text-primary">20+ Pflegekräfte</p>
                </div>
                <div className="bg-primary/90 backdrop-blur rounded-lg px-2.5 py-1 shadow-sm">
                  <p className="text-[8px] font-bold text-white">Inhabergeführt</p>
                </div>
              </div>
            </div>

            {/* Info callout */}
            <div className="bg-gradient-to-r from-primary/[0.06] to-accent/[0.04] border border-primary/10 rounded-xl p-3 mb-3">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-foreground mb-0.5">Wussten Sie?</p>
                  <p className="text-[9px] text-muted-foreground leading-relaxed">
                    Über 80% der pflegenden Angehörigen sind überlastet. Viele wissen nicht, dass ihnen <strong className="text-foreground">kostenlose Unterstützung</strong> zusteht.
                  </p>
                  <p className="text-[9px] text-primary font-semibold mt-1">→ Wir helfen, alle Ansprüche geltend zu machen.</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-3">
              <h3 className="text-[11px] font-bold text-foreground mb-2 uppercase tracking-wider">So erreichen Sie uns</h3>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { icon: MapPin, label: "Frankfurt", detail: "Allerheiligentor 2-4, 60311" },
                  { icon: MapPin, label: "Bad Vilbel", detail: "Standort Bad Vilbel" },
                  { icon: Phone, label: "Telefon", detail: "069 153 914 05", highlight: true },
                  { icon: Mail, label: "E-Mail", detail: "info@avyta.de", highlight: true },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-2 bg-muted/30 rounded-lg px-2.5 py-1.5">
                    <c.icon className="w-3 h-3 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-[8px] text-muted-foreground leading-tight">{c.label}</p>
                      <p className={`text-[9px] leading-tight font-medium ${c.highlight ? 'text-primary' : 'text-foreground'}`}>{c.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 bg-primary/5 rounded-lg px-2.5 py-1.5 mt-1.5">
                <Clock className="w-3 h-3 text-primary flex-shrink-0" />
                <div>
                  <p className="text-[8px] text-muted-foreground">Büro Mo–Fr 8–12 Uhr</p>
                  <p className="text-[9px] text-primary font-semibold">Pflege: 24/7 an 365 Tagen</p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="flex items-center gap-2 bg-muted/20 rounded-lg px-3 py-2 mb-3">
              <Globe className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <div>
                <p className="text-[8px] font-semibold text-foreground uppercase tracking-wider">Wir sprechen Ihre Sprache</p>
                <p className="text-[8px] text-muted-foreground">Deutsch · English · Bosnisch · Kroatisch · Serbisch · Polnisch</p>
              </div>
            </div>

            {/* Google Rating */}
            <div className="flex items-center gap-3 bg-white rounded-xl p-3 mb-3 border border-border/30 shadow-sm">
              <img src={googleLogo} alt="Google" className="h-8 flex-shrink-0" />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-bold text-foreground leading-none">5,0</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-[8px] text-muted-foreground mt-0.5">Höchstbewertung von unseren Patienten</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white rounded-xl p-3.5 text-center shadow-md mb-3">
              <p className="text-[11px] font-bold">Jetzt kostenlose Beratung sichern!</p>
              <p className="text-base font-bold mt-0.5 tracking-wide">069 153 914 05</p>
            </div>

            {/* Partner logos */}
            <div className="mt-auto">
              <p className="text-[7px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">Partner & Krankenkassen</p>
              <div className="grid grid-cols-4 gap-1.5 items-center">
                {[
                  { src: aokLogo, alt: "AOK" }, { src: barmerLogo, alt: "Barmer" },
                  { src: dakLogo, alt: "DAK" }, { src: bkkLogo, alt: "BKK" },
                  { src: vdekLogo, alt: "vdek" }, { src: gkvLogo, alt: "GKV" },
                  { src: pkvLogo, alt: "PKV" }, { src: mdkLogo, alt: "MDK" },
                ].map((logo, i) => (
                  <div key={i} className="bg-white rounded-md p-1.5 flex items-center justify-center h-7 border border-border/20">
                    <img src={logo.src} alt={logo.alt} className="max-h-4 max-w-full object-contain" />
                  </div>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t border-border/20 flex items-center justify-between">
                <p className="text-[7px] text-muted-foreground">IK Nr.: 462645797 · © {new Date().getFullYear()} AVYTA GmbH</p>
                <p className="text-[9px] font-bold text-primary">www.avyta.de</p>
              </div>
            </div>
          </div>
        </div>

        {/* RECHTE HÄLFTE = Deckblatt */}
        <div className="w-1/2 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={broschuereHeroImg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/50" />
          </div>
          
          {/* Geometric decoration */}
          <div className="absolute top-8 right-8 w-24 h-24 border border-white/10 rounded-3xl rotate-12" />
          <div className="absolute bottom-32 right-16 w-16 h-16 border border-white/8 rounded-full" />
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10 p-8 flex flex-col h-full text-white">
            {/* Header */}
            <div className="flex items-center justify-between mb-auto">
              <img src={avytaLogo} alt="AVYTA" className="h-11 brightness-0 invert" />
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-1.5 border border-white/10">
                <p className="text-[7px] uppercase tracking-[0.2em] text-white/60">Ambulanter</p>
                <p className="text-[10px] font-bold tracking-wide">Pflegedienst</p>
              </div>
            </div>
            
            {/* Main content */}
            <div className="my-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-5 border border-white/10">
                <Heart className="w-3 h-3" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.15em]">Seit über 12 Jahren für Sie da</span>
              </div>
              
              <h1 className="text-[32px] font-bold leading-[1.15] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Wenn Pflege
                <br />
                zur <span className="underline decoration-white/30 decoration-2 underline-offset-4">Herzens­angelegenheit</span>
                <br />
                wird.
              </h1>
              
              <p className="text-[11px] text-white/75 leading-relaxed max-w-[250px] mb-6">
                Sie verdienen mehr als nur Versorgung. Sie verdienen jemanden, 
                der sich <strong className="text-white">wirklich kümmert</strong> – professionell, 
                liebevoll und zuverlässig.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { val: "12+", label: "Jahre Erfahrung", icon: Shield },
                  { val: "20+", label: "Pflegekräfte", icon: Users },
                  { val: "5,0", label: "Google Bewertung", icon: Star },
                  { val: "24/7", label: "Für Sie erreichbar", icon: Clock },
                ].map((s, i) => (
                  <div key={i} className="bg-white/[0.08] backdrop-blur-sm rounded-xl p-2.5 flex items-center gap-2.5 border border-white/[0.06]">
                    <s.icon className="w-4 h-4 text-white/60 flex-shrink-0" />
                    <div>
                      <div className="text-[14px] font-bold leading-tight">{s.val}</div>
                      <div className="text-[7px] text-white/50 uppercase tracking-[0.15em]">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white text-primary rounded-2xl p-3.5 flex items-center gap-3 shadow-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-[7px] text-primary/50 uppercase tracking-[0.15em] font-semibold">Kostenlose & unverbindliche Beratung</p>
                <p className="text-lg font-bold text-primary leading-tight">069 153 914 05</p>
              </div>
              <Heart className="w-4 h-4 text-primary/20 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== SEITE 2: Leistungen + Vertrauen ===== */}
      <div className="print-page bg-white relative flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-px w-px border-l border-dashed border-border/40 z-10 no-print" />

        {/* LINKE HÄLFTE = Leistungen */}
        <div className="w-1/2 p-6 flex flex-col overflow-hidden relative">
          {/* Subtle corner accent */}
          <div className="absolute top-0 left-0 w-40 h-1 bg-gradient-to-r from-primary to-transparent" />

          <div className="mb-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/[0.06] rounded-full mb-2 border border-primary/10">
              <Stethoscope className="w-3 h-3 text-primary" />
              <span className="text-[8px] font-semibold text-primary uppercase tracking-[0.15em]">Für Sie & Ihre Liebsten</span>
            </div>
            <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Unsere <span className="text-primary">Leistungen</span>
            </h2>
          </div>

          {/* Primary services */}
          <div className="grid grid-cols-2 gap-2 mb-2.5">
            {[
              { img: broschuereGrundpflegeImg, title: "Körperpflege", desc: "Bad, Dusche, Ankleiden, Mundpflege" },
              { img: broschuereBehandlungspflegeImg, title: "Behandlungspflege", desc: "Medikamente, Wundversorgung, Injektionen" },
              { img: broschuereHaushaltshilfeImg, title: "Haushaltshilfe", desc: "Reinigung, Wäsche, Kochen, Einkauf" },
              { img: broschuereDemenzImg, title: "Betreuung & Begleitung", desc: "Spaziergänge, Arztbesuche, Demenz" },
            ].map((s, i) => (
              <div key={i} className="group rounded-xl overflow-hidden border border-border/30 bg-white shadow-sm">
                <div className="h-[72px] overflow-hidden relative">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" style={{ objectPosition: 'center 25%', transform: 'scale(0.85)' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
                </div>
                <div className="p-2">
                  <p className="text-[10px] font-bold text-foreground">{s.title}</p>
                  <p className="text-[8px] text-muted-foreground leading-snug">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary services */}
          <div className="grid grid-cols-2 gap-2 mb-2.5">
            {[
              { img: broschuereVierundzwanzigImg, title: "24-Stunden-Pflege", desc: "Rund-um-die-Uhr-Betreuung" },
              { img: broschuereVerhinderungspflegeImg, title: "Verhinderungspflege", desc: "Entlastung für Angehörige" },
              { img: broschuereIntensivpflegeImg, title: "Intensivpflege", desc: "Spez. medizinische Versorgung" },
              { img: broschuerePflegeberatungImg, title: "Pflegeberatung §37.3", desc: "Kostenlose Beratung & Hilfe" },
            ].map((s, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border/30 bg-white shadow-sm">
                <div className="h-[56px] overflow-hidden relative">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" style={{ objectPosition: 'center 25%', transform: 'scale(0.85)' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
                </div>
                <div className="p-1.5">
                  <p className="text-[9px] font-bold text-foreground">{s.title}</p>
                  <p className="text-[8px] text-muted-foreground leading-snug">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Referral bonus */}
          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-xl p-3 mb-2 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <p className="text-[11px] font-bold mb-0.5 flex items-center gap-1.5 relative z-10">
              <Star className="w-4 h-4" />
              Bis zu 1.000 € Empfehlungsprämie!
            </p>
            <p className="text-[9px] text-white/90 leading-relaxed relative z-10">
              Für jede erfolgreiche Vermittlung eines neuen Patienten oder Mitarbeiters.
            </p>
          </div>

          {/* Urgency */}
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-2.5 mb-2.5 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-white/5 rounded-full translate-y-1/2 translate-x-1/2" />
            <p className="text-[10px] font-bold flex items-center gap-1.5">
              <AlertTriangle className="w-3 h-3" />
              Viele Leistungen verfallen ungenutzt!
            </p>
            <p className="text-[8px] text-white/80 leading-relaxed mt-0.5">
              Jährlich verfallen Milliarden Euro an Pflegeleistungen. 
              <strong className="text-white"> Wir sorgen dafür, dass Ihnen nichts entgeht.</strong>
            </p>
          </div>

          {/* Pflegegrade */}
          <div className="mt-auto">
            <p className="text-[9px] font-bold text-foreground mb-1.5">Ihr Anspruch auf Pflegeleistungen:</p>
            <div className="grid grid-cols-5 gap-1.5">
              {[
                { g: "PG 1", a: "131€" },
                { g: "PG 2", a: "761€" },
                { g: "PG 3", a: "1.432€" },
                { g: "PG 4", a: "1.778€" },
                { g: "PG 5", a: "2.200€" },
              ].map((p, i) => (
                <div key={i} className="text-center bg-gradient-to-b from-primary/[0.06] to-primary/[0.02] rounded-lg p-1.5 border border-primary/10">
                  <div className="text-[7px] font-bold text-primary uppercase tracking-wider">{p.g}</div>
                  <div className="text-[11px] font-bold text-foreground">{p.a}</div>
                  <div className="text-[6px] text-muted-foreground">/Monat</div>
                </div>
              ))}
            </div>
            <p className="text-[8px] text-primary mt-1.5 font-semibold flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              Wir übernehmen die komplette Antragstellung für Sie!
            </p>
          </div>
        </div>

        {/* RECHTE HÄLFTE = Vertrauen + Karriere */}
        <div className="w-1/2 p-6 flex flex-col overflow-hidden relative">
          <div className="absolute top-0 right-0 w-40 h-1 bg-gradient-to-l from-primary to-transparent" />

          {/* Trust header */}
          <div className="flex gap-3 mb-3">
            <div className="w-[85px] h-[75px] rounded-2xl overflow-hidden flex-shrink-0 shadow-sm">
              <img src={broschuereTeamGroupImg} alt="AVYTA Team" className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex-1">
              <h2 className="text-[15px] font-bold text-foreground mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                Warum Familien uns <span className="text-primary">vertrauen</span>
              </h2>
              <p className="text-[9px] text-muted-foreground leading-relaxed">
                Seit über 12 Jahren begleiten wir Familien in Frankfurt mit Herz und Kompetenz.
              </p>
            </div>
          </div>

          {/* Google rating */}
          <div className="bg-white rounded-xl p-3 mb-2.5 flex items-center gap-3 border-2 border-primary/15 shadow-sm">
            <img src={googleLogo} alt="Google" className="w-9 h-9 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-lg font-bold text-foreground ml-1">5,0</span>
              </div>
              <p className="text-[8px] text-muted-foreground">Höchstbewertung – von zufriedenen Patienten & Angehörigen</p>
            </div>
          </div>

          {/* Trust points */}
          <div className="space-y-1.5 mb-2.5">
            {[
              { t: "Inhabergeführt & familiär", d: "Persönlicher Kontakt, keine Großorganisation" },
              { t: "MDK-Bestnote 1,6", d: "Geprüfte Qualität durch den Med. Dienst" },
              { t: "Feste Bezugspersonen", d: "Immer vertraute Gesichter, kein Wechsel" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 bg-primary/[0.03] rounded-lg px-2.5 py-1.5 border border-primary/[0.06]">
                <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold text-foreground">{item.t}</span>
                  <span className="text-[9px] text-muted-foreground"> – {item.d}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Coverage area */}
          <div className="bg-muted/20 rounded-xl p-2.5 mb-2.5 border border-border/20">
            <div className="flex items-center gap-1.5 mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="text-[9px] font-bold text-foreground">Wir kommen zu Ihnen – in ganz Frankfurt & Bad Vilbel</span>
            </div>
            <div className="flex flex-wrap gap-x-1.5 gap-y-0.5">
              {["Bockenheim", "Bornheim", "Sachsenhausen", "Nordend", "Westend", "Ostend", "Griesheim", "Höchst", "Niederrad", "Rödelheim", "Ginnheim", "Eschersheim", "Dornbusch", "Heddernheim", "Bad Vilbel"].map((d, i) => (
                <span key={i} className="text-[7px] text-muted-foreground">{d}{i < 14 ? " ·" : ""}</span>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-1.5 mb-3">
            <p className="text-[8px] font-semibold text-primary uppercase tracking-[0.15em]">Das sagen unsere Patienten</p>
            {[
              { quote: "Seit AVYTA sich um meine Mutter kümmert, kann ich endlich wieder ruhig schlafen.", name: "Familie M.", location: "Frankfurt-Bornheim" },
              { quote: "Die Pflegekräfte sind wie Familie geworden. So viel Herzlichkeit hätten wir nie erwartet.", name: "Herr K.", location: "Bad Vilbel" },
              { quote: "AVYTA hat uns bei der Antragstellung geholfen – wir hätten tausende Euro verpasst!", name: "Familie S.", location: "Sachsenhausen" },
            ].map((t, i) => (
              <div key={i} className="bg-gradient-to-r from-primary/[0.04] to-transparent rounded-lg p-2 border-l-2 border-primary/20">
                <p className="text-[9px] text-foreground italic leading-snug">„{t.quote}"</p>
                <p className="text-[8px] text-primary font-semibold mt-0.5">— {t.name}, {t.location}</p>
              </div>
            ))}
          </div>

          {/* Karriere */}
          <div className="mt-auto bg-foreground text-white rounded-2xl p-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-[40px]" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent/15 rounded-full blur-[30px]" />
            <div className="relative z-10">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Briefcase className="w-3.5 h-3.5 text-primary" />
                <span className="text-[8px] font-semibold text-primary uppercase tracking-[0.15em]">Karriere bei AVYTA</span>
              </div>
              <h3 className="text-sm font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Werden Sie Teil unseres Teams!
              </h3>
              <div className="grid grid-cols-2 gap-1.5 mb-2.5">
                {[
                  { icon: Car, t: "Firmenwagen privat" },
                  { icon: GraduationCap, t: "Weiterbildungen" },
                  { icon: Smile, t: "30 Tage Urlaub" },
                  { icon: Heart, t: "Betriebliche AV" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-white/[0.08] rounded-lg px-2 py-1.5 border border-white/[0.05]">
                    <b.icon className="w-3 h-3 text-primary flex-shrink-0" />
                    <span className="text-[8px] text-white/90">{b.t}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 text-[9px]">
                <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-primary" /> <strong>069 153 914 05</strong></span>
                <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-primary" /> <strong>info@avyta.de</strong></span>
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
