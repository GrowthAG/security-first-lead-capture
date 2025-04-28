
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

const certificates = [
  "ISO 27001", "CISSP", "CEH", "OSCP", "CISM", "CCSP"
];

// Logos seriam de empresas parceiras ou certificações
const logos = [
  "Oracle", "Microsoft", "AWS", "Google Cloud", "IBM", "Fortinet"
];

const Authority = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Autoridade em Segurança</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Confie na experiência de quem protege as maiores empresas do Brasil contra ameaças cibernéticas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="security-card">
            <h3 className="subsection-title">Nossa Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="text-security-red mr-2 flex-shrink-0 mt-1" size={20} />
                <p>Mais de <span className="font-semibold">500 ataques</span> bloqueados em tempo real nos últimos 12 meses</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-security-red mr-2 flex-shrink-0 mt-1" size={20} />
                <p>Tempo médio de resposta a incidentes: <span className="font-semibold">menos de 15 minutos</span></p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-security-red mr-2 flex-shrink-0 mt-1" size={20} />
                <p>Equipe com <span className="font-semibold">20+ anos</span> de experiência em segurança</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-security-red mr-2 flex-shrink-0 mt-1" size={20} />
                <p>Mais de <span className="font-semibold">100 clientes</span> protegidos em setores críticos</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-montserrat font-medium text-lg mb-3">Certificações da nossa equipe:</h4>
              <div className="flex flex-wrap gap-2">
                {certificates.map((cert, index) => (
                  <Badge key={index} className="bg-security-blue text-white">{cert}</Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="subsection-title mb-6">Tecnologias Parceiras</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {logos.map((logo, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-24">
                  <span className="font-semibold text-gray-500">{logo}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg font-montserrat font-medium text-security-blue">
                Trusted by empresas líderes do mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
