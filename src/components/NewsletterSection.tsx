import { useState, useRef, useEffect } from "react";
import { BookOpen, ArrowRight, CheckCircle, Download, Loader2, Sparkles, FileText, Shield, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const benefits = [
  { text: "Checkliste: Erste Schritte bei Pflegebedürftigkeit", icon: CheckCircle },
  { text: "So beantragen Sie den richtigen Pflegegrad", icon: FileText },
  { text: "Welche Leistungen Ihnen zustehen", icon: Gift },
  { text: "Tipps zur Entlastung pflegender Angehöriger", icon: Shield },
  { text: "Wichtige Kontakte und Anlaufstellen", icon: BookOpen },
  { text: "Häufige Fehler bei Pflegeanträgen vermeiden", icon: FileText },
];

const NewsletterSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", website: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      
      {/* Floating book icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i}s`,
            }}
          >
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-full mb-6 border border-primary/20">
              <Gift className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Kostenlos für Sie
              </span>
              <Sparkles className="w-4 h-4 text-accent" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Ihr Pflege-Ratgeber
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                  für den Alltag
                </span>
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Laden Sie jetzt unseren umfassenden Ratgeber herunter – 
              kompakt, verständlich und sofort anwendbar.
            </p>
          </div>

          <div className={`grid lg:grid-cols-5 gap-12 items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Benefits Side */}
            <div className="lg:col-span-3 space-y-6">
              {/* Benefits Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit.text}
                    onMouseEnter={() => setHoveredBenefit(index)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                    className={`group relative p-5 rounded-2xl transition-all duration-500 cursor-default ${
                      hoveredBenefit === index
                        ? 'bg-gradient-to-br from-primary to-accent text-white shadow-xl shadow-primary/20 scale-[1.02]'
                        : 'bg-card border border-border hover:border-primary/30'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        hoveredBenefit === index
                          ? 'bg-white/20'
                          : 'bg-primary/10'
                      }`}>
                        <benefit.icon className={`w-6 h-6 transition-colors duration-300 ${
                          hoveredBenefit === index ? 'text-white' : 'text-primary'
                        }`} />
                      </div>
                      <p className={`text-sm leading-relaxed pt-1 transition-colors duration-300 ${
                        hoveredBenefit === index ? 'text-white' : 'text-muted-foreground'
                      }`}>
                        {benefit.text}
                      </p>
                    </div>
                    
                    {/* Hover indicator */}
                    <div className={`absolute bottom-3 right-3 transition-all duration-300 ${
                      hoveredBenefit === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    }`}>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                {[
                  { icon: Shield, text: "100% Kostenlos" },
                  { icon: FileText, text: "Sofortiger Download" },
                  { icon: CheckCircle, text: "Kein Spam" },
                ].map((item, index) => (
                  <div 
                    key={item.text}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-2">
              <div className="relative group">
                {/* Glowing border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-[1.75rem] blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                
                <div className="relative bg-card rounded-3xl p-8 shadow-2xl border border-border">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      {/* Success Animation */}
                      <div className="relative w-24 h-24 mx-auto mb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse" />
                        <div className="absolute inset-1 bg-card rounded-full flex items-center justify-center">
                          <Download className="w-10 h-10 text-primary" />
                        </div>
                        {/* Confetti-like elements */}
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-accent animate-ping"
                            style={{
                              top: `${50 + 40 * Math.sin(i * Math.PI / 4)}%`,
                              left: `${50 + 40 * Math.cos(i * Math.PI / 4)}%`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          />
                        ))}
                      </div>
                      
                      <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                        Vielen Dank!
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Ihr Ratgeber steht zum Download bereit!
                      </p>
                      <a 
                        href="/downloads/Ratgeber_fuer_Angehoerige.pdf" 
                        download="AVYTA_Ratgeber_fuer_Angehoerige.pdf"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 mb-4"
                      >
                        <Download className="w-5 h-5" />
                        PDF jetzt herunterladen
                      </a>
                      <p className="text-muted-foreground text-sm mb-6">
                        Der Ratgeber wurde auch an Ihre E-Mail gesendet.
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => setIsSubmitted(false)}
                        className="group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        Nochmal herunterladen
                      </Button>
                    </div>
                  ) : (
                    <>
                      {/* Form Header */}
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent p-[2px]">
                          <div className="w-full h-full rounded-[14px] bg-card flex items-center justify-center">
                            <BookOpen className="w-8 h-8 text-primary" />
                          </div>
                        </div>
                        <h3 className="font-display font-bold text-xl text-foreground mb-2">
                          Jetzt kostenlos herunterladen
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Tragen Sie Ihre Daten ein und erhalten Sie den Ratgeber direkt per E-Mail.
                        </p>
                      </div>
                      
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-foreground">Name</label>
                          <Input
                            type="text"
                            placeholder="Ihr vollständiger Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="h-12 bg-muted/50 border-border focus:border-primary transition-colors"
                          />
                        </div>
                        
                        <div className="space-y-1">
                          <label className="text-sm font-medium text-foreground">E-Mail</label>
                          <Input
                            type="email"
                            placeholder="Ihre E-Mail-Adresse"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="h-12 bg-muted/50 border-border focus:border-primary transition-colors"
                          />
                        </div>
                        
                        {/* Honeypot field */}
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
                          className="w-full h-14 text-base font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg shadow-primary/20 group"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin mr-2" />
                              Wird gesendet...
                            </>
                          ) : (
                            <>
                              <Download className="w-5 h-5 mr-2" />
                              Ratgeber herunterladen
                              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                      </form>

                      <p className="text-xs text-muted-foreground mt-6 text-center">
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
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default NewsletterSection;
