# Enquiry Form Context

## Repository State (as of 27 Nov 2025)

- **Framework:** Vue 3 + Vite
- **TypeScript:** Used throughout, including `.vue` files
- **State Management:** Pinia
- **Routing:** Vue Router
- **Testing:** Vitest + @vue/test-utils
- **Linting/Formatting:** ESLint (with Prettier integration)
- **Key Directories:**
  - `src/components/` — UI components
  - `src/views/` — Page-level components
  - `src/router/index.ts` — Routing setup
  - `src/stores/` — Pinia stores
  - `src/assets/` — CSS/static assets
  - `public/` — Static files
- **Current Pages:** Home, About, Tic-Tac-Toe (with board, cell, status, reset components)
- **Testing:** Unit tests for components and stores
- **Accessibility:** Noted as a goal for Tic-Tac-Toe, but not yet systematically implemented site-wide
- **Mobile Responsiveness:** CSS and component styles aim for responsive design

## Purpose of New Route

The new route `/enquiry-form` will serve as a demo page for an accessible, validated enquiry form. It will showcase:

- Form construction and validation (using Zod)
- WCAG AA accessibility compliance
- Modern Vue 3 + Vite patterns
- Integration with site routing and styling

This is primarily for demonstration and learning purposes, not for production use.
