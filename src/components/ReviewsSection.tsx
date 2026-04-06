import { Star, Shield, CheckCircle, Award, TrendingUp, ExternalLink } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const ReviewsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [rating] = useState(5.0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-secondary/30" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Qualität & Vertrauen
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Ausgezeichnete{" "}
            <span className="text-primary">Pflege</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Unsere Qualität wird regelmäßig geprüft und bestätigt – von unabhängigen 
            Instituten und zufriedenen Patienten.
          </p>
        </div>

        {/* Google Reviews Widget */}
        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
            {/* Gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Google logo and rating */}
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                      <svg viewBox="0 0 24 24" className="w-7 h-7">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    <span className="font-display font-bold text-xl text-foreground">Google Bewertungen</span>
                  </div>
                  
                  {/* Star rating */}
                  <div className="flex items-center justify-center md:justify-start gap-1.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-8 h-8 transition-all duration-300 ${i < Math.floor(rating) ? 'fill-amber-400 text-amber-400 scale-100' : 'text-gray-200 scale-90'}`}
                        style={{ transitionDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  
                  {/* Rating number */}
                  <div className="font-display font-bold text-6xl text-foreground">
                    {rating.toFixed(1)}
                  </div>
                  <p className="text-muted-foreground mt-2">Durchschnittliche Bewertung</p>
                </div>
                
                {/* Divider */}
                <div className="hidden md:block w-px h-32 bg-border" />
                
                {/* CTA buttons */}
                <div className="flex flex-col gap-4 flex-1">
                  <p className="text-center md:text-left text-muted-foreground mb-2">
                    Überzeugen Sie sich selbst von unserer Qualität
                  </p>
                  <a
                    href="https://www.google.com/search?sca_esv=207ca25c77663f86&q=avyta+pflegegesellschaft+mbh&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMYYyayZzDczz8T-nilhYEThfPqZVI7WvFNdcdcpuxjJFwonmwxZ7Ujtup9HAmKu1bW5u9Ns%3D&uds=AOm0WdH7vAu8qM0e-khCodkgPL2noXzCJ2kvwrznI0OSXdCSHv7ieuiFH72boVTz_PjiicMe9pbvL2oQXE6rIzVyUJwQPopEK7XGY-umsJ-5Lsw0CU-xNP97jqteOxkejNvze8d0ROXh&sa=X&ved=2ahUKEwix9_z_tOWRAxXD9AIHHVhVATgQ3PALegQIGxAE&biw=1470&bih=736&dpr=2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
                  >
                    <Star className="w-5 h-5" />
                    Alle Bewertungen lesen
                    <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="https://google.com/maps/place//data=!4m3!3m2!1s0x47bd0ea26295cf3d:0x419b1bced25993f1!12e1?source=g.page.m._&laa=merchant-review-solicitation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-card border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary/5 transition-all group"
                  >
                    <Star className="w-5 h-5" fill="currentColor" />
                    Jetzt Bewertung schreiben
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 px-6 py-4 glass rounded-2xl shadow-sm">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-medium text-foreground">100% Vertrauen</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-4 glass rounded-2xl shadow-sm">
            <CheckCircle className="w-6 h-6 text-emerald-500" />
            <span className="font-medium text-foreground">Geprüfte Qualität</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-4 glass rounded-2xl shadow-sm">
            <Award className="w-6 h-6 text-amber-500" />
            <span className="font-medium text-foreground">Alle Kassen zugelassen</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;