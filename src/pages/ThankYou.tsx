
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
    <div className="min-h-screen py-1 gradient-bg">
      <div className="container mx-auto px-2">
        <div className="max-w-2xl mx-auto">
          {/* Header ultra compacto */}
          <div className="bg-white rounded-lg shadow-lg p-2 mb-2 text-center">
            <div className="flex justify-center mb-1">
              <div className="bg-green-100 p-1 rounded-full">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <h1 className="text-base md:text-lg font-bold text-security-blue mb-1">
              {userName ? `🎉 Perfeito, ${userName}!` : '🎉 Perfeito!'} Sua solicitação foi recebida
            </h1>
          </div>

          {/* CTA principal super destacado */}
          <div className="bg-gradient-to-r from-security-red to-red-600 text-white p-3 rounded-lg mb-2 text-center">
            <div className="flex items-center justify-center mb-1">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="text-lg font-bold">👇 AGENDE AGORA SEU DIAGNÓSTICO</span>
            </div>
            <p className="text-sm opacity-95 mb-1">
              🎯 Quase lá! Escolha o melhor horário abaixo
            </p>
            <div className="flex justify-center items-center space-x-3 text-xs">
              <span>⏰ 30 min</span>
              <span>🆓 Gratuito</span>
              <span>📊 Relatório em 24h</span>
            </div>
          </div>

          {/* Calendário ultra compacto para aparecer na primeira dobra */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-security-blue text-white p-2 text-center">
              <h2 className="text-sm font-bold">📅 Clique para escolher data e horário</h2>
            </div>
            
            <div className="p-1">
              <div className="calendar-container bg-gray-50 rounded-lg">
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/aEhg9U7IoYjD9J0xdGKH" 
                  style={{ 
                    width: '100%', 
                    border: 'none', 
                    overflow: 'hidden', 
                    height: '300px', // Reduzido drasticamente para 300px
                    borderRadius: '8px'
                  }} 
                  scrolling="no" 
                  id="aEhg9U7IoYjD9J0xdGKH_1745871964043"
                  ref={iframeRef}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Instrução compacta */}
          <div className="mt-2 text-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-2 inline-block">
              <p className="text-xs text-gray-700 font-medium">
                ✅ <span className="text-security-red">Confirmação:</span> Você receberá um e-mail após escolher o horário
              </p>
            </div>
          </div>
          
          {/* Footer minimalista */}
          <div className="mt-3 text-center">
            <div className="bg-white/90 rounded-lg shadow-lg p-2 inline-block">
              <img 
                src="/lovable-uploads/359006b6-e80f-4854-9503-167db1c6429d.png" 
                alt="Security First Logo" 
                className="h-5 mx-auto" 
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
