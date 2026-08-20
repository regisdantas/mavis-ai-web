export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  tokens?: {
    input: number
    output: number
  }
}

export interface ChatSession {
  id: string
  title: string
  createdAt: string
  updatedAt: string
  model: string
  selectedPromptIds: string[]
  messages: ChatMessage[]
}
