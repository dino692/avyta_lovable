import lisaLogo from "@/assets/partners/lisa-logo.webp";
import careboxxLogo from "@/assets/partners/careboxx-logo.png";
import pflegewertLogo from "@/assets/partners/pflegewert-logo.jpg";
import katewLogo from "@/assets/partners/katew-logo.png";

const partners = [
  { name: "katew.de - Medizinische Transporte", logo: katewLogo, url: "https://www.katew.de/" },
  { name: "LISA - Assisted Home Solutions", logo: lisaLogo, url: "https://lisa.assistedhome.de/" },
  { name: "Careboxx", logo: careboxxLogo, url: "https://www.careboxx.de/" },
  { name: "PflegeWert Beratung", logo: pflegewertLogo, url: "https://www.pflegewert.de/" },
];

const MediaPartnersSection = () => {
  return (
    <section className="py-6 md:py-8 bg-muted/30 border-y border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-10">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em]">
            Partner
          </span>
          <div className="flex items-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale-[30%] hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-[120px] h-[48px] md:w-[150px] md:h-[56px] object-contain"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaPartnersSection;
