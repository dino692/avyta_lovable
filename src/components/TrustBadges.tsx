import { Shield, Star, Users, Clock } from "lucide-react";

const TrustBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 py-8 md:py-12">
      <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full">
        <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary" />
        <span className="text-xs md:text-sm font-medium text-foreground">MDK-Note 1,6</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full">
        <Star className="w-4 h-4 md:w-5 md:h-5 text-primary" />
        <span className="text-xs md:text-sm font-medium text-foreground">Google 5,0 ★</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full">
        <Users className="w-4 h-4 md:w-5 md:h-5 text-primary" />
        <span className="text-xs md:text-sm font-medium text-foreground">2.500+ Patienten bereits betreut</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full">
        <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
        <span className="text-xs md:text-sm font-medium text-foreground">Seit 2013 in Frankfurt</span>
      </div>
    </div>
  );
};

export default TrustBadges;
