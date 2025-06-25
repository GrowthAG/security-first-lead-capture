
import React, { useEffect, useRef } from 'react';
import { Clock, Settings, Users, Shield, Zap, TrendingUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Card3D from './Card3D';

const benefits = [
  {
    icon: Clock,
    title: "Resposta em Tempo Real",
    description: "Detecção e contenção de ameaças em menos de 15 minutos, 24/7.",
    metric: "< 15 min"
  },
  {
    icon: Shield,
    title: "Proteção Multicamada",
    description: "Defesa integrada contra malware, ransomware e ataques avançados.",
    metric: "99.9%"
  },
  {
    icon: Users,
    title: "Especialistas Dedicados",
    description: "Time de analistas certificados monitorando sua infraestrutura.",
    metric: "24/7"
  },
  {
    icon: Settings,
    title: "Integração Completa",
    description: "Compatível com sua infraestrutura atual sem interrupções.",
    metric: "Seamless"
  },
  {
    icon: Zap,
    title: "Implementação Rápida",
    description: "Implementação sem impacto operacional em até 48 horas.",
    metric: "48h"
  },
  {
    icon: TrendingUp,
    title: "Melhoria Contínua",
    description: "Evolução constante das defesas baseada em inteligência de ameaças.",
    metric: "Always On"
  }
];

const Benefits = () => {
  const isMobile = useIsMobile();
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
    <section id="beneficios" ref={sectionRef} className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DC267F' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="section-title">Por que escolher nosso SOC?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tecnologia de ponta combinada com expertise humana para garantir a máxima proteção do seu negócio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="reveal-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card3D intensity={isMobile ? 0 : 0.5}>
                <div className="security-card text-center h-full flex flex-col justify-between group hover:shadow-2xl hover:shadow-security-red/10 transition-all duration-500">
                  <div>
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-security-red to-pink-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <benefit.icon size={28} />
                    </div>
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-security-red mb-2 group-hover:text-pink-600 transition-colors duration-300">
                        {benefit.metric}
                      </div>
                      <h3 className="text-xl font-montserrat font-semibold text-security-blue mb-3 group-hover:text-security-red transition-colors duration-300">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  
                  {/* Hover effect indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gradient-to-r from-security-red to-pink-600 rounded-full"></div>
                  </div>
                </div>
              </Card3D>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal-on-scroll">
          <h3 className="text-2xl font-montserrat font-semibold text-security-blue mb-4">
            Transforme sua segurança hoje mesmo
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 300 empresas que já confiam na nossa solução de SOC para proteger seus ativos digitais.
          </p>
          <Card3D intensity={0.3}>
            <button 
              onClick={scrollToForm}
              className="cta-button text-lg px-8 py-4 hover:scale-105 hover:shadow-xl hover:shadow-security-red/30 transition-all duration-500 group ripple"
            >
              <span className="group-hover:animate-pulse">Quero Proteger Minha Empresa</span>
            </button>
          </Card3D>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
