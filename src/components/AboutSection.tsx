import { Heart, Users, Clock, Award } from "lucide-react";

const features = [
  { icon: Users, title: "Nur Frauen als Pflegerinnen", description: "Unser Team besteht ausschließlich aus qualifizierten Pflegerinnen – für ein besonders vertrauensvolles Pflegeerlebnis." },
  { icon: Clock, title: "24/7 Erreichbarkeit", description: "Ob Tag oder Nacht – wir sind immer für Sie da. Unsere Notfall-Hotline ist rund um die Uhr besetzt." },
  { icon: Heart, title: "Spezialisiert auf Demenz", description: "Wir sind speziell geschult im Umgang mit Demenzerkrankungen und bieten einfühlsame, kompetente Betreuung." },
  { icon: Award, title: "Spezialisiert auf Diabetes", description: "Unsere Pflegekräfte sind Experten für die Betreuung von Diabetes-Patienten mit allen notwendigen Versorgungsleistungen." },
];

const AboutSection = () => {
  return (
    <section className="py-24 overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">Wer sind wir</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Was uns besonders macht</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unser Team aus qualifizierten Pflegekräften versteht, dass gute Pflege mehr ist als nur medizinische Versorgung – es geht um Menschlichkeit, Würde und Lebensqualität.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="font-display text-2xl font-bold mb-4">Unsere Mission</h3>
                <p className="leading-relaxed opacity-90 mb-6">
                  Im Laufe der Jahre und mit stetiger Nachfrage haben wir entschieden unsere Fähigkeiten zu erweitern und uns für ein Fachgebiet spezialisiert und zertifiziert: Demenz- und Diabetes Erkrankungen.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center text-2xl">👩‍⚕️</div>
                  <div>
                    <div className="font-semibold">Jasmina Müller</div>
                    <div className="text-sm opacity-75">Geschäftsleitung, PDL & Praxisanleitung</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-card rounded-xl p-6 shadow-lg border border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-accent">20+</div>
                    <div className="text-xs text-muted-foreground">Mitarbeiter</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-accent">2</div>
                    <div className="text-xs text-muted-foreground">Standorte</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
