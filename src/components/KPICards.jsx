import React from 'react';
import { TrendingUp, TrendingDown, Clock, Users, AlertTriangle, BookOpen } from 'lucide-react';

const KPICards = ({ kpiData }) => {
  const kpis = [
    {
      title: 'Total Cases',
      value: kpiData.totalCases.toLocaleString(),
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Avg Resolution Time',
      value: `${kpiData.avgResolutionTime} days`,
      change: '-26%',
      trend: 'down',
      icon: Clock,
      color: 'green'
    },
    {
      title: 'Customer Satisfaction',
      value: `${kpiData.customerSatisfaction}/5.0`,
      change: '+8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'Escalation Rate',
      value: `${kpiData.escalationRate}%`,
      change: '-15%',
      trend: 'down',
      icon: AlertTriangle,
      color: 'orange'
    },
    {
      title: 'Fragility Score',
      value: `${kpiData.fragilityScore}%`,
      change: '+5%',
      trend: 'up',
      icon: AlertTriangle,
      color: 'red'
    },
    {
      title: 'Enablement Gap Rate',
      value: `${kpiData.enablementGapRate}%`,
      change: '-8%',
      trend: 'down',
      icon: BookOpen,
      color: 'indigo'
    }
  ];

  const getColorClasses = (color, trend) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-900',
        icon: 'text-blue-600',
        trend: trend === 'up' ? 'text-blue-600' : 'text-blue-600'
      },
      green: {
        bg: 'bg-green-50',
        text: 'text-green-900',
        icon: 'text-green-600',
        trend: trend === 'down' ? 'text-green-600' : 'text-green-600'
      },
      purple: {
        bg: 'bg-purple-50',
        text: 'text-purple-900',
        icon: 'text-purple-600',
        trend: trend === 'up' ? 'text-purple-600' : 'text-purple-600'
      },
      orange: {
        bg: 'bg-orange-50',
        text: 'text-orange-900',
        icon: 'text-orange-600',
        trend: trend === 'down' ? 'text-orange-600' : 'text-orange-600'
      },
      red: {
        bg: 'bg-red-50',
        text: 'text-red-900',
        icon: 'text-red-600',
        trend: trend === 'up' ? 'text-red-600' : 'text-red-600'
      },
      indigo: {
        bg: 'bg-indigo-50',
        text: 'text-indigo-900',
        icon: 'text-indigo-600',
        trend: trend === 'down' ? 'text-indigo-600' : 'text-indigo-600'
      }
    };
    return colors[color];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      {kpis.map((kpi, index) => {
        const Icon = kpi.icon;
        const TrendIcon = kpi.trend === 'up' ? TrendingUp : TrendingDown;
        const colors = getColorClasses(kpi.color, kpi.trend);
        
        return (
          <div key={index} className={`${colors.bg} rounded-lg p-4 border border-gray-200 shadow-sm`}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className={`text-sm font-medium ${colors.text} mb-1`}>{kpi.title}</p>
                <p className={`text-2xl font-bold ${colors.text}`}>{kpi.value}</p>
                <div className="flex items-center mt-2">
                  <TrendIcon className={`w-4 h-4 ${colors.trend} mr-1`} />
                  <span className={`text-sm font-medium ${colors.trend}`}>{kpi.change}</span>
                </div>
              </div>
              <div className={`${colors.icon}`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KPICards;
