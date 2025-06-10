
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThankYou = () => {
  const location = useLocation();
  const userName = location.state?.userName || '';

  const openCalendarInNewTab = () => {
    window.open('https://app.gohighlevel.com/widget/bookings/securityfirst-diagnostico', '_blank');
  };

  return (
    <div className="min-h-screen py-4 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
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
              👇 Clique no botão abaixo para escolher seu horário
            </p>
            <div className="flex justify-center items-center space-x-6 text-lg">
              <span>⏰ 30min</span>
              <span>🆓 Gratuito</span>
              <span>📊 Relatório em 24h</span>
            </div>
          </div>

          {/* Botão de Agendamento Principal */}
          <div className="mb-6">
            <Button 
              onClick={openCalendarInNewTab}
              className="w-full bg-security-red hover:bg-red-600 text-white py-6 text-xl font-bold"
              size="lg"
            >
              <Calendar className="w-8 h-8 mr-3" />
              AGENDAR MEU DIAGNÓSTICO
              <ExternalLink className="w-5 h-5 ml-3" />
            </Button>
            <p className="text-center text-sm text-gray-600 mt-3">
              * Clique para abrir o calendário de agendamento em uma nova aba
            </p>
          </div>

          {/* Benefícios do Agendamento */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-security-blue mb-4 text-center">
              O que acontece após o agendamento?
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-700">Confirmação automática por e-mail</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-700">Reunião com especialista em cibersegurança</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-700">Relatório personalizado em 24 horas</span>
              </div>
            </div>
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
