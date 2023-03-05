import { inject, onMounted, Ref, ref } from "vue"
import { iframeSrcDocKey } from "~/utils/provide-keys"
import vgFetch from "~/requests/vg-fetch"
import type { ChatMsg } from "~/types"
import API from "~/requests/API"


interface ActionBarCtx {
  srcDoc: Ref<string>
  inputTxt: Ref<string>
}

export function useActionBar() {

  const srcDoc = inject(iframeSrcDocKey, ref(""))
  const inputEl = ref<HTMLInputElement | null>(null)
  const inputTxt = ref("")

  const ctx: ActionBarCtx = {
    srcDoc,
    inputTxt,
  }


  const onEnter = () => {
    if(!inputTxt.value) return
    toEnter(ctx)
  }


  onMounted(() => {
    if(!inputEl.value) return
    inputEl.value.focus()
  })


  return {
    inputEl,
    inputTxt,
    onEnter,
  }
}

async function toEnter(ctx: ActionBarCtx) {
  console.log("去 request..........")

  const messages: ChatMsg[] = [
    {
      role: "system",
      content: "你現在是一個網頁 html，請以 html 格式回答任何問題，不要有任何非 html 格式以外的內容。你的回答將直接被放進 iframe 裡呈現。憑藉 html 布局和 css 樣式把你的回答可視化呈現出來以幫助使用者理解。"
    },
    {
      role: "user",
      content: ctx.inputTxt.value,
    },
    {
      role: "system",
      content: "再次強調，請以 html 格式輸出"
    }
  ]

  const res = await vgFetch.request(API.HELLO_WORLD, { messages })
  console.log("看一下 res: ")
  console.log(res)
  console.log(" ")

}