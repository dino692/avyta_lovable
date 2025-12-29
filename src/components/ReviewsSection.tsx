import { Star, Award, Shield, CheckCircle, TrendingUp, Heart, ThumbsUp } from "lucide-react";

const certifications = [
  {
    name: "MDK Qualitätsprüfung",
    grade: "Note 1,4",
    description: "Sehr gute Bewertung durch den Medizinischen Dienst",
    icon: Award,
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "TÜV Zertifiziert",
    grade: "ISO 9001:2015",
    description: "Qualitätsmanagement nach höchsten Standards",
    icon: Shield,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Dekra Prüfsiegel",
    grade: "Exzellent",
    description: "Arbeitssicherheit und Hygiene geprüft",
    icon: CheckCircle,
    color: "from-emerald-500 to-teal-600",
  },
];

const reviews = [
  {
    platform: "Google",
    rating: 5.0,
    count: 328,
    icon: Star,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    platform: "Jameda",
    rating: 4.8,
    count: 156,
    icon: Heart,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
  },
  {
    platform: "Pflegelotse",
    rating: 4.9,
    count: 89,
    icon: ThumbsUp,
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-secondary/30" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Qualität & Vertrauen
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Ausgezeichnete <span className="text-primary">Pflege</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Unsere Qualität wird regelmäßig geprüft und bestätigt – von unabhängigen 
            Instituten und zufriedenen Patienten.
          </p>
        </div>

        {/* Online Reviews */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {reviews.map((review, index) => (
            <div 
              key={review.platform} 
              className="group relative animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative ${review.bgColor} rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden`}>
                {/* Decorative gradient blob */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${review.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                
                {/* Platform icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${review.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <review.icon className="w-8 h-8 text-white" />
                </div>

                {/* Rating */}
                <div className="relative">
                  <div className="font-display font-bold text-5xl text-foreground mb-3">
                    {review.rating}
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(review.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {review.count} Bewertungen auf <span className="text-foreground">{review.platform}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-display font-bold text-foreground">
              Unsere Zertifizierungen
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="group animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg overflow-hidden">
                  {/* Gradient line at top */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`} />
                  
                  <div className="flex items-start gap-5">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${cert.color} text-white mb-2`}>
                        {cert.grade}
                      </div>
                      <h3 className="font-display font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-4 px-8 py-4 bg-card rounded-full border border-border shadow-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">100% Vertrauen</span>
            </div>
            <div className="w-px h-6 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-medium text-foreground">Geprüfte Qualität</span>
            </div>
            <div className="w-px h-6 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium text-foreground">Alle Kassen zugelassen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;