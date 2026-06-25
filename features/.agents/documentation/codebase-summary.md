# snowind-astro-features

## Summary
AI agent feature modules for Snowind Astro — actions, adaptaters, agent configurations, CLI commands, and workflows for AI-assisted component generation and translation.

## Dependencies
- `@agent-smith/server` — Server utilities (local file reference)
- `@agent-smith/cli` — CLI tooling
- `@agent-smith/feat-fs` — Filesystem feature utilities
- `@agent-smith/feat-vision` — Vision/image processing features
- `@inquirer/select` — Interactive CLI prompts

## Used By
- AI agents in `features/agents/` — consume actions and adaptaters
- Development workflow — actions triggered by agent configurations

## Entry Point
- `features/actions/` — AI action scripts for component creation/editing
- `features/workflows/` — YAML workflow definitions for translation pipelines
- `features/agents/` — YML agent configuration files
- `features/cmds/` — CLI command scripts

## Key Files
| File | Purpose |
|------|---------|
| `features/actions/astro-translate-component.js` | AI action to translate Astro components |
| `features/actions/astro-update-translations.js` | Update translations in components |
| `features/adaptaters/adapt-edit-component.js` | Adapt input for component editing |
| `features/adaptaters/adapt-read-translations.js` | Extract translations from components |
| `features/workflows/astro-extract-translations.yml` | Workflow: extract translations |
| `features/workflows/astro-integrate-translations.yml` | Workflow: integrate translations |
| `features/agents/astro-component-chat.yml` | Agent config: component chat |
| `features/agents/astro-component-edit.yml` | Agent config: component editing |
| `features/cmds/design-component.mjs` | CLI command for component design |
| `features/utils.ts` | Shared utility functions |

## Architecture
- **Actions + Adaptaters pattern**: Actions define AI operations; adaptaters transform data between formats
- **YML agent configs**: Agent behaviors defined as YAML — consumed by agent-smith framework
- **Workflow definitions**: Multi-step translation pipelines as YAML workflows
- **CLI commands**: Node.js scripts for interactive component design

## Related
- See `../.agents/documentation/codebase-summary.md` — Root project summary
