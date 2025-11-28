# vue-demo-1

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

---

# Vue Tic-Tac-Toe App

A simple, accessible, and responsive Tic-Tac-Toe game built with Vue 3, Vite, TypeScript, Pinia, and Vue Router.

## Features

- Play Tic-Tac-Toe against another player (X vs O)
- Accessible UI: keyboard navigation, ARIA roles, live status updates
- Mobile responsive design
- Highlights winning cells
- Game status: win, draw, ongoing
- Reset button to start a new game
- Unit tested game logic and components

## Usage

### Play the game

- Visit `/tic-tac-toe` route in your browser
- Click or use keyboard to select cells
- First to get three in a row wins
- Reset to play again

## Accessibility

- All interactive elements are keyboard accessible
- ARIA roles and live regions for screen readers
- Winning cells are visually highlighted

## Mobile Support

- Responsive grid and controls for small screens
- Touch-friendly buttons

## Testing

- Unit tests for board, cell, and store logic
- Run tests:

```bash
npm run test:unit
```

## File Structure

- `src/views/TicTacToeView.vue`: Main game view
- `src/components/`: Board, Cell, Status, Reset components
- `src/stores/tictactoe.ts`: Pinia store for game logic
- `src/assets/main.css`: Styles and responsive design
- `src/components/__tests__/`: Component tests
- `src/stores/__tests__/`: Store tests

## Game Rules

- Players take turns placing X or O in empty cells
- First to get three in a row (vertical, horizontal, diagonal) wins
- If all cells are filled and no winner, game is a draw
- Cannot select occupied cells or play after game ends
- Game can be reset at any time

---

# Enquiry Form

A stepwise, accessible, and responsive enquiry form built with Vue 3, Vite, TypeScript, and Zod.

## Usage

- Visit the `/enquiry-form` route in your browser.
- Fill out all required fields (名前, メールアドレス, お問い合わせ内容, 利用規約同意).
- Optional fields: 電話番号, 添付ファイル (PDF/JPG/PNG, max 5MB).
- Error messages are shown in Japanese below each field if invalid.
- The submit button is disabled until all required fields are valid and ToS is agreed.
- On submit, a confirmation alert displays entered details (except file).
- Submitted data is saved to localStorage as an array of enquiries.
- Download all submitted enquiries as `enquiries.json` using the provided button.
- The form resets after successful submission.

## Accessibility

- All fields and controls have ARIA attributes and labels for screen readers.
- Required fields are visually marked and announced.
- Error messages use `aria-live` for polite updates.
- Keyboard navigation is fully supported (tab, enter, space).
- Color contrast meets WCAG AA standards for text, backgrounds, and error states.
- ToS section is scrollable and accessible with keyboard and screen readers.

## Responsiveness & Dark Mode

- The form layout adapts to mobile and desktop screens.
- Styles use CSS variables for easy theming and dark mode support.
- The textarea can only be resized vertically for better UX.
- Minimal, clean design for clarity and usability.

## Validation

- All validation is handled by Zod schema:
  - 名前: required, 2-50 chars
  - メールアドレス: required, valid email
  - 電話番号: optional, must start with 0, 10-11 digits, no hyphens
  - お問い合わせ内容: required, min 10 chars
  - 添付ファイル: optional, PDF/JPG/PNG only, max 5MB
  - 利用規約: must be checked
- Error messages are shown in Japanese and auto-focus the first invalid field on submit.

## Testing

- All major features are covered by unit tests in `src/components/__tests__/EnquiryForm.spec.ts`.
- Run tests:

```bash
npm run test:unit
```

---

Built with Vue 3, Vite, TypeScript, Pinia, and Vue Router.
