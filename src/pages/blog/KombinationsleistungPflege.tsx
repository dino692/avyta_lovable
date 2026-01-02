import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { ArrowLeft, Calendar, Clock, User, Euro, Calculator, CheckCircle, ArrowRight } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";

const KombinationsleistungPflege = () => {
  return (
    <>
      <Helmet>
        <title>Kombinationsleistung Pflege: Pflegegeld + Sachleistungen kombinieren | AVYTA</title>
        <meta name="description" content="Kombinationsleistung Pflege erklärt: So kombinieren Sie Pflegegeld und Pflegesachleistungen optimal. Berechnung, Beispiele und Tipps für mehr Flexibilität." />
        <meta name="keywords" content="Kombinationsleistung Pflege, Pflegegeld kombinieren, Pflegesachleistungen, Kombipflege, Pflegegeld und Pflegedienst" />
        <link rel="canonical" href="https://www.avyta.de/blog/kombinationsleistung-pflege" />
      </Helmet>

      <Header />

      <main className="pt-20">
        <article className="py-12">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Blog
            </Link>

            <header className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium mb-6">
                <Calculator className="w-4 h-4" />
                Pflegetipps
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Kombinationsleistung: Pflegegeld und Sachleistungen clever kombinieren
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-muted-foreground text-sm md:text-base">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  20. Dezember 2024
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  8 Min. Lesezeit
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  AVYTA Team
                </span>
              </div>
            </header>

            <div className="max-w-4xl mx-auto mb-12">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop"
                alt="Pflegekraft und Angehörige im Gespräch"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-muted-foreground mb-8">
                Die Kombinationsleistung bietet Ihnen maximale Flexibilität: Sie nutzen professionelle Pflege durch einen 
                ambulanten Dienst und erhalten trotzdem einen Teil des Pflegegeldes für die Pflege durch Angehörige.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Was ist die Kombinationsleistung?</h2>
              <p className="text-muted-foreground mb-6">
                Bei der Kombinationsleistung (auch Kombipflege genannt) werden zwei Leistungsarten der Pflegeversicherung 
                miteinander verbunden:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong>Pflegesachleistungen:</strong> Professionelle Pflege durch einen ambulanten Pflegedienst
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong>Pflegegeld:</strong> Finanzielle Anerkennung für pflegende Angehörige
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Leistungsübersicht 2025</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-sm text-sm">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-3 md:px-6 py-4 text-left font-semibold">Pflegegrad</th>
                      <th className="px-3 md:px-6 py-4 text-right font-semibold">Sachleistungen</th>
                      <th className="px-3 md:px-6 py-4 text-right font-semibold">Pflegegeld</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-3 md:px-6 py-4 font-medium">Pflegegrad 2</td>
                      <td className="px-3 md:px-6 py-4 text-right">761 €</td>
                      <td className="px-3 md:px-6 py-4 text-right">332 €</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-3 md:px-6 py-4 font-medium">Pflegegrad 3</td>
                      <td className="px-3 md:px-6 py-4 text-right">1.432 €</td>
                      <td className="px-3 md:px-6 py-4 text-right">573 €</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-3 md:px-6 py-4 font-medium">Pflegegrad 4</td>
                      <td className="px-3 md:px-6 py-4 text-right">1.778 €</td>
                      <td className="px-3 md:px-6 py-4 text-right">765 €</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-3 md:px-6 py-4 font-medium">Pflegegrad 5</td>
                      <td className="px-3 md:px-6 py-4 text-right">2.200 €</td>
                      <td className="px-3 md:px-6 py-4 text-right">947 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">So funktioniert die Berechnung</h2>
              <p className="text-muted-foreground mb-6">
                Die Berechnung der Kombinationsleistung ist einfach: Der prozentuale Anteil, den Sie bei den 
                Pflegesachleistungen nutzen, wird vom Pflegegeld abgezogen.
              </p>

              {/* Berechnungsbeispiel */}
              <div className="bg-secondary/50 rounded-2xl p-6 mb-8">
                <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  Beispielrechnung: Pflegegrad 3
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span>Pflegesachleistungen genutzt:</span>
                    <span className="font-semibold">716 € (= 50%)</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span>Verbleibendes Pflegegeld:</span>
                    <span className="font-semibold">573 € × 50% = 286,50 €</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 text-foreground font-bold">
                    <span>Gesamtleistung:</span>
                    <span className="text-primary">1.002,50 € pro Monat</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Vorteile der Kombinationsleistung</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Maximale Flexibilität", desc: "Professionelle Pflege und Angehörigenpflege optimal kombinieren" },
                  { title: "Finanzielle Anerkennung", desc: "Pflegende Angehörige erhalten weiterhin Pflegegeld" },
                  { title: "Entlastung im Alltag", desc: "Der Pflegedienst übernimmt schwierige oder zeitaufwändige Aufgaben" },
                  { title: "Monatlich anpassbar", desc: "Die Aufteilung kann jeden Monat neu gewählt werden" }
                ].map((item, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-4">
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Wann lohnt sich die Kombinationsleistung?</h2>
              <p className="text-muted-foreground mb-6">
                Die Kombinationsleistung ist ideal, wenn:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Angehörige einen Teil der Pflege übernehmen, aber Unterstützung brauchen",
                  "Bestimmte Aufgaben (z.B. Medikamentengabe, Wundversorgung) professionell erledigt werden sollen",
                  "Pflegende Angehörige berufstätig sind und zeitliche Entlastung benötigen",
                  "Die volle Pflegesachleistung nicht ausgeschöpft wird"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">So beantragen Sie die Kombinationsleistung</h2>
              <ol className="list-decimal list-inside text-muted-foreground mb-6 space-y-3">
                <li>Teilen Sie Ihrer Pflegekasse mit, dass Sie die Kombinationsleistung nutzen möchten</li>
                <li>Wählen Sie einen ambulanten Pflegedienst wie AVYTA</li>
                <li>Der Pflegedienst rechnet die Sachleistungen direkt mit der Kasse ab</li>
                <li>Das anteilige Pflegegeld wird Ihnen automatisch überwiesen</li>
              </ol>

              {/* CTA Box */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-12">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Lassen Sie sich beraten
                </h3>
                <p className="text-muted-foreground mb-6">
                  Wir berechnen gemeinsam mit Ihnen, welche Aufteilung für Ihre Situation optimal ist. 
                  Die Beratung ist kostenlos und unverbindlich.
                </p>
                <CTADropdownButton size="default" />
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

export default KombinationsleistungPflege;
