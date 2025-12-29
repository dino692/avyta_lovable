import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Bleiben Sie informiert
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Erhalten Sie wertvolle Tipps zur häuslichen Pflege, Neuigkeiten zu 
            unseren Leistungen und wichtige Gesundheits-Informationen.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 pr-4 bg-card"
                required
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="group">
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Angemeldet!
                </>
              ) : (
                <>
                  Anmelden
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>

          {/* Privacy note */}
          <p className="text-sm text-muted-foreground mt-4">
            Mit der Anmeldung stimmen Sie unserer{" "}
            <a href="/datenschutz" className="text-primary hover:underline">
              Datenschutzerklärung
            </a>{" "}
            zu. Kein Spam, jederzeit abmelden.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {["Kostenlos", "Monatlich", "Abmeldung jederzeit"].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
