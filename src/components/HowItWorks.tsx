
import React from 'react';
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
  return (
    <section id="como-funciona" className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">Como Funciona Nosso Atendimento</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Um processo simples e eficiente para garantir proteção total ao seu ambiente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-8 border border-white/20 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 bg-white/15 p-4 rounded-full">
                  <step.icon size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-montserrat font-semibold mb-4">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <span className="text-4xl">→</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-lg mx-auto text-center">
          <h3 className="text-2xl font-montserrat font-semibold mb-4">Pronto para começar?</h3>
          <p className="mb-6">
            Nossos especialistas estão prontos para ajudar sua empresa a implementar um SOC 
            eficiente e alinhado às suas necessidades.
          </p>
          <button 
            onClick={() => window.open("https://wa.me/5511000000000?text=Olá! Gostaria de saber mais sobre os serviços de SOC da Security First.", "_blank")}
            className="cta-button"
          >
            Solicitar Diagnóstico Gratuito
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
