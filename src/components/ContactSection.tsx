import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, Loader2, Heart, Sparkles, AlertCircle } from "lucide-react";
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
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-[20%] w-[600px] h-[600px] bg-white/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: "6s" }} />
        <div className="absolute bottom-0 right-[20%] w-[500px] h-[500px] bg-accent/40 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s", animationDuration: "8s" }} />
      </div>
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
        <div className="absolute top-24 left-24 w-16 h-16 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full" />
        <div className="absolute bottom-28 right-28 w-20 h-20 border border-white rounded-full" />
        <div className="absolute top-1/2 left-[15%] w-12 h-12 border border-white rounded-xl rotate-45" />
      </div>

      {/* Floating icons */}
      <div className="absolute top-40 right-24 text-white/5 animate-float hidden xl:block">
        <Heart className="w-36 h-36" fill="currentColor" />
      </div>
      <div className="absolute bottom-40 left-24 text-white/5 animate-float hidden xl:block" style={{ animationDelay: "2s" }}>
        <Sparkles className="w-28 h-28" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Contact Info */}
          <div className="space-y-10 text-white">
            <div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8 shadow-2xl">
                <MessageSquare className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-wider">Kontakt</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Wir freuen uns
                <span className="block text-white/90">auf Sie</span>
              </h2>
              <p className="text-xl text-white/75 leading-relaxed">
                Haben Sie Fragen oder möchten Sie ein unverbindliches Beratungsgespräch? 
                Wir sind für Sie da.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative block"
                >
                  <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-500 group-hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm text-white/60 mb-1 font-medium">{item.label}</div>
                        <div className="font-bold text-lg leading-tight">{item.value}</div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Emergency card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative p-8 lg:p-10 rounded-3xl bg-white/15 backdrop-blur-xl border-2 border-white/30 shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-ping" />
                  </div>
                  <h3 className="font-display font-bold text-2xl">Pflegenotfall?</h3>
                </div>
                <p className="text-white/80 mb-6 text-lg">
                  Unsere Notfall-Hotline ist 24/7 erreichbar.
                </p>
                <a
                  href="tel:+496915391405"
                  className="inline-flex items-center gap-4 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-white/95 transition-all duration-300 shadow-2xl hover:scale-105 text-lg"
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
            <div className="absolute -inset-6 bg-white/15 rounded-[3rem] blur-3xl" />
            
            <div className="relative bg-white rounded-[2rem] p-10 lg:p-12 shadow-2xl">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-[4rem]" />
              
              <h3 className="font-display font-bold text-3xl text-foreground mb-3 relative">
                Nachricht senden
              </h3>
              <p className="text-muted-foreground text-lg mb-10 relative">
                Schreiben Sie uns – wir melden uns schnellstmöglich!
              </p>

              {isSubmitted ? (
                <div className="text-center py-16 relative">
                  <div className="relative w-28 h-28 mx-auto mb-8">
                    <div className="absolute inset-0 bg-emerald-500/30 rounded-3xl blur-xl animate-pulse" />
                    <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-2xl">
                      <CheckCircle className="w-14 h-14 text-white" />
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
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-foreground mb-3">
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
                    <label htmlFor="email" className="block text-sm font-bold text-foreground mb-3">
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
                    <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-3">
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
                    <label htmlFor="message" className="block text-sm font-bold text-foreground mb-3">
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
                    className="w-full h-16 text-lg font-bold bg-gradient-to-r from-primary via-primary to-accent hover:opacity-90 text-white shadow-xl hover:shadow-2xl hover:shadow-primary/20 group rounded-xl"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <span>Nachricht senden</span>
                        <div className="w-10 h-10 ml-3 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                          <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
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