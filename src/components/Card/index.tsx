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
const VARIABLE_REGEX = /^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm

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

const getWeather = (code: number) => {
  if (code === 0) return '☀️ Sunny'
  if ([1, 2].includes(code)) return '🌤️ Partly Cloudy'
  if (code === 3) return '☁️ Cloudy'
  if ([45, 48].includes(code)) return '🌫️ Foggy'
  if ([51, 53, 55, 56, 57].includes(code)) return '🌦️ Light Rain'
  if ([61, 63, 65, 66, 67].includes(code)) return '🌧️ Rainy'
  if ([71, 73, 75, 77].includes(code)) return '❄️ Snowing'
  if ([80, 81, 82].includes(code)) return '🌧️ Rain Showers'
  if ([95, 96, 99].includes(code)) return '⛈️ Stormy'
  return '☁️ Cloudy'
}

const extractVariables = (text: string) => {
  const variables: Record<string, string> = {}

  text.replace(VARIABLE_REGEX, (_, name, value) => {
    variables[name] = value.trim()
    return ''
  })

  return variables
}

const removeVariableDeclarations = (text: string) =>
  text.replace(/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm, '')

const resolveVariables = (text: string, vars: Record<string, string>) =>
  text.replace(/\$\{([a-zA-Z_]\w*)\}/g, (_, name) => vars[name] ?? '')

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

  const objContent = isJsonString(content)
    ? JSON.parse(content)
    : { ...defaultContent, text: content }
  const [value, setValue] = React.useState(objContent.text || '')

  const closeToolBox = () => {
    setShowToolBox(false)
    setShowColorPicker(false)
    setShowTemplatePicker(false)
  }

  const setTemplate = (option: TemplateOption) => {
    closeToolBox()
    const text = option.text.replace(/\\\$\{/g, '${')
    if (!objContent.locked) {
      onChangeContent(
        id,
        JSON.stringify({
          ...objContent,
          collapsed: false,
          color: option.color,
          text: text,
          title: option.title,
        })
      )
      setValue(text)
    }
  }

  const processCommands = (
    text: string,
    context: {
      temperature?: string
      weather?: string
      city?: string
      country?: string
    } = {},
    nested: number = 0
  ) => {
    const now = new Date()

    text = text
      .replace(/@date\b/g, () => now.toLocaleDateString())

      .replace(/@time\b/g, () =>
        now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })
      )

      .replace(/@datetime\b/g, () => now.toLocaleString())

      .replace(/@dayofweek\b/g, () =>
        now.toLocaleDateString(undefined, {
          weekday: 'long',
        })
      )

      .replace(/@week\b/g, () => {
        const start = new Date(now.getFullYear(), 0, 1)
        const week = Math.ceil(
          ((now.getTime() - start.getTime()) / 86400000 + start.getDay() + 1) / 7
        )

        return String(week)
      })

      .replace(/@month\b/g, () => (now.getMonth() + 1).toString())

      .replace(/@monthname\b/g, () =>
        now.toLocaleDateString(undefined, {
          month: 'long',
        })
      )

      .replace(/@year\b/g, () => JSON.stringify(now.getFullYear()))

      .replace(/@today\b/g, () => JSON.stringify(now.toLocaleDateString()))

      .replace(/@yesterday\b/g, () => {
        const d = new Date(now)
        d.setDate(d.getDate() - 1)
        return String(d.toLocaleDateString())
      })

      .replace(/@tomorrow\b/g, () => {
        const d = new Date(now)
        d.setDate(d.getDate() + 1)
        return JSON.stringify(d.toLocaleDateString())
      })

      .replace(/@weather\b/g, () => weather || '@weather')

      .replace(/@temperature\b/g, () => temperature || '@temperature')

      .replace(/@city\b/g, () => location.city || '@city')

      .replace(/@country\b/g, () => location.country || '@country')

      .replace(/@moon\b/g, () => {
        const lp = 2551443
        const current = now.getTime() / 1000
        const newMoon = new Date('2001-01-24').getTime() / 1000
        const phase = ((current - newMoon) % lp) / lp

        if (phase < 0.03) return '🌑 New Moon'
        if (phase < 0.22) return '🌒 Waxing Crescent'
        if (phase < 0.28) return '🌓 First Quarter'
        if (phase < 0.47) return '🌔 Waxing Gibbous'
        if (phase < 0.53) return '🌕 Full Moon'
        if (phase < 0.72) return '🌖 Waning Gibbous'
        if (phase < 0.78) return '🌗 Last Quarter'
        return '🌘 Waning Crescent'
      })

      .replace(/@season\b/g, () => {
        const month = now.getMonth() + 1

        if ([12, 1, 2].includes(month)) return '☀️ Summer'
        if ([3, 4, 5].includes(month)) return '🍂 Autumn'
        if ([6, 7, 8].includes(month)) return '❄️ Winter'

        return '🌸 Spring'
      })

      .replace(/@calculate\((.*?)\)/g, (_, expr) => {
        try {
          return String(Function(`return (${expr})`)())
        } catch {
          return '[Calculation error]'
        }
      })

      .replace(/@countdown\((.*?)\)/g, (_, date) => {
        const target = new Date(date)
        const diff = target.getTime() - now.getTime()

        return String(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))))
      })

      .replace(/@progress\(([\d.]+)\)/g, (_, value) => {
        const ratio = Math.max(0, Math.min(1, Number(value)))
        const percent = Math.round(ratio * 100)

        const width = 10
        const filled = Math.round(ratio * width)

        let bar = `${'█'.repeat(filled)}${'░'.repeat(width - filled)}`
        const label = `${percent}%`

        const start = Math.max(0, Math.floor((width - label.length) / 2))

        bar = bar.slice(0, start) + label + bar.slice(start + label.length)

        return bar
      })

      .replace(/@rating\((\d+)\)/g, (_, value) => {
        const v = Math.max(0, Math.min(5, Number(value)))

        return `${'★'.repeat(v)}${'☆'.repeat(5 - v)}`
      })

      .replace(/@bmi\((\d+(?:\.\d+)?),(\d+(?:\.\d+)?)\)/g, (_, weight, height) => {
        const bmi = Number(weight) / (Number(height) * Number(height))
        return bmi.toFixed(1)
      })

      .replace(/@age\((.*?)\)/g, (_, birthDate) => {
        const birth = new Date(birthDate)

        let age = now.getFullYear() - birth.getFullYear()

        const m = now.getMonth() - birth.getMonth()

        if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
          age--
        }

        return String(age)
      })

      .replace(/@season\b/g, () => {
        const month = now.getMonth() + 1

        if ([12, 1, 2].includes(month)) return '☀️ Summer'
        if ([3, 4, 5].includes(month)) return '🍂 Autumn'
        if ([6, 7, 8].includes(month)) return '❄️ Winter'

        return '🌸 Spring'
      })

      .replace(/@upper\((.*?)\)/g, (_, value) => value.toUpperCase())

      .replace(/@lower\((.*?)\)/g, (_, value) => value.toLowerCase())

      .replace(/@select\[(.*?)\|(.*?)\]/g, (_, selected) => selected.trim())

      .replace(/@lorem\((\d+)\)/g, (_, words) => {
        const lorem =
          'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'

        const list = lorem.split(' ')

        return Array.from({ length: Number(words) }, (_, i) => list[i % list.length]).join(' ')
      })

      .replace(/@lorem\b/g, () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')

      .replace(
        /@barcode\((.*?)\)/g,
        (_, value) =>
          `![barcode](https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(
            value
          )})`
      )

      .replace(
        /@qrcode\((.*?)\)/g,
        (_, value) =>
          `![qrcode](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
            value
          )})`
      )

      .replace(/@eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g, (_, expr) => {
        try {
          const fn = Function(...Object.keys(context), `return (${expr})`)

          return String(fn(...Object.values(context)))
        } catch (err) {
          console.error('EVAL ERROR:', expr, err)
          return '[Expression error]'
        }
      })
    if (text.includes('@') && nested < 5) {
      text = processCommands(text, context, nested + 1)
    }
    return text
  }

  const processButtons = (text: string) =>
    text.replace(
      /@button\(\s*([^,]+?)\s*,\s*(.+?)\s*\)/g,
      (_, label, expr) =>
        `<button data-expression="${encodeURIComponent(expr.trim())}">${label}</button>`
    )

  const executeExpression = (expr: string) => {
    const m = expr.match(/^\$\{(\w+)\}=(.*)$/)

    if (!m) return

    const variable = m[1]
    const expression = m[2]

    const variables = extractVariables(value)

    let js = expression

    js = processCommands(
      js,
      {
        temperature,
        weather,
        city: location.city,
        country: location.country,
      },
      0
    )

    js = js.replace(/\$\{([a-zA-Z_]\w*)\}/g, (_, name) => JSON.stringify(variables[name] ?? ''))

    const result = Function(`return (${js})`)()

    const replacement = '${' + variable + '}=' + result

    const regex = new RegExp(`^\\$\\{${variable}\\}\\s*=([^\\r\\n]*)`, 'm')

    let newText: string

    if (regex.test(value)) {
      newText = value.replace(regex, replacement)
    } else {
      newText = value.trimEnd() + '\n' + replacement
    }

    setValue(newText)

    onChangeContent(
      id,
      JSON.stringify({
        ...objContent,
        text: newText,
      })
    )
  }

  const processAndDisplayCustomMarkdown = (text: string) => {
    // Variables
    const variables = extractVariables(text)
    text = processButtons(text)
    text = removeVariableDeclarations(text)
    text = resolveVariables(text, variables)

    const now = new Date()
    const context = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      week: Math.ceil(
        ((now.getTime() - new Date(now.getFullYear(), 0, 1).getTime()) / 86400000 +
          new Date(now.getFullYear(), 0, 1).getDay() +
          1) /
          7
      ),
      temperature,
      city: location.city,
      country: location.country,
    }

    const evalContext = {
      ...context,

      ...Object.fromEntries(
        Object.entries(variables).map(([k, v]) => {
          if (v === '') {
            return [k, '']
          }

          const num = Number(v)

          return [k, Number.isNaN(num) ? v : num]
        })
      ),

      countDates: (value: string) =>
        new Set(
          String(value || '')
            .split(',')
            .map((x) => x.trim())
            .filter(Boolean)
        ).size,
      hasDate: (value: string, date: string) => String(value || '').includes(date),
    }
    return processCommands(text, evalContext, 0)
  }

  const processAndSaveCustomMarkdown = (text: string) => {
    const now = new Date()

    return (
      text
        // =====================================================================
        // Date & Time
        // =====================================================================
        .replace(/\/date\b/g, () => now.toLocaleDateString())

        .replace(/\/time\b/g, () =>
          now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })
        )

        .replace(/\/datetime\b/g, () => now.toLocaleString())

        .replace(/\/dayofweek\b/g, () =>
          now.toLocaleDateString(undefined, {
            weekday: 'long',
          })
        )

        .replace(/\/week\b/g, () => {
          const start = new Date(now.getFullYear(), 0, 1)
          const week = Math.ceil(
            ((now.getTime() - start.getTime()) / 86400000 + start.getDay() + 1) / 7
          )

          return String(week)
        })

        .replace(/\/month\b/g, () => (now.getMonth() + 1).toString())

        .replace(/\/monthname\b/g, () =>
          now.toLocaleDateString(undefined, {
            month: 'long',
          })
        )

        .replace(/\/year\b/g, () => JSON.stringify(now.getFullYear()))

        .replace(/\/age\((.*?)\)/g, (_, birthDate) => {
          const birth = new Date(birthDate)

          let age = now.getFullYear() - birth.getFullYear()

          const m = now.getMonth() - birth.getMonth()

          if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
            age--
          }

          return String(age)
        })

        .replace(/\/countdown\((.*?)\)/g, (_, date) => {
          const target = new Date(date)
          const diff = target.getTime() - now.getTime()

          return String(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))))
        })

        .replace(/\/today\b/g, () => now.toLocaleDateString())

        .replace(/\/yesterday\b/g, () => {
          const d = new Date(now)
          d.setDate(d.getDate() - 1)
          return String(d.toLocaleDateString())
        })

        .replace(/\/tomorrow\b/g, () => {
          const d = new Date(now)
          d.setDate(d.getDate() + 1)
          return d.toLocaleDateString()
        })

        .replace(/\/weather\b/g, () => weather || '/weather')

        .replace(/\/temperature\b/g, () => temperature || '/temperature')

        .replace(/\/city\b/g, () => location.city || '/city')

        .replace(/\/country\b/g, () => location.country || '/country')

        .replace(/\/moon\b/g, () => {
          const lp = 2551443
          const current = now.getTime() / 1000
          const newMoon = new Date('2001-01-24').getTime() / 1000
          const phase = ((current - newMoon) % lp) / lp

          if (phase < 0.03) return '🌑 New Moon'
          if (phase < 0.22) return '🌒 Waxing Crescent'
          if (phase < 0.28) return '🌓 First Quarter'
          if (phase < 0.47) return '🌔 Waxing Gibbous'
          if (phase < 0.53) return '🌕 Full Moon'
          if (phase < 0.72) return '🌖 Waning Gibbous'
          if (phase < 0.78) return '🌗 Last Quarter'
          return '🌘 Waning Crescent'
        })

        .replace(/\/season\b/g, () => {
          const month = now.getMonth() + 1

          if ([12, 1, 2].includes(month)) return '☀️ Summer'
          if ([3, 4, 5].includes(month)) return '🍂 Autumn'
          if ([6, 7, 8].includes(month)) return '❄️ Winter'

          return '🌸 Spring'
        })

        // =====================================================================
        // UUID / Random
        // =====================================================================

        .replace(/\/guid\b/g, () => crypto.randomUUID())

        .replace(/\/uuid\b/g, () => crypto.randomUUID())

        .replace(/\/random\((\d+),(\d+)\)/g, (_, min, max) => {
          const a = Number(min)
          const b = Number(max)
          return String(Math.floor(Math.random() * (b - a + 1)) + a)
        })

        .replace(/\/random\((\d+)\)/g, (_, max) =>
          String(Math.floor(Math.random() * Number(max)) + 1)
        )

        .replace(/\/random\b/g, () => String(Math.floor(Math.random() * 100) + 1))

        // =====================================================================
        // Password
        // =====================================================================

        .replace(/\/password\((\d+)\)/g, (_, length) => {
          const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
          const len = Number(length)

          return Array.from(
            { length: len },
            () => chars[Math.floor(Math.random() * chars.length)]
          ).join('')
        })

        .replace(/\/password\b/g, () => {
          const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

          return Array.from(
            { length: 12 },
            () => chars[Math.floor(Math.random() * chars.length)]
          ).join('')
        })

        // =====================================================================
        // Images
        // =====================================================================

        .replace(
          /\/barcode\((.*?)\)/g,
          (_, value) =>
            `![barcode](https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(
              value
            )})`
        )

        .replace(
          /\/qrcode\((.*?)\)/g,
          (_, value) =>
            `![qrcode](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
              value
            )})`
        )

        // =====================================================================
        // Text
        // =====================================================================

        .replace(/\/upper\((.*?)\)/g, (_, value) => value.toUpperCase())

        .replace(/\/lower\((.*?)\)/g, (_, value) => value.toLowerCase())

        .replace(/\/stars\((\d+)\)/g, (_, count) =>
          '⭐'.repeat(Math.max(0, Math.min(Number(count), 10)))
        )

        .replace(/\/lorem\((\d+)\)/g, (_, words) => {
          const lorem =
            'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'

          const list = lorem.split(' ')

          return Array.from({ length: Number(words) }, (_, i) => list[i % list.length]).join(' ')
        })

        .replace(/\/lorem\b/g, () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
    )
  }

  const onChangeMarkdownContent = (id: string, newText: string) => {
    const processedText = processAndSaveCustomMarkdown(newText)
    onChangeContent(id, JSON.stringify({ ...objContent, text: processedText }))
    setValue(processedText)
  }

  React.useEffect(() => {
    if (!navigator.geolocation) return

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const { latitude, longitude } = coords

          const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
          )
          const weather = await weatherResponse.json()
          setTemperature(`${Math.round(weather.current.temperature_2m)}°C`)
          setWeather(getWeather(weather.current.weather_code))

          const geoResponse = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          )
          const geo = await geoResponse.json()
          setLocation({
            city:
              geo.address?.city ||
              geo.address?.town ||
              geo.address?.village ||
              geo.address?.municipality ||
              '',
            country: geo.address?.country || '',
          })
        } catch (error) {
          console.error(error)
        }
      },
      (error) => {
        console.error(error)
      }
    )
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
                      title: processAndSaveCustomMarkdown(e.target.innerText),
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
                  el.style.height = 'auto'
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
                onClick={() => {
                  setEditingContent(!objContent.locked)
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
                          onExecute={executeExpression}
                        />
                      )
                    },
                  }}
                  children={processAndDisplayCustomMarkdown(
                    value || '* ❓ What do you have for today?'
                  )}
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
