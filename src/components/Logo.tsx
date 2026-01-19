import { Truck, Plane, Ship, Train } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: {
      container: "w-8 h-8",
      icon: "w-3 h-3",
      text: "text-sm",
      subtext: "text-xs"
    },
    md: {
      container: "w-12 h-12",
      icon: "w-4 h-4",
      text: "text-xl",
      subtext: "text-xs"
    },
    lg: {
      container: "w-16 h-16",
      icon: "w-5 h-5",
      text: "text-2xl",
      subtext: "text-sm"
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Circle - Inspired by business card design */}
      <div className="relative">
        <div className={`${currentSize.container} rounded-full bg-accent flex items-center justify-center relative overflow-hidden border-2 border-accent-glow`}>
          {/* Globe outline effect */}
          <div className="absolute inset-1 rounded-full border border-accent-foreground/20"></div>
          
          {/* Transportation modes positioned around the circle */}
          <Plane className={`${currentSize.icon} text-accent-foreground absolute top-1 right-1 rotate-45`} />
          <Truck className={`${currentSize.icon} text-accent-foreground absolute top-2 left-1`} />
          <Ship className={`${currentSize.icon} text-accent-foreground absolute bottom-1 right-2`} />
          <Train className={`${currentSize.icon} text-accent-foreground absolute bottom-1 left-1`} />
          
          {/* Center dot to represent global connectivity */}
          <div className="w-1 h-1 bg-accent-foreground rounded-full"></div>
        </div>
      </div>
      
      {/* Company Text - Matching business card typography */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${currentSize.text} font-bold text-primary leading-tight`}>
            DENNY N FREIGHT
          </span>
          <span className={`${currentSize.subtext} text-muted-foreground uppercase tracking-wide leading-tight`}>
            & Logistics Solutions
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;