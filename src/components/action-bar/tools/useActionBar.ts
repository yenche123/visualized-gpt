import { inject, onMounted, Ref, ref } from "vue"
import { iframeSrcDocKey } from "~/utils/provide-keys"
import vgFetch from "~/requests/vg-fetch"
import type { ChatMsg, OpenAiResult, VgResponse } from "~/types"
import API from "~/requests/API"

interface ActionBarCtx {
  srcDoc: Ref<string>
  inputTxt: Ref<string>
  isLoading: Ref<boolean>
}

export function useActionBar() {

  const isLoading = ref(false)
  const srcDoc = inject(iframeSrcDocKey, ref(""))
  const inputEl = ref<HTMLInputElement | null>(null)
  const inputTxt = ref("")

  const ctx: ActionBarCtx = {
    srcDoc,
    inputTxt,
    isLoading,
  }


  const onEnter = () => {
    if(!inputTxt.value) return
    if(isLoading.value) return
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
    isLoading,
  }
}

async function toEnter(ctx: ActionBarCtx) {
  console.log("去 request..........")

  const messages: ChatMsg[] = [
    {
      role: "system",
      content: "你現在是一個網頁 html 生成器，請以 html 格式回答任何問題。"
    },
    {
      role: "user",
      content: ctx.inputTxt.value + "\n再次強調請以 html 格式回答我的問題，任何提示都要包裹在 html 裡。你可以使用圖表、iframe、svg、幫助你表達。",
    }
  ]

  const res = await vgFetch.request<VgResponse<OpenAiResult>>(API.HELLO_WORLD, { messages })
  
  console.log("看一下 res.code: ")
  console.log(res.code)
  console.log("看一下 res.data: ")
  console.log(res.data)
  

}