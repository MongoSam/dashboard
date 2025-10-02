import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

const CustomerMetrics = ({ enablementGaps, contractCorrelation }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Customer & Account-Level Metrics</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Customer Enablement Gaps */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Customer Enablement Gaps by Feature</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={enablementGaps} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 40]} />
              <YAxis dataKey="feature" type="category" width={120} />
              <Tooltip formatter={(value) => [`${value}%`, 'Gap Percentage']} />
              <Bar dataKey="gapPercentage" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Contract Type vs Effort/Complexity */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Support Contract Impact</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={contractCorrelation}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="avgEffort" name="Avg Effort (hrs)" domain={[1, 7]} />
              <YAxis dataKey="avgComplexity" name="Avg Complexity" domain={[2, 8]} />
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-sm">
                        <p className="font-medium">{data.contractType}</p>
                        <p className="text-sm text-gray-600">Effort: {data.avgEffort} hrs</p>
                        <p className="text-sm text-gray-600">Complexity: {data.avgComplexity}/10</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Scatter 
                name="Contract Types" 
                fill="#8b5cf6"
                shape={(props) => {
                  const { cx, cy, payload } = props;
                  const size = payload.contractType === 'Enterprise' ? 12 : 
                              payload.contractType === 'Professional' ? 10 : 
                              payload.contractType === 'Standard' ? 8 : 6;
                  return <circle cx={cx} cy={cy} r={size} fill="#8b5cf6" />;
                }}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Enablement Gap Analysis */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Enablement Gap Impact Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {enablementGaps.map((gap, index) => (
            <div key={index} className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
              <div className="text-center">
                <h4 className="text-sm font-medium text-gray-900 mb-2">{gap.feature}</h4>
                <div className="text-2xl font-bold text-orange-600 mb-1">{gap.gapPercentage}%</div>
                <div className="w-full bg-orange-200 rounded-full h-2">
                  <div 
                    className="bg-orange-500 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${gap.gapPercentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-orange-700 mt-2">of cases require training</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contract Analysis Table */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Contract Type Performance</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contract Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Effort (hrs)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Complexity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Efficiency</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contractCorrelation.map((contract, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      contract.contractType === 'Enterprise' ? 'bg-purple-100 text-purple-800' :
                      contract.contractType === 'Professional' ? 'bg-blue-100 text-blue-800' :
                      contract.contractType === 'Standard' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {contract.contractType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {contract.avgEffort}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-indigo-500 h-2 rounded-full"
                          style={{ width: `${(contract.avgComplexity / 10) * 100}%` }}
                        ></div>
                      </div>
                      <span>{contract.avgComplexity}/10</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      contract.avgEffort < 3 ? 'bg-green-100 text-green-800' :
                      contract.avgEffort < 5 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {contract.avgEffort < 3 ? 'High' : contract.avgEffort < 5 ? 'Medium' : 'Low'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Metrics KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-orange-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-orange-900">Overall Gap Rate</span>
            <span className="text-lg font-bold text-orange-700">23.6%</span>
          </div>
          <div className="text-xs text-orange-600 mt-1">↓ 8% from last quarter</div>
        </div>
        
        <div className="p-4 bg-purple-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-purple-900">Enterprise Efficiency</span>
            <span className="text-lg font-bold text-purple-700">3.2x</span>
          </div>
          <div className="text-xs text-purple-600 mt-1">vs Basic contracts</div>
        </div>
        
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-blue-900">Training ROI</span>
            <span className="text-lg font-bold text-blue-700">284%</span>
          </div>
          <div className="text-xs text-blue-600 mt-1">Based on effort reduction</div>
        </div>

        <div className="p-4 bg-green-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-green-900">Success Cases</span>
            <span className="text-lg font-bold text-green-700">76%</span>
          </div>
          <div className="text-xs text-green-600 mt-1">First-time resolution</div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="p-4 bg-indigo-50 rounded-lg">
        <h4 className="text-sm font-medium text-indigo-900 mb-2">Key Insights</h4>
        <ul className="text-sm text-indigo-800 space-y-1">
          <li>• API Integration shows highest enablement gap (34%) - priority training area</li>
          <li>• Enterprise customers 3.2x more efficient than Basic contract holders</li>
          <li>• Customer training ROI of 284% shows strong business case</li>
          <li>• Strong inverse correlation between contract tier and effort required</li>
        </ul>
      </div>
    </div>
  );
};

export default CustomerMetrics;
