
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

    // Auto resize para evitar corte de conteúdo
    const handleMessage = (event) => {
      if (event.data?.type === "setHeight" && event.data?.height) {
        const iframe = document.getElementById("calendly-iframe");
        if (iframe) {
          iframe.style.height = event.data.height + "px";
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      // Cleanup: remover o script e event listener quando o componente for desmontado
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="min-h-screen py-2 gradient-bg">
      <div className="container mx-auto px-2">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4 text-center">
            <div className="flex justify-center mb-3">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h1 className="text-xl font-bold text-security-blue mb-2">
              {userName ? `🎉 Perfeito, ${userName}!` : '🎉 Perfeito!'} 
            </h1>
            <p className="text-gray-600 mb-3">Sua solicitação foi recebida com sucesso!</p>
            <p className="text-lg text-security-red font-semibold">
              Agora é só agendar o melhor horário para falar com nossos especialistas.
            </p>
          </div>

          {/* CTA Principal */}
          <div className="bg-gradient-to-r from-security-red to-red-600 text-white p-4 rounded-lg mb-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <Calendar className="w-6 h-6 mr-2" />
              <span className="text-xl font-bold">AGENDE AGORA</span>
            </div>
            <p className="text-base opacity-95 mb-3">
              👇 Escolha seu horário no calendário abaixo
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm">
              <span>⏰ 30min</span>
              <span>🆓 Gratuito</span>
              <span>📊 Relatório em 24h</span>
            </div>
          </div>

          {/* GoHighLevel Calendar */}
          <div className="bg-white rounded-lg shadow-lg p-2 mb-4">
            <iframe 
              id="calendly-iframe"
              src="https://api.leadconnectorhq.com/widget/booking/aEhg9U7IoYjD9J0xdGKH" 
              style={{width: '100%', minHeight: '800px', border: 'none', overflow: 'hidden'}} 
              scrolling="no"
            />
          </div>

          {/* Urgência */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-xl">⚠️</span>
              </div>
              <div className="ml-2">
                <p className="text-sm text-yellow-700">
                  <strong>Importante:</strong> As vagas para diagnóstico gratuito são limitadas. 
                  Agende hoje mesmo para garantir sua avaliação.
                </p>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center">
            <div className="bg-white/95 rounded-lg shadow p-3">
              <img 
                src="/lovable-uploads/359006b6-e80f-4854-9503-167db1c6429d.png" 
                alt="Security First Logo" 
                className="h-6 mx-auto mb-2" 
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
