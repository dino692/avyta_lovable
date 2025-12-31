import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTADropdownButton from "@/components/CTADropdownButton";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-x-clip">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Jetzt kostenlose Beratung sichern
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
              Liebevolle Pflege
              <span className="block text-primary">in Ihrem Zuhause</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Wir begleiten Sie und Ihre Angehörigen mit Herz, Kompetenz und 
              individueller Betreuung. Unser erfahrenes Team sorgt für ein 
              selbstbestimmtes Leben in vertrauter Umgebung.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* CTA Dropdown Button */}
              <CTADropdownButton className="w-full sm:w-auto" />

              {/* Download Brochure Button */}
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto justify-center"
                asChild
              >
                <a href="https://www.avyta.de/images/avyta_infobroschuere.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-2" />
                  Infobroschüre herunterladen
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-display font-bold text-primary">12+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Jahre Erfahrung</div>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-display font-bold text-primary">2.500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Betreute Patienten</div>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-display font-bold text-primary">98%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Zufriedenheit</div>
              </div>
            </div>
          </div>

          {/* YouTube Video */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <iframe
                src="https://www.youtube.com/embed/ITIyAG6rOUY?si=tPuFV7w-FSBCewNE"
                title="AVYTA Pflegedienst"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border hidden md:block animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">💚</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Persönliche Betreuung</div>
                  <div className="text-sm text-muted-foreground">24/7 für Sie da</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
