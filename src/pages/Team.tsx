import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Users, Images, X, Heart, Award, Clock, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import teamGroupImage from "@/assets/team/team-group.jpg";
import jasminaMuellerImage from "@/assets/team/jasmina-mueller-final.png";
import prokuristImage from "@/assets/team/prokurist.webp";
import assistenzImage from "@/assets/team/assistenz.webp";
import stellvPdlImage from "@/assets/team/stellv-pdl.webp";
import weihnachtsfeier01 from "@/assets/team/weihnachtsfeier-2023-01.webp";
import weihnachtsfeier02 from "@/assets/team/weihnachtsfeier-2023-02.webp";
import weihnachtsfeier2024_01 from "@/assets/team/weihnachtsfeier-2024-01.jpg";
import meeting2026_01 from "@/assets/team/meeting-2026-01.jpg";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";

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
    id: "meetings-2026",
    label: "Meetings 2026",
    images: [
      { src: meeting2026_01, alt: "AVYTA Team Meeting 2026" },
    ],
  },
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
    role: "Geschäftsleitung",
    subtitle: "PDL, Praxisanleitung, Sachverständige",
    image: jasminaMuellerImage,
    description: "Führt AVYTA mit Leidenschaft und langjähriger Erfahrung in der Pflege.",
    icon: Award,
  },
  {
    name: "Aida Begatovic",
    role: "Stellvertr. PDL",
    subtitle: "Stellvertretende Pflegedienstleitung",
    image: stellvPdlImage,
    description: "Hilft der PDL und kümmert sich um das Qualitätsmanagement.",
    icon: Heart,
  },
  {
    name: "Dino Lalic",
    role: "Prokurist",
    subtitle: "Finanzen & Marketing",
    image: prokuristImage,
    description: "Verantwortet die Finanzen und das Marketing von AVYTA.",
    icon: Sparkles,
  },
  {
    name: "Andrea Knezevic",
    role: "Assistenz",
    subtitle: "Organisation & Verwaltung",
    image: assistenzImage,
    description: "Unterstützt die Geschäftsleitung in allen organisatorischen Belangen.",
    icon: Heart,
  },
];

const stats = [
  { value: "20+", label: "Teammitglieder", icon: Users },
  { value: "12+", label: "Jahre Erfahrung", icon: Clock },
  { value: "100%", label: "Leidenschaft", icon: Heart },
  { value: "5,0", label: "Google Bewertung", icon: Award },
];

