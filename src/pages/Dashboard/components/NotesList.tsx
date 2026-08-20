import React from 'react'
import styled from 'styled-components'

import { Card } from './Card/Card'
import { IEntry } from '../hooks/useEntries'
import { TemplateOption } from '../utils/cardUtils'

interface NotesListProps {
  entries: IEntry[]
  pickerTags: string[]
  cardRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>
  onHoverCard: (id: string | null) => void
  onDeleteEntry: (id: string, permanent?: boolean) => Promise<void>
  onChangeEntry: (id: string, content: string) => Promise<void>
  updateEntryDate: (id: string, date: string) => Promise<void>
  selectedNoteIds: string[]
  onToggleSelection: (id: string) => void
  templateOptions: TemplateOption[]
}

export const NotesList: React.FC<NotesListProps> = ({
  entries,
  pickerTags,
  cardRefs,
  onHoverCard,
  onDeleteEntry,
  onChangeEntry,
  updateEntryDate,
  selectedNoteIds,
  onToggleSelection,
  templateOptions,
}) => {
  return (
    <EntryList>
      {entries.map((entry, index) => (
        <div
          key={entry.id}
          ref={(el) => {
            cardRefs.current[entry.id] = el
          }}
          onMouseEnter={() => onHoverCard(entry.id)}
          onMouseLeave={() => onHoverCard(null)}
        >
          <Card
            id={entry.id}
            date={entry.date}
            number={index + 1}
            content={entry.content}
            onDeleteCard={onDeleteEntry}
            onChangeContent={onChangeEntry}
            onChangeDate={updateEntryDate}
            tags={pickerTags}
            selected={selectedNoteIds.includes(entry.id)}
            onToggleSelection={onToggleSelection}
            templateOptions={templateOptions}
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
