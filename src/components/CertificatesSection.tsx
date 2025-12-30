import { Award, Shield } from "lucide-react";

// Import partner logos
import frankfurtLogo from "@/assets/partners/frankfurt-logo.png";
import dealsoftLogo from "@/assets/partners/dealsoft-logo.png";
import apothekeLogo from "@/assets/partners/apotheke-logo.webp";
import optadataLogo from "@/assets/partners/optadata-logo.png";
import mdkLogo from "@/assets/partners/mdk-logo.png";

const partners = [
  { name: "Stadt Frankfurt am Main", logo: frankfurtLogo },
  { name: "dealSoft GmbH", logo: dealsoftLogo },
  { name: "Sandweg Apotheke", logo: apothekeLogo },
  { name: "opta data", logo: optadataLogo },
  { name: "MDK Note 1,6", logo: mdkLogo },
];

const CertificatesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary/10 rounded-full mb-6">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Zertifikate & Partner
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Vertrauen durch <span className="text-primary">Qualität</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Unsere Arbeit wird regelmäßig von unabhängigen Institutionen geprüft. 
            Wir sind stolzer Partner führender Unternehmen und Institutionen.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center min-w-[160px] min-h-[100px]">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="relative max-h-16 max-w-[140px] object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />

                  {/* Decorative corner */}
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust message */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 rounded-full">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-foreground">
              Geprüfte Qualität • Alle Kassen zugelassen • Regelmäßige Audits
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
