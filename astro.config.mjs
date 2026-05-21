import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://culturalia.art.br',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
    }),
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag'],
      },
    }),
  ],
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
