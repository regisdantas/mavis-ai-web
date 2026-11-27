import React from 'react'
import styled, { DefaultTheme } from 'styled-components'
import {
  FiArchive,
  FiCheckSquare,
  FiCopy,
  FiCpu,
  FiLock,
  FiMenu,
  FiMinusSquare,
  FiRotateCcw,
  FiRotateCw,
  FiSearch,
  FiSquare,
  FiTrash2,
  FiUnlock,
  FiZap,
} from 'react-icons/fi'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { MdOutlineClear } from 'react-icons/md'
import FloatingNoteAIPrompt from './FloatingNoteAIPrompt'
import { NoteAIControls } from '../hooks/useNoteAI'

interface NotesToolbarProps {
  selectedTag: string
  selectedDate: string
  searchContent: string
  fuzzySearchEnabled: boolean

  onSearchChange: (value: string) => void
  onToggleFuzzySearch: () => void
  onDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void

  onAddNote: () => void
  onCopyAllNotes: () => void
  onSelectAll: () => void
  onClearAll: () => void
  onArchiveSelected: () => void
  onDeleteSelected: () => void
  onUndo: () => void
  onRedo: () => void
  canUndo: boolean
  canRedo: boolean
  noteAssistant: NoteAIControls
  selectedCount: number
  explorerExpanded: boolean
  setExplorerExpanded: (expanded: boolean) => void
  panelWidth: number
  toolbarOffset: number
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
  fuzzySearchEnabled,
  onSearchChange,
  onToggleFuzzySearch,
  onDateChange,
  onAddNote,
  onCopyAllNotes,
  onSelectAll,
  onClearAll,
  onArchiveSelected,
  onDeleteSelected,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  noteAssistant,
  selectedCount,
  explorerExpanded,
  setExplorerExpanded,
  panelWidth,
  toolbarOffset,
  minimized,
  setMinimized,
  mobileActive,
  notesLocked,
  onToggleNotesLock,
}) => {
  const [searchExpanded, setSearchExpanded] = React.useState(false)
  const searchContainerRef = React.useRef<HTMLDivElement>(null)
  const searchInputRef = React.useRef<HTMLInputElement>(null)
  const assistantButtonRef = React.useRef<HTMLButtonElement>(null)
  const assistantPromptRef = React.useRef<HTMLDivElement>(null)

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

  React.useEffect(() => {
    if (!noteAssistant.assistantOpen) {
      return
    }

    const handleOutsidePointerDown = (event: PointerEvent) => {
      const target = event.target

      if (
        !(target instanceof Node) ||
        (!assistantButtonRef.current?.contains(target) &&
          !assistantPromptRef.current?.contains(target))
      ) {
        noteAssistant.closeAssistant()
      }
    }

    document.addEventListener('pointerdown', handleOutsidePointerDown)

    return () => document.removeEventListener('pointerdown', handleOutsidePointerDown)
  }, [noteAssistant])

  const selectOrClearAll = selectedCount > 0 ? onClearAll : onSelectAll
  const selectedPage =
    searchContent.trim() === ''
      ? selectedTag.charAt(0).toUpperCase() + selectedTag.slice(1)
      : 'Search'

  return (
    <ToolbarContainer
      role="toolbar"
      aria-label={`${selectedPage} notes tools`}
      title={`${selectedPage} notes`}
      toolbarOffset={toolbarOffset}
      barWidth={panelWidth}
      minimized={minimized}
      mobileActive={mobileActive}
    >
      <LeftActions $searchExpanded={searchExpanded}>
        {!minimized && (
          <PanelToggle
            type="button"
            title="Minimize notes panel"
            aria-label="Minimize notes panel"
            onClick={() => setMinimized(true)}
          >
            <FiMinusSquare />
          </PanelToggle>
        )}
        {!minimized && <SelectedPage>{selectedPage}</SelectedPage>}
      </LeftActions>

      <RightActions>
        <ToolbarTools $minimized={minimized} data-search-expanded={searchExpanded}>
          <MobileMenuButton
            type="button"
            title={explorerExpanded ? 'Collapse notes menu' : 'Expand notes menu'}
            aria-label={explorerExpanded ? 'Collapse notes menu' : 'Expand notes menu'}
            data-sidebar-toggle="notes"
            onClick={() => setExplorerExpanded(!explorerExpanded)}
          >
            <FiMenu />
          </MobileMenuButton>
          <SearchContainer ref={searchContainerRef} $searchExpanded={searchExpanded}>
            <SearchToggleButton
              $searchExpanded={searchExpanded}
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
              onChange={(event) => onSearchChange(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === 'Escape') {
                  event.preventDefault()
                  event.currentTarget.blur()
                  setSearchExpanded(false)
                }
              }}
            />
            <FuzzySearchButton
              $searchExpanded={searchExpanded}
              $active={fuzzySearchEnabled}
              type="button"
              aria-label={fuzzySearchEnabled ? 'Disable fuzzy search' : 'Enable fuzzy search'}
              aria-pressed={fuzzySearchEnabled}
              title={fuzzySearchEnabled ? 'Disable fuzzy search' : 'Enable fuzzy search'}
              tabIndex={searchExpanded ? 0 : -1}
              onClick={onToggleFuzzySearch}
            >
              <FiZap />
            </FuzzySearchButton>
            <SearchClearButton
              $searchExpanded={searchExpanded}
              type="button"
              aria-label="Clear search"
              title="Clear search"
              tabIndex={searchExpanded ? 0 : -1}
              disabled={!searchContent}
              onClick={() => onSearchChange('')}
            >
              <MdOutlineClear />
            </SearchClearButton>
          </SearchContainer>
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
          <ToolbarButton
            type="button"
            $tone="add"
            title="Add note"
            aria-label="Add note"
            onClick={onAddNote}
          >
            <IoMdAddCircleOutline />
          </ToolbarButton>
          <ToolbarButton
            ref={assistantButtonRef}
            type="button"
            $tone="ai"
            title="AI assistant"
            aria-label="AI assistant"
            aria-expanded={noteAssistant.assistantOpen}
            disabled={notesLocked}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              if (noteAssistant.assistantOpen) {
                noteAssistant.closeAssistant()
              } else {
                void noteAssistant.openAssistant()
              }
            }}
          >
            <FiCpu />
          </ToolbarButton>
                    <ToolbarButton
            type="button"
            $tone="copy"
            title="Copy selected or visible notes"
            aria-label="Copy selected or visible notes"
            onClick={onCopyAllNotes}
          >
            <FiCopy />
          </ToolbarButton>
          <ToolbarButton
            type="button"
            $tone="redo"
            title="Redo last note change"
            aria-label="Redo last note change"
            disabled={notesLocked || !canRedo}
            onClick={onRedo}
          >
            <FiRotateCw />
          </ToolbarButton>
          <ToolbarButton
            type="button"
            $tone="undo"
            title="Undo last note change"
            aria-label="Undo last note change"
            disabled={notesLocked || !canUndo}
            onClick={onUndo}
          >
            <FiRotateCcw />
          </ToolbarButton>
          <ToolbarSeparator aria-hidden="true" />
          <ToolbarButton
            type="button"
            $selected={selectedCount > 0}
            $tone="select"
            title={selectedCount > 0 ? 'Deselect all notes' : 'Select all visible notes'}
            aria-label={selectedCount > 0 ? 'Deselect all notes' : 'Select all visible notes'}
            aria-pressed={selectedCount > 0}
            onClick={selectOrClearAll}
          >
            {selectedCount > 0 ? <FiSquare /> : <FiCheckSquare />}
          </ToolbarButton>
          <ToolbarButton
            type="button"
            $tone="archive"
            title="Archive selected notes"
            aria-label="Archive selected notes"
            disabled={notesLocked || selectedCount === 0}
            onClick={onArchiveSelected}
          >
            <FiArchive />
          </ToolbarButton>
          <ToolbarButton
            type="button"
            $tone="trash"
            $rightSpace
            title="Delete selected notes"
            aria-label="Delete selected notes"
            disabled={notesLocked || selectedCount === 0}
            onClick={onDeleteSelected}
          >
            <FiTrash2 />
          </ToolbarButton>
        </ToolbarTools>
      </RightActions>

      {noteAssistant.assistantOpen && (
        <FloatingNoteAIPrompt
          instruction={noteAssistant.instruction}
          setInstruction={noteAssistant.setInstruction}
          apiKeyInput={noteAssistant.apiKeyInput}
          setApiKeyInput={noteAssistant.setApiKeyInput}
          requiresApiKey={noteAssistant.requiresApiKey}
          error={noteAssistant.error}
          loading={noteAssistant.aiLoading}
          onClear={noteAssistant.clearInstruction}
          onSend={() => void noteAssistant.submitInstruction()}
          onClose={noteAssistant.closeAssistant}
          dropdownRef={assistantPromptRef}
        />
      )}
    </ToolbarContainer>
  )
}

