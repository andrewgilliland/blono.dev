/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    include: ['src/**/*.test.ts'],
    // Match Cloudflare's build machines, so timezone bugs show up locally
    env: { TZ: 'UTC' },
  },
});
