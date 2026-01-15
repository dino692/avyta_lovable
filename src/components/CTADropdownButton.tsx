import { useState, useRef, useEffect } from "react";
import { Phone, Mail, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPortal } from "react-dom";

interface CTADropdownButtonProps {
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "hero" | "default";
  className?: string;
}

const CTADropdownButton = ({ size = "lg", variant = "hero", className = "" }: CTADropdownButtonProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        left: Math.min(rect.left, window.innerWidth - 272),
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        buttonRef.current && 
        !buttonRef.current.contains(target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", updatePosition);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    if (isDropdownOpen) {
      updatePosition();
    }
  }, [isDropdownOpen]);

  const ctaOptions = [
    { label: "Anruf", icon: Phone, href: "tel:+496915391405" },
    { label: "Email", icon: Mail, href: "mailto:info@avyta.de" },
    { label: "Kontaktformular", icon: FileText, href: "/kontakt" },
  ];

  return (
    <>
      <div className={`relative ${className}`} ref={buttonRef}>
        <Button 
          variant={variant} 
          size={size} 
          className="group w-full justify-center"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Kostenlose Erstberatung
          <ChevronDown className={`w-5 h-5 ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </Button>
      </div>
      
      {/* Dropdown Menu - Rendered via Portal */}
      {isDropdownOpen && createPortal(
        <div 
          ref={dropdownRef}
          className="fixed w-64 bg-card rounded-xl border border-border shadow-2xl overflow-hidden animate-fade-in"
          style={{
            zIndex: 9999,
            top: dropdownPosition.top,
            left: dropdownPosition.left,
          }}
        >
          {ctaOptions.map((option) => (
            <a
              key={option.label}
              href={option.href}
              onClick={() => setIsDropdownOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-colors group/item"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-colors">
                <option.icon className="w-5 h-5 text-primary group-hover/item:text-primary-foreground" />
              </div>
              <span className="font-medium text-foreground">{option.label}</span>
            </a>
          ))}
        </div>,
        document.body
      )}
    </>
  );
};

export default CTADropdownButton;
