# Support Analytics Dashboard

A comprehensive analytics dashboard for support engineering teams, built with React and Recharts. This dashboard provides insights into effort-based metrics, complexity analysis, duration tracking, team performance, and customer enablement gaps.

## Features

### 📊 **Effort-Based Metrics**
- Effort per case sliced by complexity levels
- Trends showing engineering efficiency improvements over time
- Analysis by engineer role, region, and team
- Correlation with seniority and tenure

### 🔍 **Complexity-Based Metrics**
- Case complexity analysis across multiple dimensions (Technical, Components, Root Cause, Training)
- Average complexity per product and core technology
- Account-level complexity outliers identification
- Correlations with severity, escalation, and FTS assignments

### ⏱️ **Duration-Based Metrics**
- Time to close and case age tracking
- Active duration correlation with technical complexity
- Predictive insights for case resolution times

### 👥 **Team & Engineer Performance**
- Fragility Index to identify specialization gaps
- Active comment analysis (internal vs customer-facing)
- Cross-training progress tracking
- Engineer specialization risk assessment

### 🎯 **Customer & Account-Level Metrics**
- Customer enablement gap analysis
- Support contract performance correlation
- Training ROI calculations
- Feature-specific learning gap identification

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd support-analytics-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## Dashboard Sections

### KPI Overview Cards
- Total Cases, Average Resolution Time, Customer Satisfaction
- Escalation Rate, Fragility Score, Enablement Gap Rate

### Interactive Charts
- Line charts for trends over time
- Bar charts for comparative analysis
- Radar charts for multi-dimensional complexity
- Scatter plots for correlation analysis
- Progress bars and gauges for performance metrics

## Technology Stack

- **Frontend:** React 18
- **Charts:** Recharts
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Build:** Create React App

## Sample Data

The dashboard currently uses mock data that demonstrates:
- 6 months of historical trends
- Multiple engineer roles and regions
- Various product complexities
- Contract type correlations
- Customer enablement gaps

## Key Insights Displayed

- Engineers becoming 15% more efficient at handling complex cases
- Strong correlation (r=0.94) between complexity and duration  
- API Integration showing highest enablement gap (34%)
- Enterprise customers 3.2x more efficient than Basic contract holders
- Team fragility score trends requiring attention

## Customization

### Adding Real Data
Replace the mock data in `src/data/mockData.js` with your actual support metrics:

```javascript
export const effortData = [
  // Your actual effort data
];
```

### Styling
Modify the Tailwind classes in components or update the theme in `tailwind.config.js`.

### Adding New Metrics
Create new components in the `src/components/` directory and import them into `App.js`.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Production Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder to your hosting platform**

## Contributing

This dashboard is designed to be easily extensible. To add new metrics:

1. Add mock data to `mockData.js`
2. Create a new component in `components/`
3. Import and use in `App.js`
4. Follow the existing pattern of charts and insights

## Support

This dashboard provides comprehensive analytics for support engineering teams. The modular design allows for easy customization and extension based on your specific metrics and requirements.
