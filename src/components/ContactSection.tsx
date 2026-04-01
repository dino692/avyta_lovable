import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, Loader2, Heart, Star, Users, Shield, Sparkles, ArrowRight } from "lucide-react";
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
    description: "Rufen Sie uns an",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@avyta.de",
    href: "mailto:info@avyta.de",
    description: "Schreiben Sie uns",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: MapPin,
    label: "Hauptsitz",
    value: "Allerheiligentor 2-4, 60311 Frankfurt",
    href: "https://maps.google.com/?q=Allerheiligentor+2-4,+60311+Frankfurt",
    description: "Besuchen Sie uns",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Clock,
    label: "Bürozeiten",
    value: "Mo-Fr: 8-12 Uhr | Pflege: 24/7",
    href: "#",
    description: "Immer erreichbar",
    gradient: "from-orange-500 to-red-600",
  },
];

const stats = [
  { icon: Users, value: "2500+", label: "Bereits betreute Patienten" },
  { icon: Star, value: "5,0", label: "Google Bewertung" },
  { icon: Shield, value: "12+", label: "Jahre Erfahrung" },
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
  const [activeCard, setActiveCard] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { toast } = useToast();

  // Auto-rotate contact cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % contactInfo.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Track mouse for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    <section className="py-16 md:py-20 relative overflow-hidden" id="contact">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent" />
      
      {/* Mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 30%, hsl(var(--accent)) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, hsl(var(--primary)) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, hsl(var(--secondary)) 0%, transparent 70%)
          `,
        }}
      />
      
      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
      />
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated circles */}
        <div 
          className="absolute top-20 left-[10%] w-64 h-64 border border-white/10 rounded-full animate-[spin_30s_linear_infinite]"
          style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
        />
        <div 
          className="absolute top-40 left-[15%] w-32 h-32 border border-white/20 rounded-full animate-[spin_20s_linear_infinite_reverse]"
          style={{ transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-20 right-[10%] w-80 h-80 border border-white/10 rounded-full animate-[spin_40s_linear_infinite]"
          style={{ transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)` }}
        />
        <div 
          className="absolute bottom-40 right-[15%] w-40 h-40 border border-white/15 rounded-full animate-[spin_25s_linear_infinite_reverse]"
          style={{ transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)` }}
        />
        
        {/* Floating hearts */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.1,
            }}
          >
            <Heart className="w-8 h-8 text-white fill-white/20" />
          </div>
        ))}
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <MessageSquare className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Kontaktieren Sie uns</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Wir freuen uns
            <span className="block bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              auf Sie
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Haben Sie Fragen oder möchten Sie ein unverbindliches Beratungsgespräch? 
            Wir sind für Sie da – persönlich und kompetent.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/60">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Interactive Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group relative p-6 rounded-3xl transition-all duration-500 overflow-hidden ${
                    activeCard === index 
                      ? 'bg-white/20 border-2 border-white/40 scale-[1.02]' 
                      : 'bg-white/10 border border-white/20 hover:bg-white/15'
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                >
                  {/* Active indicator glow */}
                  {activeCard === index && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20`} />
                  )}
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xs text-white/50 mb-1 uppercase tracking-wider">{item.description}</div>
                    <div className="text-sm text-white/60 mb-1">{item.label}</div>
                    <div className="font-semibold text-white text-lg leading-tight">{item.value}</div>
                  </div>
                  
                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </a>
              ))}
            </div>

            {/* Progress indicator */}
            <div className="flex gap-2 justify-center">
              {contactInfo.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeCard === index ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Emergency Card */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-md border-2 border-red-400/30 overflow-hidden group">
              {/* Animated pulse background */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 animate-pulse" />
              
              {/* Emergency icon with glow */}
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center animate-pulse">
                <div className="w-10 h-10 rounded-full bg-red-500/30 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white animate-pulse" />
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />
                  <span className="text-sm font-bold text-red-300 uppercase tracking-wider">Notfall</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  🚨 Pflegenotfall?
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Unsere Notfall-Hotline ist rund um die Uhr für Sie erreichbar – 24 Stunden, 7 Tage die Woche.
                </p>
                <a
                  href="tel:+496915391405"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-red-600 font-bold rounded-2xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-lg">069 153 914 05</span>
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </a>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              {['TÜV Zertifiziert', 'Alle Kassen', 'Kostenlose Beratung'].map((badge, index) => (
                <div 
                  key={badge}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-white/80">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            {/* Form card with glowing border */}
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-[2rem] blur-lg opacity-50 group-hover:opacity-75 animate-gradient" />
              
              <div className="relative bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden">
                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[4rem]" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-[3rem]" />
                
                <div className="relative z-10">
                  {/* Form header */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                      <Send className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                        Nachricht senden
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Antwort innerhalb von 24h
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 mt-4">
                    Schreiben Sie uns – wir melden uns schnellstmöglich bei Ihnen zurück!
                  </p>

                  {isSubmitted ? (
                    <div className="text-center py-16">
                      {/* Success animation */}
                      <div className="relative w-24 h-24 mx-auto mb-6">
                        <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-50" />
                        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
                          <CheckCircle className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      
                      {/* Confetti elements */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 rounded-full animate-bounce"
                            style={{
                              left: `${20 + i * 5}%`,
                              top: `${30 + (i % 3) * 10}%`,
                              backgroundColor: ['#10b981', '#6366f1', '#f59e0b', '#ec4899'][i % 4],
                              animationDelay: `${i * 0.1}s`,
                              animationDuration: '1s',
                            }}
                          />
                        ))}
                      </div>
                      
                      <h4 className="font-display font-bold text-2xl text-foreground mb-3">
                        Vielen Dank! 🎉
                      </h4>
                      <p className="text-muted-foreground max-w-sm mx-auto">
                        Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich bei Ihnen.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="group">
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Ihr Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Input
                              id="name"
                              name="name"
                              placeholder="Max Mustermann"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="h-14 text-base border-2 border-border focus:border-primary bg-secondary/30 placeholder:text-muted-foreground/50 rounded-xl transition-all duration-300 focus:shadow-lg focus:shadow-primary/10"
                            />
                          </div>
                        </div>
                        <div className="group">
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Telefonnummer
                          </label>
                          <div className="relative">
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="069 123 456 78"
                              value={formData.phone}
                              onChange={handleChange}
                              className="h-14 text-base border-2 border-border focus:border-primary bg-secondary/30 placeholder:text-muted-foreground/50 rounded-xl transition-all duration-300 focus:shadow-lg focus:shadow-primary/10"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          E-Mail-Adresse <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="max@beispiel.de"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="h-14 text-base border-2 border-border focus:border-primary bg-secondary/30 placeholder:text-muted-foreground/50 rounded-xl transition-all duration-300 focus:shadow-lg focus:shadow-primary/10"
                          />
                        </div>
                      </div>
                      
                      <div className="group">
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Ihre Nachricht <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Wie können wir Ihnen helfen? Beschreiben Sie Ihre Pflegesituation..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="text-base border-2 border-border focus:border-primary bg-secondary/30 placeholder:text-muted-foreground/50 resize-none rounded-xl transition-all duration-300 focus:shadow-lg focus:shadow-primary/10"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Wird gesendet...
                          </>
                        ) : (
                          <>
                            <span>Nachricht absenden</span>
                            <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </Button>
                      
                      <p className="text-sm text-muted-foreground text-center flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4 text-emerald-500" />
                        Ihre Daten sind bei uns sicher.{" "}
                        <a href="/datenschutz" className="text-primary hover:underline">
                          Datenschutz
                        </a>
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
