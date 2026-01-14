import { useState } from "react";
import { Phone, ArrowRight, Check, Shield, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const ToirovHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 lg:pb-32 overflow-hidden">
      {/* Light blue-gray background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4f8] via-[#f7f9fc] to-white" />
      
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Light geometric shapes */}
        <div className="absolute top-[20%] left-[5%] w-32 h-32 border-2 border-primary/10 rounded-3xl rotate-12 opacity-50" />
        <div className="absolute bottom-[30%] left-[10%] w-20 h-20 border border-primary/10 rounded-2xl -rotate-6 opacity-30" />
        <div className="absolute top-[60%] right-[20%] w-16 h-16 bg-primary/5 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Tagline Chip */}
            <div className="flex justify-center lg:justify-start animate-fade-up">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                  AMBULANTER PFLEGEDIENST FRANKFURT
                </span>
              </div>
            </div>

            {/* Main Headline - Multi-line with accent word */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.05] animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="block text-foreground">Weil</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Pflege</span>
              <span className="block text-foreground">Vertrauen</span>
              <span className="block text-foreground opacity-90">braucht.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up mx-auto lg:mx-0" style={{ animationDelay: "0.2s" }}>
              Individuelle häusliche Pflege mit Herz – Ihr ambulanter Pflegedienst für Frankfurt und Umgebung. Für Menschen, die zu Hause sicher und liebevoll betreut werden möchten.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {/* Primary CTA - Filled with arrow */}
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 px-8 py-7 text-lg rounded-2xl"
                asChild
              >
                <a href="/kontakt">
                  <span className="relative z-10 font-bold">Kontakt aufnehmen</span>
                  <div className="ml-3 w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </a>
              </Button>
              
              {/* Secondary CTA - Phone with outline */}
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-2 border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 px-8 py-7 text-lg rounded-2xl bg-white shadow-lg"
                asChild
              >
                <a href="tel:+4969920388770" className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-bold text-foreground">+49 69 920 388 770</span>
                </a>
              </Button>
            </div>

            {/* Trust Icons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              {[
                { icon: Shield, label: "Fachpersonal" },
                { icon: Heart, label: "Mit Herz" },
                { icon: Clock, label: "365 Tage" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image with floating badges */}
          <div className="relative order-1 lg:order-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {/* Main Image Container */}
            <div className="relative">
              {/* Image with rounded corners */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border-4 border-white">
                <img
                  src={heroImage}
                  alt="Pflegekraft betreut Seniorin - AVYTA Pflege"
                  className="w-full h-auto object-cover aspect-[4/5] lg:aspect-[3/4]"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              {/* Floating Badge - Top Right: 24/7 */}
              <div className="absolute -top-4 -right-4 lg:top-4 lg:-right-8 z-20 animate-float">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-xl" />
                  {/* Badge */}
                  <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex flex-col items-center justify-center shadow-xl shadow-emerald-500/30 border-4 border-white">
                    <span className="text-3xl lg:text-4xl font-display font-bold text-white">24/7</span>
                    <span className="text-xs lg:text-sm font-bold text-white/90 uppercase tracking-wider">Bereit</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Bottom Left: 100% Vertrauen */}
              <div className="absolute -bottom-6 -left-4 lg:-bottom-8 lg:-left-8 z-20 animate-float" style={{ animationDelay: "1s" }}>
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl" />
                  {/* Badge */}
                  <div className="relative bg-white rounded-3xl shadow-2xl p-6 border border-border/50">
                    <div className="text-4xl lg:text-5xl font-display font-bold text-primary">100%</div>
                    <div className="text-xs lg:text-sm text-muted-foreground font-semibold uppercase tracking-wider mt-1">
                      Vertrauen &<br />Sicherheit
                    </div>
                  </div>
                </div>
              </div>

              {/* Small decorative element */}
              <div className="absolute top-1/2 -left-4 w-3 h-3 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: "3s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToirovHeroSection;
