import { useState } from "react";
import { FileText, Play, Sparkles, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTADropdownButton from "@/components/CTADropdownButton";

const YOUTUBE_VIDEO_ID = "ITIyAG6rOUY";

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Floating decorative shapes */}
      <div className="absolute top-32 left-[10%] w-20 h-20 border-2 border-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-40 right-[15%] w-12 h-12 border-2 border-accent/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-[5%] w-8 h-8 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Animated badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg animate-fade-up">
              <div className="relative">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <div className="absolute inset-0 blur-sm bg-primary/40 rounded-full animate-ping" style={{ animationDuration: "2s" }} />
              </div>
              <span className="text-sm font-semibold text-primary">
                Jetzt kostenlose Beratung sichern
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text">Liebevolle Pflege</span>
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                in Ihrem Zuhause
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Wir begleiten Sie und Ihre Angehörigen mit Herz, Kompetenz und 
              individueller Betreuung. Unser erfahrenes Team sorgt für ein 
              selbstbestimmtes Leben in vertrauter Umgebung.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <CTADropdownButton className="w-full sm:w-auto" />
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto justify-center group border-2 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                asChild
              >
                <a href="https://www.avyta.de/images/avyta_infobroschuere.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Infobroschüre herunterladen
                </a>
              </Button>
            </div>

            {/* Trust badges with glassmorphism */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 pt-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              {[
                { value: "12+", label: "Jahre Erfahrung" },
                { value: "2.500+", label: "Betreute Patienten" },
                { value: "98%", label: "Zufriedenheit" },
              ].map((stat, index) => (
                <div key={stat.label} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative px-6 py-4 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg group-hover:border-primary/30 transition-all duration-300">
                    <div className="text-3xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* YouTube Video with enhanced styling */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {/* Glow effect behind video */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-3xl blur-2xl opacity-60" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-br from-muted to-muted/50 border border-white/10">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-primary/40 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-accent/40 rounded-br-3xl" />
              
              {videoLoaded ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&si=tPuFV7w-FSBCewNE`}
                  title="AVYTA Pflegedienst"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <button
                  onClick={() => setVideoLoaded(true)}
                  aria-label="Video abspielen"
                  className="absolute inset-0 w-full h-full cursor-pointer group"
                >
                  <img
                    src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                    alt="AVYTA Pflegedienst Video Vorschau"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/50 rounded-full blur-xl animate-pulse" />
                      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-12 h-12 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white text-lg font-semibold drop-shadow-lg">Video ansehen</div>
                    <div className="text-white/70 text-sm">Lernen Sie uns kennen</div>
                  </div>
                </button>
              )}
            </div>
            
            {/* Enhanced floating card */}
            <div className="absolute -bottom-8 -left-8 z-20 hidden md:block animate-float">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-40" />
                <div className="relative bg-card/95 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-3xl">💚</span>
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground">Persönliche Betreuung</div>
                      <div className="text-sm text-muted-foreground">24/7 für Sie da</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional floating element */}
            <div className="absolute -top-6 -right-6 z-20 hidden lg:block animate-float" style={{ animationDelay: "1s" }}>
              <div className="bg-card/95 backdrop-blur-xl px-4 py-3 rounded-full shadow-xl border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Jetzt erreichbar</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-muted-foreground">Mehr entdecken</span>
          <ArrowDown className="w-5 h-5 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
