import { useState, useRef, useEffect, forwardRef } from "react";
import { createPortal } from "react-dom";
import { Phone, Mail, FileText, ChevronDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JobCTADropdownButtonProps {
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "hero" | "default" | "outline";
  className?: string;
  jobTitle?: string;
}

const JobCTADropdownButton = forwardRef<HTMLDivElement, JobCTADropdownButtonProps>(({ 
  size = "lg", 
  variant = "hero", 
  className = "",
  jobTitle = ""
}, ref) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const updateDropdownPosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        left: rect.left,
        width: Math.max(rect.width, 256),
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current && 
        !buttonRef.current.contains(event.target as Node) &&
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    const handleResize = () => {
      if (isDropdownOpen) {
        updateDropdownPosition();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleResize);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    if (isDropdownOpen) {
      updateDropdownPosition();
    }
  }, [isDropdownOpen]);

  const emailSubject = jobTitle 
    ? `Bewerbung als ${jobTitle}` 
    : "Bewerbung bei AVYTA";

  const ctaOptions = [
    { label: "Per E-Mail bewerben", icon: Mail, href: `mailto:info@avyta.de?subject=${encodeURIComponent(emailSubject)}` },
    { label: "Anrufen", icon: Phone, href: "tel:+496915391405" },
    { label: "Kontaktformular", icon: FileText, href: "/kontakt" },
  ];

  const dropdownContent = isDropdownOpen ? createPortal(
    <div 
      ref={dropdownRef}
      className="fixed bg-card rounded-xl border border-border shadow-2xl overflow-hidden animate-fade-in"
      style={{
        top: dropdownPosition.top,
        left: dropdownPosition.left,
        width: dropdownPosition.width,
        zIndex: 9999,
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
  ) : null;

  return (
    <div className={`relative ${className}`}>
      <Button 
        ref={buttonRef}
        variant={variant} 
        size={size} 
        className="group w-full justify-center"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Send className="w-4 h-4 mr-2" />
        Jetzt bewerben
        <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </Button>
      
      {dropdownContent}
    </div>
  );
});

export default JobCTADropdownButton;
