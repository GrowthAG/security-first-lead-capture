
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

const certificates = [
  "ISO 27001", "CISSP", "CEH", "OSCP", "CISM", "CCSP"
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
              {/* Oracle Logo */}
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-24">
                <img 
                  src="/lovable-uploads/c4a1892f-b4aa-454a-94af-2141b53c962d.png" 
                  alt="Oracle" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              
              {/* Microsoft Logo - Substituída pela nova */}
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-24">
                <img 
                  src="/lovable-uploads/171f432a-b09d-4d04-8afe-a97778b85fba.png" 
                  alt="Microsoft" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              
              {/* AWS Logo */}
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-24">
                <img 
                  src="/lovable-uploads/c1957844-81b6-4e34-adcf-7ae6f096b135.png" 
                  alt="AWS" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              
              {/* Google Cloud Logo */}
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-24">
                <img 
                  src="/lovable-uploads/5e36b1a5-0465-4252-b542-4a319a60ba72.png" 
                  alt="Google Cloud" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              
              {/* IBM Logo */}
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-24">
                <img 
                  src="/lovable-uploads/12079eea-4385-45b2-b7a6-28124cdf1068.png" 
                  alt="IBM" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              
              {/* Fortinet Logo */}
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-24">
                <img 
                  src="/lovable-uploads/9c7c89a5-5373-4e44-ae33-3fce1b3d9899.png" 
                  alt="Fortinet" 
                  className="h-8 w-auto object-contain"
                />
              </div>
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
