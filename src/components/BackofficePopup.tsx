import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Share2, X, ClipboardCopy, CheckCircle2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const TASKS = [
  "Koordination von Pflegeeinsätzen & Tourenplanung",
  "Kommunikation mit Krankenkassen & Kostenträgern",
  "Erstellung und Prüfung von Pflegeverträgen",
  "Abrechnung von Pflegeleistungen (SGB V & XI)",
  "Personalverwaltung & Dienstplanunterstützung",
  "Telefon- und E-Mail-Korrespondenz mit Patienten & Angehörigen",
  "Dokumentenmanagement & Qualitätssicherung",
  "Unterstützung bei MDK-Prüfungen & Audits",
];

const SHARE_URL = "https://www.avyta.de/karriere/backoffice-frankfurt";
const SHARE_TEXT = "AVYTA Pflegedienst sucht Verstärkung im Backoffice! Verwaltungskraft (m/w/d) gesucht – Jetzt bewerben:";

const BackofficePopup = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("backoffice-popup-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
      sessionStorage.setItem("backoffice-popup-dismissed", "true");
    }
    setOpen(isOpen);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${SHARE_TEXT} ${SHARE_URL}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const shareLinks = [
    {
      name: "WhatsApp",
      url: `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${SHARE_URL}`)}`,
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}&quote=${encodeURIComponent(SHARE_TEXT)}`,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SHARE_URL)}`,
      color: "bg-blue-700 hover:bg-blue-800",
    },
    {
      name: "E-Mail",
      url: `mailto:?subject=${encodeURIComponent("Stellenangebot: Backoffice bei AVYTA Pflegedienst")}&body=${encodeURIComponent(`${SHARE_TEXT}\n\n${SHARE_URL}`)}`,
      color: "bg-muted hover:bg-muted/80",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-primary flex items-center gap-2">
            🏢 Verstärkung im Backoffice gesucht!
          </DialogTitle>
          <DialogDescription className="text-base text-foreground/80 pt-2">
            Wir suchen eine engagierte <strong className="text-foreground">Verwaltungskraft (m/w/d)</strong> für unser Pflegedienst-Büro in Frankfurt.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <p className="font-semibold text-sm text-foreground mb-2">Ihre Aufgaben bei uns:</p>
            <ul className="space-y-1.5">
              {TASKS.map((task, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="text-primary mt-0.5 shrink-0">✓</span>
                  {task}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Button asChild className="flex-1">
              <a href="/karriere">Jetzt bewerben</a>
            </Button>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex-1 gap-2">
                  <Share2 className="h-4 w-4" />
                  Teilen
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-3" align="center">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-foreground/70 mb-2">Stellenanzeige teilen:</p>
                  {shareLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center text-sm text-white rounded-md py-2 px-3 transition-colors ${link.color}`}
                    >
                      {link.name}
                    </a>
                  ))}
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center justify-center gap-2 w-full text-sm text-foreground border rounded-md py-2 px-3 hover:bg-muted transition-colors"
                  >
                    {copied ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <ClipboardCopy className="h-4 w-4" />}
                    {copied ? "Kopiert!" : "Link kopieren"}
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BackofficePopup;
