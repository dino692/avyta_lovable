import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, Loader2, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "069 153 914 05",
    href: "tel:+496915391405",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@avyta.de",
    href: "mailto:info@avyta.de",
  },
  {
    icon: MapPin,
    label: "Hauptsitz",
    value: "Allerheiligentor 2-4, 60311 Frankfurt",
    href: "#",
  },
  {
    icon: Clock,
    label: "Bürozeiten",
    value: "Mo-Fr: 8-12 Uhr | Pflege: 24/7",
    href: "#",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
      });

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error: any) {
      console.error("Error sending contact form:", error);
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut oder rufen Sie uns direkt an.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-32 relative overflow-hidden" id="contact">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent" />
      
      {/* Animated mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      {/* Decorative circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
        <div className="absolute top-32 left-32 w-20 h-20 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full" />
        <div className="absolute bottom-32 right-32 w-28 h-28 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-lg rotate-45" />
      </div>

      {/* Floating icons */}
      <div className="absolute top-40 right-20 text-white/10 animate-float hidden lg:block">
        <Heart className="w-24 h-24" fill="currentColor" />
      </div>
      <div className="absolute bottom-40 left-20 text-white/10 animate-float hidden lg:block" style={{ animationDelay: "2s" }}>
        <Sparkles className="w-20 h-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Contact Info */}
          <div className="space-y-10 text-white">
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 shadow-xl">
                <MessageSquare className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-wider">Kontakt</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Wir freuen uns
                <span className="block text-white/90">auf Sie</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Haben Sie Fragen oder möchten Sie ein unverbindliches Beratungsgespräch? 
                Wir sind für Sie da.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm text-white/60 mb-1 font-medium">{item.label}</div>
                        <div className="font-bold text-lg">{item.value}</div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Emergency card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl bg-white/15 backdrop-blur-md border-2 border-white/30 shadow-2xl">
                <h3 className="font-display font-bold text-2xl mb-3 flex items-center gap-3">
                  <span className="text-3xl">🚨</span> Pflegenotfall?
                </h3>
                <p className="text-white/80 mb-6 text-lg">
                  Unsere Notfall-Hotline ist 24/7 erreichbar.
                </p>
                <a
                  href="tel:+496915391405"
                  className="inline-flex items-center gap-4 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-white/95 transition-all duration-300 shadow-xl hover:scale-105 text-lg"
                >
                  <Phone className="w-6 h-6" />
                  069 153 914 05
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            {/* Form glow */}
            <div className="absolute -inset-4 bg-white/10 rounded-[2rem] blur-2xl" />
            
            <div className="relative bg-white rounded-3xl p-10 md:p-12 shadow-2xl">
              <h3 className="font-display font-bold text-3xl text-foreground mb-3">
                Nachricht senden
              </h3>
              <p className="text-muted-foreground text-lg mb-10">
                Schreiben Sie uns – wir melden uns schnellstmöglich!
              </p>

              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="relative w-24 h-24 mx-auto mb-8">
                    <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-xl" />
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h4 className="font-display font-bold text-3xl text-foreground mb-4">
                    Vielen Dank!
                  </h4>
                  <p className="text-muted-foreground text-lg">
                    Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3">
                      Ihr Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Max Mustermann"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-14 text-lg border-2 border-border focus:border-primary bg-secondary/30 placeholder:text-muted-foreground/60 rounded-xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                      Ihre E-Mail-Adresse *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="max@beispiel.de"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-14 text-lg border-2 border-border focus:border-primary bg-secondary/30 placeholder:text-muted-foreground/60 rounded-xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-3">
                      Ihre Telefonnummer
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="069 123 456 78"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-14 text-lg border-2 border-border focus:border-primary bg-secondary/30 placeholder:text-muted-foreground/60 rounded-xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                      Ihre Nachricht *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Wie können wir Ihnen helfen?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="text-lg border-2 border-border focus:border-primary bg-secondary/30 placeholder:text-muted-foreground/60 resize-none rounded-xl"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-16 text-lg font-bold bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-xl group rounded-xl"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        Nachricht senden
                        <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-muted-foreground text-center pt-2">
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <a href="/datenschutz" className="text-primary hover:underline font-medium">
                      Datenschutzerklärung
                    </a>{" "}
                    zu.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
