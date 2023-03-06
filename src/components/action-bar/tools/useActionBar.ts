import { inject, onMounted, Ref, ref } from "vue"
import { iframeSrcDocKey } from "~/utils/provide-keys"
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

    if(inputEl.value) {
      inputEl.value.blur()
    }
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

  const userTxt = ctx.inputTxt.value
  const messages = promptManager.getMessages(userTxt)

  console.log("看一下 messages: ")
  console.log(messages)
  console.log(" ")

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
    console.warn("code 不等于 0000")
    return
  }

  const openAiRes = res.data
  if(!openAiRes) {
    console.warn("res.data 不存在")
    return
  }

  if(openAiRes.error) {
    console.log("openAiRes error: ")
    console.log(openAiRes)
    return
  }
  
  const newSrcDoc = promptManager.saveNewMessage(userTxt, openAiRes)
  console.log("看一下 newSrcDoc: ")
  console.log(newSrcDoc)
  console.log(" ")
  
  ctx.srcDoc.value = newSrcDoc
}