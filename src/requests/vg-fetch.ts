import util from "~/utils/util"

async function request(url: string, body?: Record<string, any>) {

  const Authentication = util.getEnv().VAL_TOWN_AUTH
  console.log("看一下 Authentication: ", Authentication)

  const reqInit = {
    method: "POST",
    body: body ? JSON.stringify(body) : "{}",
    headers: { Authentication },
  } 

  const res = await fetch(url, reqInit)

  const res2 = await res.json()

  return res2
}

export default {
  request,
}