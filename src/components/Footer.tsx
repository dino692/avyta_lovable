import { Heart, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

const footerLinks = {
  services: {
    title: "Leistungen",
    links: [
      { name: "Behandlungspflege", href: "/leistungen/behandlungspflege" },
      { name: "Grundpflege", href: "/leistungen/grundpflege" },
      { name: "Intensivpflege", href: "/leistungen/intensivpflege" },
      { name: "Palliativpflege", href: "/leistungen/palliativ" },
      { name: "Hauswirtschaft", href: "/leistungen/hauswirtschaft" },
    ],
  },
  company: {
    title: "Unternehmen",
    links: [
      { name: "Über uns", href: "#about" },
      { name: "Karriere", href: "/karriere" },
      { name: "Standorte", href: "#locations" },
      { name: "Presse", href: "/presse" },
      { name: "Partner werden", href: "/partner" },
    ],
  },
  legal: {
    title: "Rechtliches",
    links: [
      { name: "Impressum", href: "/impressum" },
      { name: "Datenschutz", href: "/datenschutz" },
      { name: "AGB", href: "/agb" },
      { name: "Cookie-Einstellungen", href: "#cookies" },
    ],
  },
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-background/10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Heart className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="font-display text-xl font-semibold">HerzPflege</span>
            </a>
            <p className="text-background/70 leading-relaxed max-w-md">
              Seit über 15 Jahren bieten wir professionelle ambulante Pflege mit Herz. 
              Unser Ziel ist es, Menschen ein selbstbestimmtes Leben in ihrem Zuhause zu ermöglichen.
            </p>
            {/* Social Links */}
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
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} HerzPflege GmbH. Alle Rechte vorbehalten.
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
