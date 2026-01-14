import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Briefcase, Users, Heart, Clock, MapPin, ArrowRight, CheckCircle2, Sparkles, Home, Phone, Star, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobCategories = [
  {
    title: "Pflege Jobs",
    href: "/jobs/pflege-jobs",
    description: "Alle Pflegestellen im Überblick",
    icon: Heart,
    count: "4 Stellen",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    title: "Alle Stellenangebote",
    href: "/karriere/stellenangebote-pflege-frankfurt",
    description: "Übersicht aller offenen Positionen bei AVYTA",
    icon: Briefcase,
    count: "5 Stellen",
    gradient: "from-primary to-accent",
  },
  {
    title: "Pflegefachkraft",
    href: "/karriere/pflegefachkraft-frankfurt",
    description: "Examinierte Fachkräfte gesucht",
    icon: Sparkles,
    count: "1 Stelle",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Pflegehilfskraft",
    href: "/karriere/pflegehilfskraft-frankfurt",
    description: "Mit Basisqualifikation in der Pflege",
    icon: Users,
    count: "1 Stelle",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Pflegehelfer/in",
    href: "/karriere/pflegehelfer-frankfurt",
    description: "Einstieg in die Pflege ohne Ausbildung",
    icon: Heart,
    count: "2 Stellen",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Haushaltshilfe",
    href: "/karriere/haushaltshilfe-frankfurt",
    description: "Unterstützung im Alltag",
    icon: Home,
    count: "1 Stelle",
    gradient: "from-sky-500 to-blue-600",
  },
];

const benefits = [
  { icon: TrendingUp, text: "Überdurchschnittliche Vergütung" },
  { icon: Clock, text: "Flexible Arbeitszeiten" },
  { icon: Award, text: "Unbefristeter Arbeitsvertrag" },
  { icon: Sparkles, text: "Fortbildungsmöglichkeiten" },
  { icon: Users, text: "Familiäres Team" },
  { icon: Star, text: "Betriebliche Altersvorsorge" },
  { icon: Heart, text: "30 Tage Urlaub" },
  { icon: MapPin, text: "Firmenwagen möglich" },
];

const stats = [
  { value: "5+", label: "Offene Stellen", icon: Briefcase },
  { value: "50+", label: "Teammitglieder", icon: Users },
  { value: "30", label: "Tage Urlaub", icon: Heart },
  { value: "100%", label: "Zufriedenheit", icon: Star },
];

