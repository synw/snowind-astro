# Snowind Astro Features

## Mission

AI feature library that drives AI-assisted component creation, editing, and translation for the Snowind Astro site via actions, agent configs, workflows, and CLI commands.

## Structure

| Directory | Purpose |
|-----------|---------|
| `features/actions/` | Node.js action scripts (write/translate/edit components) |
| `features/adaptaters/` | Data transformation scripts |
| `features/agents/*.yml` | Agent configuration YAMLs |
| `features/workflows/*.yml` | Translation workflow definitions |
| `features/cmds/` | CLI command scripts |
| `features/fragments/` | Reusable prompt fragments (e.g. colors.md) |
| `features/utils.ts` | Shared TypeScript utilities |

## Conventions

- **Node ESM scripts**: `.js`/`.mjs` actions import from `@agent-smith/*` packages and run through the Agent Smith CLI (`lm`).
- **YML definitions**: agent and workflow configs live in `features/agents/` and `features/workflows/`.
- (subset of root conventions)

## Quick Start for AI Agents

1. Read `.agents/documentation/codebase-summary.md` for technical summary
2. Explore key files listed in codebase-summary.md
3. Run actions via the Agent Smith CLI after `npm i -g @agent-smith/cli` and creating `config.yml`

## Documentation

- `.agents/documentation/codebase-summary.md` — Technical summary of this repo
- `../../AGENTS.md` — Project-wide context and conventions (workspace root)
