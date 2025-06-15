
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
    </div>
  );
};

export default FloatingElements3D;
