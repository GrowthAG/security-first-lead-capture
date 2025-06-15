
import React, { useEffect, useRef } from 'react';
import { Lock, Shield, Settings, ArrowRight, Play } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const events = [
  {
    icon: Lock,
    name: "CS4CA – Cyber Security For Critical Assets",
    description: "Apresentamos cases de clientes de infraestrutura crítica com a implantação de SOC no setor de energia e alimentação cobrindo mais de 10.000 ativos em 14 países, que puderam ter 95% redução.",
    highlight: "Apresentamos cases de clientes de infraestrutura crítica com a implantação de SOC no setor de energia e alimentação",
    category: "Infraestrutura Crítica",
    impact: "95% redução de incidentes"
  },
  {
    icon: Shield,
    name: "SDL – Security Design Lab",
    description: "Somos patrocinadores da maior pesquisa nacional de segurança cibernética e contribuímos para o aumento da maturidade de processos e controles em diversos setores.",
    highlight: "Somos patrocinadores da maior pesquisa nacional de segurança cibernética e contribuímos para o controle em diversos setores.",
    category: "Pesquisa Nacional",
    impact: "Liderança em pesquisa"
  },
  {
    icon: Settings,
    name: "IAM Tech Day 2025",
    description: "Apresentamos nossa solução de resposta a incidentes, que está preparada para gerenciar crises de segurança cibernética em qualquer organização.",
    highlight: "Apresentamos nossa solução de resposta a incidentes, que está preparada para gerenciar crises de segurança cibernética em qualquer organização.",
    category: "Gestão de Crises",
    impact: "Resposta eficiente"
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
    <section ref={sectionRef} className={`${isMobile ? 'py-16' : 'py-24'} bg-gradient-to-b from-gray-50 to-white relative`}>
      {/* Clean Background with subtle pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-security-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-security-red rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003366' fill-opacity='0.04'%3E%3Cpath d='M30 30h30v30H30V30zm-30 0h30v30H0V30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Premium header section */}
        <div className={`text-center ${isMobile ? 'mb-12' : 'mb-20'} reveal-on-scroll`}>
          <div className="inline-flex items-center bg-gradient-to-r from-security-red/10 to-security-blue/10 backdrop-blur-sm border border-security-red/20 text-security-red py-4 px-8 rounded-full mb-8 hover:from-security-red/15 hover:to-security-blue/15 hover:scale-105 hover:shadow-2xl hover:shadow-security-red/20 transition-all duration-700 group">
            <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
            <h2 className="font-montserrat font-bold text-xl group-hover:animate-pulse">Security First na mídia</h2>
            <div className="w-2 h-2 bg-green-400 rounded-full ml-3 animate-pulse shadow-lg shadow-green-400/50"></div>
          </div>
          
          <h3 className={`font-montserrat font-bold text-security-blue mb-6 ${
            isMobile ? 'text-2xl' : 'text-3xl lg:text-4xl'
          }`}>
            Reconhecimento Técnico em 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-security-blue via-security-red to-security-blue animate-pulse">
              Eventos de Destaque
            </span>
          </h3>
          
          <p className={`text-gray-600 max-w-4xl mx-auto leading-relaxed ${
            isMobile 
              ? 'text-base px-2' 
              : 'text-lg'
          }`}>
            Participações técnicas estratégicas em eventos nacionais e internacionais de cybersecurity, 
            demonstrando nossa liderança e expertise no mercado.
          </p>
        </div>
        
        {/* Clean events grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div 
                key={index} 
                className="reveal-on-scroll group relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Main card with clean styling and proper padding for badge */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 pt-12 h-full border border-gray-100 hover:border-security-blue/20 transition-all duration-700 hover:transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                  
                  {/* Clean gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-security-blue/3 via-transparent to-security-red/3 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-700"></div>
                  
                  {/* Category badge - positioned with more space from content */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-security-blue to-security-red text-white text-xs font-medium px-3 py-1.5 rounded-full opacity-90 z-10 shadow-lg">
                    {event.category}
                  </div>
                  
                  {/* Header section - with proper spacing from badge */}
                  <div className="flex items-start mb-6 relative z-10 mt-2">
                    <div className="bg-gradient-to-br from-security-red/10 to-security-blue/10 p-4 rounded-xl mr-4 flex-shrink-0 group-hover:from-security-red/20 group-hover:to-security-blue/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <IconComponent className="h-7 w-7 text-security-red group-hover:animate-pulse" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-montserrat font-bold text-lg text-security-blue group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-security-blue group-hover:to-security-red transition-all duration-500 leading-tight pr-2">
                        {event.name}
                      </h3>
                      <div className="text-security-red/70 text-sm font-medium mt-1">
                        {event.impact}
                      </div>
                    </div>
                  </div>
                  
                  {/* Highlight section with clean styling */}
                  <div className="bg-gradient-to-r from-security-red via-security-red/90 to-security-red text-white p-6 rounded-xl mb-6 group-hover:from-security-red group-hover:via-security-red/95 group-hover:to-security-red/90 group-hover:shadow-lg group-hover:shadow-security-red/30 transition-all duration-500 relative overflow-hidden">
                    {/* Clean pattern overlay */}
                    <div className="absolute inset-0 opacity-5" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10h10v10H10V10zm-10 0h10v10H0V10z'/%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                    <p className="text-sm font-medium leading-relaxed relative z-10">
                      {event.highlight}
                    </p>
                  </div>
                  
                  {/* Description with proper spacing */}
                  <p className="text-gray-700 text-sm leading-relaxed relative z-10 group-hover:text-gray-600 transition-colors duration-300 mb-4">
                    {event.description}
                  </p>

                  {/* Action indicator */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-security-blue/20 transition-colors duration-300">
                    <span className="text-xs text-gray-500 font-medium">Saiba mais</span>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-security-blue to-security-red flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Clean border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-security-blue/20 group-hover:to-security-red/20 transition-colors duration-700"></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Premium footer section */}
        <div className={`${isMobile ? 'mt-12' : 'mt-20'} reveal-on-scroll`}>
          <div className="bg-gradient-to-br from-security-red via-security-red/95 to-security-red/90 text-white p-10 rounded-3xl text-center hover:from-security-red hover:via-security-red/98 hover:to-security-red/95 hover:scale-105 hover:shadow-2xl hover:shadow-security-red/30 transition-all duration-700 group relative overflow-hidden">
            
            {/* Clean background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20h20v20H20V20zm-20 0h20v20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            <h4 className="font-montserrat font-bold text-2xl mb-6 relative z-10 group-hover:animate-pulse">
              Reconhecimento Técnico Comprovado
            </h4>
            
            <p className="font-medium mb-8 text-lg relative z-10 max-w-3xl mx-auto leading-relaxed">
              Reconhecimento técnico em eventos de destaque na área de cybersecurity e infraestrutura crítica, 
              consolidando nossa posição como referência no mercado brasileiro.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 text-sm relative z-10">
              {['CNPPD', 'QPeninnovation', 'GRM', 'CS4CA', 'SDL', 'HRMCON', 'IAMTechDay', 'CIELO'].map((event, index) => (
                <span 
                  key={event}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 cursor-default font-medium border border-white/10 hover:border-white/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {event}
                </span>
              ))}
            </div>

            {/* Clean glow effect */}
            <div className="absolute inset-0 bg-white/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalEvents;
