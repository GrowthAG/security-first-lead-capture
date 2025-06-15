import React, { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Award, Shield, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const CertificationBadges = () => {
  const isMobile = useIsMobile();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  
  const certificates = [
    { 
      name: "ISO 27001", 
      type: "security", 
      icon: Shield, 
      description: "Gestão de Segurança da Informação",
      color: "blue"
    },
    { 
      name: "ISO 22301", 
      type: "business", 
      icon: Shield, 
      description: "Continuidade de Negócios",
      color: "green"
    },
    { 
      name: "CISSP", 
      type: "professional", 
      icon: Award, 
      description: "Certified Information Systems Security Professional",
      color: "purple"
    },
    { 
      name: "CEH", 
      type: "professional", 
      icon: Award, 
      description: "Certified Ethical Hacker",
      color: "orange"
    },
    { 
      name: "CISM", 
      type: "professional", 
      icon: Award, 
      description: "Certified Information Security Manager",
      color: "indigo"
    },
    { 
      name: "C-CISO", 
      type: "executive", 
      icon: Star, 
      description: "Chief Information Security Officer",
      color: "red"
    },
    { 
      name: "EWPTX", 
      type: "technical", 
      icon: Award, 
      description: "Extreme Web Penetration Testing",
      color: "yellow"
    },
    { 
      name: "GCIH", 
      type: "professional", 
      icon: Award, 
      description: "GIAC Certified Incident Handler",
      color: "pink"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Auto-play otimizado para mobile
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, isMobile ? 3000 : 3500); // Timing diferente para mobile

    return () => clearInterval(interval);
  }, [api, isMobile]);

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        badge: 'bg-blue-600 text-white border-blue-700 hover:bg-blue-700',
        icon: 'text-blue-400',
        background: 'bg-blue-500/10 border-blue-500/20'
      },
      green: {
        badge: 'bg-green-600 text-white border-green-700 hover:bg-green-700',
        icon: 'text-green-400',
        background: 'bg-green-500/10 border-green-500/20'
      },
      purple: {
        badge: 'bg-purple-600 text-white border-purple-700 hover:bg-purple-700',
        icon: 'text-purple-400',
        background: 'bg-purple-500/10 border-purple-500/20'
      },
      orange: {
        badge: 'bg-orange-600 text-white border-orange-700 hover:bg-orange-700',
        icon: 'text-orange-400',
        background: 'bg-orange-500/10 border-orange-500/20'
      },
      indigo: {
        badge: 'bg-indigo-600 text-white border-indigo-700 hover:bg-indigo-700',
        icon: 'text-indigo-400',
        background: 'bg-indigo-500/10 border-indigo-500/20'
      },
      red: {
        badge: 'bg-red-600 text-white border-red-700 hover:bg-red-700',
        icon: 'text-red-400',
        background: 'bg-red-500/10 border-red-500/20'
      },
      yellow: {
        badge: 'bg-yellow-600 text-white border-yellow-700 hover:bg-yellow-700',
        icon: 'text-yellow-400',
        background: 'bg-yellow-500/10 border-yellow-500/20'
      },
      pink: {
        badge: 'bg-pink-600 text-white border-pink-700 hover:bg-pink-700',
        icon: 'text-pink-400',
        background: 'bg-pink-500/10 border-pink-500/20'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  const itemsPerView = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(certificates.length / itemsPerView);

  return (
    <section className={`py-16 bg-security-blue relative overflow-hidden ${isMobile ? 'py-12' : ''}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-security-red rounded-full blur-3xl"></div>
      </div>

      <div className={`container mx-auto relative z-10 ${isMobile ? 'px-6' : 'px-4'}`}>
        <div className="text-center mb-12">
          <h2 className={`font-montserrat font-bold text-white mb-4 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Certificações da Nossa Equipe
          </h2>
          <p className={`text-white/90 max-w-2xl mx-auto ${isMobile ? 'text-base' : 'text-lg'}`}>
            Nossa equipe possui as principais certificações em segurança cibernética do mundo
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              duration: isMobile ? 20 : 30,
              dragFree: true,
              containScroll: "trimSnaps",
              startIndex: 0
            }}
            className="w-full mb-8"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {certificates.map((cert, index) => {
                const colors = getColorClasses(cert.color);
                
                return (
                  <CarouselItem key={index} className={`pl-2 md:pl-4 ${isMobile ? 'basis-full' : 'basis-1/2 lg:basis-1/3'}`}>
                    <div className={`${colors.background} backdrop-blur-sm border-2 rounded-xl p-6 transition-all duration-500 hover:shadow-lg hover:scale-105 h-full group`}>
                      <div className="flex flex-col items-center text-center space-y-4">
                        {/* Icon Circle */}
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/30 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <cert.icon className={`w-10 h-10 ${colors.icon} group-hover:animate-pulse`} />
                          </div>
                          {/* Glow effect on hover */}
                          <div className={`absolute inset-0 w-20 h-20 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${colors.background} blur-md`}></div>
                        </div>
                        
                        <Badge className={`${colors.badge} text-sm font-bold px-4 py-2 min-w-0 group-hover:scale-105 transition-transform duration-500`}>
                          {cert.name}
                        </Badge>
                        
                        <p className="text-xs text-white/80 leading-tight group-hover:text-white transition-colors duration-500">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          {/* Indicadores de navegação */}
          <div className="flex justify-center space-x-2 mb-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor((current - 1) / itemsPerView) === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/40 hover:bg-white/70 w-2'
                }`}
                aria-label={`Ver certificações ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-500">
              <Shield className="w-6 h-6 mr-3 text-security-red animate-pulse" />
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
