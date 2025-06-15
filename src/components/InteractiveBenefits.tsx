
import React, { useEffect, useRef } from 'react';
import { Clock, Settings, Users, Shield, Zap, CheckCircle } from 'lucide-react';

const InteractiveBenefits = () => {
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

  const benefits = [
    {
      icon: Clock,
      title: "Redução de 90% em tempo de resposta",
      description: "Detecção e resposta automática em segundos, não horas",
      metric: "< 5 min",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Settings,
      title: "Integração com qualquer infraestrutura",
      description: "Compatível com Azure, AWS, Google Cloud e ambientes híbridos",
      metric: "100% compatível",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Time disponível 24h por dia",
      description: "Analistas especializados monitorando sua segurança continuamente",
      metric: "24/7/365",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Compliance com LGPD e ISO",
      description: "Atendimento a todas as normas de segurança e privacidade",
      metric: "100% compliant",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Zap,
      title: "IA Preditiva Avançada",
      description: "Machine learning que aprende e evolui com seu ambiente",
      metric: "99.9% precisão",
      color: "from-green-500 to-cyan-500"
    },
    {
      icon: CheckCircle,
      title: "ROI Comprovado",
      description: "Redução média de 75% nos custos com incidentes de segurança",
      metric: "75% economia",
      color: "from-yellow-500 to-green-500"
    }
  ];

  return (
    <section id="beneficios" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300bcd4' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Benefícios que <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Transformam</span> Negócios
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Resultados mensuráveis que impactam diretamente o crescimento e proteção da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="reveal-on-scroll group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="mb-4">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-2`}>
                      {benefit.metric}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Hover Effect Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <span className="text-cyan-400">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal-on-scroll">
          <div className="max-w-2xl mx-auto bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Resultado Comprovado
            </h3>
            <p className="text-gray-300 mb-6">
              Empresas que implementaram nosso SOC reportaram uma melhoria média de 85% na postura de segurança em apenas 30 dias.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">300+</div>
                <div className="text-gray-400 text-sm">Empresas Protegidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime Garantido</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">0</div>
                <div className="text-gray-400 text-sm">Incidentes Críticos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveBenefits;
