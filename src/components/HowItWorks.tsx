
import React, { useEffect, useRef } from 'react';
import { FileSearch, ShieldCheck, PhoneCall } from 'lucide-react';

const steps = [
  {
    icon: FileSearch,
    title: "Diagnóstico",
    description: "Análise completa do seu ambiente para identificar vulnerabilidades e recomendar proteções adequadas ao seu negócio."
  },
  {
    icon: ShieldCheck,
    title: "Implementação",
    description: "Instalação e configuração das ferramentas de monitoramento e proteção, com mínimo impacto em sua operação."
  },
  {
    icon: PhoneCall,
    title: "Suporte 24h",
    description: "Monitoramento contínuo por especialistas, resposta a incidentes e relatórios detalhados sobre ameaças detectadas."
  }
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="como-funciona" ref={sectionRef} className="py-20 gradient-bg text-white relative overflow-hidden">
      {/* Enhanced background with tech elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Digital mesh pattern */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="tech-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
        
        {/* Floating connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <line x1="200" y1="200" x2="800" y2="200" stroke="#ffffff" strokeWidth="2" className="animate-pulse" />
          <line x1="200" y1="500" x2="800" y2="500" stroke="#ffffff" strokeWidth="2" className="animate-pulse delay-500" />
          <line x1="200" y1="800" x2="800" y2="800" stroke="#ffffff" strokeWidth="2" className="animate-pulse delay-1000" />
          
          {/* Connection nodes */}
          <circle cx="200" cy="200" r="4" fill="#ffffff" className="animate-pulse delay-200" />
          <circle cx="500" cy="200" r="4" fill="#ffffff" className="animate-pulse delay-700" />
          <circle cx="800" cy="200" r="4" fill="#ffffff" className="animate-pulse delay-1200" />
        </svg>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">Como Funciona Nosso Atendimento</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Um processo simples e eficiente para garantir proteção total ao seu ambiente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines between steps (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-white/30 via-security-red/50 to-white/30 transform -translate-y-1/2 animate-pulse"></div>
          <div className="hidden md:block absolute top-1/2 left-2/3 w-1/3 h-0.5 bg-gradient-to-r from-white/30 via-security-red/50 to-white/30 transform -translate-y-1/2 animate-pulse delay-500"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="reveal-on-scroll bg-white/10 rounded-lg p-8 border border-white/20 backdrop-blur-sm hover:bg-white/15 hover:border-security-red/40 hover:scale-105 hover:shadow-xl hover:shadow-security-red/20 transition-all duration-500 card-3d group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Step number indicator */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-security-red rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>

              <div className="flex flex-col items-center text-center relative">
                <div className="mb-6 bg-white/15 p-4 rounded-full group-hover:bg-security-red/20 group-hover:scale-110 transition-all duration-300">
                  <step.icon size={36} className="text-white group-hover:text-security-red group-hover:animate-pulse transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-montserrat font-semibold mb-4 group-hover:text-security-red transition-colors duration-300">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-security-red/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-lg mx-auto text-center reveal-on-scroll">
          <h3 className="text-2xl font-montserrat font-semibold mb-4">Pronto para começar?</h3>
          <p className="mb-6">
            Nossos especialistas estão prontos para ajudar sua empresa a implementar um SOC 
            eficiente e alinhado às suas necessidades.
          </p>
          <button 
            onClick={scrollToForm}
            className="cta-button hover:scale-105 hover:shadow-xl hover:shadow-security-red/30 transition-all duration-500 group"
          >
            <span className="group-hover:animate-pulse">Solicitar Diagnóstico Gratuito</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
