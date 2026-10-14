// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://blono.dev',
  output: 'static',
  // URLs never end in a slash, matching wrangler.jsonc's html_handling
  trailingSlash: 'never',
  markdown: {
    // Themes: https://shiki.style/themes
    shikiConfig: { theme: 'tokyo-night' },
    // Keep quotes as written, matching the previous site
    processor: satteri({ features: { smartPunctuation: false } }),
  },
});
