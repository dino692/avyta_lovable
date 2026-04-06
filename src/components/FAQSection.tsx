import { useRef, useState, useEffect } from "react";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Welche Leistungen bietet AVYTA als ambulanter Pflegedienst in Frankfurt an?",
    answer: "Wir bieten ein umfassendes Spektrum an Pflegeleistungen: Grundpflege (SGB XI), Behandlungspflege (SGB V), Intensivpflege, 24-Stunden-Betreuung, Verhinderungspflege, Haushaltshilfe sowie individuelle Pflegeberatung. Unser Team ist spezialisiert auf Demenz- und Diabetesversorgung.",
  },
  {
    question: "Wie beantrage ich einen Pflegegrad und welche Unterstützung bietet AVYTA dabei?",
    answer: "Wir unterstützen Sie kostenlos bei der Beantragung eines Pflegegrads. Unser Pflegeberater-Team begleitet Sie durch den gesamten Prozess – von der Antragstellung bei der Pflegekasse über die Vorbereitung auf den MDK-Besuch bis zur Einlegung eines Widerspruchs bei Ablehnung.",
  },
  {
    question: "Übernimmt die Krankenkasse die Kosten für den ambulanten Pflegedienst?",
    answer: "Ja, viele unserer Leistungen werden direkt mit der Kranken- oder Pflegekasse abgerechnet. Behandlungspflege (SGB V) wird vollständig von der Krankenkasse übernommen. Bei Grundpflege (SGB XI) richtet sich die Höhe der Kostenübernahme nach Ihrem Pflegegrad. Wir beraten Sie gerne zu Ihren individuellen Ansprüchen.",
  },
  {
    question: "In welchen Stadtteilen von Frankfurt ist AVYTA tätig?",
    answer: "Wir versorgen Patienten in ganz Frankfurt am Main und Umgebung – darunter Bockenheim, Sachsenhausen, Nordend, Bornheim, Westend, Ostend, Dornbusch, Eckenheim, Eschersheim, Rödelheim, Höchst, Niederrad, Griesheim und Bad Vilbel. Unser Hauptsitz befindet sich zentral am Allerheiligentor.",
  },
  {
    question: "Wie schnell kann die Pflege bei AVYTA beginnen?",
    answer: "In dringenden Fällen können wir die Pflege innerhalb von 24 Stunden aufnehmen. In der Regel vereinbaren wir zunächst ein kostenloses Erstgespräch bei Ihnen zu Hause, um den individuellen Pflegebedarf zu ermitteln. Rufen Sie uns einfach an – wir sind 24/7 erreichbar unter 069 153 914 05.",
  },
  {
    question: "Welche Qualifikationen hat das Pflegepersonal von AVYTA?",
    answer: "Unser Team besteht aus examinierten Pflegefachkräften, Pflegehelfern und spezialisierten Fachkräften für Demenz- und Diabetesversorgung. Alle Mitarbeiter werden regelmäßig fortgebildet. Unsere MDK-Note von 1,6 bestätigt die hohe Qualität unserer Arbeit.",
  },
  {
    question: "Was ist Verhinderungspflege und wie kann ich sie nutzen?",
    answer: "Verhinderungspflege springt ein, wenn Ihre reguläre Pflegeperson verhindert ist – z. B. durch Urlaub, Krankheit oder Termine. Ab Pflegegrad 2 stehen Ihnen jährlich bis zu 1.612 € zu. Dieser Anspruch verfällt am Jahresende! Wir helfen Ihnen, dieses Budget optimal zu nutzen.",
  },
  {
    question: "Bietet AVYTA auch Betreuung bei Demenzerkrankungen an?",
    answer: "Ja, Demenzbetreuung ist einer unserer Schwerpunkte. Unsere Mitarbeiter sind speziell für den Umgang mit demenziell veränderten Menschen geschult. Wir bieten sowohl ambulante Einzelbetreuung als auch Plätze in unserer Demenz-Wohngemeinschaft in Frankfurt an.",
  },
];

const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden" id="faq">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Häufige Fragen
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Ihre Fragen –{" "}
            <span className="text-primary">unsere Antworten</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Hier finden Sie Antworten auf die häufigsten Fragen rund um unseren ambulanten Pflegedienst in Frankfurt.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border/50 rounded-xl px-5 md:px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-sm md:text-base font-semibold text-foreground hover:text-primary py-4 md:py-5 [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-4 md:pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
