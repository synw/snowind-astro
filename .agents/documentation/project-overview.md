# Snowind Astro — Project Overview

> **Role**: Concise "what is this" for context loading (~1 page overview).
> **See also**: `.agents/documentation/decision-tree.md` to find the right doc for your task.
> **See also**: `.agents/documentation/project-nav.md` for deep reference (conventions, snippets, maps).

---

## What is Snowind Astro?

Snowind Astro is a modular, AI-assisted static site template built on Astro that generates multi-language documentation sites with dynamic component creation, theming, and responsive design. It combines Astro's build-time performance with Vue.js interactivity and Tailwind CSS styling, plus an AI feature layer (in `features/`) that drives component generation and editing.

---

## Core Capabilities

- **AI Component Generation** — create and modify components via YML agents in `features/agents/`
- **Multi-Language Support** — i18n routing (`/[lang]/page`) configured in `src/conf.mjs`
- **Theming System** — runtime SCSS themes configurable in `src/conf.mjs`
- **Semantic Colors** — Tailwind semantic color utilities (prim, sec, danger, success) — see `colors.md`
- **Responsive Design** — Tailwind CSS v4 with mobile breakpoints
- **AI Feature Layer** — actions, adaptaters, workflows, and CLI commands in `features/`

---

## Key Architecture Patterns

- **Astro + Vue Integration** — Astro renders pages/layouts at build time; Vue components hydrate for interactivity
- **Nanostores State** — persistent client state (`theme`, `lang`, `mobile`) via `@nanostores/persistent`
- **ES Module Config** — centralized config in `src/conf.mjs` (theme, languages, nav links)
- **SCSS Theming** — multiple themes as SCSS partials, switched at runtime
- **Static Output** — built to `./dist/` via `astro build`; optional Node server for dev via `@agent-smith/server`
