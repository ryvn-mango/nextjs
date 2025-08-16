# Next.js Example with FastAPI Backend

This is a production-ready Next.js frontend application designed to work with a FastAPI backend.

## Features

- Modern Next.js 14 with App Router
- TypeScript support with strict type checking
- TailwindCSS for styling
- Production-ready Docker setup
- API route configuration for FastAPI backend
- Jest and React Testing Library setup
- Prettier and ESLint configuration
- Git hooks with Husky and lint-staged
- Zod for runtime type validation
- pnpm for fast, disk-space efficient package management

## Prerequisites

- Node.js >= 20.0.0
- pnpm >= 8.0.0

## Getting Started

### Development

1. Install pnpm if you haven't already:
```bash
corepack enable
```

2. Install dependencies:
```bash
pnpm install
```

3. Copy the environment file and modify as needed:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Scripts

- `pnpm dev` - Run development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm type-check` - Run TypeScript checks
- `pnpm test` - Run tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm format` - Format code with Prettier
- `pnpm clean` - Clean build files and dependencies

### Building with Docker

1. Build the Docker image:
```bash
docker build -t nextjs-example .
```

2. Run the container:
```bash
docker run -p 3000:3000 -e API_URL=http://host.docker.internal:8000/api nextjs-example
```

## Production Optimizations

- Output is optimized using Next.js standalone mode
- Docker image uses multi-stage builds
- Security headers are enabled
- Telemetry is disabled
- Non-root user in Docker for security
- Build caching for faster builds
- Runtime environment variable support
- Strict TypeScript checks
- Proper error handling

## API Configuration

The application is configured to proxy API requests to a FastAPI backend. The backend URL can be configured using the `API_URL` environment variable. Default is `http://localhost:8000/api`.

## Project Structure

- `src/app/` - Application source code
- `src/app/page.tsx` - Main page component
- `src/app/layout.tsx` - Root layout component
- `src/app/globals.css` - Global styles
- `src/components/` - Reusable components
- `src/lib/` - Utility functions and shared code
- `src/types/` - TypeScript type definitions
- `public/` - Static files
