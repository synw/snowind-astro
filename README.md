# Snowind Astro

A [Snowind](https://github.com/synw/snowind) template for Astro designed to generate static sites with an AI assistant. Features:

- **Modular Components** with limited responsabilities, easy to create and modify with an AI
- **Responsive Design**
- **Scss theming**
- **Dark Mode**

## Install

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/snowind-astro.git
   cd snowind-astro
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

   This will start the development server and open the project in your default web browser.

## Usage

### Project Structure

- **`src/conf.ts`**: Configuration file containing theme settings, site title, and mobile breakpoint.
- **`src/state.ts`**: State management using nanostores for theme, dark mode, and mobile detection.
- **`src/scss/`**: SCSS files for different themes and styles.
- **`src/pages/`**: Astro pages for different routes.
- **`src/layouts/`**: Astro layouts for structuring the pages.
- **`src/components/`**: Vue components for reusable UI elements.
- **`src/icons/`**: SVG icons used in the project.

### Customizing the Theme

1. **Change the Theme**

   Modify the `theme` variable in `src/conf.ts` to switch between themes. Available themes are `default`, `bluestar`, and `lightblue`.

   ```ts
   const theme = "bluestar";
   ```

2. **Add a New Theme**

   Create a new SCSS file in `src/scss/` and define your theme variables. Then, import the new theme in `src/scss/main.scss`.

   ```scss
   @use "./mytheme.scss" as *;
   ```

### Adding Pages

1. **Create a New Page**

   Add a new Astro file in `src/pages/`. For example, `src/pages/about.astro`.

   ```astro
   ---
   import BaseLayout from "../layouts/BaseLayout.astro";
   ---

   <BaseLayout title="About Page">
       <div>About Us</div>
   </BaseLayout>
   ```

2. **Link to the New Page**

   Add a link to the new page in `src/components/TheNavLinks.vue`.

   ```vue
   <template>
       <a class="btn menu-link" href="/about">About</a>
       <a class="btn menu-link" href="/page1">Page 1</a>
       <a class="btn menu-link" href="#">Link2</a>
   </template>
   ```

### Building for Production

To build the project for production, run:

```bash
npm run build
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
