import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Seite nicht gefunden | AVYTA Pflegegesellschaft mbH</title>
        <meta name="description" content="Die angeforderte Seite wurde nicht gefunden. Kehren Sie zur Startseite zurück oder nutzen Sie unsere Navigation." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Header />
      <main className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Home className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-6xl font-display font-bold text-foreground mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-2">Seite nicht gefunden</p>
            <p className="text-muted-foreground mb-8">
              Die angeforderte Seite existiert leider nicht oder wurde verschoben.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Zur Startseite
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/kontakt">
                  Kontakt aufnehmen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
