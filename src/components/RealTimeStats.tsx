
import React, { useState, useEffect } from 'react';
import { Shield, Zap, Activity, TrendingUp } from 'lucide-react';

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
      bgColor: "bg-green-50"
    },
    {
      icon: Activity,
      label: "Sistemas Monitorados",
      value: systemsMonitored.toLocaleString(),
      trend: "24/7",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Zap,
      label: "Tempo de Resposta",
      value: `${responseTime}s`,
      trend: "-3%",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: TrendingUp,
      label: "Eficiência do SOC",
      value: "99.7%",
      trend: "↑",
      color: "text-security-red",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.bgColor} rounded-xl p-4 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg group`}
        >
          <div className="flex items-center justify-between mb-2">
            <stat.icon className={`w-5 h-5 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
            <span className={`text-xs font-medium ${stat.color} bg-white/50 px-2 py-1 rounded-full`}>
              {stat.trend}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
          <div className="text-xs text-gray-600 leading-tight">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default RealTimeStats;
