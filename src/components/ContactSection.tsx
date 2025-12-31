import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "069 153 014 05",
    href: "tel:+496915301405",
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
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", phone: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-28 relative overflow-hidden" id="contact">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
        <div className="absolute top-32 left-32 w-16 h-16 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full" />
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div className="space-y-8 text-white">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm font-medium">Kontakt</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Wir freuen uns
                <span className="block">auf Sie</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Haben Sie Fragen oder möchten Sie ein unverbindliches Beratungsgespräch? 
                Wir sind für Sie da.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">{item.label}</div>
                      <div className="font-semibold">{item.value}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Emergency note */}
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30">
              <h3 className="font-display font-semibold text-xl mb-2">
                🚨 Pflegenotfall?
              </h3>
              <p className="text-white/80 mb-4">
                Unsere Notfall-Hotline ist 24/7 erreichbar.
              </p>
              <a
                href="tel:+496915391405"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-primary font-bold rounded-full hover:bg-white/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                069 153 914 05
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                Nachricht senden
              </h3>
              <p className="text-muted-foreground mb-8">
                Schreiben Sie uns – wir melden uns schnellstmöglich!
              </p>

              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-foreground mb-3">
                    Vielen Dank!
                  </h4>
                  <p className="text-muted-foreground">
                    Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Ihr Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Max Mustermann"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-14 text-lg border-2 border-border focus:border-primary bg-secondary/30 placeholder:text-muted-foreground/60"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Ihre Telefonnummer
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="069 123 456 78"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-14 text-lg border-2 border-border focus:border-primary bg-secondary/30 placeholder:text-muted-foreground/60"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Ihre Nachricht *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Wie können wir Ihnen helfen?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="text-lg border-2 border-border focus:border-primary bg-secondary/30 placeholder:text-muted-foreground/60 resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 group"
                  >
                    Nachricht senden
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <a href="/datenschutz" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    zu.
                  </p>
                </form>
              )}
            </div>

            {/* Decorative floating element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;