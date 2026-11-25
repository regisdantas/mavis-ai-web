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
              60
            )}px`,
          }}
        >
          <IconButton
            style={{ padding: '0', margin: '0' }}
            title="Go to note top"
            onClick={() => onScrollToCard(entry.id, 'top')}
          >
            <FiChevronUp />
          </IconButton>

          <IconButton
            style={{ padding: '0', margin: '0' }}
            title="Go to note bottom"
            onClick={() => onScrollToCard(entry.id, 'bottom')}
          >
            <FiChevronDown />
          </IconButton>
        </MiniMapItem>
      ))}
    </Container>
  )
}

const Container = styled.div`
  padding-top: 20px;
  width: 20px;
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d0d0d0;
  background: #d0d0d0;

  @media (max-width: 768px) {
    display: none;
  }
`

const MiniMapItem = styled.div<{ $selected?: boolean }>`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  gap: 0;
  padding: 0 !important;
  border: ${({ $selected }) => ($selected ? '2px solid #2563eb' : '1px solid transparent')};
  border-bottom: ${({ $selected }) =>
    $selected ? '2px solid #2563eb' : '1px solid rgb(0, 0, 0, 0.2)'};

  button:hover {
    background: white;
  }

  svg {
    margin: 0;
    padding: 0;
  }
`
