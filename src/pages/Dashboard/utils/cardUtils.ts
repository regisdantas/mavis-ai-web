export interface NoteContent {
  title: string
  type: string
  tags: string[]
  text: string
  color: string
  locked: boolean
  pinned: boolean
  collapsed: boolean
}

export const defaultContent: NoteContent = {
  title: '',
  type: 'record',
  tags: [],
  text: '',
  color: '#fff',
  locked: false,
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
