import React from 'react'

import { FiArchive, FiEye, FiStar, FiTrash2, FiType } from 'react-icons/fi'
import { PiExcludeDuotone } from 'react-icons/pi'
import { TbPrompt } from 'react-icons/tb'
import { BsJournalBookmark } from 'react-icons/bs'

import { getTags } from '../../../utils'
import { TagItem } from '../components/ExplorerSideBar'
import { IEntry } from './useEntries'

export function useEntryFilter(entries: IEntry[]) {
  const [searchContent, setSearchContent] = React.useState('')
  const [selectedTag, setSelectedTag] = React.useState('favorite')

  const systemTags: TagItem[] = React.useMemo(
    () => [
      { name: 'all', icon: FiEye, system: true, position: 'top' },
      { name: 'favorite', icon: FiStar, system: true, position: 'top' },
      { name: 'journal', icon: BsJournalBookmark, system: true, position: 'top' },
      { name: 'templates', icon: FiType, system: true, position: 'top' },
      { name: 'prompts', icon: TbPrompt, system: true, position: 'top' },
      { name: 'other', icon: PiExcludeDuotone, system: true, position: 'top' },
      { name: 'archive', icon: FiArchive, system: true, position: 'bottom' },
      { name: 'trash', icon: FiTrash2, system: true, position: 'bottom' },
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
    () => Array.from(new Set(['journal', 'templates', 'prompts', ...availableTags])).sort(),
    [availableTags]
  )

  const isEntryVisible = React.useCallback(
    (entry: IEntry) => {
      const tags = getTags(entry.content)
      const isTrashed = tags.includes('trash')
      const isArchived = tags.includes('archive')
      const isTemplate = tags.includes('templates')
      const isPrompt = tags.includes('prompts')

      if (searchContent.trim() !== '') {
        return entry.content.toLowerCase().includes(searchContent.toLowerCase())
      }

      if (selectedTag === 'all') {
        return !isTrashed && !isArchived
      }

      if (selectedTag === 'favorite') {
        return tags.includes('favorite') && !isTrashed && !isArchived
      }

      if (selectedTag === 'journal') {
        return tags.includes('journal') && !isTemplate && !isTrashed && !isArchived
      }

      if (selectedTag === 'templates') {
        return isTemplate && !isTrashed && !isArchived
      }

      if (selectedTag === 'prompts') {
        return isPrompt && !isTrashed && !isArchived
      }

      if (selectedTag === 'other') {
        return !isTrashed && !isArchived && !isTemplate && !isPrompt && !tags.includes('journal')
      }

      if (selectedTag === 'archive') {
        return isArchived && !isTrashed
      }

      if (selectedTag === 'trash') {
        return isTrashed
      }

      return tags.includes(selectedTag) && !isTrashed && !isArchived && !isTemplate && !isPrompt
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
