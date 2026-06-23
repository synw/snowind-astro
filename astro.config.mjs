// @ts-check
import { defineConfig } from 'astro/config';

import icon from "astro-icon";
import vue from '@astrojs/vue';
import { defaultLanguage, languages } from './src/conf.mjs';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [vue(), icon()],

  i18n: {
    locales: Object.keys(languages),
    defaultLocale: defaultLanguage,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});