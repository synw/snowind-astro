# Documentation Decision Tree

> Quick guide: What to read based on your task.
> For most tasks this file alone is enough — follow the path and open the source file directly.

## I need to understand the project

- High-level overview → `.agents/documentation/project-overview.md`
- Full navigation map & deep reference → `.agents/documentation/project-nav.md`
- Structured technical summary → `codebase-summary.md` (root) or `features/.agents/documentation/codebase-summary.md`

## I need to work on the main site (`snowind-astro`)

1. Read `codebase-summary.md` for technical summary
2. Configuration: `src/conf.mjs` — State: `src/state.ts`
3. Pages: `src/pages/` · Components (Vue): `src/components/*.vue` · Layouts/navigation (Astro): `src/layouts/`, `src/components/*.astro`

## I need to work on AI features (`snowind-astro-features`)

1. Read `features/.agents/documentation/codebase-summary.md` for technical summary
2. Actions: `features/actions/` · Agents: `features/agents/*.yml` · Workflows: `features/workflows/*.yml`
3. Commands: `features/cmds/` · Adaptaters: `features/adaptaters/` · Fragments: `features/fragments/`

## I need practical frontend guides (pages, components)

- Creating pages & adding components → `.agents/documentation/frontend-guide.md`

## I need colors and styling

- Semantic color utilities → `.agents/documentation/colors.md`
- CSS system (Tailwind 4 + SCSS theming) → `.agents/documentation/css-system-guide.md`

## Common Tasks (Quick Reference)

| Task | Go To |
|------|-------|
| Understand the project | `.agents/documentation/project-overview.md` |
| Find code location | `.agents/documentation/project-nav.md` → `codebase-summary.md` |
| Create a new page | `.agents/documentation/frontend-guide.md` → `src/pages/[lang]/` |
| Add component to page | `.agents/documentation/frontend-guide.md` → `src/components/` |
| Edit a component | `features/actions/` + `codebase-summary.md` |
| Modify theme | `src/conf.mjs` + `src/scss/` |
| Use semantic colors | `.agents/documentation/colors.md` |
| Add AI feature | `features/actions/` or `features/agents/` |
| Run dev server | `npm run dev` (see README.md) |

→ Conventions & patterns: `.agents/documentation/project-nav.md` § Key Conventions & Patterns.
