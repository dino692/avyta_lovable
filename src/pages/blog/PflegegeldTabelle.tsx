import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { ArrowLeft, Calendar, Clock, User, Euro, Info, CheckCircle } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";

const PflegegeldTabelle = () => {
  return (
    <>
      <Helmet>
        <title>Pflegegeld 2025: Aktuelle Tabelle & Höhe nach Pflegegrad | AVYTA</title>
        <meta name="description" content="Pflegegeld 2025: Aktuelle Beträge nach Pflegegrad 1-5. Erfahren Sie, wie viel Pflegegeld Ihnen zusteht und wie Sie es beantragen. Übersichtliche Tabelle + Tipps." />
        <meta name="keywords" content="Pflegegeld 2025, Pflegegeld Tabelle, Pflegegeld Höhe, Pflegegrad Geld, Pflegegeld beantragen" />
        <link rel="canonical" href="https://www.avyta.de/blog/pflegegeld-tabelle-2025" />
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 text-sm font-medium mb-6">
                <Euro className="w-4 h-4" />
                Recht & Finanzen
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Pflegegeld 2025: Aktuelle Tabelle nach Pflegegrad
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-muted-foreground text-sm md:text-base">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  1. Januar 2025
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  7 Min. Lesezeit
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  AVYTA Team
                </span>
              </div>
            </header>

            <div className="max-w-4xl mx-auto mb-12">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop"
                alt="Pflegegeld berechnen"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-muted-foreground mb-8">
                Das Pflegegeld ist eine wichtige finanzielle Unterstützung für pflegebedürftige Menschen und ihre Angehörigen. 
                Hier finden Sie die aktuellen Beträge für 2025 und alle wichtigen Informationen zur Beantragung.
              </p>

              {/* Info Box */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Wichtig: Pflegegeld-Erhöhung 2025</h3>
                    <p className="text-muted-foreground">
                      Zum 1. Januar 2025 wurde das Pflegegeld um 4,5% erhöht. Die neuen Beträge gelten seit Jahresbeginn automatisch.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tabelle */}
              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-6">Pflegegeld Tabelle 2025</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-sm">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-4 md:px-6 py-4 text-left font-semibold">Pflegegrad</th>
                      <th className="px-4 md:px-6 py-4 text-right font-semibold">Pflegegeld/Monat</th>
                      <th className="px-4 md:px-6 py-4 text-right font-semibold hidden md:table-cell">Pflegegeld/Jahr</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-4 md:px-6 py-4 font-medium">Pflegegrad 1</td>
                      <td className="px-4 md:px-6 py-4 text-right">kein Anspruch*</td>
                      <td className="px-4 md:px-6 py-4 text-right hidden md:table-cell">–</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-4 md:px-6 py-4 font-medium">Pflegegrad 2</td>
                      <td className="px-4 md:px-6 py-4 text-right font-semibold text-primary">332 €</td>
                      <td className="px-4 md:px-6 py-4 text-right hidden md:table-cell">3.984 €</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-4 md:px-6 py-4 font-medium">Pflegegrad 3</td>
                      <td className="px-4 md:px-6 py-4 text-right font-semibold text-primary">573 €</td>
                      <td className="px-4 md:px-6 py-4 text-right hidden md:table-cell">6.876 €</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-4 md:px-6 py-4 font-medium">Pflegegrad 4</td>
                      <td className="px-4 md:px-6 py-4 text-right font-semibold text-primary">765 €</td>
                      <td className="px-4 md:px-6 py-4 text-right hidden md:table-cell">9.180 €</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-4 md:px-6 py-4 font-medium">Pflegegrad 5</td>
                      <td className="px-4 md:px-6 py-4 text-right font-semibold text-primary">947 €</td>
                      <td className="px-4 md:px-6 py-4 text-right hidden md:table-cell">11.364 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mb-8">
                *Bei Pflegegrad 1 besteht kein Anspruch auf Pflegegeld, jedoch auf den Entlastungsbetrag von 125 € monatlich.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Was ist Pflegegeld?</h2>
              <p className="text-muted-foreground mb-6">
                Das Pflegegeld ist eine monatliche Leistung der Pflegekasse für pflegebedürftige Personen ab Pflegegrad 2. 
                Es wird gezahlt, wenn die Pflege durch Angehörige, Freunde oder andere ehrenamtliche Helfer zu Hause erfolgt.
              </p>
              <p className="text-muted-foreground mb-6">
                Der Pflegebedürftige kann das Pflegegeld frei verwenden – in der Regel wird es als Anerkennung an die 
                pflegenden Angehörigen weitergegeben.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Voraussetzungen für Pflegegeld</h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Anerkannter Pflegegrad 2, 3, 4 oder 5",
                  "Pflege erfolgt zu Hause (nicht im Pflegeheim)",
                  "Pflege durch Privatpersonen (Angehörige, Freunde)",
                  "Antrag bei der Pflegekasse gestellt"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Pflegegeld und Pflegesachleistungen kombinieren</h2>
              <p className="text-muted-foreground mb-6">
                Sie können das Pflegegeld auch mit professioneller Pflege durch einen ambulanten Pflegedienst kombinieren. 
                Dies nennt sich <strong>Kombinationsleistung</strong>. Dabei wird das Pflegegeld anteilig gekürzt, je nachdem 
                wie viel der Pflegesachleistungen Sie in Anspruch nehmen.
              </p>
              <p className="text-muted-foreground mb-6">
                Beispiel: Nutzen Sie 50% der Pflegesachleistungen, erhalten Sie noch 50% des Pflegegeldes.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">So beantragen Sie Pflegegeld</h2>
              <ol className="list-decimal list-inside text-muted-foreground mb-6 space-y-3">
                <li>Stellen Sie einen Antrag auf Pflegeleistungen bei Ihrer Pflegekasse</li>
                <li>Ein Gutachter des MDK kommt zur Begutachtung</li>
                <li>Nach Feststellung des Pflegegrads erhalten Sie automatisch Pflegegeld</li>
                <li>Das Pflegegeld wird monatlich auf Ihr Konto überwiesen</li>
              </ol>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Wichtig: Beratungseinsätze</h2>
              <p className="text-muted-foreground mb-6">
                Wer nur Pflegegeld bezieht, muss regelmäßige Beratungseinsätze nachweisen. Diese finden bei Pflegegrad 2-3 
                halbjährlich und bei Pflegegrad 4-5 vierteljährlich statt. Ein ambulanter Pflegedienst wie AVYTA kann 
                diese Beratungseinsätze durchführen.
              </p>

              {/* CTA Box */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-12">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Fragen zum Pflegegeld?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Wir beraten Sie kostenlos zu Ihren Ansprüchen und helfen bei der Beantragung. 
                  Als ambulanter Pflegedienst unterstützen wir Sie auch bei den Beratungseinsätzen.
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

export default PflegegeldTabelle;
