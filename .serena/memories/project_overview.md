# Task Board Application - Project Overview

## Project Purpose
A task board application for managing tasks and organizing them by status. The application includes both frontend and backend components.

## Tech Stack
- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS 4, SWC
- **Backend**: NestJS, TypeScript, Prisma (ORM), Jest for testing
- **Package Manager**: pnpm (monorepo structure)
- **Development Environment**: Node.js

## Project Version
Early stages (0.0.x)

## Monorepo Structure
```
/
├── frontend/        # React SPA
│   └── src/        # Components, API calls, constants
├── backend/        # NestJS REST API
│   └── src/        # Controllers, services, modules
├── prisma/         # Database schema and migrations
└── docs/          # Documentation
```

## Key Technologies
- Path aliases: @/ maps to frontend/src/
- Vite with rolldown-vite optimization
- NestJS modules (boards, tasks, etc.)
- Prisma ORM for database

## Development Ports
- Frontend: 5173 (Vite default)
- Backend: 3000
