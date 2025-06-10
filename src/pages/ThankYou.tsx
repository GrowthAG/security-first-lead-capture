
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, Clock, CheckCircle, ArrowDown } from 'lucide-react';

const ThankYou = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const location = useLocation();
  const userName = location.state?.userName || '';

  return (
    <div className="min-h-screen py-2 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          {/* Header compacto */}
          <div className="bg-white rounded-lg shadow-lg p-3 mb-3 text-center">
            <div className="flex justify-center mb-2">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <h1 className="text-lg font-bold text-security-blue mb-1">
              {userName ? `🎉 Perfeito, ${userName}!` : '🎉 Perfeito!'} 
            </h1>
            <p className="text-sm text-gray-600">Sua solicitação foi recebida</p>
          </div>

          {/* CTA principal */}
          <div className="bg-gradient-to-r from-security-red to-red-600 text-white p-4 rounded-lg mb-3 text-center">
            <div className="flex items-center justify-center mb-2">
              <Calendar className="w-6 h-6 mr-2" />
              <span className="text-xl font-bold">AGENDE AGORA</span>
            </div>
            <p className="text-sm opacity-95 mb-2">
              👇 Escolha seu horário abaixo
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm">
              <span>⏰ 30min</span>
              <span>🆓 Gratuito</span>
              <span>📊 Relatório 24h</span>
            </div>
          </div>

          {/* Calendário GoHighLevel otimizado */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
            <div className="bg-security-blue text-white p-3 text-center">
              <h2 className="text-base font-bold">📅 Selecione Data e Horário</h2>
            </div>
            
            <div className="p-2">
              <div className="calendar-container">
                <iframe 
                  src="https://app.gohighlevel.com/widget/bookings/securityfirst-diagnostico" 
                  width="100%" 
                  height="800" 
                  style={{ 
                    border: 'none', 
                    overflow: 'hidden',
                    borderRadius: '6px'
                  }} 
                  scrolling="no" 
                  frameBorder="0"
                  allowFullScreen
                  ref={iframeRef}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Confirmação */}
          <div className="text-center mb-4">
            <div className="bg-white rounded-lg shadow p-3">
              <p className="text-sm text-gray-700 font-medium">
                ✅ <span className="text-security-red">Após agendar:</span> Você receberá confirmação por e-mail
              </p>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center">
            <div className="bg-white/95 rounded-lg shadow p-3">
              <img 
                src="/lovable-uploads/359006b6-e80f-4854-9503-167db1c6429d.png" 
                alt="Security First Logo" 
                className="h-6 mx-auto mb-1" 
              />
              <p className="text-xs text-gray-500">Security First - Proteção que você pode confiar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
