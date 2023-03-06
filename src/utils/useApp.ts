import util from "./util"

export function useApp() {
  initAnalytics()
}

function initAnalytics() {
  const _env = util.getEnv()
  const { UMAMI_ID } = _env
  if(!UMAMI_ID) return

  const scriptEl = document.createElement('script')
  scriptEl.type = "text/javascript"
  scriptEl.src = `https://analytics.umami.is/script.js`
  scriptEl.setAttribute("data-website-id", UMAMI_ID)
  scriptEl.defer = true
  scriptEl.async = true
  
  const headEl = document.querySelector("head")
  if(!headEl) return

  headEl.appendChild(scriptEl)
}