import { useState } from "react";
import { BookOpen, ArrowRight, CheckCircle, Download, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const benefits = [
  "Checkliste: Erste Schritte bei Pflegebedürftigkeit",
  "So beantragen Sie den richtigen Pflegegrad",
  "Welche Leistungen Ihnen zustehen",
  "Tipps zur Entlastung pflegender Angehöriger",
  "Wichtige Kontakte und Anlaufstellen",
];

const NewsletterSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", website: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("hubspot-newsletter", {
        body: { email: formData.email, name: formData.name, website: formData.website },
      });

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({ name: "", email: "", website: "" });
      toast.success("Erfolgreich angemeldet!");
    } catch (error) {
      console.error("Newsletter signup error:", error);
      toast.error("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
      
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6 shadow-lg">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Kostenloser Ratgeber</span>
              </div>
              
              <div className="w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Ratgeber für <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">pflegende Angehörige</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Laden Sie jetzt unseren umfassenden Pflege-Ratgeber herunter und erhalten Sie 
                wertvolle Tipps für den Pflegealltag – kompakt und verständlich zusammengefasst.
              </p>

              <h3 className="font-display font-bold text-lg text-foreground mb-5">
                Das erwartet Sie im Ratgeber:
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li 
                    key={benefit} 
                    className="flex items-start gap-4 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="relative">
              {/* Card glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[2rem] blur-2xl opacity-50" />
              
              <div className="relative bg-card/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-border/50">
                {isSubmitted ? (
                  <div className="text-center py-10">
                    <div className="relative w-24 h-24 mx-auto mb-8">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50" />
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Download className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-3xl text-foreground mb-4">
                      Vielen Dank!
                    </h3>
                    <p className="text-muted-foreground text-lg mb-8">
                      Der Ratgeber wurde an Ihre E-Mail-Adresse gesendet. 
                      Bitte überprüfen Sie auch Ihren Spam-Ordner.
                    </p>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 hover:bg-primary/5"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Nochmal herunterladen
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                      Jetzt kostenlos herunterladen
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      Tragen Sie Ihre Daten ein und erhalten Sie den Ratgeber direkt per E-Mail.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <Input
                          type="text"
                          placeholder="Ihr vollständiger Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-14 text-lg border-2 border-border focus:border-primary bg-background/50 backdrop-blur-sm placeholder:text-muted-foreground/60"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Ihre E-Mail-Adresse *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="h-14 text-lg border-2 border-border focus:border-primary bg-background/50 backdrop-blur-sm placeholder:text-muted-foreground/60"
                        />
                      </div>
                      {/* Honeypot */}
                      <div className="absolute left-[-9999px]" aria-hidden="true">
                        <Input
                          type="text"
                          name="website"
                          tabIndex={-1}
                          autoComplete="off"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        />
                      </div>
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full h-14 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-xl group" 
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <Loader2 className="w-6 h-6 animate-spin" />
                        ) : (
                          <Download className="w-6 h-6" />
                        )}
                        {isLoading ? "Wird gesendet..." : "Ratgeber herunterladen"}
                        {!isLoading && <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
                      </Button>
                    </form>

                    <p className="text-sm text-muted-foreground mt-6 text-center">
                      Mit dem Absenden stimmen Sie unserer{" "}
                      <a href="/datenschutz" className="text-primary hover:underline font-medium">
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
      </div>
    </section>
  );
};

export default NewsletterSection;
