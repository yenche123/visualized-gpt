import util from "~/utils/util"

async function request<T = any>(
  url: string, 
  body?: Record<string, any>
): Promise<T> {

  const Authentication = util.getEnv().VAL_TOWN_AUTH
  if(body) {
    body.userId = util.getUserId()
  }

  const reqInit = {
    method: "POST",
    body: body ? JSON.stringify(body) : "{}",
    headers: { Authentication },
  } 

  const res = await fetch(url, reqInit)

  const res2 = await res.json()
  return res2 as T
}

export default {
  request,
}