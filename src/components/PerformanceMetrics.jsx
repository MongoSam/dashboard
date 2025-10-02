import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

const PerformanceMetrics = ({ fragilityIndex, commentActivity }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Team & Engineer Performance Metrics</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Fragility Index */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Engineer Fragility Index</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={fragilityIndex}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tags" name="Tags Handled" domain={[10, 30]} />
              <YAxis dataKey="specialization" name="Specialization %" domain={[30, 90]} />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-sm">
                        <p className="font-medium">{data.engineer}</p>
                        <p className="text-sm text-gray-600">Tags: {data.tags}</p>
                        <p className="text-sm text-gray-600">Specialization: {data.specialization}%</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Scatter name="Engineers" fill="#ef4444" />
            </ScatterChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-500 mt-2">
            Higher specialization % = higher fragility risk. Fewer tags handled = limited breadth.
          </p>
        </div>

        {/* Comment Activity Trends */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Comment Activity Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={commentActivity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="internal" stroke="#3b82f6" name="Internal Comments" strokeWidth={2} />
              <Line type="monotone" dataKey="customer" stroke="#10b981" name="Customer Comments" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Engineer Performance Table */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Engineer Specialization Analysis</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engineer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tags Handled</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Level</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {fragilityIndex.map((engineer, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {engineer.engineer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {engineer.tags}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className={`h-2 rounded-full ${
                            engineer.specialization > 70 ? 'bg-red-500' : 
                            engineer.specialization > 50 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${engineer.specialization}%` }}
                        ></div>
                      </div>
                      <span>{engineer.specialization}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      engineer.specialization > 70 ? 'bg-red-100 text-red-800' :
                      engineer.specialization > 50 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {engineer.specialization > 70 ? 'High' : 
                       engineer.specialization > 50 ? 'Medium' : 'Low'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-red-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-red-900">Average Fragility Score</span>
            <span className="text-lg font-bold text-red-700">58%</span>
          </div>
          <div className="text-xs text-red-600 mt-1">↑ 5% from last quarter</div>
        </div>
        
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-blue-900">Internal Comments Ratio</span>
            <span className="text-lg font-bold text-blue-700">45%</span>
          </div>
          <div className="text-xs text-blue-600 mt-1">↓ 12% from last quarter</div>
        </div>
        
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-green-900">Cross-Training Progress</span>
            <span className="text-lg font-bold text-green-700">73%</span>
          </div>
          <div className="text-xs text-green-600 mt-1">↑ 18% from last quarter</div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="p-4 bg-purple-50 rounded-lg">
        <h4 className="text-sm font-medium text-purple-900 mb-2">Key Insights</h4>
        <ul className="text-sm text-purple-800 space-y-1">
          <li>• Alex Chen shows highest fragility (82%) - needs cross-training</li>
          <li>• Internal comments decreasing while customer comments increasing (good trend)</li>
          <li>• Emily Davis has best breadth coverage (28 tags handled)</li>
          <li>• Team fragility score increased 5% - action needed</li>
        </ul>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
