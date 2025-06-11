
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

    // Auto resize melhorado para garantir que todo o conteúdo apareça
    const handleMessage = (event) => {
      if (event.origin !== 'https://api.leadconnectorhq.com') return;
      
      if (event.data?.type === "setHeight" && event.data?.height) {
        const iframe = document.getElementById("calendly-iframe") as HTMLIFrameElement;
        if (iframe) {
          // Adiciona um padding extra para garantir que nada seja cortado
          iframe.style.height = (event.data.height + 50) + "px";
        }
      }
    };

    window.addEventListener("message", handleMessage);

    // Força um refresh do iframe após o carregamento
    setTimeout(() => {
      const iframe = document.getElementById("calendly-iframe") as HTMLIFrameElement;
      if (iframe) {
        iframe.src = iframe.src;
      }
    }, 1000);

    return () => {
      // Cleanup: remover o script e event listener quando o componente for desmontado
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="min-h-screen py-1 gradient-bg">
      <div className="container mx-auto px-2">
        <div className="max-w-4xl mx-auto">
          {/* Header - Compacto */}
          <div className="bg-white rounded-lg shadow-lg p-3 mb-3 text-center">
            <div className="flex justify-center mb-2">
              <div className="bg-green-100 p-1.5 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <h1 className="text-lg font-bold text-security-blue mb-1">
              {userName ? `🎉 Perfeito, ${userName}!` : '🎉 Perfeito!'} 
            </h1>
            <p className="text-sm text-gray-600 mb-2">Sua solicitação foi recebida com sucesso!</p>
            <p className="text-base text-security-red font-semibold">
              Agora é só agendar o melhor horário para falar com nossos especialistas.
            </p>
          </div>

          {/* CTA Principal - Compacto */}
          <div className="bg-gradient-to-r from-security-red to-red-600 text-white p-3 rounded-lg mb-3 text-center">
            <div className="flex items-center justify-center mb-2">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="text-lg font-bold">AGENDE AGORA</span>
            </div>
            <p className="text-sm opacity-95 mb-2">
              👇 Escolha seu horário no calendário abaixo
            </p>
            <div className="flex justify-center items-center space-x-3 text-xs">
              <span>⏰ 30min</span>
              <span>🆓 Gratuito</span>
              <span>📊 Relatório em 24h</span>
            </div>
          </div>

          {/* GoHighLevel Calendar - Mais espaço */}
          <div className="bg-white rounded-lg shadow-lg p-0.5 mb-3">
            <iframe 
              id="calendly-iframe"
              src="https://api.leadconnectorhq.com/widget/booking/aEhg9U7IoYjD9J0xdGKH" 
              style={{
                width: '100%', 
                minHeight: '1100px', 
                height: 'auto',
                border: 'none', 
                overflow: 'visible'
              }} 
              scrolling="yes"
              allow="fullscreen"
            />
          </div>

          {/* Urgência - Compacto */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-2 mb-3">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-lg">⚠️</span>
              </div>
              <div className="ml-2">
                <p className="text-xs text-yellow-700">
                  <strong>Importante:</strong> As vagas para diagnóstico gratuito são limitadas. 
                  Agende hoje mesmo para garantir sua avaliação.
                </p>
              </div>
            </div>
          </div>
          
          {/* Footer - Compacto */}
          <div className="text-center">
            <div className="bg-white/95 rounded-lg shadow p-2">
              <img 
                src="/lovable-uploads/359006b6-e80f-4854-9503-167db1c6429d.png" 
                alt="Security First Logo" 
                className="h-5 mx-auto mb-1" 
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
