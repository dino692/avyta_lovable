import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Users, Images, X, Sparkles, Play, ArrowRight, Heart, Star, Award, Clock, MapPin, ChevronDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import teamGroupImage from "@/assets/team/team-group.jpg";
import jasminaMuellerImage from "@/assets/team/jasmina-mueller.webp";
import prokuristImage from "@/assets/team/prokurist.webp";
import assistenzImage from "@/assets/team/assistenz.webp";
import weihnachtsfeier01 from "@/assets/team/weihnachtsfeier-2023-01.webp";
import weihnachtsfeier02 from "@/assets/team/weihnachtsfeier-2023-02.webp";
import weihnachtsfeier2024_01 from "@/assets/team/weihnachtsfeier-2024-01.jpg";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryCategory {
  id: string;
  label: string;
  images: GalleryImage[];
}

const galleryCategories: GalleryCategory[] = [
  {
    id: "weihnachtsfeier-2024",
    label: "Weihnachtsfeier 2024",
    images: [
      { src: weihnachtsfeier2024_01, alt: "AVYTA Team Weihnachtsfeier 2024 - Gruppenfoto" },
    ],
  },
  {
    id: "weihnachtsfeier-2023",
    label: "Weihnachtsfeier 2023",
    images: [
      { src: weihnachtsfeier01, alt: "AVYTA Team Weihnachtsfeier 2023 - Gruppenfoto" },
      { src: weihnachtsfeier02, alt: "AVYTA Team Weihnachtsfeier 2023 - Teamfoto" },
    ],
  },
];

const teamMembers = [
  {
    name: "Jasmina Müller",
    role: "Geschäftsleitung, PDL, Praxisanleitung",
    fullRole: "Geschäftsleitung, PDL, Praxisanleitung, Sachverständige",
    image: jasminaMuellerImage,
    description: "Führt AVYTA mit Leidenschaft und langjähriger Erfahrung in der Pflege.",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-600",
    shadowColor: "shadow-rose-500/30",
    icon: Award,
  },
  {
    name: "Dino Lalic",
    role: "Prokurist",
    fullRole: "Prokurist, Finanzen & Marketing",
    image: prokuristImage,
    description: "Verantwortet die Finanzen und das Marketing von AVYTA.",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    shadowColor: "shadow-blue-500/30",
    icon: Zap,
  },
  {
    name: "Andrea Knezevic",
    role: "Assistenz",
    fullRole: "Assistenz der Geschäftsleitung",
    image: assistenzImage,
    description: "Unterstützt die Geschäftsleitung in allen organisatorischen Belangen.",
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    shadowColor: "shadow-emerald-500/30",
    icon: Heart,
  },
];

const stats = [
  { value: "12+", label: "Jahre Erfahrung", icon: Clock },
  { value: "2.500+", label: "Betreute Patienten", icon: Heart },
  { value: "50+", label: "Teammitglieder", icon: Users },
  { value: "15+", label: "Stadtteile", icon: MapPin },
];

// Counter animation hook
const useCounter = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return { count, ref };
};

