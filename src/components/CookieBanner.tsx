import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cookie, Settings, X } from "lucide-react";

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
};

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay showing banner for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (consent: CookieConsent) => {
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setIsVisible(false);
    
    // Dispatch event for other components to react
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: consent }));
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    });
  };

  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    });
  };

  const savePreferences = () => {
    saveConsent({
      necessary: true,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
      timestamp: Date.now(),
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:p-6 pointer-events-none">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm pointer-events-auto"
        onClick={() => {}}
      />
      
      {/* Banner */}
      <div className="relative w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl pointer-events-auto animate-in slide-in-from-bottom-4 duration-500">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-display font-semibold text-foreground mb-1">
                Cookie-Einstellungen
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                Einige sind notwendig, andere helfen uns, die Website zu verbessern.
              </p>
            </div>
          </div>

          {/* Details section */}
          {showDetails && (
            <div className="mb-6 space-y-4 p-4 bg-muted/50 rounded-xl">
              {/* Necessary cookies - always on */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground text-sm">Notwendige Cookies</p>
                  <p className="text-xs text-muted-foreground">
                    Erforderlich für die Grundfunktionen der Website
                  </p>
                </div>
                <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  Immer aktiv
                </div>
              </div>

              {/* Analytics cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground text-sm">Analyse-Cookies</p>
                  <p className="text-xs text-muted-foreground">
                    Helfen uns zu verstehen, wie Besucher die Website nutzen
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-background after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>

              {/* Marketing cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground text-sm">Marketing-Cookies</p>
                  <p className="text-xs text-muted-foreground">
                    Werden verwendet, um relevante Werbung anzuzeigen
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-background after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            {showDetails ? (
              <>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowDetails(false)}
                >
                  Zurück
                </Button>
                <Button
                  className="flex-1"
                  onClick={savePreferences}
                >
                  Auswahl speichern
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={acceptNecessary}
                >
                  Nur notwendige
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowDetails(true)}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Einstellungen
                </Button>
                <Button
                  className="flex-1"
                  onClick={acceptAll}
                >
                  Alle akzeptieren
                </Button>
              </>
            )}
          </div>

          {/* Privacy link */}
          <p className="text-xs text-muted-foreground text-center mt-4">
            Mehr erfahren Sie in unserer{" "}
            <Link to="/datenschutz" className="text-primary hover:underline">
              Datenschutzerklärung
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
