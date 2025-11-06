# Copilot Instructions for vue-demo-1

## Project Overview

- **Framework:** Vue 3 + Vite
- **TypeScript:** Used throughout, including `.vue` files
- **State Management:** Pinia
- **Routing:** Vue Router
- **Testing:** Vitest + @vue/test-utils
- **Linting/Formatting:** ESLint (with Prettier integration)

## Key Directories & Files

- `src/` — Main source code
  - `components/` — Vue components
  - `views/` — Page-level components
  - `router/index.ts` — Vue Router setup
  - `stores/counter.ts` — Pinia store example
  - `assets/` — CSS and static assets
- `public/` — Static files (e.g., favicon)
- `vite.config.ts` — Vite config, includes Vue and Vue DevTools plugins
- `package.json` — Scripts, dependencies, and devDependencies
- `tsconfig.*.json` — TypeScript config for app, node, and tests
- `eslint.config.ts` — ESLint setup, includes Vitest and Vue rules

## Developer Workflows

- **Install dependencies:** `npm install`
- **Start dev server:** `npm run dev`
- **Build for production:** `npm run build`
- **Run unit tests:** `npm run test:unit`
- **Lint & auto-fix:** `npm run lint`
- **Format code:** `npm run format`
- **Type-check:** `npm run type-check`

## Patterns & Conventions

- **TypeScript in Vue:** Use `<script lang="ts">` in `.vue` files. Type-checking uses `vue-tsc`.
- **Component Structure:** Prefer composition API. Place reusable UI in `components/`, pages in `views/`.
- **Routing:** All routes are defined in `src/router/index.ts`.
- **State:** Use Pinia stores in `src/stores/`.
- **Testing:** Unit tests live in `src/components/__tests__/`. Use Vitest and @vue/test-utils.
- **Linting:** ESLint is configured for Vue, TypeScript, and Vitest. Prettier is integrated for formatting.
- **Aliases:** Use `@/` to refer to `src/` (see Vite and TS config).

## Integration Points

- **Vue DevTools:** Enabled via `vite-plugin-vue-devtools` in `vite.config.ts`.
- **External Libraries:** Pinia, Vue Router, Vitest, ESLint, Prettier.

## Examples

- **Importing a component:** `import HelloWorld from '@/components/HelloWorld.vue'`
- **Using a store:** `import { useCounterStore } from '@/stores/counter'`
- **Defining a route:** See `src/router/index.ts`
- **Writing a test:** See `src/components/__tests__/HelloWorld.spec.ts`

## Special Notes

- **TypeScript type-checking:** Use `vue-tsc` for `.vue` files, not plain `tsc`.
- **Lint/format ignores:** See `eslint.config.ts` for global ignores (e.g., `dist/`, `coverage/`).
- **Prettier config:** See `.prettierrc.json` for formatting rules.

---

If any section is unclear or missing, please provide feedback to improve these instructions.
