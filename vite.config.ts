import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import { resolve } from "path"

const projectRoot = __dirname

// https://vitejs.dev/config/
export default defineConfig({

  resolve: {
    alias: {
      '~/': `${resolve(projectRoot, 'src')}/`,
    },
  },

  plugins: [
    vue(),

    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [
        resolve(projectRoot, "src/locales/messages/**")
      ]
    }),
  ],
})
