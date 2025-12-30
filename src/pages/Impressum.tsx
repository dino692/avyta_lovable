import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <>
      <Helmet>
        <title>Impressum | AVYTA Pflegegesellschaft mbH</title>
        <meta name="description" content="Impressum der AVYTA Pflegegesellschaft mbH - Rechtliche Informationen und Kontaktdaten." />
      </Helmet>
      <Header />
      <main className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
              Impressum
            </h1>
            
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="text-muted-foreground space-y-1">
                  <p className="font-semibold text-foreground">AVYTA Pflegegesellschaft mbH</p>
                  <p>Musterstraße 123</p>
                  <p>60311 Frankfurt am Main</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Kontakt
                </h2>
                <div className="text-muted-foreground space-y-1">
                  <p>Telefon: 069 153 914 05</p>
                  <p>E-Mail: info@avyta-pflege.de</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Vertretungsberechtigte Geschäftsführung
                </h2>
                <p className="text-muted-foreground">Max Mustermann</p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Registereintrag
                </h2>
                <div className="text-muted-foreground space-y-1">
                  <p>Eintragung im Handelsregister</p>
                  <p>Registergericht: Amtsgericht Frankfurt am Main</p>
                  <p>Registernummer: HRB XXXXX</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Umsatzsteuer-ID
                </h2>
                <p className="text-muted-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE XXXXXXXXX
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Aufsichtsbehörde
                </h2>
                <div className="text-muted-foreground space-y-1">
                  <p>Hessisches Landesamt für Gesundheit und Pflege</p>
                  <p>Zuständig für die Zulassung und Überwachung von Pflegediensten</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Berufsbezeichnung und berufsrechtliche Regelungen
                </h2>
                <div className="text-muted-foreground space-y-1">
                  <p>Berufsbezeichnung: Ambulanter Pflegedienst</p>
                  <p>Zuständige Kammer: Pflegekammer Hessen (sofern vorhanden)</p>
                  <p>Verliehen in: Deutschland</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <div className="text-muted-foreground space-y-1">
                  <p className="font-semibold text-foreground">Max Mustermann</p>
                  <p>Musterstraße 123</p>
                  <p>60311 Frankfurt am Main</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Streitschlichtung
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  <br /><br />
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Haftung für Inhalte
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach 
                  den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter 
                  jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
                  oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Haftung für Links
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                  Seiten verantwortlich.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Urheberrecht
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                  Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Impressum;
