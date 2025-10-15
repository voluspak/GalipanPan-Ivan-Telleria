// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://voluspak.github.io',
  base: '/GalipanPan-Ivan-Telleria',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});