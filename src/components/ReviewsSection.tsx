import { Star, Shield, CheckCircle, Award, TrendingUp, Sparkles, ExternalLink } from "lucide-react";

const ReviewsSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-full border border-primary/20 mb-8 shadow-lg">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">
              Qualität & Vertrauen
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Ausgezeichnete{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Pflege</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
              </svg>
            </span>
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
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 rounded-[3rem] blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
            
            <div className="relative bg-card/80 backdrop-blur-2xl rounded-[2rem] border border-border/50 shadow-2xl overflow-hidden group-hover:border-primary/20 transition-colors">
              {/* Decorative corner gradients */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-br-[5rem]" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-accent/10 to-transparent rounded-tl-[5rem]" />
              
              {/* Header */}
              <div className="relative p-8 lg:p-10 border-b border-border/50">
                <div className="flex items-center justify-center gap-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 rounded-2xl blur-lg opacity-30" />
                    <div className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                      <svg viewBox="0 0 24 24" className="w-10 h-10">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground">Google Bewertungen</h3>
                    <p className="text-muted-foreground text-lg">Echte Erfahrungen unserer Kunden</p>
                  </div>
                </div>
              </div>
              
              {/* Rating */}
              <div className="relative p-10 lg:p-12">
                <div className="flex flex-col items-center justify-center text-center">
                  {/* Stars with animated glow */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 blur-2xl bg-amber-400/40 scale-150 animate-pulse" style={{ animationDuration: "3s" }} />
                    <div className="relative flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="relative">
                          <Star className="w-12 h-12 fill-amber-400 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="font-display font-bold text-7xl lg:text-8xl bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent mb-3">5.0</div>
                  <p className="text-muted-foreground text-lg mb-10">Basierend auf Google Bewertungen</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://www.google.com/search?sca_esv=207ca25c77663f86&q=avyta+pflegegesellschaft+mbh&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMYYyayZzDczz8T-nilhYEThfPqZVI7WvFNdcdcpuxjJFwonmwxZ7Ujtup9HAmKu1bW5u9Ns%3D&uds=AOm0WdH7vAu8qM0e-khCodkgPL2noXzCJ2kvwrznI0OSXdCSHv7ieuiFH72boVTz_PjiicMe9pbvL2oQXE6rIzVyUJwQPopEK7XGY-umsJ-5Lsw0CU-xNP97jqteOxkejNvze8d0ROXh&sa=X&ved=2ahUKEwix9_z_tOWRAxXD9AIHHVhVATgQ3PALegQIGxAE&biw=1470&bih=736&dpr=2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-primary to-accent text-white rounded-full font-bold hover:opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/20 hover:scale-105"
                    >
                      <Star className="w-5 h-5" fill="currentColor" />
                      <span>Alle Bewertungen</span>
                      <ExternalLink className="w-4 h-4 opacity-70" />
                    </a>
                    <a
                      href="https://google.com/maps/place//data=!4m3!3m2!1s0x47bd0ea26295cf3d:0x419b1bced25993f1!12e1?source=g.page.m._&laa=merchant-review-solicitation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-card border-2 border-accent text-accent rounded-full font-bold hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Sparkles className="w-5 h-5" />
                      <span>Jetzt Bewerten</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-4 lg:gap-6 px-8 py-6 bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 shadow-xl">
            <div className="flex items-center gap-3 px-5 py-3 bg-primary/10 rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-bold text-foreground">100% Vertrauen</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-emerald-500/10 rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
              </div>
              <span className="text-sm font-bold text-foreground">Geprüfte Qualität</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-amber-500/10 rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-500" />
              </div>
              <span className="text-sm font-bold text-foreground">Alle Kassen zugelassen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;