import React from 'react'
import styled from 'styled-components'

import { IconButton } from '../../../styles/global'

import { IoMdAddCircleOutline } from 'react-icons/io'
import { MdOutlineClear } from 'react-icons/md'
import { FiCheckSquare } from 'react-icons/fi'
import { FiCopy, FiCpu, FiSquare } from 'react-icons/fi'

interface DashboardToolbarProps {
  selectedTag: string
  selectedDate: string
  searchContent: string

  onSearchChange: (value: string) => void
  onDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void

  onAddNote: () => void
  onCopyAllNotes: () => void
  onSelectAll: () => void
  onClearAll: () => void
}

export const DashboardToolbar: React.FC<DashboardToolbarProps> = ({
  selectedTag,
  selectedDate,
  searchContent,
  onSearchChange,
  onDateChange,
  onAddNote,
  onCopyAllNotes,
  onSelectAll,
  onClearAll,
}) => {
  return (
    <>
      <ToolbarContainer style={{ left: '160px', width: '1030px' }}>
        <SelectedPage>
          {searchContent.trim() === ''
            ? selectedTag.charAt(0).toUpperCase() + selectedTag.slice(1)
            : 'Search'}
        </SelectedPage>

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

        <ActionsContainer>
          <IconButton title="Clear all notes" onClick={onClearAll}>
            <FiSquare />
          </IconButton>
          <IconButton title="Select all visible notes" onClick={onSelectAll}>
            <FiCheckSquare />
          </IconButton>
          <IconButton title="Copy all visible notes" onClick={onCopyAllNotes}>
            <FiCopy />
          </IconButton>

          <IconButton title="Add note" onClick={onAddNote}>
            <IoMdAddCircleOutline />
          </IconButton>
        </ActionsContainer>
      </ToolbarContainer>

      <ToolbarContainer
        style={{
          right: '40px',
          maxWidth: '680px',
        }}
      >
        <SelectedPage>
          <FiCpu />
          Chat
        </SelectedPage>
      </ToolbarContainer>
    </>
  )
}

const ToolbarContainer = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;

  width: 990px;
  height: 35px;

  background: #e0e0e5;

  color: #2e2e2e;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  input {
    background: transparent;
    border: none;
    outline: none;
    color: #2e2e2e;
  }

  @media (max-width: 1260px) {
    width: 100%;
    right: 0;
    left: 0;
  }
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

  margin: 10px;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  right: 150px;

  width: 250px;
  height: 35px;

  background: #f0f0f5;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  input {
    width: 100%;
    padding: 10px;
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

  position: absolute;
  right: 0;

  height: 35px;

  @media (max-width: 1260px) {
    position: static;
  }
`
