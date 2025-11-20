# Data Fetch Scheduler

A modern web application for managing and scheduling automated data fetch tasks from multiple sources including SFTP, ETL engines, and APIs.

## Overview

Data Fetch Scheduler provides a clean, intuitive interface for configuring and monitoring scheduled data fetching tasks. Built with React and the Blend Design System, it offers a comprehensive solution for automating data ingestion workflows with built-in retry logic, alerting, and flexible scheduling options.

## Features

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
│   │   └── DataFetchDrawer.tsx    # Main task configuration drawer
│   ├── theme/
│   │   └── customTheme.ts         # Blend theme customization
│   ├── App.tsx                    # Main application component
│   ├── App.css                    # Application styles
│   ├── index.css                  # Global styles and foundation tokens
│   └── main.tsx                   # Application entry point
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

### Creating a Task

1. Click the **"+ New Task"** button in the dashboard header
2. Select your data source type (SFTP, ETL, or API)
3. Configure source-specific settings:
   - **SFTP**: Choose option (BASE/PSP/BANK) and configuration
   - **ETL**: Select engine, gateways, and query mode (raw or interactive)
   - **API**: Choose option (PSP/BANK) and gateway
4. Configure retry and alert settings
5. Set up the schedule (time and frequency)
6. Submit to create the task

### Editing a Task

1. Click the **"Edit"** button on any task card
2. Modify the configuration as needed
3. Save changes

### Monitoring Tasks

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

This is a demo project for showcasing data fetch scheduling capabilities. For production use, consider adding:

- Backend API integration
- Authentication and authorization
- Task execution engine
- Database persistence
- Logging and monitoring
- Unit and integration tests

## License

[MIT](LICENSE)

## Acknowledgments

- Built with [Blend Design System](https://juspay.design) by Juspay
- Powered by [Vite](https://vitejs.dev) and [React](https://react.dev)
