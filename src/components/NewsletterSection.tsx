import { useState } from "react";
import { BookOpen, ArrowRight, CheckCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const benefits = [
  "Checkliste: Erste Schritte bei Pflegebedürftigkeit",
  "So beantragen Sie den richtigen Pflegegrad",
  "Welche Leistungen Ihnen zustehen",
  "Tipps zur Entlastung pflegender Angehöriger",
  "Wichtige Kontakte und Anlaufstellen",
];

const NewsletterSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.name) {
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", email: "" });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="w-16 h-16 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Kostenloser Ratgeber für pflegende Angehörige
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Laden Sie jetzt unseren umfassenden Pflege-Ratgeber herunter und erhalten Sie 
                wertvolle Tipps für den Pflegealltag – kompakt und verständlich zusammengefasst.
              </p>

              <h3 className="font-display font-semibold text-foreground mb-4">
                Das erwartet Sie im Ratgeber:
              </h3>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Download className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                    Vielen Dank!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Der Ratgeber wurde an Ihre E-Mail-Adresse gesendet. 
                    Bitte überprüfen Sie auch Ihren Spam-Ordner.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Nochmal herunterladen
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    Jetzt kostenlos herunterladen
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Tragen Sie Ihre Daten ein und erhalten Sie den Ratgeber direkt per E-Mail.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Ihr Vorname *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Ihre Telefonnummer"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Ihre E-Mail-Adresse *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                    <Button type="submit" variant="hero" size="lg" className="w-full group">
                      <Download className="w-5 h-5" />
                      Ratgeber herunterladen
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <a href="/datenschutz" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    zu. Kein Spam, Abmeldung jederzeit möglich.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
