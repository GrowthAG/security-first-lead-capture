
import React, { useState } from 'react';
import { MessageCircle, X, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-80 bg-gray-800 border border-cyan-500/30 rounded-2xl shadow-2xl z-50 animate-scale-in">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Headphones className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Especialista Online</div>
                  <div className="text-white/80 text-xs">Resposta em segundos</div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="p-4 space-y-3">
            <div className="bg-gray-700/50 rounded-lg p-3">
              <div className="text-white text-sm font-medium mb-1">🛡️ SOC Specialist</div>
              <div className="text-gray-300 text-sm">
                Olá! Sou especialista em SOC. Como posso ajudar você a proteger sua empresa hoje?
              </div>
            </div>
            
            <div className="space-y-2">
              <button className="w-full text-left bg-gray-700/30 hover:bg-gray-700/50 rounded-lg p-3 transition-colors text-sm text-gray-300 hover:text-white">
                💼 Quero um diagnóstico gratuito
              </button>
              <button className="w-full text-left bg-gray-700/30 hover:bg-gray-700/50 rounded-lg p-3 transition-colors text-sm text-gray-300 hover:text-white">
                ⚡ Preciso de proteção urgente
              </button>
              <button className="w-full text-left bg-gray-700/30 hover:bg-gray-700/50 rounded-lg p-3 transition-colors text-sm text-gray-300 hover:text-white">
                📊 Ver demo do SOC
              </button>
            </div>
            
            <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-white">
              Iniciar Conversa
            </Button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 group relative"
        >
          <MessageCircle className="w-6 h-6" />
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          
          {/* Pulse Effect */}
          <div className="absolute inset-0 rounded-full bg-cyan-500/30 animate-ping group-hover:animate-none"></div>
        </button>
      </div>
    </>
  );
};

export default FloatingChat;
