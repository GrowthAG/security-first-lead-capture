
import React, { useRef, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Section3DProps {
  children: React.ReactNode;
  className?: string;
  withParallax?: boolean;
  withParticles?: boolean;
  withGeometry?: boolean;
  intensity?: 'light' | 'medium' | 'heavy';
}

const Section3D: React.FC<Section3DProps> = ({ 
  children, 
  className = '', 
  withParallax = false,
  withParticles = false,
  withGeometry = false,
  intensity = 'medium'
}) => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);

  const particleCount = intensity === 'light' ? 6 : intensity === 'medium' ? 12 : 18;
  const shapeCount = intensity === 'light' ? 3 : intensity === 'medium' ? 6 : 9;

  useEffect(() => {
    if (isMobile || !withParallax) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.08;
      
      const elements = sectionRef.current.querySelectorAll('.parallax-3d');
      elements.forEach((el, index) => {
        const element = el as HTMLElement;
        const depth = (index + 1) * 0.5;
        element.style.transform = `translateY(${rate * depth}px) translateZ(${depth * 10}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, withParallax]);

  return (
    <div ref={sectionRef} className={`relative ${className}`}>
      {/* Enhanced Background 3D Elements */}
      {(withParticles || withGeometry) && !isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Multi-layered Floating Particles */}
          {withParticles && [...Array(particleCount)].map((_, i) => {
            const particleColors = [
              'bg-cyan-400/25',
              'bg-purple-400/20',
              'bg-blue-400/15',
              'bg-pink-400/22',
              'bg-indigo-400/18'
            ];
            
            return (
              <div
                key={`section-particle-${i}`}
                className={`absolute rounded-full animate-float-3d parallax-3d ${
                  particleColors[i % 5]
                }`}
                style={{
                  left: `${5 + i * 8}%`,
                  top: `${15 + (i % 4) * 25}%`,
                  width: `${1 + (i % 3)}px`,
                  height: `${1 + (i % 3)}px`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${4 + Math.random() * 3}s`,
                  zIndex: Math.floor(i / 4) + 1
                }}
              />
            );
          })}
          
          {/* Enhanced 3D Geometric Shapes with depth */}
          {withGeometry && [...Array(shapeCount)].map((_, i) => (
            <div
              key={`section-shape-${i}`}
              className="absolute parallax-3d"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`,
                transformStyle: 'preserve-3d',
                animation: `geometricSpin ${15 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 1}s`,
                zIndex: Math.floor(i / 3) + 2
              }}
            >
              {i % 4 === 0 && (
                <div className="w-8 h-8 border border-purple-400/15 rotate-45 backdrop-blur-sm bg-gradient-to-br from-cyan-500/3 to-purple-500/5"></div>
              )}
              {i % 4 === 1 && (
                <div className="w-6 h-6 border border-cyan-400/20 rounded-full backdrop-blur-sm bg-gradient-to-br from-blue-500/4 to-cyan-500/6"></div>
              )}
              {i % 4 === 2 && (
                <div className="w-7 h-7 border border-pink-400/18 backdrop-blur-sm bg-gradient-to-br from-pink-500/5 to-purple-500/7"
                     style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
              )}
              {i % 4 === 3 && (
                <div className="w-5 h-5 border border-indigo-400/25 backdrop-blur-sm bg-gradient-to-br from-indigo-500/6 to-blue-500/8"
                     style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
              )}
            </div>
          ))}

          {/* Floating 3D Rings for depth */}
          {[...Array(4)].map((_, i) => (
            <div
              key={`section-ring-${i}`}
              className="absolute parallax-3d hidden lg:block"
              style={{
                left: `${25 + i * 20}%`,
                top: `${35 + (i % 2) * 30}%`,
                width: `${20 + i * 5}px`,
                height: `${20 + i * 5}px`,
                transformStyle: 'preserve-3d',
                animation: `spin3d ${20 + i * 3}s linear infinite`,
                animationDelay: `${i * 2}s`,
                zIndex: 1
              }}
            >
              <div className="ring-3d border border-cyan-400/12 rounded-full w-full h-full"></div>
            </div>
          ))}
        </div>
      )}
      
      {/* Content with enhanced 3D context */}
      <div className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </div>
  );
};

export default Section3D;
