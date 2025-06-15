
import React, { useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Zap, Eye, Play, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import RealTimeStats from './RealTimeStats';

const Hero3D = () => {
  const isMobile = useIsMobile();
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isMobile) return;
    
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    mouseRef.current = {
      x: (clientX / innerWidth - 0.5) * 2,
      y: (clientY / innerHeight - 0.5) * 2
    };

    // Update 3D elements based on mouse position
    const elements = heroRef.current?.querySelectorAll('.mouse-3d');
    elements?.forEach((el, index) => {
      const element = el as HTMLElement;
      const depth = (index + 1) * 5;
      const rotateX = mouseRef.current.y * depth * 0.05;
      const rotateY = mouseRef.current.x * depth * 0.05;
      
      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [handleMouseMove, isMobile]);

  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, { 
      threshold: 0.1,
      rootMargin: '50px'
    });

    const elements = heroRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [observerCallback]);

  const scrollToForm = useCallback(() => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToNextSection = useCallback(() => {
    document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative gradient-bg text-white py-16 sm:py-20 overflow-hidden min-h-screen flex items-center">
      {/* 3D Background Elements - No Cubes */}
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

      {/* Enhanced Circuit Lines with 3D Effect */}
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-6xl mx-auto text-center">
          {/* 3D Badge */}
          <div className="reveal-on-scroll mb-6 sm:mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-white/20 hover:bg-white/15 hover:border-security-red/30 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-security-red/20 cursor-default mouse-3d card-3d-hover">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-security-red animate-pulse" />
              <span className="text-xs sm:text-sm font-medium">SOC 24x7 • Proteção Contínua</span>
              <div className="w-2 h-2 bg-green-400 rounded-full ml-2 animate-pulse"></div>
            </div>
          </div>

          {/* 3D Title */}
          <h1 className="reveal-on-scroll font-montserrat font-bold leading-tight mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-2 mouse-3d">
            <span className="block mb-2">Proteja sua empresa com</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-security-red via-pink-500 to-purple-500 animate-gradient-shift">
              SOC 24x7 Inteligente
            </span>
          </h1>

          <p className="reveal-on-scroll text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto text-base sm:text-lg md:text-xl px-4 mouse-3d">
            Monitoramento contínuo, detecção avançada de ameaças e resposta imediata. 
            Nossa equipe de especialistas protege seu negócio 24 horas por dia, 7 dias por semana.
          </p>

          {/* 3D CTA Buttons */}
          <div className="reveal-on-scroll flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 sm:mb-12 px-4">
            <Button 
              onClick={scrollToForm}
              className="group bg-gradient-to-r from-security-red to-pink-600 hover:from-security-red/90 hover:to-pink-600/90 text-white font-semibold shadow-2xl hover:shadow-3xl hover:shadow-security-red/40 transition-all duration-500 hover:scale-110 w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg focus:ring-2 focus:ring-white/20 active:scale-95 mouse-3d card-3d-hover ripple"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-pulse" />
              Diagnóstico Gratuito
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <button 
              onClick={scrollToNextSection}
              className="text-white/80 hover:text-white transition-all duration-300 font-medium flex items-center group hover:scale-105 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/20 rounded px-4 py-2 mouse-3d"
            >
              <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Ver demonstração
            </button>
          </div>

          {/* 3D Stats */}
          <div className="reveal-on-scroll mb-6 sm:mb-8 px-4">
            <div className="mouse-3d card-3d-hover">
              <RealTimeStats />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced 3D scroll indicator */}
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
    </section>
  );
};

export default Hero3D;
