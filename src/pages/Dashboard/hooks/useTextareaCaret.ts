import { RefObject, useEffect, useState } from 'react'

interface UseTextareaCaretProps {
  editing: boolean
  textareaRef: RefObject<HTMLTextAreaElement>
}

export function useTextareaCaret({ editing, textareaRef }: UseTextareaCaretProps) {
  const [cursorPosition, setCursorPosition] = useState<number | null>(null)

  useEffect(() => {
    if (!editing || !textareaRef.current || cursorPosition === null) {
      return
    }

    const textarea = textareaRef.current

    textarea.focus()
    textarea.setSelectionRange(cursorPosition, cursorPosition)

    requestAnimationFrame(() => {
      const mirror = document.createElement('div')

      const style = window.getComputedStyle(textarea)

      mirror.style.position = 'absolute'
      mirror.style.visibility = 'hidden'
      mirror.style.whiteSpace = 'pre-wrap'
      mirror.style.wordWrap = 'break-word'
      mirror.style.font = style.font
      mirror.style.lineHeight = style.lineHeight
      mirror.style.padding = style.padding
      mirror.style.width = `${textarea.clientWidth}px`

      mirror.textContent = textarea.value.substring(0, cursorPosition)

      document.body.appendChild(mirror)

      const cursorTop = mirror.offsetHeight

      document.body.removeChild(mirror)

      const textareaTop = textarea.getBoundingClientRect().top + window.scrollY

      window.scrollTo({
        top: textareaTop + cursorTop - window.innerHeight / 2,
        behavior: 'smooth',
      })
    })
  }, [editing, cursorPosition, textareaRef])

  const findBestCursorPosition = (clickedText: string, markdown: string) => {
    const cleanText = clickedText
      .replace(/[█░]+/g, '')
      .replace(/\d+(?:<strong data-lexical-text="true">\.<\/strong>\d+)?%?/g, '')
      .replace(/\s+/g, ' ')
      .trim()

    if (!cleanText) {
      return markdown.length
    }

    const words = cleanText.split(' ')

    for (let size = Math.min(words.length, 8); size >= 2; size--) {
      for (let start = 0; start <= words.length - size; start++) {
        const phrase = words.slice(start, start + size).join(' ')

        const pos = markdown.indexOf(phrase)

        if (pos >= 0) {
          return pos
        }
      }
    }

    for (const word of words) {
      if (word.length < 4) {
        continue
      }

      const pos = markdown.indexOf(word)

      if (pos >= 0) {
        return pos
      }
    }

    return markdown.length
  }

  return {
    cursorPosition,
    setCursorPosition,
    findBestCursorPosition,
  }
}
