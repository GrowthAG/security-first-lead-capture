
import React, { useState } from 'react';
import { ChevronDown, Zap, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FormDialog from './FormDialog';

const ModernFAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Quanto tempo leva para implementar o SOC?",
      answer: "A implementação básica leva de 24 a 48 horas. Em uma semana, todo o ambiente está monitorado com alertas personalizados e dashboards funcionando. O onboarding é gradual para não impactar suas operações."
    },
    {
      question: "Como funciona a integração com nossa infraestrutura atual?",
      answer: "Nosso SOC se integra via APIs e conectores nativos com mais de 200 tecnologias diferentes. Suportamos Azure, AWS, Google Cloud, ambientes híbridos e on-premise. A integração é não-invasiva e reversível."
    },
    {
      question: "Qual o custo mensal do serviço?",
      answer: "O investimento varia conforme o tamanho da infraestrutura e nível de serviço. Oferecemos planos desde R$ 2.500/mês para pequenas empresas até soluções enterprise customizadas. O ROI médio é de 6 meses."
    },
    {
      question: "Vocês atendem empresas de que portes?",
      answer: "Atendemos desde startups com 20 colaboradores até multinacionais com mais de 10.000 funcionários. Nossa arquitetura escalável se adapta ao crescimento da sua empresa automaticamente."
    },
    {
      question: "Como é garantida a conformidade com LGPD?",
      answer: "Somos certificados ISO 27001 e nossos processos são auditados regularmente. Todos os dados ficam em servidores no Brasil, com criptografia end-to-end e logs de auditoria completos para demonstrar compliance."
    },
    {
      question: "E se houver um incidente crítico durante a madrugada?",
      answer: "Nosso SOC opera 24/7/365 com analistas presenciais. Em casos críticos, a resposta é automática em até 5 minutos, com notificação imediata para sua equipe via múltiplos canais (SMS, WhatsApp, chamada)."
    }
  ];

  return (
    <>
      <section id="faq" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L60.876 39.124L100 50L60.876 60.876L50 100L39.124 60.876L0 50L39.124 39.124z' fill='%2300bcd4' fill-opacity='0.1'/%3E%3C/svg%3E")`,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Frequentes</span>
              </h2>
              <p className="text-xl text-gray-300">
                Tire suas dúvidas sobre implementação, custos e funcionamento do nosso SOC
              </p>
            </div>

            <div className="space-y-4 mb-16">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-300"
                  >
                    <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-cyan-400 transition-transform duration-300 flex-shrink-0 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-4"></div>
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Enquanto você dorme, <span className="text-cyan-400">nosso SOC está em alerta</span>
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Não espere o primeiro incidente para agir. Proteja sua empresa agora.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    onClick={() => setIsFormOpen(true)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 group"
                  >
                    <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Solicite seu Diagnóstico Personalizado
                  </Button>
                  
                  <button className="text-cyan-400 hover:text-white transition-colors duration-300 font-medium flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar com especialista
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center max-w-lg mx-auto">
                <div>
                  <div className="text-cyan-400 text-sm font-medium">⚡ Resposta</div>
                  <div className="text-white font-bold">Imediata</div>
                </div>
                <div>
                  <div className="text-cyan-400 text-sm font-medium">🛡️ Proteção</div>
                  <div className="text-white font-bold">Total</div>
                </div>
                <div>
                  <div className="text-cyan-400 text-sm font-medium">📊 Relatório</div>
                  <div className="text-white font-bold">24h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default ModernFAQ;
