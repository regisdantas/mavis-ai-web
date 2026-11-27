import React from 'react'
import styled from 'styled-components'

import { Card } from './Card/Card'
import { IEntry } from '../hooks/useEntries'
import { TemplateOption } from '../utils/cardUtils'

interface NotesListProps {
  entries: IEntry[]
  searchContent: string
  fuzzySearchEnabled: boolean
  pickerTags: string[]
  onHoverCard: (id: string | null) => void
  onChangeEntry: (id: string, content: string) => Promise<void>
  onChangeEmoji: (id: string, emoji: string) => Promise<void>
  updateEntryDate: (id: string, date: string) => Promise<void>
  selectedNoteIds: string[]
  onToggleSelection: (id: string) => void
  templateOptions: TemplateOption[]
  notesLocked: boolean
  onEditorFocus: (id: string, textarea: HTMLTextAreaElement) => void
  onEditorBlur: (id: string, textarea: HTMLTextAreaElement) => void
}

export const NotesList: React.FC<NotesListProps> = ({
  entries,
  searchContent,
  fuzzySearchEnabled,
  pickerTags,
  onHoverCard,
  onChangeEntry,
  onChangeEmoji,
  updateEntryDate,
  selectedNoteIds,
  onToggleSelection,
  templateOptions,
  notesLocked,
  onEditorFocus,
  onEditorBlur,
}) => {
  return (
    <EntryList>
      {entries.map((entry, index) => (
        <div
          key={entry.id}
          onMouseEnter={() => onHoverCard(entry.id)}
          onMouseLeave={() => onHoverCard(null)}
        >
          <Card
            id={entry.id}
            date={entry.date}
            number={index + 1}
            content={entry.content}
            emoji={entry.emoji}
            searchContent={searchContent}
            fuzzySearchEnabled={fuzzySearchEnabled}
            onChangeContent={onChangeEntry}
            onChangeDate={updateEntryDate}
            tags={pickerTags}
            selected={selectedNoteIds.includes(entry.id)}
            onToggleSelection={onToggleSelection}
            templateOptions={templateOptions}
            notesLocked={notesLocked}
            onEditorFocus={onEditorFocus}
            onEditorBlur={onEditorBlur}
            onChangeEmoji={onChangeEmoji}
          />
        </div>
      ))}
    </EntryList>
  )
}

const EntryList = styled.div`
  width: 100%;
  padding: 8px;
  padding-bottom: 60px;
`
