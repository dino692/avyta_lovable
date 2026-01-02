import { useState, useRef, useEffect } from "react";
import { Play, Quote, Star, Users, Heart } from "lucide-react";

const TestimonialsSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Lazy load video when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 relative overflow-hidden" id="testimonials">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border border-white rounded-full" />
        <div className="absolute top-40 left-20 w-20 h-20 border border-white rounded-full" />
        <div className="absolute bottom-20 right-10 w-60 h-60 border border-white rounded-full" />
        <div className="absolute bottom-40 right-40 w-32 h-32 border border-white rounded-full" />
      </div>
      
      {/* Floating icons */}
      <div className="absolute top-32 right-20 text-white/10 animate-float">
        <Heart className="w-24 h-24" fill="currentColor" />
      </div>
      <div className="absolute bottom-32 left-20 text-white/10 animate-float" style={{ animationDelay: "2s" }}>
        <Users className="w-20 h-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <Play className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Video-Stimmen
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Echte Stimmen,
            <span className="block mt-2 text-white/90">echte Erfahrungen</span>
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Hören Sie direkt von unseren Mitarbeitern, was sie an ihrer Arbeit bei AVYTA schätzen.
          </p>
        </div>

        {/* Single Video - TikTok Embed with Lazy Loading */}
        <div className="max-w-sm mx-auto">
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20 animate-fade-up">
            {/* Badge */}
            <div className="absolute top-5 left-5 z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm bg-white text-primary">
                <Users className="w-4 h-4" />
                Mitarbeiterstimme
              </span>
            </div>

            {/* Rating stars */}
            <div className="absolute top-5 right-5 z-10 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
              ))}
            </div>

            {/* TikTok Video Container with Lazy Loading */}
            <div className="relative aspect-[9/16] bg-gradient-to-b from-primary/20 to-primary/40">
              {isVisible ? (
                <>
                  {!videoLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                          <Play className="w-8 h-8" />
                        </div>
                        <p className="text-sm opacity-75">Video wird geladen...</p>
                      </div>
                    </div>
                  )}
                  <iframe
                    src="https://www.tiktok.com/embed/v2/7544857921394429206"
                    className={`w-full h-full transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    onLoad={() => setVideoLoaded(true)}
                    title="AVYTA Mitarbeiterstimme - TikTok Video"
                  />
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <Play className="w-8 h-8" />
                    </div>
                    <p className="text-sm opacity-75">Video laden</p>
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <Quote className="w-8 h-8 text-white/20 mb-3" />
              <p className="text-lg text-white font-medium leading-relaxed mb-4">
                "Bei AVYTA fühle ich mich wertgeschätzt und unterstützt. Der Zusammenhalt im Team ist einzigartig."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl border-2 border-white/30">
                  👩‍⚕️
                </div>
                <div>
                  <div className="font-display font-semibold text-white">
                    AVYTA Team
                  </div>
                  <div className="text-sm text-white/70">Mitarbeiterstimmen</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-white/70 mb-4">Möchten Sie Teil unseres Teams werden?</p>
          <a 
            href="/jobs" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-colors"
          >
            Jetzt bewerben
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;