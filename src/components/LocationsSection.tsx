import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const locations = [
  {
    city: "Berlin Mitte",
    address: "Friedrichstraße 123",
    zip: "10117 Berlin",
    phone: "030 / 123 456 78",
    link: "/standorte/berlin-mitte",
  },
  {
    city: "Berlin Charlottenburg",
    address: "Kurfürstendamm 45",
    zip: "10719 Berlin",
    phone: "030 / 234 567 89",
    link: "/standorte/charlottenburg",
  },
  {
    city: "Berlin Prenzlauer Berg",
    address: "Schönhauser Allee 78",
    zip: "10439 Berlin",
    phone: "030 / 345 678 90",
    link: "/standorte/prenzlauer-berg",
  },
  {
    city: "Berlin Steglitz",
    address: "Schloßstraße 56",
    zip: "12165 Berlin",
    phone: "030 / 456 789 01",
    link: "/standorte/steglitz",
  },
  {
    city: "Potsdam",
    address: "Brandenburger Str. 34",
    zip: "14467 Potsdam",
    phone: "0331 / 567 890 12",
    link: "/standorte/potsdam",
  },
];

const LocationsSection = () => {
  return (
    <section className="py-24" id="locations">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Unsere Standorte
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Immer in Ihrer Nähe
          </h2>
          <p className="text-lg text-muted-foreground">
            Mit 5 Standorten in Berlin und Brandenburg sind wir schnell bei Ihnen – 
            für eine optimale Versorgung vor Ort.
          </p>
        </div>

        {/* Map placeholder with locations */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden bg-muted min-h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <p className="text-muted-foreground">
                  Interaktive Karte wird geladen...
                </p>
              </div>
            </div>
            
            {/* Decorative pins */}
            <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg animate-float">
              <MapPin className="w-4 h-4 text-accent-foreground" />
            </div>
            <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "1s" }}>
              <MapPin className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "2s" }}>
              <MapPin className="w-4 h-4 text-accent-foreground" />
            </div>
          </div>

          {/* Location List */}
          <div className="space-y-4">
            {locations.map((location, index) => (
              <Card
                key={location.city}
                variant="default"
                className="group cursor-pointer hover:border-primary/30"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        {location.city}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {location.address}, {location.zip}
                      </p>
                      <a
                        href={`tel:${location.phone.replace(/\s|\//g, "")}`}
                        className="inline-flex items-center gap-1 text-sm text-primary mt-1"
                      >
                        <Phone className="w-3 h-3" />
                        {location.phone}
                      </a>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            Alle Standorte anzeigen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
