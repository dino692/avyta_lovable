import { useState, useRef, useEffect } from "react";
import { Play, Quote, Star, Users, Heart, Sparkles, ArrowRight, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";

const TestimonialsSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const textTestimonials = [
    {
      quote: "Die Betreuung meiner Mutter durch AVYTA ist einfach großartig. Das Team ist immer freundlich und professionell.",
      author: "Maria S.",
      role: "Angehörige",
      rating: 5,
    },
    {
      quote: "Endlich ein Pflegedienst, der wirklich auf die Bedürfnisse eingeht. Ich bin sehr dankbar.",
      author: "Thomas K.",
      role: "Patient",
      rating: 5,
    },
    {
      quote: "Zuverlässig, kompetent und menschlich – genau das, was wir uns für unseren Vater gewünscht haben.",
      author: "Sandra M.",
      role: "Angehörige",
      rating: 5,
    },
  ];

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

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % textTestimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible, textTestimonials.length]);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden" id="testimonials">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent" />
      
      {/* Animated mesh pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                          radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + i}s`,
            }}
          >
            <Heart className={`w-${4 + (i % 3) * 2} h-${4 + (i % 3) * 2} text-white/10`} fill="currentColor" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-4xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-white animate-pulse" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Echte Erfahrungen
            </span>
            <Volume2 className="w-4 h-4 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Video-Stimmen aus
            <span className="block mt-2 relative">
              <span className="bg-gradient-to-r from-white via-white/90 to-accent bg-clip-text text-transparent">
                unserem Team
              </span>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Hören Sie direkt von unseren Mitarbeitern, was sie an ihrer Arbeit bei AVYTA schätzen – 
            authentisch und ehrlich.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Video Card - Compact */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative group max-w-[320px]">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/30 via-accent/50 to-white/30 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20">
                {/* Video Header - Compact */}
                <div className="relative px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="text-white font-semibold text-sm">Mitarbeiterstimme</span>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 text-amber-400" fill="currentColor" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-red-500/20 border border-red-500/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[10px] text-red-200 font-medium">LIVE</span>
                    </div>
                  </div>
                </div>

                {/* TikTok Video Container - Optimized for TikTok aspect ratio */}
                <div className="relative aspect-[9/16] bg-gradient-to-b from-primary/20 to-primary/40">
                  {isVisible ? (
                    <>
                      {!videoLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                                <Play className="w-5 h-5 ml-0.5" fill="white" />
                              </div>
                            </div>
                            <p className="text-xs opacity-75">Video wird geladen...</p>
                            <div className="mt-3 w-24 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
                              <div className="h-full bg-white/60 rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />
                            </div>
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
                        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-5 h-5 ml-0.5" fill="white" />
                        </div>
                        <p className="text-xs opacity-75">Video laden</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Carousel & CTA */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Text Testimonials */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-accent/50" />
                </div>
                
                <div className="min-h-[120px] relative">
                  {textTestimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 ${
                        activeTestimonial === index
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4 absolute inset-0'
                      }`}
                    >
                      <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-2xl border-2 border-white/20">
                            {testimonial.role === "Patient" ? "👨" : "👩"}
                          </div>
                          <div>
                            <div className="text-white font-semibold">{testimonial.author}</div>
                            <div className="text-white/60 text-sm">{testimonial.role}</div>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-amber-400" fill="currentColor" />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 mt-8">
                  {textTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`transition-all duration-300 rounded-full ${
                        activeTestimonial === index
                          ? 'w-8 h-2 bg-white'
                          : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "500+", label: "Zufriedene Familien" },
                { value: "5,0", label: "Sterne Bewertung" },
                { value: "98%", label: "Empfehlungsrate" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center lg:text-left">
              <p className="text-white/70 mb-4">Möchten Sie Teil unseres Teams werden?</p>
              <Link 
                to="/jobs" 
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-semibold rounded-full shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1"
              >
                <span>Jetzt bewerben</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes loading {
          0% { width: 0%; margin-left: 0; }
          50% { width: 100%; margin-left: 0; }
          100% { width: 0%; margin-left: 100%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
