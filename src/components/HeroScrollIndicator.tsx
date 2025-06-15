
import React, { useCallback } from 'react';

const HeroScrollIndicator = () => {
  const scrollToNextSection = useCallback(() => {
    document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <button 
      onClick={scrollToNextSection}
      className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300 group focus:outline-none focus:ring-2 focus:ring-white/20 rounded mouse-3d"
      aria-label="Rolar para próxima seção"
    >
      <div className="scroll-indicator-3d">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center hover:border-security-red/60 transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-white/20 backdrop-blur-sm">
          <div className="w-1 h-3 bg-gradient-to-b from-white/60 to-security-red/80 rounded-full mt-2 animate-pulse group-hover:from-security-red/80 group-hover:to-pink-500/80"></div>
        </div>
      </div>
    </button>
  );
};

export default HeroScrollIndicator;
