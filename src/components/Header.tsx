import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Briefcase, FileText, Users, UserCheck, Heart, HeartHandshake, Newspaper, Lightbulb, Scale, Activity, BookOpen, Stethoscope, HandHelping, HeartPulse, Home, Clock, MessageCircle, CalendarCheck, LucideIcon, Building2, MapPin, Mail, Calendar } from "lucide-react";
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
  { name: "Karriere Übersicht", href: "/jobs", description: "Übersicht aller Stellenangebote", icon: Briefcase },
  { name: "Pflege Jobs", href: "/jobs/pflege-jobs", description: "Alle Pflegestellen im Überblick", icon: Heart },
  { name: "Stellenangebote", href: "/jobs/stellenangebote-pflege-frankfurt", description: "Alle offenen Positionen im Überblick", icon: FileText },
  { name: "Pflegefachkraft", href: "/jobs/pflegefachkraft-frankfurt", description: "Examinierte Pflegekräfte (m/w/d)", icon: UserCheck },
  { name: "Pflegehilfskraft", href: "/jobs/pflegehilfskraft-frankfurt", description: "Mit Qualifikation nach §43b", icon: Users },
  { name: "Pflegehelfer", href: "/jobs/pflegehelfer-frankfurt", description: "Einstieg in die Pflege", icon: HeartHandshake },
  { name: "Haushaltshilfe", href: "/jobs/haushaltshilfe-frankfurt", description: "Unterstützung im Alltag", icon: Home },
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
  { name: "Karriere", href: "/karriere" },
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
  const [isMobileCtaOpen, setIsMobileCtaOpen] = useState(false);
  const ctaDropdownRef = useRef<HTMLDivElement>(null);

  const ctaOptions = [
    { label: "Anruf", icon: Phone, href: "tel:+496915391405" },
    { label: "Email", icon: Mail, href: "mailto:info@avyta.de" },
    { label: "Kontaktformular", icon: FileText, href: "/kontakt" },
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
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Ultra Premium Logo */}
            <Link to="/" className="group relative flex items-center">
              {/* Ambient Glow Layers */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-1000 scale-90 group-hover:scale-100" />
              
              <div className="relative flex items-center gap-4">
                {/* Logo Mark Container */}
                <div className="relative">
                  {/* Orbiting Ring */}
                  <div className="absolute -inset-3 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <svg className="w-full h-full animate-spin" style={{ animationDuration: "8s" }} viewBox="0 0 100 100">
                      <defs>
                        <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                          <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" r="45" fill="none" stroke="url(#orbitGradient)" strokeWidth="2" strokeLinecap="round" strokeDasharray="70 200" />
                    </svg>
                  </div>
                  
                  {/* Secondary Orbit */}
                  <div className="absolute -inset-4 opacity-0 group-hover:opacity-60 transition-all duration-700 delay-150">
                    <svg className="w-full h-full animate-spin" style={{ animationDuration: "12s", animationDirection: "reverse" }} viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="46" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" strokeLinecap="round" strokeDasharray="20 100" opacity="0.5" />
                    </svg>
                  </div>
                  
                  {/* Main Logo Container */}
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500">
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary bg-[length:300%_300%] animate-[gradient_4s_ease_infinite]" />
                    
                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/20" />
                    
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:8px_8px]" />
                    
                    {/* Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                    
                    {/* Heart Logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative group-hover:scale-110 transition-transform duration-500">
                        {/* Shadow Heart */}
                        <Heart className="absolute w-8 h-8 text-black/30 blur-sm translate-y-0.5 fill-black/20" />
                        {/* Main Heart */}
                        <Heart className="relative w-8 h-8 text-white fill-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)] group-hover:animate-pulse" style={{ animationDuration: "1s" }} />
                      </div>
                    </div>
                    
                    {/* Inner Glow */}
                    <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]" />
                    
                    {/* Border Highlight */}
                    <div className="absolute inset-0 rounded-2xl border border-white/20" />
                    
                    {/* Pulse Effect on Hover */}
                    <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDuration: "1.5s" }} />
                  </div>
                  
                  {/* Floating Accent Dots */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-gradient-to-br from-accent to-primary shadow-lg shadow-accent/50 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce" style={{ animationDuration: "2s" }} />
                  <div className="absolute -bottom-1 -left-2 w-2 h-2 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 group-hover:animate-bounce" style={{ animationDuration: "2.5s" }} />
                  <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300" />
                </div>
                
                {/* Brand Typography */}
                <div className="relative flex flex-col">
                  {/* Brand Name */}
                  <div className="relative overflow-hidden">
                    {/* Background Highlight on Hover */}
                    <div className="absolute -inset-x-3 -inset-y-1 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <span className="relative text-2xl font-display font-black tracking-tight">
                      {/* Letter by letter with stagger effect */}
                      {"AVYTA".split("").map((letter, i) => (
                        <span 
                          key={i}
                          className="inline-block text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-accent group-hover:to-primary group-hover:bg-clip-text transition-all duration-300"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          {letter}
                        </span>
                      ))}
                    </span>
                    
                    {/* Animated Underline */}
                    <div className="absolute -bottom-1 left-0 right-0 h-[3px] overflow-hidden rounded-full">
                      <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-700 ease-out" />
                    </div>
                  </div>
                  
                  {/* Tagline with Animation */}
                  <div className="relative mt-0.5 overflow-hidden">
                    <span className="text-[11px] font-medium text-muted-foreground tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 group-hover:text-primary transition-all duration-500 block group-hover:tracking-[0.25em]">
                      Pflegegesellschaft
                    </span>
                  </div>
                </div>
              </div>
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

                {/* Karriere Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm text-muted-foreground hover:text-primary font-medium bg-transparent">
                    Karriere
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
              className="lg:hidden relative p-2 text-foreground group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
                <span className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'}`} />
                <span className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation - Full screen overlay with animations */}
      <div 
        className={`lg:hidden fixed inset-0 top-20 z-[9999] transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop blur */}
        <div 
          className={`absolute inset-0 bg-background backdrop-blur-xl transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`} 
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu content */}
        <div className={`relative h-full overflow-y-auto transition-all duration-500 ease-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-4'
        }`}>
          <nav className="flex flex-col gap-1 p-5 pb-32">
            {/* Quick Links Section */}
            <div className="mb-4">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3 px-2">
                Navigation
              </div>
              
              <Link
                to="/"
                className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: '50ms' }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Home className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">Start</span>
              </Link>
              
              <Link
                to="/team"
                className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: '100ms' }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">Team</span>
              </Link>
            </div>

            {/* Mobile Leistungen */}
            <div className="mb-1">
              <button
                onClick={() => setMobileLeistungenOpen(!mobileLeistungenOpen)}
                className="group flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">Leistungen</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-all duration-300 ${mobileLeistungenOpen ? 'rotate-180 text-primary' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-400 ease-out ${mobileLeistungenOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-6 pr-2 py-2 space-y-1">
                  {leistungen.map((item, index) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary/5 transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-200">
                        <item.icon className="w-4 h-4 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors block">{item.name}</span>
                        <span className="text-xs text-muted-foreground line-clamp-1">{item.description}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Standorte */}
            <div className="mb-1">
              <button
                onClick={() => setMobileStandorteOpen(!mobileStandorteOpen)}
                className="group flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">Standorte</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-all duration-300 ${mobileStandorteOpen ? 'rotate-180 text-primary' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-400 ease-out ${mobileStandorteOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-6 pr-2 py-2">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">Hauptstandorte</div>
                  <div className="flex gap-2 px-3 mb-3">
                    {standorte.hauptstandorte.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-medium hover:from-primary hover:to-accent hover:text-white transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Building2 className="w-4 h-4" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-3 mb-2 px-3">Stadtteile Frankfurt</div>
                  <div className="grid grid-cols-2 gap-1 px-1">
                    {standorte.frankfurtStadtteile.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Jobs */}
            <div className="mb-1">
              <button
                onClick={() => setMobileJobsOpen(!mobileJobsOpen)}
                className="group flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">Karriere</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-all duration-300 ${mobileJobsOpen ? 'rotate-180 text-primary' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-400 ease-out ${mobileJobsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-6 pr-2 py-2 space-y-1">
                  {jobs.map((item, index) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary/5 transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-200">
                        <item.icon className="w-4 h-4 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors block">{item.name}</span>
                        <span className="text-xs text-muted-foreground line-clamp-1">{item.description}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Blog */}
            <div className="mb-1">
              <button
                onClick={() => setMobileBlogOpen(!mobileBlogOpen)}
                className="group flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Newspaper className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">Blog</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-all duration-300 ${mobileBlogOpen ? 'rotate-180 text-primary' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-400 ease-out ${mobileBlogOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-6 pr-2 py-2 space-y-1">
                  {blogCategories.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary/5 transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-200">
                        <item.icon className="w-4 h-4 text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors block">{item.name}</span>
                        <span className="text-xs text-muted-foreground line-clamp-1">{item.description}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Kontakt Link */}
            <Link
              to="/kontakt"
              className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">Kontakt</span>
            </Link>

            {/* CTA Section */}
            <div className="mt-6 pt-6 border-t border-border/50">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3 px-2">
                Jetzt kontaktieren
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                {ctaOptions.map((option, index) => (
                  <a
                    key={option.label}
                    href={option.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center gap-4 px-4 py-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 border border-border/50 hover:border-primary/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/25">
                      <option.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors block">{option.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {option.label === 'Anruf' && '069 153 914 05'}
                        {option.label === 'Email' && 'info@avyta.de'}
                        {option.label === 'Kontaktformular' && 'Nachricht senden'}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
