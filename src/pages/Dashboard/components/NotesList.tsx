import React from 'react'
import styled from 'styled-components'

import { Card } from './Card/Card'
import { IEntry } from '../hooks/useEntries'

interface NotesListProps {
  entries: IEntry[]
  pickerTags: string[]
  cardRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>
  onHoverCard: (id: string | null) => void
  onDeleteEntry: (id: string, permanent?: boolean) => Promise<void>
  onChangeEntry: (id: string, content: string) => Promise<void>
  selectedNoteIds: string[]
  onToggleSelection: (id: string) => void
}

export const NotesList: React.FC<NotesListProps> = ({
  entries,
  pickerTags,
  cardRefs,
  onHoverCard,
  onDeleteEntry,
  onChangeEntry,
  selectedNoteIds,
  onToggleSelection,
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
            tags={pickerTags}
            selected={selectedNoteIds.includes(entry.id)}
            onToggleSelection={onToggleSelection}
          />
        </div>
      ))}
    </EntryList>
  )
}

const EntryList = styled.div`
  width: 100%;
  padding-bottom: 60px;
`
