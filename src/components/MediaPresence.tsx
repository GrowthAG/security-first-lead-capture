
import React from 'react';
import { Tv, Trophy, Users } from 'lucide-react';

const mediaHighlights = [
  {
    icon: Trophy,
    title: "Destaque no CS4CA com case internacional",
    description: "Reconhecimento por implementação em infraestrutura crítica"
  },
  {
    icon: Tv,
    title: "SDL e IAM Tech Day: palestras e demonstrações técnicas",
    description: "Apresentações sobre resposta a incidentes e gestão de ameaças"
  },
  {
    icon: Users,
    title: "Patrocinadores de pesquisas nacionais em cibersegurança",
    description: "Apoio a iniciativas de pesquisa e desenvolvimento do setor"
  }
];

const MediaPresence = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Security First na mídia</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reconhecimento técnico e participação ativa no cenário nacional e internacional
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {mediaHighlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-security-red/10 p-3 rounded-full flex-shrink-0">
                  <IconComponent className="h-6 w-6 text-security-red" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg text-security-blue mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MediaPresence;
