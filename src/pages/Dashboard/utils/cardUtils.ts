export interface NoteContent {
  title: string
  type: string
  tags: string[]
  text: string
  color: string
  pinned: boolean
  collapsed: boolean
}

export const defaultContent: NoteContent = {
  title: '',
  type: 'record',
  tags: [],
  text: '',
  color: '#fff',
  pinned: false,
  collapsed: false,
}

export const noteColors = [
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

export const darkNoteColorMap: Readonly<Record<string, string>> = {
  '#fff': '#242338',
  '#ffffff': '#242338',
  '#f8f9fa': '#2b2d3b',
  '#ced4da': '#343b4b',
  '#fff4b5': '#4a3e1a',
  '#ffdcc8': '#4b3027',
  '#ffcdd2': '#4b2831',
  '#fadce6': '#472b38',
  '#dcccfb': '#362c4c',
  '#bbdefb': '#243849',
  '#c8e6c9': '#273c2c',
  '#b2dfdb': '#243c3b',
  '#f3e5c8': '#463b2b',
  '#d7ccc8': '#3c302d',
}

const darkenUnmappedHexColor = (color: string) => {
  const match = /^#([a-f\d]{3}|[a-f\d]{6})$/i.exec(color)

  if (!match) {
    return '#292739'
  }

  const hex = match[1]
  const channels =
    hex.length === 3
      ? Array.from(hex, (channel) => parseInt(`${channel}${channel}`, 16))
      : (hex.match(/.{2}/g) || []).map((channel) => parseInt(channel, 16))

  return `#${channels
    .map((channel) => Math.round(channel * 0.3).toString(16).padStart(2, '0'))
    .join('')}`
}

export const getNoteDisplayColor = (color: string, darkMode: boolean) => {
  if (!darkMode) {
    return color
  }

  const normalizedColor = color.trim().toLowerCase()

  return darkNoteColorMap[normalizedColor] || darkenUnmappedHexColor(normalizedColor)
}

export const parseNoteContent = (
  content: string,
  isJsonString: (value: string) => boolean
): NoteContent => {
  const parsed = isJsonString(content)
    ? JSON.parse(content)
    : {
        ...defaultContent,
        text: content,
      }

  if (parsed && typeof parsed === 'object') {
    delete parsed.locked
  }

  return {
    ...defaultContent,
    ...parsed,
    tags: Array.from(new Set([...(parsed.tags || [])])),
  }
}

export const getArchiveTags = (tags: string[]) =>
  tags.includes('archive')
    ? tags.filter((tag) => tag !== 'archive')
    : [...tags.filter((tag) => tag !== 'trash'), 'archive']

export const getTrashTags = (tags: string[]) =>
  Array.from(new Set([...tags.filter((tag) => tag !== 'archive'), 'trash']))

export const formatTag = (tag: string) => tag.replace(/\b\w/g, (c) => c.toUpperCase())

export interface TemplateOption {
  title: string
  text: string
  color?: string
  tags?: string[]
}
