import OpenAI from 'openai'
import { getOpenAIKey } from './openAIKeyService'

export async function executeAI(
  uid: string,
  systemPrompt: string,
  userInstructions: string,
  userContext: string,
  apiKeyOverride?: string
) {
  const apiKey = apiKeyOverride || (await getOpenAIKey(uid))

  if (!apiKey) {
    throw new Error('OpenAI API Key not configured.')
  }

  const openai = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true,
  })

  const input = `
System:
${systemPrompt}

Instruction:
${userInstructions}

Context:
${userContext}
`
  const response = await openai.responses.create({
    model: 'gpt-5-mini',
    input: input,
  })

  return response.output_text.trim()
}