const Jobs = () => {
  return (
    <>
      <Helmet>
        <title>Pflege Jobs Frankfurt: Ihre Karriere bei AVYTA | Stellenangebote</title>
        <meta name="description" content="Pflege Jobs in Frankfurt am Main bei AVYTA. Stellenangebote für Pflegefachkräfte, Pflegehelfer und Haushaltshilfen. Überdurchschnittliche Vergütung, flexible Arbeitszeiten, familiäres Team. Jetzt bewerben!" />
        <meta name="keywords" content="Pflege Jobs Frankfurt, Pflegefachkraft Stellenangebote Frankfurt, Pflegehelfer Jobs, Karriere Pflegedienst Frankfurt" />
        <meta property="og:title" content="Pflege Jobs Frankfurt: Ihre Karriere bei AVYTA" />
        <meta property="og:description" content="Die Wichtigkeit der Ambulanten Pflege steigt! Bewerben Sie sich jetzt bei AVYTA für ein familiäres Arbeitsumfeld mit flacher Hierarchie." />
        <link rel="canonical" href="https://www.avyta.de/karriere" />
      </Helmet>

      <Header />

      <main className="pt-20 overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 overflow-hidden">
          {/* Multi-Layer Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary/10" />
          
          {/* Animated Gradient Meshes */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl animate-morph-blob will-change-transform"
              style={{ background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)' }}
            />
            <div 
              className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl animate-morph-blob will-change-transform"
              style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)', animationDelay: '-3s' }}
            />
            <div 
              className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] rounded-full opacity-25 blur-3xl animate-float-slow will-change-transform"
              style={{ background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)', animationDelay: '-5s' }}
            />
          </div>
          
          {/* Floating Decorative Elements */}
          <div className="absolute top-20 left-[10%] w-3 h-3 rounded-full bg-primary/40 animate-float-slow" style={{ animationDelay: '0s' }} />
          <div className="absolute top-40 right-[15%] w-4 h-4 rounded-full bg-accent/30 animate-float-slow" style={{ animationDelay: '-2s' }} />
          <div className="absolute bottom-32 left-[20%] w-2 h-2 rounded-full bg-primary/50 animate-float-slow" style={{ animationDelay: '-4s' }} />
          <div className="absolute bottom-20 right-[25%] w-5 h-5 rounded-full bg-accent/20 animate-float-slow" style={{ animationDelay: '-1s' }} />
          
          {/* Grain Overlay */}
          <div className="absolute inset-0 grain-overlay opacity-30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background/80 backdrop-blur-xl border border-primary/20 shadow-lg shadow-primary/10 mb-8 animate-fade-in"
              >
                <div className="relative">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <div className="absolute inset-0 bg-primary/30 blur-md rounded-full animate-pulse" />
                </div>
                <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-wide">
                  Karriere bei AVYTA
                </span>
              </div>
              
              {/* Main Headline */}
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight animate-fade-in"
                style={{ animationDelay: '0.1s' }}
              >
                <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                  Werden Sie Teil
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
                  unseres Teams
                </span>
              </h1>
              
              {/* Subtitle */}
              <p 
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                Bei AVYTA arbeiten Sie in einem wertschätzenden Umfeld mit flexiblen Arbeitszeiten 
                und überdurchschnittlicher Vergütung.
              </p>
              
              {/* CTA Buttons */}
              <div 
                className="flex flex-wrap justify-center gap-4 animate-fade-in"
                style={{ animationDelay: '0.3s' }}
              >
                <Link
                  to="/jobs/stellenangebote"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-2xl font-semibold text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">Alle Stellen ansehen</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <a
                  href="tel:+4969920388770"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-background/80 backdrop-blur-xl border-2 border-primary/30 rounded-2xl font-semibold text-foreground hover:border-primary/60 hover:bg-primary/5 transition-all duration-500 hover:scale-105 active:scale-95"
                >
                  <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span>Jetzt anrufen</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative p-6 md:p-8 rounded-3xl bg-background/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <stat.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="relative py-28 md:py-36">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
              style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }}
            />
            <div 
              className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
              style={{ background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)' }}
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6 animate-fade-in">
                Offene Positionen
              </span>
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 animate-fade-in"
                style={{ animationDelay: '0.1s' }}
              >
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Finden Sie Ihren
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
                  Traumjob
                </span>
              </h2>
              <p 
                className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                Entdecken Sie unsere aktuellen Stellenangebote und starten Sie Ihre Karriere bei AVYTA
              </p>
            </div>
            
            {/* Job Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {jobCategories.map((category, index) => (
                <Link
                  key={category.href}
                  to={category.href}
                  className="group relative p-8 rounded-3xl bg-background/60 backdrop-blur-xl border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-2 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                        {category.count}
                      </span>
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary/5" />
          
          {/* Floating Orbs */}
          <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-float-slow" style={{ animationDelay: '-3s' }} />
          
          {/* Grain Overlay */}
          <div className="absolute inset-0 grain-overlay opacity-20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6 animate-fade-in">
                  Ihre Vorteile
                </span>
                <h2 
                  className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 animate-fade-in"
                  style={{ animationDelay: '0.1s' }}
                >
                  <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Warum Sie bei
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
                    AVYTA arbeiten sollten
                  </span>
                </h2>
                <p 
                  className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-in"
                  style={{ animationDelay: '0.2s' }}
                >
                  Wir bieten Ihnen nicht nur einen Job, sondern eine erfüllende Karriere 
                  mit zahlreichen Vorteilen und Entwicklungsmöglichkeiten.
                </p>
                
                <Link
                  to="/jobs/stellenangebote"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-2xl font-semibold text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden animate-fade-in"
                  style={{ animationDelay: '0.3s' }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">Jetzt bewerben</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              
              {/* Right - Benefits Grid */}
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit.text}
                    className="group relative p-5 rounded-2xl bg-background/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 animate-fade-in"
                    style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {benefit.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
          
          {/* Animated Mesh */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-morph-blob"
              style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }}
            />
            <div 
              className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl animate-morph-blob"
              style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)', animationDelay: '-5s' }}
            />
          </div>
          
          {/* Grain Overlay */}
          <div className="absolute inset-0 grain-overlay opacity-20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 tracking-tight animate-fade-in">
                Bereit für den nächsten Schritt?
              </h2>
              <p 
                className="text-xl text-primary-foreground/90 leading-relaxed mb-12 animate-fade-in"
                style={{ animationDelay: '0.1s' }}
              >
                Werden Sie Teil unseres Teams und gestalten Sie die Zukunft der Pflege mit uns!
              </p>
              
              <div 
                className="flex flex-wrap justify-center gap-4 animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                <Link
                  to="/jobs/stellenangebote"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white rounded-2xl font-semibold text-primary shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Briefcase className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Stellenangebote ansehen</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <a
                  href="tel:+4969920388770"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground/10 backdrop-blur-xl border-2 border-primary-foreground/30 rounded-2xl font-semibold text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground/50 transition-all duration-500 hover:scale-105 active:scale-95"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>069 920 388 770</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <NewsletterSection />
      <Footer />
    </>
  );
};

export default Jobs;
