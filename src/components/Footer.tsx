import { Heart, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const footerLinks = {
  services: {
    title: "Leistungen",
    links: [
      { name: "Behandlungspflege", href: "/leistungen/behandlungspflege" },
      { name: "Grundpflege", href: "/leistungen/grundpflege" },
      { name: "Intensivpflege", href: "/leistungen/intensivpflege" },
      { name: "Haushaltshilfe", href: "/leistungen/haushaltshilfe" },
      { name: "24-Stunden-Pflege", href: "/leistungen/24-stunden" },
      { name: "Pflegeberatung", href: "/leistungen/pflegeberatung" },
      { name: "Verhinderungspflege", href: "/leistungen/verhinderungspflege" },
    ],
  },
  company: {
    title: "Unternehmen",
    links: [
      { name: "Team", href: "/team" },
      { name: "Leistungen", href: "/leistungen" },
      { name: "Standorte", href: "/standorte/frankfurt" },
      { name: "Jobs", href: "/jobs" },
      { name: "Blog", href: "/blog" },
      { name: "Kontakt", href: "/#contact" },
    ],
  },
  legal: {
    title: "Rechtliches",
    links: [
      { name: "Impressum", href: "/impressum" },
      { name: "Datenschutz", href: "/datenschutz" },
      { name: "Sitemap", href: "/sitemap" },
    ],
  },
};

const socialLinks = [
  { name: "Facebook", Icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", Icon: Instagram, href: "https://instagram.com" },
  { name: "TikTok", Icon: TikTokIcon, href: "https://tiktok.com" },
  { name: "LinkedIn", Icon: Linkedin, href: "https://linkedin.com" },
  { name: "YouTube", Icon: Youtube, href: "https://youtube.com" },
  { name: "WhatsApp", Icon: WhatsAppIcon, href: "https://wa.me/496915391405" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-background/10">
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/avyta-logo.png" alt="AVYTA Pflegegesellschaft mbH" className="h-12 brightness-0 invert" />
            </Link>
            <p className="text-background/70 leading-relaxed max-w-md">
              AVYTA Pflegegesellschaft mbH – Ambulanter Pflegedienst mit Herz in Frankfurt und Umgebung. 
              Unser Ziel ist es, Menschen ein selbstbestimmtes Leben zu ermöglichen.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.Icon />
                </a>
              ))}
            </div>
            <div className="pt-4">
              <a href="tel:+496915391405" className="text-accent font-semibold text-lg">
                069 153 914 05
              </a>
            </div>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link to={link.href} className="text-background/70 hover:text-accent transition-colors">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-background/70 hover:text-accent transition-colors">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} AVYTA Pflegegesellschaft mbH. Alle Rechte vorbehalten.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-background/50 hover:text-accent transition-colors group"
          >
            Nach oben
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
