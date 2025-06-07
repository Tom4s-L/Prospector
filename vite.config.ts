import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export const sharedConfig = {
  plugins: [
    vue(),
  ],
}

// https://vite.dev/config/
export default defineConfig({
  ...sharedConfig,
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
})
