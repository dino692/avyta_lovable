import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Play, Quote, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const teamMembers = [
  {
    name: "Maria Schmidt",
    role: "Geschäftsführung",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face",
    description: "Über 20 Jahre Erfahrung in der Pflege und Unternehmensführung.",
  },
  {
    name: "Thomas Weber",
    role: "Pflegedienstleitung",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    description: "Examinierter Altenpfleger mit Herz und Leidenschaft.",
  },
  {
    name: "Sarah Müller",
    role: "Qualitätsmanagement",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    description: "Sorgt für höchste Standards in allen Bereichen.",
  },
  {
    name: "Dr. Michael Braun",
    role: "Medizinische Beratung",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face",
    description: "Facharzt für Geriatrie und langjähriger Partner.",
  },
  {
    name: "Lisa Hoffmann",
    role: "Teamleitung Berlin-Mitte",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=300&fit=crop&crop=face",
    description: "Koordiniert unser engagiertes Team in Berlin-Mitte.",
  },
  {
    name: "Andreas Koch",
    role: "Teamleitung Potsdam",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    description: "Leitet unseren Standort in Potsdam mit Herzblut.",
  },
];

const teamVideos = [
  {
    name: "Maria Schmidt",
    role: "Geschäftsführung",
    thumbnail: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=225&fit=crop",
    title: "Warum ich HerzPflege gegründet habe",
  },
  {
    name: "Thomas Weber",
    role: "Pflegedienstleitung",
    thumbnail: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=225&fit=crop",
    title: "Was mich an meiner Arbeit begeistert",
  },
  {
    name: "Lisa Hoffmann",
    role: "Teamleitung",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=225&fit=crop",
    title: "Mein Weg zur Pflege",
  },
];

const customerTestimonials = [
  {
    name: "Familie Schneider",
    location: "Berlin-Charlottenburg",
    text: "Das Team von HerzPflege hat sich liebevoll um unsere Mutter gekümmert. Wir sind unendlich dankbar für die professionelle und herzliche Betreuung.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Herr Meier",
    location: "Potsdam",
    text: "Nach meinem Schlaganfall hat mir das HerzPflege-Team geholfen, wieder selbstständig zu werden. Die Therapeuten sind wahre Engel!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Familie Wagner",
    location: "Berlin-Spandau",
    text: "Seit über 3 Jahren betreut HerzPflege meinen Vater. Die Zuverlässigkeit und das Engagement sind beispiellos.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

const eventGalleries = [
  {
    title: "Weihnachtsfeier 2024",
    date: "15. Dezember 2024",
    location: "Berlin",
    images: [
      "https://images.unsplash.com/photo-1482575832494-771f74bf6857?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1543934638-bd2e138430c4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=400&h=300&fit=crop",
    ],
  },
  {
    title: "Sommerfest 2024",
    date: "20. Juli 2024",
    location: "Potsdam",
    images: [
      "https://images.unsplash.com/photo-1529543544277-5bb4c7aaa2e7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop",
    ],
  },
  {
    title: "Teambuilding 2024",
    date: "10. Mai 2024",
    location: "Brandenburg",
    images: [
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=400&h=300&fit=crop",
    ],
  },
  {
    title: "Weihnachtsfeier 2023",
    date: "16. Dezember 2023",
    location: "Berlin",
    images: [
      "https://images.unsplash.com/photo-1513297887119-d46091b24b39?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1512389142860-9c449e58a814?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1545622783-b3e021430fee?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=400&h=300&fit=crop",
    ],
  },
];

const Team = () => {
  const [selectedEvent, setSelectedEvent] = useState(eventGalleries[0]);

  return (
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
              Die Menschen hinter <span className="text-primary">HerzPflege</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Lernen Sie unser engagiertes Team kennen – Menschen mit Herz, Kompetenz und Leidenschaft für die Pflege.
            </p>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Videos Section */}
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
              Hören Sie direkt von unseren Mitarbeitern, was sie an ihrer Arbeit bei HerzPflege schätzen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamVideos.map((video, index) => (
              <Card 
                key={video.title}
                variant="elevated"
                className="group cursor-pointer overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-glow">
                        <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {video.name} – {video.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Kundenstimmen
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Was unsere Kunden sagen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Die Zufriedenheit unserer Patienten und ihrer Familien ist unser größter Antrieb.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customerTestimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                variant="elevated"
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Event-Galerie
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Gemeinsame Momente
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Eindrücke von unseren Teamevents und Feiern.
            </p>
          </div>

          {/* Event Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {eventGalleries.map((event) => (
              <Button
                key={event.title}
                variant={selectedEvent.title === event.title ? "hero" : "outline"}
                onClick={() => setSelectedEvent(event)}
                className="transition-all"
              >
                {event.title}
              </Button>
            ))}
          </div>

          {/* Selected Event Info */}
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
              {selectedEvent.title}
            </h3>
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {selectedEvent.date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {selectedEvent.location}
              </span>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {selectedEvent.images.map((image, index) => (
              <div 
                key={index}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={image}
                  alt={`${selectedEvent.title} - Bild ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

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
                >
                  Karriere entdecken
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
