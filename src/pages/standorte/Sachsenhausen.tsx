import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Heart, Shield, CheckCircle, HelpCircle } from "lucide-react";
import CTADropdownButton from "@/components/CTADropdownButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const grundpflegeLeistungen = [
  "Maßnahmen zur Mobilität",
  "Hauswirtschaftliche Hilfe",
  "Unterstützung bei dem An- und Auskleiden",
  "Hilfe beim Essen und Trinken",
  "Hilfe bei der Ausscheidung",
  "Hilfe bei der Körperpflege"
];

const behandlungspflegeLeistungen = [
  "Kompressionsstrümpfe an- und ausziehen",
  "Herrichten und Verabreichen von Medikamenten",
  "Injektionen",
  "Infusionen",
  "Blutdruckkontrolle",
  "Blutzuckerkontrolle",
  "Wundversorgung",
  "Tracheostomaversorgung",
  "Versorgung von Anus Praeter sowie Urostoma",
  "Parenterale & enterale Ernährung"
];

const Sachsenhausen = () => {
  return (
    <>
      <Helmet>
        <title>Pflegedienst Sachsenhausen Frankfurt | AVYTA Ambulante Pflege</title>
        <meta name="description" content="Pflegedienst Sachsenhausen - individuelle Pflege in familiärer Atmosphäre. Grundpflege, Behandlungspflege, Intensivpflege. Mit Herz an Ihrer Seite. Tel: 069 153 914 05" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Pflegedienst Sachsenhausen: individuelle Pflege
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Sie suchen für Sich oder für Ihre Angehörigen einen professionellen Pflegedienst in Sachsenhausen? Unser Pflegedienst Frankfurt Sachsenhausen bietet Ihnen eine individuelle und hochqualifizierte Betreuung.
                </p>
                <div className="flex justify-center">
                  <CTADropdownButton />
                </div>
              </div>
            </div>
          </section>

          {/* Intro Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    Unser ambulanter Pflegedienst in Frankfurt Sachsenhausen ist geeignet für Personen, die Ihre alltäglichen Aufgaben nicht mehr vollständig allein erledigen können. Die Gründe hierfür können vielfältig sein – aufgrund des Alters, nach schweren Unfällen oder aufgrund geistiger Einschränkungen.
                  </p>
                  <p className="mb-6">
                    Unser Pflegedienst bietet Ihnen die Möglichkeit, in Ihrer vertrauten und häuslichen Umgebung zu verbleiben. Für viele Personen ist ein ambulanter Pflegedienst die beste Möglichkeit, Eigenständigkeit und Pflegebedürftigkeit zu kombinieren. Mit dem Avyta Pflegedienst in Sachsenhausen erhalten Sie eine attraktive Lebensqualität in Ihrer Wohlfühlatmosphäre.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center my-8">
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Immer für Sie da</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Heart className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">Familiäre Atmosphäre</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Leistungen im Überblick */}
          <section className="py-20 bg-card/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Pflegedienst in Sachsenhausen: unsere Leistungen im Überblick
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Jede Person ist individuell und genauso individuell ist auch die jeweilige Pflegebedürftigkeit. Unser umfangreiches Leistungsspektrum ermöglicht jeder Person die benötigte Pflege.
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Grundpflege */}
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Grundpflege
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Alle Maßnahmen, die der Versorgung des Körpers dienen:
                    </p>
                    <ul className="space-y-2">
                      {grundpflegeLeistungen.map((leistung, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {leistung}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Behandlungspflege */}
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Behandlungspflege
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Anspruchsvolle medizinische Maßnahmen, die von Ihrem Arzt angeordnet werden:
                    </p>
                    <ul className="space-y-2">
                      {behandlungspflegeLeistungen.map((leistung, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {leistung}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 max-w-3xl mx-auto">
                <Card variant="elevated" className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                      Intensivpflege & Serviceleistungen
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Im Rahmen der Behandlungspflege übernehmen wir bei Bedarf auch Maßnahmen der Intensivpflege wie die Heimbeatmung, Überwachung und Vitalisierung des Patienten, Legen eines Blasenkatheters, endotracheales Absaugen oder Lagerungsbehandlungen und Mobilisation.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Des Weiteren bieten wir Serviceleistungen außerhalb der direkten Pflege an: Hilfestellungen beim Ausfüllen von Anträgen, Unterstützung von Spaziergängen oder Hilfe bei dem Besorgen von Medikamenten.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  Mit Herz an Ihrer Seite – Pflegedienst in Sachsenhausen
                </h2>
                <p className="text-muted-foreground mb-4">
                  Unser Pflegedienst ist immer mit Herz an Ihrer Seite, denn für jede Ihrer individuellen Bedürfnisse und bei jedem Pflegegrad bieten wir Ihnen eine für Sie abgestimmte Pflege.
                </p>
                <p className="text-muted-foreground mb-8">
                  Wir beachten nicht nur Ihre gesundheitliche Situation, sondern auch Ihre sozialen, religiösen und kulturellen Bedürfnisse. Denn Menschlichkeit und eine familiäre Atmosphäre steht für unseren Pflegedienst im Mittelpunkt. Der permanente Prozess zur Qualitätssicherung und unsere langjährige Erfahrung garantieren eine sehr hohe Qualität der ganzheitlichen Pflege.
                </p>
                <CTADropdownButton />
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
                  <HelpCircle className="w-8 h-8 text-primary" />
                  Häufige Fragen
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Nach welchen Kriterien funktioniert der Avyta Pflegedienst in Sachsenhausen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Beim Avyta Pflegedienst in Sachsenhausen arbeiten wir nach dem Motto „von Menschen, für Menschen" und stellen damit Sie und Ihre individuelle Situation in den Mittelpunkt. Wir erstellen Ihnen nicht nur ein individuelles Paket an Pflegeleistungen, sondern beachten auch Ihre religiösen, ethischen, sozialen und kulturellen Bedürfnisse.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie hoch werden die Kosten für einen Pflegedienst in Sachsenhausen ausfallen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Die Kosten richten sich nach dem individuellen Pflegebedarf und Pflegegrad. Wir beraten Sie gerne zu den Kosten und möglichen Finanzierungswegen über die Pflegekasse.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Pflegegrade kann der Avyta Pflegedienst in Sachsenhausen abdecken?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Wir betreuen Patienten aller Pflegegrade – von der einfachen Alltagsunterstützung über die Grundpflege bis hin zur komplexen Intensivpflege mit Heimbeatmung.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* Back Link */}
          <section className="py-8">
            <div className="container mx-auto px-4 text-center">
              <Link to="/standorte/frankfurt" className="text-primary hover:underline font-medium">
                ← Zurück zur Übersicht Frankfurt
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Sachsenhausen;
