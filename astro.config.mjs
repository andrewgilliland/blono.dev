// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://blono.dev',
  output: 'static',
  markdown: {
    // Themes: https://shiki.style/themes
    shikiConfig: { theme: 'tokyo-night' },
  },
});
