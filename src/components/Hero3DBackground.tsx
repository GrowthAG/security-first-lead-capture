
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero3DBackground = () => {
  const isMobile = useIsMobile();

  return (
    <div className="absolute inset-0 perspective-1000">
      {/* 3D Ring Elements */}
      {!isMobile && [...Array(8)].map((_, i) => (
        <div
          key={`ring-${i}`}
          className="absolute mouse-3d"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 2) * 40}%`,
            width: '80px',
            height: '80px',
            transformStyle: 'preserve-3d',
            animation: `spin3d 15s linear infinite`,
            animationDelay: `${i * 1}s`
          }}
        >
          <div className="ring-3d border-2 border-cyan-400/30 rounded-full w-full h-full"></div>
        </div>
      ))}

      {/* Floating 3D Geometric Shapes */}
      {!isMobile && [...Array(6)].map((_, i) => (
        <div
          key={`shape-${i}`}
          className="absolute mouse-3d"
          style={{
            left: `${15 + (i * 20) % 70}%`,
            top: `${25 + (i % 3) * 30}%`,
            transformStyle: 'preserve-3d',
            animation: `float3d 10s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`
          }}
        >
          <div className="w-12 h-12 border border-purple-400/30 rotate-45 backdrop-blur-sm bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
        </div>
      ))}

      {/* Holographic Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="holographic-grid"></div>
      </div>

      {/* Floating Particles */}
      {!isMobile && [...Array(25)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-float-3d"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
};

export default Hero3DBackground;
