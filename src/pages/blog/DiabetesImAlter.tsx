import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User, Stethoscope, AlertTriangle } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";

const DiabetesImAlter = () => {
  return (
    <>
      <Helmet>
        <title>Diabetes im Alter: Worauf Sie achten sollten | AVYTA Blog</title>
        <meta name="description" content="Wichtige Informationen zur Diabetesversorgung für Senioren und ihre Angehörigen. Tipps für den Alltag und professionelle Unterstützung." />
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-medium mb-6">
                <Stethoscope className="w-4 h-4" />
                Gesundheit
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Diabetes im Alter: Worauf Sie achten sollten
              </h1>
              <div className="flex items-center justify-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  5. Dezember 2024
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

            {/* Featured Image */}
            <div className="max-w-4xl mx-auto mb-12">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=600&fit=crop"
                alt="Blutzuckermessung"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto prose prose-lg prose-slate">
              <p className="lead text-xl text-muted-foreground mb-8">
                Diabetes mellitus ist eine der häufigsten chronischen Erkrankungen im Alter. 
                Eine gute Einstellung und regelmäßige Kontrolle sind entscheidend für Lebensqualität und Gesundheit.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Besonderheiten im Alter</h2>
              <p className="text-muted-foreground mb-6">
                Im Alter verändert sich der Stoffwechsel. Die Symptome einer Unter- oder Überzuckerung 
                können weniger deutlich sein oder anders auftreten als bei jüngeren Menschen. Zudem 
                können andere Erkrankungen und Medikamente die Diabetestherapie beeinflussen.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Warnzeichen einer Unterzuckerung</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Zittern und Schwitzen</li>
                      <li>Verwirrtheit oder Konzentrationsstörungen</li>
                      <li>Herzrasen</li>
                      <li>Schwächegefühl</li>
                      <li>Heißhunger</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Regelmäßige Blutzuckerkontrolle</h2>
              <p className="text-muted-foreground mb-6">
                Die regelmäßige Messung des Blutzuckers ist das A und O. Unsere Pflegekräfte unterstützen 
                Sie dabei, die Werte korrekt zu messen und zu dokumentieren. So können Schwankungen 
                frühzeitig erkannt und die Therapie angepasst werden.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Ernährung bei Diabetes</h2>
              <p className="text-muted-foreground mb-6">
                Eine ausgewogene Ernährung ist bei Diabetes besonders wichtig:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Regelmäßige Mahlzeiten zu festen Zeiten</li>
                <li>Bevorzugung von Vollkornprodukten</li>
                <li>Viel Gemüse und Ballaststoffe</li>
                <li>Vermeidung von Zucker und Weißmehlprodukten</li>
                <li>Ausreichend Flüssigkeit (mindestens 1,5 Liter täglich)</li>
              </ul>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Fußpflege nicht vergessen</h2>
              <p className="text-muted-foreground mb-6">
                Diabetiker haben ein erhöhtes Risiko für Fußprobleme. Tägliche Kontrolle der Füße auf 
                Verletzungen, Druckstellen oder Verfärbungen ist wichtig. Professionelle Fußpflege 
                sollte regelmäßig in Anspruch genommen werden.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Medikamente richtig einnehmen</h2>
              <p className="text-muted-foreground mb-6">
                Ob Tabletten oder Insulin – die korrekte Einnahme der Medikamente ist entscheidend. 
                Unsere Pflegekräfte unterstützen bei der Medikamentengabe und achten auf die richtigen 
                Zeitabstände zu den Mahlzeiten.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Bewegung im Alltag</h2>
              <p className="text-muted-foreground mb-6">
                Regelmäßige Bewegung senkt den Blutzucker und verbessert die Insulinempfindlichkeit. 
                Schon kurze Spaziergänge oder leichte Gymnastik können einen positiven Effekt haben.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Unsere Spezialisierung</h2>
              <p className="text-muted-foreground mb-6">
                AVYTA ist speziell für die Betreuung von Diabetes-Patienten zertifiziert. Unsere 
                Pflegekräfte sind geschult in:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Blutzuckermessung und Dokumentation</li>
                <li>Insulininjektion</li>
                <li>Erkennung von Komplikationen</li>
                <li>Ernährungsberatung</li>
                <li>Fußpflege und -kontrolle</li>
              </ul>

              {/* CTA Box */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-12">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Professionelle Diabetesversorgung
                </h3>
                <p className="text-muted-foreground mb-6">
                  Wir unterstützen Sie bei der täglichen Diabetesversorgung. Vereinbaren Sie ein 
                  kostenloses Beratungsgespräch.
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

export default DiabetesImAlter;
