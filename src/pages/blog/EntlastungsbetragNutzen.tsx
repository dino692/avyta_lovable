import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User, Euro, CheckCircle, Lightbulb } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";

const EntlastungsbetragNutzen = () => {
  return (
    <>
      <Helmet>
        <title>Entlastungsbetrag 125 Euro: Wofür nutzen & beantragen | AVYTA</title>
        <meta name="description" content="Der Entlastungsbetrag von 125 Euro monatlich steht allen Pflegebedürftigen ab Pflegegrad 1 zu. Erfahren Sie, wofür Sie ihn nutzen können und wie Sie ihn beantragen." />
        <meta name="keywords" content="Entlastungsbetrag, 125 Euro Pflegegeld, Entlastungsleistungen Pflege, Pflegegrad 1 Geld, Betreuungsleistungen" />
        <link rel="canonical" href="https://www.avyta.de/blog/entlastungsbetrag-125-euro" />
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-medium mb-6">
                <Euro className="w-4 h-4" />
                Recht & Finanzen
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Entlastungsbetrag 125 €: So nutzen Sie ihn richtig
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-muted-foreground text-sm md:text-base">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  28. Dezember 2024
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  6 Min. Lesezeit
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  AVYTA Team
                </span>
              </div>
            </header>

            <div className="max-w-4xl mx-auto mb-12">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&h=600&fit=crop"
                alt="Entlastung für pflegende Angehörige"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-muted-foreground mb-8">
                Der Entlastungsbetrag von 125 Euro monatlich ist eine oft unterschätzte Leistung der Pflegekasse. 
                Schon ab Pflegegrad 1 haben Sie Anspruch darauf. Wir zeigen, wie Sie das Geld sinnvoll einsetzen.
              </p>

              {/* Highlight Box */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Euro className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-primary">125 € monatlich</div>
                  <div className="text-muted-foreground">= 1.500 € pro Jahr für Entlastungsleistungen</div>
                </div>
              </div>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Was ist der Entlastungsbetrag?</h2>
              <p className="text-muted-foreground mb-6">
                Der Entlastungsbetrag nach § 45b SGB XI ist eine zweckgebundene Leistung der Pflegeversicherung. 
                Er steht allen Pflegebedürftigen mit anerkanntem Pflegegrad (1-5) zu und beträgt 125 Euro monatlich.
              </p>
              <p className="text-muted-foreground mb-6">
                Anders als das Pflegegeld wird der Entlastungsbetrag nicht bar ausgezahlt, sondern gegen Nachweis 
                von qualifizierten Dienstleistern erstattet.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Wer hat Anspruch?</h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Alle Pflegebedürftigen ab Pflegegrad 1",
                  "Keine Unterscheidung zwischen den Pflegegraden",
                  "Pflege muss zu Hause erfolgen (ambulant)",
                  "Automatischer Anspruch nach Pflegegradanerkennung"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Wofür können Sie den Entlastungsbetrag nutzen?</h2>
              <p className="text-muted-foreground mb-6">
                Der Entlastungsbetrag kann für verschiedene qualitätsgesicherte Leistungen verwendet werden:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Tages- und Nachtpflege", desc: "Betreuung in einer Pflegeeinrichtung tagsüber oder nachts" },
                  { title: "Kurzzeitpflege", desc: "Vorübergehende vollstationäre Pflege" },
                  { title: "Ambulante Pflegedienste", desc: "Unterstützung bei Betreuung und Hauswirtschaft" },
                  { title: "Anerkannte Alltagshelfer", desc: "Qualifizierte Betreuungsdienste nach Landesrecht" }
                ].map((item, index) => (
                  <div key={index} className="bg-secondary/50 rounded-xl p-4">
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Praktische Beispiele</h2>
              <div className="space-y-4 mb-8">
                <div className="border border-border rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-2">Haushaltshilfe</h3>
                  <p className="text-muted-foreground text-sm">
                    Ein ambulanter Pflegedienst hilft beim Einkaufen, Kochen oder Putzen. Die Kosten werden über den 
                    Entlastungsbetrag abgerechnet.
                  </p>
                </div>
                <div className="border border-border rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-2">Betreuung und Begleitung</h3>
                  <p className="text-muted-foreground text-sm">
                    Spaziergänge, Vorlesen, Gesellschaft leisten oder Begleitung zu Terminen – alles abrechenbar.
                  </p>
                </div>
                <div className="border border-border rounded-xl p-4">
                  <h3 className="font-semibold text-foreground mb-2">Tagespflege-Zuzahlung</h3>
                  <p className="text-muted-foreground text-sm">
                    Eigenanteile bei der Tagespflege können über den Entlastungsbetrag finanziert werden.
                  </p>
                </div>
              </div>

              {/* Tipp Box */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Tipp: Entlastungsbetrag ansparen</h3>
                    <p className="text-muted-foreground">
                      Nicht genutzte Beträge können bis zum 30. Juni des Folgejahres angespart werden. So haben Sie bei 
                      Bedarf bis zu 1.875 Euro zur Verfügung!
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">So funktioniert die Abrechnung</h2>
              <ol className="list-decimal list-inside text-muted-foreground mb-6 space-y-3">
                <li>Sie beauftragen einen anerkannten Dienstleister (z.B. ambulanter Pflegedienst)</li>
                <li>Die Leistung wird erbracht und in Rechnung gestellt</li>
                <li>Sie reichen die Rechnung bei der Pflegekasse ein</li>
                <li>Die Pflegekasse erstattet bis zu 125 € monatlich</li>
              </ol>
              <p className="text-muted-foreground mb-6">
                Alternativ kann der Pflegedienst direkt mit der Pflegekasse abrechnen – fragen Sie uns danach!
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Besonderheit bei Pflegegrad 1</h2>
              <p className="text-muted-foreground mb-6">
                Für Menschen mit Pflegegrad 1 ist der Entlastungsbetrag besonders wichtig: Er ist neben dem 
                Zuschuss für Wohnraumanpassung die einzige reguläre Geldleistung der Pflegeversicherung. 
                Pflegegeld oder Pflegesachleistungen gibt es erst ab Pflegegrad 2.
              </p>

              {/* CTA Box */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-12">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Wir helfen beim Entlastungsbetrag
                </h3>
                <p className="text-muted-foreground mb-6">
                  Als zugelassener Pflegedienst können wir Leistungen über den Entlastungsbetrag erbringen und 
                  direkt mit Ihrer Pflegekasse abrechnen. Kontaktieren Sie uns für ein unverbindliches Gespräch.
                </p>
                <CTADropdownButton size="default" />
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default EntlastungsbetragNutzen;
