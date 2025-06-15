
import React, { useRef, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Section3DProps {
  children: React.ReactNode;
  className?: string;
  withParallax?: boolean;
  withParticles?: boolean;
}

const Section3D: React.FC<Section3DProps> = ({ 
  children, 
  className = '', 
  withParallax = false,
  withParticles = false 
}) => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile || !withParallax) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.1;
      
      const elements = sectionRef.current.querySelectorAll('.parallax-3d');
      elements.forEach((el, index) => {
        const element = el as HTMLElement;
        element.style.transform = `translateY(${rate * (index + 1)}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, withParallax]);

  return (
    <div ref={sectionRef} className={`relative ${className}`}>
      {/* Background 3D Elements */}
      {withParticles && !isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`section-particle-${i}`}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float-3d parallax-3d"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 30}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${5 + Math.random() * 2}s`
              }}
            />
          ))}
          
          {/* 3D Geometric Shapes */}
          {[...Array(4)].map((_, i) => (
            <div
              key={`section-shape-${i}`}
              className="absolute parallax-3d"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + (i % 2) * 40}%`,
                transformStyle: 'preserve-3d',
                animation: `float3d 12s ease-in-out infinite`,
                animationDelay: `${i * 1.5}s`
              }}
            >
              <div className="w-8 h-8 border border-purple-400/20 rotate-45 backdrop-blur-sm bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
            </div>
          ))}
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Section3D;