interface ToolbarContainerProps {
  toolbarOffset: number
  barWidth: number
  minimized?: boolean
  mobileActive?: boolean
}

const ToolbarContainer = styled.div<ToolbarContainerProps>`
  display: ${({ minimized }) => (minimized ? 'none' : 'flex')};
  position: absolute;
  left: ${({ toolbarOffset }) => `${toolbarOffset}px`};
  top: 10px;
  width: ${({ barWidth, minimized }) => (minimized ? '42px' : `${barWidth}px`)};
  min-width: ${({ minimized }) => (minimized ? '42px' : '0')};
  height: 32px;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  border-bottom: 1px solid var(--mavis-brand-border);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: var(--mavis-panel);

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    display: ${({ mobileActive }) => (mobileActive ? 'flex' : 'none')};
    position: relative;
    top: auto;
    left: auto;
    flex: 1 1 auto;
    width: 100%;
    min-width: 0;
    height: 40px;
    margin: 0;
    overflow-x: auto;
    overflow-y: hidden;
    border: 0;
    border-radius: 0;
    background: transparent;
  }
`

const SearchContainer = styled.div<{ $searchExpanded: boolean }>`
  display: flex;
  flex: ${({ $searchExpanded }) => ($searchExpanded ? '0 0 250px' : '0 0 30px')};
  width: ${({ $searchExpanded }) => ($searchExpanded ? '250px' : '30px')};
  height: 30px;
  align-items: center;
  margin: 0 4px;
  overflow: hidden;
  border-radius: ${({ $searchExpanded }) => ($searchExpanded ? '0 0 10px 10px' : '10px')};
  background: ${({ $searchExpanded }) => ($searchExpanded ? 'var(--mavis-brand)' : 'transparent')};
  transition: width 240ms cubic-bezier(0.2, 0.8, 0.2, 1), background-color 180ms ease,
    border-radius 200ms ease;

  input {
    order: 1;
    display: block;
    flex: ${({ $searchExpanded }) => ($searchExpanded ? '1 1 0%' : '0 0 0px')};
    width: 0;
    min-width: 0;
    height: 100%;
    padding: ${({ $searchExpanded }) => ($searchExpanded ? '0 10px' : '0')};
    border: none;
    outline: none;
    background: transparent;
    color: var(--mavis-text-inverse);
    opacity: ${({ $searchExpanded }) => ($searchExpanded ? 1 : 0)};
    pointer-events: ${({ $searchExpanded }) => ($searchExpanded ? 'auto' : 'none')};
    transition: flex-grow 220ms ease, opacity 160ms ease, padding 220ms ease;
  }

  @media (max-width: 1260px) {
    flex-basis: ${({ $searchExpanded }) => ($searchExpanded ? '160px' : '30px')};
    width: ${({ $searchExpanded }) => ($searchExpanded ? '160px' : '30px')};
  }

  @media (max-width: 768px) {
    position: ${({ $searchExpanded }) => ($searchExpanded ? 'absolute' : 'relative')};
    top: ${({ $searchExpanded }) => ($searchExpanded ? '2px' : 'auto')};
    left: ${({ $searchExpanded }) => ($searchExpanded ? '20px' : 'auto')};
    z-index: ${({ $searchExpanded }) => ($searchExpanded ? 20 : 'auto')};
    flex-basis: ${({ $searchExpanded }) => ($searchExpanded ? 'calc(100% - 40px)' : '17px')};
    width: ${({ $searchExpanded }) => ($searchExpanded ? 'calc(100% - 40px)' : '17px')};
    min-width: ${({ $searchExpanded }) => ($searchExpanded ? '0' : '17px')};
    height: ${({ $searchExpanded }) => ($searchExpanded ? '36px' : '30px')};
    margin: ${({ $searchExpanded }) => ($searchExpanded ? '0' : '2px 0')};
    background: ${({ $searchExpanded }) =>
      $searchExpanded ? 'var(--mavis-surface)' : 'transparent'};
    box-shadow: ${({ $searchExpanded }) =>
      $searchExpanded ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none'};

    input {
      padding: ${({ $searchExpanded }) => ($searchExpanded ? '0 10px' : '0')};
      color: var(--mavis-text);
    }

    input::placeholder {
      color: var(--mavis-muted);
    }
  }

  @media (max-width: 350px) {
    flex-basis: ${({ $searchExpanded }) => ($searchExpanded ? 'calc(100% - 40px)' : '16px')};
    width: ${({ $searchExpanded }) => ($searchExpanded ? 'calc(100% - 40px)' : '16px')};
    min-width: ${({ $searchExpanded }) => ($searchExpanded ? '0' : '16px')};
  }
`

