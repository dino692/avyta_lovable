import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <>
      <Helmet>
        <title>Datenschutz | AVYTA Pflegegesellschaft mbH</title>
        <meta name="description" content="Datenschutzerklärung der AVYTA Pflegegesellschaft mbH - Informationen zum Umgang mit Ihren personenbezogenen Daten." />
      </Helmet>
      <Header />
      <main className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
              Datenschutzerklärung
            </h1>
            
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  1. Datenschutz auf einen Blick
                </h2>
                <h3 className="text-lg font-semibold text-foreground mb-2">Allgemeine Hinweise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                  Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                  denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  2. Verantwortliche Stelle
                </h2>
                <div className="text-muted-foreground space-y-1">
                  <p className="font-semibold text-foreground">AVYTA Pflegegesellschaft mbH</p>
                  <p>Musterstraße 123</p>
                  <p>60311 Frankfurt am Main</p>
                  <p className="mt-2">Telefon: 069 153 914 05</p>
                  <p>E-Mail: info@avyta-pflege.de</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  3. Datenerfassung auf dieser Website
                </h2>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und 
                  richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die 
                  Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem 
                  Endgerät gespeichert.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Kontaktformular</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                  wir nicht ohne Ihre Einwilligung weiter.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Server-Log-Dateien</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                  Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp 
                  und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden 
                  Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  4. Ihre Rechte
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck 
                  Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, 
                  die Berichtigung oder Löschung dieser Daten zu verlangen.
                </p>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                  <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  5. Analyse-Tools und Werbung
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. 
                  Das geschieht vor allem mit sogenannten Analyseprogrammen. Detaillierte Informationen 
                  zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  6. SSL- bzw. TLS-Verschlüsselung
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher 
                  Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie 
                  daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an 
                  dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  7. Widerruf Ihrer Einwilligung zur Datenverarbeitung
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
                  Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit 
                  der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  8. Beschwerderecht bei der zuständigen Aufsichtsbehörde
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei 
                  einer Aufsichtsbehörde zu. Das Beschwerderecht besteht unbeschadet anderweitiger 
                  verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  9. Aktualität und Änderung dieser Datenschutzerklärung
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand: Dezember 2024. 
                  Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher 
                  bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
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

export default Datenschutz;
