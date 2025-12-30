import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Briefcase, FileText, Users, UserCheck, Heart, Newspaper, Lightbulb, Scale, Activity, BookOpen, Stethoscope, HandHelping, HeartPulse, Home, Clock, MessageCircle, CalendarCheck, LucideIcon, Building2, MapPin, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const leistungen: { name: string; href: string; description: string; icon: LucideIcon }[] = [
  { name: "Alle Leistungen", href: "/leistungen", description: "Übersicht aller Pflegeleistungen", icon: FileText },
  { name: "Behandlungspflege", href: "/leistungen/behandlungspflege", description: "Medizinische Versorgung nach ärztlicher Verordnung", icon: Stethoscope },
  { name: "Grundpflege", href: "/leistungen/grundpflege", description: "Unterstützung bei alltäglichen Verrichtungen", icon: HandHelping },
  { name: "Intensivpflege", href: "/leistungen/ausserklinische-intensivpflege-frankfurt-am-main", description: "Betreuung für beatmungspflichtige Patienten", icon: HeartPulse },
  { name: "24-Stunden-Pflege", href: "/leistungen/24-stunden-pflege", description: "Rund-um-die-Uhr Betreuung zu Hause", icon: Clock },
  { name: "Pflegeberatung", href: "/leistungen/pflegeberatung-frankfurt", description: "Beratung zu Pflegeleistungen und Ansprüchen", icon: MessageCircle },
  { name: "Verhinderungspflege", href: "/leistungen/verhinderungspflege-frankfurt", description: "Vertretung pflegender Angehöriger", icon: CalendarCheck },
];

const standorte = {
  hauptstandorte: [
    { name: "Bad Vilbel", href: "/pflegedienst-bad-vilbel" },
  ],
  frankfurtStadtteile: [
    { name: "Bornheim", href: "/pflegedienst-bornheim" },
    { name: "Bockenheim", href: "/pflegedienst-bockenheim" },
    { name: "Griesheim", href: "/pflegedienst-griesheim" },
    { name: "Sachsenhausen", href: "/pflegedienst-frankfurt-sachsenhausen" },
    { name: "Niederrad", href: "/pflegedienst-niederrad" },
    { name: "Höchst", href: "/pflegedienst-frankfurt-hoechst" },
  ],
};

const jobs = [
  { name: "Karriere", href: "/karriere", description: "Übersicht aller Stellenangebote", icon: Briefcase },
  { name: "Pflegefachkraft", href: "/karriere/pflegefachkraft", description: "Examinierte Pflegekräfte (m/w/d)", icon: UserCheck },
  { name: "Pflegehilfskraft", href: "/karriere/pflegehilfskraft", description: "Mit Qualifikation nach §43b", icon: Users },
  { name: "Pflegehelfer", href: "/karriere/pflegehelfer", description: "Quereinsteiger willkommen", icon: Heart },
  { name: "Haushaltshilfe", href: "/karriere/haushaltshilfe", description: "Unterstützung im Alltag", icon: Home },
];

