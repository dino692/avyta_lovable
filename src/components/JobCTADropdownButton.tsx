import { useState, useRef, useEffect } from "react";
import { Phone, Mail, FileText, ChevronDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JobCTADropdownButtonProps {
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "hero" | "default" | "outline";
  className?: string;
  jobTitle?: string;
}

const JobCTADropdownButton = ({ 
  size = "lg", 
  variant = "hero", 
  className = "",
  jobTitle = ""
}: JobCTADropdownButtonProps) => {
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

  const emailSubject = jobTitle 
    ? `Bewerbung als ${jobTitle}` 
    : "Bewerbung bei AVYTA";

  const ctaOptions = [
    { label: "Per E-Mail bewerben", icon: Mail, href: `mailto:info@avyta.de?subject=${encodeURIComponent(emailSubject)}` },
    { label: "Anrufen", icon: Phone, href: "tel:+496915391405" },
    { label: "Kontaktformular", icon: FileText, href: "/#contact" },
  ];

  return (
    <div className={`relative z-50 ${className}`} ref={dropdownRef}>
      <Button 
        variant={variant} 
        size={size} 
        className="group w-full justify-center"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Send className="w-4 h-4 mr-2" />
        Jetzt bewerben
        <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
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

export default JobCTADropdownButton;