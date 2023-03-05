import { inject, onMounted, Ref, ref } from "vue"
import { iframeSrcDocKey } from "~/utils/provide-keys"

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

function toEnter(ctx: ActionBarCtx) {
  console.log("去 enter..........")
}