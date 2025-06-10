
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Award } from 'lucide-react';

const certificates = ["ISO 27001", "ISO 22301", "CISSP", "CEH", "CISM", "C-CISO", "EWPTX"];

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
                <p>Monitoramos <span className="font-semibold">milhares de ativos em 14 países</span></p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-security-red mr-2 flex-shrink-0 mt-1" size={20} />
                <p>SOC 24x7 com <span className="font-semibold">resposta em menos de 15 minutos</span></p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-security-red mr-2 flex-shrink-0 mt-1" size={20} />
                <p>Equipe com <span className="font-semibold">20+ anos</span> de experiência em segurança</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-security-red mr-2 flex-shrink-0 mt-1" size={20} />
                <p><span className="font-semibold">Economia de até 70% vs. SOC interno</span></p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-security-red mr-2 flex-shrink-0 mt-1" size={20} />
                <p><span className="font-semibold">Conformidade LGPD garantida</span></p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-security-red mr-2 flex-shrink-0 mt-1" size={20} />
                <p><span className="font-semibold">+ de 10 Bilhões de eventos monitorados todos os meses</span></p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-montserrat font-medium text-lg mb-3 flex items-center">
                <Award className="text-security-blue mr-2" size={20} />
                Certificações da nossa equipe:
              </h4>
              <div className="flex flex-wrap gap-2">
                {certificates.map((cert, index) => (
                  <Badge key={index} className="bg-security-blue text-white">{cert}</Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="security-card">
            <h3 className="subsection-title mb-6">Resultados Comprovados</h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-security-blue mb-2">99.9%</div>
                <p className="text-gray-600">Uptime garantido</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-security-blue mb-2">24/7</div>
                <p className="text-gray-600">Monitoramento contínuo</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-security-blue mb-2">15min</div>
                <p className="text-gray-600">Tempo médio de resposta</p>
              </div>
              <div className="text-center border-t pt-4">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2 text-security-blue" />
                  <span className="font-medium">Zero custo, máximo valor no diagnóstico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
