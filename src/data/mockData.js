// Mock data for dashboard
export const effortData = [
  { month: 'Jan', lowComplexity: 2.3, mediumComplexity: 4.1, highComplexity: 8.2 },
  { month: 'Feb', lowComplexity: 2.1, mediumComplexity: 3.9, highComplexity: 7.8 },
  { month: 'Mar', lowComplexity: 1.9, mediumComplexity: 3.7, highComplexity: 7.5 },
  { month: 'Apr', lowComplexity: 1.8, mediumComplexity: 3.5, highComplexity: 7.2 },
  { month: 'May', lowComplexity: 1.7, mediumComplexity: 3.3, highComplexity: 6.9 },
  { month: 'Jun', lowComplexity: 1.6, mediumComplexity: 3.1, highComplexity: 6.7 },
];

export const effortByRole = [
  { role: 'Junior', effort: 5.2 },
  { role: 'Mid-level', effort: 3.8 },
  { role: 'Senior', effort: 2.9 },
  { role: 'Staff', effort: 2.3 },
];

export const effortByRegion = [
  { region: 'NA', effort: 3.4 },
  { region: 'EMEA', effort: 3.8 },
  { region: 'APAC', effort: 4.1 },
];

export const complexityByDimension = [
  { dimension: 'Technical', value: 75 },
  { dimension: 'Components', value: 60 },
  { dimension: 'Root Cause', value: 45 },
  { dimension: 'Training', value: 35 },
];

export const complexityByProduct = [
  { product: 'Core Platform', complexity: 7.8 },
  { product: 'Analytics', complexity: 6.2 },
  { product: 'Mobile', complexity: 5.9 },
  { product: 'Integrations', complexity: 7.1 },
  { product: 'Security', complexity: 8.3 },
];

export const complexityByTechnology = [
  { tech: 'Kubernetes', complexity: 8.7 },
  { tech: 'Sharding', complexity: 8.9 },
  { tech: 'Backups', complexity: 7.4 },
  { tech: 'Networking', complexity: 7.8 },
  { tech: 'Database', complexity: 6.9 },
];

export const topComplexityAccounts = [
  { account: 'Enterprise Corp A', complexity: 9.2 },
  { account: 'TechCorp B', complexity: 8.8 },
  { account: 'Global Inc C', complexity: 8.5 },
  { account: 'Systems Ltd D', complexity: 8.1 },
  { account: 'Solutions E', complexity: 7.9 },
];

export const durationData = [
  { month: 'Jan', avgDuration: 4.2, complexCases: 6.8 },
  { month: 'Feb', avgDuration: 3.9, complexCases: 6.5 },
  { month: 'Mar', avgDuration: 3.7, complexCases: 6.2 },
  { month: 'Apr', avgDuration: 3.5, complexCases: 5.9 },
  { month: 'May', avgDuration: 3.3, complexCases: 5.7 },
  { month: 'Jun', avgDuration: 3.1, complexCases: 5.4 },
];

export const fragilityIndex = [
  { engineer: 'Alex Chen', specialization: 82, tags: 12 },
  { engineer: 'Sarah Johnson', specialization: 45, tags: 24 },
  { engineer: 'Mike Rodriguez', specialization: 67, tags: 18 },
  { engineer: 'Emily Davis', specialization: 38, tags: 28 },
  { engineer: 'David Kim', specialization: 71, tags: 15 },
];

export const commentActivity = [
  { month: 'Jan', internal: 3.2, customer: 2.1 },
  { month: 'Feb', internal: 3.0, customer: 2.3 },
  { month: 'Mar', internal: 2.8, customer: 2.4 },
  { month: 'Apr', internal: 2.6, customer: 2.5 },
  { month: 'May', internal: 2.4, customer: 2.6 },
  { month: 'Jun', internal: 2.2, customer: 2.7 },
];

export const enablementGaps = [
  { feature: 'API Integration', gapPercentage: 34 },
  { feature: 'Security Config', gapPercentage: 28 },
  { feature: 'Advanced Analytics', gapPercentage: 22 },
  { feature: 'Custom Workflows', gapPercentage: 19 },
  { feature: 'Data Export', gapPercentage: 15 },
];

export const contractCorrelation = [
  { contractType: 'Enterprise', avgEffort: 2.1, avgComplexity: 6.8 },
  { contractType: 'Professional', avgEffort: 3.4, avgComplexity: 5.2 },
  { contractType: 'Standard', avgEffort: 4.7, avgComplexity: 3.9 },
  { contractType: 'Basic', avgEffort: 5.8, avgComplexity: 2.8 },
];

export const kpiData = {
  totalCases: 1247,
  avgResolutionTime: 3.2,
  customerSatisfaction: 4.3,
  escalationRate: 12.5,
  fragilityScore: 58,
  enablementGapRate: 23.6,
};
