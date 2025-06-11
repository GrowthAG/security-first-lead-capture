
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, CheckCircle } from 'lucide-react';

const ThankYou = () => {
  const location = useLocation();
  const userName = location.state?.userName || '';

  useEffect(() => {
    // Carregar o script do GoHighLevel
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remover o script quando o componente for desmontado
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen py-4 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-security-blue mb-2">
              {userName ? `🎉 Perfeito, ${userName}!` : '🎉 Perfeito!'} 
            </h1>
            <p className="text-gray-600 mb-4">Sua solicitação foi recebida com sucesso!</p>
            <p className="text-lg text-security-red font-semibold">
              Agora é só agendar o melhor horário para falar com nossos especialistas.
            </p>
          </div>

          {/* CTA Principal */}
          <div className="bg-gradient-to-r from-security-red to-red-600 text-white p-6 rounded-lg mb-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 mr-3" />
              <span className="text-2xl font-bold">AGENDE AGORA</span>
            </div>
            <p className="text-lg opacity-95 mb-4">
              👇 Escolha seu horário no calendário abaixo
            </p>
            <div className="flex justify-center items-center space-x-6 text-lg">
              <span>⏰ 30min</span>
              <span>🆓 Gratuito</span>
              <span>📊 Relatório em 24h</span>
            </div>
          </div>

          {/* GoHighLevel Calendar */}
          <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/aEhg9U7IoYjD9J0xdGKH" 
              style={{width: '100%', height: '950px', border: 'none', overflow: 'hidden'}} 
              scrolling="no" 
              id="aEhg9U7IoYjD9J0xdGKH_1749600345326"
            />
          </div>

          {/* Urgência */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-2xl">⚠️</span>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Importante:</strong> As vagas para diagnóstico gratuito são limitadas. 
                  Agende hoje mesmo para garantir sua avaliação.
                </p>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center">
            <div className="bg-white/95 rounded-lg shadow p-4">
              <img 
                src="/lovable-uploads/359006b6-e80f-4854-9503-167db1c6429d.png" 
                alt="Security First Logo" 
                className="h-8 mx-auto mb-2" 
              />
              <p className="text-sm text-gray-500">Security First - Proteção que você pode confiar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
