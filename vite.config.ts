import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

const projectRoot = __dirname

// https://vitejs.dev/config/
export default defineConfig({

  resolve: {
    alias: {
      '~/': `${resolve(projectRoot, 'src')}/`,
    },
  },

  plugins: [vue()],
})
