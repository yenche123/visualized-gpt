import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import { resolve } from "path"
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
const { version } = require("./package.json")

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

    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    })
  ],

  define: {
    "VG_ENV": {
      "version": version,
      "client": "web"
    }
  }
})
