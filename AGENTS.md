# Snowind Astro

## Mission

Snowind Astro is an AI-powered static site generator template built with Astro, Vue, and Tailwind CSS that enables AI-assisted component creation, modification, and multi-language documentation sites.

## Repositories

| Repo Name | Path | Purpose |
|-----------|------|---------|
| snowind-astro | `/` | Main Astro site — pages, components, layouts, themes, and server |
| snowind-astro-features | `/features` | AI agent features — actions, adaptaters, agents configs, cmds, fragments, workflows |

## Conventions (for AI Agents)

1. **Configuration via ES modules**: Site config lives in `src/conf.mjs` — exports theme, languages, navLinks. Modify here to change site structure.
2. **State with nanostores**: Persistent state management using `@nanostores/persistent` — see `src/state.ts` for stores (theme, lang, mobile).
3. **Astro pages + Vue components**: Pages go in `src/pages/` wrapped by layouts; UI components are Vue (.vue); layout/navigation components are Astro (.astro).
4. **Tailwind CSS v4**: Uses `@tailwindcss/vite` plugin — styles defined in `src/styles/` and `src/scss/` for theming.
5. **i18n routing**: Multi-language support with locale prefixes (`/[lang]/page`) — languages configured in `src/conf.mjs`.

## Quick Start for AI Agents

1. Read `.agents/documentation/decision-tree.md` to find the right documentation
2. Review `.agents/documentation/project-overview.md` for project overview
3. Check `.agents/documentation/project-nav.md` for comprehensive navigation map
4. Read `.agents/documentation/codebase-summary.md` for technical details

## Documentation

| File | Description |
|------|-------------|
| `AGENTS.md` | This file — project root index with mission, conventions, and quick start |
| `.agents/documentation/decision-tree.md` | Quick guide to find the right documentation based on your task |
| `.agents/documentation/project-overview.md` | Concise one-page overview of the project |
| `.agents/documentation/project-nav.md` | Comprehensive navigation map — architecture, dependencies, snippets |
| `.agents/documentation/codebase-summary.md` | Technical summary with 7-section format |
