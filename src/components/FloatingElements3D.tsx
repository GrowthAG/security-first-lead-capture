
import React from 'react';
import { Shield, Zap, Lock, Eye, Server, Wifi } from 'lucide-react';

const FloatingElements3D = () => {
  const elements = [
    { Icon: Shield, color: 'text-cyan-400', size: 'w-8 h-8', delay: '0s' },
    { Icon: Zap, color: 'text-yellow-400', size: 'w-6 h-6', delay: '1s' },
    { Icon: Lock, color: 'text-green-400', size: 'w-7 h-7', delay: '2s' },
    { Icon: Eye, color: 'text-purple-400', size: 'w-6 h-6', delay: '3s' },
    { Icon: Server, color: 'text-blue-400', size: 'w-8 h-8', delay: '4s' },
    { Icon: Wifi, color: 'text-pink-400', size: 'w-6 h-6', delay: '5s' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Icons */}
      {elements.map(({ Icon, color, size, delay }, index) => (
        <div
          key={index}
          className="absolute animate-float-3d"
          style={{
            left: `${10 + (index * 15) % 80}%`,
            top: `${15 + (index * 20) % 70}%`,
            animationDelay: delay,
            animationDuration: '8s'
          }}
        >
          <div className="floating-icon-3d">
            <Icon className={`${size} ${color} drop-shadow-glow`} />
          </div>
        </div>
      ))}

      {/* 3D Ring Elements - Enhanced */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`ring-${i}`}
          className="absolute hidden lg:block"
          style={{
            left: `${5 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            width: '40px',
            height: '40px',
            transformStyle: 'preserve-3d',
            animation: `spin3d 20s linear infinite`,
            animationDelay: `${i * 1.5}s`
          }}
        >
          <div className="ring-3d border border-cyan-400/20 rounded-full w-full h-full"></div>
        </div>
      ))}

      {/* Holographic Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-float-3d hidden lg:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 2}s`
          }}
        />
      ))}

      {/* Enhanced Holographic Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="holographic-grid"></div>
      </div>
    </div>
  );
};

export default FloatingElements3D;
