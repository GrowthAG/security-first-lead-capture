
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Award, Shield, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CertificationBadges = () => {
  const isMobile = useIsMobile();
  
  const certificates = [
    { 
      name: "ISO 27001", 
      type: "security", 
      icon: Shield, 
      description: "Gestão de Segurança da Informação",
      badgeUrl: "https://images.credly.com/size/340x340/images/6e90cfad-1e05-4c1b-8a7e-4dcde1f6c27e/image.png"
    },
    { 
      name: "ISO 22301", 
      type: "business", 
      icon: Shield, 
      description: "Continuidade de Negócios",
      badgeUrl: "/lovable-uploads/3c111a33-b999-4b0a-9be8-834ce5f636dc.png"
    },
    { 
      name: "CISSP", 
      type: "professional", 
      icon: Award, 
      description: "Certified Information Systems Security Professional",
      badgeUrl: "/lovable-uploads/69d46bda-a946-4e2e-be14-8cb05f1bc3a9.png"
    },
    { 
      name: "CEH", 
      type: "professional", 
      icon: Award, 
      description: "Certified Ethical Hacker",
      badgeUrl: "/lovable-uploads/8f9c79d7-346f-4557-9046-af0c2b903830.png"
    },
    { 
      name: "CISM", 
      type: "professional", 
      icon: Award, 
      description: "Certified Information Security Manager",
      badgeUrl: "/lovable-uploads/6ffd55be-a836-4ff1-af47-e76d065c22b2.png"
    },
    { 
      name: "C-CISO", 
      type: "executive", 
      icon: Star, 
      description: "Chief Information Security Officer",
      badgeUrl: "/lovable-uploads/bcd4666d-7c4e-4002-9190-dbedc31d5b6d.png"
    },
    { 
      name: "EWPTX", 
      type: "technical", 
      icon: Award, 
      description: "Extreme Web Penetration Testing",
      badgeUrl: "/lovable-uploads/41d6c16f-9a4c-4269-9072-dcec875f7b62.png"
    },
    { 
      name: "GCIH", 
      type: "professional", 
      icon: Award, 
      description: "GIAC Certified Incident Handler",
      badgeUrl: "/lovable-uploads/1d5509d5-eaae-4781-9e09-7691a7d56113.png"
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
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full mb-8"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {certificates.map((cert, index) => {
                const styles = getBadgeStyles(cert.type);
                
                return (
                  <CarouselItem key={index} className={`pl-2 md:pl-4 ${isMobile ? 'basis-full' : 'basis-1/2 lg:basis-1/3'}`}>
                    <div className="bg-white/10 backdrop-blur-sm border-white/20 border-2 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:bg-white/15 h-full">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="relative">
                          <img 
                            src={cert.badgeUrl} 
                            alt={`${cert.name} Certification Badge`}
                            className="w-32 h-32 object-contain drop-shadow-lg"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const iconDiv = target.nextElementSibling as HTMLElement;
                              if (iconDiv) iconDiv.style.display = 'flex';
                            }}
                          />
                          <div className="w-32 h-32 rounded-full bg-white/20 border-4 border-white/30 shadow-lg hidden items-center justify-center">
                            <cert.icon className="w-12 h-12 text-white" />
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
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="bg-white/90 text-security-blue border-white/50 hover:bg-white hover:text-security-blue shadow-lg -left-12 h-12 w-12" />
            <CarouselNext className="bg-white/90 text-security-blue border-white/50 hover:bg-white hover:text-security-blue shadow-lg -right-12 h-12 w-12" />
          </Carousel>

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
