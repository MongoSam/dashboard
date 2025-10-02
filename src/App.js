import React from 'react';
import KPICards from './components/KPICards';
import EffortMetrics from './components/EffortMetrics';
import ComplexityMetrics from './components/ComplexityMetrics';
import DurationMetrics from './components/DurationMetrics';
import PerformanceMetrics from './components/PerformanceMetrics';
import CustomerMetrics from './components/CustomerMetrics';
import {
  kpiData,
  effortData,
  effortByRole,
  effortByRegion,
  complexityByDimension,
  complexityByProduct,
  complexityByTechnology,
  topComplexityAccounts,
  durationData,
  fragilityIndex,
  commentActivity,
  enablementGaps,
  contractCorrelation
} from './data/mockData';
import { BarChart3, Calendar, Filter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Support Analytics Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                <Calendar className="w-4 h-4 mr-2" />
                Last 6 Months
              </button>
              <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <KPICards kpiData={kpiData} />

        {/* Dashboard Sections */}
        <div className="space-y-8">
          {/* Effort-Based Metrics */}
          <EffortMetrics 
            effortData={effortData}
            effortByRole={effortByRole}
            effortByRegion={effortByRegion}
          />

          {/* Complexity-Based Metrics */}
          <ComplexityMetrics 
            complexityByDimension={complexityByDimension}
            complexityByProduct={complexityByProduct}
            complexityByTechnology={complexityByTechnology}
            topComplexityAccounts={topComplexityAccounts}
          />

          {/* Duration-Based Metrics */}
          <DurationMetrics durationData={durationData} />

          {/* Team and Engineer Performance */}
          <PerformanceMetrics 
            fragilityIndex={fragilityIndex}
            commentActivity={commentActivity}
          />

          {/* Customer and Account-Level Metrics */}
          <CustomerMetrics 
            enablementGaps={enablementGaps}
            contractCorrelation={contractCorrelation}
          />
        </div>

        {/* Footer */}
        <footer className="mt-12 py-6 border-t border-gray-200">
          <div className="text-center text-sm text-gray-500">
            <p>Support Analytics Dashboard • Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mt-1">Data refreshed every 4 hours • Next update: {new Date(Date.now() + 4 * 60 * 60 * 1000).toLocaleTimeString()}</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
