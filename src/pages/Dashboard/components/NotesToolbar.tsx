import React from 'react'
import styled from 'styled-components'
import { FiMinusSquare, FiMaximize2 } from 'react-icons/fi'
import { IconButton } from '../../../styles/global'

import { IoMdAddCircleOutline } from 'react-icons/io'
import { MdOutlineClear } from 'react-icons/md'
import { FiCheckSquare } from 'react-icons/fi'
import { FiCopy, FiSquare } from 'react-icons/fi'

interface NotesToolbarProps {
  selectedTag: string
  selectedDate: string
  searchContent: string

  onSearchChange: (value: string) => void
  onDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void

  onAddNote: () => void
  onCopyAllNotes: () => void
  onSelectAll: () => void
  onClearAll: () => void
  selectedCount: number
  expanded: boolean
  panelWidth: number
  minimized?: boolean
  setMinimized: (value: boolean) => void
}

export const NotesToolbar: React.FC<NotesToolbarProps> = ({
  selectedTag,
  selectedDate,
  searchContent,
  onSearchChange,
  onDateChange,
  onAddNote,
  onCopyAllNotes,
  selectedCount,
  onSelectAll,
  onClearAll,
  expanded,
  panelWidth,
  minimized,
  setMinimized,
}) => {
  const explorerWidth = expanded ? 188 : 52
  return (
    <ToolbarContainer explorerWidth={explorerWidth} barWidth={panelWidth} minimized={minimized}>
      <SelectedPage>
        {minimized
          ? 'Explorer'
          : searchContent.trim() === ''
          ? selectedTag.charAt(0).toUpperCase() + selectedTag.slice(1)
          : 'Search'}
      </SelectedPage>
      {!minimized && (
        <>
          {selectedTag === 'journal' && (
            <DateContainer>
              <input title="Select date" type="date" value={selectedDate} onChange={onDateChange} />
            </DateContainer>
          )}

          <SearchContainer>
            <input
              placeholder="Search"
              value={searchContent}
              onChange={(e) => onSearchChange(e.target.value)}
            />

            <IconButton title="Clear search" onClick={() => onSearchChange('')}>
              <MdOutlineClear />
            </IconButton>
          </SearchContainer>
        </>
      )}
      <ActionsContainer>
        {!minimized && (
          <>
            {selectedCount > 0 ? (
              <IconButton title="Clear all notes" onClick={onClearAll}>
                <FiSquare />
              </IconButton>
            ) : (
              <IconButton title="Select all visible notes" onClick={onSelectAll}>
                <FiCheckSquare />
              </IconButton>
            )}
            <IconButton title="Copy all visible notes" onClick={onCopyAllNotes}>
              <FiCopy />
            </IconButton>

            <IconButton title="Add note" onClick={onAddNote}>
              <IoMdAddCircleOutline />
            </IconButton>
          </>
        )}
        <IconButton
          title={minimized ? 'Restore notes panel' : 'Minimize notes panel'}
          onClick={() => setMinimized(true)}
        >
          {minimized ? <FiMaximize2 /> : <FiMinusSquare />}
        </IconButton>
      </ActionsContainer>
    </ToolbarContainer>
  )
}

interface ToolbarContainerProps {
  explorerWidth: number
  barWidth: number
  minimized?: boolean
}

const ToolbarContainer = styled.div<ToolbarContainerProps>`
  display: ${({ minimized }) => (minimized ? 'none' : 'flex')};
  height: 32px;
  min-width: 100px;
  width: ${({ barWidth }) => `${barWidth + 60}px`};
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin-left: ${({ explorerWidth }) => `${explorerWidth}px`};
  margin-top: 10px;
  border-bottom: 1px solid #d0d0d0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #e0e0e5;
  position: relative;
`

const DateContainer = styled.div`
  display: flex;
  align-items: center;

  height: 35px;

  input[type='date'] {
    width: 40px;
    min-width: 40px;
    height: 24px;

    border: none;
    background: transparent;

    color: transparent;
    overflow: hidden;
  }

  input[type='date']::-webkit-datetime-edit {
    display: none;
  }

  input[type='date']::-webkit-calendar-picker-indicator {
    display: block;
    opacity: 1;
    cursor: pointer;
  }
`

const SelectedPage = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 35px;
  margin: 0px 10px;
`

const SearchContainer = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
  width: 250px;
  height: 30px;
  background: #231f20;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  input {
    width: 100%;
    padding: 10px;
    background: transparent;
    border: none;
    outline: none;
    color: #ffffff;
  }

  @media (max-width: 1260px) {
    position: static;
    width: 160px;
    margin: 0 5px;
  }
`

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
`
