
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Award, Shield, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const CertificationBadges = () => {
  const isMobile = useIsMobile();
  
  const certificates = [
    { 
      name: "ISO 27001", 
      type: "security", 
      icon: Shield, 
      description: "Gestão de Segurança da Informação",
      badgeUrl: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=200&h=200&fit=crop&crop=center"
    },
    { 
      name: "ISO 22301", 
      type: "business", 
      icon: Shield, 
      description: "Continuidade de Negócios",
      badgeUrl: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=200&h=200&fit=crop&crop=center"
    },
    { 
      name: "CISSP", 
      type: "professional", 
      icon: Award, 
      description: "Certified Information Systems Security Professional",
      badgeUrl: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=200&h=200&fit=crop&crop=center"
    },
    { 
      name: "CEH", 
      type: "professional", 
      icon: Award, 
      description: "Certified Ethical Hacker",
      badgeUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&h=200&fit=crop&crop=center"
    },
    { 
      name: "CISM", 
      type: "professional", 
      icon: Award, 
      description: "Certified Information Security Manager",
      badgeUrl: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=200&h=200&fit=crop&crop=center"
    },
    { 
      name: "C-CISO", 
      type: "executive", 
      icon: Star, 
      description: "Chief Information Security Officer",
      badgeUrl: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=200&h=200&fit=crop&crop=center"
    },
    { 
      name: "EWPTX", 
      type: "technical", 
      icon: Award, 
      description: "Extreme Web Penetration Testing",
      badgeUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&h=200&fit=crop&crop=center"
    }
  ];

  const getBadgeStyles = (type: string) => {
    switch (type) {
      case 'security': 
        return {
          badge: 'bg-blue-700 text-white border-blue-800 hover:bg-blue-800',
          container: 'bg-blue-50 border-blue-200'
        };
      case 'business': 
        return {
          badge: 'bg-green-700 text-white border-green-800 hover:bg-green-800',
          container: 'bg-green-50 border-green-200'
        };
      case 'professional': 
        return {
          badge: 'bg-purple-700 text-white border-purple-800 hover:bg-purple-800',
          container: 'bg-purple-50 border-purple-200'
        };
      case 'executive': 
        return {
          badge: 'bg-red-700 text-white border-red-800 hover:bg-red-800',
          container: 'bg-red-50 border-red-200'
        };
      case 'technical': 
        return {
          badge: 'bg-orange-700 text-white border-orange-800 hover:bg-orange-800',
          container: 'bg-orange-50 border-orange-200'
        };
      default: 
        return {
          badge: 'bg-gray-700 text-white border-gray-800 hover:bg-gray-800',
          container: 'bg-gray-50 border-gray-200'
        };
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

        <div className="max-w-6xl mx-auto">
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-2 lg:grid-cols-3 gap-6'} mb-8`}>
            {certificates.map((cert, index) => {
              const styles = getBadgeStyles(cert.type);
              
              return (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm border-white/20 border-2 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:bg-white/15"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <img 
                        src={cert.badgeUrl} 
                        alt={`${cert.name} Certification Badge`}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white/30 shadow-lg"
                        onError={(e) => {
                          // Fallback para ícone se a imagem não carregar
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const iconDiv = target.nextElementSibling as HTMLElement;
                          if (iconDiv) iconDiv.style.display = 'flex';
                        }}
                      />
                      <div className="w-20 h-20 rounded-full bg-white/20 border-4 border-white/30 shadow-lg hidden items-center justify-center">
                        <cert.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <Badge className={`${styles.badge} text-sm font-bold px-4 py-2 min-w-0`}>
                      {cert.name}
                    </Badge>
                    <p className="text-xs text-white/80 leading-tight">
                      {cert.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-lg border border-white/20">
              <Shield className="w-6 h-6 mr-3 text-security-red" />
              <div className="text-left">
                <div className="font-bold text-lg">
                  {isMobile ? '20+ anos de experiência' : 'Mais de 20 anos de experiência combinada'}
                </div>
                <div className="text-sm text-white/80">
                  em segurança cibernética e proteção de dados
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationBadges;
