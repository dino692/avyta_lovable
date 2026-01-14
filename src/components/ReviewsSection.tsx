import { Star, Shield, CheckCircle, Award, TrendingUp, Sparkles } from "lucide-react";

const ReviewsSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Decorative orbs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Qualität & Vertrauen
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Ausgezeichnete <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Pflege</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Unsere Qualität wird regelmäßig geprüft und bestätigt – von unabhängigen 
            Instituten und zufriedenen Patienten.
          </p>
        </div>

        {/* Google Reviews Widget */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative group">
            {/* Card glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl overflow-hidden">
              {/* Header with gradient */}
              <div className="p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-b border-border/50">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-8 h-8">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="font-display font-bold text-2xl text-foreground">Google Bewertungen</h3>
                    <p className="text-muted-foreground">Echte Erfahrungen unserer Kunden</p>
                  </div>
                </div>
              </div>
              
              {/* Rating */}
              <div className="p-10">
                <div className="flex flex-col items-center justify-center text-center">
                  {/* Stars with glow */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 blur-xl bg-amber-400/30" />
                    <div className="relative flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-10 h-10 fill-amber-400 text-amber-400 drop-shadow-lg" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="font-display font-bold text-6xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-2">5.0</div>
                  <p className="text-muted-foreground text-lg mb-8">Basierend auf Google Bewertungen</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://www.google.com/search?sca_esv=207ca25c77663f86&q=avyta+pflegegesellschaft+mbh&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMYYyayZzDczz8T-nilhYEThfPqZVI7WvFNdcdcpuxjJFwonmwxZ7Ujtup9HAmKu1bW5u9Ns%3D&uds=AOm0WdH7vAu8qM0e-khCodkgPL2noXzCJ2kvwrznI0OSXdCSHv7ieuiFH72boVTz_PjiicMe9pbvL2oQXE6rIzVyUJwQPopEK7XGY-umsJ-5Lsw0CU-xNP97jqteOxkejNvze8d0ROXh&sa=X&ved=2ahUKEwix9_z_tOWRAxXD9AIHHVhVATgQ3PALegQIGxAE&biw=1470&bih=736&dpr=2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                      <Star className="w-5 h-5" />
                      Alle Bewertungen
                    </a>
                    <a
                      href="https://google.com/maps/place//data=!4m3!3m2!1s0x47bd0ea26295cf3d:0x419b1bced25993f1!12e1?source=g.page.m._&laa=merchant-review-solicitation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-8 py-4 bg-card border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Sparkles className="w-5 h-5" />
                      Jetzt Bewerten
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-6 px-8 py-5 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-xl">
            <div className="flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">100% Vertrauen</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-emerald-500/10 rounded-full">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-sm font-semibold text-foreground">Geprüfte Qualität</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-amber-500/10 rounded-full">
              <Award className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-semibold text-foreground">Alle Kassen zugelassen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
