import { nextTick, ref } from "vue";
import util from "~/utils/util";
import type { AlwaysTrueFunc } from "~/utils/type-tool"

const enable = ref(false)
const show = ref(false)
const inputEl = ref<HTMLInputElement | null>(null)
const inputTxt = ref("")
const duration = 150

let _resolve: AlwaysTrueFunc | undefined

export function initHelpModal() {
  return {
    enable,
    show,
    inputEl,
    inputTxt,
    duration,
    onTapMask,
    onInputEnter,
    onInputBlur,
  }
}

export function showHelpModal() {
  _open()

  // 绑定 最新的 openai key
  const openaiApiKey = util.getOpenAiKey()
  inputTxt.value = openaiApiKey

  const _wait = (a: AlwaysTrueFunc) => {
    _resolve = a
  }

  return new Promise(_wait)
}

function onTapMask() {
  _close()
  _resolve && _resolve(true)
}

function onInputEnter() {
  if(inputEl.value) {
    inputEl.value.blur()
  }
}

function onInputBlur() {
  if(!inputEl.value) return
  const newV = inputTxt.value
  const oldV = util.getOpenAiKey()
  if(newV === oldV) return
  util.setOpenAiKey(newV)
}

async function _open() {
  if(show.value) return
  enable.value = true
  await util.waitMilli(16)
  show.value = true
}

async function _close() {
  if(!show.value) return
  show.value = false
  await util.waitMilli(duration)
  enable.value = false
}