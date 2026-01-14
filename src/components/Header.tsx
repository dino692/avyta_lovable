import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Briefcase, FileText, Users, UserCheck, Heart, Newspaper, Lightbulb, Scale, Activity, BookOpen, Stethoscope, HandHelping, HeartPulse, Home, Clock, MessageCircle, CalendarCheck, LucideIcon, Building2, MapPin, Mail, Sparkles } from "lucide-react";
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
  { name: "Haushaltshilfe", href: "/leistungen/haushaltshilfe", description: "Hilfe im Haushalt und Alltag", icon: Home },
  { name: "24-Stunden-Pflege", href: "/leistungen/24-stunden-pflege", description: "Rund-um-die-Uhr Betreuung zu Hause", icon: Clock },
  { name: "Pflegeberatung", href: "/leistungen/pflegeberatung-frankfurt", description: "Beratung zu Pflegeleistungen und Ansprüchen", icon: MessageCircle },
  { name: "Verhinderungspflege", href: "/leistungen/verhinderungspflege-frankfurt", description: "Vertretung pflegender Angehöriger", icon: CalendarCheck },
];

const standorte = {
  hauptstandorte: [
    { name: "Frankfurt", href: "/standorte/frankfurt" },
    { name: "Bad Vilbel", href: "/standorte/bad-vilbel" },
  ],
  frankfurtStadtteile: [
    { name: "Bockenheim", href: "/standorte/frankfurt/pflegedienst-bockenheim" },
    { name: "Bornheim", href: "/standorte/frankfurt/bornheim" },
    { name: "Dornbusch", href: "/standorte/frankfurt/dornbusch" },
    { name: "Eckenheim", href: "/standorte/frankfurt/eckenheim" },
    { name: "Eschersheim", href: "/standorte/frankfurt/eschersheim" },
    { name: "Ginnheim", href: "/standorte/frankfurt/pflegedienst-ginnheim" },
    { name: "Griesheim", href: "/standorte/frankfurt/griesheim" },
    { name: "Heddernheim", href: "/standorte/frankfurt/heddernheim" },
    { name: "Höchst", href: "/standorte/frankfurt/hoechst" },
    { name: "Nieder-Eschbach", href: "/standorte/frankfurt/nieder-eschbach" },
    { name: "Niederrad", href: "/standorte/frankfurt/niederrad" },
    { name: "Nordend", href: "/standorte/frankfurt/nordend" },
    { name: "Ostend", href: "/standorte/frankfurt/ostend" },
    { name: "Praunheim", href: "/standorte/frankfurt/pflegedienst-praunheim" },
    { name: "Preungesheim", href: "/standorte/frankfurt/preungesheim" },
    { name: "Rödelheim", href: "/standorte/frankfurt/pflegedienst-roedelheim" },
    { name: "Sachsenhausen", href: "/standorte/frankfurt/pflegedienst-frankfurt-sachsenhausen" },
    { name: "Seckbach", href: "/standorte/frankfurt/seckbach" },
    { name: "Westend", href: "/standorte/frankfurt/westend" },
  ],
};

const jobs = [
  { name: "Alle Jobs", href: "/jobs", description: "Übersicht aller Stellenangebote", icon: Briefcase },
  { name: "Pflege Jobs", href: "/jobs/pflege-jobs", description: "Alle Pflegestellen im Überblick", icon: Heart },
  { name: "Stellenangebote", href: "/karriere/stellenangebote-pflege-frankfurt", description: "Alle offenen Positionen im Überblick", icon: FileText },
  { name: "Pflegefachkraft", href: "/karriere/pflegefachkraft-frankfurt", description: "Examinierte Pflegekräfte (m/w/d)", icon: UserCheck },
  { name: "Pflegehilfskraft", href: "/karriere/pflegehilfskraft-frankfurt", description: "Mit Qualifikation nach §43b", icon: Users },
  { name: "Pflegehelfer", href: "/karriere/pflegehelfer-frankfurt", description: "Quereinsteiger willkommen", icon: Heart },
  { name: "Haushaltshilfe", href: "/karriere/haushaltshilfe-frankfurt", description: "Unterstützung im Alltag", icon: Home },
];

