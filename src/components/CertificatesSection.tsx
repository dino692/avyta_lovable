import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

const certificates = [
  { name: "MDK Qualitätsprüfung", grade: "Sehr gut (1,0)", logo: "🏆" },
  { name: "TÜV Zertifiziert", grade: "ISO 9001:2015", logo: "✓" },
  { name: "AOK Pflegepartner", grade: "Vertragspartner", logo: "🤝" },
  { name: "Barmer Qualitätspartner", grade: "Empfohlen", logo: "⭐" },
  { name: "DAK Gesundheit", grade: "Vertragspartner", logo: "🏥" },
  { name: "Techniker Krankenkasse", grade: "Kooperationspartner", logo: "💙" },
  { name: "IKK Classic", grade: "Vertragspartner", logo: "🤝" },
  { name: "Pflegestützpunkt Frankfurt", grade: "Offizieller Partner", logo: "🏛️" },
];

const CertificatesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => 
        prev >= certificates.length - itemsPerView ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= certificates.length - itemsPerView ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev <= 0 ? certificates.length - itemsPerView : prev - 1
    );
  };

  return (
    <section className="py-16 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Zertifikate & Partner
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Ausgezeichnete Qualität & starke Partner
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Items Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all text-center h-full">
                    <div className="text-4xl mb-3">{cert.logo}</div>
                    <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{cert.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: certificates.length - itemsPerView + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
