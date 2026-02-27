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
import { generateFAQSchema } from "@/lib/faqSchema";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";

const sachsenhausenFaqs = [
  {
    question: "Nach welchen Kriterien funktioniert der Avyta Pflegedienst in Sachsenhausen?",
    answer: "Beim Avyta Pflegedienst in Sachsenhausen arbeiten wir nach dem Motto 'von Menschen, für Menschen' und stellen damit Sie und Ihre individuelle Situation in den Mittelpunkt. Wir erstellen Ihnen dazu nicht nur ein individuelles Paket an Pflegeleistungen, sondern beachten auch Ihre religiösen, ethischen, sozialen und kulturellen Bedürfnisse."
  },
  {
    question: "Wie hoch werden die Kosten für einen Pflegedienst in Sachsenhausen ausfallen?",
    answer: "Pauschal lässt sich das nicht sagen, gerade weil unsere Pflegeleistungen so individuell auf Ihre Situation abgestimmt werden. Beim Avyta Pflegedienst hören wir uns zunächst an, was genau Sie an Pflegeleistungen benötigen. Dann erstellen wir einen Kostenvoranschlag zur Abrechnung mit Ihrer Kranken- oder Pflegekasse."
  },
  {
    question: "Welche Pflegegrade kann der Avyta Pflegedienst in Sachsenhausen abdecken?",
    answer: "Als Pflegedienst in Sachsenhausen können wir bei Avyta alle Pflegegrade versorgen. Wir übernehmen für Sie ganz einfache Alltagshilfen, unterstützen Sie in der Grundpflege zuhause und übernehmen in der Intensivpflege auch komplexe medizinische Leistungen, um Ihre Gesundheit und Ihren Komfort zu garantieren."
  },
];

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
        <title>Pflegedienst Frankfurt Sachsenhausen für Bedürftige</title>
        <meta name="description" content="Im Bezirk Frankfurt Sachsenhausen sind wir Ihr Pflegedienst des Vertrauens . Grundpflege ✓ Behandlungspflege ✓ Intensivpflege ✓ Mehr auf | avyta.de" />
        <link rel="canonical" href="https://www.avyta.de/pflegedienst-frankfurt-sachsenhausen" />
        <meta property="og:title" content="Pflegedienst Frankfurt Sachsenhausen für Bedürftige" />
        <meta property="og:description" content="Im Bezirk Frankfurt Sachsenhausen sind wir Ihr Pflegedienst des Vertrauens." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.avyta.de/images/avyta-logo.png" />
        <script type="application/ld+json">{generateBreadcrumbSchema([
          { name: "Startseite", url: "https://www.avyta.de/" },
          { name: "Standorte", url: "https://www.avyta.de/standorte/frankfurt" },
          { name: "Sachsenhausen", url: "https://www.avyta.de/pflegedienst-frankfurt-sachsenhausen" },
        ])}</script>
        <script type="application/ld+json">{generateFAQSchema(sachsenhausenFaqs)}</script>
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
                  Sie suchen für Sich oder für Ihre Angehörigen einen <Link to="/team" className="text-primary hover:underline font-medium">professionellen Pflegedienst</Link> in Sachsenhausen? Unser <strong>Pflegedienst Frankfurt Sachsenhausen</strong> bietet Ihnen eine individuelle und hoch qualifizierte Betreuung.
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
                    Unser <Link to="/" className="text-primary hover:underline font-medium">ambulanter Pflegedienst</Link> in Frankfurt Sachsenhausen ist geeignet für Personen, die Ihre alltäglichen Aufgaben nicht mehr vollständig allein erledigen können. Die Gründe hierfür können vielfältig sein. So können einige Personen aufgrund Ihres Alters, nach schweren Unfällen oder aufgrund geistigen Einschränkungen Ihren Alltag nicht mehr ohne Hilfe bewältigen. Eine individuelle und auf Ihre Bedürfnisse angepasste Hilfe bietet Ihnen unser <strong>Pflegedienst in Sachsenhausen</strong>.
                  </p>
                  <p className="mb-6">
                    Dabei bietet unser <strong>Pflegedienst in Sachsenhausen</strong> Ihnen oder Ihren Angehörigen die Möglichkeit, in Ihrer vertrauten und häuslichen Umgebung zu verbleiben. Für viele Personen ist ein ambulanter Pflegedienst in Frankfurt Sachsenhausen die beste Möglichkeit, Eigenständigkeit und Pflegebedürftigkeit zu kombinieren. Mit dem Avyta Pflegedienst in Sachsenhausen erhalten sie eine attraktive <strong>Lebensqualität</strong> und leben in Ihrer <strong>Wohlfühlatmosphäre</strong>.
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
                Jede Person ist individuell und genauso individuell ist auch die jeweilige <strong>Pflegebedürftigkeit</strong>. Daher hat der Pflegedienst Frankfurt Sachsenhausen ein <strong>umfangreiches Leistungsspektrum</strong> ausgearbeitet, welches jeder Person die für Sie benötigte Pflege ermöglicht. Unser Avyta <strong>Pflegedienst in Sachsenhausen</strong> deckt die Hilfe in der <strong>klassischen Grundpflege</strong> ab, aber es werden auch medizinische und alltägliche Versorgungen angeboten.
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
                      <Link to="/leistungen/grundpflege" className="text-primary hover:underline font-medium">Die Grundpflege</Link> beschreibt im Allgemeinen alle Maßnahmen, die der Versorgung des Körpers dienen. In der Grundpflege bieten wir, der <strong>Avyta Pflegedienst</strong> in Sachsenhausen, Ihnen oder Ihren Angehörigen unter anderem diese Hilfsangebote an:
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
                      Neben der Grundpflege bieten wir Ihnen mit dem Pflegedienst in Frankfurt Sachsenhausen auch anspruchsvolle <strong>medizinische Maßnahmen</strong> an. Folgende medizinische Maßnahmen, welche auch <Link to="/leistungen/behandlungspflege" className="text-primary hover:underline font-medium">Behandlungspflege</Link> genannt wird, bieten wir Ihnen an:
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
                      Im Rahmen der Behandlungspflege übernimmt unser <strong>Pflegedienst in Sachsenhausen</strong> bei Bedarf auch <Link to="/leistungen/ausserklinische-intensivpflege-frankfurt-am-main" className="text-primary hover:underline font-medium">Maßnahmen der Intensivpflege</Link> wie die Heimbeatmung. Weitere intensivmedizinische Maßnahmen die wir anbieten, sind Überwachung und Vitalisierung des Patienten, Legen eines Blasenkatheters, Endotracheales Absaugen oder Lagerungsbehandlungen und Mobilisation.
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      Des Weiteren bieten wir Ihnen als <strong>ambulanter Pflegedienst in Frankfurt Sachsenhausen</strong> auch Serviceleistungen außerhalb der direkten Pflege an, diese sind zum Beispiel Hilfestellungen beim Ausfüllen von Anträgen, Unterstützungen von Spaziergängen oder Hilfe bei dem Besorgen von Medikamenten.
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Wir stehen Ihnen <strong>gerne zur Verfügung</strong> Rufen Sie uns an vereinbaren einen unverbindlichen Termin - <strong>gerne bei Ihnen zu Hause</strong>.
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
                  Unser Pflegedienst in Frankfurt und Umgebung ist immer <strong>mit Herz</strong> an Ihrer Seite, denn für jede Ihrer <strong>individuellen Bedürfnisse</strong> und bei <strong>jedem Pflegegrad</strong> bieten wir Ihnen eine für Sie abgestimmte Pflege. Wir beachten nicht nur Ihre gesundheitliche Situation, sondern auch Ihre sozialen, religiösen und kulturellen Bedürfnisse. Denn Menschlichkeit und eine familiäre Atmosphäre steht für unseren <strong>Pflegedienst</strong> in Frankfurt Sachsenhausen <strong>im Mittelpunkt</strong>. Dadurch können Sie Ihren Alltag in Ihrer gewohnten Umgebung beibehalten und werden von unseren <strong>hochqualifizierten Mitarbeitern</strong> betreut. Der permanente Prozess zur Qualitätssicherung des ambulanten Pflegedienstes Frankfurt Sachsenhausen und unsere langjährige Erfahrung garantiert Ihnen eine sehr hohe Qualität der ganzheitlichen Pflege.
                </p>
                <p className="text-muted-foreground mb-8">
                  Für eine erste <Link to="/leistungen/pflegeberatung-frankfurt" className="text-primary hover:underline font-medium">unverbindliche Beratung</Link> unserer Angebote des <strong>Pflegedienstes Frankfurt Sachsenhausen</strong> nehmen Sie gerne mit uns <Link to="/kontakt" className="text-primary hover:underline font-medium">Kontakt</Link> auf. <strong>Wir freuen uns darauf, Sie und Ihre Angehörigen kennenzulernen</strong>.
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
                      Beim Avyta Pflegedienst in Sachsenhausen arbeiten wir nach dem Motto „ <strong>von Menschen, für Menschen</strong>" und stellen damit Sie und Ihre individuelle Situation in den Mittelpunkt. Wir erstellen Ihnen dazu nicht nur ein <strong>individuelles Paket</strong> an Pflegeleistungen, sondern beachten auch Ihre religiösen, ethischen, sozialen und kulturellen Bedürfnisse.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Wie hoch werden die Kosten für einen Pflegedienst in Sachsenhausen ausfallen?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Pauschal lässt sich das nicht sagen, gerade weil unsere <strong>Pflegeleistungen</strong> so individuell auf Ihre Situation abgestimmt werden. Beim Avyta Pflegedienst hören wir uns zunächst an, was genau Sie an Pflegeleistungen benötigen. Dann erstellen wir einen <strong>Kostenvoranschlag</strong> zur Abrechnung mit Ihrer <strong>Kranken- oder Pflegekasse</strong>.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-card rounded-xl border border-border/50 px-6">
                    <AccordionTrigger className="text-left font-display font-semibold">
                      Welche Pflegegrade kann der Avyta Pflegedienst in Sachsenhausen abdecken?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Als Pflegedienst in Sachsenhausen können wir bei Avyta alle Pflegegrade versorgen. Wir übernehmen für Sie ganz einfache <strong>Alltagshilfen</strong>, unterstützen Sie in der <strong>Grundpflege</strong> zuhause und übernehmen in der <strong>Intensivpflege</strong> auch komplexe medizinische Leistungen, um Ihre Gesundheit und Ihren <strong>Komfort zu garantieren</strong>.
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
