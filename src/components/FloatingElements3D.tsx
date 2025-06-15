
import React from 'react';
import { Shield, Zap, Lock, Eye, Server, Wifi, Globe, Database, Network } from 'lucide-react';

const FloatingElements3D = () => {
  const elements = [
    { Icon: Shield, color: 'text-cyan-400', size: 'w-8 h-8', delay: '0s' },
    { Icon: Zap, color: 'text-yellow-400', size: 'w-6 h-6', delay: '1s' },
    { Icon: Lock, color: 'text-green-400', size: 'w-7 h-7', delay: '2s' },
    { Icon: Eye, color: 'text-purple-400', size: 'w-6 h-6', delay: '3s' },
    { Icon: Server, color: 'text-blue-400', size: 'w-8 h-8', delay: '4s' },
    { Icon: Wifi, color: 'text-pink-400', size: 'w-6 h-6', delay: '5s' },
    { Icon: Globe, color: 'text-indigo-400', size: 'w-7 h-7', delay: '6s' },
    { Icon: Database, color: 'text-teal-400', size: 'w-6 h-6', delay: '7s' },
    { Icon: Network, color: 'text-orange-400', size: 'w-8 h-8', delay: '8s' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Floating Icons with more depth layers */}
      {elements.map(({ Icon, color, size, delay }, index) => (
        <div
          key={index}
          className="absolute animate-float-3d"
          style={{
            left: `${5 + (index * 10) % 90}%`,
            top: `${10 + (index * 15) % 80}%`,
            animationDelay: delay,
            animationDuration: `${6 + (index % 3) * 2}s`,
            zIndex: Math.floor(index / 3) + 1
          }}
        >
          <div className="floating-icon-3d">
            <Icon className={`${size} ${color} drop-shadow-glow`} />
          </div>
        </div>
      ))}

      {/* Multi-layered 3D Ring Elements */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`ring-${i}`}
          className="absolute hidden lg:block"
          style={{
            left: `${2 + i * 8}%`,
            top: `${15 + (i % 4) * 20}%`,
            width: `${30 + (i % 3) * 15}px`,
            height: `${30 + (i % 3) * 15}px`,
            transformStyle: 'preserve-3d',
            animation: `spin3d ${15 + (i % 3) * 5}s linear infinite`,
            animationDelay: `${i * 1}s`,
            zIndex: Math.floor(i / 4) + 1
          }}
        >
          <div className="ring-3d border border-cyan-400/15 rounded-full w-full h-full"></div>
        </div>
      ))}

      {/* Enhanced Holographic Particles with depth */}
      {[...Array(25)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute animate-float-3d hidden lg:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
            zIndex: Math.floor(i / 8) + 1
          }}
          className={`absolute rounded-full animate-float-3d hidden lg:block ${
            i % 4 === 0 ? 'bg-cyan-400/60' :
            i % 4 === 1 ? 'bg-purple-400/50' :
            i % 4 === 2 ? 'bg-blue-400/40' : 'bg-pink-400/45'
          }`}
        />
      ))}

      {/* 3D Geometric Shapes with multiple layers */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`shape-${i}`}
          className="absolute hidden lg:block"
          style={{
            left: `${15 + i * 10}%`,
            top: `${25 + (i % 3) * 25}%`,
            transformStyle: 'preserve-3d',
            animation: `geometricSpin ${20 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`,
            zIndex: Math.floor(i / 3) + 2
          }}
        >
          <div className={`w-6 h-6 border rotate-45 backdrop-blur-sm ${
            i % 3 === 0 ? 'border-purple-400/25 bg-gradient-to-br from-cyan-500/8 to-purple-500/8' :
            i % 3 === 1 ? 'border-cyan-400/20 bg-gradient-to-br from-blue-500/6 to-cyan-500/6' :
            'border-pink-400/30 bg-gradient-to-br from-pink-500/10 to-purple-500/10'
          }`}></div>
        </div>
      ))}

      {/* Enhanced Holographic Grid with depth layers */}
      <div className="absolute inset-0 opacity-8">
        <div className="holographic-grid"></div>
      </div>
      
      {/* Secondary grid layer for more depth */}
      <div className="absolute inset-0 opacity-4" style={{ transform: 'scale(1.5) rotate(45deg)' }}>
        <div className="holographic-grid"></div>
      </div>

      {/* Floating 3D Hexagons */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`hex-${i}`}
          className="absolute hidden lg:block"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 35}%`,
            width: '25px',
            height: '25px',
            transformStyle: 'preserve-3d',
            animation: `depthFloat ${12 + i}s ease-in-out infinite`,
            animationDelay: `${i * 1.5}s`,
            zIndex: 3
          }}
        >
          <div className="hexagon-3d w-full h-full border border-indigo-400/20 bg-gradient-to-br from-indigo-500/5 to-blue-500/8" 
               style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingElements3D;
