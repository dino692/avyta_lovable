import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookieRichtlinie = () => {
  return (
    <>
      <Helmet>
        <title>Cookie-Richtlinie | AVYTA Pflegedienst Frankfurt</title>
        <meta name="description" content="Cookie-Richtlinie der AVYTA Pflegegesellschaft mbH. Informationen zur Verwendung von Cookies auf unserer Website." />
        <link rel="canonical" href="https://www.avyta.de/cookie-richtlinie" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Cookie-Richtlinie
            </h1>
            <div className="prose prose-lg max-w-none">
              <div id="cookiefirst-policy-page"></div>
              <div className="mt-8 text-sm text-muted-foreground">
                Diese Cookie-Richtlinie wurde erstellt und aktualisiert von der Firma{" "}
                <a
                  href="https://cookiefirst.com/de/cookie-banner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Cookie Banner Tool - CookieFirst
                </a>.
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-16 mb-8">
              Cookie-Übersicht
            </h2>
            <div className="prose prose-lg max-w-none">
              <div id="cookiefirst-cookies-table"></div>
              <div className="mt-8 text-sm text-muted-foreground">
                Diese Cookie-Tabelle wurde erstellt und aktualisiert von der{" "}
                <a
                  href="https://cookiefirst.com/de/consent-manager/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Consent Manager - CookieFirst
                </a>.
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CookieRichtlinie;
