import ider from "./ider"

let userId = ""
function getUserId() {
  if(userId) return userId
  const res = localStorage.getItem("vg-userId")
  if(res) {
    userId = res
    return userId
  }

  userId = ider.createUserId()
  localStorage.setItem("vg-userId", userId)
  return userId
}


let openAiKey: string | null = null
function getOpenAiKey() {
  if(typeof openAiKey === "string") {
    return openAiKey
  }
  const res = localStorage.getItem("vg-openai_key")
  if(res) {
    openAiKey = res
    return openAiKey
  }
  openAiKey = ""
  return ""
}

function setOpenAiKey(val: string) {
  openAiKey = val
  localStorage.setItem("vg-openai_key", val)
}


function getEnv() {
  const VAL_TOWN_MAIN_FUNC = import.meta.env.VITE_VAL_TOWN_MAIN_FUNC
  const VAL_TOWN_USERNAME = import.meta.env.VITE_VAL_TOWN_USERNAME
  const VAL_TOWN_AUTH = import.meta.env.VITE_VAL_TOWN_AUTH
  const UMAMI_ID = import.meta.env.VITE_UMAMI_ID

  return {
    VAL_TOWN_MAIN_FUNC,
    VAL_TOWN_USERNAME,
    VAL_TOWN_AUTH,
    UMAMI_ID,
  }
}

function waitMilli(milli: number = 0): Promise<true> {
  let _t = (a: (a1: true) => void) => {
    setTimeout(() => {
      a(true)
    }, milli)
  }

  return new Promise(_t)
}


export default {
  getUserId,
  getEnv,
  waitMilli,
  getOpenAiKey,
  setOpenAiKey,
}