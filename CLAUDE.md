# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm install` or `npm i` - Install dependencies
- `npm run dev` - Start development server on port 3000 (opens automatically)
- `npm run build` - Build for production (outputs to `build/` directory)

## Project Architecture

This is a React + TypeScript + Vite application originally converted from a Figma design. The project follows a component-based architecture with the following key structure:

### Core Technologies
- **React 18.3.1** with TypeScript
- **Vite** as build tool with SWC for fast compilation
- **Radix UI** components for accessible UI primitives
- **Tailwind CSS** (implied from utilities usage)
- **Lucide React** for icons

### Project Structure
- `src/App.tsx` - Main application component (~1200 lines, contains most application logic)
- `src/components/ui/` - Reusable UI components built on Radix UI primitives
- `src/components/figma/` - Figma-specific components
- `src/imports/svg-6eh6q.tsx` - SVG assets exported as data URLs
- `src/assets/` - Image assets with Figma-generated filenames
- `src/styles/` - Additional styling files
- `src/guidelines/` - Design system guidelines

### Key Architecture Patterns

**State Management**: Uses React's built-in `useState` and `useEffect` hooks for local state management. Main application state includes:
- Section navigation (`trilhas` vs `categorias`)
- Active trilha/categoria selection
- Course data management

**Asset Handling**:
- Images are imported through Vite aliases with Figma asset IDs
- SVG icons are embedded as data URLs in `svg-6eh6q.tsx`
- Figma asset mapping is handled in `vite.config.ts`

**Component Organization**:
- UI components follow Radix UI patterns with compound components
- Main app logic is concentrated in `App.tsx` rather than distributed across multiple components
- Course data is defined as typed objects with categories and metadata

### Development Notes

- The app uses custom Vite aliases for package imports to avoid version conflicts
- Development server runs on port 3000 with auto-open enabled
- Build target is `esnext` for modern browser support
- No testing framework or linting is currently configured
- The project structure suggests this was generated from a Figma design export tool

### UserGuiding Integration

- UserGuiding analytics and user onboarding script is integrated in the HTML head
- Project ID: `FDH106677CLKID`
- The script loads asynchronously and provides user guidance functionality
- Available methods: `previewGuide`, `finishPreview`, `track`, `identify`, `hideChecklist`, `launchChecklist`
- Access the UserGuiding object via `window.userGuiding` in the browser console