# Documentation Decision Tree

> This decision tree helps AI agents find the right documentation for their task. Start here, then follow the links to detailed docs.

## I need to understand the project

- **Project overview**: [project-overview.md](./project-overview.md) — One-page summary of what Snowind Astro is
- **Navigation map**: [project-nav.md](./project-nav.md) — Architecture, dependencies, code structure
- **Technical summary**: [codebase-summary.md](./codebase-summary.md) — Dependencies, entry points, key files

## I need to work on the main site (`/`)

1. Read [AGENTS.md](../../AGENTS.md) for project conventions and quick start
2. Check [codebase-summary.md](./codebase-summary.md) for technical details
3. Review `src/conf.mjs` for configuration, `src/state.ts` for state management
4. Pages: `src/pages/`, Components: `src/components/`, Layouts: `src/layouts/`

## I need to work on the frontend (pages, components)

1. Read [frontend-guide.md](./frontend-guide.md) for practical guides on:
   - Creating new pages (static and i18n)
   - Adding Astro or Vue components to pages
   - Editing components directly or via AI actions
2. Check [project-nav.md](./project-nav.md) for component locations and patterns
3. Review `src/layouts/` for layout wrapper options

## I need to work on AI features (`/features`)

1. Read [features/README.md](../../features/README.md) for feature documentation
2. Check `features/actions/` for AI action scripts
3. Check `features/agents/` for YML agent configurations
4. Check `features/workflows/` for workflow definitions
5. Check `features/cmds/` for CLI commands

## I need detailed documentation

| Topic | Path |
|-------|------|
| Project overview | [project-overview.md](./project-overview.md) |
| Architecture & navigation | [project-nav.md](./project-nav.md) |
| Technical summary | [codebase-summary.md](./codebase-summary.md) |
| Conventions & patterns | [AGENTS.md](../../AGENTS.md) |

## Common Tasks (Quick Reference)

| Task | Start Here |
|------|------------|
| Understand the project | [project-overview.md](./project-overview.md) |
| Find code location | [project-nav.md](./project-nav.md) → [codebase-summary.md](./codebase-summary.md) |
| Create a new page | [frontend-guide.md](./frontend-guide.md) |
| Add component to page | [frontend-guide.md](./frontend-guide.md) |
| Edit a component | [frontend-guide.md](./frontend-guide.md) |
| Modify theme | `src/conf.mjs` + `src/scss/` |
| Add AI feature | `features/actions/` or `features/agents/` |
| Run dev server | `npm run dev` (see README.md) |

## Conventions

For full conventions and patterns, see [AGENTS.md](../../AGENTS.md).

Key patterns: ES module config, nanostores state, Astro+Vue components, Tailwind CSS v4, i18n routing.
