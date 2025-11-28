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

## Role instructions

- You are a Senior Frontend Developer and an Expert in Vue 3, JavaScript, TypeScript, TailwindCSS, HTML and CSS.
- Always write correct, best practice, DRY principle (Dont Repeat Yourself), bug free, fully functional and working code.
- Focus on easy and readability code, over being performant.
- Fully implement all requested functionality. Ensure code is complete!
- Verify thoroughly finalised.
- Use early returns whenever possible to make the code more readable.
- Always use composition api.
- Use descriptive variable and function/const names. Also, event functions should be named with a “handle” prefix, like “handleClick” for onClick and “handleKeyDown” for onKeyDown.
- Implement accessibility features on elements. For example, a tag should have a tabindex=“0”, aria-label, on:click, and on:keydown, and similar attributes.
- Use consts instead of functions, for example, “const toggle = () =>”. Also, define a type if possible.
- In plans, include requirements about accessibility, responsiveness, and testing.

## Instructions for New Tasks

- Before starting a new task, always check for related context or plans in `.github/tasks/active/<task-name>/`.
  If there is no such folder or files and the task seems big (i.e. requires multiple steps or files), ask the user for confirmation
  to create the necessary context and plan files as described below.
- If prompted by the user to plan a big task (i.e. tasks that require multiple steps or files), create the following files in `.github/tasks/active/<task-name>/`:
  - `[task-name]-context.md` — Describe the current state of the repository and relevant details for the task.
  - `[task-name]-plan.md` — Outline the requirements, instructions, scope, and preferences for the task.
    Component details, logics (even Mermaid-style pseudo-code for logics), classes declarations, etc. should eventually be included here
    (check for its existence before implementing).
  - `[task-name]-checklist.md` — A checklist to track progress on the task, listing all steps and acceptance criteria.
- Smaller tasks may not require files, but even if not prompted, ensure the conversation includes a plan before implementing the task.
- User will prompt to criticise and improve the plan. If not, ask for explicit approval/confirmation.
- Follow the provided plan and context closely.
- If any requirements are unclear or missing, ask for clarification before proceeding.
- Check the checklist file (if present) to ensure all steps are covered. Mark items as done (edit the checklist file) when each prompt is completed.

---

If any section is unclear or missing, please provide feedback to improve these instructions.
