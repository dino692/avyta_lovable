import { useEffect, useState } from "react";
import { Award, Shield, Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import bkkLogo from "@/assets/partners/bkk-logo.png";
import dakLogo from "@/assets/partners/dak-logo.jpg";
import frankfurtLogo from "@/assets/partners/frankfurt-logo.png";
import gkvLogo from "@/assets/partners/gkv-logo.svg";
import barmerLogo from "@/assets/partners/barmer-logo.png";
import mdkLogo from "@/assets/partners/mdk-logo.webp";
import aokLogo from "@/assets/partners/aok-logo.jpg";
import vdekLogo from "@/assets/partners/vdek-logo.jpg";
import pkvLogo from "@/assets/partners/pkv-logo.png";

const partners = [
  { name: "AOK", logo: aokLogo },
  { name: "BARMER", logo: barmerLogo },
  { name: "DAK Gesundheit", logo: dakLogo },
  { name: "BKK", logo: bkkLogo },
  { name: "GKV Spitzenverband", logo: gkvLogo },
  { name: "MDK", logo: mdkLogo },
  { name: "Stadt Frankfurt am Main", logo: frankfurtLogo },
  { name: "vdek - Die Ersatzkassen", logo: vdekLogo },
  { name: "PKV - Verband der Privaten Krankenversicherung", logo: pkvLogo },
];

const CertificatesSection = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-full border border-primary/20 mb-8 shadow-lg">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">
              Zertifikate & Partner
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Vertrauen durch{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Qualität</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 4 150 4 198 10" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Wir arbeiten mit allen gesetzlichen und privaten Krankenkassen zusammen. 
            Unsere Qualität wird regelmäßig geprüft und zertifiziert.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={partner.name} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="group relative">
                    {/* Card glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-500 h-[160px] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:border-primary/20">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-16 max-w-[140px] object-contain grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation */}
            <CarouselPrevious className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 bg-card/95 backdrop-blur-sm border-primary/20 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:border-transparent transition-all duration-300 h-14 w-14 shadow-xl" />
            <CarouselNext className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 bg-card/95 backdrop-blur-sm border-primary/20 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:border-transparent transition-all duration-300 h-14 w-14 shadow-xl" />
          </Carousel>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === index 
                    ? "w-10 bg-gradient-to-r from-primary to-accent" 
                    : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-5 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-xl">
            <Shield className="w-7 h-7 text-accent" />
            <span className="text-base font-semibold text-foreground">
              Geprüfte Qualität • Alle Kassen zugelassen • MDK Note 1,6
            </span>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