const SearchToggleButton = styled.button<{ $searchExpanded: boolean }>`
  order: 2;
  display: flex;
  width: ${({ $searchExpanded }) => ($searchExpanded ? '0' : '30px')};
  height: 30px;
  flex: ${({ $searchExpanded }) => ($searchExpanded ? '0 0 0' : '0 0 30px')};
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: ${({ theme }) => theme.brand || '#5b4bd8'};
  opacity: ${({ $searchExpanded }) => ($searchExpanded ? 0 : 1)};
  pointer-events: ${({ $searchExpanded }) => ($searchExpanded ? 'none' : 'auto')};
  cursor: pointer;

  @media (max-width: 768px) {
    width: ${({ $searchExpanded }) => ($searchExpanded ? '0' : '17px')};
    flex-basis: ${({ $searchExpanded }) => ($searchExpanded ? '0' : '17px')};
    color: #bfdbfe;
  }

  @media (max-width: 350px) {
    width: ${({ $searchExpanded }) => ($searchExpanded ? '0' : '16px')};
    flex-basis: ${({ $searchExpanded }) => ($searchExpanded ? '0' : '16px')};
  }
`

const SearchClearButton = styled.button<{ $searchExpanded: boolean }>`
  order: 3;
  display: flex;
  width: ${({ $searchExpanded }) => ($searchExpanded ? '30px' : '0')};
  min-width: ${({ $searchExpanded }) => ($searchExpanded ? '30px' : '0')};
  height: 30px;
  flex: ${({ $searchExpanded }) => ($searchExpanded ? '0 0 30px' : '0 0 0')};
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: ${({ theme }) => theme.brand || '#5b4bd8'};
  opacity: ${({ $searchExpanded }) => ($searchExpanded ? 1 : 0)};
  pointer-events: ${({ $searchExpanded }) => ($searchExpanded ? 'auto' : 'none')};
  transition: flex-basis 220ms ease, opacity 160ms ease, margin 220ms ease;

  &:disabled {
    color: ${({ theme }) => theme.disabled || '#9ca3af'};
    cursor: default;
  }

  @media (max-width: 768px) {
    color: #bfdbfe;
  }
`

