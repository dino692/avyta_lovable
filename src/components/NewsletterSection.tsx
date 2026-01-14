import { useState } from "react";
import { BookOpen, ArrowRight, CheckCircle, Download, Loader2, Sparkles, Gift } from "lucide-react";
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
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/[0.03] to-accent/[0.05]" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-full border border-primary/20 mb-8 shadow-lg">
                <Gift className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Kostenloser Ratgeber</span>
              </div>
              
              {/* Icon with 3D effect */}
              <div className="relative w-24 h-24 mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-xl opacity-40" />
                <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-xl bg-accent flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                Ratgeber für{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">pflegende Angehörige</span>
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Laden Sie jetzt unseren umfassenden Pflege-Ratgeber herunter und erhalten Sie 
                wertvolle Tipps für den Pflegealltag – kompakt und verständlich zusammengefasst.
              </p>

              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                Das erwartet Sie im Ratgeber:
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li 
                    key={benefit} 
                    className="flex items-start gap-4 group"
                  >
                    <div className="relative">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div className="absolute inset-0 rounded-lg bg-primary/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-muted-foreground text-lg group-hover:text-foreground transition-colors leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="relative">
              {/* Card glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 rounded-[3rem] blur-3xl opacity-40" />
              
              <div className="relative bg-card/90 backdrop-blur-2xl rounded-[2rem] p-10 lg:p-12 shadow-2xl border border-border/50">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-[4rem]" />
                
                {isSubmitted ? (
                  <div className="text-center py-10 relative">
                    <div className="relative w-28 h-28 mx-auto mb-8">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-xl opacity-50 animate-pulse" />
                      <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
                        <Download className="w-14 h-14 text-white" />
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-3xl text-foreground mb-4">
                      Vielen Dank!
                    </h3>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      Der Ratgeber wurde an Ihre E-Mail-Adresse gesendet. 
                      Bitte überprüfen Sie auch Ihren Spam-Ordner.
                    </p>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 hover:bg-primary/5 rounded-full px-8"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Nochmal herunterladen
                    </Button>
                  </div>
                ) : (
                  <div className="relative">
                    <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-3">
                      Jetzt kostenlos herunterladen
                    </h3>
                    <p className="text-muted-foreground text-lg mb-8">
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
                          className="h-14 text-lg border-2 border-border focus:border-primary bg-background/50 backdrop-blur-sm placeholder:text-muted-foreground/60 rounded-xl"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Ihre E-Mail-Adresse *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="h-14 text-lg border-2 border-border focus:border-primary bg-background/50 backdrop-blur-sm placeholder:text-muted-foreground/60 rounded-xl"
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
                        className="w-full h-16 text-lg bg-gradient-to-r from-primary via-primary to-accent hover:opacity-90 text-white shadow-xl hover:shadow-2xl hover:shadow-primary/20 group rounded-xl font-bold" 
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <Loader2 className="w-6 h-6 animate-spin" />
                        ) : (
                          <Download className="w-6 h-6" />
                        )}
                        <span className="ml-3">{isLoading ? "Wird gesendet..." : "Ratgeber herunterladen"}</span>
                        {!isLoading && (
                          <div className="w-8 h-8 ml-3 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        )}
                      </Button>
                    </form>

                    <p className="text-sm text-muted-foreground mt-8 text-center leading-relaxed">
                      Mit dem Absenden stimmen Sie unserer{" "}
                      <a href="/datenschutz" className="text-primary hover:underline font-medium">
                        Datenschutzerklärung
                      </a>{" "}
                      zu. Kein Spam, Abmeldung jederzeit möglich.
                    </p>
                  </div>
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