# 🐦 RavenCRM

> A lightweight, AI-powered CRM built with React, TypeScript, Firebase, and Tailwind CSS. Designed for freelancers and small businesses to manage clients, tasks, and interactions—fast, smart, and beautifully simple.

---

## 🧠 Overview

RavenCRM is a modern web application focused on simplicity, speed, and smart automation. It includes seamless authentication (Google & Outlook), a clean modular architecture, and AI-driven features such as smart summaries, semantic search, and a built-in assistant.

The app is structured for scalability and developer productivity, using modern tooling and clean code principles.

---

## 📦 Release Notes

For full version history, see [`releaseNotes.md`](./releaseNotes.md)

---

## 💅 Tooling

- **Vite** – Fast build tool for React
- **React 19 + TypeScript** – Modern UI foundation
- **SASS** – Modular global styling (`Styles/`)
- **Prettier** – Consistent code formatting
- **ESLint** – Strict linting with TS/React rules
- **Vitest + Testing Library** – Unit testing with jsdom
- **Husky + lint-staged** – Pre-commit hooks: lint + test
- **GitHub Actions** – CI pipeline with formatting/linting/build/test

---

## 🧪 Scripts

| Script                  | Description                              |
| ----------------------- | ---------------------------------------- |
| `npm run dev`           | Run Vite in development mode             |
| `npm run build`         | Build the client bundle                  |
| `npm run build:ssr`     | Build the server-side (SSR) bundle       |
| `npm run start`         | Start Express server with SSR output     |
| `npm run preview`       | Preview static client build (non-SSR)    |
| `npm run test`          | Run all unit/component tests with Vitest |
| `npm run test:coverage` | Run tests with coverage report           |
| `npm run lint`          | Run ESLint for static code analysis      |
| `npm run lint:fix`      | Fix lint issues automatically            |
| `npm run format`        | Format code using Prettier               |
| `npm run format:check`  | Check if code is properly formatted      |
| `npm run prepare`       | Install Husky and setup Git hooks        |

---

## 🔁 Branching Strategy

- `main` – Stable production-ready branch
- `develop` – Integration branch
- `feature/GB#<num>-<description>` – Feature-specific branches (e.g. `feature/GB#18-testing`)

---

## 🌐 Routing (React Router v6)

Configured in `src/Routes/index.tsx`:

- `/` → Home page
- Additional routes (e.g. `/detail/:id`, `/wishlist`) will be modularized

SSR uses `StaticRouter`, and the client uses `BrowserRouter`.

---

## 🧠 SSR / Hydration

- Server entry: `src/Server/Server.tsx` (Express + `renderToString`)
- Client entry: `main.tsx` with `hydrateRoot`
- SSR bundle built with `vite.ssr.config.ts`
- Skeletons are rendered before client hydration

Hydration is delayed until JS loads, improving perceived performance.

---

## ✅ Testing Strategy

- Tests live next to components: `Component.test.tsx`
- `setupTests.ts` bootstraps Testing Library with `jsdom`
- Full coverage with `vitest run --coverage`
- Example: `Home.test.tsx` validates UI rendering

---

## 🚀 CI/CD Pipeline (GitHub Actions)

Workflow defined in `.github/workflows/ci.yml`

### Checks on every push or PR:

- ✅ Type-check (`tsc`)
- ✅ ESLint linting
- ✅ Prettier formatting check
- ✅ Vitest tests
- ✅ Build client and SSR bundles

### Badge

Included at top of README for build status.

---

## 📌 GitHub Project Board

> [🔗 View Project Board](https://github.com/users/ATTimmy/projects/1/views/1)

Tracks all features and tasks (GB# codes).

---

## 🧠 Extra Notes

- Avoid `any`, use strict typing
- Organize by features/components
- Use `feature/*` naming aligned with `GB#` codes

--
