# Blend Design System Demos

A collection of demo applications showcasing the [Juspay Blend Design System](https://juspay.design) components, patterns, and best practices.

## Overview

This repository contains multiple demo applications built with React and the Blend Design System. Each demo showcases different aspects of the design system, including components, foundation tokens, theming, and responsive design patterns.

## Demos

### 1. Transaction Analytics Dashboard

A comprehensive analytics dashboard demonstrating data visualization and reporting capabilities using Blend components.

**Featured Components:**
- **StatCard**: Displaying key metrics with line charts and percentage changes
- **Charts**: Line and bar charts for transaction data visualization
- **DataTable**: Sortable, paginated table with row selection
- **Tabs**: Boxed variant for switching between analytics views (Transaction, Order, Customers, Refunds)
- **DateRangePicker**: Date range selection for filtering data
- **Button**: Various button types and sizes for actions
- **SingleSelect**: Dropdown menus for filtering and grouping

**Key Features:**
- 8 StatCards with mini line charts showing key insights
- Transaction Rate line chart with 6 data series
- Overall Transaction bar chart
- Summary table with 6 columns and pagination
- Responsive grid layout
- Complete foundation token usage for spacing and typography

### 2. Data Fetch Scheduler

A modern web application for managing and scheduling automated data fetch tasks from multiple sources including SFTP, ETL engines, and APIs.

**Featured Components:**
- **Drawer**: Complex multi-step task configuration
- **Stepper**: Step-by-step task creation workflow
- **Form Components**: Input fields, selects, and validation
- **Card**: Task display with status indicators
- **Tag**: Status badges (Active, Inactive, Failed)
- **Button**: Action buttons throughout the interface

## Data Fetch Scheduler Features

### Data Source Support
- **SFTP**: Fetch gateway files through SFTP servers with support for BASE, PSP, and BANK configurations
- **ETL Engines**:
  - BigQuery: Execute SQL queries to fetch data
  - ClickHouse: Run JSON-based queries
  - Interactive mode with column selection, filtering, and date range support
  - Raw query mode for advanced users
- **API Integration**: Fetch data through settlement APIs (PSP and BANK)

### Task Management
- Create, edit, and monitor scheduled tasks
- Real-time task status tracking (Active, Inactive, Failed)
- Task execution history with last run timestamps
- Comprehensive task configuration drawer

### Advanced Configuration
- **Column Selection**: Choose specific columns with optional aliasing
- **Filtering**: Apply WHERE clause filters with multiple operators (=, !=, >, <, >=, <=, LIKE, IN)
- **Date Ranges**: Set date ranges for date-type columns with built-in presets
- **Retry Logic**: Configure retry attempts and intervals (1-10 retries, 1-30 minute intervals)
- **Alerting**: Email notifications after specified retry attempts
- **Scheduling**:
  - Daily, Weekly, Monthly schedules
  - One-time and repeated execution
  - Custom cron expressions

### User Experience
- Clean, modern interface using Blend Design System components
- Foundation token-based theming for consistent styling
- Responsive design for desktop and mobile
- Real-time validation and error handling

## Tech Stack

- **Framework**: React 19.2.0
- **Language**: TypeScript 5.9
- **Build Tool**: Vite 7.2
- **UI Library**: [Juspay Blend Design System](https://juspay.design) v0.0.25-beta
- **Styling**: CSS with CSS Custom Properties (foundation tokens)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd cron-demo

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# The application will be available at http://localhost:5173
```

### Building for Production

```bash
# Type-check and build
npm run build

# Preview the production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Project Structure

```
cron-demo/
├── src/
│   ├── components/
│   │   ├── DataFetchDrawer.tsx    # Data Fetch Scheduler drawer component
│   │   └── TaskLogsDrawer.tsx     # Task logs viewer component
│   ├── modules/
│   │   └── transaction-analytics/ # Transaction Analytics demo
│   │       ├── TransactionAnalytics.tsx
│   │       └── TransactionAnalytics.css
│   ├── theme/
│   │   └── customTheme.ts         # Blend theme customization
│   ├── App.tsx                    # Main application with routing
│   ├── App.css                    # Application styles
│   ├── index.css                  # Global styles and foundation tokens
│   └── main.tsx                   # Application entry point
├── .claude/
│   └── CODING_GUIDELINES.md       # Foundation token usage guidelines
├── public/                        # Static assets
└── package.json
```

## Configuration

### Foundation Tokens

The application uses CSS Custom Properties for consistent theming. All tokens are defined in `src/index.css`:

```css
:root {
  /* Foundation Colors */
  --color-primary: #667eea;
  --color-success: #10b981;
  --color-danger: #ef4444;

  /* Semantic Colors */
  --color-text-primary: var(--color-gray-800);
  --color-text-secondary: var(--color-gray-500);
  --color-border: var(--color-gray-200);
  --color-background: var(--color-gray-50);
}
```

### Blend Design System

The project uses Blend Design System components throughout. All styling follows Blend's design patterns and token system to ensure consistency.

## Usage

### Navigating Between Demos

The application includes navigation to switch between different demos. Use the sidebar or navigation menu to explore:
- **Transaction Analytics**: Analytics dashboard with charts and data tables
- **Data Fetch Scheduler**: Task scheduling and management interface

### Transaction Analytics Demo

Explore the analytics dashboard to see:
- **Key Insights Section**: 8 StatCards displaying metrics with mini charts
- **Metric Overview**: Interactive line chart with multiple data series
- **Overall Transaction**: Bar chart visualization
- **Summary Table**: DataTable with sorting, pagination, and row selection
- **Filters**: DateRangePicker and filter buttons for data manipulation
- **Tabs**: Switch between Transaction, Order, Customers, and Refunds views

### Data Fetch Scheduler Demo

#### Creating a Task

1. Click the **"+ New Task"** button in the dashboard header
2. Select your data source type (SFTP, ETL, or API)
3. Configure source-specific settings:
   - **SFTP**: Choose option (BASE/PSP/BANK) and configuration
   - **ETL**: Select engine, gateways, and query mode (raw or interactive)
   - **API**: Choose option (PSP/BANK) and gateway
4. Configure retry and alert settings
5. Set up the schedule (time and frequency)
6. Submit to create the task

#### Editing a Task

1. Click the **"Edit"** button on any task card
2. Modify the configuration as needed
3. Save changes

#### Monitoring Tasks

- View all tasks in the main dashboard
- Check task status with color-coded tags:
  - **Active** (green): Task is running successfully
  - **Inactive** (neutral): Task is paused
  - **Failed** (red): Task requires attention
- See last run timestamp for each task
- Monitor statistics in the dashboard cards

## Design Principles

This project follows Blend Design System guidelines:

- ✅ **Foundation Tokens**: All colors, spacing, and typography use foundation tokens
- ✅ **Component Usage**: Proper use of Blend components (Button, Card, Tag, Drawer, etc.)
- ✅ **No Custom Inline Styles**: Layout handled through CSS classes
- ✅ **Semantic HTML**: Proper use of semantic elements
- ✅ **Accessibility**: Following Blend's accessibility patterns

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a collection of demo projects showcasing the Blend Design System. Each demo focuses on different use cases and component combinations to help developers understand how to build applications with Blend.

### Adding New Demos

To add a new demo to this repository:

1. Create a new module in `src/modules/your-demo-name/`
2. Build your demo using Blend components and foundation tokens
3. Follow the coding guidelines in `.claude/CODING_GUIDELINES.md`
4. Update this README with your demo's description and featured components
5. Add routing in `App.tsx` if needed

### For Production Use

These are demonstration projects. For production applications, consider adding:

- Backend API integration
- Authentication and authorization
- Database persistence
- Error handling and logging
- Unit and integration tests
- Performance optimization
- Accessibility audits

## License

[MIT](LICENSE)

## Acknowledgments

These demos are built to showcase the capabilities and best practices of the Blend Design System. They serve as reference implementations for developers looking to build applications using Blend components and patterns.

- Built with [Blend Design System](https://juspay.design) by Juspay
- Powered by [Vite](https://vitejs.dev) and [React](https://react.dev)
- Visit [Blend Documentation](https://juspay.design/docs) for complete component reference
