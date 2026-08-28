# Snowind Astro

AI-powered static site generator template built with Astro, Vue, and Tailwind CSS. Part of the [Agent Smith](https://github.com/lynxai-team/agent-smith) toolkit — generate multi-language documentation sites with dynamic component creation and theming.

## Features

- **Multi-language support** — i18n routing with locale-prefixed paths (`/[lang]/page`)
- **AI-assisted development** — Create and modify Vue/Astro components via Agent Smith workflows
- **SCSS theming** — Multiple themes defined as SCSS partials, switchable at runtime
- **Responsive design** — Built with Tailwind CSS v4
- **Dark mode** — Persistent theme state synced to localStorage
- **Modular architecture** — Astro pages + Vue components with clear separation of concerns

## Documentation

### For AI Agents
- [Codebase Summary](.agents/documentation/codebase-summary.md) — Architecture, key files, and patterns for the Snowind Astro project
- [Project Overview](.agents/documentation/project-overview.md) — Concise one-page overview of the project
- [Project Navigation](.agents/documentation/project-nav.md) — Comprehensive navigation map with architecture and dependencies
- [Decision Tree](.agents/documentation/decision-tree.md) — Quick guide to find the right documentation
- [AGENTS.md](./AGENTS.md) — Project conventions and quick start for AI agents

### For Humans
- [Project README](./README.md) — Getting started and usage guide
- [AI Experiments](./doc/README.md) — Documentation on AI code generation features
- [Translations Guide](./doc/translations.md) — Multi-language support documentation

## Install

1. **Clone the Repository**

   ```bash
   git clone https://github.com/synw/snowind-astro.git
   mv snowind-astro myproject
   cd myproject
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Open `http://localhost:4321`

## Configuration

Open `src/conf.mjs` to configure your site:

```ts
// src/conf.mjs
export const config = {
    title: "My Documentation Site",
    theme: "bluestar",          // bluestar, lightblue, green-pink, pink-black, blue-yellow
    languages: {
        en: { enname: "English", name: "English", flag: '🇺🇸' },
        ja: { enname: "Japanese", name: "日本語", flag: '🇯🇵' },
    },
    navLinks: ["about", "docs"],
};
```

Replace `public/logo.png` and `public/favicon.ico` with your own assets.

## Quick Start

1. Clone the repository and install dependencies (see Install above)
2. Edit `src/conf.mjs` to set your site title, theme, and languages
3. Add pages in `src/pages/[lang]/` using the Astro + BaseLayout pattern:

   ```astro
   ---
   import BaseLayout from "../../layouts/BaseLayout.astro";
   ---
   <BaseLayout title="About Page">
       <h1>About Us</h1>
       <p>Your content here</p>
   </BaseLayout>
   ```

4. Add navigation links in `src/conf.mjs`
5. Run `npm run dev` and visit `http://localhost:4321`

## Usage

### Project Structure

```
snowind-astro/
├── src/
│   ├── conf.mjs              # Site configuration (theme, languages, nav)
│   ├── state.ts              # Nanostores for theme, lang, mobile state
│   ├── pages/
│   │   └── [lang]/           # Localized Astro pages
│   ├── layouts/
│   │   └── BaseLayout.astro  # Base layout wrapper
│   ├── components/           # Vue (.vue) and Astro (.astro) components
│   ├── scss/                 # SCSS theme files
│   └── services/
│       └── inference.ts      # AI inference client
├── features/                 # AI agent workflows and actions
│   ├── actions/              # Node.js scripts for component generation
│   ├── agents/               # Agent configuration YAMLs
│   └── workflows/            # Translation workflow definitions
├── doc/                      # Project documentation
├── astro.config.mjs          # Astro configuration
└── package.json
```

### Customizing the Theme

**Change the active theme:**

```ts
// src/conf.mjs
export const config = {
    theme: "bluestar",  // Available: bluestar, lightblue, green-pink, pink-black, blue-yellow
};
```

**Add a new theme:**

1. Create a SCSS file in `src/scss/` (e.g., `mytheme.scss`)
2. Define your theme variables using the project's CSS custom properties
3. Import the new theme in `src/scss/main.scss`:

   ```scss
   @use "./mytheme.scss" as *;
   ```

### Adding Pages

1. Create a new Astro file in `src/pages/[lang]/` (e.g., `src/pages/about.astro`)

   ```astro
   ---
   import BaseLayout from "../../layouts/BaseLayout.astro";
   ---
   <BaseLayout title="About Page">
       <div class="prose">
           <h1>About Us</h1>
           <p>Your content here</p>
       </div>
   </BaseLayout>
   ```

2. Add the page to navigation in `src/conf.mjs`:

   ```ts
   export const config = {
       navLinks: ["about", "docs", "contact"],
   };
   ```

### Adding a New Language

Edit `src/conf.mjs` to add a new locale:

```ts
export const config = {
    languages: {
        en: { enname: "English", name: "English", flag: '🇺🇸' },
        ja: { enname: "Japanese", name: "日本語", flag: '🇯🇵' },
        fr: { enname: "French", name: "Français", flag: '🇫🇷' },
    },
};
```

Pages are automatically available at `/[lang]/page`.

### Building for Production

```bash
npm run build
```

Output is generated to `./dist/`.

## AI Agent Features

This template includes experimental AI-powered workflows via [Agent Smith](https://github.com/lynxai-team/agent-smith):

- **Text to HTML** — Generate Vue/Astro components from text descriptions
- **Image to HTML** — Convert design mockups into code
- **Component editing** — AI-assisted modification of existing components

See [doc/README.md](./doc/README.md) for setup instructions and usage examples.

## Commands

All commands are run from the project root:

| Command                   | Action                                      |
| :------------------------ | :------------------------------------------ |
| `npm install`             | Installs dependencies                       |
| `npm run dev`             | Starts dev server at `http://localhost:4321`|
| `npm run build`           | Build production site to `./dist/`          |
| `npm run preview`         | Preview build locally                       |
| `npm run astro ...`       | Run Astro CLI commands                      |

## License

MIT