const FuzzySearchButton = styled.button<{ $searchExpanded: boolean; $active: boolean }>`
  order: 2;
  display: flex;
  width: ${({ $searchExpanded }) => ($searchExpanded ? '30px' : '0')};
  min-width: ${({ $searchExpanded }) => ($searchExpanded ? '30px' : '0')};
  height: 30px;
  flex: ${({ $searchExpanded }) => ($searchExpanded ? '0 0 30px' : '0 0 0')};
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
  border-radius: 8px;
  background: ${({ $active }) => ($active ? 'var(--mavis-brand-soft)' : 'transparent')};
  color: ${({ theme, $active }) =>
    $active ? theme.brandBlue || '#7185e8' : theme.brand || '#5b4bd8'};
  opacity: ${({ $searchExpanded }) => ($searchExpanded ? 1 : 0)};
  pointer-events: ${({ $searchExpanded }) => ($searchExpanded ? 'auto' : 'none')};
  transition: flex-basis 220ms ease, opacity 160ms ease, margin 220ms ease;

  @media (max-width: 768px) {
    background: ${({ $active }) => ($active ? 'rgba(196, 181, 253, 0.22)' : 'transparent')};
    color: ${({ $active }) => ($active ? '#c4b5fd' : '#bfdbfe')};
  }
`

const LeftActions = styled.div<{ $searchExpanded: boolean }>`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  height: 30px;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: ${({ $searchExpanded }) => ($searchExpanded ? 'none' : 'flex')};
  }
`

const SelectedPage = styled.div`
  display: flex;
  min-width: 0;
  max-width: 160px;
  flex: 0 1 auto;
  align-items: center;
  margin: 0 8px;
  overflow: hidden;
  color: ${({ theme }) => theme.textSecondary || '#514d68'};
  font-size: 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 1260px) {
    display: none;
  }
`

const RightActions = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  height: 30px;
  margin-left: auto;
  white-space: nowrap;

  @media (max-width: 768px) {
    flex: 1 1 auto;
    width: 100%;
    min-width: 0;
    height: 30px;
    margin-left: 0;
  }
`

const ToolbarTools = styled.div<{ $minimized?: boolean }>`
  display: ${({ $minimized }) => ($minimized ? 'none' : 'flex')};
  flex: 0 0 auto;
  align-items: center;
  height: 30px;

  @media (max-width: 768px) {
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    min-width: 0;
    justify-content: space-between;
    padding-left: 20px;

    &[data-search-expanded='true'] > :not(:nth-child(2)) {
      display: none;
    }
  }
