import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Award, Shield, Heart, Handshake, Building2, Star } from "lucide-react";

const certificates = [
  { name: "MDK Qualitätsprüfung", grade: "Note 1,4 – Sehr gut", icon: Award, color: "from-amber-400 to-amber-600" },
  { name: "TÜV Zertifiziert", grade: "ISO 9001:2015", icon: Shield, color: "from-blue-500 to-blue-700" },
  { name: "AOK Pflegepartner", grade: "Offizieller Vertragspartner", icon: Handshake, color: "from-green-500 to-green-700" },
  { name: "Barmer Qualitätspartner", grade: "Empfohlener Dienst", icon: Star, color: "from-purple-500 to-purple-700" },
  { name: "DAK Gesundheit", grade: "Vertragspartner", icon: Heart, color: "from-rose-500 to-rose-700" },
  { name: "Techniker Krankenkasse", grade: "Kooperationspartner", icon: Building2, color: "from-cyan-500 to-cyan-700" },
  { name: "IKK Classic", grade: "Vertragspartner", icon: Handshake, color: "from-orange-500 to-orange-700" },
  { name: "Pflegestützpunkt Frankfurt", grade: "Offizieller Partner", icon: Building2, color: "from-indigo-500 to-indigo-700" },
];

const CertificatesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  // Get visible items (show 4 on desktop, 2 on tablet, 1 on mobile)
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % certificates.length;
      items.push({ ...certificates[index], originalIndex: index });
    }
    return items;
  };

  return (
    <section 
      className="py-20 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary/10 rounded-full mb-6">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Zertifikate & Partner
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Vertrauen durch <span className="text-primary">Qualität</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Unsere Arbeit wird regelmäßig von unabhängigen Institutionen geprüft. 
            Wir sind stolzer Partner führender Krankenkassen.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-20 w-12 h-12 rounded-full bg-card border-2 border-primary/20 shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
            aria-label="Vorheriges Zertifikat"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-20 w-12 h-12 rounded-full bg-card border-2 border-primary/20 shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
            aria-label="Nächstes Zertifikat"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Items Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
            {getVisibleItems().map((cert, index) => (
              <div
                key={`${cert.name}-${cert.originalIndex}`}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-500 h-full overflow-hidden hover:shadow-lg hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  {/* Icon with gradient background */}
                  <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="relative font-display font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="relative text-sm text-muted-foreground leading-relaxed">
                    {cert.grade}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-10">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-primary/20 w-2 hover:bg-primary/40'
                }`}
                aria-label={`Gehe zu Zertifikat ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust message */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 rounded-full">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-foreground">
              Geprüfte Qualität • Alle Kassen zugelassen • Regelmäßige Audits
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;