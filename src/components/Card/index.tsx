import React from 'react'
import { CardContainer } from './styles'
import {
  FiTrash2,
  FiLock,
  FiUnlock,
  FiStar,
  FiType,
  FiMic,
  FiVolume2,
  FiVolumeX,
} from 'react-icons/fi'
import { RxDividerVertical } from 'react-icons/rx'
import { MdOutlineColorLens } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'
import { IoMdArrowDropdown, IoMdArrowDropleft } from 'react-icons/io'
import { FiSend } from 'react-icons/fi'
import { MdOutlineContentCopy } from 'react-icons/md'

import { isJsonString } from '../../utils'
import { formatDate, limitInputLength } from '../../utils'
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkEmoji from 'remark-emoji'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkToc from 'remark-toc'
import remarkBreaks from 'remark-breaks'
import stringWidth from 'string-width'
import FloatingColorPicker from '../FloatingColorPicker'
import { IconButton } from '../../styles/global'

import { useSpeechRecognition } from '../../hooks/useSpeechRecognition'
import { useTextToSpeech } from '../../hooks/useTextToSpeech'
import FloatingTemplatePicker from '../FloatingTemplatePicker'

import { templateOptions, TemplateOption } from '../../utils'
import { processMacros } from '../../services/templateMacros'
import { renderTemplate, executeExpression } from '../../services/templateEngine'

import { getLocationData } from '../../services/locationService'

interface ButtonCommandProps {
  label: string
  expression: string
  onExecute: (expression: string) => void
}

const ButtonCommand: React.FC<ButtonCommandProps> = ({ label, expression, onExecute }) => {
  return (
    <button className="markdownButton" onClick={() => onExecute(expression)}>
      {label}
    </button>
  )
}

interface ICardProps {
  id: string
  number: number
  date: string
  content: string
  onDeleteCard: any
  onChangeContent: any
}

const defaultContent = {
  title: '',
  type: 'record',
  groups: [],
  text: '',
  color: '#fff',
  locked: false,
  favorite: false,
  pinned: false,
  collapsed: false,
}

const noteColors = [
  '#F8F9FA',
  '#CED4DA',
  '#FFF4B5',
  '#FFDCC8',
  '#FFCDD2',
  '#FADCE6',
  '#DCCCFB',
  '#BBDEFB',
  '#C8E6C9',
  '#B2DFDB',
  '#F3E5C8',
  '#D7CCC8',
]

