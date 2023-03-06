import type { VgMessageItem } from "./types"
import type { OpenAiResult, ChatMsg, OpenAiResUsage } from "~/types"
import { i18n } from "~/locales"


const initTokens = 30

let list: VgMessageItem[] = []
let currentUsage: OpenAiResUsage = {
  completion_tokens: 0,
  prompt_tokens: initTokens,
  total_tokens: initTokens,
}


function getMessages(newUserContent: string) {

  if(list.length < 1) {
    _initList()
  }

  _trimList()

  let messages = list.map(v => v.message)

  const { t } = i18n.global
  const userMsg: ChatMsg = {
    role: "user",
    content: newUserContent + '\n\n' + t('prompt.user_additonal')
  }
  messages.push(userMsg)

  return messages
}

function saveNewMessage(newUserContent: string, openAiRes: OpenAiResult) {
  const newUsage = openAiRes.usage

  const assistantMsg = openAiRes.choices[0].message
  let newCompletionTokens = newUsage.completion_tokens
  let newPromptTokens = newUsage.prompt_tokens - currentUsage.prompt_tokens
  if(newPromptTokens < 1) newPromptTokens = 1

  const userMsg: ChatMsg = {
    role: "user",
    content: newUserContent
  }

  list.push({ token: newPromptTokens, message: userMsg })
  list.push({ token: newCompletionTokens, message: assistantMsg })
  
  currentUsage = newUsage

  console.log(" ")
  console.log("本轮用户提问: ", newPromptTokens)
  console.log("本轮回答结果: ", newCompletionTokens)
  console.log("list 数据: ")
  console.log(list)
  console.log("最新 token 数据: ")
  console.log(currentUsage)
  console.log(" ")

  return assistantMsg.content
}


function _initList() {
  const { t } = i18n.global
  list = [
    {
      message: {
        role: "system",
        content: t('prompt.system_content'),
      },
      token: initTokens,
    }
  ]
  return list
}

function _trimList() {
  if(list.length < 4) return
  let totalToken = _getTotalToken()
  console.log("当前 totalToken: ", totalToken)
  if(totalToken < 2800) return
  for(let i=1; i<list.length; i++) {
    let v = list[i]
    totalToken -= v.token
    list.splice(1, 1)
    i--
    if(totalToken < 2800) break
  }
}

function _getTotalToken() {
  let totalToken = 0
  list.forEach(v => totalToken += v.token)
  return totalToken
}

export default {
  getMessages,
  saveNewMessage,
}