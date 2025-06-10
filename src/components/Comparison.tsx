
import React from 'react';
import { CheckCircle, XCircle, TrendingUp, Clock, Shield } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Comparison = () => {
  const isMobile = useIsMobile();

  const comparisons = [
    {
      category: "Custo",
      internal: "R$ 50k+ mensais",
      securityFirst: "Até 70% menor",
      advantage: "securityFirst"
    },
    {
      category: "Tempo de Resposta",
      internal: "30+ minutos",
      securityFirst: "Menos de 15 min",
      advantage: "securityFirst"
    },
    {
      category: "Expertise",
      internal: "Equipe limitada",
      securityFirst: "20+ anos experiência",
      advantage: "securityFirst"
    },
    {
      category: "Cobertura",
      internal: "8x5 horário comercial",
      securityFirst: "24x7 sem parar",
      advantage: "securityFirst"
    },
    {
      category: "Tecnologias",
      internal: "Poucas ferramentas",
      securityFirst: "Stack completo",
      advantage: "securityFirst"
    },
    {
      category: "Conformidade",
      internal: "Processo manual",
      securityFirst: "LGPD automatizada",
      advantage: "securityFirst"
    }
  ];

  return (
    <section className={`py-20 bg-gray-50 ${isMobile ? 'py-12' : ''}`}>
      <div className={`container mx-auto ${isMobile ? 'px-6' : 'px-4'}`}>
        <div className="text-center mb-12">
          <h2 className={`section-title ${isMobile ? 'text-2xl' : ''}`}>
            SOC Interno vs SOC Security First
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto ${isMobile ? 'text-base' : ''}`}>
            Compare os custos e benefícios de manter um SOC interno versus nossa solução especializada
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'md:grid-cols-3 gap-8'} mb-8`}>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-gray-800 mb-2">SOC Interno</h3>
              <p className="text-gray-600">Alto custo, recursos limitados</p>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="text-4xl font-bold text-security-blue">VS</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-security-blue mb-2">SOC Security First</h3>
              <p className="text-security-blue font-medium">Especialização total, custo otimizado</p>
            </div>
          </div>

          <div className="security-card overflow-hidden">
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-0`}>
              <div className={`${isMobile ? 'p-4 border-b' : 'p-6 border-r'} border-gray-200`}>
                <h4 className="font-montserrat font-semibold text-lg text-center text-gray-800 mb-4">Categoria</h4>
              </div>
              <div className={`${isMobile ? 'p-4 border-b bg-red-50' : 'p-6 border-r bg-red-50'} border-gray-200`}>
                <h4 className="font-montserrat font-semibold text-lg text-center text-red-700 mb-4">SOC Interno</h4>
              </div>
              <div className={`${isMobile ? 'p-4 bg-green-50' : 'p-6 bg-green-50'}`}>
                <h4 className="font-montserrat font-semibold text-lg text-center text-green-700 mb-4">SOC Security First</h4>
              </div>
            </div>
            
            {comparisons.map((item, index) => (
              <div key={index} className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-0 border-t border-gray-200`}>
                <div className={`${isMobile ? 'p-3 border-b bg-gray-50' : 'p-4 border-r bg-gray-50'} border-gray-200`}>
                  <div className="font-medium text-gray-800 text-center">{item.category}</div>
                </div>
                <div className={`${isMobile ? 'p-3 border-b' : 'p-4 border-r'} border-gray-200 text-center`}>
                  <div className="text-red-600 font-medium">{item.internal}</div>
                </div>
                <div className={`${isMobile ? 'p-3' : 'p-4'} text-center`}>
                  <div className="text-green-600 font-medium flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {item.securityFirst}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center bg-security-blue text-white px-6 py-3 rounded-lg">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span className="font-medium">Economia média de 70% com nossa solução</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
