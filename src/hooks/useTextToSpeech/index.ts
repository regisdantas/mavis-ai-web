import { useState } from 'react'

function cleanForSpeech(text: string) {
  return text
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/#+\s/g, '')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .replace(/[_~]/g, '')
    .replace(/\n+/g, '. ')
    .trim()
}

function prepareForSpeech(text: string) {
  return cleanForSpeech(text)
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function detectLanguage(text: string) {
  const hasPortuguese = /[ãõáàâéêíóôúç]/i.test(text)

  if (hasPortuguese) return 'pt-BR'

  return 'en-US'
}

export function useTextToSpeech() {
  const [speaking, setSpeaking] = useState(false)

  function speak(text: string) {
    const cleanText = prepareForSpeech(text)

    const utterance = new SpeechSynthesisUtterance(cleanText)

    const lang = detectLanguage(cleanText)

    const voice = speechSynthesis.getVoices().find((v) => v.lang.startsWith(lang))

    if (voice) {
      utterance.voice = voice
    }

    utterance.lang = lang
    utterance.onstart = () => setSpeaking(true)
    utterance.onend = () => setSpeaking(false)

    speechSynthesis.speak(utterance)
  }

  const stopSpeaking = () => {
    speechSynthesis.cancel()
    setSpeaking(false)
  }

  return { speak, stopSpeaking, speaking }
}
