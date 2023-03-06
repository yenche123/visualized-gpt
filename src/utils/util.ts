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


function getEnv() {
  const VAL_TOWN_AUTH = import.meta.env.VITE_VAL_TOWN_AUTH

  return {
    VAL_TOWN_AUTH,
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
}