
import React, { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Zap, Play, ArrowRight } from 'lucide-react';
import RealTimeStats from './RealTimeStats';

const HeroContent = () => {
  const scrollToForm = useCallback(() => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToNextSection = useCallback(() => {
    document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
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
  );
};

export default HeroContent;
