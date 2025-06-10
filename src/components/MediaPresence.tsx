
import React from 'react';

const mediaHighlights = [
  {
    title: "Destaque no CS4CA com case internacional",
    description: "Reconhecimento por implementação em infraestrutura crítica"
  },
  {
    title: "SDL e IAM Tech Day: palestras e demonstrações técnicas",
    description: "Apresentações sobre resposta a incidentes e gestão de ameaças"
  },
  {
    title: "Patrocinadores de pesquisas nacionais em cibersegurança",
    description: "Apoio a iniciativas de pesquisa e desenvolvimento do setor"
  }
];

const MediaPresence = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {mediaHighlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <h3 className="font-montserrat font-semibold text-lg text-security-blue mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaPresence;
