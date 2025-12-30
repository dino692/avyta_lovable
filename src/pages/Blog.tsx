import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Heart, Stethoscope, Newspaper, Scale, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Empfehlungen",
    slug: "empfehlungen",
    icon: Heart,
    description: "Tipps und Empfehlungen für den Pflegealltag",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    name: "Pflegetipps",
    slug: "pflegetipps",
    icon: BookOpen,
    description: "Praktische Anleitungen und Hilfestellungen",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    name: "Gesundheit",
    slug: "gesundheit",
    icon: Stethoscope,
    description: "Informationen zu Gesundheitsthemen",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    name: "Neuigkeiten",
    slug: "neuigkeiten",
    icon: Newspaper,
    description: "Aktuelles aus unserem Unternehmen",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    name: "Recht & Finanzen",
    slug: "recht-finanzen",
    icon: Scale,
    description: "Rechtliche und finanzielle Themen",
    color: "bg-purple-500/10 text-purple-600",
  },
];

const blogPosts = [
  {
    title: "10 Tipps für die häusliche Pflege von Demenzpatienten",
    excerpt: "Erfahren Sie, wie Sie den Alltag für Demenzpatienten sicherer und angenehmer gestalten können. Praktische Tipps von unseren Pflegeexperten.",
    category: "Pflegetipps",
    categoryColor: "bg-blue-500/10 text-blue-600",
    date: "15. Dezember 2024",
    readTime: "5 Min.",
    author: "AVYTA Team",
    slug: "demenz-pflege-tipps",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    title: "Pflegegrad beantragen: Schritt für Schritt erklärt",
    excerpt: "Alles was Sie wissen müssen, um erfolgreich einen Pflegegrad zu beantragen. Von der Antragstellung bis zur Begutachtung.",
    category: "Recht & Finanzen",
    categoryColor: "bg-purple-500/10 text-purple-600",
    date: "10. Dezember 2024",
    readTime: "8 Min.",
    author: "AVYTA Team",
    slug: "pflegegrad-beantragen",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    title: "Diabetes im Alter: Worauf Sie achten sollten",
    excerpt: "Wichtige Informationen zur Diabetesversorgung für Senioren und ihre Angehörigen. Tipps für den Alltag.",
    category: "Gesundheit",
    categoryColor: "bg-emerald-500/10 text-emerald-600",
    date: "5. Dezember 2024",
    readTime: "6 Min.",
    author: "AVYTA Team",
    slug: "diabetes-im-alter",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    title: "Unser Team wächst: Neue Kolleginnen bei AVYTA",
    excerpt: "Wir freuen uns, neue Pflegekräfte in unserem Team begrüßen zu dürfen und unsere Kapazitäten zu erweitern.",
    category: "Neuigkeiten",
    categoryColor: "bg-amber-500/10 text-amber-600",
    date: "1. Dezember 2024",
    readTime: "3 Min.",
    author: "AVYTA Team",
    slug: "team-waechst",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    title: "Verhinderungspflege richtig nutzen",
    excerpt: "So nutzen Sie die Verhinderungspflege optimal. Bis zu 1.612 Euro jährlich für Entlastung pflegender Angehöriger.",
    category: "Empfehlungen",
    categoryColor: "bg-rose-500/10 text-rose-600",
    date: "28. November 2024",
    readTime: "5 Min.",
    author: "AVYTA Team",
    slug: "verhinderungspflege-nutzen",
    image: "https://images.unsplash.com/photo-1516733968668-dbdce39c0651?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    title: "Sturzprophylaxe: So vermeiden Sie Stürze im Alter",
    excerpt: "Praktische Tipps zur Sturzvorbeugung für Senioren. So gestalten Sie die Wohnung sicher und bleiben mobil.",
    category: "Pflegetipps",
    categoryColor: "bg-blue-500/10 text-blue-600",
    date: "20. November 2024",
    readTime: "4 Min.",
    author: "AVYTA Team",
    slug: "sturzprophylaxe-tipps",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop",
    featured: false,
  },
];

const featuredPosts = blogPosts.filter(post => post.featured);
const recentPosts = blogPosts.filter(post => !post.featured);

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | AVYTA Pflegegesellschaft mbH</title>
        <meta name="description" content="Aktuelle Artikel zu Pflege, Gesundheit, Recht und Finanzen. Tipps und Empfehlungen für pflegende Angehörige." />
        <meta name="keywords" content="Pflege Blog, Pflegetipps, Gesundheit Senioren, Pflegegrad, Demenz Ratgeber" />
        <meta property="og:title" content="Pflege Blog | AVYTA Pflegedienst Frankfurt" />
        <meta property="og:description" content="Aktuelle Artikel zu Pflege, Gesundheit und Tipps für Angehörige." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://avyta.de/blog" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Unser Blog
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Wissen & Ratgeber
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Entdecken Sie hilfreiche Artikel rund um die Themen Pflege, Gesundheit und mehr. 
                Unser Blog bietet Ihnen wertvolle Informationen und praktische Tipps.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
              Kategorien
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {categories.map((category) => (
                <div
                  key={category.slug}
                  className="group p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground">
                Aktuelle Artikel
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <Link
                  key={index}
                  to={`/blog/${post.slug}`}
                  className="group bg-background rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className={`px-3 py-1 rounded-full ${post.categoryColor} text-xs font-medium`}>
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
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* More Posts */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-foreground mb-12">
              Weitere Artikel
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <Link
                  key={index}
                  to={`/blog/${post.slug}`}
                  className="group bg-background rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className={`px-3 py-1 rounded-full ${post.categoryColor} text-xs font-medium`}>
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
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold text-primary-foreground mb-4">
              Newsletter abonnieren
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Erhalten Sie regelmäßig neue Artikel und Tipps direkt in Ihr Postfach.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a href="/#newsletter">
                Jetzt anmelden
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
