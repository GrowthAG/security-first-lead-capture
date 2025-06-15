
import React, { useEffect, useRef } from 'react';
import { Shield, Users, Code, Zap } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const benefitItems = [
  {
    icon: Shield,
    title: "SOC 24x7 sem cobrança por PPS",
    description: "Monitoramento contínuo sem custos adicionais por evento, garantindo previsibilidade orçamentária.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Code,
    title: "Integração com qualquer dispositivo IP",
    description: "Compatibilidade total com sua infraestrutura existente, sem necessidade de trocas de equipamentos.",
    color: "from-purple-500 to-blue-500"
  },
  {
    icon: Users,
    title: "Especialistas com mais de 20 anos de mercado",
    description: "Time sênior de profissionais certificados com vasta experiência em cibersegurança.",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Zap,
    title: "Tecnologia opensource para melhor custo-benefício",
    description: "Soluções eficientes sem custos de licenciamento, reduzindo o TCO em até 40%.",
    color: "from-orange-500 to-red-500"
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

  return (
    <section id="beneficios" ref={sectionRef} className={`bg-white relative overflow-hidden ${isMobile ? 'py-12' : 'py-20'}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-security-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-security-red rounded-full blur-3xl"></div>
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
              className={`reveal-on-scroll group security-card flex flex-col items-center text-center hover:transform hover:scale-105 hover:shadow-xl transition-all duration-500 ${
                isMobile ? 'p-6' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-500`}></div>
              
              <div className={`relative mb-4 bg-gradient-to-br ${item.color} rounded-full p-1 ${
                isMobile ? 'p-1' : 'p-1'
              }`}>
                <div className={`bg-white rounded-full ${isMobile ? 'p-4' : 'p-3'} group-hover:transform group-hover:rotate-6 transition-transform duration-300`}>
                  <item.icon size={isMobile ? 36 : 32} className={`bg-gradient-to-br ${item.color} bg-clip-text text-transparent`} />
                </div>
              </div>
              
              <h3 className={`font-montserrat font-semibold mb-3 text-security-blue group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${item.color} transition-all duration-300 ${
                isMobile ? 'text-lg' : 'text-xl'
              }`}>
                {item.title}
              </h3>
              
              <p className={`text-gray-600 relative z-10 ${
                isMobile ? 'text-sm leading-relaxed' : ''
              }`}>
                {item.description}
              </p>

              {/* Hover effect indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <span className="text-white text-sm">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
