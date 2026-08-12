import React from 'react'

import { FiArchive, FiEye, FiStar, FiTrash2, FiType } from 'react-icons/fi'
import { BsJournalBookmark } from 'react-icons/bs'

import { getTags } from '../../../utils'
import { TagItem } from '../../../components/VerticalBar'
import { IEntry } from './useEntries'

export function useEntryFilter(entries: IEntry[]) {
  const [searchContent, setSearchContent] = React.useState('')
  const [selectedTag, setSelectedTag] = React.useState('favorite')

  const systemTags: TagItem[] = React.useMemo(
    () => [
      { name: 'all', icon: FiEye, system: true },
      { name: 'favorite', icon: FiStar, system: true },
      { name: 'journal', icon: BsJournalBookmark, system: true },
      { name: 'templates', icon: FiType, system: true },
      { name: 'archive', icon: FiArchive, system: true },
      { name: 'trash', icon: FiTrash2, system: true },
    ],
    []
  )

  const systemTagNames = React.useMemo(() => systemTags.map((tag) => tag.name), [systemTags])

  const availableTags = React.useMemo(
    () =>
      Array.from(new Set(entries.flatMap((entry) => getTags(entry.content))))
        .filter((tag) => !systemTagNames.includes(tag))
        .sort(),
    [entries, systemTagNames]
  )

  const pickerTags = React.useMemo(
    () => Array.from(new Set(['journal', 'templates', ...availableTags])).sort(),
    [availableTags]
  )

  const isEntryVisible = React.useCallback(
    (entry: IEntry) => {
      const tags = getTags(entry.content)

      if (searchContent.trim() !== '') {
        return entry.content.toLowerCase().includes(searchContent.toLowerCase())
      }

      if (selectedTag === 'all') {
        return !tags.includes('archive') && !tags.includes('trash')
      }

      if (selectedTag === 'archive') {
        return tags.includes('archive')
      }

      if (selectedTag === 'trash') {
        return tags.includes('trash')
      }

      return tags.includes(selectedTag) && !tags.includes('archive') && !tags.includes('trash')
    },
    [searchContent, selectedTag]
  )

  const visibleEntries = React.useMemo(
    () => entries.filter(isEntryVisible),
    [entries, isEntryVisible]
  )

  return {
    searchContent,
    setSearchContent,

    selectedTag,
    setSelectedTag,

    systemTags,
    availableTags,
    pickerTags,

    visibleEntries,
    isEntryVisible,
  }
}
