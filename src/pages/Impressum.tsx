import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";

const Impressum = () => {
  return (
    <>
      <Helmet>
        <title>Impressum | AVYTA Pflegegesellschaft mbH</title>
        <meta name="description" content="Impressum der AVYTA Pflegegesellschaft mbH - Rechtliche Informationen und Kontaktdaten." />
        <meta property="og:title" content="Impressum | AVYTA Pflegegesellschaft mbH" />
        <meta property="og:description" content="Impressum der AVYTA Pflegegesellschaft mbH - Rechtliche Informationen und Kontaktdaten." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <link rel="canonical" href="https://www.avyta.de/impressum" />
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
                  Inhaltlich Verantwortlicher
                </h2>
                <div className="text-muted-foreground space-y-1">
                  <p className="font-semibold text-foreground">Avyta Pflegegesellschaft mbH</p>
                  <p>Allerheiligentor 2-4</p>
                  <p>60311 Frankfurt am Main</p>
                  <p className="mt-3">Tel. 069 / 153 914 – 05</p>
                  <p>Fax 069 / 153 914 – 06</p>
                  <p>Email: info(at)avyta.de</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Geschäftsführer
                </h2>
                <p className="text-muted-foreground">Jasmina Müller</p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Registereintrag
                </h2>
                <p className="text-muted-foreground">Amtsgericht Frankfurt am Main HRB: 96683</p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Umsatzsteuer
                </h2>
                <p className="text-muted-foreground">
                  USt-IdNr: Umsatzsteuerbefreit gemäß § 4 Nr. 16e UStG
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Institutionskennzeichen
                </h2>
                <p className="text-muted-foreground">IK-Nr. 462645797</p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Haftung für Inhalte
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach 
                  den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Dienstanbieter 
                  jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
                  oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. 
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                  allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                  erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                  Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Haftung für Links
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                  Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                  mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                  Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten 
                  ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei 
                  Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
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
                  Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                  nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf 
                  dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
                  beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie 
                  trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen 
                  entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                  Inhalte umgehend entfernen.
                </p>
                <p className="text-muted-foreground mt-4 text-sm">
                  Quelle: www.e-recht24.de
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
