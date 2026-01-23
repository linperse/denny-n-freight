import { Truck, Plane, Ship, Train } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
const sizeClasses = {
  sm: {
    container: "w-20 h-20",   // small
    text: "text-lg",
    subtext: "text-sm"
  },
  md: {
    container: "w-20 h-20",   //  MEDIUM (112px)
    text: "text-xl",
    subtext: "text-sm"
  },
  lg: {
    container: "w-20 h-20",   // large
    text: "text-3xl",
    subtext: "text-lg"
  }
};

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Circle - Inspired by business card design */}
      <div className="relative -ml-8">
  <div
    className={`
      ${currentSize.container}
    `}
  >
    {/* Company Logo */}
    <img
      src="public/images/Black_Logo.png"
      alt="Denny N Freight Logo"
      className="  w-72
      md:w-68
      lg:w-[16rem]
      object-contain"
    />
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