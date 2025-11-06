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

Built with Vue 3, Vite, TypeScript, Pinia, and Vue Router.
