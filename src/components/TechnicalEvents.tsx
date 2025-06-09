
import React from 'react';
import { Lock, Shield, Settings } from 'lucide-react';

const events = [
  {
    icon: Lock,
    name: "CS4CA – Cyber Security For Critical Assets",
    description: "Implantação de SOC em infraestrutura crítica, cobrindo mais de 10.000 ativos em 14 países."
  },
  {
    icon: Shield,
    name: "SDL – Security Design Lab",
    description: "Apresentamos nossa solução de resposta a incidentes, capaz de conter crises cibernéticas em minutos."
  },
  {
    icon: Settings,
    name: "IAM Tech Day 2025",
    description: "Demonstração ao vivo da gestão de incidentes com tecnologias como Oracle Cloud, CrowdStrike e Claroty."
  }
];

const TechnicalEvents = () => {
  return (
    <section className="py-20 bg-security-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Participações Técnicas Estratégicas</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa expertise reconhecida em eventos técnicos internacionais
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div key={index} className="security-card text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-security-red/10 p-4 rounded-full">
                    <IconComponent className="h-8 w-8 text-security-red" />
                  </div>
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-security-blue mb-4">
                  {event.name}
                </h3>
                <p className="text-gray-700">
                  {event.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalEvents;