const Card: React.FC<ICardProps> = ({
  id,
  date,
  content,
  onDeleteCard,
  onChangeContent,
}: ICardProps) => {
  const [temperature, setTemperature] = React.useState('')
  const [weather, setWeather] = React.useState('')
  const [location, setLocation] = React.useState({ city: '', country: '' })
  const { listening, transcript, startListening, stopListening } = useSpeechRecognition()
  const { speak, speaking, stopSpeaking } = useTextToSpeech()
  const [editingContent, setEditingContent] = React.useState(false)
  const [showToolBox, setShowToolBox] = React.useState(false)
  const [showColorPicker, setShowColorPicker] = React.useState(false)
  const [showTemplatePicker, setShowTemplatePicker] = React.useState(false)
  const [cursorPosition, setCursorPosition] = React.useState<number | null>(null)
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  const objContent = isJsonString(content)
    ? JSON.parse(content)
    : { ...defaultContent, text: content }
  const [value, setValue] = React.useState(objContent.text || '')

  const closeToolBox = () => {
    setShowToolBox(false)
    setShowColorPicker(false)
    setShowTemplatePicker(false)
  }

  React.useEffect(() => {
    if (!editingContent || !textareaRef.current || cursorPosition === null) {
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
  }, [editingContent, cursorPosition])

  const findBestCursorPosition = (clickedText: string, markdown: string) => {
    const cleanText = clickedText
      .replace(/[█░]+/g, '')
      .replace(/\d+(?:\.\d+)?%?/g, '')
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

  const setTemplate = (option: TemplateOption) => {
    closeToolBox()
    let text = option.text.replace(/\\\$\{/g, '${')
    text = localProcessMacros(text)

    if (!objContent.locked) {
      onChangeContent(
        id,
        JSON.stringify({
          ...objContent,
          collapsed: false,
          color: option.color,
          text: text,
          title: localProcessMacros(option.title),
        })
      )
      setValue(text)
    }
  }

  const processAndDisplayMarkdown = (text: string) =>
    renderTemplate(text, {
      temperature,
      weather,
      city: location.city,
      country: location.country,
    })

  const handleExecuteExpression = (expression: string) => {
    const newText = executeExpression(value, expression, {
      temperature,
      weather,
      city: location.city,
      country: location.country,
    })

    setValue(newText)

    onChangeContent(
      id,
      JSON.stringify({
        ...objContent,
        text: newText,
      })
    )
  }

  const localProcessMacros = (text: string) =>
    processMacros(text, {
      weather,
      temperature,
      city: location.city,
      country: location.country,
    })

  const onChangeMarkdownContent = (id: string, newText: string) => {
    const processedText = localProcessMacros(newText)
    onChangeContent(id, JSON.stringify({ ...objContent, text: processedText }))
    setValue(processedText)
  }

  React.useEffect(() => {
    getLocationData()
      .then((data) => {
        setTemperature(data.temperature)

        setWeather(data.weather)

        setLocation({
          city: data.city,
          country: data.country,
        })
      })
      .catch(console.error)
  }, [])

  React.useEffect(() => {
    if (!listening) {
      onChangeContent(id, JSON.stringify({ ...objContent, text: objContent.text + transcript }))
      setValue(objContent.text + transcript)
    }
  }, [listening])

  return (
    <CardContainer key={id}>
      <div className="ContentContainer" style={{ backgroundColor: objContent.color || '#eee' }}>
        <header className="header">
          <strong className="titleBox">
            {objContent.favorite ? (
              <IconButton
                title="Unfavorite note"
                onClick={() =>
                  onChangeContent(id, JSON.stringify({ ...objContent, favorite: false }))
                }
              >
                <FaStar />
              </IconButton>
            ) : (
              <IconButton
                title="Favorite note"
                onClick={() =>
                  onChangeContent(id, JSON.stringify({ ...objContent, favorite: true }))
                }
              >
                <FiStar />
              </IconButton>
            )}
            {!showToolBox ? (
              <span
                className="title"
                title="Note name"
                role="textbox"
                contentEditable={!objContent.locked}
                suppressContentEditableWarning
                data-placeholder="🙋 Give me a name"
                onInput={(e) => limitInputLength(e, 40)}
                onBlur={(e) =>
                  onChangeContent(
                    id,
                    JSON.stringify({
                      ...objContent,
                      title: localProcessMacros(e.target.innerText),
                    })
                  )
                }
              >
                {objContent.title}
              </span>
            ) : (
              <span className="title"></span>
            )}
          </strong>

          <span className="toolbox">
            {speaking ? (
              <IconButton title="Stop hearing note" onClick={stopSpeaking}>
                <FiVolumeX />
              </IconButton>
            ) : (
              <IconButton title="Hear note" onClick={() => speak(value)}>
                <FiVolume2 />
              </IconButton>
            )}
            <IconButton title="Copy note" onClick={() => navigator.clipboard.writeText(value)}>
              <MdOutlineContentCopy />
            </IconButton>
            {objContent.locked ? (
              <IconButton
                title="Unlock note"
                onClick={() =>
                  onChangeContent(id, JSON.stringify({ ...objContent, locked: false }))
                }
              >
                <FiLock />
              </IconButton>
            ) : (
              <IconButton
                title="Lock note"
                onClick={() => onChangeContent(id, JSON.stringify({ ...objContent, locked: true }))}
              >
                <FiUnlock />
              </IconButton>
            )}
            {objContent.collapsed ? (
              <IconButton
                title="Expand note"
                onClick={() =>
                  onChangeContent(id, JSON.stringify({ ...objContent, collapsed: false }))
                }
              >
                <IoMdArrowDropleft />
              </IconButton>
            ) : (
              <IconButton
                title="Collapse note"
                onClick={() =>
                  onChangeContent(id, JSON.stringify({ ...objContent, collapsed: true }))
                }
              >
                <IoMdArrowDropdown />
              </IconButton>
            )}
          </span>
        </header>

        {!objContent.collapsed ? (
          <>
            {editingContent ? (
              <textarea
                ref={textareaRef}
                className="reactMarkDown"
                placeholder={`* ❓ What do you have for today?


<markdown editor>`}
                onFocus={(e) => {
                  const el = e.currentTarget
                  el.style.height = 'auto'
                  el.style.height = `${el.scrollHeight}px`
                }}
                onChange={(e) => {
                  const el = e.currentTarget
                  el.style.height = `${el.scrollHeight}px`
                  setValue(e.target.value)
                }}
                autoFocus
                value={value || ''}
                onBlur={() => {
                  onChangeMarkdownContent(id, value)
                  setEditingContent(false)
                }}
              />
            ) : (
              <div
                className="reactMarkDown"
                onClick={(e) => {
                  if (objContent.locked) {
                    return
                  }

                  const target = e.target as HTMLElement

                  const clickedText = target.innerText || target.textContent || ''

                  const pos = findBestCursorPosition(clickedText, value)

                  setCursorPosition(pos)
                  setEditingContent(true)
                }}
              >
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    button(props) {
                      const expression = decodeURIComponent(
                        String((props.node as any)?.properties?.dataExpression ?? '')
                      )
                      return (
                        <ButtonCommand
                          label={String(props.children)}
                          expression={expression}
                          onExecute={handleExecuteExpression}
                        />
                      )
                    },
                  }}
                  children={processAndDisplayMarkdown(value || '* ❓ What do you have for today?')}
                  remarkPlugins={[
                    [
                      remarkEmoji,
                      {
                        padSpaceAfter: false,
                        emoticon: true,
                      },
                    ],
                    [remarkToc, { tight: true, ordered: true }],
                    [remarkGfm, { stringLength: stringWidth }],
                    remarkMath,
                    rehypeKatex,
                    remarkBreaks,
                    remarkFrontmatter,
                  ]}
                />
              </div>
            )}
            <footer className="footer">
              <span className="footbox">
                <span className="date">{formatDate(date)}</span>
                <span className="toolbox">
                  <IconButton
                    title="Change note background color"
                    onClick={() => setShowColorPicker(!showColorPicker)}
                    onBlur={() => setShowColorPicker(false)}
                  >
                    <MdOutlineColorLens />
                  </IconButton>

                  <IconButton
                    title="Load template"
                    onClick={() => setShowTemplatePicker(!showTemplatePicker)}
                    onBlur={() => setShowTemplatePicker(false)}
                  >
                    <FiType />
                  </IconButton>
                  {listening ? (
                    <IconButton title="Stop listening" onClick={stopListening}>
                      <FiSend />
                    </IconButton>
                  ) : (
                    <IconButton
                      title="Listen note"
                      onClick={() => {
                        if (!objContent.locked) startListening()
                      }}
                    >
                      <FiMic />
                    </IconButton>
                  )}
                  <RxDividerVertical />
                  <IconButton
                    title="Delete note"
                    onClick={() => {
                      if (!objContent.locked) onDeleteCard(id)
                    }}
                  >
                    <FiTrash2 />
                  </IconButton>
                </span>
              </span>
            </footer>
          </>
        ) : (
          <></>
        )}

        {showColorPicker && (
          <FloatingColorPicker
            colors={noteColors}
            onColorClicked={(selectedColor: string) => {
              onChangeContent(
                id,
                JSON.stringify({
                  ...objContent,
                  color: selectedColor,
                })
              )
              setShowColorPicker(false)
            }}
          />
        )}
        {showTemplatePicker ? (
          <FloatingTemplatePicker options={templateOptions} onPicked={setTemplate} />
        ) : (
          <></>
        )}
      </div>
    </CardContainer>
  )
}

export default Card
