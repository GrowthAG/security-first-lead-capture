
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Award, Shield } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const CertificationBadges = () => {
  const isMobile = useIsMobile();
  
  const certificates = [
    { name: "ISO 27001", type: "security" },
    { name: "ISO 22301", type: "business" },
    { name: "CISSP", type: "professional" },
    { name: "CEH", type: "professional" },
    { name: "CISM", type: "professional" },
    { name: "C-CISO", type: "executive" },
    { name: "EWPTX", type: "technical" }
  ];

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'security': return 'bg-security-blue text-white';
      case 'business': return 'bg-green-600 text-white';
      case 'professional': return 'bg-purple-600 text-white';
      case 'executive': return 'bg-security-red text-white';
      case 'technical': return 'bg-orange-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <section className={`py-16 bg-security-blue ${isMobile ? 'py-12' : ''}`}>
      <div className={`container mx-auto ${isMobile ? 'px-6' : 'px-4'}`}>
        <div className="text-center mb-8">
          <h2 className={`font-montserrat font-bold text-white mb-4 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Certificações da Nossa Equipe
          </h2>
          <p className={`text-white/90 max-w-2xl mx-auto ${isMobile ? 'text-base' : 'text-lg'}`}>
            Nossa equipe possui as principais certificações em segurança cibernética do mundo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`flex ${isMobile ? 'flex-col items-center space-y-4' : 'flex-wrap justify-center'} gap-4 mb-8`}>
            {certificates.map((cert, index) => (
              <div key={index} className="flex items-center">
                <Badge className={`${getBadgeColor(cert.type)} text-sm font-medium px-4 py-2 ${isMobile ? 'text-base' : ''}`}>
                  <Award className="w-4 h-4 mr-2" />
                  {cert.name}
                </Badge>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg">
              <Shield className="w-5 h-5 mr-3" />
              <span className="font-medium">
                {isMobile ? '20+ anos de experiência' : 'Mais de 20 anos de experiência combinada em segurança cibernética'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationBadges;
