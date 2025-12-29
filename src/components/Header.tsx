import { useState } from "react";
import { Menu, X, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Start", href: "#" },
  { name: "Team", href: "#about" },
  { name: "Leistungen", href: "#services" },
  { name: "Standorte", href: "#locations" },
  { name: "Karriere", href: "#testimonials" },
  { name: "Blog", href: "#blog" },
  { name: "Kontakt", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-semibold text-foreground">
              HerzPflege
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+4930123456789" className="flex items-center gap-2 text-primary font-medium">
              <Phone className="w-4 h-4" />
              030 / 123 456 789
            </a>
            <Button variant="hero">Beratung anfragen</Button>
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
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <a href="tel:+4930123456789" className="flex items-center gap-2 text-primary font-medium">
                  <Phone className="w-4 h-4" />
                  030 / 123 456 789
                </a>
                <Button variant="hero" className="w-full">Beratung anfragen</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
