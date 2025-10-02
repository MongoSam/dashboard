import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const ComplexityMetrics = ({ complexityByDimension, complexityByProduct, complexityByTechnology, topComplexityAccounts }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Complexity-Based Metrics</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Complexity by Dimension */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Case Complexity by Dimension</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={complexityByDimension}>
              <PolarGrid />
              <PolarAngleAxis dataKey="dimension" />
              <PolarRadiusAxis domain={[0, 100]} />
              <Radar name="Complexity Score" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Complexity by Product */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Average Complexity by Product</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={complexityByProduct} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 10]} />
              <YAxis dataKey="product" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="complexity" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Complexity by Technology */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Complexity by Core Technology</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={complexityByTechnology}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tech" angle={-45} textAnchor="end" height={80} />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Bar dataKey="complexity" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Complexity Accounts */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Top 5 Complexity Accounts</h3>
          <div className="space-y-3">
            {topComplexityAccounts.map((account, index) => (
              <div key={account.account} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-600">#{index + 1}</span>
                  <span className="text-sm font-medium text-gray-900">{account.account}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-red-500 h-2 rounded-full" 
                      style={{ width: `${(account.complexity / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{account.complexity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="mt-6 p-4 bg-amber-50 rounded-lg">
        <h4 className="text-sm font-medium text-amber-900 mb-2">Key Insights</h4>
        <ul className="text-sm text-amber-800 space-y-1">
          <li>• Technical complexity is the highest factor (75/100) in case difficulty</li>
          <li>• Kubernetes and Sharding are the most complex technologies (8.7-8.9/10)</li>
          <li>• Security product shows highest complexity average (8.3/10)</li>
          <li>• Top 5 accounts contribute to 40% of high-complexity cases</li>
        </ul>
      </div>
    </div>
  );
};

export default ComplexityMetrics;
