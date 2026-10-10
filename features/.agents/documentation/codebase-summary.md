# snowind-astro-features

## Summary
AI feature library that drives AI-assisted component creation, editing, and translation for the Snowind Astro site.

## Dependencies
- `@agent-smith/cli` — Agent Smith CLI (`lm`) that runs actions/agents
- `@agent-smith/server` — local file helpers (file-system ref)
- `@agent-smith/feat-fs` — feature filesystem utilities
- `@agent-smith/feat-vision` — image/vision handling
- `@inquirer/select` — CLI prompts

## Used By
- AI agents and workflows in `features/agents/` and `features/workflows/`
- Snowind Astro site components (read/written by actions)

## Entry Point
- `features/actions/*.js` — Node.js action scripts (write/translate/edit components)
- `features/utils.ts` — Shared TypeScript utilities

## Key Files
| File | Purpose |
|------|---------|
| `features/actions/write-component.js` | Generate a new component |
| `features/actions/astro-translate-component.js` | Translate component content |
| `features/actions/astro-update-translations.js` | Apply translation updates |
| `features/actions/revert-component.js` | Revert component changes |
| `features/adaptaters/adapt-plan-to-code.js` | Transform a plan into code |
| `features/adaptaters/adapt-read-component.js` | Read/parse a component |
| `features/agents/*.yml` | Agent configuration YAMLs |
| `features/workflows/*.yml` | Translation workflow definitions |
| `features/cmds/design-component.mjs` | Component design CLI command |

## Architecture
- Node ESM action scripts import from `@agent-smith/*` and run via the Agent Smith CLI
- YML agent/workflow configs declare prompts, adaptaters, and steps
- Actions read components → adapt/trans data → write back to `src/`
→ Full detail: `project-nav.md` § Key Conventions & Patterns

## Related
- See root `codebase-summary.md` — the site these features modify
- See `../../AGENTS.md` — project-wide context (workspace root)
