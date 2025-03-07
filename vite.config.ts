/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import pages from 'vite-plugin-pages';
import checker from 'vite-plugin-checker';


export default defineConfig({
  plugins: [pages({
    extensions: ["tsx", "jsx"],
    importMode: 'async',
  }), solidPlugin(),
  checker({ typescript: true }) // 确保 TypeScript 的大小写错误会被检测
  ],

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