const Team = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>AVYTA - Wir stellen uns vor | Ambulanter Pflegedienst Frankfurt</title>
        <meta name="description" content="Lernen Sie das AVYTA Team kennen. Erfahrene Pflegekräfte mit Herz in Frankfurt am Main. Rasche und unbürokratische Hilfe in schwierigen Betreuungssituationen." />
        <meta name="keywords" content="Pflegeteam Frankfurt, Ambulante Pflege Team, Pflegekräfte Frankfurt am Main" />
        <meta property="og:title" content="AVYTA - Wir stellen uns vor" />
        <meta property="og:description" content="Lernen Sie unser engagiertes Team kennen – Menschen mit Herz, Kompetenz und Leidenschaft für die Pflege." />
        <link rel="canonical" href="https://www.avyta.de/ueber-uns" />
      </Helmet>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Header />
        
        {/* ========== HERO SECTION - Ultra Modern ========== */}
        <section className="relative pt-32 pb-32 lg:pb-40 overflow-hidden">
          {/* Multi-layer gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.1),transparent_60%)]" />
          
          {/* Animated morphing blobs */}
          <div className="absolute top-10 left-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-primary/25 via-accent/15 to-primary/10 animate-morph-blob blur-3xl opacity-60" />
          <div className="absolute bottom-10 right-[5%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-accent/20 via-primary/15 to-accent/10 animate-morph-blob blur-3xl opacity-50" style={{ animationDelay: "-5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-gradient-to-r from-primary/5 via-accent/8 to-primary/5 rounded-full blur-3xl animate-glow" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          {/* Grain texture */}
          <div className="absolute inset-0 grain-overlay" />
          
          {/* Floating decorative elements */}
          <div className="absolute top-40 right-[15%] hidden lg:block">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/10 animate-float-slow flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary/60" />
            </div>
          </div>
          <div className="absolute bottom-40 left-[10%] hidden lg:block">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-accent/10 animate-float-slow flex items-center justify-center" style={{ animationDelay: "-3s" }}>
              <Star className="w-6 h-6 text-accent/60" />
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Premium floating badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-background/60 backdrop-blur-2xl border border-primary/20 rounded-full text-sm font-semibold mb-10 shadow-2xl shadow-primary/10 animate-fade-in group hover:border-primary/40 transition-all duration-500 cursor-default">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-accent blur-sm animate-glow" />
                </div>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">Über uns</span>
                <Sparkles className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform duration-300" />
              </div>
              
              {/* Main headline with layered effects */}
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 animate-fade-up tracking-tight leading-[1.1]">
                <span className="text-foreground">Die Menschen hinter </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">AVYTA</span>
                  {/* Underline decoration */}
                  <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-60 animate-gradient-x bg-[length:200%_auto]" />
                  {/* Glow effect */}
                  <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-md opacity-40" />
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: "0.15s" }}>
                Lernen Sie unser engagiertes Team kennen – Menschen mit{" "}
                <span className="relative inline-block">
                  <span className="text-primary font-semibold">Herz</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/40 rounded-full" />
                </span>
                ,{" "}
                <span className="relative inline-block">
                  <span className="text-accent font-semibold">Kompetenz</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent/40 rounded-full" />
                </span>{" "}
                und Leidenschaft für die Pflege.
              </p>
              
              {/* Animated decorative lines */}
              <div className="flex justify-center gap-3 mt-14 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                <div className="w-10 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
                <div className="w-5 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
              </div>
              
              {/* Scroll indicator */}
              <div className="mt-16 animate-fade-up" style={{ animationDelay: "0.5s" }}>
                <div className="inline-flex flex-col items-center gap-2 text-muted-foreground/60 group cursor-pointer hover:text-primary transition-colors duration-300">
                  <span className="text-xs font-medium tracking-widest uppercase">Entdecken</span>
                  <ChevronDown className="w-5 h-5 animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== STATS SECTION - Glassmorphism Cards ========== */}
        <section className="py-8 relative z-20 -mt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat, index) => {
                  const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ""));
                  const { count, ref } = useCounter(numericValue, 2000);
                  const suffix = stat.value.replace(/[0-9]/g, "");
                  
                  return (
                    <div
                      key={stat.label}
                      ref={ref}
                      className="group relative animate-fade-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
                      
                      <div className="relative bg-background/80 backdrop-blur-2xl border border-primary/10 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                        {/* Inner gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Icon */}
                        <div className="relative mb-4">
                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                          </div>
                        </div>
                        
                        {/* Value with counter */}
                        <div className="relative">
                          <span className="font-display text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {count}{suffix}
                          </span>
                        </div>
                        
                        {/* Label */}
                        <p className="relative text-sm md:text-base text-muted-foreground mt-2 font-medium">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ========== TEAM GROUP IMAGE - Premium Display ========== */}
        <section className="py-20 lg:py-28 relative">
          {/* Background gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="relative group">
                {/* Multi-layer glow effect */}
                <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 rounded-[2rem] md:rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-70 transition-all duration-700" />
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl md:rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500" />
                
                {/* Rotating gradient border */}
                <div className="absolute -inset-[3px] bg-gradient-to-r from-primary via-accent to-primary rounded-3xl md:rounded-[2.5rem] opacity-40 animate-gradient-x bg-[length:200%_auto]" />
                
                {/* Image container */}
                <div className="relative bg-background p-1.5 md:p-2 rounded-3xl md:rounded-[2.5rem]">
                  <div className="relative overflow-hidden rounded-2xl md:rounded-[2rem]">
                    <img
                      src={teamGroupImage}
                      alt="Das AVYTA Team - Ambulanter Pflegedienst Frankfurt"
                      className="w-full h-auto transition-all duration-700 group-hover:scale-[1.02]"
                    />
                    
                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-transparent" />
                    
                    {/* Floating info card */}
                    <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 flex items-center justify-between gap-4">
                      <div className="bg-background/95 backdrop-blur-2xl px-5 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl border border-primary/20 shadow-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <span className="font-display font-bold text-foreground block">Unser Team</span>
                            <span className="text-sm text-primary">Frankfurt am Main</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute -top-3 -left-3 md:-top-6 md:-left-6 w-8 h-8 md:w-12 md:h-12 border-l-4 border-t-4 border-primary rounded-tl-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 w-8 h-8 md:w-12 md:h-12 border-r-4 border-b-4 border-accent rounded-br-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </section>

        {/* ========== TEAM MEMBERS - Ultra Premium Cards ========== */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          {/* Multi-layer background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05),transparent_70%)]" />
          
          {/* Animated background blobs */}
          <div className="absolute top-20 left-[10%] w-[300px] h-[300px] bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl animate-float-slow opacity-50" />
          <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-gradient-to-br from-accent/10 to-primary/5 rounded-full blur-3xl animate-float-slow opacity-40" style={{ animationDelay: "-4s" }} />
          
          {/* Top border gradient */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-background/80 backdrop-blur-xl border border-primary/20 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-primary/5 group hover:border-primary/40 transition-all duration-300">
                <Users className="w-4 h-4 text-primary" />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Führungsteam</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 tracking-tight">
                <span className="text-foreground">Unsere </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">Führungskräfte</span>
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Erfahrene Fachkräfte, die mit Herzblut für Sie da sind.
              </p>
            </div>
            
            {/* Team grid */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="group relative animate-fade-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  {/* Card glow effect */}
                  <div className={`absolute -inset-2 bg-gradient-to-br ${member.gradient} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-700`} />
                  
                  {/* Main card */}
                  <div className="relative bg-background/90 backdrop-blur-2xl border border-border/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group-hover:border-primary/30">
                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                    
                    {/* Image section */}
                    <div className="relative h-80 md:h-96 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient overlays */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                      
                      {/* Floating icon badge */}
                      <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-2xl ${member.shadowColor}`}>
                          <member.icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content section */}
                    <div className="relative p-8 -mt-20 z-10">
                      {/* Info card */}
                      <div className="bg-background/95 backdrop-blur-2xl rounded-2xl p-6 md:p-8 border border-border/50 shadow-xl group-hover:border-primary/20 transition-all duration-300">
                        {/* Role badge */}
                        <div className="mb-4">
                          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${member.gradient} text-white shadow-lg ${member.shadowColor}`}>
                            <Star className="w-3 h-3" />
                            Führung
                          </span>
                        </div>
                        
                        {/* Name */}
                        <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {member.name}
                        </h3>
                        
                        {/* Role */}
                        <p className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-semibold text-sm mb-4`}>
                          {member.fullRole}
                        </p>
                        
                        {/* Description */}
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== VIDEO SECTION - Ultra Premium ========== */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          {/* Multi-layer gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--accent)/0.08),transparent_50%)]" />
          
          {/* Animated orbs */}
          <div className="absolute top-20 right-[15%] w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full blur-3xl animate-glow opacity-40" />
          <div className="absolute bottom-20 left-[10%] w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl animate-glow opacity-30" style={{ animationDelay: "-2s" }} />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.015)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-background/80 backdrop-blur-2xl border border-primary/20 rounded-full text-sm font-semibold mb-8 shadow-xl shadow-primary/5">
                <Play className="w-4 h-4 text-primary" />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Team-Stimmen</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 tracking-tight">
                <span className="text-foreground">Was unser </span>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">Team sagt</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Hören Sie direkt von unseren Mitarbeitern, was sie an ihrer Arbeit bei AVYTA schätzen.
              </p>
            </div>

            {/* Video container */}
            <div className="max-w-md mx-auto">
              <div className="relative group">
                {/* Multi-layer glow */}
                <div className="absolute -inset-6 md:-inset-8 bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 rounded-[3rem] blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-700 animate-glow" />
                <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2.5rem] blur-xl opacity-50" />
                
                {/* Rotating gradient border */}
                <div className="absolute -inset-[3px] bg-gradient-to-r from-primary via-accent to-primary rounded-[2.5rem] opacity-60 animate-gradient-x bg-[length:200%_auto]" />
                
                {/* Video frame */}
                <div className="relative bg-background p-1.5 rounded-[2.5rem]">
                  <div className="relative bg-background/90 backdrop-blur-xl rounded-[2rem] overflow-hidden shadow-2xl">
                    <div className="relative aspect-[9/16] overflow-hidden">
                      <iframe
                        src="https://www.tiktok.com/embed/v2/7544857921394429206"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-8 py-4 bg-background/95 backdrop-blur-2xl rounded-2xl border border-primary/20 shadow-2xl flex items-center gap-3 group-hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <Heart className="w-5 h-5 text-red-500 animate-pulse" />
                    <div className="absolute inset-0 w-5 h-5 text-red-500 blur-sm animate-glow" />
                  </div>
                  <span className="text-sm font-bold text-foreground">Authentische Einblicke</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== GALLERY SECTION - Ultra Premium ========== */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          
          {/* Floating decorative elements */}
          <div className="absolute top-40 left-[5%] w-20 h-20 bg-gradient-to-br from-primary/15 to-accent/10 rounded-2xl blur-2xl animate-float-slow" />
          <div className="absolute bottom-40 right-[8%] w-32 h-32 bg-gradient-to-br from-accent/15 to-primary/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "-3s" }} />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-xl border border-primary/20 rounded-full text-sm font-semibold mb-8 shadow-lg">
                <Images className="w-4 h-4 text-primary" />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Galerie</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 tracking-tight">
                <span className="text-foreground">Einblicke in </span>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">unser Team</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Impressionen aus unserem Arbeitsalltag und von Teamevents.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue={galleryCategories[0].id} className="w-full">
                {/* Tabs list */}
                <TabsList className="w-full justify-center mb-14 flex-wrap h-auto gap-4 bg-transparent p-0">
                  {galleryCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-500 bg-background/60 backdrop-blur-xl border border-transparent hover:border-primary/30 hover:bg-background/80 data-[state=active]:bg-background/90 data-[state=active]:border-primary/40 data-[state=active]:shadow-xl data-[state=active]:shadow-primary/10"
                    >
                      {/* Active glow */}
                      <span className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 data-[state=active]:opacity-20 blur-xl transition-opacity duration-300" />
                      
                      <span className="relative z-10 flex items-center gap-2">
                        <Images className="w-4 h-4" />
                        {category.label}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {galleryCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id} className="mt-0">
                    <div className={`grid gap-8 ${category.images.length === 1 ? 'grid-cols-1 max-w-4xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                      {category.images.map((image, index) => (
                        <div
                          key={index}
                          className="group relative cursor-pointer animate-fade-up"
                          style={{ animationDelay: `${index * 0.1}s` }}
                          onClick={() => setSelectedImage(image)}
                        >
                          {/* Card glow */}
                          <div className="absolute -inset-3 bg-gradient-to-r from-primary/25 via-accent/20 to-primary/25 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-500" />
                          
                          {/* Gradient border */}
                          <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-0 group-hover:opacity-60 transition-all duration-300 animate-gradient-x bg-[length:200%_auto]" />
                          
                          <div className="relative bg-background p-1 rounded-2xl">
                            <div className="relative overflow-hidden rounded-xl">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-72 md:h-80 object-cover transition-all duration-700 group-hover:scale-110"
                              />
                              
                              {/* Hover overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                              
                              {/* View indicator */}
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="w-20 h-20 rounded-2xl bg-background/95 backdrop-blur-2xl flex items-center justify-center shadow-2xl transform scale-50 group-hover:scale-100 transition-all duration-500">
                                  <Images className="w-8 h-8 text-primary" />
                                </div>
                              </div>
                              
                              {/* Bottom label */}
                              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <div className="bg-background/95 backdrop-blur-2xl px-5 py-3 rounded-xl border border-primary/20 shadow-xl">
                                  <span className="text-sm font-bold text-foreground">{category.label}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* ========== IMAGE LIGHTBOX - Premium ========== */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl p-0 bg-transparent border-none">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-14 h-14 rounded-2xl bg-background/95 backdrop-blur-2xl flex items-center justify-center text-foreground hover:bg-background border border-primary/20 shadow-2xl transition-all duration-300 hover:scale-110 hover:border-primary/40"
            >
              <X className="w-6 h-6" />
            </button>
            {selectedImage && (
              <div className="relative">
                {/* Multi-layer glow */}
                <div className="absolute -inset-6 bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 rounded-3xl blur-3xl opacity-50" />
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-60" />
                
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="relative w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* ========== JOIN TEAM CTA - Ultra Premium ========== */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="relative max-w-6xl mx-auto">
              {/* Background glow layers */}
              <div className="absolute -inset-8 md:-inset-12 bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 rounded-[4rem] blur-[80px] opacity-30" />
              <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[3rem] blur-3xl opacity-50" />
              
              <div className="relative overflow-hidden rounded-3xl md:rounded-[2.5rem]">
                {/* Main gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
                
                {/* Animated pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
                
                {/* Animated morphing blobs */}
                <div className="absolute top-0 right-0 w-60 h-60 md:w-80 md:h-80 bg-white/10 rounded-full blur-3xl animate-morph-blob" />
                <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl animate-morph-blob" style={{ animationDelay: "-7s" }} />
                
                {/* Shine sweep effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shine pointer-events-none" style={{ animationDuration: "4s" }} />
                
                <div className="relative p-10 md:p-16 lg:p-20">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
                    {/* Content */}
                    <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                      {/* Icon container */}
                      <div className="relative shrink-0">
                        <div className="absolute inset-0 bg-white/30 rounded-3xl blur-2xl animate-glow" />
                        <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-white/20 backdrop-blur-2xl flex items-center justify-center border border-white/30 shadow-2xl">
                          <Users className="w-12 h-12 md:w-14 md:h-14 text-white" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                          Werden Sie Teil unseres Teams!
                        </h3>
                        <p className="text-white/80 text-lg md:text-xl max-w-2xl">
                          Wir suchen engagierte Pflegekräfte, die mit Herz arbeiten und gemeinsam mit uns wachsen möchten.
                        </p>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <Link to="/jobs" className="group relative shrink-0">
                      {/* Button glow */}
                      <div className="absolute -inset-2 bg-white rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-300 animate-glow" />
                      
                      <div className="relative px-10 md:px-12 py-5 md:py-6 bg-white rounded-2xl font-bold text-primary flex items-center gap-3 shadow-2xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                        {/* Shine sweep */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        
                        <span className="relative z-10 text-lg">Alle Pflegejobs</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <NewsletterSection />
        <Footer />
      </div>
    </>
  );
};

export default Team;