import { inject, onMounted, Ref, ref } from "vue"
import { iframeSrcDocKey, isLoadingKey } from "~/utils/provide-keys"
import vgFetch from "~/requests/vg-fetch"
import type { OpenAiResult, VgResponse } from "~/types"
import API from "~/requests/API"
import promptManager from "./prompt-manager"

interface ActionBarCtx {
  srcDoc: Ref<string>
  inputTxt: Ref<string>
  isLoading: Ref<boolean>
}

export function useActionBar() {

  const isLoading = inject(isLoadingKey, ref(false))
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

    if(inputEl.value) {
      inputEl.value.blur()
    }
  }

  const onTapClear = () => {
    isLoading.value = false
    inputTxt.value = ""
    srcDoc.value = ""
    promptManager.clear()
  }

  const onTapHelp = () => {
    window.open("https://github.com/yenche123/visualized-gpt", "_blank")
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
    onTapClear,
    onTapHelp,
  }
}

async function toEnter(ctx: ActionBarCtx) {

  const userTxt = ctx.inputTxt.value
  const messages = promptManager.getMessages(userTxt)

  ctx.isLoading.value = true
  let res: VgResponse<OpenAiResult>

  try {
    res = await vgFetch.request<VgResponse<OpenAiResult>>(API.HELLO_WORLD, { messages })
  }
  catch(err) {
    console.log("err: ", err)
    ctx.isLoading.value = false
    return
  }
  
  ctx.isLoading.value = false

  if(res.code !== "0000") {
    console.warn("code is not equal to 0000")
    console.log("res: ")
    console.log(res)
    console.log(" ")
    return
  }

  const openAiRes = res.data
  if(!openAiRes) {
    console.warn("res.data doesn't exist")
    return
  }

  if(openAiRes.error) {
    console.warn("openAiRes error: ")
    console.log(openAiRes)
    return
  }
  
  const newSrcDoc = promptManager.saveNewMessage(userTxt, openAiRes)
  
  ctx.srcDoc.value = newSrcDoc
}