// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import vue from '@astrojs/vue';
import { defaultLanguage, languages } from './src/conf';

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind(), vue(), icon()],
  i18n: {
    locales: Object.keys(languages),
    defaultLocale: defaultLanguage,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    }
  }
});