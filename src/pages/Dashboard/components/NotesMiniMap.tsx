import React from 'react'
import styled from 'styled-components'

import { FiChevronUp, FiChevronDown } from 'react-icons/fi'

import { IconButton } from '../../../styles/global'

import { IEntry } from '../hooks/useEntries'
import { getNoteColor } from '../utils/getNoteColor'

interface NotesMiniMapProps {
  entries: IEntry[]
  hoveredCardId: string | null
  cardHeights: Record<string, number>
  totalHeight: number
  onScrollToCard: (id: string, position: 'top' | 'bottom') => void
}

export const NotesMiniMap: React.FC<NotesMiniMapProps> = ({
  entries,
  hoveredCardId,
  cardHeights,
  totalHeight,
  onScrollToCard,
}) => {
  return (
    <Container>
      {entries.map((entry) => (
        <MiniMapItem
          key={entry.id}
          $selected={hoveredCardId === entry.id}
          style={{
            backgroundColor: getNoteColor(entry.content),
            height: `${Math.max(
              ((cardHeights[entry.id] || 40) / Math.max(totalHeight, 1)) * 100,
              24
            )}px`,
          }}
        >
          <IconButton title="Go to note top" onClick={() => onScrollToCard(entry.id, 'top')}>
            <FiChevronUp />
          </IconButton>

          <IconButton title="Go to note bottom" onClick={() => onScrollToCard(entry.id, 'bottom')}>
            <FiChevronDown />
          </IconButton>
        </MiniMapItem>
      ))}
    </Container>
  )
}

const Container = styled.div`
  position: fixed;

  left: 160px;
  top: 40px;

  width: 40px;
  height: calc(100vh - 40px);

  display: flex;
  flex-direction: column;

  overflow: hidden;

  background: #e0e0e5;

  z-index: 25;

  padding-top: 6px;
`

const MiniMapItem = styled.div<{ $selected?: boolean }>`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2px;

  border-radius: 4px;

  padding: 0 2px;

  border: ${({ $selected }) => ($selected ? '2px solid #2563eb' : '1px solid transparent')};

  button:hover {
    background: white;
  }

  svg {
    margin: 0;
    padding: 0;
  }
`
