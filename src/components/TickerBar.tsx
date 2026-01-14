import { Phone } from "lucide-react";

const TickerBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-x overflow-hidden">
      <div className="relative flex items-center h-10">
        {/* Animated ticker content */}
        <div className="flex animate-[ticker_30s_linear_infinite] whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-8">
              <a 
                href="tel:+4969920388770" 
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>JETZT UNVERBINDLICH BERATEN LASSEN, RÜCKRUF ANFORDERN</span>
              </a>
              <span className="text-white/50">•</span>
              <a 
                href="tel:+4969920388770" 
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>KOSTENLOSE BERATUNG: 069 920 388 770</span>
              </a>
              <span className="text-white/50">•</span>
            </div>
          ))}
        </div>
        
        {/* Close button area with phone */}
        <div className="absolute right-0 top-0 h-full flex items-center gap-4 bg-gradient-to-l from-primary via-primary to-transparent pl-12 pr-4">
          <a 
            href="tel:+4969920388770" 
            className="flex items-center gap-2 text-white font-bold text-sm hover:scale-105 transition-transform"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">+49 69 920 388 770</span>
          </a>
        </div>
      </div>
      
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default TickerBar;
