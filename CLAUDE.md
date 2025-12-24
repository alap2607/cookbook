# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a cookbook website project featuring vegetarian and chicken recipes. The application is built with React + TypeScript using Vite as the build tool and development server. The project is located in the `my-app/` subdirectory.

## Development Commands

All commands should be run from the `my-app/` directory:

```bash
cd my-app
```

### Common Commands

- **Start development server**: `npm run dev`
  - Runs Vite dev server with HMR at http://localhost:5173/

- **Build for production**: `npm run build`
  - Runs TypeScript compiler (`tsc -b`) followed by Vite build
  - Output is in `dist/` directory

- **Lint code**: `npm run lint`
  - Runs ESLint on all files

- **Preview production build**: `npm run preview`
  - Serves the production build locally

### TypeScript Type Checking

- **Type check without emitting**: `npx tsc --noEmit`
- The build command includes type checking via `tsc -b`

## Project Structure

```
my-app/
├── src/
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point, renders App with StrictMode
│   ├── App.css          # App-specific styles
│   ├── index.css        # Global styles
│   ├── vite-env.d.ts    # Vite client types
│   └── assets/          # Static assets
├── public/              # Public static files
└── dist/                # Build output (gitignored)
```

## Technology Stack

- **Framework**: React 19.1.0
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 6.3.5
- **Linting**: ESLint 9.25.0 with TypeScript ESLint
- **Plugins**:
  - @vitejs/plugin-react (uses Babel for Fast Refresh)
  - eslint-plugin-react-hooks
  - eslint-plugin-react-refresh

## Configuration Files

- **tsconfig.json**: Root TypeScript config that references `tsconfig.app.json` and `tsconfig.node.json`
- **vite.config.ts**: Vite configuration with React plugin
- **eslint.config.js**: ESLint flat config with recommended rules for React + TypeScript

## ESLint Configuration

The project uses ESLint's flat config format with:
- JavaScript recommended rules
- TypeScript recommended rules
- React Hooks recommended rules
- React Refresh plugin (warns on non-constant component exports)
- Ignores `dist/` directory

## Working Directory

The Git repository root is `/Users/alaparthins/Documents/cookbook/`, but all development work happens in the `my-app/` subdirectory. Always navigate to `my-app/` before running npm commands.
