import React from 'react'
import styled from 'styled-components'
import { FiMenu, FiMinusSquare, FiMaximize2, FiSearch, FiLock, FiUnlock } from 'react-icons/fi'
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
  setExplorerExpanded: (expanded: boolean) => void
  panelWidth: number
  minimized?: boolean
  setMinimized: (value: boolean) => void
  mobileActive?: boolean
  notesLocked: boolean
  onToggleNotesLock: () => void
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
  setExplorerExpanded,
  panelWidth,
  minimized,
  setMinimized,
  mobileActive,
  notesLocked,
  onToggleNotesLock,
}) => {
  const explorerWidth = expanded ? 208 : 52
  const [searchExpanded, setSearchExpanded] = React.useState(false)
  const searchContainerRef = React.useRef<HTMLDivElement>(null)
  const searchInputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (!searchExpanded) {
      return
    }

    const handleOutsidePointerDown = (event: PointerEvent) => {
      const target = event.target

      if (!(target instanceof Node) || !searchContainerRef.current?.contains(target)) {
        setSearchExpanded(false)
      }
    }

    document.addEventListener('pointerdown', handleOutsidePointerDown)

    return () => document.removeEventListener('pointerdown', handleOutsidePointerDown)
  }, [searchExpanded])

  React.useEffect(() => {
    if (searchExpanded) {
      searchInputRef.current?.focus()
    }
  }, [searchExpanded])

  React.useEffect(() => {
    if (!mobileActive) {
      setSearchExpanded(false)
    }
  }, [mobileActive])

  return (
    <ToolbarContainer
      explorerWidth={explorerWidth}
      barWidth={panelWidth}
      minimized={minimized}
      mobileActive={mobileActive}
    >
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

          <SearchContainer ref={searchContainerRef} $searchExpanded={searchExpanded}>
            <SearchToggleButton
              type="button"
              aria-label="Open search"
              aria-expanded={searchExpanded}
              tabIndex={searchExpanded ? -1 : 0}
              onClick={() => setSearchExpanded(true)}
            >
              <FiSearch />
            </SearchToggleButton>
            <input
              ref={searchInputRef}
              aria-hidden={!searchExpanded}
              tabIndex={searchExpanded ? 0 : -1}
              placeholder="Search"
              value={searchContent}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === 'Escape') {
                  event.preventDefault()
                  event.currentTarget.blur()
                  setSearchExpanded(false)
                }
              }}
            />

            <IconButton title="Clear search" onClick={() => onSearchChange('')}>
              <MdOutlineClear />
            </IconButton>
          </SearchContainer>
        </>
      )}
      <ActionsContainer>
        <EditLockButton
          type="button"
          $active={notesLocked}
          title={notesLocked ? 'Unlock note editing' : 'Lock note editing'}
          aria-label={notesLocked ? 'Unlock note editing' : 'Lock note editing'}
          aria-pressed={notesLocked}
          onClick={onToggleNotesLock}
        >
          {notesLocked ? <FiLock /> : <FiUnlock />}
        </EditLockButton>
        <MobileMenuButton
          type="button"
          title={expanded ? 'Collapse notes menu' : 'Expand notes menu'}
          aria-label={expanded ? 'Collapse notes menu' : 'Expand notes menu'}
          data-sidebar-toggle="notes"
          onClick={() => setExplorerExpanded(!expanded)}
        >
          <FiMenu />
        </MobileMenuButton>
        {!minimized && (
          <>
            {selectedCount > 0 ? (
              <ToolbarActionButton
                $active
                role="button"
                aria-pressed="true"
                title="Clear all notes"
                onClick={onClearAll}
              >
                <FiSquare />
              </ToolbarActionButton>
            ) : (
              <ToolbarActionButton
                $active={false}
                role="button"
                aria-pressed="false"
                title="Select all visible notes"
                onClick={onSelectAll}
              >
                <FiCheckSquare />
              </ToolbarActionButton>
            )}
            <IconButton title="Copy all visible notes" onClick={onCopyAllNotes}>
              <FiCopy />
            </IconButton>

            <IconButton title="Add note" onClick={onAddNote}>
              <IoMdAddCircleOutline />
            </IconButton>
          </>
        )}
        <PanelToggle
          title={minimized ? 'Restore notes panel' : 'Minimize notes panel'}
          onClick={() => setMinimized(!minimized)}
        >
          {minimized ? <FiMaximize2 /> : <FiMinusSquare />}
        </PanelToggle>
      </ActionsContainer>
    </ToolbarContainer>
  )
}

