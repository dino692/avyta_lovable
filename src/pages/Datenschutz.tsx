import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <>
      <Helmet>
        <title>Datenschutz | AVYTA Pflegegesellschaft mbH</title>
        <meta name="description" content="Datenschutzerklärung der AVYTA Pflegegesellschaft mbH - Informationen zum Umgang mit Ihren personenbezogenen Daten." />
        <meta property="og:title" content="Datenschutz | AVYTA Pflegegesellschaft mbH" />
        <meta property="og:description" content="Datenschutzerklärung der AVYTA Pflegegesellschaft mbH - Informationen zum Umgang mit Ihren personenbezogenen Daten." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <link rel="canonical" href="https://www.avyta.de/datenschutz" />
      </Helmet>
      <Header />
      <main className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
              Datenschutzerklärung
            </h1>
            
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 space-y-8">
              {/* Allgemein */}
              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Allgemein
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Als Betreiber dieser Webseite und als Unternehmen kommen wir mit Ihren personenbezogenen Daten in Kontakt. Gemeint sind alle Daten, die etwas über Sie aussagen und mit denen Sie identifiziert werden können. In dieser Datenschutzerklärung möchten wir Ihnen erläutern, in welcher Weise, zu welchem Zweck und auf welcher rechtlichen Grundlage wir Ihre Daten verarbeiten.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Für die Datenverarbeitung auf dieser Webseite und in unserem Unternehmen ist verantwortlich:
                </p>
                <div className="text-muted-foreground space-y-1">
                  <p className="font-semibold text-foreground">Avyta Pflegegesellschaft mbH</p>
                  <p>Allerheiligentor 2-4</p>
                  <p>60311 Frankfurt</p>
                  <p className="mt-2">Telefon: 069/15391405</p>
                  <p>E-Mail: info@avyta.de</p>
                </div>
              </section>

              {/* Allgemeine Hinweise */}
              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Allgemeine Hinweise
                </h2>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wenn Sie Ihre Daten auf Webseiten eingeben, Online-Bestellungen aufgeben oder E-Mails über das Internet verschicken, müssen Sie immer damit rechnen, dass unberechtigte Dritte auf Ihre Daten zugreifen. Einen vollständigen Schutz vor solchen Zugriffen gibt es nicht. Wir setzen jedoch alles daran, Ihre Daten bestmöglich zu schützen und die Sicherheitslücken zu schließen, soweit es uns möglich ist.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ein wichtiger Schutzmechanismus ist die SSL- bzw. TLS-Verschlüsselung unserer Webseite, die dafür sorgt, dass Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden können. Sie erkennen die Verschlüsselung an dem Schloss-Icon vor der eingegebenen Internetadresse in Ihrem Browser und daran, dass unsere Internetadresse mit https:// beginnt und nicht mit http://.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Wie lange speichern wir Ihre Daten?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  An manchen Stellen in dieser Datenschutzerklärung informieren wir Sie darüber, wie lange wir oder die Unternehmen, die Ihre Daten in unserem Auftrag verarbeiten, Ihre Daten speichern. Fehlt eine solche Angabe, speichern wir Ihre Daten, bis der Zweck der Datenverarbeitung entfällt, Sie der Datenverarbeitung widersprechen oder Sie Ihre Einwilligung in die Datenverarbeitung widerrufen.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Im Falle eines Widerspruchs oder Widerrufs dürfen wir Ihre Daten allerdings weiterverarbeiten, wenn mindestens eine der folgenden Voraussetzungen vorliegt:
                </p>
                <ul className="text-muted-foreground list-disc list-inside space-y-2 mb-4">
                  <li>Wir haben zwingende schutzwürdige Gründe für die Fortsetzung der Datenverarbeitung, die Ihre Interessen, Rechte und Freiheiten überwiegen (nur bei Widerspruch gegen die Datenverarbeitung; wenn sich der Widerspruch gegen Direktwerbung richtet, können wir keine schutzwürdigen Gründe vorbringen).</li>
                  <li>Die Datenverarbeitung ist erforderlich, um Rechtsansprüche geltend zu machen, auszuüben oder zu verteidigen (gilt nicht, wenn sich Ihr Widerspruch gegen Direktwerbung richtet).</li>
                  <li>Wir sind gesetzlich verpflichtet, Ihre Daten aufzubewahren.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In diesem Fall löschen wir Ihre Daten, sobald die Voraussetzung(en) entfällt bzw. entfallen.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Datenweitergabe in die USA</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wir nutzen auf unserer Webseite auch Tools von Unternehmen, die Ihre Daten in die USA übermitteln und dort speichern und ggf. weiterverarbeiten. Die Europäische Kommission hat einen Angemessenheitsbeschluss für den Datenschutzrahmen EU-USA angenommen. Dadurch wird festgestellt, dass die USA ein angemessenes Schutzniveau für personenbezogene Daten aus der EU gewährleisten, die an US-Unternehmen übermittelt werden.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Eine Liste aller zertifizierten Unternehmen können Sie unter folgendem Link einsehen:{" "}
                  <a href="https://www.dataprivacyframework.gov/s/participant-search" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://www.dataprivacyframework.gov/s/participant-search
                  </a>
                </p>
              </section>

              {/* Ihre Rechte */}
              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Ihre Rechte
                </h2>

                <h3 className="text-lg font-semibold text-foreground mb-2">Widerspruch gegen die Datenverarbeitung</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 uppercase text-sm">
                  Wenn Sie in dieser Datenschutzerklärung lesen, dass wir berechtigte Interessen für die Verarbeitung Ihrer Daten haben und diese deshalb auf Art. 6 Abs. 1 Satz 1 lit. f) DSGVO stützen, haben Sie nach Art. 21 DSGVO das Recht, Widerspruch dagegen einzulegen. Das gilt auch für ein Profiling, das auf Grundlage der genannten Vorschrift erfolgt. Voraussetzung ist, dass Sie Gründe für den Widerspruch anführen, die sich aus Ihrer besonderen Situation ergeben. Eine Begründung ist nicht erforderlich, wenn sich der Widerspruch gegen die Nutzung Ihrer Daten zur Direktwerbung richtet.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Viele Datenverarbeitungsvorgänge erfolgen auf der Grundlage Ihrer Einwilligung. Diese erteilen Sie z. B. dadurch, dass Sie bei Online-Formularen ein entsprechendes Häkchen setzen, bevor Sie das Formular versenden, oder indem Sie bestimmte Cookies zulassen, wenn Sie unsere Webseite besuchen. Sie können Ihre Einwilligung jederzeit ohne Angabe von Gründen widerrufen (Art. 7 Abs. 3 DSGVO). Ab dem Zeitpunkt des Widerrufs dürfen wir Ihre Daten dann nicht mehr verarbeiten.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Recht zur Beschwerde bei der zuständigen Aufsichtsbehörde</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wenn Sie der Auffassung sind, dass wir gegen die Datenschutzgrundverordnung (DSGVO) verstoßen, haben Sie nach Art. 77 DSGVO das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Sie können sich an eine Aufsichtsbehörde in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Ortes wenden, an dem der mutmaßliche Verstoß stattgefunden hat.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Recht auf Datenübertragbarkeit</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrages automatisiert verarbeiten, müssen wir Ihnen oder einem Dritten in einem gängigen maschinenlesbaren Format aushändigen, wenn Sie das verlangen.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Recht auf Datenauskunft, -löschung und -berichtigung</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sie haben nach Art. 15 DSGVO das Recht, unentgeltlich Auskunft darüber zu erhalten, welche personenbezogenen Daten wir von Ihnen gespeichert haben, wo die Daten herkommen, an wen wir die Daten übermitteln und zu welchem Zweck sie gespeichert werden. Sollten die Daten falsch sein, haben Sie ein Recht auf Berichtigung (Art. 16 DSGVO), unter den Voraussetzungen des Art. 17 DSGVO dürfen Sie verlangen, dass wir die Daten löschen.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Recht auf Einschränkung der Verarbeitung</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  In bestimmten Situationen können Sie nach Art. 18 DSGVO von uns verlangen, dass wir die Verarbeitung Ihrer Daten einschränken. Die Daten dürfen dann – von der Speicherung abgesehen – nur noch wie folgt verarbeitet werden:
                </p>
                <ul className="text-muted-foreground list-disc list-inside space-y-1 mb-4">
                  <li>mit Ihrer Einwilligung</li>
                  <li>zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen</li>
                  <li>zum Schutz der Rechte einer anderen natürlichen oder juristischen Person</li>
                  <li>aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaates</li>
                </ul>
              </section>

              {/* Hosting */}
              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Hosting und Content Delivery Networks (CDN)
                </h2>

                <h3 className="text-lg font-semibold text-foreground mb-2">Externes Hosting</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Unsere Website liegt auf einem Server des folgenden Anbieters für Internetdienste (Hosters):
                </p>
                <div className="text-muted-foreground space-y-1 mb-4">
                  <p className="font-semibold text-foreground">Strato AG</p>
                  <p>Otto-Ostrowski-Straße 7</p>
                  <p>10249 Berlin</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Der Hoster speichert alle Daten unserer Webseite. Dazu gehören auch alle personenbezogenen Daten, die automatisch oder durch Ihre Eingabe erfasst werden. Das können insbesondere sein: Ihre IP-Adresse, aufgerufene Seiten, Namen, Kontaktdaten und -anfragen sowie Meta- und Kommunikationsdaten.
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Datenerfassung auf dieser Website
                </h2>

                <h3 className="text-lg font-semibold text-foreground mb-2">Verwendung von Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unsere Webseite platziert Cookies auf Ihrem Gerät. Dabei handelt es sich um kleine Textdateien, mit denen unterschiedliche Zwecke verfolgt werden. Manche Cookies sind technisch notwendig, damit die Webseite überhaupt funktioniert (notwendige Cookies). Andere werden benötigt, um bestimmte Aktionen oder Funktionen auf der Site ausführen zu können (funktionale Cookies).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Session-Cookies werden nur für die Dauer einer Sitzung auf Ihrem Gerät gespeichert. Sobald Sie den Browser schließen, verschwinden sie also von selbst. Permanent-Cookies bleiben dagegen auf Ihrem Gerät, wenn Sie sie nicht selbst löschen.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wenn Sie Cookies deaktivieren bzw. nicht zulassen, kann die Funktionalität der Webseite eingeschränkt sein.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Einwilligung in die Nutzung von Cookies</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Damit unsere Webseite ordnungsgemäß funktioniert, verwenden wir Cookies. Um Ihre gültige Zustimmung zur Verwendung und Speicherung von Cookies in dem Browser, den Sie für den Zugriff auf unsere Webseite verwenden, zu erhalten und dies ordnungsgemäß zu dokumentieren, verwenden wir eine Zustimmungsmanagement-Plattform: CookieFirst. Diese Technologie wird von Digital Data Solutions BV, Plantage Middenlaan 42a, 1018 DH, Amsterdam, Niederlande, bereitgestellt. Webseite: <a href="https://cookiefirst.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://cookiefirst.com</a> bezeichnet als CookieFirst.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wenn Sie auf unsere Webseite zugreifen, wird eine Verbindung mit dem Server von CookieFirst hergestellt, um uns die Möglichkeit zu geben, von Ihnen eine gültige Zustimmung zur Nutzung bestimmter Cookies zu erhalten. CookieFirst speichert dann einen Cookie in Ihrem Browser, um nur die Cookies aktivieren zu können, in die Sie eingewilligt haben, und um dies ordnungsgemäß zu dokumentieren. Die verarbeiteten Daten werden so lange gespeichert, bis die vorgegebene Speicherfrist abläuft oder Sie die Löschung der Daten verlangen. Abweichend hiervon können bestimmte gesetzliche Aufbewahrungsfristen gelten.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  CookieFirst dient der Einholung der gesetzlich vorgeschriebenen Einwilligung zur Nutzung von Cookies. Rechtsgrundlage hierfür ist Artikel 6 Absatz 1 Buchstabe c der Datenschutzgrundverordnung (DSGVO).
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Datenverarbeitungsvertrag</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wir haben mit CookieFirst einen Vertrag zur Datenverarbeitung abgeschlossen. Dabei handelt es sich um einen datenschutzrechtlich erforderlichen Vertrag, der sicherstellt, dass die Daten unserer Webseiten-Besucher nur nach unseren Weisungen und in Übereinstimmung mit der DSGVO verarbeitet werden.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Server-Protokolldateien</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Unsere Webseite und CookieFirst erheben und speichern automatisch Informationen in so genannten Server Log Files, die Ihr Browser automatisch an uns übermittelt. Folgende Daten werden erhoben:
                </p>
                <ul className="text-muted-foreground list-disc list-inside space-y-1 mb-4">
                  <li>Ihr Einwilligungsstatus bzw. der Widerruf Ihrer Einwilligung</li>
                  <li>Ihre anonymisierte IP-Adresse</li>
                  <li>Informationen über Ihren Browser</li>
                  <li>Informationen über Ihr Gerät</li>
                  <li>Das Datum und die Uhrzeit Ihres Besuchs auf unserer Webseite</li>
                  <li>Die URL der Webseite, auf der Sie Ihre Einwilligungseinstellungen gespeichert oder aktualisiert haben</li>
                  <li>Der ungefähre Standort des Nutzers, der seine Einwilligungspräferenzen gespeichert hat</li>
                  <li>Ein universell eindeutiger Bezeichner (UUID) des Webseiten-Besuchers, der das Banner Cookie angeklickt hat</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mb-2">Server-Log-Dateien</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Server-Log-Dateien protokollieren alle Anfragen und Zugriffe auf unsere Webseite und halten Fehlermeldungen fest. Sie umfassen auch personenbezogene Daten, insbesondere Ihre IP-Adresse. Die Dateien enthalten die folgenden Daten:
                </p>
                <ul className="text-muted-foreground list-disc list-inside space-y-1 mb-4">
                  <li>Browsertyp und -version</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer-URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse (ggf. anonymisiert)</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mb-2">Kontaktformular</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sie können uns über das Kontaktformular auf dieser Webseite eine Nachricht zukommen lassen. Wir speichern Ihre Nachricht und die Angaben aus dem Formular, um Ihre Anfrage inklusive Anschlussfragen bearbeiten zu können. Ohne Ihre Einwilligung geben wir die Daten nicht an andere Personen weiter.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Anfrage per E-Mail, Telefon oder Telefax</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sie können uns per E-Mail oder Telefax eine Nachricht zukommen lassen oder uns anrufen. Wir speichern Ihre Nachricht sowie Ihre selbst gemachten Kontaktangaben bzw. die übermittelte Telefonnummer, um Ihre Anfrage inklusive Anschlussfragen bearbeiten zu können.
                </p>
              </section>

              {/* WhatsApp */}
              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Kommunikation via WhatsApp
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Was ist WhatsApp?</strong> Instant-Messaging-Dienst
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Wer verarbeitet Ihre Daten?</strong> WhatsApp Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Für die Kommunikation mit unseren Kunden und anderen Personen außerhalb unseres Unternehmens nutzen wir den Instant-Messaging-Dienst WhatsApp in der Variante „WhatsApp Business". Die Kommunikation erfolgt über eine Ende-zu-Ende-Verschlüsselung (Peer-to-Peer).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Weitere Informationen:{" "}
                  <a href="https://www.whatsapp.com/legal/#privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://www.whatsapp.com/legal/#privacy-policy
                  </a>
                </p>
              </section>

              {/* Zoho CRM */}
              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Zoho CRM
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Was ist Zoho CRM?</strong> Plattform für das Customer Relationship Management (CRM), also das Management von Kundenbeziehungen in den Bereichen Marketing, Vertrieb und Service
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Wer verarbeitet Ihre Daten?</strong> Zoho Corporation Pvt. Ltd., Estancia IT Park, Plot No. 140 151, GST Road, Vallancherry Village, Chengalpattu Taluk, Kanchipuram District 603 202, Indien
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wir nutzen das CRM Zoho, um Kundeninteraktionen über E-Mail, Social Media und Telefon über verschiedene Kanäle hinweg zu erfassen, zu sortieren und zu analysieren.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Weitere Informationen:{" "}
                  <a href="https://www.zoho.com/privacy.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://www.zoho.com/privacy.html
                  </a>
                </p>
              </section>

              {/* Social Media Plugins */}
              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Social-Media-Plugins
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wir setzen auf unserer Webseite Social-Media-Plugins ein. Sie erkennen diese an den Logos der sozialen Netzwerke. Dank der Plugins können Sie die Inhalte auf unserer Webseite leicht in sozialen Netzwerken teilen.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aufgrund der eingebetteten Plugins wird eine Verbindung zu den Servern der sozialen Netzwerke hergestellt, wenn Sie unsere Webseite besuchen. Die anbietenden Unternehmen erfahren auf diese Weise, dass die Webseite über Ihre IP-Adresse besucht wurde.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Welche Social-Media-Plugins nutzen wir?</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong>Facebook:</strong> Meta Platforms Ireland Ltd., 4 Grand Canal Square, Dublin 2, Irland</li>
                  <li><strong>X (Twitter):</strong> Twitter International Unlimited Company, One Cumberland Place, Fenian Street, Dublin 2, Irland</li>
                  <li><strong>Instagram:</strong> Meta Platforms Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland</li>
                  <li><strong>LinkedIn:</strong> LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Irland</li>
                </ul>
              </section>

              {/* Analyse-Tools */}
              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Analyse-Tools und Werbung
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wir nutzen die folgenden Tools, um das Verhalten unserer Webseitenbesucher zu analysieren und Ihnen Werbung zu zeigen.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Google Tag Manager</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Wer verarbeitet Ihre Daten?</strong> Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wir setzen den Google Tag Manager ein. Das Tool hilft uns, Trackingcodes und Conversionspixel in unsere Webseite einzubinden, sie zu verwalten und auszuspielen.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Google Analytics</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Wer verarbeitet Ihre Daten?</strong> Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wir sind stets daran interessiert, unser Webangebot für die Besucher unserer Webseite zu optimieren und Werbung optimal zu platzieren. Dabei hilft uns Google Analytics.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sie können verhindern, dass Google Ihre Daten verarbeitet, indem Sie ein Browser-Plugin installieren:{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://tools.google.com/dlpage/gaoptout?hl=de
                  </a>
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Google Ads</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Wer verarbeitet Ihre Daten?</strong> Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wir nutzen Google Ads. Das Werbeprogramm von Google ermöglicht uns, Werbeanzeigen in der Google-Suchmaschine oder auf Drittwebseiten auszuspielen.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Google Ads Remarketing</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Remarketing ist eine Funktion des Online-Marketings, bei der Werbung an Benutzer ausgespielt wird, die bereits mit einer Website interagiert haben. Sie können die Werbeeinstellungen in Ihrem Google-Account anpassen:{" "}
                  <a href="https://www.google.com/settings/ads/onweb/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://www.google.com/settings/ads/onweb/
                  </a>
                </p>
              </section>

              {/* Newsletter */}
              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Newsletter
                </h2>

                <h3 className="text-lg font-semibold text-foreground mb-2">HubSpot</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Was ist HubSpot?</strong> HubSpot ist eine CRM-Plattform für Marketing, Vertrieb und Kundenservice, die wir für die Verwaltung unserer Newsletter-Abonnenten nutzen.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Wer verarbeitet Ihre Daten?</strong> HubSpot, Inc., 25 First Street, 2nd Floor, Cambridge, MA 02141, USA (zertifiziert unter dem EU-US Data Privacy Framework)
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wenn Sie sich für unseren Newsletter anmelden, werden Ihre E-Mail-Adresse und Ihr Name an HubSpot übermittelt und dort gespeichert. HubSpot ermöglicht uns die Verwaltung unserer Newsletter-Abonnenten, den Versand von Newslettern sowie die Analyse des Öffnungs- und Klickverhaltens.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Welche Daten werden gespeichert?</strong> E-Mail-Adresse, Name, Anmeldedatum, Interaktionsdaten (z.B. Öffnungen, Klicks).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a) DSGVO (Einwilligung). Sie können Ihre Einwilligung jederzeit durch Klick auf den Abmeldelink in jedem Newsletter oder durch eine E-Mail an info@avyta.de widerrufen.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Weitere Informationen:{" "}
                  <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://legal.hubspot.com/privacy-policy
                  </a>
                </p>
              </section>

              {/* YouTube */}
              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  YouTube (mit erweitertem Datenschutz)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Was ist YouTube?</strong> Videoplattform
                </p>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Wer verarbeitet Ihre Daten?</strong> Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Auf unserer Webseite können Sie sich YouTube-Videos anschauen. Dabei erhebt und speichert Google als Anbieter von YouTube bestimmte Informationen über Sie. Da wir YouTube im erweiterten Datenschutzmodus nutzen, geschieht das allerdings erst dann, wenn Sie ein Video starten.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Weitere Informationen:{" "}
                  <a href="https://www.youtube.com/intl/ALL_de/howyoutubeworks/our-commitments/protecting-user-data/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    YouTube Datenschutz
                  </a>
                </p>
              </section>

              {/* Cloud-Speicher */}
              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Cloud-Speicher
                </h2>

                <h3 className="text-lg font-semibold text-foreground mb-2">OneDrive</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Wer verarbeitet Ihre Daten?</strong> Microsoft Corp., One Microsoft Way, Redmond, WA 98052-6399, USA
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Auf unserer Webseite können Sie Dateien hochladen. Dafür setzen wir den Cloud-Speicher OneDrive ein.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Google Drive</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Wer verarbeitet Ihre Daten?</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Auf unserer Webseite können Sie Dateien hochladen. Dafür setzen wir den Cloud-Speicher Google Drive ein.
                </p>
              </section>

              {/* Bewerberdaten */}
              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Umgang mit Bewerberdaten
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wenn Sie für uns arbeiten möchten, nehmen wir gern Ihre Bewerbung entgegen. Alle übermittelten personenbezogenen Daten behandeln wir streng vertraulich.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Alle Daten, die wir im Rahmen des Bewerbungsprozesses erheben, speichern wir und nutzen sie, soweit dies zur Entscheidung über die Begründung eines Beschäftigungsverhältnisses erforderlich ist.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wenn wir Ihnen kein Stellenangebot machen können, Sie ein Stellenangebot ablehnen oder Ihre Bewerbung zurückziehen, behalten wir uns das Recht vor, Ihre Unterlagen und sonstigen Bewerbungsdaten nach der Beendigung des Bewerbungsverfahrens noch bis zu 6 Monate aufzubewahren.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ihre Bewerberdaten verarbeiten wir auf der Grundlage von § 26 BDSG-neu (Anbahnung eines Beschäftigungsverhältnisses) und Art. 6 Abs. 1 lit. b) DSGVO (allgemeine Vertragsanbahnung).
                </p>
              </section>

              {/* Social Media Datenverarbeitung */}
              <section>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Datenverarbeitung auf Social Media
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mit Social Media meinen wir die sozialen Netzwerke, auf den wir öffentlich zugängliche Profile angelegt haben.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Die Betreiber sozialer Netzwerke sind in der Regel dazu in der Lage, umfassende Daten über das Verhalten von Besuchern und Nutzern des Netzwerks zu erfassen und auszuwerten.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Welche Sozialen Medien nutzen wir?</h3>
                <ul className="text-muted-foreground space-y-3">
                  <li>
                    <strong>Facebook:</strong> Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland
                    <br />
                    <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                      Datenschutz bei Facebook
                    </a>
                  </li>
                  <li>
                    <strong>Twitter/X:</strong> Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA
                    <br />
                    <a href="https://twitter.com/de/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                      Datenschutz bei Twitter
                    </a>
                  </li>
                  <li>
                    <strong>Instagram:</strong> Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland
                    <br />
                    <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                      Datenschutz bei Instagram
                    </a>
                  </li>
                  <li>
                    <strong>LinkedIn:</strong> LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Ireland
                    <br />
                    <a href="https://de.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                      Datenschutz bei LinkedIn
                    </a>
                  </li>
                  <li>
                    <strong>YouTube:</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland
                    <br />
                    <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                      Datenschutz bei YouTube
                    </a>
                  </li>
                  <li>
                    <strong>TikTok:</strong> TikTok Technology Limited, 10 Earlsfort Terrace, Dublin, D02 T380, Irland
                    <br />
                    <a href="https://www.tiktok.com/legal/privacy-policy-eea?lang=de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                      Datenschutz bei TikTok
                    </a>
                  </li>
                </ul>
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