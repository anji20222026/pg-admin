/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import pages from 'vite-plugin-pages';

export default defineConfig({
  plugins: [pages({
    extensions: ["tsx", "jsx"],
    importMode: 'async',
  }), solidPlugin()],

  build: {
    target: 'esnext',
    sourcemap: true, // 确保启用 Source Maps
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
  server: {
    port: 3000,
  },
});
