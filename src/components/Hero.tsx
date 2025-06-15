
import React, { useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Zap, Eye } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import RealTimeStats from './RealTimeStats';

const Hero = () => {
  const isMobile = useIsMobile();
  const heroRef = useRef<HTMLDivElement>(null);

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
    <section id="hero" ref={heroRef} className="relative gradient-bg text-white py-16 sm:py-20 overflow-hidden min-h-screen flex items-center will-change-scroll">
      {/* Optimized Background Pattern */}
      <div className="absolute inset-0 opacity-10 will-change-transform">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Optimized circuit lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path 
            d="M100,100 L300,100 L300,300 L500,300 L500,500 L700,500 L700,700 L900,700" 
            stroke="url(#circuit-gradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse will-change-transform"
          />
          <path 
            d="M900,100 L700,100 L700,300 L500,300 L500,500 L300,500 L300,700 L100,700" 
            stroke="url(#circuit-gradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse delay-500 will-change-transform"
          />
          {/* Enhanced circuit nodes */}
          <circle cx="300" cy="300" r="3" fill="#ffffff" opacity="0.6" className="animate-pulse delay-1000" />
          <circle cx="500" cy="500" r="3" fill="#ffffff" opacity="0.6" className="animate-pulse delay-1500" />
          <circle cx="700" cy="500" r="3" fill="#ffffff" opacity="0.6" className="animate-pulse delay-2000" />
        </svg>
      </div>

      {/* Optimized floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float will-change-transform"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          ></div>
        ))}
        
        {/* Enhanced glowing particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`glow-${i}`}
            className="absolute w-2 h-2 bg-security-red/20 rounded-full blur-sm animate-pulse will-change-transform"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-5xl mx-auto text-center">
          <div className="reveal-on-scroll mb-6 sm:mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-white/20 hover:bg-white/15 hover:border-security-red/30 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-security-red/20 cursor-default">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-security-red animate-pulse" />
              <span className="text-xs sm:text-sm font-medium">SOC 24x7 • Proteção Contínua</span>
              <div className="w-2 h-2 bg-green-400 rounded-full ml-2 animate-pulse"></div>
            </div>
          </div>

          <h1 className="reveal-on-scroll font-montserrat font-bold leading-tight mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-2">
            <span className="block mb-2">Proteja sua empresa com</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-security-red via-pink-500 to-security-red animate-pulse">
              SOC 24x7 Inteligente
            </span>
          </h1>

          <p className="reveal-on-scroll text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto text-base sm:text-lg md:text-xl px-4">
            Monitoramento contínuo, detecção avançada de ameaças e resposta imediata. 
            Nossa equipe de especialistas protege seu negócio 24 horas por dia, 7 dias por semana.
          </p>

          <div className="reveal-on-scroll flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 sm:mb-12 px-4">
            <Button 
              onClick={scrollToForm}
              className="group bg-security-red hover:bg-security-red/90 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-security-red/30 transition-all duration-500 hover:scale-105 hover:animate-pulse-glow w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg focus:ring-2 focus:ring-white/20 active:scale-95 will-change-transform"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-pulse" />
              Diagnóstico Gratuito
            </Button>
            
            <button 
              onClick={scrollToNextSection}
              className="text-white/80 hover:text-white transition-all duration-300 font-medium flex items-center group hover:scale-105 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/20 rounded px-2 py-1"
            >
              <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Ver como funciona
            </button>
          </div>

          {/* Enhanced Real-time Stats */}
          <div className="reveal-on-scroll mb-6 sm:mb-8 px-4">
            <RealTimeStats />
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator with better accessibility */}
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300 group focus:outline-none focus:ring-2 focus:ring-white/20 rounded"
        aria-label="Rolar para próxima seção"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center hover:border-security-red/60 transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-white/20">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse group-hover:bg-security-red/80"></div>
        </div>
      </button>
    </section>
  );
};

export default Hero;
