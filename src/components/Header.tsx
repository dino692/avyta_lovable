import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const leistungen = [
  { name: "Behandlungspflege", href: "/leistungen/behandlungspflege", description: "Medizinische Versorgung nach ärztlicher Verordnung" },
  { name: "Grundpflege", href: "/leistungen/grundpflege", description: "Unterstützung bei alltäglichen Verrichtungen" },
  { name: "Intensivpflege", href: "/leistungen/intensivpflege", description: "Betreuung für beatmungspflichtige Patienten" },
  { name: "Haushaltshilfe", href: "/leistungen/haushaltshilfe", description: "Hilfe im Haushalt und Alltag" },
  { name: "24-Stunden-Pflege", href: "/leistungen/24-stunden", description: "Rund-um-die-Uhr Betreuung zu Hause" },
  { name: "Pflegeberatung", href: "/leistungen/pflegeberatung", description: "Beratung zu Pflegeleistungen und Ansprüchen" },
  { name: "Verhinderungspflege", href: "/leistungen/verhinderungspflege", description: "Vertretung pflegender Angehöriger" },
];

const standorte = {
  hauptstandorte: [
    { name: "Frankfurt", href: "/standorte/frankfurt" },
    { name: "Bad Vilbel", href: "/standorte/bad-vilbel" },
  ],
  frankfurtStadtteile: [
    { name: "Bornheim", href: "/standorte/frankfurt/bornheim" },
    { name: "Bockenheim", href: "/standorte/frankfurt/bockenheim" },
    { name: "Griesheim", href: "/standorte/frankfurt/griesheim" },
    { name: "Ginnheim", href: "/standorte/frankfurt/ginnheim" },
    { name: "Sachsenhausen", href: "/standorte/frankfurt/sachsenhausen" },
    { name: "Praunheim", href: "/standorte/frankfurt/praunheim" },
    { name: "Niederrad", href: "/standorte/frankfurt/niederrad" },
    { name: "Höchst", href: "/standorte/frankfurt/hoechst" },
    { name: "Rödelheim", href: "/standorte/frankfurt/roedelheim" },
  ],
};

const navLinks = [
  { name: "Start", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Jobs", href: "/jobs" },
  { name: "Blog", href: "/blog" },
  { name: "Kontakt", href: "/#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);
  const [mobileStandorteOpen, setMobileStandorteOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/avyta-logo.png" alt="AVYTA Pflegegesellschaft mbH" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium px-4 py-2">
                  Start
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/team" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium px-4 py-2">
                  Team
                </Link>
              </NavigationMenuItem>

              {/* Leistungen Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-muted-foreground hover:text-primary font-medium bg-transparent">
                  Leistungen
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {leistungen.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                        >
                          <div className="font-medium text-foreground group-hover:text-primary">
                            {item.name}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {item.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-border mt-3 pt-3">
                      <Link
                        to="/leistungen"
                        className="text-primary font-medium text-sm hover:underline"
                      >
                        Alle Leistungen ansehen →
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Standorte Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-muted-foreground hover:text-primary font-medium bg-transparent">
                  Standorte
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <div className="mb-4">
                      <div className="text-sm font-medium text-muted-foreground mb-2">Hauptstandorte</div>
                      <div className="flex gap-2">
                        {standorte.hauptstandorte.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">Frankfurt Stadtteile</div>
                      <div className="grid grid-cols-3 gap-2">
                        {standorte.frankfurtStadtteile.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="px-3 py-2 rounded-lg text-sm hover:bg-primary/5 text-foreground hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/jobs" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium px-4 py-2">
                  Jobs
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium px-4 py-2">
                  Blog
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium px-4 py-2">
                  Kontakt
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+496915391405" className="flex items-center gap-2 text-primary font-medium">
              <Phone className="w-4 h-4" />
              069 153 914 05
            </a>
            <Button variant="hero" asChild>
              <a href="/#contact">Kostenlose Erstberatung</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-muted-foreground hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Start
              </Link>
              <Link
                to="/team"
                className="text-muted-foreground hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>

              {/* Mobile Leistungen */}
              <div>
                <button
                  onClick={() => setMobileLeistungenOpen(!mobileLeistungenOpen)}
                  className="flex items-center justify-between w-full text-muted-foreground hover:text-primary transition-colors py-2 font-medium"
                >
                  Leistungen
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileLeistungenOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileLeistungenOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {leistungen.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block text-muted-foreground hover:text-primary py-1 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Standorte */}
              <div>
                <button
                  onClick={() => setMobileStandorteOpen(!mobileStandorteOpen)}
                  className="flex items-center justify-between w-full text-muted-foreground hover:text-primary transition-colors py-2 font-medium"
                >
                  Standorte
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileStandorteOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileStandorteOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Hauptstandorte</div>
                    {standorte.hauptstandorte.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block text-muted-foreground hover:text-primary py-1 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-3 mb-1">Frankfurt</div>
                    {standorte.frankfurtStadtteile.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block text-muted-foreground hover:text-primary py-1 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/jobs"
                className="text-muted-foreground hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Jobs
              </Link>
              <Link
                to="/blog"
                className="text-muted-foreground hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <a
                href="/#contact"
                className="text-muted-foreground hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </a>

              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <a href="tel:+496915391405" className="flex items-center gap-2 text-primary font-medium">
                  <Phone className="w-4 h-4" />
                  069 153 914 05
                </a>
                <Button variant="hero" className="w-full" asChild>
                  <a href="/#contact">Kostenlose Erstberatung</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
