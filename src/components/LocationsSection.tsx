import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const locations = [
  { city: "Frankfurt", address: "Hauptstandort", phone: "069 153 914 05", link: "/standorte/frankfurt" },
  { city: "Bad Vilbel", address: "Wetteraukreis", phone: "069 153 914 05", link: "/standorte/bad-vilbel" },
];

const stadtteile = [
  { name: "Bockenheim", link: "/standorte/frankfurt/pflegedienst-bockenheim" },
  { name: "Bornheim", link: "/standorte/frankfurt/bornheim" },
  { name: "Dornbusch", link: "/standorte/frankfurt/dornbusch" },
  { name: "Eckenheim", link: "/standorte/frankfurt/eckenheim" },
  { name: "Eschersheim", link: "/standorte/frankfurt/eschersheim" },
  { name: "Ginnheim", link: "/standorte/frankfurt/pflegedienst-ginnheim" },
  { name: "Griesheim", link: "/standorte/frankfurt/griesheim" },
  { name: "Heddernheim", link: "/standorte/frankfurt/heddernheim" },
  { name: "Höchst", link: "/standorte/frankfurt/hoechst" },
  { name: "Nieder-Eschbach", link: "/standorte/frankfurt/nieder-eschbach" },
  { name: "Niederrad", link: "/standorte/frankfurt/niederrad" },
  { name: "Nordend", link: "/standorte/frankfurt/nordend" },
  { name: "Ostend", link: "/standorte/frankfurt/ostend" },
  { name: "Praunheim", link: "/standorte/frankfurt/pflegedienst-praunheim" },
  { name: "Preungesheim", link: "/standorte/frankfurt/preungesheim" },
  { name: "Rödelheim", link: "/standorte/frankfurt/pflegedienst-roedelheim" },
  { name: "Sachsenhausen", link: "/standorte/frankfurt/pflegedienst-frankfurt-sachsenhausen" },
  { name: "Seckbach", link: "/standorte/frankfurt/seckbach" },
  { name: "Westend", link: "/standorte/frankfurt/westend" },
];

const LocationsSection = () => {
  return (
    <section className="py-24" id="locations">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">Unsere Standorte</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Immer in Ihrer Nähe</h2>
          <p className="text-lg text-muted-foreground">In Frankfurt und Bad Vilbel sind wir schnell bei Ihnen – für eine optimale Versorgung vor Ort.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {locations.map((location) => (
            <Card key={location.city} variant="elevated" className="group cursor-pointer hover:border-primary/30">
              <CardContent className="p-6">
                <Link to={location.link} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-xl text-foreground mb-1">{location.city}</h3>
                    <p className="text-muted-foreground mb-2">{location.address}</p>
                    <span className="inline-flex items-center gap-1 text-primary"><Phone className="w-4 h-4" />{location.phone}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mb-8">
          <h3 className="text-xl font-display font-semibold text-foreground mb-6">Frankfurter Stadtteile</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {stadtteile.map((stadtteil) => (
              <Link key={stadtteil.name} to={stadtteil.link} className="px-4 py-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium">
                {stadtteil.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
