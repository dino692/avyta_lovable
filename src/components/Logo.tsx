import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "light";
}

const Logo = ({ className = "", showText = true, size = "md", variant = "default" }: LogoProps) => {
  const sizes = {
    sm: { icon: 28, text: "text-lg" },
    md: { icon: 36, text: "text-xl" },
    lg: { icon: 48, text: "text-2xl" },
  };

  const { icon, text } = sizes[size];
  const isLight = variant === "light";

  return (
    <Link to="/" className={`flex items-center gap-2.5 group ${className}`}>
      {/* Modern Icon Mark */}
      <div className="relative">
        <svg 
          width={icon} 
          height={icon} 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Background Circle with Gradient */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
            <linearGradient id="logoGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--accent))" />
              <stop offset="100%" stopColor="hsl(var(--primary))" />
            </linearGradient>
          </defs>
          
          {/* Main Circle */}
          <circle 
            cx="24" 
            cy="24" 
            r="22" 
            fill="url(#logoGradient)"
            className="transition-all duration-300"
          />
          
          {/* Stylized "A" Letter */}
          <path 
            d="M24 10L14 36H18.5L20.5 30H27.5L29.5 36H34L24 10ZM21.8 26L24 18.5L26.2 26H21.8Z" 
            fill="white"
            className="drop-shadow-sm"
          />
          
          {/* Heart/Care Symbol integrated */}
          <path 
            d="M24 38C24 38 32 33 32 28C32 25.5 30.5 24 28.5 24C27 24 25.5 25 24 27C22.5 25 21 24 19.5 24C17.5 24 16 25.5 16 28C16 33 24 38 24 38Z" 
            fill="white"
            fillOpacity="0.9"
            className="drop-shadow-sm"
          />
          
          {/* Subtle Ring */}
          <circle 
            cx="24" 
            cy="24" 
            r="22" 
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="1"
            fill="none"
          />
        </svg>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 blur-md group-hover:opacity-30 transition-opacity duration-300 -z-10" />
      </div>

      {/* Text Mark */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${text} font-display font-bold tracking-tight ${
            isLight 
              ? "text-white" 
              : "bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent"
          } transition-all duration-300`}>
            AVYTA
          </span>
          <span className={`text-[10px] font-medium tracking-widest uppercase -mt-0.5 ${
            isLight ? "text-white/70" : "text-muted-foreground"
          }`}>
            Pflegedienst
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
