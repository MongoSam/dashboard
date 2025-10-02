import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

const DurationMetrics = ({ durationData }) => {
  // Mock data for complexity vs duration correlation
  const complexityDurationCorrelation = [
    { complexity: 1, duration: 1.2 },
    { complexity: 2, duration: 1.8 },
    { complexity: 3, duration: 2.4 },
    { complexity: 4, duration: 3.1 },
    { complexity: 5, duration: 3.8 },
    { complexity: 6, duration: 4.6 },
    { complexity: 7, duration: 5.3 },
    { complexity: 8, duration: 6.2 },
    { complexity: 9, duration: 7.1 },
    { complexity: 10, duration: 8.4 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Duration-Based Metrics</h2>
      
      {/* Time to Close Trends */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Time to Close Trends (Days)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={durationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="avgDuration" stroke="#3b82f6" name="Average Duration" strokeWidth={3} />
            <Line type="monotone" dataKey="complexCases" stroke="#ef4444" name="Complex Cases Duration" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Complexity vs Duration Correlation */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Complexity vs Active Duration Correlation</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={complexityDurationCorrelation}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="complexity" name="Complexity Score" domain={[0, 10]} />
              <YAxis dataKey="duration" name="Duration (Days)" domain={[0, 10]} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Cases" fill="#8b5cf6" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Duration Statistics */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Duration Statistics</h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-blue-900">Average Resolution Time</span>
                <span className="text-lg font-bold text-blue-700">3.1 days</span>
              </div>
              <div className="text-xs text-blue-600 mt-1">↓ 26% from last quarter</div>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-green-900">Complex Cases (8+ complexity)</span>
                <span className="text-lg font-bold text-green-700">5.4 days</span>
              </div>
              <div className="text-xs text-green-600 mt-1">↓ 21% from last quarter</div>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-purple-900">Simple Cases (1-3 complexity)</span>
                <span className="text-lg font-bold text-purple-700">1.8 days</span>
              </div>
              <div className="text-xs text-purple-600 mt-1">↓ 18% from last quarter</div>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-orange-900">Correlation Coefficient</span>
                <span className="text-lg font-bold text-orange-700">r = 0.94</span>
              </div>
              <div className="text-xs text-orange-600 mt-1">Strong positive correlation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <h4 className="text-sm font-medium text-green-900 mb-2">Key Insights</h4>
        <ul className="text-sm text-green-800 space-y-1">
          <li>• Strong correlation (r=0.94) between complexity and duration</li>
          <li>• Overall resolution times improved by 26% over 6 months</li>
          <li>• Complex cases show consistent improvement trend</li>
          <li>• Duration predictability improved with complexity scoring</li>
        </ul>
      </div>
    </div>
  );
};

export default DurationMetrics;
