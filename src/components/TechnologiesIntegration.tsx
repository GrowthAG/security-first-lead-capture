
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
    logo: '/lovable-uploads/80210640-1cc9-42c4-899a-5670ed41abf7.png'
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
    logo: '/lovable-uploads/88b5caaf-f9d5-4385-a781-3715a8695ab1.png'
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
    logo: '/lovable-uploads/6534938c-4834-4492-ba6b-c3ce886e0ba1.png'
  },
  {
    name: 'Fortinet',
    logo: '/lovable-uploads/5e36b1a5-0465-4252-b542-4a319a60ba72.png'
  },
  {
    name: 'Trend Micro',
    logo: '/lovable-uploads/de7fb406-c0c2-4c0a-ba93-e6a89479f512.png'
  },
  {
    name: 'CrowdStrike',
    logo: '/lovable-uploads/98b8ac48-0563-4da2-aad9-7d814eba8002.png'
  },
  {
    name: 'Kaspersky',
    logo: '/lovable-uploads/ca5221ef-0943-4877-b799-3885394f0be1.png'
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
                  <div className="security-card text-center p-8 h-40 flex items-center justify-center bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="max-h-20 max-w-full object-contain filter brightness-100 contrast-100"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesIntegration;