const blogCategories = [
  { name: "Alle Artikel", href: "/blog", description: "Übersicht aller Blog-Beiträge", icon: FileText },
  { name: "Empfehlungen", href: "/blog?kategorie=empfehlungen", description: "Unsere Top-Tipps für Sie", icon: Lightbulb },
  { name: "Pflegetipps", href: "/blog?kategorie=pflegetipps", description: "Praktische Ratschläge für den Alltag", icon: BookOpen },
  { name: "Gesundheit", href: "/blog?kategorie=gesundheit", description: "Wichtiges rund um Ihre Gesundheit", icon: Activity },
  { name: "Neuigkeiten", href: "/blog?kategorie=neuigkeiten", description: "Aktuelles von AVYTA", icon: Newspaper },
  { name: "Recht & Finanzen", href: "/blog?kategorie=recht-finanzen", description: "Rechtliche und finanzielle Themen", icon: Scale },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);
  const [mobileStandorteOpen, setMobileStandorteOpen] = useState(false);
  const [mobileJobsOpen, setMobileJobsOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const [isCtaDropdownOpen, setIsCtaDropdownOpen] = useState(false);
  const [isMobileCtaOpen, setIsMobileCtaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ctaDropdownRef = useRef<HTMLDivElement>(null);

  const ctaOptions = [
    { label: "Anruf", icon: Phone, href: "tel:+496915391405", color: "from-emerald-500 to-teal-500" },
    { label: "Email", icon: Mail, href: "mailto:info@avyta.de", color: "from-blue-500 to-cyan-500" },
    { label: "Kontaktformular", icon: FileText, href: "/kontakt", color: "from-purple-500 to-pink-500" },
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-2xl border-b border-primary/10 shadow-lg shadow-primary/5" 
          : "bg-transparent backdrop-blur-sm"
      }`}>
        {/* Animated gradient line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
        
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo with glow effect */}
            <Link to="/" className="flex items-center gap-3 group relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="/images/avyta-logo.png" 
                alt="AVYTA Pflegegesellschaft mbH" 
                className="h-8 relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                width="201"
                height="24"
                fetchPriority="high"
              />
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="gap-1">
                {/* Start Link */}
                <NavigationMenuItem>
                  <Link to="/" className="relative text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 group overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <span className="relative z-10 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300">Start</span>
                  </Link>
                </NavigationMenuItem>

                {/* Team Link */}
                <NavigationMenuItem>
                  <Link to="/team" className="relative text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 group overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <span className="relative z-10 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300">Team</span>
                  </Link>
                </NavigationMenuItem>

                {/* Leistungen Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold bg-transparent hover:bg-transparent rounded-full transition-all duration-300 data-[state=open]:bg-primary/10 group px-5 py-2.5">
                    <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent group-data-[state=open]:from-primary group-data-[state=open]:to-accent transition-all duration-300">Leistungen</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[560px] p-6 bg-gradient-to-br from-background via-background to-primary/5">
                      <div className="grid grid-cols-2 gap-3">
                        {leistungen.map((item, index) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/5 transition-all duration-300 border border-transparent hover:border-primary/20"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                              <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300">
                                <item.icon className="w-5 h-5" />
                              </div>
                            </div>
                            <div>
                              <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                {item.name}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
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
                  <NavigationMenuTrigger className="text-sm font-semibold bg-transparent hover:bg-transparent rounded-full transition-all duration-300 data-[state=open]:bg-primary/10 group px-5 py-2.5">
                    <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent group-data-[state=open]:from-primary group-data-[state=open]:to-accent transition-all duration-300">Standorte</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[480px] p-6 bg-gradient-to-br from-background via-background to-primary/5">
                      {/* Hauptstandorte */}
                      <div className="mb-6">
                        <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          Hauptstandorte
                        </div>
                        <div className="flex gap-3">
                          {standorte.hauptstandorte.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="group relative flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 font-semibold text-primary hover:from-primary hover:to-accent hover:text-white transition-all duration-300 overflow-hidden"
                            >
                              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                              <Building2 className="w-5 h-5 relative z-10" />
                              <span className="relative z-10">{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      {/* Frankfurt Stadtteile */}
                      <div>
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          Frankfurt Stadtteile
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {standorte.frankfurtStadtteile.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="group flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                            >
                              <MapPin className="w-3.5 h-3.5 text-primary/50 group-hover:text-primary transition-colors flex-shrink-0" />
                              <span className="truncate">{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Jobs Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold bg-transparent hover:bg-transparent rounded-full transition-all duration-300 data-[state=open]:bg-primary/10 group px-5 py-2.5">
                    <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent group-data-[state=open]:from-primary group-data-[state=open]:to-accent transition-all duration-300">Jobs</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[460px] p-6 bg-gradient-to-br from-background via-background to-primary/5">
                      <div className="grid gap-2">
                        {jobs.map((item, index) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/5 transition-all duration-300 border border-transparent hover:border-primary/20"
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                              <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300">
                                <item.icon className="w-5 h-5" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                {item.name}
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5">
                                {item.description}
                              </div>
                            </div>
                            <ChevronDown className="w-4 h-4 text-muted-foreground -rotate-90 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Blog Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold bg-transparent hover:bg-transparent rounded-full transition-all duration-300 data-[state=open]:bg-primary/10 group px-5 py-2.5">
                    <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent group-data-[state=open]:from-primary group-data-[state=open]:to-accent transition-all duration-300">Blog</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[520px] p-6 bg-gradient-to-br from-background via-background to-primary/5">
                      <div className="grid grid-cols-2 gap-3">
                        {blogCategories.map((item, index) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/5 transition-all duration-300 border border-transparent hover:border-primary/20"
                          >
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                              <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300">
                                <item.icon className="w-4 h-4" />
                              </div>
                            </div>
                            <div>
                              <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm">
                                {item.name}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Kontakt Link */}
                <NavigationMenuItem>
                  <Link to="/kontakt" className="relative text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 group overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <span className="relative z-10 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300">Kontakt</span>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button with Premium Dropdown */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="relative" ref={ctaDropdownRef}>
                <Button 
                  onClick={() => setIsCtaDropdownOpen(!isCtaDropdownOpen)}
                  className="group relative px-6 py-3 rounded-full font-bold text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--primary)) 100%)",
                    backgroundSize: "200% 200%",
                  }}
                >
                  {/* Animated gradient background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient-x_3s_ease-in-out_infinite]" />
                  
                  {/* Shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  {/* Glow effect */}
                  <span className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
                  
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span className="tracking-wide">Erstgespräch</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCtaDropdownOpen ? 'rotate-180' : ''}`} />
                  </span>
                </Button>
                
                {/* Premium Dropdown Menu */}
                {isCtaDropdownOpen && (
                  <div className="absolute top-full right-0 mt-3 w-72 bg-background/95 backdrop-blur-2xl rounded-2xl border border-primary/20 shadow-2xl shadow-primary/10 z-[100] overflow-hidden animate-fade-in">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
                    
                    <div className="relative p-2">
                      {ctaOptions.map((option, index) => (
                        <a
                          key={option.label}
                          href={option.href}
                          onClick={() => setIsCtaDropdownOpen(false)}
                          className="group flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/5 transition-all duration-300"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                            <option.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{option.label}</span>
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {option.label === "Anruf" && "069 15391405"}
                              {option.label === "Email" && "info@avyta.de"}
                              {option.label === "Kontaktformular" && "Nachricht schreiben"}
                            </div>
                          </div>
                          <ChevronDown className="w-4 h-4 text-muted-foreground -rotate-90 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : ''}`} />
                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`absolute left-0 top-5 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation - Premium Design */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-background/98 backdrop-blur-2xl border-t border-primary/10 overflow-y-auto z-[60] animate-fade-in">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          
          <nav className="relative flex flex-col gap-1 p-6">
            <Link
              to="/"
              className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-all duration-300 py-4 px-4 font-semibold rounded-xl hover:bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
              Start
            </Link>
            <Link
              to="/team"
              className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-all duration-300 py-4 px-4 font-semibold rounded-xl hover:bg-primary/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
              Team
            </Link>

            {/* Mobile Leistungen */}
            <div className="border-t border-primary/10 pt-2 mt-2">
              <button
                onClick={() => setMobileLeistungenOpen(!mobileLeistungenOpen)}
                className="flex items-center justify-between w-full text-foreground/80 hover:text-primary transition-all duration-300 py-4 px-4 font-semibold rounded-xl hover:bg-primary/10"
              >
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                  Leistungen
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileLeistungenOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileLeistungenOpen && (
                <div className="pl-6 space-y-1 mt-2 animate-fade-in">
                  {leistungen.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center gap-3 text-foreground/70 hover:text-primary py-3 px-4 text-sm rounded-xl hover:bg-primary/5 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4 text-primary/60" />
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
                className="flex items-center justify-between w-full text-foreground/80 hover:text-primary transition-all duration-300 py-4 px-4 font-semibold rounded-xl hover:bg-primary/10"
              >
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                  Standorte
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileStandorteOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileStandorteOpen && (
                <div className="pl-6 space-y-3 mt-2 animate-fade-in">
                  <div className="text-xs text-primary font-bold uppercase tracking-widest px-4">Hauptstandorte</div>
                  {standorte.hauptstandorte.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center gap-3 text-foreground/70 hover:text-primary py-3 px-4 text-sm rounded-xl hover:bg-primary/5 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Building2 className="w-4 h-4 text-primary/60" />
                      {item.name}
                    </Link>
                  ))}
                  <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-4 px-4">Frankfurt</div>
                  {standorte.frankfurtStadtteile.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center gap-3 text-foreground/70 hover:text-primary py-2.5 px-4 text-sm rounded-xl hover:bg-primary/5 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <MapPin className="w-3.5 h-3.5 text-primary/50" />
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
                className="flex items-center justify-between w-full text-foreground/80 hover:text-primary transition-all duration-300 py-4 px-4 font-semibold rounded-xl hover:bg-primary/10"
              >
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                  Jobs
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileJobsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileJobsOpen && (
                <div className="pl-6 space-y-1 mt-2 animate-fade-in">
                  {jobs.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center gap-3 text-foreground/70 hover:text-primary py-3 px-4 text-sm rounded-xl hover:bg-primary/5 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4 text-primary/60" />
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
                className="flex items-center justify-between w-full text-foreground/80 hover:text-primary transition-all duration-300 py-4 px-4 font-semibold rounded-xl hover:bg-primary/10"
              >
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                  Blog
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileBlogOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileBlogOpen && (
                <div className="pl-6 space-y-1 mt-2 animate-fade-in">
                  {blogCategories.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center gap-3 text-foreground/70 hover:text-primary py-3 px-4 text-sm rounded-xl hover:bg-primary/5 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4 text-primary/60" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/kontakt"
              className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-all duration-300 py-4 px-4 font-semibold rounded-xl hover:bg-primary/10 border-t border-primary/10 pt-6 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
              Kontakt
            </Link>

            {/* Mobile CTA Section */}
            <div className="pt-6 mt-4 border-t border-primary/10">
              <div className="relative">
                <Button 
                  className="w-full relative overflow-hidden group py-6 rounded-2xl font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileCtaOpen(!isMobileCtaOpen);
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Kostenloses Erstgespräch
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileCtaOpen ? 'rotate-180' : ''}`} />
                  </span>
                </Button>
                
                {isMobileCtaOpen && (
                  <div className="mt-4 w-full bg-background rounded-2xl border border-primary/20 shadow-xl overflow-hidden z-50 animate-fade-in">
                    {ctaOptions.map((option, index) => (
                      <a
                        key={option.label}
                        href={option.href}
                        onClick={() => {
                          setIsMobileCtaOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="group flex items-center gap-4 px-5 py-5 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/5 transition-all duration-300 border-b border-primary/10 last:border-0"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center shadow-lg`}>
                          <option.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <span className="font-semibold text-foreground block">{option.label}</span>
                          <span className="text-xs text-muted-foreground">
                            {option.label === "Anruf" && "069 15391405"}
                            {option.label === "Email" && "info@avyta.de"}
                            {option.label === "Kontaktformular" && "Nachricht schreiben"}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
