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
    question: "Welche Leistungen bietet ein ambulanter Pflegedienst an?",
    answer: "Ein ambulanter Pflegedienst bietet Grundpflege (SGB XI), Behandlungspflege (SGB V), Intensivpflege, 24-Stunden-Betreuung, Verhinderungspflege, Haushaltshilfe sowie individuelle Pflegeberatung. Je nach Anbieter gibt es zusätzlich Spezialisierungen wie Demenz- oder Diabetesversorgung.",
  },
  {
    question: "Wie beantrage ich einen Pflegegrad?",
    answer: "Den Pflegegrad beantragen Sie bei Ihrer Pflegekasse – formlos per Telefon, Brief oder Online-Formular. Anschließend erfolgt eine Begutachtung durch den MDK. Ein guter Pflegedienst unterstützt Sie bei der Antragstellung, der Vorbereitung auf den MDK-Besuch und bei einem eventuellen Widerspruch.",
  },
  {
    question: "Übernimmt die Krankenkasse die Kosten für ambulante Pflege?",
    answer: "Ja, viele Leistungen werden direkt mit der Kranken- oder Pflegekasse abgerechnet. Behandlungspflege (SGB V) wird vollständig von der Krankenkasse übernommen. Bei Grundpflege (SGB XI) richtet sich die Höhe der Kostenübernahme nach Ihrem Pflegegrad.",
  },
  {
    question: "Was ist der Unterschied zwischen Grundpflege und Behandlungspflege?",
    answer: "Grundpflege umfasst alltägliche Hilfen wie Körperpflege, Ernährung und Mobilität – sie wird über die Pflegekasse (SGB XI) finanziert. Behandlungspflege beinhaltet medizinische Maßnahmen wie Wundversorgung, Injektionen oder Medikamentengabe und wird ärztlich verordnet und von der Krankenkasse (SGB V) bezahlt.",
  },
  {
    question: "Was ist Verhinderungspflege und wer hat Anspruch darauf?",
    answer: "Verhinderungspflege springt ein, wenn die reguläre Pflegeperson verhindert ist – z. B. durch Urlaub, Krankheit oder Termine. Ab Pflegegrad 2 stehen Pflegebedürftigen jährlich bis zu 1.612 € zu. Dieser Anspruch verfällt am Jahresende, wenn er nicht genutzt wird.",
  },
  {
    question: "Wie schnell kann ein ambulanter Pflegedienst starten?",
    answer: "In dringenden Fällen kann die Pflege oft innerhalb von 24 Stunden beginnen. Üblicherweise wird zunächst ein kostenloses Erstgespräch zu Hause geführt, um den individuellen Pflegebedarf zu ermitteln und einen Pflegeplan zu erstellen.",
  },
  {
    question: "Was ist der Entlastungsbetrag und wie kann ich ihn nutzen?",
    answer: "Der Entlastungsbetrag beträgt 125 € monatlich und steht allen Pflegebedürftigen ab Pflegegrad 1 zu. Er kann für Haushaltshilfe, Betreuungsangebote oder Tages-/Nachtpflege eingesetzt werden. Nicht genutzte Beträge können bis zum 30. Juni des Folgejahres übertragen werden.",
  },
  {
    question: "Welche Qualifikationen sollte das Personal eines ambulanten Pflegedienstes haben?",
    answer: "Ein seriöser Pflegedienst beschäftigt examinierte Pflegefachkräfte, Pflegehelfer und je nach Spezialisierung zusätzlich geschultes Fachpersonal. Achten Sie auf regelmäßige Fortbildungen und eine gute MDK-Bewertung als Qualitätsindikator.",
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
