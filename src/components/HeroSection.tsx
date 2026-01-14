import { useState } from "react";
import { FileText, Play, Sparkles, ArrowDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTADropdownButton from "@/components/CTADropdownButton";

const YOUTUBE_VIDEO_ID = "ITIyAG6rOUY";

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Ultra modern gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.1),transparent_50%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--secondary)/0.5))]" />
      
      {/* Animated morphing shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-[80px] animate-[morph_15s_ease-in-out_infinite]" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-tr from-accent/15 via-accent/5 to-transparent blur-[60px] animate-[morph_20s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-[100px] animate-pulse" />
      </div>
      
      {/* Decorative grid with dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      {/* Floating geometric elements */}
      <div className="absolute top-32 left-[8%] hidden lg:block">
        <div className="relative w-24 h-24 animate-float">
          <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl rotate-12" />
          <div className="absolute inset-2 border border-primary/10 rounded-2xl -rotate-6" />
        </div>
      </div>
      <div className="absolute bottom-32 right-[12%] hidden lg:block">
        <div className="relative w-16 h-16 animate-float" style={{ animationDelay: "2s" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl rotate-45" />
        </div>
      </div>
      <div className="absolute top-[60%] left-[3%] hidden xl:block">
        <div className="w-3 h-3 bg-primary/30 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
      </div>
      <div className="absolute top-[20%] right-[25%] hidden xl:block">
        <Star className="w-6 h-6 text-primary/20 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Animated badge with shimmer */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/5 via-primary/10 to-accent/5 backdrop-blur-xl rounded-full border border-primary/20 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.2)] animate-fade-up group hover:border-primary/40 transition-colors">
              <div className="relative">
                <Sparkles className="w-5 h-5 text-primary" />
                <div className="absolute inset-0 blur-md bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-sm font-bold text-primary tracking-wide">
                Jetzt kostenlose Beratung sichern
              </span>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.05] animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="block text-foreground">Liebevolle</span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">Pflege</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 8C60 3 240 3 298 8" stroke="url(#hero-underline)" strokeWidth="4" strokeLinecap="round" className="animate-[draw_1s_ease-out_0.5s_forwards]" strokeDasharray="300" strokeDashoffset="300" style={{ animation: "draw 1s ease-out 0.5s forwards" }} />
                  <defs>
                    <linearGradient id="hero-underline" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="block text-foreground/90 mt-2">in Ihrem Zuhause</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Wir begleiten Sie und Ihre Angehörigen mit Herz, Kompetenz und 
              individueller Betreuung – für ein selbstbestimmtes Leben.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <CTADropdownButton className="w-full sm:w-auto" />
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto justify-center group border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 rounded-full px-8"
                asChild
              >
                <a href="https://www.avyta.de/images/avyta_infobroschuere.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-2 group-hover:rotate-6 transition-transform" />
                  Infobroschüre
                </a>
              </Button>
            </div>

            {/* Trust stats with 3D card effect */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              {[
                { value: "12+", label: "Jahre Erfahrung", icon: "🏆" },
                { value: "2.500+", label: "Betreute Patienten", icon: "💚" },
                { value: "98%", label: "Zufriedenheit", icon: "⭐" },
              ].map((stat) => (
                <div key={stat.label} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
                  <div className="relative px-5 py-4 bg-card/60 backdrop-blur-xl rounded-2xl border border-border/50 shadow-lg group-hover:shadow-xl group-hover:border-primary/30 group-hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{stat.icon}</span>
                      <div>
                        <div className="text-2xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{stat.value}</div>
                        <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* YouTube Video with modern frame */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {/* Glowing backdrop */}
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 rounded-[3rem] blur-3xl opacity-60 animate-pulse" style={{ animationDuration: "4s" }} />
            
            {/* Outer decorative ring */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-transparent to-accent/10 p-px">
              <div className="w-full h-full rounded-[2.5rem] bg-background/50 backdrop-blur-sm" />
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-br from-muted to-muted/50 border border-border/50">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-br-[4rem]" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/20 to-transparent rounded-tl-[4rem]" />
              
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl scale-150 animate-pulse" />
                      <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 border-4 border-white/50">
                        <Play className="w-8 h-8 md:w-12 md:h-12 text-primary ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white text-lg font-bold drop-shadow-lg">Video ansehen</div>
                    <div className="text-white/70 text-sm">Lernen Sie uns kennen</div>
                  </div>
                </button>
              )}
            </div>
            
            {/* Floating info card */}
            <div className="absolute -bottom-6 -left-6 z-20 hidden md:block animate-float">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="relative bg-card/95 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-2xl">💚</span>
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground">Persönliche Betreuung</div>
                      <div className="text-sm text-muted-foreground">24/7 für Sie da</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status badge */}
            <div className="absolute -top-4 -right-4 z-20 hidden lg:block animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-lg" />
                <div className="relative bg-card/95 backdrop-blur-xl px-5 py-3 rounded-full shadow-xl border border-emerald-500/30">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                    </span>
                    <span className="text-sm font-bold text-foreground">Jetzt erreichbar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3">
          <span className="text-sm text-muted-foreground font-medium">Mehr entdecken</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes morph {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          25% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          75% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;