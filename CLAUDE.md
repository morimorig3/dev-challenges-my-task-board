# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a task board application with a monorepo structure containing:
- **Frontend**: React 19 + TypeScript + Vite + Tailwind CSS 4
- **Backend**: NestJS + TypeScript

The project uses `pnpm` as the package manager.

## Architecture

### Monorepo Structure
```
/
├── frontend/          # React SPA
│   └── src/          # React components and application code
├── backend/          # NestJS REST API
│   └── src/          # Controllers, services, modules
└── compose.yaml      # Docker Compose (currently empty)
```

### Frontend Architecture
- **Build Tool**: Vite with rolldown-vite (optimized bundler)
- **UI Framework**: React 19 with SWC for Fast Refresh
- **Styling**: Tailwind CSS 4 with Vite plugin
- **Path Aliases**: `@/` maps to `frontend/src/`
- **Port**: Development server runs on Vite's default (typically 5173)

### Backend Architecture
- **Framework**: NestJS (Node.js framework)
- **Port**: 3000 (configurable via PORT env variable)
- **Module System**: Standard NestJS module/controller/service pattern
- **Entry Point**: `backend/src/main.ts`

## Development Commands

### Frontend (run from `/frontend`)
```bash
pnpm install          # Install dependencies
pnpm dev             # Start dev server with hot reload
pnpm build           # Type check + production build
pnpm lint            # Run ESLint
pnpm preview         # Preview production build
```

### Backend (run from `/backend`)
```bash
pnpm install          # Install dependencies
pnpm start:dev       # Start in watch mode (recommended for development)
pnpm start           # Start without watch
pnpm start:debug     # Start in debug mode with watch
pnpm build           # Build for production
pnpm start:prod      # Run production build
pnpm lint            # Run ESLint with auto-fix
pnpm format          # Format code with Prettier
```

### Testing

#### Backend Tests
```bash
# Run from /backend
pnpm test            # Run unit tests
pnpm test:watch      # Run tests in watch mode
pnpm test:cov        # Run tests with coverage
pnpm test:e2e        # Run e2e tests
pnpm test:debug      # Run tests in debug mode
```

## Key Configuration

### Frontend
- **TypeScript Configs**: `tsconfig.app.json` (app code), `tsconfig.node.json` (Vite config)
- **Vite Config**: Uses path aliases, React SWC plugin, Tailwind CSS Vite plugin
- **Note**: Using `rolldown-vite` instead of standard Vite for improved performance

### Backend
- **Jest Config**: Embedded in `package.json`, test files use `*.spec.ts` pattern
- **Root Dir**: Tests root is `src/`
- **Coverage**: Outputs to `coverage/` directory

## Important Notes

- The project is in early stages (version 0.0.x for both frontend and backend)
- `compose.yaml` exists but is currently empty
- Both frontend and backend are set up with standard scaffolding from their respective frameworks
