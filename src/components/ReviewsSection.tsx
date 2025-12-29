import { Star, Award, Shield, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    name: "MDK Qualitätsprüfung",
    grade: "Note 1,0",
    description: "Sehr gute Bewertung durch den Medizinischen Dienst",
    icon: Award,
  },
  {
    name: "TÜV Zertifiziert",
    grade: "ISO 9001:2015",
    description: "Qualitätsmanagement nach höchsten Standards",
    icon: Shield,
  },
  {
    name: "Dekra Prüfsiegel",
    grade: "Exzellent",
    description: "Arbeitssicherheit und Hygiene geprüft",
    icon: CheckCircle,
  },
];

const reviews = [
  {
    platform: "Google",
    rating: 4.9,
    count: 328,
    logo: "⭐",
  },
  {
    platform: "Jameda",
    rating: 4.8,
    count: 156,
    logo: "💚",
  },
  {
    platform: "Pflegelotse",
    rating: 4.9,
    count: 89,
    logo: "🏆",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Qualität & Vertrauen
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Ausgezeichnete Pflege
          </h2>
          <p className="text-lg text-muted-foreground">
            Unsere Qualität wird regelmäßig geprüft und bestätigt – von unabhängigen 
            Instituten und zufriedenen Patienten.
          </p>
        </div>

        {/* Online Reviews */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {reviews.map((review) => (
            <Card key={review.platform} variant="default" className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{review.logo}</div>
                <div className="font-display font-bold text-3xl text-foreground mb-1">
                  {review.rating}
                </div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(review.rating)
                          ? "fill-accent text-accent"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-muted-foreground text-sm">
                  {review.count} Bewertungen auf {review.platform}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={cert.name}
              variant="elevated"
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <cert.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-accent mb-1">
                      {cert.grade}
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
