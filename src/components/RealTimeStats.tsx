
import React, { useState, useEffect } from 'react';
import { Shield, Zap, Activity, TrendingUp } from 'lucide-react';
import Card3D from './Card3D';

const RealTimeStats = () => {
  const [threatsBlocked, setThreatsBlocked] = useState(2847);
  const [systemsMonitored, setSystemsMonitored] = useState(12456);
  const [responseTime, setResponseTime] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time updates
      setThreatsBlocked(prev => prev + Math.floor(Math.random() * 3));
      if (Math.random() > 0.7) {
        setSystemsMonitored(prev => prev + Math.floor(Math.random() * 2));
      }
      if (Math.random() > 0.8) {
        setResponseTime(prev => Math.max(8, prev + (Math.random() > 0.5 ? 1 : -1)));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: Shield,
      label: "Ameaças Bloqueadas Hoje",
      value: threatsBlocked.toLocaleString(),
      trend: "+12%",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Activity,
      label: "Sistemas Monitorados",
      value: systemsMonitored.toLocaleString(),
      trend: "24/7",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Zap,
      label: "Tempo de Resposta",
      value: `${responseTime}s`,
      trend: "-3%",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: TrendingUp,
      label: "Eficiência do SOC",
      value: "99.7%",
      trend: "↑",
      color: "text-security-red",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto perspective-1000">
      {stats.map((stat, index) => (
        <Card3D key={index} intensity={1.2} className="transform-gpu">
          <div
            className={`${stat.bgColor} ${stat.borderColor} rounded-xl p-4 border hover:border-gray-300 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-current/20 group card-3d-hover mouse-3d relative overflow-hidden`}
            style={{
              transformStyle: 'preserve-3d',
              animation: `float3d ${8 + index}s ease-in-out infinite`,
              animationDelay: `${index * 0.5}s`
            }}
          >
            {/* Enhanced 3D Background Effect */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent transform rotate-12 scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-current/5 to-transparent transform -rotate-12 scale-110"></div>
            </div>

            {/* Holographic Border Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-current/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <div className="floating-icon-3d">
                  <stat.icon className={`w-5 h-5 ${stat.color} group-hover:scale-125 group-hover:drop-shadow-glow transition-all duration-500`} />
                </div>
                <span className={`text-xs font-medium ${stat.color} bg-white/60 backdrop-blur-sm px-2 py-1 rounded-full hover:bg-white/80 transition-all duration-300 group-hover:scale-110 transform-gpu`}>
                  {stat.trend}
                </span>
              </div>
              <div className={`text-2xl font-bold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-${stat.color.split('-')[1]}-600 group-hover:to-${stat.color.split('-')[1]}-800 transition-all duration-500`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                {stat.label}
              </div>
            </div>

            {/* Enhanced 3D Depth Indicators */}
            <div className="absolute -inset-2 rounded-xl border border-current/5 transform translateZ(-5px) group-hover:border-current/15 transition-all duration-500"></div>
            <div className="absolute -inset-4 rounded-xl border border-current/3 transform translateZ(-10px) group-hover:border-current/8 transition-all duration-500"></div>
          </div>
        </Card3D>
      ))}
    </div>
  );
};

export default RealTimeStats;
