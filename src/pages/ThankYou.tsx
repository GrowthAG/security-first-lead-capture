
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, CheckCircle, ArrowLeft, Clock, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header com navegação */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao site
            </Button>
            <img 
              src="/lovable-uploads/359006b6-e80f-4854-9503-167db1c6429d.png" 
              alt="Security First Logo" 
              className="h-8" 
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Success Message - Mais compacto */}
          <div className="text-center mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {userName ? `🎉 Perfeito, ${userName}!` : '🎉 Dados recebidos com sucesso!'} 
              </h1>
              <p className="text-gray-600 mb-4">
                Agora é só escolher o melhor horário para sua consultoria gratuita
              </p>
              
              {/* CTA Principal */}
              <div className="bg-gradient-to-r from-security-red to-red-600 text-white p-4 rounded-xl">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="w-6 h-6 mr-2" />
                  <span className="text-xl font-bold">AGENDE SUA CONSULTORIA</span>
                </div>
                <div className="flex justify-center items-center space-x-6 text-sm">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    30 minutos
                  </span>
                  <span className="flex items-center">
                    <Shield className="w-4 h-4 mr-1" />
                    100% gratuito
                  </span>
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    Especialistas
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Section - Centralizado e destacado */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 text-center">
              <h2 className="text-lg font-semibold">Escolha seu horário preferido</h2>
              <p className="text-blue-100 text-sm">Selecione o dia e horário que melhor funciona para você</p>
            </div>
            
            <div className="p-1">
              <iframe 
                id="calendly-iframe"
                src="https://api.leadconnectorhq.com/widget/booking/aEhg9U7IoYjD9J0xdGKH" 
                style={{
                  width: '100%', 
                  minHeight: '700px', 
                  height: 'auto',
                  border: 'none', 
                  overflow: 'visible'
                }} 
                scrolling="yes"
                allow="fullscreen"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Benefícios - Grid responsivo */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Relatório em 24h</h3>
              <p className="text-sm text-gray-600">Análise completa da sua infraestrutura de segurança</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sem Compromisso</h3>
              <p className="text-sm text-gray-600">Consultoria totalmente gratuita, sem obrigações</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Especialistas</h3>
              <p className="text-sm text-gray-600">Consultores certificados em cibersegurança</p>
            </div>
          </div>

          {/* Urgência e Tranquilidade */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Vagas Limitadas</h4>
                <p className="text-sm text-yellow-700 mb-3">
                  Temos disponibilidade limitada para diagnósticos gratuitos este mês. 
                  Reserve seu horário agora para garantir sua avaliação.
                </p>
                <div className="flex items-center text-xs text-yellow-600">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span>Sem compromisso • Pode remarcar • Totalmente gratuito</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur rounded-xl shadow p-4 inline-block">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Security First</strong> - Proteção que você pode confiar
              </p>
              <p className="text-xs text-gray-500">
                🔒 Seus dados estão protegidos • 📞 Suporte especializado • ⭐ +500 empresas protegidas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
