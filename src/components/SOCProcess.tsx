
import React, { useEffect, useRef } from 'react';
import { Monitor, Zap, Shield, Activity } from 'lucide-react';

const SOCProcess = () => {
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

  const steps = [
    {
      icon: Monitor,
      title: "Monitoramento Contínuo",
      description: "Vigilância 24/7 de toda sua infraestrutura com sensores inteligentes que capturam comportamentos suspeitos em tempo real.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Análise de Comportamento com IA",
      description: "Algoritmos de machine learning identificam padrões anômalos e correlacionam eventos para detectar ameaças avançadas.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Resposta a Incidentes",
      description: "Ação imediata com isolamento automático, contenção de ameaças e comunicação instantânea com sua equipe.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Activity,
      title: "Relatórios e Acompanhamento",
      description: "Dashboards em tempo real, relatórios detalhados e recomendações estratégicas para fortalecer sua postura de segurança.",
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section id="soc-process" ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como Funciona Nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">SOC Inteligente</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma arquitetura de segurança que evolui constantemente, protegendo sua empresa contra ameaças conhecidas e zero-day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="reveal-on-scroll group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-full">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-8 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent transform translate-x-4 group-hover:from-cyan-400 transition-all duration-500"></div>
                )}

                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="mb-2 text-cyan-400 text-sm font-medium">
                    Etapa {index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal-on-scroll">
          <div className="inline-flex items-center space-x-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl px-6 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">Sistema Ativo</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <div className="text-gray-300">
              <span className="font-semibold text-white">2.847</span> ameaças bloqueadas hoje
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SOCProcess;
