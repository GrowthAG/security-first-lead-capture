
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
    <div className="min-h-screen py-2 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header compacto com CTA direto */}
          <div className="bg-white rounded-lg shadow-lg p-3 mb-3 text-center">
            <div className="flex justify-center mb-2">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <h1 className="text-lg md:text-xl font-bold text-security-blue mb-2">
              {userName ? `🎉 Perfeito, ${userName}!` : '🎉 Perfeito!'} Sua solicitação foi recebida
            </h1>
            
            {/* CTA principal mais destacado */}
            <div className="bg-gradient-to-r from-security-red to-red-600 text-white p-4 rounded-lg mb-3">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 mr-2" />
                <span className="text-xl font-bold">👇 AGENDE SEU DIAGNÓSTICO GRATUITO</span>
              </div>
              <p className="text-sm opacity-95 mb-2">
                🎯 Quase lá! Escolha o melhor horário abaixo
              </p>
              <div className="flex justify-center items-center space-x-4 text-xs">
                <span>⏰ Apenas 30 min</span>
                <span>🆓 100% gratuito</span>
                <span>📊 Relatório em 24h</span>
              </div>
            </div>

            {/* Seta indicativa */}
            <div className="flex justify-center">
              <ArrowDown className="w-5 h-5 text-security-red animate-bounce" />
            </div>
          </div>

          {/* Calendário mais compacto */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-security-blue text-white p-2 text-center">
              <h2 className="text-base font-bold">📅 Clique para escolher data e horário</h2>
            </div>
            
            <div className="p-1">
              <div className="calendar-container bg-gray-50 rounded-lg p-1">
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/aEhg9U7IoYjD9J0xdGKH" 
                  style={{ 
                    width: '100%', 
                    border: 'none', 
                    overflow: 'hidden', 
                    height: '400px', // Reduzido significativamente
                    borderRadius: '8px'
                  }} 
                  scrolling="no" 
                  id="aEhg9U7IoYjD9J0xdGKH_1745871964043"
                  ref={iframeRef}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Instrução de confirmação */}
          <div className="mt-3 text-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 inline-block">
              <p className="text-sm text-gray-700 font-medium">
                ✅ <span className="text-security-red">Confirmação:</span> Você receberá um e-mail após escolher o horário
              </p>
            </div>
          </div>
          
          {/* Footer com logo compacto */}
          <div className="mt-4 text-center">
            <div className="bg-white/90 rounded-lg shadow-lg p-2 inline-block">
              <img 
                src="/lovable-uploads/359006b6-e80f-4854-9503-167db1c6429d.png" 
                alt="Security First Logo" 
                className="h-6 mx-auto" 
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
