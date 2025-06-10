
import React from 'react';
import { Lock, Shield, Settings } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const events = [
  {
    icon: Lock,
    name: "CS4CA – Cyber Security For Critical Assets",
    description: "Apresentamos cases de clientes de infraestrutura crítica com a implantação de SOC no setor de energia e alimentação cobrindo mais de 10.000 ativos em 14 países, que puderam ter 95% redução.",
    highlight: "Apresentamos cases de clientes de infraestrutura crítica com a implantação de SOC no setor de energia e alimentação"
  },
  {
    icon: Shield,
    name: "SDL – Security Design Lab",
    description: "Somos patrocinadores da maior pesquisa nacional de segurança cibernética e contribuímos para o aumento da maturidade de processos e controles em diversos setores.",
    highlight: "Somos patrocinadores da maior pesquisa nacional de segurança cibernética e contribuímos para o controle em diversos setores."
  },
  {
    icon: Settings,
    name: "IAM Tech Day 2025",
    description: "Apresentamos nossa solução de resposta a incidentes, que está preparada para gerenciar crises de segurança cibernética em qualquer organização.",
    highlight: "Apresentamos nossa solução de resposta a incidentes, que está preparada para gerenciar crises de segurança cibernética em qualquer organização."
  }
];

const TechnicalEvents = () => {
  const isMobile = useIsMobile();

  return (
    <section className={`${isMobile ? 'py-3' : 'py-20'} bg-white`}>
      <div className="container mx-auto px-4">
        <div className={`text-center ${isMobile ? 'mb-8' : 'mb-16'}`}>
          <div className="bg-security-red text-white py-2 px-4 inline-block rounded mb-4">
            <h2 className="font-montserrat font-bold text-lg">Security First na mídia</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Participações técnicas estratégicas em eventos nacionais e internacionais de cybersecurity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div key={index} className="security-card">
                <div className="flex items-start mb-4">
                  <div className="bg-security-red/10 p-2 rounded mr-3 flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-security-red" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg text-security-blue">
                    {event.name}
                  </h3>
                </div>
                <div className="bg-security-red text-white p-3 rounded mb-3">
                  <p className="text-sm font-medium">
                    {event.highlight}
                  </p>
                </div>
                <p className="text-gray-700 text-sm">
                  {event.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className={`${isMobile ? 'mt-8' : 'mt-16'} bg-security-red text-white p-6 rounded-lg text-center`}>
          <p className="font-medium mb-4">
            Reconhecimento técnico em eventos de destaque na área de cybersecurity e infraestrutura crítica.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span>CNPPD</span>
            <span>QPeninnovation</span>
            <span>GRM</span>
            <span>CS4CA</span>
            <span>SDL</span>
            <span>HRMCON</span>
            <span>IAMTechDay</span>
            <span>CIELO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalEvents;
