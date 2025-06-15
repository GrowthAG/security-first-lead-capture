
import React, { useEffect, useRef } from 'react';
import { Lock, Shield, Settings } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const events = [
  {
    icon: Lock,
    name: "CS4CA – Cyber Security For Critical Assets",
    description: "Apresentamos cases de clientes de infraestrutura crítica com a implantação de SOC no setor de energia e alimentação cobrindo mais de 10.000 ativos em 14 países, que puderam ter 95% redução.",
    highlight: "Apresentamos cases de clientes de infraestrutura crítica com a implantação de SOC no setor de energia e alimentação"
  },
  {
    icon: Shield,
    name: "SDL – Security Design Lab",
    description: "Somos patrocinadores da maior pesquisa nacional de segurança cibernética e contribuímos para o aumento da maturidade de processos e controles em diversos setores.",
    highlight: "Somos patrocinadores da maior pesquisa nacional de segurança cibernética e contribuímos para o controle em diversos setores."
  },
  {
    icon: Settings,
    name: "IAM Tech Day 2025",
    description: "Apresentamos nossa solução de resposta a incidentes, que está preparada para gerenciar crises de segurança cibernética em qualquer organização.",
    highlight: "Apresentamos nossa solução de resposta a incidentes, que está preparada para gerenciar crises de segurança cibernética em qualquer organização."
  }
];

const TechnicalEvents = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`${isMobile ? 'py-12' : 'py-20'} bg-white relative overflow-hidden`}>
      {/* Enhanced Background decoration with digital elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-security-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-security-red rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Digital grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003366' fill-opacity='0.1'%3E%3Cpath d='M20 20h20v20H20V20zm-20 0h20v20H0V20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating tech particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-security-blue/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center ${isMobile ? 'mb-8' : 'mb-16'} reveal-on-scroll`}>
          <div className="bg-security-red text-white py-3 px-6 inline-block rounded-lg mb-6 hover:bg-security-red/90 hover:scale-105 hover:shadow-xl hover:shadow-security-red/30 transition-all duration-500 group">
            <h2 className="font-montserrat font-bold text-lg group-hover:animate-pulse">Security First na mídia</h2>
          </div>
          <p className={`text-gray-600 max-w-3xl mx-auto ${
            isMobile 
              ? 'text-base leading-normal' 
              : 'text-lg'
          }`}>
            Participações técnicas estratégicas em eventos nacionais e internacionais de cybersecurity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div 
                key={index} 
                className="reveal-on-scroll group security-card hover:transform hover:scale-105 hover:shadow-xl hover:shadow-security-blue/20 transition-all duration-500 hover-lift card-3d"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Enhanced gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-security-blue/5 to-security-red/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-500"></div>
                
                <div className="flex items-start mb-4 relative z-10">
                  <div className="bg-security-red/10 p-3 rounded-lg mr-3 flex-shrink-0 group-hover:bg-security-red/20 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-security-red group-hover:animate-pulse" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg text-security-blue group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-security-blue group-hover:to-security-red transition-all duration-300">
                    {event.name}
                  </h3>
                </div>
                
                <div className="bg-security-red text-white p-4 rounded-lg mb-4 group-hover:bg-gradient-to-r group-hover:from-security-red group-hover:to-security-red/80 group-hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <p className="text-sm font-medium relative z-10">
                    {event.highlight}
                  </p>
                </div>
                
                <p className="text-gray-700 text-sm relative z-10 group-hover:text-gray-600 transition-colors duration-300">
                  {event.description}
                </p>

                {/* Enhanced hover effect indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-security-blue to-security-red flex items-center justify-center shadow-lg group-hover:shadow-xl">
                    <span className="text-white text-sm animate-pulse">→</span>
                  </div>
                </div>

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-security-blue/20 transition-colors duration-500"></div>
              </div>
            );
          })}
        </div>
        
        <div className={`${isMobile ? 'mt-8' : 'mt-16'} bg-security-red text-white p-8 rounded-xl text-center reveal-on-scroll hover:bg-gradient-to-r hover:from-security-red hover:to-security-red/90 hover:scale-105 hover:shadow-xl hover:shadow-security-red/30 transition-all duration-500 group relative overflow-hidden`}>
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10h10v10H10V10zm-10 0h10v10H0V10z'/%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <p className="font-medium mb-6 text-lg relative z-10 group-hover:animate-pulse">
            Reconhecimento técnico em eventos de destaque na área de cybersecurity e infraestrutura crítica.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm relative z-10">
            {['CNPPD', 'QPeninnovation', 'GRM', 'CS4CA', 'SDL', 'HRMCON', 'IAMTechDay', 'CIELO'].map((event, index) => (
              <span 
                key={event}
                className="bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {event}
              </span>
            ))}
          </div>

          {/* Enhanced glow effect */}
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalEvents;
