import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from 'recharts';

const EffortMetrics = ({ effortData, effortByRole, effortByRegion }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Effort-Based Metrics</h2>
      
      {/* Effort Trends Over Time */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Effort per Case by Complexity (Hours)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={effortData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="lowComplexity" stroke="#10b981" name="Low Complexity" strokeWidth={2} />
            <Line type="monotone" dataKey="mediumComplexity" stroke="#f59e0b" name="Medium Complexity" strokeWidth={2} />
            <Line type="monotone" dataKey="highComplexity" stroke="#ef4444" name="High Complexity" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Effort by Role */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Average Effort by Engineer Role</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={effortByRole}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="role" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="effort" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Effort by Region */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Average Effort by Region</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={effortByRegion}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="effort" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Insights */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="text-sm font-medium text-blue-900 mb-2">Key Insights</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Engineers are becoming 15% more efficient at handling complex cases over 6 months</li>
          <li>• Senior engineers handle cases 55% faster than junior engineers</li>
          <li>• APAC region shows higher effort requirements, indicating potential training needs</li>
        </ul>
      </div>
    </div>
  );
};

export default EffortMetrics;
