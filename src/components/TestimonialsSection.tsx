import { useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const videoTestimonials = [
  {
    type: "customer",
    name: "Familie Weber",
    role: "Angehörige aus Frankfurt",
    thumbnail: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600&h=400&fit=crop",
    videoUrl: "#",
    quote: "Die Pflegerinnen von HerzPflege haben unserem Vater so viel Lebensqualität zurückgegeben.",
  },
  {
    type: "employee",
    name: "Sandra Krause",
    role: "Pflegefachkraft, 8 Jahre im Team",
    thumbnail: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop",
    videoUrl: "#",
    quote: "Hier wird Wertschätzung großgeschrieben. Der Zusammenhalt im Team ist außergewöhnlich.",
  },
];

const TestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section className="py-24 bg-primary text-primary-foreground" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-4">
            Video-Stimmen
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Echte Stimmen, echte Erfahrungen
          </h2>
          <p className="text-lg opacity-80">
            Hören Sie direkt von unseren Kunden und Mitarbeitern, was HerzPflege besonders macht.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videoTestimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              variant="glass" 
              className="bg-primary-foreground/10 border-primary-foreground/20 overflow-hidden group"
            >
              <CardContent className="p-0">
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={testimonial.thumbnail} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                    <button 
                      onClick={() => setActiveVideo(index)}
                      className="w-20 h-20 rounded-full bg-primary-foreground/90 flex items-center justify-center hover:bg-primary-foreground hover:scale-110 transition-all shadow-2xl"
                    >
                      <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                    </button>
                  </div>
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      testimonial.type === 'customer' 
                        ? 'bg-accent text-accent-foreground' 
                        : 'bg-primary-foreground text-primary'
                    }`}>
                      {testimonial.type === 'customer' ? 'Kundenstimme' : 'Mitarbeiterstimme'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-lg italic opacity-90 mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center text-xl">
                      {testimonial.type === 'employee' ? '👩‍⚕️' : '👨‍👩‍👧'}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm opacity-75">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Modal Placeholder */}
        {activeVideo !== null && (
          <div 
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div className="relative w-full max-w-4xl aspect-video bg-foreground rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-background">
                <div className="text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg opacity-75">Video-Player Platzhalter</p>
                  <p className="text-sm opacity-50 mt-2">Hier wird das Testimonial-Video eingebettet</p>
                </div>
              </div>
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
