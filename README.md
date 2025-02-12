# Snowind Astro

A [Snowind](https://github.com/synw/snowind) template for [Astro](https://github.com/withastro/astro) designed to generate static sites with an AI assistant. Features:

- **Modular** components with limited responsabilities, easy to create and modify with an AI
- **Responsive** design using Tailwind css
- **Scss theming** support
- **Dark mode** support

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

   Open `locahost:4321`

## Configuration

Open `src/conf.ts` and set your site title and theme.

Replace `public/logo.png` and `public/favicon.ico` by yours.

## Usage

### Project Structure

- **`src/conf.ts`**: Configuration file containing theme settings, site title, and mobile breakpoint.
- **`src/state.ts`**: State management using nanostores for theme, dark mode, and mobile detection.
- **`src/scss/`**: SCSS files for different themes and styles.
- **`src/pages/`**: Astro pages for different routes.
- **`src/layouts/`**: Astro layouts for structuring the pages.
- **`src/components/`**: Vue components for reusable UI elements.
- **`src/icons/`**: SVG icons used in the project.

### Customizing the theme

1. **Change the theme**

   Modify the `theme` variable in `src/conf.ts` to switch between themes. Available themes are `default`, `bluestar`, and `lightblue`.

   ```ts
   const theme = "bluestar";
   ```

2. **Add a new theme**

   Create a new SCSS file in `src/scss/` and define your theme variables. Then, import the new theme in `src/scss/main.scss`.

   ```scss
   @use "./mytheme.scss" as *;
   ```

### Adding pages

1. **Create a new page**

   Add a new Astro file in `src/pages/`. For example, `src/pages/about.astro`.

   ```astro
   ---
   import BaseLayout from "../layouts/BaseLayout.astro";
   ---

   <BaseLayout title="About Page">
       <div>About Us</div>
   </BaseLayout>
   ```

2. **Link to the new page**

   Add a link to the new page in `src/components/TheNavLinks.vue`.

   ```vue
   <template>
       <a class="btn menu-link" href="/about">About</a>
       <a class="btn menu-link" href="/page1">Page 1</a>
       <a class="btn menu-link" href="#">Link2</a>
   </template>
   ```

### Building for production

To build the project for production, run:

```bash
npm run build
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

