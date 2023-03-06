

export interface ChatMsg {
  role: "system" | "user" | "assistant"
  content: string
}

export interface OpenAiResUsage {
  completion_tokens: number
  prompt_tokens: number
  total_tokens: number
}

export interface OpenAiResChoice {
  finish_reason: string
  index: number
  message: ChatMsg
}

export interface OpenAiResult {
  choices: OpenAiResChoice[]
  created: number     // second
  id: string
  model: string
  object: string
  usage: OpenAiResUsage
  error?: any
}

export interface VgResponse<T = any> {
  code: string
  data?: T
}