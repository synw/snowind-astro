# Snowind Astro

## Mission

Snowind Astro is an AI-powered static site generator template built with Astro, Vue, and Tailwind CSS that enables AI-assisted component creation, modification, and multi-language documentation sites.

## Repositories

| Repo | Path | Purpose |
|------|------|---------|
| `snowind-astro` | `/` | Main Astro site — pages, components, layouts, themes, server |
| `snowind-astro-features` | `/features` | AI agent features — actions, adaptaters, agents configs, cmds, fragments, workflows |

## Quick Start for AI Agents

1. Read `.agents/documentation/decision-tree.md` — the router: it tells you exactly which doc or source file your task needs.
2. Most tasks end here: go straight to the listed source files. Do not load every doc.
3. Load additional docs only when needed:
   - `.agents/documentation/project-overview.md` — only for conceptual context
   - `.agents/documentation/project-nav.md` — only for deep reference (conventions, snippets, maps)
4. Navigate to the relevant repo and read its `.agents/documentation/codebase-summary.md`.

## Conventions

→ See `.agents/documentation/project-nav.md` § Key Conventions & Patterns (single source of truth).

## Documentation

- `decision-tree.md` — Router: task → doc/file map
- `project-overview.md` — Concise context (~1 page)
- `project-nav.md` — Canonical deep reference (conventions, snippets, maps)
- `codebase-summary.md` — Machine-readable summary of this module (snowind-astro)
- `features/.agents/documentation/codebase-summary.md` — Machine-readable summary of the features module (snowind-astro-features)
