
import React from 'react';

const technologies = [
  'Elastic Search',
  'Kaspersky',
  'Oracle Cloud',
  'Claroty',
  'Cloudflare',
  'CrowdStrike',
  'CISCO',
  'Trend Micro'
];

const TechnologiesIntegration = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Integração com as principais tecnologias do mercado</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Compatível com qualquer ambiente IP
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div key={index} className="security-card text-center p-4">
              <div className="text-security-blue font-montserrat font-semibold text-sm md:text-base">
                {tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesIntegration;
