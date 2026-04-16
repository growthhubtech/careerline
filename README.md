# CareerLine

Modern React + TypeScript application.

## Development

### Prerequisites

- Node.js (v20+ recommended, see `.nvmrc`)
- npm

### Setup

```bash
npm install --legacy-peer-deps
npm run prepare
```

### Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Run TypeScript compiler check

### Project Structure

- `src/components` - Reusable UI components
- `src/hooks` - Custom React hooks
- `src/pages` - Route pages
- `src/services` - API services
- `src/utils` - Utility functions
- `src/types` - Type definitions

### Code Quality

This project enforces code quality using:

- **ESLint** (Airbnb + TypeScript + React rules)
- **Prettier** (Formatting)
- **Husky** (Git hooks)
- **Lint-staged** (Run checks on committed files)
