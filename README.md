# Uber Landing Page (React)

A responsive Uber-style landing page built with React, TypeScript and Vite. It includes a hero section with a sticky "See prices" call to action, service cards, and a set of accessible modal dialogs (log in, sign up, car rental, city selection, and more).

> Replace the bracketed placeholders below (`[...]`) with your own details.

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Accessibility](#accessibility)
- [Code quality](#code-quality)
- [Contributing](#contributing)

## Features

- Hero section with ride search fields and a sticky "See prices" button
- Service cards (Ride, Motor, Drive and others) that open detail modals
- Modals for log in, sign up, city selection, car rental, plans and prices
- Navbar, footer with link columns and social icons, app download and business sections
- Keyboard-friendly modals: focus moves in on open, Tab stays inside, Esc closes, focus returns to the trigger
- Responsive layout with a mobile menu

## Tech stack

| Area       | Tools                                                                |
| ---------- | -------------------------------------------------------------------- |
| Framework  | React, TypeScript                                                    |
| Build tool | Vite                                                                 |
| Styling    | Plain CSS (one stylesheet per component or modal)                    |
| Icons      | Font Awesome (`@fortawesome/react-fontawesome`)                      |
| Linting    | ESLint with `eslint-plugin-jsx-a11y` and `eslint-plugin-react-hooks` |
| Formatting | Prettier                                                             |

## Getting started

### Prerequisites

- Node.js [version, e.g. 20 or later]
- npm (comes with Node.js)

### Installation

```bash
git clone [your-repository-url]
cd uber-landing-page-react
npm install
```

If `npm install` reports a peer dependency conflict for `eslint-plugin-jsx-a11y` (it does not yet declare support for ESLint 10), use:

```bash
npm install --legacy-peer-deps
```

### Run locally

```bash
npm run dev
```

Open the address shown in the terminal (usually `http://localhost:5173`).

## Available scripts

| Command            | What it does                                          |
| ------------------ | ----------------------------------------------------- |
| `npm run dev`      | Starts the development server with hot reload         |
| `npm run build`    | Type-checks and creates a production build in `dist/` |
| `npm run preview`  | Serves the production build locally                   |
| `npm run lint`     | Runs ESLint, including accessibility rules            |
| `npm run lint:fix` | Runs ESLint and fixes what it can automatically       |
| `npm run format`   | Formats everything in `src/` with Prettier            |

## Project structure

```
src/
  assets/            Images and icons
  components/
    common/          Reusable pieces (Card, Section, Button, QR code)
    modals/          Modal dialogs (login, signup, city, drive, plan, ...)
    Navbar.tsx
    HeroSection.tsx
    Footer.tsx
    ...              Other page sections
  styles/
    modal-styles/    One stylesheet per modal, plus shared globalmodal.css
  useModalFocus.ts   Shared hook for modal focus handling
  App.tsx
  main.tsx
```

## Accessibility

Accessibility was checked with Lighthouse and manual keyboard testing.

- **Modals:** `role="dialog"`, `aria-modal`, and a labelled title. The `useModalFocus` hook moves focus into the dialog, traps Tab, closes on Esc, and restores focus to the button that opened it.
- **Controls:** actions use `<button>`, navigation uses `<a href>`. Icon-only controls have an `aria-label`.
- **Forms:** every input has a label connected through `htmlFor` and `id`.
- **Linting:** `eslint-plugin-jsx-a11y` flags common mistakes while you code.

When adding a new modal, call `useModalFocus(isOpen, onClose)` and attach the returned ref to the dialog element.

## Code quality

- Run `npm run format` and `npm run lint` before committing.
- Avoid `console.log` in committed code.
- Prefer real `<button>` and `<a href>` elements over clickable `<div>`s.
- Keep DOM order the same as visual order so keyboard navigation makes sense.

## Contributing

1. Create a branch: `git checkout -b feature/your-change`
2. Make your changes and run `npm run lint` and `npm run build`
3. Commit with a clear message, for example `feat: add plan modal`
4. Open a pull request

## License

All rights reserved
