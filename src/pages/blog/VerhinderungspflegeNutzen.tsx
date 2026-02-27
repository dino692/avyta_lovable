import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { ArrowLeft, Calendar, Clock, User, Heart, Euro } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";

const VerhinderungspflegeNutzen = () => {
  return (
    <>
      <Helmet>
        <title>Verhinderungspflege richtig nutzen | AVYTA Blog</title>
        <meta name="description" content="So nutzen Sie die Verhinderungspflege optimal. Bis zu 1.612 Euro jährlich für Entlastung pflegender Angehöriger." />
        <link rel="canonical" href="https://www.avyta.de/blog/verhinderungspflege-nutzen" />
        <meta property="og:title" content="Verhinderungspflege richtig nutzen | AVYTA Blog" />
        <meta property="og:description" content="So nutzen Sie die Verhinderungspflege optimal. Bis zu 1.612 Euro jährlich für Entlastung pflegender Angehöriger." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Verhinderungspflege richtig nutzen",
          "datePublished": "2025-12-20",
          "author": {"@type": "Organization", "name": "AVYTA Pflegegesellschaft mbH"},
          "publisher": {"@type": "Organization", "name": "AVYTA Pflegegesellschaft mbH", "logo": {"@type": "ImageObject", "url": "https://www.avyta.de/images/avyta-logo.png"}},
          "mainEntityOfPage": "https://www.avyta.de/blog/verhinderungspflege-nutzen"
        })}</script>
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Blog", url: "https://www.avyta.de/blog" },
          { name: "Verhinderungspflege nutzen", url: "https://www.avyta.de/blog/verhinderungspflege-nutzen" },
        ])}</script>
      </Helmet>

      <Header />

      <main className="pt-20">
        <article className="py-12">
          <div className="container mx-auto px-4">
            {/* Back Link */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Blog
            </Link>

            {/* Header */}
            <header className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 text-rose-600 text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Empfehlungen
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Verhinderungspflege richtig nutzen
              </h1>
              <div className="flex items-center justify-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  28. November 2024
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  5 Min. Lesezeit
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  AVYTA Team
                </span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="max-w-4xl mx-auto mb-12">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&h=600&fit=crop"
                alt="Pflegerin mit Seniorin"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto prose prose-lg prose-slate">
              <p className="lead text-xl text-muted-foreground mb-8">
                Pflegende Angehörige leisten Großartiges – und brauchen auch mal eine Auszeit. 
                Die Verhinderungspflege macht es möglich. Wir erklären, wie Sie diese Leistung optimal nutzen.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Euro className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-primary">Bis zu 1.612 €</div>
                  <div className="text-muted-foreground">jährlich für Verhinderungspflege</div>
                </div>
              </div>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Was ist Verhinderungspflege?</h2>
              <p className="text-muted-foreground mb-6">
                Wenn die Hauptpflegeperson verhindert ist – sei es durch Urlaub, Krankheit oder andere 
                Gründe – übernimmt die Pflegekasse die Kosten für eine Ersatzpflege. Das gilt für bis 
                zu 6 Wochen (42 Tage) im Jahr.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Wer hat Anspruch?</h2>
              <p className="text-muted-foreground mb-6">
                Anspruch auf Verhinderungspflege haben Pflegebedürftige ab Pflegegrad 2, wenn:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Sie von einer Privatperson (z.B. Angehörigen) gepflegt werden</li>
                <li>Die Pflege seit mindestens 6 Monaten besteht</li>
                <li>Die Pflegeperson mindestens 10 Stunden pro Woche pflegt</li>
              </ul>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Wie hoch ist die Leistung?</h2>
              <p className="text-muted-foreground mb-6">
                Die Pflegekasse zahlt bis zu 1.612 Euro pro Kalenderjahr für Verhinderungspflege. 
                Zusätzlich können bis zu 806 Euro aus dem Budget der Kurzzeitpflege umgewandelt werden – 
                das ergibt insgesamt bis zu 2.418 Euro.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Stundenweise Verhinderungspflege</h2>
              <p className="text-muted-foreground mb-6">
                Besonders praktisch: Die Verhinderungspflege kann auch stundenweise genutzt werden. 
                So können Sie regelmäßig Termine wahrnehmen oder sich kleine Auszeiten gönnen, ohne 
                den gesamten Jahresbetrag auf einmal zu nutzen.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">So beantragen Sie Verhinderungspflege</h2>
              <p className="text-muted-foreground mb-6">
                Die Beantragung ist unkompliziert:
              </p>
              <ol className="list-decimal list-inside text-muted-foreground mb-6 space-y-2">
                <li>Formloser Antrag bei der Pflegekasse (vor oder nach der Verhinderungspflege)</li>
                <li>Angabe des Zeitraums und der Ersatzpflege</li>
                <li>Einreichung der Rechnung des Pflegedienstes</li>
                <li>Erstattung durch die Pflegekasse</li>
              </ol>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">Unser Tipp: Budget nicht verfallen lassen!</h2>
              <p className="text-muted-foreground mb-6">
                Das Budget für Verhinderungspflege verfällt am Ende des Kalenderjahres. Planen Sie 
                daher frühzeitig, wie Sie es nutzen möchten. Wir helfen Ihnen gerne bei der Planung 
                und übernehmen die Pflege, wenn Sie eine Auszeit brauchen.
              </p>

              <h2 className="text-2xl font-display font-bold text-foreground mt-12 mb-4">AVYTA als Ihre Vertretung</h2>
              <p className="text-muted-foreground mb-6">
                Als ambulanter Pflegedienst übernehmen wir die Verhinderungspflege professionell und 
                zuverlässig. Ihre Angehörigen sind bei uns in besten Händen, während Sie sich erholen.
              </p>

              {/* CTA Box */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-12">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Verhinderungspflege planen
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nutzen Sie Ihr Budget für Verhinderungspflege. Wir beraten Sie gerne zu den 
                  Möglichkeiten und übernehmen die Pflege.
                </p>
                <CTADropdownButton size="default" />
              </div>
            </div>
          </div>
        </article>
      </main>

      <NewsletterSection />
      <Footer />
    </>
  );
};

export default VerhinderungspflegeNutzen;
