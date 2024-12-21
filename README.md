# Role-Based Authentication App

A React application demonstrating role-based authentication and authorization using TypeScript and Vite.

## Features

- Role-based access control (Admin, Member, Client)
- Protected routes with role-specific access
- Authentication state management
- Responsive design with Tailwind CSS
- TypeScript for type safety
- ESLint and Prettier for code quality

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

### Building for Production

Build the project:
```bash
npm run build
```

### Testing Accounts

Use these accounts to test different roles:

- Admin: admin@example.com / admin123
- Member: member@example.com / member123
- Client: client@example.com / client123

## Project Structure

```
src/
├── components/        # Reusable UI components
├── contexts/         # React contexts for state management
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── services/        # API and service functions
```

## Best Practices

- Single Responsibility: Each file has a single, clear purpose
- Type Safety: Comprehensive TypeScript types
- Code Quality: ESLint and Prettier enforcement
- Component Structure: Small, focused components
- State Management: Context-based authentication
- Error Handling: Consistent error boundaries

## Deployment

This project is configured for deployment on Netlify:

1. Connect your repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy!