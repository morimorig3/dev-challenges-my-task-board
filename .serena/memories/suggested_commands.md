# Suggested Commands for Task Board Development

## Frontend Commands (run from /frontend)
```bash
pnpm install          # Install dependencies
pnpm dev             # Start dev server with hot reload
pnpm build           # Type check + production build
pnpm lint            # Run ESLint
pnpm preview         # Preview production build
```

## Backend Commands (run from /backend)
```bash
pnpm install          # Install dependencies
pnpm start:dev       # Start in watch mode (recommended)
pnpm start           # Start without watch
pnpm start:debug     # Start in debug mode
pnpm build           # Build for production
pnpm start:prod      # Run production build
pnpm lint            # Run ESLint with auto-fix
pnpm format          # Format code with Prettier
```

## Backend Testing
```bash
pnpm test            # Run unit tests
pnpm test:watch      # Run tests in watch mode
pnpm test:cov        # Run tests with coverage
pnpm test:e2e        # Run e2e tests
pnpm test:debug      # Run tests in debug mode
```

## After Task Completion
Run linting and formatting in both frontend and backend:
- Frontend: `pnpm lint`
- Backend: `pnpm lint && pnpm format`
