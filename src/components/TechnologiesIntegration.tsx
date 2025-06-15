
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const technologies = [
  {
    name: 'Oracle Cloud',
    logo: '/lovable-uploads/d8566ab9-6c67-4d93-861c-e2a731ebd624.png'
  },
  {
    name: 'Microsoft',
    logo: '/lovable-uploads/171f432a-b09d-4d04-8afe-a97778b85fba.png'
  },
  {
    name: 'AWS',
    logo: '/lovable-uploads/359006b6-e80f-4854-9503-167db1c6429d.png'
  },
  {
    name: 'Cloudflare',
    logo: '/lovable-uploads/416ff149-d8fb-467f-ad9a-a8012b7866fa.png'
  },
  {
    name: 'Claroty',
    logo: '/lovable-uploads/03ed54ec-303f-4633-8a39-0ef328da3d8b.png'
  },
  {
    name: 'CISCO',
    logo: '/lovable-uploads/3b812c7b-07db-4e86-ae9b-654e94822662.png'
  },
  {
    name: 'Google Cloud',
    logo: '/lovable-uploads/9c7c89a5-5373-4e44-ae33-3fce1b3d9899.png'
  },
  {
    name: 'Elastic Search',
    logo: '/lovable-uploads/668e6a79-1ffb-4125-a8e0-726acc072d60.png'
  },
  {
    name: 'Fortinet',
    logo: '/lovable-uploads/5e36b1a5-0465-4252-b542-4a319a60ba72.png'
  },
  {
    name: 'Trend Micro',
    logo: '/lovable-uploads/4f0fdbc3-317f-437c-be0b-0e783b0f7a2f.png'
  },
  {
    name: 'CrowdStrike',
    logo: '/lovable-uploads/98b8ac48-0563-4da2-aad9-7d814eba8002.png'
  },
  {
    name: 'Kaspersky',
    logo: '/lovable-uploads/a7364490-ee68-4fa7-bda4-30f433456db9.png'
  }
];

const TechnologiesIntegration = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Tecnologias Parceiras</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temos uma vasta lista de integrações, cobrindo as principais tecnologias líderes do mercado, fale com nossos consultores.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {technologies.map((tech, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="security-card text-center p-8 h-48 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-security-blue/20">
                    <div className="w-full h-20 flex items-center justify-center mb-4">
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="max-h-16 max-w-[140px] w-auto h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-security-blue transition-colors duration-300 text-center leading-tight">
                      {tech.name}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-security-blue/20 hover:bg-security-blue hover:text-white hover:border-security-blue" />
            <CarouselNext className="hidden md:flex -right-12 border-security-blue/20 hover:bg-security-blue hover:text-white hover:border-security-blue" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesIntegration;
