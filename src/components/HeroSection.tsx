import { useState, useEffect, useRef } from "react";
import { FileText, Play, ArrowRight, Phone, Sparkles, Heart, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTADropdownButton from "@/components/CTADropdownButton";

const YOUTUBE_VIDEO_ID = "ITIyAG6rOUY";

const stats = [
  { value: 12, suffix: "+", label: "Jahre Erfahrung", delay: 0 },
  { value: 2500, suffix: "+", label: "Betreute Patienten", delay: 0.2 },
  { value: 98, suffix: "%", label: "Zufriedenheit", delay: 0.4 },
];

const AnimatedCounter = ({ value, suffix, delay }: { value: number; suffix: string; delay: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-display font-bold text-primary">
      {count.toLocaleString('de-DE')}{suffix}
    </div>
  );
};

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />
      
      {/* Morphing blob backgrounds */}
      <div 
        className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl animate-morph opacity-60"
        style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
      />
      <div 
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-accent/15 to-primary/10 rounded-full blur-3xl animate-morph opacity-50"
        style={{ animationDelay: '-4s', transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
      />
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-[10%] w-3 h-3 bg-primary/40 rounded-full animate-float" />
      <div className="absolute top-1/3 right-[15%] w-4 h-4 bg-accent/30 rounded-full animate-float-delayed" />
      <div className="absolute bottom-1/4 left-[20%] w-2 h-2 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '-3s' }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div 
              className="animate-slide-up inline-flex items-center gap-3 px-5 py-2.5 glass rounded-full shadow-lg"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
              </span>
              <span className="text-sm font-semibold text-foreground">
                Jetzt kostenlose Beratung sichern
              </span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>

            {/* Headline */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] text-foreground text-balance">
                Liebevolle Pflege
                <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  in Ihrem Zuhause
                </span>
              </h1>
            </div>

            {/* Description */}
            <p 
              className="animate-slide-up text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
              style={{ animationDelay: '0.3s' }}
            >
              Wir begleiten Sie und Ihre Angehörigen mit Herz, Kompetenz und 
              individueller Betreuung. Unser erfahrenes Team sorgt für ein 
              selbstbestimmtes Leben in vertrauter Umgebung.
            </p>

            {/* CTA Buttons */}
            <div 
              className="animate-slide-up flex flex-col sm:flex-row gap-4"
              style={{ animationDelay: '0.4s' }}
            >
              <CTADropdownButton className="w-full sm:w-auto" />

              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto group border-2 hover:bg-primary/5"
                asChild
              >
                <a href="https://www.avyta.de/images/avyta_infobroschuere.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-2 transition-transform group-hover:-translate-y-0.5" />
                  Infobroschüre herunterladen
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div 
              className="animate-slide-up pt-4"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="glass rounded-2xl p-6 shadow-lg">
                <div className="grid grid-cols-3 gap-4 md:gap-8">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center relative">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={stat.delay} />
                      <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
                      {index < stats.length - 1 && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border hidden md:block" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div 
            className="animate-slide-in-right relative"
            style={{ animationDelay: '0.3s' }}
          >
            {/* Glow effect behind video */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-60 animate-glow" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-card border border-border/50">
              {/* Video aspect ratio container */}
              <div className="aspect-video relative bg-muted">
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
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30" />
                        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                          <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>

                    {/* Video label */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-white font-medium text-sm md:text-base">Lernen Sie uns kennen</span>
                      <span className="text-white/70 text-sm">1:23</span>
                    </div>
                  </button>
                )}
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl shadow-xl border border-white/30 hidden md:flex items-center gap-3 animate-float">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Persönliche Betreuung</div>
                <div className="text-sm text-muted-foreground">24/7 für Sie da</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 glass p-3 rounded-xl shadow-xl border border-white/30 hidden lg:flex items-center gap-2 animate-float-delayed">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">MDK Note 1,6</span>
            </div>
          </div>
        </div>

        {/* Quick contact bar - mobile only */}
        <div className="mt-12 lg:hidden animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <a 
            href="tel:+496915391405"
            className="flex items-center justify-center gap-3 w-full p-4 bg-primary text-primary-foreground rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            <Phone className="w-5 h-5" />
            Jetzt anrufen: 069 153 914 05
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Mehr entdecken</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;