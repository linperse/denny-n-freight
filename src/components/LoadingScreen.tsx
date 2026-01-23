import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-32 h-32 mb-8 mx-auto">
          <img
            src="/images/Black_Logo.png"
            alt="Denny N Freight"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-accent transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-muted-foreground mt-4">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;