import { createI18n } from 'vue-i18n'
import en from "./messages/en.json"
import zh_cn from "./messages/zh-cn.json"
import zh_tw from "./messages/zh-tw.json"

const supportedLocales = [
  "en",
  "zh-cn",
  "zh-tw"
] as const

type SupportedLocale = typeof supportedLocales[number]

function initLocale(): SupportedLocale {
  const lang = navigator.language.toLowerCase()
  if(supportedLocales.includes(lang as SupportedLocale)) {
    return lang as SupportedLocale
  }
  if(lang === "zh-hk") return "zh-tw"
  return "en"
}

export const i18n = createI18n({
  locale: initLocale(),
  messages: {
    "en": en,
    "zh-cn": zh_cn,
    "zh-tw": zh_tw,
  },
  legacy: false
})

export type VgI18n = typeof i18n
export type T_i18n = typeof i18n.global.t

