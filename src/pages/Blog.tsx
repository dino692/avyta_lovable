import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { 
  BookOpen, 
  Heart, 
  Stethoscope, 
  Newspaper, 
  Scale, 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  LayoutGrid, 
  Mail, 
  Loader2,
  Sparkles,
  TrendingUp,
  Eye,
  ChevronRight,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const categories = [
  {
    name: "Alle Artikel",
    slug: "alle",
    icon: LayoutGrid,
    description: "Alle Beiträge anzeigen",
    gradient: "from-primary to-accent",
  },
  {
    name: "Empfehlungen",
    slug: "empfehlungen",
    icon: Heart,
    description: "Tipps und Empfehlungen für den Pflegealltag",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    name: "Pflegetipps",
    slug: "pflegetipps",
    icon: BookOpen,
    description: "Praktische Anleitungen und Hilfestellungen",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "Gesundheit",
    slug: "gesundheit",
    icon: Stethoscope,
    description: "Informationen zu Gesundheitsthemen",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "Neuigkeiten",
    slug: "neuigkeiten",
    icon: Newspaper,
    description: "Aktuelles aus unserem Unternehmen",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Recht & Finanzen",
    slug: "recht-finanzen",
    icon: Scale,
    description: "Rechtliche und finanzielle Themen",
    gradient: "from-violet-500 to-purple-600",
  },
];

const blogPosts = [
  {
    title: "Pflegegeld 2025: Aktuelle Tabelle nach Pflegegrad",
    excerpt: "Alle aktuellen Pflegegeld-Beträge für 2025 im Überblick. Erfahren Sie, wie viel Geld Ihnen bei Pflegegrad 2-5 zusteht.",
    category: "Recht & Finanzen",
    categoryGradient: "from-violet-500 to-purple-600",
    date: "1. Januar 2025",
    readTime: "7 Min.",
    author: "AVYTA Team",
    slug: "pflegegeld-tabelle-2025",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    featured: true,
    views: "2.4k",
  },
  {
    title: "Pflegegrad beantragen: Schritt für Schritt erklärt",
    excerpt: "Alles was Sie wissen müssen, um erfolgreich einen Pflegegrad zu beantragen. Von der Antragstellung bis zur Begutachtung.",
    category: "Recht & Finanzen",
    categoryGradient: "from-violet-500 to-purple-600",
    date: "10. Dezember 2024",
    readTime: "8 Min.",
    author: "AVYTA Team",
    slug: "pflegegrad-beantragen",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    featured: true,
    views: "1.8k",
  },
  {
    title: "Entlastungsbetrag 125 €: So nutzen Sie ihn richtig",
    excerpt: "Der Entlastungsbetrag steht allen ab Pflegegrad 1 zu. Erfahren Sie, wofür Sie die 125 Euro monatlich nutzen können.",
    category: "Recht & Finanzen",
    categoryGradient: "from-violet-500 to-purple-600",
    date: "28. Dezember 2024",
    readTime: "6 Min.",
    author: "AVYTA Team",
    slug: "entlastungsbetrag-125-euro",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop",
    featured: true,
    views: "1.5k",
  },
  {
    title: "Kombinationsleistung: Pflegegeld und Sachleistungen kombinieren",
    excerpt: "So nutzen Sie professionelle Pflege und erhalten trotzdem Pflegegeld. Berechnung und Beispiele für die Kombipflege.",
    category: "Pflegetipps",
    categoryGradient: "from-blue-500 to-indigo-600",
    date: "20. Dezember 2024",
    readTime: "8 Min.",
    author: "AVYTA Team",
    slug: "kombinationsleistung-pflege",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    featured: false,
    views: "980",
  },
  {
    title: "Verhinderungspflege richtig nutzen",
    excerpt: "So nutzen Sie die Verhinderungspflege optimal. Bis zu 1.612 Euro jährlich für Entlastung pflegender Angehöriger.",
    category: "Empfehlungen",
    categoryGradient: "from-rose-500 to-pink-600",
    date: "28. November 2024",
    readTime: "5 Min.",
    author: "AVYTA Team",
    slug: "verhinderungspflege-nutzen",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=400&fit=crop",
    featured: false,
    views: "1.2k",
  },
  {
    title: "10 Tipps für die häusliche Pflege von Demenzpatienten",
    excerpt: "Erfahren Sie, wie Sie den Alltag für Demenzpatienten sicherer und angenehmer gestalten können.",
    category: "Pflegetipps",
    categoryGradient: "from-blue-500 to-indigo-600",
    date: "15. Dezember 2024",
    readTime: "5 Min.",
    author: "AVYTA Team",
    slug: "demenz-pflege-tipps",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=400&fit=crop",
    featured: false,
    views: "890",
  },
];

const categoryMap: Record<string, string> = {
  "Empfehlungen": "empfehlungen",
  "Pflegetipps": "pflegetipps",
  "Gesundheit": "gesundheit",
  "Neuigkeiten": "neuigkeiten",
  "Recht & Finanzen": "recht-finanzen",
};

const stats = [
  { value: "6+", label: "Artikel", icon: BookOpen },
  { value: "5k+", label: "Leser", icon: Eye },
  { value: "6", label: "Kategorien", icon: LayoutGrid },
  { value: "100%", label: "Kostenlos", icon: Star },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("alle");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredPosts = activeCategory === "alle" 
    ? blogPosts 
    : blogPosts.filter(post => categoryMap[post.category] === activeCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Ungültige E-Mail",
        description: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke("hubspot-newsletter", {
        body: { email: email, name: "Blog Abonnent" },
      });

      if (error) throw error;

      toast({
        title: "Erfolgreich angemeldet!",
        description: "Vielen Dank für Ihre Newsletter-Anmeldung.",
      });
      
      setEmail("");
    } catch (error) {
      console.error("Newsletter signup error:", error);
      toast({
        title: "Fehler",
        description: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Blog | AVYTA Pflegegesellschaft mbH</title>
        <meta name="description" content="Aktuelle Artikel zu Pflege, Gesundheit, Recht und Finanzen. Tipps und Empfehlungen für pflegende Angehörige." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/10 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
            
            {/* Floating Elements */}
            <div className="absolute top-32 right-1/4 animate-bounce" style={{ animationDuration: "3s" }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
            </div>
            <div className="absolute bottom-40 left-1/4 animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-sm flex items-center justify-center">
                <Heart className="w-7 h-7 text-accent" />
              </div>
            </div>
            <div className="absolute top-1/3 left-20 animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "1s" }}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 backdrop-blur-sm flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div 
              className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-semibold mb-8 border border-primary/20">
                <Sparkles className="w-4 h-4" />
                Wissen & Ratgeber
                <Sparkles className="w-4 h-4" />
              </span>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
                <span className="text-foreground">Unser</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                  Pflege-Blog
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
                Entdecken Sie hilfreiche Artikel rund um die Themen Pflege, Gesundheit, 
                Recht und Finanzen. Wissen für pflegende Angehörige.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild className="group">
                  <a href="#artikel">
                    Artikel entdecken
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="group">
                  <a href="#newsletter">
                    Newsletter abonnieren
                    <Mail className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-[bounce_1s_ease-in-out_infinite]" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`relative group transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative p-6 md:p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl text-center overflow-hidden">
                    {/* Animated Ring */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/20 rounded-full animate-ping" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Beliebte Artikel
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                Top{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Beiträge
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Unsere meistgelesenen Artikel mit wertvollen Informationen für Sie
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredPost(index)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <div className="relative h-full bg-background rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.categoryGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      
                      {/* Featured Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${post.categoryGradient} text-white text-xs font-semibold shadow-lg`}>
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      </div>

                      {/* Views */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium">
                          <Eye className="w-3 h-3" />
                          {post.views}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                        <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${post.categoryGradient} text-white text-xs font-medium`}>
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Particles */}
                    {hoveredPost === index && (
                      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${post.categoryGradient} animate-ping`}
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animationDelay: `${i * 0.2}s`,
                              animationDuration: "1.5s",
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 via-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <LayoutGrid className="w-4 h-4" />
                Themen
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                Kategorien{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  entdecken
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Finden Sie Artikel zu den Themen, die Sie interessieren
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <button
                  key={category.slug}
                  onClick={() => setActiveCategory(category.slug)}
                  onMouseEnter={() => setHoveredCategory(index)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`group relative text-left transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                >
                  <div className={`relative h-full p-8 bg-background rounded-3xl border transition-all duration-500 overflow-hidden ${
                    activeCategory === category.slug 
                      ? "border-primary shadow-xl ring-2 ring-primary/20" 
                      : "border-border/50 hover:border-primary/30 hover:shadow-xl"
                  }`}>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-20 blur-sm`} />
                    </div>

                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className={`text-xl font-bold mb-3 transition-colors ${
                        activeCategory === category.slug ? "text-primary" : "text-foreground group-hover:text-primary"
                      }`}>
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {category.description}
                      </p>

                      {activeCategory === category.slug && (
                        <div className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium">
                          <span>Aktiv</span>
                          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        </div>
                      )}
                    </div>

                    {/* Hover Particles */}
                    {hoveredCategory === index && (
                      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} animate-ping`}
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animationDelay: `${i * 0.2}s`,
                              animationDuration: "1.5s",
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section id="artikel" className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                  {activeCategory === "alle" 
                    ? "Alle Artikel" 
                    : categories.find(c => c.slug === activeCategory)?.name}
                </h2>
                <p className="text-muted-foreground">
                  {filteredPosts.length} {filteredPosts.length === 1 ? "Artikel" : "Artikel"} verfügbar
                </p>
              </div>
              {activeCategory !== "alle" && (
                <Button 
                  variant="outline"
                  onClick={() => setActiveCategory("alle")}
                  className="group"
                >
                  Alle anzeigen
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              )}
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className={`group relative transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 75}ms` }}
                  >
                    <div className="relative h-full bg-background rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl overflow-hidden">
                      {/* Image */}
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                          <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${post.categoryGradient} text-white text-xs font-medium`}>
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {post.views}
                            </span>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-muted/30 rounded-3xl">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-muted flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground text-lg mb-4">
                  Keine Artikel in dieser Kategorie gefunden.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => setActiveCategory("alle")}
                >
                  Alle Artikel anzeigen
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section id="newsletter" className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
                <Mail className="w-4 h-4" />
                Newsletter
              </div>
              
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Bleiben Sie informiert
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Erhalten Sie regelmäßig neue Artikel, Tipps und exklusive Inhalte direkt in Ihr Postfach.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-14 w-full bg-background border-0 shadow-xl text-base"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="h-14 px-8 bg-white text-primary hover:bg-white/90 shadow-xl"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Abonnieren
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>

              <p className="text-white/70 text-sm mt-6">
                Kein Spam. Jederzeit abbestellbar.
              </p>
            </div>
          </div>
        </section>
      </main>

      <NewsletterSection />
      <Footer />
    </>
  );
};

export default Blog;
