import React, { useEffect, useRef } from 'react';
import { Shield, Users, Code, Zap } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const benefitItems = [
  {
    icon: Shield,
    title: "SOC 24x7 sem cobrança por PPS",
    description: "Monitoramento contínuo sem custos adicionais por evento, garantindo previsibilidade orçamentária.",
    color: "from-security-blue to-cyan-500",
    image: "/lovable-uploads/1c0f6be2-afb8-496c-90a6-68450512adc0.png" // Security/monitoring themed
  },
  {
    icon: Code,
    title: "Integração com qualquer dispositivo IP",
    description: "Compatibilidade total com sua infraestrutura existente, sem necessidade de trocas de equipamentos.",
    color: "from-purple-500 to-security-blue",
    image: "/lovable-uploads/461ff149-d8fb-467f-ad9a-a8012b7866fa.png" // Network/integration themed
  },
  {
    icon: Users,
    title: "Especialistas com mais de 20 anos de mercado",
    description: "Time sênior de profissionais certificados com vasta experiência em cibersegurança.",
    color: "from-green-500 to-teal-500",
    image: "/lovable-uploads/69d46bda-a946-4e2e-be14-8cb05f1bc3a9.png" // Team/expertise themed
  },
  {
    icon: Zap,
    title: "Tecnologia opensource para melhor custo-benefício",
    description: "Soluções eficientes sem custos de licenciamento, reduzindo o TCO em até 40%.",
    color: "from-orange-500 to-security-red",
    image: "/lovable-uploads/c1957844-81b6-4e34-adcf-7ae6f096b135.png" // Technology/performance themed
  }
];

const Benefits = () => {
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

  const getColorClasses = (color: string) => {
    const colorMap = {
      'from-security-blue to-cyan-500': 'bg-security-blue',
      'from-purple-500 to-security-blue': 'bg-purple-500',
      'from-green-500 to-teal-500': 'bg-green-500',
      'from-orange-500 to-security-red': 'bg-orange-500'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-security-blue';
  };

  return (
    <section id="beneficios" ref={sectionRef} className={`bg-white relative overflow-hidden ${isMobile ? 'py-12' : 'py-20'}`}>
      {/* Enhanced Background decoration with digital elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-security-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-security-red rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003366' fill-opacity='0.1'%3E%3Cpath d='M20 20h20v20H20V20zm-20 0h20v20H0V20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

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
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className={`section-title text-security-blue ${isMobile ? 'text-2xl' : ''}`}>
            Por que escolher nosso SOC 24x7
          </h2>
          <p className={`text-gray-600 max-w-3xl mx-auto ${
            isMobile 
              ? 'text-base leading-normal' 
              : 'text-lg'
          }`}>
            Oferecemos proteção completa contra ameaças cibernéticas com foco em agilidade, 
            eficiência e personalizada para as necessidades do seu negócio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitItems.map((item, index) => (
            <div 
              key={index} 
              className={`reveal-on-scroll group security-card flex flex-col items-center text-center hover:transform hover:scale-105 hover:shadow-xl hover:shadow-security-blue/20 transition-all duration-500 hover-lift card-3d ${
                isMobile ? 'p-6' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-500`}></div>
              
              <div className={`relative mb-6 ${isMobile ? 'mb-4' : 'mb-6'}`}>
                <div className={`relative ${isMobile ? 'w-20 h-20' : 'w-24 h-24'} rounded-full bg-gradient-to-br ${item.color} p-0.5 group-hover:scale-110 transition-all duration-300`}>
                  <div className={`w-full h-full bg-white rounded-full flex items-center justify-center relative overflow-hidden group-hover:transform group-hover:rotate-6 transition-transform duration-300`}>
                    {/* Sempre usar imagem, tanto no mobile quanto no desktop */}
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-10 h-10 object-cover rounded-full relative z-10 group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback para ícone se a imagem não carregar
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const iconContainer = target.nextElementSibling as HTMLElement;
                        if (iconContainer) iconContainer.style.display = 'block';
                      }}
                    />
                    
                    {/* Ícone como fallback (oculto por padrão) */}
                    <div className="hidden relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <item.icon size={isMobile ? 32 : 40} className="text-gray-700" />
                    </div>
                    
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300`}></div>
                    
                    <div className={`absolute inset-0 rounded-full border-2 border-transparent group-hover:border-current opacity-0 group-hover:opacity-30 animate-pulse`} style={{
                      borderColor: item.color.includes('security-blue') ? '#003366' : 
                                  item.color.includes('purple') ? '#8b5cf6' : 
                                  item.color.includes('green') ? '#10b981' : 
                                  '#f97316'
                    }}></div>
                  </div>
                  
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-sm animate-pulse`}></div>
                </div>
              </div>
              
              <h3 className={`font-montserrat font-semibold mb-3 text-security-blue group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300 ${
                isMobile ? 'text-lg' : 'text-xl'
              }`} style={{
                background: item.color.includes('security-blue') ? 'linear-gradient(135deg, #003366, #06b6d4)' : 
                          item.color.includes('purple') ? 'linear-gradient(135deg, #8b5cf6, #003366)' : 
                          item.color.includes('green') ? 'linear-gradient(135deg, #10b981, #14b8a6)' : 
                          'linear-gradient(135deg, #f97316, #DC267F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {item.title}
              </h3>
              
              <p className={`text-gray-600 relative z-10 ${
                isMobile ? 'text-sm leading-relaxed' : ''
              }`}>
                {item.description}
              </p>

              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:shadow-xl`}>
                  <span className="text-white text-sm animate-pulse">→</span>
                </div>
              </div>

              <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-security-blue/20 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
