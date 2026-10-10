# snowind-astro

## Summary
AI-powered Astro template for multi-language static documentation sites with dynamic component generation and theming.

## Dependencies
- `@agent-smith/server` — Node server helper for dev mode
- `@agent-smith/types` — TypeScript type definitions
- `@agent-smith/wscli` — WebSocket CLI tools
- `@astrojs/vue` — Astro-Vue integration
- `@tailwindcss/vite` — Tailwind CSS v4 Vite plugin
- `vue` — Vue.js 3 for interactive components
- `astro` — Static site generator
- `@nanostores/persistent` — Persistent client-side state
- `@vueuse/core` — Vue composables
- `markstream-vue` — Vue streaming UI

## Used By
- AI agents in `features/agents/` — component creation/editing workflows
- Development server — runs alongside Astro dev server

## Entry Point
- `astro.config.mjs` — Astro config with Vue, i18n, Tailwind v4 plugin
- `src/server.ts` — Optional Node.js server entry for dev mode
- `src/conf.mjs` — Centralized configuration exports (theme, languages, navLinks)

## Key Files
| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro config with Vue, i18n, Tailwind v4 plugin |
| `src/conf.mjs` | Site configuration — theme, locales, navigation |
| `src/state.ts` | Nanostores for persistent client state (theme, lang, mobile) |
| `src/pages/[lang]/index.astro` | Main localized home page |
| `src/layouts/BaseLayout.astro` | Base layout wrapper for all pages |
| `src/components/TheHeader.astro` | Site header navigation component |
| `src/components/ThemeSwitcher.astro` | Theme switching UI |
| `src/components/LangSwitcher.vue` | Language/locale switcher |
| `src/services/inference.ts` | AI inference service integration |
| `src/scss/main.scss` | SCSS theme entry point |

## Architecture
- Astro-first: pages rendered at build time, Vue components hydrated for interactivity
- i18n routing: locale-prefixed paths (`/[lang]/page`) with default-locale redirection control
- State persistence: nanostores sync to localStorage for theme, language, and mobile state
- Theming via SCSS: multiple themes as SCSS partials, switched at runtime
→ Full detail: `project-nav.md` § Key Conventions & Patterns

## Related
- See `features/` — AI feature actions, agents, and workflows
- See `doc/` — Project documentation
