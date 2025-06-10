
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, Clock, CheckCircle, ArrowDown } from 'lucide-react';

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
    <div className="min-h-screen py-4 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header com mensagem de sucesso - mais compacto */}
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4 text-center">
            <div className="flex justify-center mb-3">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-security-blue mb-2">
              {userName ? `🎉 Perfeito, ${userName}!` : '🎉 Perfeito!'} Sua solicitação foi recebida
            </h1>
            <p className="text-base text-gray-700 mb-3">
              🎯 Quase lá! Agora é só escolher o melhor horário para o seu <span className="font-semibold text-security-red">diagnóstico gratuito</span>.
            </p>
            
            {/* CTA destacado - mais compacto */}
            <div className="bg-gradient-to-r from-security-red to-red-600 text-white p-3 rounded-lg mb-3">
              <div className="flex items-center justify-center mb-1">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="text-lg font-bold">👇 Agende Agora Seu Diagnóstico</span>
              </div>
              <p className="text-xs opacity-90">
                ⏰ Disponível hoje • 🆓 100% gratuito • 📊 Relatório em 24h
              </p>
            </div>

            {/* Benefícios rápidos - mais compacto */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3">
              <div className="flex items-center justify-center p-2 bg-blue-50 rounded-lg">
                <Clock className="w-4 h-4 mr-1 text-blue-600" />
                <span className="text-xs font-medium text-blue-700">Apenas 30 min</span>
              </div>
              <div className="flex items-center justify-center p-2 bg-green-50 rounded-lg">
                <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
                <span className="text-xs font-medium text-green-700">Sem compromisso</span>
              </div>
              <div className="flex items-center justify-center p-2 bg-orange-50 rounded-lg">
                <Calendar className="w-4 h-4 mr-1 text-orange-600" />
                <span className="text-xs font-medium text-orange-700">Horários flexíveis</span>
              </div>
            </div>

            {/* Seta indicativa */}
            <div className="flex justify-center">
              <ArrowDown className="w-6 h-6 text-security-red animate-bounce" />
            </div>
          </div>

          {/* Calendário em destaque - tamanho reduzido */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-security-blue text-white p-3 text-center">
              <h2 className="text-lg font-bold">📅 Escolha seu horário preferido</h2>
              <p className="text-xs opacity-90 mt-1">Clique no calendário abaixo para selecionar data e horário</p>
            </div>
            
            <div className="p-2">
              <div className="calendar-container bg-gray-50 rounded-lg p-2">
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/aEhg9U7IoYjD9J0xdGKH" 
                  style={{ 
                    width: '100%', 
                    border: 'none', 
                    overflow: 'hidden', 
                    minHeight: '500px',
                    maxHeight: '600px',
                    borderRadius: '8px'
                  }} 
                  scrolling="no" 
                  id="aEhg9U7IoYjD9J0xdGKH_1745871964043"
                  ref={iframeRef}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Instrução adicional */}
          <div className="mt-4 text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 inline-block">
              <p className="text-sm text-gray-700 font-medium">
                💡 <span className="text-security-red">Dica:</span> Após escolher o horário, você receberá um e-mail de confirmação
              </p>
            </div>
          </div>
          
          {/* Footer com logo - mais compacto */}
          <div className="mt-6 text-center">
            <div className="bg-white rounded-lg shadow-lg p-3 inline-block">
              <img 
                src="/lovable-uploads/359006b6-e80f-4854-9503-167db1c6429d.png" 
                alt="Security First Logo" 
                className="h-8 mx-auto" 
              />
              <p className="text-xs text-gray-500 mt-1">Security First - Proteção que você pode confiar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
