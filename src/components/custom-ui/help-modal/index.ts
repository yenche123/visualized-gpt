import { ref } from "vue";
import util from "~/utils/util";
import type { AlwaysTrueFunc } from "~/utils/type-tool"

const enable = ref(false)
const show = ref(false)
const duration = 150

let _resolve: AlwaysTrueFunc | undefined

export function initHelpModal() {
  return {
    enable,
    show,
    duration,
    onTapMask,
  }
}

export function showHelpModal() {
  _open()

  const _wait = (a: AlwaysTrueFunc) => {
    _resolve = a
  }

  return new Promise(_wait)
}

function onTapMask() {
  console.log("111111 onTapMask........")
  _close()
  _resolve && _resolve(true)
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