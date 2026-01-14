import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Users, Images, X, Sparkles, Play, ArrowRight, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    role: "Geschäftsleitung, PDL, Praxisanleitung, Sachverständige",
    image: jasminaMuellerImage,
    description: "Führt AVYTA mit Leidenschaft und langjähriger Erfahrung in der Pflege.",
    color: "from-rose-500 to-pink-600",
  },
  {
    name: "Dino Lalic",
    role: "Prokurist, Finanzen & Marketing",
    image: prokuristImage,
    description: "Verantwortet die Finanzen und das Marketing von AVYTA.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Andrea Knezevic",
    role: "Assistenz",
    image: assistenzImage,
    description: "Unterstützt die Geschäftsleitung in allen organisatorischen Belangen.",
    color: "from-emerald-500 to-teal-600",
  },
];

const Team = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

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
        
        {/* Hero Section - Ultra Modern */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          
          {/* Animated orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 rounded-full blur-3xl" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Floating badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-background/80 backdrop-blur-xl border border-primary/20 rounded-full text-sm font-semibold mb-8 shadow-xl shadow-primary/10 animate-fade-in">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Unser Team</span>
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              
              {/* Main headline with gradient */}
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-up tracking-tight">
                <span className="text-foreground">Die Menschen hinter </span>
                <span className="relative">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-x_3s_ease-in-out_infinite]">AVYTA</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-50" />
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: "0.15s" }}>
                Lernen Sie unser engagiertes Team kennen – Menschen mit <span className="text-primary font-semibold">Herz</span>, <span className="text-accent font-semibold">Kompetenz</span> und Leidenschaft für die Pflege.
              </p>
              
              {/* Decorative elements */}
              <div className="flex justify-center gap-4 mt-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                <div className="w-8 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
                <div className="w-4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Team Group Image - Premium Display */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="relative group">
                {/* Glow effect behind image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                
                {/* Image container with frame */}
                <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 p-2 rounded-3xl">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={teamGroupImage}
                      alt="Das AVYTA Team - Ambulanter Pflegedienst Frankfurt"
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating label */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                      <div className="bg-background/90 backdrop-blur-xl px-6 py-3 rounded-2xl border border-primary/20 shadow-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <span className="font-semibold text-foreground">Unser Team</span>
                        <span className="text-muted-foreground mx-2">•</span>
                        <span className="text-primary">Frankfurt am Main</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative corner elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-primary rounded-tl-xl opacity-60" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-accent rounded-br-xl opacity-60" />
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Grid - Premium Cards */}
        <section className="py-24 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 rounded-full text-sm font-semibold mb-6 border border-primary/20">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-primary">Führungsteam</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">Unsere </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Führungskräfte</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Erfahrene Fachkräfte, die mit Herzblut für Sie da sind.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="group relative animate-fade-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Card glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${member.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700`} />
                  
                  <div className="relative bg-background/80 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Image section */}
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlays */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                      
                      {/* Floating role badge */}
                      <div className="absolute top-4 right-4 px-4 py-2 bg-background/90 backdrop-blur-xl rounded-full border border-primary/20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        <Star className="w-4 h-4 text-primary inline mr-1" />
                        <span className="text-xs font-semibold text-foreground">Führung</span>
                      </div>
                    </div>
                    
                    {/* Content section */}
                    <div className="relative p-8 -mt-12 z-10">
                      <div className="bg-background/95 backdrop-blur-xl rounded-2xl p-6 border border-border/50 shadow-lg">
                        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className={`bg-gradient-to-r ${member.color} bg-clip-text text-transparent font-semibold text-sm mb-4`}>
                          {member.role}
                        </p>
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

        {/* Team Video Section - Ultra Premium */}
        <section className="py-24 relative overflow-hidden">
          {/* Multi-layer gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
          
          {/* Animated orbs */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-background/80 backdrop-blur-xl border border-primary/20 rounded-full text-sm font-semibold mb-6 shadow-lg">
                <Play className="w-4 h-4 text-primary" />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Team-Stimmen</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                <span className="text-foreground">Was unser </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Team sagt</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Hören Sie direkt von unseren Mitarbeitern, was sie an ihrer Arbeit bei AVYTA schätzen.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
                
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 p-1 rounded-3xl">
                  <div className="relative bg-background/90 backdrop-blur-xl rounded-[22px] overflow-hidden shadow-2xl">
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
                
                {/* Decorative play button effect */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-background/90 backdrop-blur-xl rounded-full border border-primary/20 shadow-xl flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">Authentische Einblicke</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section - Ultra Premium */}
        <section className="py-24 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-sm font-semibold mb-6">
                <Images className="w-4 h-4 text-primary" />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Galerie</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                <span className="text-foreground">Einblicke in </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">unser Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Impressionen aus unserem Arbeitsalltag und von Teamevents.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue={galleryCategories[0].id} className="w-full">
                <TabsList className="w-full justify-center mb-12 flex-wrap h-auto gap-3 bg-transparent p-0">
                  {galleryCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 data-[state=active]:bg-transparent data-[state=active]:shadow-none bg-background/50 backdrop-blur-sm border border-transparent data-[state=active]:border-primary/30 hover:bg-background/80"
                    >
                      {/* Active state glow */}
                      <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 data-[state=active]:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
                      <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 data-[state=active]:opacity-10 transition-opacity duration-300" />
                      
                      <span className="relative z-10 flex items-center gap-2">
                        <Images className="w-4 h-4" />
                        {category.label}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {galleryCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id} className="mt-0">
                    <div className={`grid gap-8 ${category.images.length === 1 ? 'grid-cols-1 max-w-3xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                      {category.images.map((image, index) => (
                        <div
                          key={index}
                          className="group relative cursor-pointer animate-fade-up"
                          style={{ animationDelay: `${index * 0.1}s` }}
                          onClick={() => setSelectedImage(image)}
                        >
                          {/* Card glow */}
                          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
                          
                          <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 p-1 rounded-2xl">
                            <div className="relative overflow-hidden rounded-xl">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110"
                              />
                              
                              {/* Hover overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                              
                              {/* View indicator */}
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="w-16 h-16 rounded-2xl bg-background/90 backdrop-blur-xl flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                  <Images className="w-6 h-6 text-primary" />
                                </div>
                              </div>
                              
                              {/* Bottom label */}
                              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <div className="bg-background/90 backdrop-blur-xl px-4 py-2 rounded-xl border border-primary/20">
                                  <span className="text-sm font-semibold text-foreground">{category.label}</span>
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

        {/* Image Lightbox Dialog - Premium */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-2xl bg-background/90 backdrop-blur-xl flex items-center justify-center text-foreground hover:bg-background border border-primary/20 shadow-xl transition-all duration-300 hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedImage && (
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-2xl opacity-50" />
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="relative w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Join Team CTA - Ultra Premium */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="relative max-w-5xl mx-auto">
              {/* Background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-[40px] blur-3xl opacity-40" />
              
              <div className="relative overflow-hidden rounded-3xl">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
                
                {/* Animated pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
                
                {/* Floating orbs */}
                <div className="absolute top-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shine_3s_ease-in-out_infinite]" />
                
                <div className="relative p-12 md:p-16">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                      {/* Icon container */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl" />
                        <div className="relative w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/30">
                          <Users className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                          Werden Sie Teil unseres Teams!
                        </h3>
                        <p className="text-white/80 text-lg max-w-xl">
                          Wir suchen engagierte Pflegekräfte, die mit Herz arbeiten und gemeinsam mit uns wachsen möchten.
                        </p>
                      </div>
                    </div>
                    
                    <Link to="/jobs" className="group relative shrink-0">
                      {/* Button glow */}
                      <div className="absolute -inset-1 bg-white rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                      
                      <div className="relative px-10 py-5 bg-white rounded-2xl font-bold text-primary flex items-center gap-3 shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-white/25 overflow-hidden">
                        {/* Shine effect */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        
                        <span className="relative z-10">Alle Pflegejobs</span>
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
