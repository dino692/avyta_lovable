import { useEffect, useState } from "react";
import { Award, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import partner logos
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
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary/10 backdrop-blur-sm rounded-full mb-6 border border-primary/20">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Zertifikate & Partner
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Vertrauen durch{" "}
            <span className="relative">
              <span className="text-primary">Qualität</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 4 150 4 198 10" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  <div className="group bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 h-[140px] flex items-center justify-center shadow-sm hover:shadow-md">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-16 max-w-[140px] object-contain grayscale-[30%] group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom navigation */}
            <CarouselPrevious className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 h-12 w-12 shadow-lg" />
            <CarouselNext className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 h-12 w-12 shadow-lg" />
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust message */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-card/80 backdrop-blur-sm rounded-full border border-border shadow-lg">
            <Shield className="w-6 h-6 text-accent" />
            <span className="text-sm md:text-base font-medium text-foreground">
              Geprüfte Qualität • Alle Kassen zugelassen • MDK Note 1,6
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
