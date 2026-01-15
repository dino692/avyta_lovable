import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  BookOpen, 
  Heart, 
  Stethoscope, 
  Newspaper, 
  Scale, 
  ArrowRight, 
  Calendar, 
  Clock, 
  LayoutGrid, 
  Mail, 
  Loader2,
  Sparkles,
  TrendingUp,
  ChevronRight,
  Star,
  FileText
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
    count: 6,
  },
  {
    name: "Empfehlungen",
    slug: "empfehlungen",
    icon: Heart,
    description: "Tipps für den Pflegealltag",
    gradient: "from-rose-500 to-pink-600",
    count: 1,
  },
  {
    name: "Pflegetipps",
    slug: "pflegetipps",
    icon: BookOpen,
    description: "Praktische Anleitungen",
    gradient: "from-blue-500 to-indigo-600",
    count: 2,
  },
  {
    name: "Gesundheit",
    slug: "gesundheit",
    icon: Stethoscope,
    description: "Gesundheitsthemen",
    gradient: "from-emerald-500 to-teal-600",
    count: 0,
  },
  {
    name: "Neuigkeiten",
    slug: "neuigkeiten",
    icon: Newspaper,
    description: "Aktuelles von AVYTA",
    gradient: "from-amber-500 to-orange-600",
    count: 0,
  },
  {
    name: "Recht & Finanzen",
    slug: "recht-finanzen",
    icon: Scale,
    description: "Rechtliche Themen",
    gradient: "from-violet-500 to-purple-600",
    count: 3,
  },
];

const blogPosts = [
  {
    title: "Pflegegeld 2026: Aktuelle Tabelle nach Pflegegrad",
    excerpt: "Alle aktuellen Pflegegeld-Beträge für 2026 im Überblick. Erfahren Sie, wie viel Geld Ihnen bei Pflegegrad 2-5 zusteht.",
    category: "Recht & Finanzen",
    categoryGradient: "from-violet-500 to-purple-600",
    date: "10. Januar 2026",
    readTime: "7 Min.",
    author: "AVYTA Team",
    slug: "pflegegeld-tabelle-2025",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    title: "Pflegegrad beantragen: Schritt für Schritt erklärt",
    excerpt: "Alles was Sie wissen müssen, um erfolgreich einen Pflegegrad zu beantragen. Von der Antragstellung bis zur Begutachtung.",
    category: "Recht & Finanzen",
    categoryGradient: "from-violet-500 to-purple-600",
    date: "5. Januar 2026",
    readTime: "8 Min.",
    author: "AVYTA Team",
    slug: "pflegegrad-beantragen",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    title: "Entlastungsbetrag 125 €: So nutzen Sie ihn richtig",
    excerpt: "Der Entlastungsbetrag steht allen ab Pflegegrad 1 zu. Erfahren Sie, wofür Sie die 125 Euro monatlich nutzen können.",
    category: "Recht & Finanzen",
    categoryGradient: "from-violet-500 to-purple-600",
    date: "2. Januar 2026",
    readTime: "6 Min.",
    author: "AVYTA Team",
    slug: "entlastungsbetrag-125-euro",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    title: "Kombinationsleistung: Pflegegeld und Sachleistungen kombinieren",
    excerpt: "So nutzen Sie professionelle Pflege und erhalten trotzdem Pflegegeld. Berechnung und Beispiele für die Kombipflege.",
    category: "Pflegetipps",
    categoryGradient: "from-blue-500 to-indigo-600",
    date: "28. Dezember 2025",
    readTime: "8 Min.",
    author: "AVYTA Team",
    slug: "kombinationsleistung-pflege",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    title: "Verhinderungspflege richtig nutzen",
    excerpt: "So nutzen Sie die Verhinderungspflege optimal. Bis zu 1.612 Euro jährlich für Entlastung pflegender Angehöriger.",
    category: "Empfehlungen",
    categoryGradient: "from-rose-500 to-pink-600",
    date: "20. Dezember 2025",
    readTime: "5 Min.",
    author: "AVYTA Team",
    slug: "verhinderungspflege-nutzen",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    title: "10 Tipps für die häusliche Pflege von Demenzpatienten",
    excerpt: "Erfahren Sie, wie Sie den Alltag für Demenzpatienten sicherer und angenehmer gestalten können.",
    category: "Pflegetipps",
    categoryGradient: "from-blue-500 to-indigo-600",
    date: "15. Dezember 2025",
    readTime: "5 Min.",
    author: "AVYTA Team",
    slug: "demenz-pflege-tipps",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=400&fit=crop",
    featured: false,
  },
];

