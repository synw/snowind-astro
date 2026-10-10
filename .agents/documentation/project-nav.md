> **Purpose**: Single-reference map for AI coding agents to understand, navigate, and modify the Snowind Astro codebase.

## Project Overview

Snowind Astro is an AI-powered static site generator template built with Astro, Vue, and Tailwind CSS. It generates multi-language documentation sites with dynamic component creation/modification via AI agents, a runtime theming system, and responsive design.

## Architecture Principles

| Principle | Detail | Key Files |
|-----------|--------|-----------|
| Astro-first rendering | Pages built at compile time; Vue components hydrated for interactivity | `astro.config.mjs`, `src/pages/` |
| i18n routing | Locale-prefixed paths (`/[lang]/page`) with configurable default redirect | `src/conf.mjs`, astro config |
| Persistent state | Client-side state synced to localStorage via nanostores | `src/state.ts` |
| SCSS theming | Multiple themes as SCSS partials, switched at runtime | `src/scss/`, `src/conf.mjs` |
| AI actions | Node.js scripts for component generation/editing | `features/actions/` |

## Dependency Graph

```
snowind-astro (root)
├── astro (static site generator)
├── @astrojs/vue (Vue integration)
├── @tailwindcss/vite (CSS v4 plugin)
├── vue (UI components)
├── @nanostores/persistent (state management)
└── @agent-smith/* (server, types, wscli)

features/
├── @agent-smith/server (local file ref)
├── @agent-smith/cli
├── @agent-smith/feat-fs
├── @agent-smith/feat-vision
└── @inquirer/select (CLI prompts)
```

**Flow**: Astro pages render → Vue components hydrate → nanostores manage state → AI actions in `features/` modify components.

## Packages/Modules

### `src/` — Main Application
- **Purpose**: Astro site source code
- **Key files**:
  - `src/pages/[lang]/` — Localized Astro pages
  - `src/components/` — Vue (.vue) and Astro (.astro) components
  - `src/layouts/` — BaseLayout, RootLayout, EmptyLayout
  - `src/conf.mjs` — Configuration exports
  - `src/state.ts` — Nanostore definitions
  - `src/services/inference.ts` — AI inference client
- **Key types**: `AgentInferenceOptions`, `ParsedNode`

### `features/` — AI Features
- **Purpose**: Agent-driven actions, workflows, and CLI commands
- **Key files**:
  - `features/actions/` — JS action scripts (translate, edit, write components)
  - `features/adaptaters/` — Data transformation scripts
  - `features/agents/*.yml` — Agent configuration YAMLs
  - `features/workflows/*.yml` — Translation workflow definitions
  - `features/cmds/` — CLI command scripts
- **Key types**: None (Node.js scripts + YML configs)

### `doc/` — Documentation
- **Purpose**: Project documentation and translation guides
- **Key files**: `README.md`, `translations.md`

## UI/Frontend

### Components
| Component | Type | Purpose |
|-----------|------|---------|
| TheHeader.astro | Astro | Site header with navigation |
| TheFooter.astro | Astro | Site footer |
| TheLogo.vue | Vue | Logo component |
| ColorMode.vue | Vue | Color/dark mode toggle |
| ThemeSwitcher.astro | Astro | Theme selection UI |
| LangSwitcher.vue | Vue | Language/locale switcher |
| NavLinks.astro | Astro | Navigation links |
| EditAiComponent.vue | Vue | AI component editing interface |

### Themes
`bluestar`, `lightblue`, `green-pink`, `pink-black`, `blue-yellow` — defined in `src/scss/`

### Colors
Semantic color utilities via Tailwind plugin — see [colors.md](./colors.md) for full reference (prim, sec, danger, success, warning, info, background, light, etc.). Full CSS stack (Tailwind 4 + SCSS custom-property theming) documented in [css-system-guide.md](./css-system-guide.md).

## Code Snippets

### Creating a new Astro page
```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---
<BaseLayout title="My Page">
    <h1>Hello World</h1>
</BaseLayout>
```

### Accessing state in Vue
```vue
<script setup lang="ts">
import { themeStore, langStore } from '../state.ts';
const currentTheme = themeStore;
</script>
```

### Adding a new locale
```ts
// src/conf.mjs
languages: {
    ja: { enname: "Japanese", name: "日本語", flag: '🇯🇵' },
}
```

### Running AI action
```bash
# From features/ directory
node actions/astro-translate-component.js
```

## Documentation Links

| Resource | Path |
|----------|------|
| Project index | [AGENTS.md](../../AGENTS.md) |
| Decision tree | [decision-tree.md](./decision-tree.md) |
| Project overview | [project-overview.md](./project-overview.md) |
| Frontend guide | [frontend-guide.md](./frontend-guide.md) |
| CSS system guide | [css-system-guide.md](./css-system-guide.md) |
| Root codebase summary | [codebase-summary.md](./codebase-summary.md) |
| Semantic colors | [colors.md](./colors.md) |
| Features README | [features/README.md](../../features/README.md) |
| Project README | [README.md](../../README.md) |

## Key Conventions & Patterns

| Convention | Detail |
|------------|--------|
| Config pattern | ES module exports in `src/conf.mjs` — theme, languages, navLinks |
| State pattern | Nanostores (`persistentAtom`, `persistentBoolean`) for client state |
| Page structure | Astro pages in `src/pages/[lang]/` wrapped by layouts |
| Component types | Vue (.vue) for UI; Astro (.astro) for layout/navigation |
| Theme system | SCSS partials in `src/scss/`; theme name set in conf.mjs |
| i18n | Locale prefix routing; language objects in conf.mjs |
| AI actions | Node.js scripts in `features/actions/`; YML configs in `features/agents/` |
| Build output | Static site to `./dist/` via `astro build` |