interface ToolbarContainerProps {
  explorerWidth: number
  barWidth: number
  minimized?: boolean
  mobileActive?: boolean
}

const ToolbarContainer = styled.div<ToolbarContainerProps>`
  display: ${({ minimized }) => (minimized ? 'none' : 'flex')};
  height: 32px;
  min-width: 100px;
  width: ${({ barWidth }) => `${barWidth + 20}px`};
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

  @media (max-width: 768px) {
    display: ${({ mobileActive }) => (mobileActive ? 'flex' : 'none')};
    flex: 1 1 auto;
    width: 100%;
    min-width: 0;
    height: 40px;
    margin: 0;
    overflow: hidden;
    border: 0;
    border-radius: 0;
    background: transparent;
    justify-content: flex-end;

    && ${IconButton} svg {
      color: #fff !important;
    }

    && ${IconButton}:hover {
      background: rgba(255, 255, 255, 0.15);
    }
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

  @media (max-width: 768px) {
    display: none;
  }
`

const SelectedPage = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 35px;
  margin: 0px 10px;

  @media (max-width: 768px) {
    display: none;
  }
`

const SearchContainer = styled.div<{ $searchExpanded: boolean }>`
  display: flex;
  align-self: ${({ $searchExpanded }) => ($searchExpanded ? 'flex-start' : 'center')};
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
  width: ${({ $searchExpanded }) => ($searchExpanded ? '250px' : '30px')};
  height: 30px;
  overflow: hidden;
  transform-origin: right center;
  background: ${({ $searchExpanded }) => ($searchExpanded ? '#231f20' : 'transparent')};
  border-radius: ${({ $searchExpanded }) => ($searchExpanded ? '0 0 10px 10px' : '10px')};
  box-shadow: none;
  transition: width 240ms cubic-bezier(0.2, 0.8, 0.2, 1), height 200ms ease, margin 200ms ease,
    background-color 180ms ease, border-radius 200ms ease, box-shadow 220ms ease;

  > button {
    order: 2;
    display: flex;
    flex: ${({ $searchExpanded }) => ($searchExpanded ? '0 0 0px' : '0 0 30px')};
    width: ${({ $searchExpanded }) => ($searchExpanded ? '0' : '30px')};
    min-width: 0;
    padding: 0;
    overflow: hidden;
    opacity: ${({ $searchExpanded }) => ($searchExpanded ? 0 : 1)};
    pointer-events: ${({ $searchExpanded }) => ($searchExpanded ? 'none' : 'auto')};
    transition: flex-basis 220ms ease, opacity 140ms ease;
  }

  input {
    order: 1;
    display: block;
    flex: ${({ $searchExpanded }) => ($searchExpanded ? '1 1 0%' : '0 0 0px')};
    width: 0;
    min-width: 0;
    padding: ${({ $searchExpanded }) => ($searchExpanded ? '10px' : '0')};
    background: transparent;
    border: none;
    outline: none;
    color: #ffffff;
    opacity: ${({ $searchExpanded }) => ($searchExpanded ? 1 : 0)};
    pointer-events: ${({ $searchExpanded }) => ($searchExpanded ? 'auto' : 'none')};
    transition: flex-grow 220ms ease, opacity 160ms ease, padding 220ms ease;
  }

  && ${IconButton} svg {
    color: #fff !important;
  }

  && ${IconButton} {
    order: 3;
    display: flex;
    flex: ${({ $searchExpanded }) => ($searchExpanded ? '0 0 34px' : '0 0 0px')};
    width: ${({ $searchExpanded }) => ($searchExpanded ? '30px' : '0')} !important;
    min-width: ${({ $searchExpanded }) => ($searchExpanded ? '30px' : '0')} !important;
    margin: ${({ $searchExpanded }) => ($searchExpanded ? '2px' : '0')} !important;
    padding: 0 !important;
    overflow: hidden;
    opacity: ${({ $searchExpanded }) => ($searchExpanded ? 1 : 0)};
    pointer-events: ${({ $searchExpanded }) => ($searchExpanded ? 'auto' : 'none')};
    transition: flex-basis 220ms ease, opacity 160ms ease, margin 220ms ease;
  }

  @media (max-width: 1260px) {
    position: static;
    width: ${({ $searchExpanded }) => ($searchExpanded ? '160px' : '30px')};
    margin: ${({ $searchExpanded }) => ($searchExpanded ? '0 5px 0 auto' : '2px 2px 2px auto')};
  }

  @media (max-width: 768px) {
    position: ${({ $searchExpanded }) => ($searchExpanded ? 'absolute' : 'static')};
    order: 1;
    top: ${({ $searchExpanded }) => ($searchExpanded ? '2px' : 'auto')};
    right: ${({ $searchExpanded }) => ($searchExpanded ? '2px' : 'auto')};
    z-index: ${({ $searchExpanded }) => ($searchExpanded ? 20 : 'auto')};
    flex: 0 0 ${({ $searchExpanded }) => ($searchExpanded ? 'calc(100% - 24px)' : '30px')};
    width: ${({ $searchExpanded }) => ($searchExpanded ? 'calc(100% - 24px)' : '30px')};
    min-width: ${({ $searchExpanded }) => ($searchExpanded ? '0' : '30px')};
    height: ${({ $searchExpanded }) => ($searchExpanded ? '36px' : '30px')};
    margin: ${({ $searchExpanded }) => ($searchExpanded ? '0' : '2px')};
    align-self: ${({ $searchExpanded }) => ($searchExpanded ? 'auto' : 'center')};
    overflow: hidden;
    border-radius: ${({ $searchExpanded }) => ($searchExpanded ? '0 0 12px 12px' : '10px')};
    background: ${({ $searchExpanded }) => ($searchExpanded ? '#fff' : 'transparent')};
    box-shadow: ${({ $searchExpanded }) =>
      $searchExpanded ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none'};

    > button {
      color: #fff;
    }

    > input {
      padding: ${({ $searchExpanded }) => ($searchExpanded ? '0 10px' : '0')};
      height: 100%;
    }

    && ${IconButton} svg {
      color: #231f20 !important;
    }

    && ${IconButton}:hover {
      background: rgba(35, 31, 32, 0.1);
    }

    input::placeholder {
      color: rgba(35, 31, 32, 0.6);
    }

    input {
      color: #231f20;
    }
  }
`

const SearchToggleButton = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: #2e2e2e;
  cursor: pointer;
`

const ActionsContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 35px;

  @media (max-width: 768px) {
    order: 0;
  }
`

const ToolbarActionButton = styled(IconButton)<{ $active: boolean }>`
  &&&& {
    background: transparent;

    svg {
      color: ${({ $active }) => ($active ? '#4f46e5' : '#2e2e2e')} !important;
    }
  }

  @media (max-width: 768px) {
    &&&& svg {
      color: ${({ $active }) => ($active ? '#4f46e5' : '#fff')} !important;
    }
  }
`

const EditLockButton = styled.button<{ $active: boolean }>`
  display: flex;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin: 2px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: ${({ $active }) => ($active ? '#4f46e5' : '#2e2e2e')};
  cursor: pointer;

  svg {
    color: inherit;
  }

  &:hover {
    background: rgba(128, 128, 128, 0.15);
  }

  @media (max-width: 768px) {
    color: ${({ $active }) => ($active ? '#4f46e5' : '#fff')};

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`

const PanelToggle = styled(IconButton)`
  @media (max-width: 768px) {
    display: none !important;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin: 2px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: #2e2e2e;

  &:hover {
    background: rgba(128, 128, 128, 0.15);
  }

  @media (max-width: 768px) {
    display: flex;
    color: #fff;
  }
`
