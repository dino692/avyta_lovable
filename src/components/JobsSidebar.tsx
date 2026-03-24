import { Link, useLocation } from "react-router-dom";
import { Briefcase, Sparkles, Users, Heart, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const jobLinks = [
  { name: "Alle Stellenangebote", href: "/karriere/stellenangebote-pflege-frankfurt", icon: Briefcase },
  { name: "Pflegefachkraft", href: "/karriere/pflegefachkraft-frankfurt", icon: Sparkles },
  { name: "Pflegehilfskraft", href: "/karriere/pflegehilfskraft-frankfurt", icon: Users },
  { name: "Pflegehelfer/in", href: "/karriere/pflegehelfer-frankfurt", icon: Heart },
  { name: "Haushaltshilfe", href: "/karriere/haushaltshilfe-frankfurt", icon: Home },
  { name: "Fachbereichsleitung", href: "/karriere/fachbereichsleitung-frankfurt", icon: Sparkles },
];

const JobsSidebar = () => {
  const location = useLocation();

  return (
    <div className="p-6 bg-muted/30 rounded-2xl">
      <h3 className="font-semibold text-foreground mb-4">Alle Jobs</h3>
      <nav className="space-y-2">
        {jobLinks.map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
              )}
            >
              <link.icon className="w-4 h-4" />
              {link.name}
            </Link>
          );
        })}
      </nav>
      <div className="mt-6 pt-6 border-t border-border">
        <Link
          to="/karriere"
          className="text-primary text-sm font-medium hover:underline"
        >
          ← Zur Karriere-Übersicht
        </Link>
      </div>
    </div>
  );
};

export default JobsSidebar;
