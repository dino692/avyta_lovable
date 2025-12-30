import { Star, Award, Shield, CheckCircle, TrendingUp } from "lucide-react";

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
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* Google Reviews Widget */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">Google Bewertungen</h3>
                    <p className="text-sm text-muted-foreground">Echte Erfahrungen unserer Kunden</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="font-display font-bold text-5xl text-foreground mb-2">5.0</div>
                  <p className="text-muted-foreground mb-6">Basierend auf Google Bewertungen</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://google.com/maps/place//data=!4m3!3m2!1s0x47bd0ea26295cf3d:0x419b1bced25993f1!12e1?source=g.page.m._&laa=merchant-review-solicitation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                    >
                      <Star className="w-5 h-5" />
                      Alle Bewertungen ansehen
                    </a>
                    <a
                      href="https://google.com/maps/place//data=!4m3!3m2!1s0x47bd0ea26295cf3d:0x419b1bced25993f1!12e1?source=g.page.m._&laa=merchant-review-solicitation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl"
                    >
                      <Star className="w-5 h-5 fill-current" />
                      Jetzt Bewerten
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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