const Team = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  
  const statsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeroVisible(true);
    
    const observers: IntersectionObserver[] = [];
    
    const createObserver = (
      ref: React.RefObject<HTMLDivElement>,
      setter: (value: boolean) => void
    ) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setter(true);
            }
          },
          { threshold: 0.1 }
        );
        observer.observe(ref.current);
        observers.push(observer);
      }
    };

    createObserver(statsRef, setStatsVisible);
    createObserver(teamRef, setTeamVisible);
    createObserver(galleryRef, setGalleryVisible);

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <>
      <Helmet>
        <title>Über uns | AVYTA Pflegedienst Frankfurt</title>
        <meta name="description" content="Lernen Sie das AVYTA Team kennen. Erfahrene Pflegekräfte mit Herz in Frankfurt am Main. Rasche und unbürokratische Hilfe in schwierigen Betreuungssituationen." />
        <meta name="keywords" content="Pflegeteam Frankfurt, Ambulante Pflege Team, Pflegekräfte Frankfurt am Main" />
        <meta property="og:title" content="AVYTA - Wir stellen uns vor" />
        <meta property="og:description" content="Lernen Sie unser engagiertes Team kennen – Menschen mit Herz, Kompetenz und Leidenschaft für die Pflege." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <link rel="canonical" href="https://www.avyta.de/ueber-uns" />
      </Helmet>
      <div className="min-h-screen bg-background overflow-hidden">
        <Header />
        
        {/* Hero Section - Immersive Full Screen */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-3 h-3 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }} />
            <div className="absolute top-40 right-20 w-2 h-2 bg-accent/50 rounded-full animate-bounce" style={{ animationDelay: "0.5s", animationDuration: "2.5s" }} />
            <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: "1s", animationDuration: "3.5s" }} />
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent/40 rounded-full animate-bounce" style={{ animationDelay: "1.5s", animationDuration: "2.8s" }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm font-medium border border-primary/20 shadow-lg shadow-primary/5">
                  <Users className="w-4 h-4" />
                  Mehr als 20 Pflegekräfte mit Herz
                </span>
              </div>
              
              {/* Main Title */}
              <h1 className={`font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mt-8 mb-6 transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Die <span className="relative">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">Menschen</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 2 100 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/40" />
                  </svg>
                </span> hinter AVYTA
              </h1>
              
              {/* Subtitle */}
              <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Lernen Sie unser engagiertes Team kennen – Menschen mit Herz, Kompetenz und Leidenschaft für die Pflege.
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-10 transition-all duration-1000 delay-600 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Button size="lg" className="px-8 py-6 text-lg rounded-full shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1" asChild>
                  <Link to="/karriere">
                    <Users className="w-5 h-5 mr-2" />
                    Teil des Teams werden
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-full border-2 hover:bg-muted/50" asChild>
                  <Link to="/kontakt">Kontakt aufnehmen</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </section>


        {/* Stats Section - Animated Counters */}
        <section ref={statsRef} className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center group transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 mb-4 mx-auto">
                    {/* Animated Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse" />
                    <div className="absolute inset-1 rounded-full bg-background" />
                    <stat.icon className="relative w-8 h-8 md:w-10 md:h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members - Modern Cards */}
        <section ref={teamRef} className="py-24 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] -translate-x-1/2" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className={`text-center mb-16 transition-all duration-1000 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Führungsteam
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Unsere Führungskräfte
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Erfahrene Fachkräfte, die mit Herzblut für Sie da sind.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`group relative transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                  onMouseEnter={() => setActiveCardIndex(index)}
                  onMouseLeave={() => setActiveCardIndex(null)}
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl transition-opacity duration-500 ${activeCardIndex === index ? 'opacity-100' : 'opacity-0'}`} />
                  
                  <Card className="relative overflow-hidden rounded-2xl border-0 shadow-xl bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                    <CardContent className="p-0">
                      {/* Image Container */}
                      <div className="relative h-80 md:h-96 overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        {/* Icon Badge */}
                        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                          <member.icon className="w-6 h-6 text-white" />
                        </div>
                        
                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="font-display text-2xl font-bold text-white mb-1">
                            {member.name}
                          </h3>
                          <p className="text-white/90 font-semibold mb-1">{member.role}</p>
                          <p className="text-white/70 text-sm">{member.subtitle}</p>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="p-6 bg-gradient-to-b from-card to-muted/30">
                        <p className="text-muted-foreground leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery Section - Masonry Style */}
        <section ref={galleryRef} className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 transition-all duration-1000 ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                <Images className="w-4 h-4" />
                Galerie
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Einblicke in unser Team
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Impressionen aus unserem Arbeitsalltag und von Teamevents.
              </p>
            </div>

            <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-200 ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Tabs defaultValue={galleryCategories[0].id} className="w-full">
                <TabsList className="w-full justify-center mb-12 flex-wrap h-auto gap-3 bg-transparent p-0">
                  {galleryCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="px-8 py-4 rounded-full text-base font-medium border-2 border-muted data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 hover:border-primary/50"
                    >
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {galleryCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id} className="mt-0">
                    <div className={`grid gap-6 ${category.images.length === 1 ? 'grid-cols-1 max-w-3xl mx-auto' : 'md:grid-cols-2'}`}>
                      {category.images.map((image, index) => (
                        <div
                          key={index}
                          className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                          onClick={() => setSelectedImage(image)}
                        >
                          {/* Hover Glow */}
                          <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                          
                          <div className="relative overflow-hidden rounded-2xl">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Zoom Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                              <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl">
                                <Images className="w-7 h-7 text-primary" />
                              </div>
                            </div>
                            
                            {/* Caption */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <p className="text-white font-medium">{image.alt}</p>
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

        {/* Team Video Section - Immersive */}
        <section className="py-24 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Team-Stimmen
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Was unser Team sagt
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Hören Sie direkt von unseren Mitarbeitern, was sie an ihrer Arbeit bei AVYTA schätzen.
              </p>
            </div>

            <div className="max-w-sm mx-auto">
              <div className="relative group">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                
                <Card className="relative overflow-hidden rounded-2xl border-0 shadow-2xl">
                  <CardContent className="p-0">
                    <div className="relative aspect-[9/16] overflow-hidden bg-muted">
                      <iframe
                        src="https://www.tiktok.com/embed/v2/7544857921394429206"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Image Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-black/95 border-none rounded-2xl overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
            >
              <X className="w-6 h-6" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto"
              />
            )}
          </DialogContent>
        </Dialog>

        {/* Join Team CTA - Premium */}
        <section className="py-24 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }} />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md mb-8 border border-white/20">
                <Users className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Werden Sie Teil unseres Teams!
              </h2>
              
              <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10">
                Wir suchen engagierte Pflegekräfte, die mit Herz arbeiten. Entdecken Sie unsere aktuellen Stellenangebote.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                  asChild
                >
                  <Link to="/karriere">
                    Alle Pflegejobs entdecken
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-10 py-6 text-lg rounded-full border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                  asChild
                >
                  <Link to="/kontakt">
                    Initiativ bewerben
                  </Link>
                </Button>
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
