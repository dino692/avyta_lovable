import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User, BookOpen, CheckCircle2 } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";

const SturzprophylaxeTipps = () => {
  return (
    <>
      <Helmet>
        <title>Sturzprophylaxe: So vermeiden Sie Stürze im Alter | AVYTA Blog</title>
        <meta name="description" content="Praktische Tipps zur Sturzvorbeugung für Senioren. So gestalten Sie die Wohnung sicher und bleiben mobil." />
      </Helmet>

      <Header />

      <main className="pt-20">
        <article className="py-12">
          <div className="container mx-auto px-4">
            {/* Back Link */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Blog
            </Link>

            {/* Header */}
            <header className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Pflegetipps
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Sturzprophylaxe: So vermeiden Sie Stürze im Alter
              </h1>
              <div className="flex items-center justify-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  20. November 2024
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  4 Min. Lesezeit
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  AVYTA Team
                </span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="max-w-4xl mx-auto mb-12">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&h=600&fit=crop"
                alt="Seniorin mit Pflegerin"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto prose prose-lg prose-slate">
              <p className="lead text-xl text-muted-foreground mb-8">
                Stürze sind eine der häufigsten Ursachen für Verletzungen im Alter. Mit einfachen 
                Maßnahmen können Sie das Sturzrisiko deutlich senken.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Warum sind Stürze so gefährlich?</h2>
              <p className="text-muted-foreground mb-6">
                Im Alter sind Knochen oft weniger stabil, und die Heilung dauert länger. Ein Sturz 
                kann zu Knochenbrüchen führen, die die Selbstständigkeit erheblich einschränken. 
                Besonders gefürchtet ist der Oberschenkelhalsbruch.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Die Wohnung sicherer gestalten</h2>
              
              <div className="bg-muted/30 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Checkliste für ein sicheres Zuhause:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Lose Teppiche entfernen oder mit rutschfester Unterlage fixieren</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Kabel und Verlängerungen aus Laufwegen entfernen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Ausreichende Beleuchtung, besonders nachts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Haltegriffe im Bad und an Treppen installieren</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Rutschfeste Matten in Dusche und Badewanne</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Möbel so stellen, dass freie Laufwege entstehen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Häufig genutzte Gegenstände in Greifhöhe aufbewahren</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Das richtige Schuhwerk</h2>
              <p className="text-muted-foreground mb-6">
                Tragen Sie auch in der Wohnung feste, gut sitzende Schuhe mit rutschfester Sohle. 
                Vermeiden Sie Socken auf glatten Böden und offene Hausschuhe ohne Fersenriemen.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Bewegung und Training</h2>
              <p className="text-muted-foreground mb-6">
                Regelmäßige Bewegung stärkt die Muskulatur und verbessert das Gleichgewicht. 
                Schon einfache Übungen wie Aufstehen und Hinsetzen oder Gehen auf der Stelle können helfen.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Medikamente überprüfen</h2>
              <p className="text-muted-foreground mb-6">
                Manche Medikamente können Schwindel oder Benommenheit verursachen. Sprechen Sie mit 
                Ihrem Arzt, wenn Sie solche Nebenwirkungen bemerken.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Hilfsmittel nutzen</h2>
              <p className="text-muted-foreground mb-6">
                Gehstock, Rollator oder Greifhilfen sind keine Zeichen von Schwäche, sondern 
                sinnvolle Hilfsmittel für mehr Sicherheit im Alltag. Wir beraten Sie gerne, 
                welche Hilfsmittel für Sie geeignet sind.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Sehkraft kontrollieren</h2>
              <p className="text-muted-foreground mb-6">
                Lassen Sie Ihre Augen regelmäßig untersuchen und tragen Sie die passende Brille. 
                Gutes Sehen ist entscheidend, um Hindernisse rechtzeitig zu erkennen.
              </p>

              {/* CTA Box */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-12">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Individuelle Beratung zur Sturzprophylaxe
                </h3>
                <p className="text-muted-foreground mb-6">
                  Wir analysieren Ihr Zuhause auf Sturzgefahren und geben praktische Tipps für mehr Sicherheit.
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

export default SturzprophylaxeTipps;
