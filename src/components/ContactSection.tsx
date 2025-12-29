import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 bg-foreground text-background" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-background/10 rounded-full text-sm font-medium mb-4">
                Kontakt
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Wir freuen uns auf Sie
              </h2>
              <p className="text-lg opacity-80 leading-relaxed">
                Haben Sie Fragen oder möchten Sie ein unverbindliches Beratungsgespräch? 
                Wir sind für Sie da – persönlich, telefonisch oder per E-Mail.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group p-4 rounded-xl bg-background/5 hover:bg-background/10 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm opacity-60 mb-1">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Emergency note */}
            <div className="p-6 rounded-xl bg-accent/20 border border-accent/30">
              <h3 className="font-display font-semibold text-lg mb-2">
                🚨 Pflegenotfall?
              </h3>
              <p className="opacity-80 mb-3">
                Unsere Notfall-Hotline ist 24 Stunden am Tag, 7 Tage die Woche erreichbar.
              </p>
              <a
                href="tel:+496915391405"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                <Phone className="w-4 h-4" />
                069 153 914 05
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card variant="glass" className="bg-background/5 border-background/10">
            <CardContent className="p-8">
              <h3 className="font-display font-semibold text-2xl mb-6">
                Nachricht senden
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-display font-semibold text-xl mb-2">
                    Vielen Dank!
                  </h4>
                  <p className="opacity-80">
                    Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Input
                      name="name"
                      placeholder="Ihr Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/10 border-background/20 placeholder:text-background/50 text-background"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      name="email"
                      type="email"
                      placeholder="E-Mail *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/10 border-background/20 placeholder:text-background/50 text-background"
                    />
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Telefon"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background/10 border-background/20 placeholder:text-background/50 text-background"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Ihre Nachricht *"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background/10 border-background/20 placeholder:text-background/50 text-background resize-none"
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    Nachricht senden
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-sm opacity-60 text-center">
                    Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
