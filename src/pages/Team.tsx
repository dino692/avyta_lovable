import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Images, X } from "lucide-react";
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
  },
  {
    name: "Dino Lalic",
    role: "Prokurist, Finanzen & Marketing",
    image: prokuristImage,
    description: "Verantwortet die Finanzen und das Marketing von AVYTA.",
  },
  {
    name: "Andrea Knezevic",
    role: "Assistenz",
    image: assistenzImage,
    description: "Unterstützt die Geschäftsleitung in allen organisatorischen Belangen.",
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
      <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
              Unser Team
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up">
              Die Menschen hinter <span className="text-primary">AVYTA</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Lernen Sie unser engagiertes Team kennen – Menschen mit Herz, Kompetenz und Leidenschaft für die Pflege.
            </p>
          </div>
        </div>
      </section>

      {/* Team Group Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <img
              src={teamGroupImage}
              alt="Das AVYTA Team - Ambulanter Pflegedienst Frankfurt"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Unsere Führungskräfte
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Erfahrene Fachkräfte, die mit Herzblut für Sie da sind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name} 
                variant="elevated"
                className="group overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3 text-sm">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Team-Stimmen
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Was unser Team sagt
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hören Sie direkt von unseren Mitarbeitern, was sie an ihrer Arbeit bei AVYTA schätzen.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card variant="elevated" className="overflow-hidden animate-fade-up">
              <CardContent className="p-0">
                <div className="relative aspect-[9/16] overflow-hidden">
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
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Images className="w-4 h-4 inline-block mr-2" />
              Galerie
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Einblicke in unser Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Impressionen aus unserem Arbeitsalltag und von Teamevents.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue={galleryCategories[0].id} className="w-full">
              <TabsList className="w-full justify-center mb-8 flex-wrap h-auto gap-2 bg-transparent">
                {galleryCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {galleryCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className={`grid gap-6 ${category.images.length === 1 ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                    {category.images.map((image, index) => (
                      <div
                        key={index}
                        className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer animate-fade-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                            <Images className="w-5 h-5 text-primary" />
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

      {/* Image Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Join Team CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card variant="elevated" className="bg-primary text-primary-foreground overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                      Werden Sie Teil unseres Teams!
                    </h3>
                    <p className="text-primary-foreground/80">
                      Wir suchen engagierte Pflegekräfte, die mit Herz arbeiten.
                    </p>
                  </div>
                </div>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="whitespace-nowrap"
                  asChild
                >
                  <Link to="/jobs">Alle Pflegejobs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Team;