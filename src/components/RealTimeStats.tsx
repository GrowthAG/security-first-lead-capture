
import React from 'react';
import { Shield, Zap, Activity, TrendingUp } from 'lucide-react';
import Card3D from './Card3D';
import { useIsMobile } from '@/hooks/use-mobile';

const RealTimeStats = () => {
  const isMobile = useIsMobile();

  const stats = [
    {
      icon: Shield,
      label: "Proteção Avançada",
      value: "24/7",
      trend: "Ativo",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Activity,
      label: "Monitoramento",
      value: "Contínuo",
      trend: "Online",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Zap,
      label: "Tempo de Resposta",
      value: "15min",
      trend: "Rápido",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: TrendingUp,
      label: "SOC Especializado",
      value: "Expert",
      trend: "Ativo",
      color: "text-security-red",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto perspective-1000">
      {stats.map((stat, index) => (
        <Card3D key={index} intensity={isMobile ? 0.3 : 0.6} className="transform-gpu">
          <div
            className={`${stat.bgColor} ${stat.borderColor} rounded-xl p-4 border hover:border-gray-300 transition-all duration-300 hover:scale-102 hover:shadow-lg group stats-card-mobile-optimized relative overflow-hidden`}
            style={{
              transformStyle: 'preserve-3d',
              animation: isMobile 
                ? `mobileSubtleFloat ${8 + index * 0.5}s ease-in-out infinite`
                : `subtleFloat ${6 + index * 0.5}s ease-in-out infinite`,
              animationDelay: `${index * 0.2}s`
            }}
          >
            {/* Subtle background gradient */}
            <div className="absolute inset-0 opacity-5 rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
            </div>

            {/* Gentle hover effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-current/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <div className={isMobile ? "mobile-gentle-icon" : "gentle-icon-3d"}>
                  <stat.icon className={`w-5 h-5 ${stat.color} group-hover:scale-110 transition-all duration-300`} />
                </div>
                <span className={`text-xs font-medium ${stat.color} bg-white/50 backdrop-blur-sm px-2 py-1 rounded-full group-hover:bg-white/70 transition-all duration-300`}>
                  {stat.trend}
                </span>
              </div>
              <div className={`text-2xl font-bold text-gray-900 mb-1 transition-colors duration-300`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                {stat.label}
              </div>
            </div>

            {/* Subtle depth layers - only on desktop */}
            {!isMobile && (
              <div className="absolute -inset-1 rounded-xl border border-current/3 transform translateZ(-2px) group-hover:border-current/8 transition-all duration-300"></div>
            )}
          </div>
        </Card3D>
      ))}
    </div>
  );
};

export default RealTimeStats;
