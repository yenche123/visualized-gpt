import 'virtual:svg-icons-register'
import { createApp } from 'vue'

import './styles/style.css'

import App from './App.vue'
import { i18n } from './locales'
import SvgIcon from "./assets/svg-icon.vue"

const app = createApp(App)
app.component("SvgIcon", SvgIcon)
app.use(i18n)
app.mount('#app')
