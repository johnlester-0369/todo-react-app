# ✅ Todo App

> A browser-based task manager built with React 19, TypeScript, and Tailwind CSS —
> no account, no server, no data leaves your browser.

[![React](https://img.shields.io/badge/React-19.1-61dafb?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white)](https://vite.dev)

## What It Does

Todo App lets you create, complete, and delete tasks entirely in your browser. Every change saves automatically to `localStorage` — your list survives page reloads, browser restarts, and device sleep without any account or server. A theme toggle switches between light and dark mode, with your preference stored and restored on every visit.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. That's it — no environment variables, no database, no configuration.

## Features

- **Add tasks** — Type in the input field (up to 200 characters) and press Enter or click Add
- **Complete tasks** — Click the checkbox to toggle completion; completed tasks move to a separate Completed section
- **Undo completion** — Click the checkbox on a completed task to move it back to Active
- **Delete tasks** — Hover over any task to reveal the trash icon, then click to remove it
- **Dark mode** — Toggle between light and dark themes via the sun/moon icon in the header
- **Auto-save** — Todos are written to `localStorage` on every change; no manual save needed
- **Task stats** — Live count of active tasks remaining and completed tasks shown above the list
- **Empty state** — A friendly prompt appears when no todos exist

## Usage

### Adding a Task

Type into the input at the top of the list. The Add button stays disabled until at least one non-whitespace character is present. Tasks are capped at 200 characters. On submit, the new task appears at the top of the Active section and the input clears.

### Completing and Uncompleting a Task

Click the checkbox on any task to toggle its `completed` state. Completed tasks render with a strikethrough and move to the Completed section. Click the checkbox again to restore a task to Active.

### Deleting a Task

Hover over a task row to reveal the delete button in the top-right corner of that row. Click it to remove the task permanently. Deletion is immediate — there is no confirmation prompt.

### Switching Theme

Click the moon icon (in light mode) or sun icon (in dark mode) in the top-right of the header. Your selection is stored in `localStorage` under the key `theme`. On the next page load the stored value is read before React mounts, so the correct theme is applied before anything renders — no flash of the wrong theme.

If no stored preference exists on first visit, the app reads your OS-level `prefers-color-scheme` setting and uses that as the default.

## Architecture

```
src/
├── main.tsx                  # React 19 root — mounts App inside StrictMode
├── App.tsx                   # State root — owns the todos array; handles add, toggle, delete
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Sticky header with GitHub link and theme toggle button
│   │   └── Footer.tsx        # Author credit, GitHub link, dynamic copyright year
│   ├── common/
│   │   ├── TodoList.tsx      # Input form, stats bar, Active/Completed sections, empty state
│   │   └── TodoItem.tsx      # Single todo row — checkbox, text, hover-reveal delete button
│   │                         # Also exports the Todo interface used across the app
│   └── ui/
│       └── Button.tsx        # Shared button with variants (primary, secondary, ghost,
│                             # danger, unstyled) and sizes (sm, md, lg); supports loading state
├── hooks/
│   └── useTheme.ts           # Reads and writes localStorage 'theme'; adds/removes .dark on <html>
└── styles/
    ├── globals.css           # Tailwind directives and base layer; imports both theme files
    └── theme/
        ├── light.css         # CSS custom properties for light theme on :root
        └── dark.css          # CSS custom properties for dark theme on .dark
```

### Data Model

```typescript
interface Todo {
  id: string        // Generated via crypto.randomUUID() on creation
  text: string      // User input, max 200 characters
  completed: boolean
  createdAt: number // Date.now() timestamp, set at creation
}
```

The todos array is managed in `App.tsx` with `useState`. A `useEffect` writes the full array to `localStorage` under the key `todos` as JSON on every change. On mount, the initial state is read from `localStorage` (with a try/catch guard for parse failures).

### Theme System

Tailwind's `darkMode: 'class'` strategy is used throughout. Both themes are defined as CSS custom properties (RGB triplets) — light values on `:root` in `light.css`, dark values on `.dark` in `dark.css`. Tailwind's color config maps semantic token names (`primary`, `surface-1`, `surface-2`, `text`, `headline`, `muted`, `border`, `error`, etc.) to these variables using the `rgb(var(--color-x) / <alpha-value>)` pattern, which preserves full Tailwind opacity modifier support.

The `useTheme` hook manages the `.dark` class on `document.documentElement`. An inline `<script>` in `index.html` runs synchronously before the React bundle loads to apply the correct class immediately, preventing a flash of incorrect theme on page load.

## Tech Stack

| Tool | Version | Role |
|---|---|---|
| React | ^19.1.1 | UI framework |
| TypeScript | ~5.9.3 | Static typing (strict mode, ES2022 target) |
| Tailwind CSS | ^3.4.17 | Utility-first styling with custom design tokens |
| Vite | ^7.1.7 | Dev server and production bundler |
| lucide-react | ^0.553.0 | Icons (Moon, Sun, Github, trash) |
| ESLint | ^9.36.0 | Linting with `react-hooks`, `react-refresh`, `typescript-eslint` |
| Prettier | ^3.6.2 | Code formatting — `semi: false`, `singleQuote: true` |
| PostCSS + Autoprefixer | ^8.5.6 / ^10.4.21 | CSS processing for Tailwind output |

## Scripts

| Command | What It Does |
|---|---|
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Type-check with `tsc -b`, then produce a production bundle via Vite |
| `npm run preview` | Serve the production build locally for verification |
| `npm run lint` | Run ESLint across all TypeScript and TSX source files |
| `npm run format` | Run Prettier across the entire project |

## Contributing

1. Fork the repository and create a feature branch from `main`
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Make your changes — TypeScript `strict` mode is enforced; unused locals and unused parameters are compile errors
5. Run `npm run lint` and `npm run format` before committing
6. Open a pull request against `main`

Code style is enforced automatically by Prettier (`semi: false`, `singleQuote: true`) and ESLint with the `react-hooks` and `typescript-eslint` rule sets.

---

**Made by John Lester** • [GitHub](https://github.com/johnlester-0369)