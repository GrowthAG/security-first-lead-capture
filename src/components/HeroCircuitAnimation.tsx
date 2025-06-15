
import React from 'react';

const HeroCircuitAnimation = () => {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 1000">
      <defs>
        <linearGradient id="circuit-3d" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00bcd4" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path 
        d="M100,100 L300,100 L300,300 L500,300 L500,500 L700,500 L700,700 L900,700" 
        stroke="url(#circuit-3d)" 
        strokeWidth="3" 
        fill="none"
        filter="url(#glow)"
        className="animate-pulse"
      />
      <path 
        d="M900,100 L700,100 L700,300 L500,300 L500,500 L300,500 L300,700 L100,700" 
        stroke="url(#circuit-3d)" 
        strokeWidth="3" 
        fill="none"
        filter="url(#glow)"
        className="animate-pulse delay-500"
      />
      
      {/* 3D Circuit Nodes */}
      <g className="circuit-nodes">
        {[[300, 300], [500, 500], [700, 500], [500, 200], [700, 300]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="8" fill="url(#circuit-3d)" className="animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
            <circle cx={x} cy={y} r="4" fill="#ffffff" opacity="0.8" className="animate-pulse" style={{ animationDelay: `${i * 0.3 + 0.1}s` }} />
          </g>
        ))}
      </g>
    </svg>
  );
};

export default HeroCircuitAnimation;
