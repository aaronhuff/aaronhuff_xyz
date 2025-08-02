# AI Agent Instructions for aaronhuff_xyz

## Project Overview
This is a React-based personal website built with Vite, TypeScript, and ShadcnUI. The project uses modern React patterns and follows a component-based architecture.

## Key Technologies
- Vite + React + TypeScript
- ShadcnUI (Radix UI + Tailwind CSS) for UI components
- React Query for data management
- React Router for navigation

## Project Structure
```
src/
├── components/     # Reusable UI components
│   ├── ui/        # ShadcnUI components
│   └── ...        # Feature-specific components
├── hooks/         # Custom React hooks
├── lib/          # Utility functions and shared code
└── pages/        # Page components and routing
```

## Development Workflow
1. Start development server:
   ```sh
   npm run dev
   ```
2. Build for production:
   ```sh
   npm run build
   ```
3. Preview production build:
   ```sh
   npm run preview
   ```
4. After making changes:
   ```sh
   git add .
   git commit -m "descriptive message about the changes"
   git push origin main
   ```

## Key Patterns and Conventions

### Component Organization
- UI components use the ShadcnUI pattern with Radix UI primitives and Tailwind CSS
- Feature components are placed in `src/components/`
- Pages are placed in `src/pages/`

### Routing
- All routes are defined in `src/App.tsx`
- New routes should be added above the catch-all "*" route
- The `NotFound` component handles 404 pages

### State Management
- React Query is used for server state management
- Component-local state uses React hooks
- See `src/hooks/` for custom hooks like `use-mobile` and `use-toast`

### UI Components
- Use existing ShadcnUI components from `components/ui/` when possible
- Follow the established pattern in `components/ui/` for new UI components
- Use the Tailwind CSS utility classes for styling

### Navigation
The site uses React Router with a base path of `/aaronhuff_xyz/` for GitHub Pages deployment. The 404 page (`public/404.html`) handles client-side routing by storing the path in sessionStorage and redirecting to the base URL.

## Common Tasks

### Adding a New Page
1. Create page component in `src/pages/`
2. Add route in `src/App.tsx` above the catch-all route
3. Update navigation in `src/components/Navigation.tsx` if needed

### Adding UI Components
1. Use shadcn CLI or copy existing component structure
2. Place in `src/components/ui/`
3. Follow Radix UI + Tailwind CSS patterns

### Deployment
The site is deployed to GitHub Pages. The homepage in `package.json` is configured accordingly.
