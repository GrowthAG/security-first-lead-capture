
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Zap, Eye } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative gradient-bg text-white py-20 overflow-hidden">
      {/* Background Pattern with 3D effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className={`container mx-auto ${isMobile ? 'px-6' : 'px-4'} relative z-10`}>
        <div className={`max-w-5xl mx-auto text-center ${isMobile ? 'pt-8' : 'pt-16'}`}>
          <div className="reveal-on-scroll mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Shield className="w-5 h-5 mr-2 text-security-red" />
              <span className="text-sm font-medium">SOC 24x7 • Proteção Contínua</span>
            </div>
          </div>

          <h1 className={`reveal-on-scroll font-montserrat font-bold leading-tight mb-6 ${
            isMobile 
              ? 'text-3xl' 
              : 'text-5xl lg:text-6xl'
          }`}>
            <span className="block mb-2">Proteja sua empresa com</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-security-red via-pink-500 to-security-red animate-pulse">
              SOC 24x7 Inteligente
            </span>
          </h1>

          <p className={`reveal-on-scroll text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto ${
            isMobile 
              ? 'text-lg px-2' 
              : 'text-xl'
          }`}>
            Monitoramento contínuo, detecção avançada de ameaças e resposta imediata. 
            Nossa equipe de especialistas protege seu negócio 24 horas por dia, 7 dias por semana.
          </p>

          <div className={`reveal-on-scroll flex ${isMobile ? 'flex-col space-y-4' : 'flex-row'} justify-center items-center space-x-0 ${!isMobile && 'space-x-4'} mb-12`}>
            <Button 
              onClick={scrollToForm}
              className={`group bg-security-red hover:bg-security-red/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                isMobile 
                  ? 'w-full max-w-sm py-4 text-lg' 
                  : 'py-4 px-8 text-lg'
              }`}
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Diagnóstico Gratuito
            </Button>
            
            {!isMobile && (
              <button className="text-white/80 hover:text-white transition-colors duration-300 font-medium flex items-center group">
                <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Ver como funciona
              </button>
            )}
          </div>

          {/* Stats with 3D effect */}
          <div className={`reveal-on-scroll grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-3 gap-8'} max-w-4xl mx-auto`}>
            {[
              { value: "99.9%", label: "Uptime Garantido", icon: Shield },
              { value: "< 15min", label: "Tempo de Resposta", icon: Zap },
              { value: "24/7", label: "Monitoramento", icon: Eye }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <stat.icon className="w-8 h-8 text-security-red mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold mb-1 group-hover:text-security-red transition-colors duration-300">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
