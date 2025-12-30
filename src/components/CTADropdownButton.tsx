import { useState, useRef, useEffect } from "react";
import { Phone, Mail, FileText, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTADropdownButtonProps {
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "hero" | "default";
  className?: string;
}

const CTADropdownButton = ({ size = "lg", variant = "hero", className = "" }: CTADropdownButtonProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const ctaOptions = [
    { label: "Anruf", icon: Phone, href: "tel:+496915391405" },
    { label: "Email", icon: Mail, href: "mailto:info@avyta.de" },
    { label: "Kontaktformular", icon: FileText, href: "/#contact" },
  ];

  return (
    <div className={`relative z-50 ${className}`} ref={dropdownRef}>
      <Button 
        variant={variant} 
        size={size} 
        className="group"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        Kostenlose Erstberatung
        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </Button>
      
      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl border border-border shadow-2xl z-[100] overflow-hidden animate-fade-in">
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
        </div>
      )}
    </div>
  );
};

export default CTADropdownButton;
