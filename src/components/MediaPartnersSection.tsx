import praktischArztLogo from "@/assets/partners/praktischarzt-logo.png";
import mediKarriereLogo from "@/assets/partners/medikarriere-logo.png";
import pflegemarktLogo from "@/assets/partners/pflegemarkt-logo.png";

const partners = [
  { name: "praktischArzt", logo: praktischArztLogo, url: "https://www.praktischarzt.de" },
  { name: "Medi-Karriere", logo: mediKarriereLogo, url: "https://www.medi-karriere.de" },
  { name: "Pflegemarkt.com", logo: pflegemarktLogo, url: "https://www.pflegemarkt.com" },
];

const MediaPartnersSection = () => {
  return (
    <section className="py-6 md:py-8 bg-muted/30 border-y border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-10">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em]">
            Medienpartner
          </span>
          <div className="flex items-center gap-6 md:gap-10">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10 max-w-[120px] md:max-w-[150px] object-contain"
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