`

type ToolbarTone =
  | 'undo'
  | 'redo'
  | 'archive'
  | 'trash'
  | 'ai'
  | 'add'
  | 'search'
  | 'copy'
  | 'select'

const getToolbarButtonColor = (
  tone?: ToolbarTone,
  selected?: boolean,
  mobile = false,
  theme?: DefaultTheme
) => {
  const brand = theme?.brand || '#5b4bd8'
  const brandStrong = theme?.brandStrong || '#4c3bc8'
  const brandBlue = theme?.brandBlue || '#7185e8'
  const danger = theme?.danger || '#dc2626'
  const muted = theme?.textMuted || '#716d86'
  const textSecondary = theme?.textSecondary || '#4b4960'

  if (tone === 'undo') return mobile ? '#fecaca' : danger
  if (tone === 'redo') return mobile ? '#bfdbfe' : brandBlue
  if (tone === 'archive') return mobile ? '#c4b5fd' : brand
  if (tone === 'trash') return mobile ? '#fecaca' : danger
  if (tone === 'ai') return mobile ? '#c4b5fd' : brand
  if (tone === 'add') return mobile ? '#c4b5fd' : brand
  if (tone === 'search') return mobile ? '#bfdbfe' : brand
  if (tone === 'copy') return mobile ? '#e2ddf5' : muted
  if (tone === 'select') {
    return selected ? (mobile ? '#c4b5fd' : brandStrong) : mobile ? '#bfdbfe' : brand
  }

  return mobile ? '#fff' : textSecondary
}

const ToolbarButton = styled.button<{
  $tone?: ToolbarTone
  $selected?: boolean
  $rightSpace?: boolean
}>`
  display: flex;
  width: 30px;
  height: 30px;
  flex: 0 0 30px;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: ${({ theme, $tone, $selected }) => getToolbarButtonColor($tone, $selected, false, theme)};
  cursor: pointer;

  &:hover:not(:disabled) {
    background: var(--mavis-brand-soft);
  }

  &:disabled {
    color: ${({ theme }) => theme.disabled || '#9ca3af'};
    cursor: not-allowed;
    opacity: 1;
  }

  svg {
    flex-shrink: 0;
    color: inherit;
  }

  @media (max-width: 768px) {
    width: 16px;
    height: 30px;
    flex-basis: 16px;
    margin: 0;
    margin-right: ${({ $rightSpace }) => ($rightSpace ? '20px' : '0')};
    border-radius: 7px;
    color: ${({ theme, $tone, $selected }) => getToolbarButtonColor($tone, $selected, true, theme)};

    &:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.15);
    }

    &:disabled {
      color: ${({ theme }) => theme.disabled || '#9ca3af'};
      opacity: 1;
    }
  }

  @media (max-width: 350px) {
    width: 17px;
    flex-basis: 17px;
  }
`

const ToolbarSeparator = styled.span`
  display: block;
  width: 1px;
  height: 20px;
  flex: 0 0 1px;
  margin: 0 5px;
  background: var(--mavis-brand-border);

  @media (max-width: 768px) {
    width: 1px;
    height: 18px;
    flex-basis: 1px;
    margin: 0;
    background: rgba(255, 255, 255, 0.45);
  }
`

const EditLockButton = styled.button<{ $active: boolean }>`
  display: flex;
  width: 30px;
  height: 30px;
  flex: 0 0 30px;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: ${({ theme, $active }) =>
    $active ? theme.brand || '#5b4bd8' : theme.textSecondary || '#4b4960'};
  cursor: pointer;

  svg {
    color: inherit;
  }

  &:hover {
    background: var(--mavis-brand-soft);
  }

  @media (max-width: 768px) {
    width: 16px;
    flex-basis: 16px;
    margin: 0;
    border-radius: 7px;
    color: ${({ $active }) => ($active ? '#c4b5fd' : '#fff')};

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }

  @media (max-width: 350px) {
    width: 17px;
    flex-basis: 17px;
  }
`

const DateContainer = styled.div`
  display: flex;
  align-items: center;

  height: 30px;

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

const PanelToggle = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  flex: 0 0 30px;
  align-items: center;
  justify-content: center;
  margin: 0 2px;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: ${({ theme }) => theme.disabled || '#9ca3af'};
  cursor: pointer;

  &:hover {
    background: var(--mavis-surface-hover);
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  width: 20px;
  height: 30px;
  flex: 0 0 20px;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: #fff;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`
