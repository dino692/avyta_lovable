import { useState } from "react";
import { Play, Quote, X, Star, Users, Heart } from "lucide-react";

const videoTestimonials = [
  {
    type: "customer",
    name: "Familie Weber",
    role: "Angehörige aus Frankfurt-Bornheim",
    thumbnail: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600&h=400&fit=crop",
    videoUrl: "#",
    quote: "Die Pflegerinnen von AVYTA haben unserem Vater so viel Lebensqualität zurückgegeben. Wir sind unendlich dankbar.",
    rating: 5,
  },
  {
    type: "employee",
    name: "Sandra Krause",
    role: "Pflegefachkraft, 8 Jahre im Team",
    thumbnail: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop",
    videoUrl: "#",
    quote: "Hier wird Wertschätzung großgeschrieben. Der Zusammenhalt im Team ist außergewöhnlich – wie eine Familie.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-28 relative overflow-hidden" id="testimonials">
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
        <div className="text-center max-w-3xl mx-auto mb-20">
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
            Hören Sie direkt von unseren Kunden und Mitarbeitern, was AVYTA besonders macht.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {videoTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20">
                {/* Video Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={testimonial.thumbnail} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => setActiveVideo(index)}
                      aria-label={`Video von ${testimonial.name} abspielen`}
                      className="relative w-24 h-24 rounded-full bg-white flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-2xl"
                    >
                      {/* Pulse animation ring */}
                      <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-30" />
                      <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
                    </button>
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-5 left-5">
                    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                      testimonial.type === 'customer' 
                        ? 'bg-accent text-white' 
                        : 'bg-white text-primary'
                    }`}>
                      {testimonial.type === 'customer' ? (
                        <>
                          <Heart className="w-4 h-4" fill="currentColor" />
                          Kundenstimme
                        </>
                      ) : (
                        <>
                          <Users className="w-4 h-4" />
                          Mitarbeiterstimme
                        </>
                      )}
                    </span>
                  </div>

                  {/* Rating stars */}
                  <div className="absolute bottom-5 left-5 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-white/20 mb-4" />
                  
                  <p className="text-xl text-white font-medium leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl border-2 border-white/30">
                      {testimonial.type === 'employee' ? '👩‍⚕️' : '👨‍👩‍👧'}
                    </div>
                    <div>
                      <div className="font-display font-semibold text-white text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-white/70">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-4">Möchten Sie Ihre Erfahrung teilen?</p>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-colors"
          >
            Kontaktieren Sie uns
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-10 h-10 opacity-50" />
                </div>
                <p className="text-xl font-medium opacity-75">Video-Player Platzhalter</p>
                <p className="text-sm opacity-50 mt-2">Hier wird das Testimonial-Video eingebettet</p>
              </div>
            </div>
            <button 
              onClick={() => setActiveVideo(null)}
              aria-label="Video schließen"
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;