
import React, { useEffect, useRef } from 'react';

const ThankYou = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

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
    <div className="min-h-screen py-16 gradient-bg flex flex-col items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-security-blue mb-6">
            Obrigado! Sua solicitação foi recebida.
          </h1>
          <p className="text-xl text-center text-gray-700 mb-10">
            Agora é só agendar seu melhor horário com nossos especialistas.
          </p>
          
          <div className="calendar-container">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/aEhg9U7IoYjD9J0xdGKH" 
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }} 
              scrolling="no" 
              id="aEhg9U7IoYjD9J0xdGKH_1745871964043"
              ref={iframeRef}
            ></iframe>
          </div>
          
          <div className="mt-10 text-center">
            <img 
              src="/lovable-uploads/359006b6-e80f-4854-9503-167db1c6429d.png" 
              alt="Security First Logo" 
              className="h-12 mx-auto" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