const categoryMap: Record<string, string> = {
  "Empfehlungen": "empfehlungen",
  "Pflegetipps": "pflegetipps",
  "Gesundheit": "gesundheit",
  "Neuigkeiten": "neuigkeiten",
  "Recht & Finanzen": "recht-finanzen",
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("alle");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const allPosts = activeCategory === "alle" 
    ? blogPosts 
    : blogPosts.filter(post => categoryMap[post.category] === activeCategory);

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
      const { error } = await supabase.functions.invoke("hubspot-newsletter", {
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
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div 
              className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
                <Sparkles className="w-4 h-4" />
                Wissen & Ratgeber
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                <span className="text-foreground">Unser </span>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                  Pflege-Blog
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Entdecken Sie hilfreiche Artikel rund um die Themen Pflege, Gesundheit, 
                Recht und Finanzen.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Section - FIRST */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {categories.map((category, index) => (
                <button
                  key={category.slug}
                  onClick={() => setActiveCategory(category.slug)}
                  onMouseEnter={() => setHoveredCategory(index)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`group relative transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className={`relative flex items-center gap-3 px-5 py-3 rounded-2xl border-2 transition-all duration-300 ${
                    activeCategory === category.slug 
                      ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                      : "border-border/50 bg-background hover:border-primary/50 hover:shadow-lg"
                  }`}>
                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      activeCategory === category.slug 
                        ? "bg-white/20" 
                        : `bg-gradient-to-br ${category.gradient} group-hover:scale-110`
                    }`}>
                      <category.icon className={`w-5 h-5 ${
                        activeCategory === category.slug ? "text-primary-foreground" : "text-white"
                      }`} />
                    </div>

                    {/* Text */}
                    <div className="text-left">
                      <div className={`font-semibold text-sm ${
                        activeCategory === category.slug ? "text-primary-foreground" : "text-foreground"
                      }`}>
                        {category.name}
                      </div>
                      <div className={`text-xs ${
                        activeCategory === category.slug ? "text-primary-foreground/80" : "text-muted-foreground"
                      }`}>
                        {category.count} Artikel
                      </div>
                    </div>

                    {/* Active indicator */}
                    {activeCategory === category.slug && (
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
                    )}

                    {/* Hover glow */}
                    {hoveredCategory === index && activeCategory !== category.slug && (
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.gradient} opacity-10 blur-sm`} />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts - When "alle" is selected */}
        {activeCategory === "alle" && (
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    Beliebte Artikel
                  </h2>
                  <p className="text-muted-foreground text-sm">Unsere meistgelesenen Beiträge</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {blogPosts.filter(p => p.featured).map((post, index) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className={`group relative transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-full bg-background rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${post.categoryGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                      
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        
                        {/* Featured Badge */}
                        <div className="absolute top-4 left-4">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${post.categoryGradient} text-white text-xs font-semibold shadow-lg`}>
                            <Star className="w-3 h-3" />
                            Featured
                          </span>
                        </div>
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

                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                          <div className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section id="artikel" className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    {activeCategory === "alle" 
                      ? "Weitere Artikel" 
                      : categories.find(c => c.slug === activeCategory)?.name}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {allPosts.length} {allPosts.length === 1 ? "Artikel" : "Artikel"} verfügbar
                  </p>
                </div>
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

            {(activeCategory === "alle" ? blogPosts.filter(p => !p.featured) : allPosts).length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(activeCategory === "alle" ? blogPosts.filter(p => !p.featured) : allPosts).map((post, index) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className={`group relative transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 75}ms` }}
                  >
                    <div className="relative h-full bg-background rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                      {/* Image */}
                      <div className="aspect-video overflow-hidden rounded-t-2xl">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                          <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${post.categoryGradient} text-white text-xs font-medium`}>
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-border/50">
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                          <span className="text-primary text-sm font-medium group-hover:underline flex items-center gap-1">
                            Lesen
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-background rounded-3xl border border-border/50">
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

      <Footer />
    </>
  );
};

export default Blog;
