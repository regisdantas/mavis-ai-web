import OpenAI from 'openai'
import { getOpenAIKey } from './openAIKeyService'

export async function executeAI(
  uid: string,
  systemPrompt: string,
  userInstructions: string,
  userContext: string,
  model?: string,
  apiKeyOverride?: string
) {
  console.log(model)
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
    model: model || 'gpt-5.6-luna',
    input: input,
  })

  return response
}

export async function listOpenAIModels(uid: string, apiKeyOverride?: string): Promise<string[]> {
  const apiKey = apiKeyOverride || (await getOpenAIKey(uid))

  if (!apiKey) {
    throw new Error('OpenAI API Key not configured.')
  }

  const openai = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true,
  })

  const listFn =
    (openai.models &&
      (openai.models as any).list &&
      (openai.models as any).list.bind(openai.models)) ||
    (typeof (openai as any).listModels === 'function' && (openai as any).listModels.bind(openai))

  if (!listFn) {
    throw new Error('Este cliente OpenAI não oferece método para listar modelos.')
  }

  const res = await listFn()
  const models = (res && (res.data || res.models)) || []
  return models.map((m: any) => m.id).filter(Boolean)
}