const blogCategories = [
  { name: "Alle Artikel", href: "/blog", description: "Übersicht aller Blog-Beiträge", icon: FileText },
  { name: "Empfehlungen", href: "/blog?kategorie=empfehlungen", description: "Unsere Top-Tipps für Sie", icon: Lightbulb },
  { name: "Pflegetipps", href: "/blog?kategorie=pflegetipps", description: "Praktische Ratschläge für den Alltag", icon: BookOpen },
  { name: "Gesundheit", href: "/blog?kategorie=gesundheit", description: "Wichtiges rund um Ihre Gesundheit", icon: Activity },
  { name: "Neuigkeiten", href: "/blog?kategorie=neuigkeiten", description: "Aktuelles von AVYTA", icon: Newspaper },
  { name: "Recht & Finanzen", href: "/blog?kategorie=recht-finanzen", description: "Rechtliche und finanzielle Themen", icon: Scale },
];

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
  const [mobileJobsOpen, setMobileJobsOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const [isCtaDropdownOpen, setIsCtaDropdownOpen] = useState(false);
  const ctaDropdownRef = useRef<HTMLDivElement>(null);

  const ctaOptions = [
    { label: "Anruf", icon: Phone, href: "tel:+496915391405" },
    { label: "Email", icon: Mail, href: "mailto:info@avyta.de" },
    { label: "Kontaktformular", icon: FileText, href: "/#contact" },
    { label: "Termin direkt buchen", icon: Calendar, href: "/#contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ctaDropdownRef.current && !ctaDropdownRef.current.contains(event.target as Node)) {
        setIsCtaDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/avyta-logo.png" alt="AVYTA Pflegegesellschaft mbH" className="h-6" />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-medium px-4 py-2">
                  Start
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-medium px-4 py-2">
                  Team
                </Link>
              </NavigationMenuItem>

              {/* Leistungen Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm text-muted-foreground hover:text-primary font-medium bg-transparent">
                  Leistungen
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[520px] p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {leistungen.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary">
                              {item.name}
                            </div>
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Standorte Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm text-muted-foreground hover:text-primary font-medium bg-transparent">
                  Standorte
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[420px] p-4">
                    <div className="mb-4">
                      <div className="text-sm font-medium text-muted-foreground mb-3">Hauptstandorte</div>
                      <div className="flex gap-3">
                        {standorte.hauptstandorte.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <Building2 className="w-4 h-4" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-3">Frankfurt Stadtteile</div>
                      <div className="grid grid-cols-3 gap-2">
                        {standorte.frankfurtStadtteile.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-primary/5 text-foreground hover:text-primary transition-colors group"
                          >
                            <MapPin className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors flex-shrink-0" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Jobs Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm text-muted-foreground hover:text-primary font-medium bg-transparent">
                  Jobs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[420px] p-4">
                    <div className="grid gap-3">
                      {jobs.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary">
                              {item.name}
                            </div>
                            <div className="text-sm text-muted-foreground mt-0.5">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Blog Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm text-muted-foreground hover:text-primary font-medium bg-transparent">
                  Blog
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[480px] p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {blogCategories.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary text-sm">
                              {item.name}
                            </div>
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/kontakt" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-medium px-4 py-2">
                  Kontakt
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button with Dropdown */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative" ref={ctaDropdownRef}>
              <Button 
                variant="hero"
                onClick={() => setIsCtaDropdownOpen(!isCtaDropdownOpen)}
                className="group"
              >
                Kostenloses Erstgespräch
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCtaDropdownOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              {/* Dropdown Menu */}
              {isCtaDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-card rounded-xl border border-border shadow-2xl z-[100] overflow-hidden animate-fade-in">
                  {ctaOptions.map((option) => (
                    <a
                      key={option.label}
                      href={option.href}
                      onClick={() => setIsCtaDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-colors group/item"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                        <option.icon className="w-5 h-5 text-primary group-hover/item:text-primary-foreground" />
                      </div>
                      <span className="font-medium text-foreground">{option.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
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

              {/* Mobile Jobs */}
              <div>
                <button
                  onClick={() => setMobileJobsOpen(!mobileJobsOpen)}
                  className="flex items-center justify-between w-full text-muted-foreground hover:text-primary transition-colors py-2 font-medium"
                >
                  Jobs
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileJobsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileJobsOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {jobs.map((item) => (
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

              {/* Mobile Blog */}
              <div>
                <button
                  onClick={() => setMobileBlogOpen(!mobileBlogOpen)}
                  className="flex items-center justify-between w-full text-muted-foreground hover:text-primary transition-colors py-2 font-medium"
                >
                  Blog
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileBlogOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileBlogOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {blogCategories.map((item) => (
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
                to="/kontakt"
                className="text-muted-foreground hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>

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
