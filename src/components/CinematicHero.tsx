
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Zap } from 'lucide-react';

const CinematicHero = () => {
  const scrollToFAQ = () => {
    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00bcd4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path 
            d="M100,100 L300,100 L300,300 L500,300 L500,500 L700,500 L700,700 L900,700" 
            stroke="url(#circuit-gradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
          />
          <path 
            d="M900,100 L700,100 L700,300 L500,300 L500,500 L300,500 L300,700 L100,700" 
            stroke="url(#circuit-gradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse delay-500"
          />
        </svg>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">SOC 24/7 Ativo</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in delay-200">
          SOC 24/7: Segurança<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Digital Ativa e Inteligente
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in delay-400">
          Monitoramos, detectamos e neutralizamos ameaças antes que causem impacto
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-600">
          <Button 
            onClick={scrollToFAQ}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 group"
          >
            <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Agendar Diagnóstico Gratuito
          </Button>
          
          <button className="text-cyan-400 hover:text-white transition-colors duration-300 font-medium">
            Ver demonstração →
          </button>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in delay-800">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-gray-400 text-sm">Monitoramento</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">90%</div>
            <div className="text-gray-400 text-sm">Redução de Riscos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">&lt;5min</div>
            <div className="text-gray-400 text-sm">Tempo de Resposta</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;
