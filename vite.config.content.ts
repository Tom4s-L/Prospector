import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { sharedConfig } from './vite.config'

export default defineConfig({
  ...sharedConfig,
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/content_scripts/content.ts'),
      name: 'ContentScript',
      fileName: () => 'content.js',
      formats: ['iife'],
    },
    outDir: 'dist/assets',
    emptyOutDir: false,
    cssCodeSplit: false,
  },
})
