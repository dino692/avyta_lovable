import { useState, useRef, useEffect } from "react";
import { Play, Quote, Star, Users, Heart, Sparkles, Video } from "lucide-react";

const TestimonialsSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="py-32 relative overflow-hidden" id="testimonials">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-[20%] w-[600px] h-[600px] bg-white/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: "6s" }} />
        <div className="absolute bottom-0 right-[20%] w-[500px] h-[500px] bg-accent/40 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s", animationDuration: "8s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[200px]" />
      </div>
      
      {/* Decorative geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
        <div className="absolute top-20 left-20 w-20 h-20 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full" />
        <div className="absolute bottom-24 right-24 w-24 h-24 border border-white rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white rounded-xl rotate-45" />
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 border border-white rounded-lg rotate-12" />
      </div>
      
      {/* Floating icons */}
      <div className="absolute top-32 right-24 text-white/5 animate-float hidden xl:block">
        <Heart className="w-40 h-40" fill="currentColor" />
      </div>
      <div className="absolute bottom-32 left-24 text-white/5 animate-float hidden xl:block" style={{ animationDelay: "2s" }}>
        <Users className="w-32 h-32" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full mb-8 border border-white/20 shadow-2xl">
            <Video className="w-5 h-5 text-white" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Video-Stimmen
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Echte Stimmen,
            <span className="block mt-2 text-white/90">echte Erfahrungen</span>
          </h2>
          <p className="text-xl text-white/75 leading-relaxed">
            Hören Sie direkt von unseren Mitarbeitern, was sie an ihrer Arbeit bei AVYTA schätzen.
          </p>
        </div>

        {/* Video Card */}
        <div className="max-w-sm mx-auto">
          <div className="relative group">
            {/* Card glow */}
            <div className="absolute -inset-6 bg-white/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-white/10 backdrop-blur-2xl rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl group-hover:border-white/40 transition-all duration-500">
              {/* Badge */}
              <div className="absolute top-5 left-5 z-10">
                <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold bg-white text-primary shadow-xl">
                  <Users className="w-4 h-4" />
                  Mitarbeiterstimme
                </span>
              </div>

              {/* Rating stars */}
              <div className="absolute top-5 right-5 z-10 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 drop-shadow-lg" fill="currentColor" />
                ))}
              </div>

              {/* Video Container */}
              <div className="relative aspect-[9/16] bg-gradient-to-b from-white/5 to-white/10">
                {isVisible ? (
                  <>
                    {!videoLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="relative">
                            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse scale-150" />
                            <div className="relative w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                              <Play className="w-10 h-10" />
                            </div>
                          </div>
                          <p className="text-sm opacity-75 font-medium">Video wird geladen...</p>
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
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                        <Play className="w-10 h-10" />
                      </div>
                      <p className="text-sm opacity-75 font-medium">Video laden</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <Quote className="w-10 h-10 text-white/20 mb-4" />
                <p className="text-lg text-white font-medium leading-relaxed mb-6">
                  "Bei AVYTA fühle ich mich wertgeschätzt und unterstützt. Der Zusammenhalt im Team ist einzigartig."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm flex items-center justify-center text-2xl border-2 border-white/30 shadow-lg">
                    👩‍⚕️
                  </div>
                  <div>
                    <div className="font-display font-bold text-white text-lg">
                      AVYTA Team
                    </div>
                    <div className="text-sm text-white/70">Mitarbeiterstimmen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/75 mb-6 text-lg">Möchten Sie Teil unseres Teams werden?</p>
          <a 
            href="/jobs" 
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-bold rounded-full hover:bg-white/95 transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:scale-105 text-lg"
          >
            <span>Jetzt bewerben</span>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Heart className="w-5 h-5 text-primary" fill="currentColor" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;