import { useState } from 'react'

interface UseNoteTagsProps {
  tags: string[]
  onTagsChange: (tags: string[]) => void
}

export function useNoteTags({ tags, onTagsChange }: UseNoteTagsProps) {
  const [showTagPicker, setShowTagPicker] = useState(false)
  const [creatingTag, setCreatingTag] = useState(false)
  const [newTagName, setNewTagName] = useState('')

  const hasTag = (tag: string) => tags.includes(tag)

  const toggleTag = (tag: string) => {
    const updatedTags = Array.from(
      new Set(hasTag(tag) ? tags.filter((t) => t !== tag) : [...tags, tag])
    )

    onTagsChange(updatedTags)
  }

  const createTag = (name: string) => {
    const normalized = name.trim().toLowerCase()

    if (!normalized) {
      return
    }

    toggleTag(normalized)

    setNewTagName('')
    setCreatingTag(false)
  }

  return {
    showTagPicker,
    creatingTag,
    newTagName,

    setShowTagPicker,
    setCreatingTag,
    setNewTagName,

    hasTag,
    toggleTag,
    createTag,
  }
}
