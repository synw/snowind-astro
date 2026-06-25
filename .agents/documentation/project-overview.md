# Snowind Astro — Project Overview

> Role: AI-powered static site generator template for documentation sites
> See also: [decision-tree.md](./decision-tree.md) | [project-nav.md](./project-nav.md)

## What is Snowind Astro?

Snowind Astro is a modular, AI-assisted static site template built on Astro that generates multi-language documentation sites with dynamic component creation, theming, and responsive design. It combines Astro's performance with Vue.js interactivity and Tailwind CSS styling.

## Core Capabilities

- **AI Component Generation**: Create and modify components via AI agents (YML configs in `features/agents/`)
- **Multi-Language Support**: 15+ locales with i18n routing (`/[lang]/page`)
- **Theming System**: 5 built-in themes via SCSS, configurable in `src/conf.mjs`
- **Responsive Design**: Tailwind CSS v4 with mobile breakpoints
- **Dynamic Features**: Actions, adaptaters, and workflows for AI-assisted development

## Repository Structure

| Directory | Purpose |
|-----------|---------|
| `/src/` | Main application — pages, components, layouts, services, config |
| `/src/pages/` | Astro pages (routing-based) |
| `/src/components/` | Vue UI components (.vue) and Astro layout components (.astro) |
| `/src/layouts/` | Base and root Astro layouts |
| `/src/scss/` | SCSS theme files |
| `/src/styles/` | Tailwind CSS custom styles |
| `/src/services/` | API/inference services |
| `/features/` | AI features — actions, agents, workflows, commands |
| `/doc/` | Project documentation |
| `/public/` | Static assets (logo, favicon) |

## Key Architecture Patterns

- **Astro + Vue Integration**: Astro for pages/layouts, Vue for interactive components
- **Nanostores State**: Persistent client-side state (`theme`, `lang`, `mobile`) via `@nanostores/persistent`
- **ES Module Config**: Centralized config in `src/conf.mjs` — theme, languages, nav links
- **Static Output**: Built to `./dist/` with `astro build`
- **Server Helper**: Optional Node server via `@agent-smith/server` for dev mode

## Quick Reference: Common Tasks

| Task | Files to Modify |
|------|-----------------|
| Add a page | `src/pages/[lang]/`, `src/conf.mjs` (navLinks) |
| Change theme | `src/conf.mjs` (theme), add SCSS in `src/scss/` |
| Create component | `src/components/` (.vue for UI, .astro for layout) |
| Add locale | `src/conf.mjs` (languages object) |
| AI action | `features/actions/`, `features/workflows/` |
| Agent config | `features/agents/*.yml` |

## Code Snippets

### Adding a new page
```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---
<BaseLayout title="New Page">
    <div>New content here</div>
</BaseLayout>
```

### Reading state
```ts
import { themeStore, langStore } from "./state.ts";
console.log(themeStore.get()); // current theme
```

### Configuring a new theme
```ts
// src/conf.mjs
const theme = "mytheme"; // must match a file in src/scss/
```

## Documentation Links

| Resource | Path |
|----------|------|
| Project index | [AGENTS.md](../../AGENTS.md) |
| Decision tree | [decision-tree.md](./decision-tree.md) |
| Navigation map | [project-nav.md](./project-nav.md) |
| Technical summary | [codebase-summary.md](./codebase-summary.md) |
| Features README | [features/README.md](../../features/README.md) |
