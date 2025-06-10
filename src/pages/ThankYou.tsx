
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const ThankYou = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const location = useLocation();
  const userName = location.state?.userName || '';

  useEffect(() => {
    // Load the script dynamically
    const script = document.createElement('script');
    script.src = "https://api.leadconnectorhq.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen py-8 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header com mensagem de sucesso */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-security-blue mb-3">
              {userName ? `🎉 Perfeito, ${userName}!` : '🎉 Perfeito!'} Sua solicitação foi recebida
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Quase lá! Agora é só escolher o melhor horário para o seu <span className="font-semibold text-security-red">diagnóstico gratuito</span>.
            </p>
            
            {/* CTA destacado */}
            <div className="bg-gradient-to-r from-security-red to-red-600 text-white p-4 rounded-lg mb-4">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 mr-2" />
                <span className="text-xl font-bold">Agende Agora Seu Diagnóstico</span>
              </div>
              <p className="text-sm opacity-90">
                ⏰ Disponível hoje • 🆓 100% gratuito • 📊 Relatório em 24h
              </p>
            </div>

            {/* Benefícios rápidos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center justify-center p-3 bg-blue-50 rounded-lg">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Apenas 30 minutos</span>
              </div>
              <div className="flex items-center justify-center p-3 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                <span className="text-sm font-medium text-green-700">Sem compromisso</span>
              </div>
              <div className="flex items-center justify-center p-3 bg-orange-50 rounded-lg">
                <Calendar className="w-5 h-5 mr-2 text-orange-600" />
                <span className="text-sm font-medium text-orange-700">Horários flexíveis</span>
              </div>
            </div>
          </div>

          {/* Calendário em destaque */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-security-blue text-white p-4 text-center">
              <h2 className="text-xl font-bold">📅 Escolha seu horário preferido</h2>
              <p className="text-sm opacity-90 mt-1">Nossos especialistas estão prontos para atendê-lo</p>
            </div>
            
            <div className="p-4">
              <div className="calendar-container">
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/aEhg9U7IoYjD9J0xdGKH" 
                  style={{ 
                    width: '100%', 
                    border: 'none', 
                    overflow: 'hidden', 
                    minHeight: '700px',
                    borderRadius: '8px'
                  }} 
                  scrolling="no" 
                  id="aEhg9U7IoYjD9J0xdGKH_1745871964043"
                  ref={iframeRef}
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* Footer com logo */}
          <div className="mt-8 text-center">
            <div className="bg-white rounded-lg shadow-lg p-4 inline-block">
              <img 
                src="/lovable-uploads/359006b6-e80f-4854-9503-167db1c6429d.png" 
                alt="Security First Logo" 
                className="h-12 mx-auto" 
              />
              <p className="text-xs text-gray-500 mt-2">Security First - Proteção que você pode confiar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
