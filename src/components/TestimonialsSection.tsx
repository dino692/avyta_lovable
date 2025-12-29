import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    type: "patient",
    name: "Helga Müller, 78",
    role: "Patientin seit 2019",
    content: "Seit die Pflegerinnen von HerzPflege zu mir kommen, fühle ich mich nicht mehr allein. Sie geben mir nicht nur medizinische Hilfe, sondern auch das Gefühl, dass jemand sich wirklich kümmert.",
    rating: 5,
  },
  {
    type: "employee",
    name: "Sandra Krause",
    role: "Pflegefachkraft, 8 Jahre im Team",
    content: "Ich habe schon bei vielen Pflegediensten gearbeitet, aber hier ist es anders. Die Wertschätzung für unsere Arbeit und der Zusammenhalt im Team sind außergewöhnlich.",
    rating: 5,
  },
  {
    type: "patient",
    name: "Familie Weber",
    role: "Angehörige",
    content: "Als wir Hilfe für unseren Vater brauchten, waren wir überfordert. HerzPflege hat uns durch den ganzen Prozess begleitet und nimmt uns heute so viel Last von den Schultern.",
    rating: 5,
  },
  {
    type: "employee",
    name: "Michael Hoffmann",
    role: "Pflegehelfer, 3 Jahre im Team",
    content: "Die flexiblen Arbeitszeiten und die faire Bezahlung haben mein Leben verbessert. Und die Fortbildungsmöglichkeiten sind großartig!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<"all" | "patient" | "employee">("all");

  const filteredTestimonials = testimonials.filter(
    (t) => filter === "all" || t.type === filter
  );

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= filteredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 bg-primary text-primary-foreground" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-4">
            Stimmen & Erfahrungen
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Was andere über uns sagen
          </h2>
          <p className="text-lg opacity-80">
            Hören Sie, was unsere Patienten, ihre Familien und unsere Mitarbeiter 
            über die Arbeit bei HerzPflege berichten.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { key: "all", label: "Alle" },
            { key: "patient", label: "Patienten & Angehörige" },
            { key: "employee", label: "Mitarbeiter" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setFilter(tab.key as typeof filter);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === tab.key
                  ? "bg-primary-foreground text-primary"
                  : "bg-primary-foreground/10 hover:bg-primary-foreground/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {filteredTestimonials.length > 0 && (
              <Card variant="glass" className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-8 md:p-12">
                  <Quote className="w-12 h-12 opacity-30 mb-6" />

                  <p className="text-xl md:text-2xl leading-relaxed mb-8 font-light">
                    "{filteredTestimonials[currentIndex].content}"
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center text-2xl">
                        {filteredTestimonials[currentIndex].type === "employee" ? "👩‍⚕️" : "👤"}
                      </div>
                      <div>
                        <div className="font-semibold text-lg">
                          {filteredTestimonials[currentIndex].name}
                        </div>
                        <div className="text-sm opacity-75">
                          {filteredTestimonials[currentIndex].role}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {[...Array(filteredTestimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation */}
            {filteredTestimonials.length > 1 && (
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevSlide}
                  className="hover:bg-primary-foreground/10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {filteredTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-primary-foreground w-6"
                          : "bg-primary-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextSlide}
                  className="hover:bg-primary-foreground/10"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
