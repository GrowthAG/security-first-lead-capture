
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, Clock, CheckCircle, ArrowDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThankYou = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const location = useLocation();
  const userName = location.state?.userName || '';
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Mostrar botão de fallback após 5 segundos se o iframe não carregar
    const timer = setTimeout(() => {
      if (!iframeLoaded) {
        setShowFallback(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [iframeLoaded]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    setShowFallback(false);
  };

  const openCalendarInNewTab = () => {
    window.open('https://app.gohighlevel.com/widget/bookings/securityfirst-diagnostico', '_blank');
  };

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

          {/* Botão de fallback - sempre visível inicialmente */}
          <div className="mb-4">
            <Button 
              onClick={openCalendarInNewTab}
              className="w-full bg-security-red hover:bg-red-600 text-white py-4 text-lg font-bold"
              size="lg"
            >
              <Calendar className="w-6 h-6 mr-2" />
              AGENDAR AGORA
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <p className="text-center text-sm text-gray-600 mt-2">
              Clique para abrir o calendário de agendamento
            </p>
          </div>

          {/* Calendário GoHighLevel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
            <div className="bg-security-blue text-white p-3 text-center">
              <h2 className="text-base font-bold">📅 Ou agende diretamente aqui</h2>
            </div>
            
            <div className="p-2">
              <div className="calendar-container">
                <iframe 
                  src="https://app.gohighlevel.com/widget/bookings/securityfirst-diagnostico" 
                  width="100%" 
                  height="600" 
                  style={{ 
                    border: 'none', 
                    overflow: 'hidden',
                    borderRadius: '6px'
                  }} 
                  scrolling="no" 
                  frameBorder="0"
                  allowFullScreen
                  ref={iframeRef}
                  onLoad={handleIframeLoad}
                ></iframe>
              </div>
              
              {/* Indicador de carregamento */}
              {!iframeLoaded && (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-security-blue"></div>
                  <span className="ml-2 text-gray-600">Carregando calendário...</span>
                </div>
              )}
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
