
import React, { useRef, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const Card3D: React.FC<Card3DProps> = ({ children, className = '', intensity = 1 }) => {
  const isMobile = useIsMobile();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile || !cardRef.current) return;

    const card = cardRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10 * intensity;
      const rotateY = ((x - centerX) / centerX) * 10 * intensity;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile, intensity]);

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-300 ease-out transform-gpu ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

export default Card3D;
