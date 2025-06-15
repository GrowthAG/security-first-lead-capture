
import React, { useEffect, useRef } from 'react';
import { CheckCircle, Star, Award } from 'lucide-react';

const TrustSection = () => {
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

  const milestones = [
    {
      year: "2018",
      title: "Fundação",
      description: "Início das operações com foco em SOC especializado"
    },
    {
      year: "2020",
      title: "Certificação ISO 27001",
      description: "Conquista da certificação internacional de segurança"
    },
    {
      year: "2022",
      title: "IA Implementada",
      description: "Integração de machine learning nos processos de detecção"
    },
    {
      year: "2024",
      title: "300+ Empresas",
      description: "Marco de 300 empresas protegidas simultaneamente"
    }
  ];

  const partners = [
    { name: "Microsoft", logo: "/lovable-uploads/359006b6-e80f-4854-9503-167db1c6429d.png" },
    { name: "Wazuh", logo: "/lovable-uploads/359006b6-e80f-4854-9503-167db1c6429d.png" },
    { name: "Sentinel", logo: "/lovable-uploads/359006b6-e80f-4854-9503-167db1c6429d.png" },
    { name: "Elastic", logo: "/lovable-uploads/359006b6-e80f-4854-9503-167db1c6429d.png" }
  ];

  return (
    <section id="confianca" ref={sectionRef} className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Timeline */}
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossa Jornada de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Excelência</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Anos de evolução constante em cibersegurança, sempre um passo à frente das ameaças
          </p>
        </div>

        <div className="mb-20 reveal-on-scroll">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="text-cyan-400 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300 text-sm">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-800 flex-shrink-0">
                    <div className="absolute inset-0 bg-cyan-500 rounded-full animate-pulse"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="text-center mb-12 reveal-on-scroll">
          <h3 className="text-2xl font-bold text-white mb-4">Tecnologias e Parcerias</h3>
          <p className="text-gray-300">Integramos com as melhores ferramentas do mercado</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 reveal-on-scroll">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-700/30 backdrop-blur-sm border border-gray-600 rounded-xl p-6 flex items-center justify-center hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto reveal-on-scroll">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl text-gray-200 mb-6 italic">
                "Implementamos o SOC da Security First há 2 anos e desde então nossa postura de segurança se transformou completamente. 
                A detecção precoce e resposta rápida nos pouparam de pelo menos 3 incidentes que poderiam ter sido catastróficos."
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JL</span>
                </div>
                <div>
                  <div className="text-white font-semibold">João Lima</div>
                  <div className="text-gray-400 text-sm">CTO, TechCorp Brasil</div>
                </div>
                <div className="ml-auto">
                  <Award className="w-8 h-8 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
