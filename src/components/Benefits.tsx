
import React from 'react';
import { Shield, Users, Code, Zap } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const benefitItems = [
  {
    icon: Shield,
    title: "SOC 24x7 sem cobrança por PPS",
    description: "Monitoramento contínuo sem custos adicionais por evento, garantindo previsibilidade orçamentária."
  },
  {
    icon: Code,
    title: "Integração com qualquer dispositivo IP",
    description: "Compatibilidade total com sua infraestrutura existente, sem necessidade de trocas de equipamentos."
  },
  {
    icon: Users,
    title: "Especialistas com mais de 20 anos de mercado",
    description: "Time sênior de profissionais certificados com vasta experiência em cibersegurança."
  },
  {
    icon: Zap,
    title: "Tecnologia opensource para melhor custo-benefício",
    description: "Soluções eficientes sem custos de licenciamento, reduzindo o TCO em até 40%."
  }
];

const Benefits = () => {
  const isMobile = useIsMobile();

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`section-title text-security-blue ${isMobile ? 'text-2xl' : ''}`}>Por que escolher nosso SOC 24x7</h2>
          <p className={`text-gray-600 max-w-3xl mx-auto ${
            isMobile 
              ? 'text-base leading-normal' 
              : 'text-lg'
          }`}>
            Oferecemos proteção completa contra ameaças cibernéticas com foco em agilidade, 
            eficiência e personalizada para as necessidades do seu negócio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitItems.map((item, index) => (
            <div key={index} className={`security-card flex flex-col items-center text-center ${
              isMobile ? 'p-6' : ''
            }`}>
              <div className={`mb-4 bg-security-blue/10 rounded-full ${
                isMobile ? 'p-5' : 'p-4'
              }`}>
                <item.icon size={isMobile ? 36 : 32} className="text-security-blue" />
              </div>
              <h3 className={`font-montserrat font-semibold mb-3 text-security-blue ${
                isMobile ? 'text-lg' : 'text-xl'
              }`}>{item.title}</h3>
              <p className={`text-gray-600 ${
                isMobile ? 'text-sm leading-relaxed' : ''
              }`}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
