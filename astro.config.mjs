// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://studiranjeusloveniji.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('studiranjeusloveniji.com/') && !page.endsWith('studiranjeusloveniji.com'),
      i18n: {
        defaultLocale: 'sr',
        locales: {
          sr: 'sr-Latn',
          en: 'en',
          sl: 'sl',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'sr',
    locales: ['sr', 'en', 'sl'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
