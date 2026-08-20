import React from 'react'
import styled from 'styled-components'
import { NotesToolbar } from './components/NotesToolbar'
import { useEntryFilter } from './hooks/useEntryFilter'
import { useCardMeasurements } from './hooks/useCardMeasurements'
import { useEntries } from './hooks/useEntries'
import { UserAuth } from '../../context/AuthContext'
import { HeaderPortal } from '../../components/HeaderPortal'
import { defaultContent } from './utils/cardUtils'
import { useDashboard } from './context/DashboardContext'
import { ExplorerSideBar } from './components/ExplorerSideBar'
import { NotesList } from './components/NotesList'
import { NotesMiniMap } from './components/NotesMiniMap'
import { Chat } from './components/Chat'
import { ChatToolbar } from './components/ChatToolbar'
import { ChatSideBar } from './components/ChatSideBar'
import { ChatAiProvider } from './context/ChatAiContext'

interface DashboardProps {
  explorerExpanded: boolean
  setExplorerExpanded: (expanded: boolean) => void
}

const Dashboard: React.FC<DashboardProps> = ({ explorerExpanded, setExplorerExpanded }) => {
  const { selectedDate, setSelectedDate } = useDashboard()
  const { user } = UserAuth()
  const { entries, fetchEntries, addEntry, updateEntry, deleteEntry, updateEntryDate } = useEntries(
    user?.uid || ''
  )
  const {
    searchContent,
    setSearchContent,
    selectedTag,
    setSelectedTag,
    systemTags,
    availableTags,
    pickerTags,
    visibleEntries,
  } = useEntryFilter(entries)

  const { cardRefs, cardHeights, totalHeight } = useCardMeasurements([entries])
  const [hoveredCardId, setHoveredCardId] = React.useState<string | null>(null)
  const [selectedNoteIds, setSelectedNoteIds] = React.useState<string[]>([])
  const notesPanelRef = React.useRef<HTMLDivElement>(null)
  const [notesPanelWidth, setNotesPanelWidth] = React.useState(0)
  const chatPanelRef = React.useRef<HTMLDivElement>(null)
  const [chatPanelWidth, setChatPanelWidth] = React.useState(0)
  const [notesMinimized, setNotesMinimized] = React.useState(false)
  const [chatMinimized, setChatMinimized] = React.useState(false)

  const templateOptions = React.useMemo(() => {
    return entries
      .filter((entry) => {
        try {
          const content = JSON.parse(entry.content)
          return (content.tags || []).includes('templates')
        } catch {
          return false
        }
      })
      .map((entry) => {
        const content = JSON.parse(entry.content)

        return {
          title: content.title || 'Untitled Template',
          text: content.text || '',
          color: content.color,
          tags: (content.tags || []).filter((tag: string) => tag !== 'templates'),
        }
      })
  }, [entries])

  React.useLayoutEffect(() => {
    const update = () => {
      setChatPanelWidth(chatPanelRef.current?.offsetWidth ?? 0)
    }

    update()

    const resizeObserver = new ResizeObserver(update)

    if (chatPanelRef.current) {
      resizeObserver.observe(chatPanelRef.current)
    }

    window.addEventListener('resize', update)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  React.useLayoutEffect(() => {
    const update = () => {
      setNotesPanelWidth(notesPanelRef.current?.offsetWidth ?? 0)
    }

    update()

    const resizeObserver = new ResizeObserver(update)

    if (notesPanelRef.current) {
      resizeObserver.observe(notesPanelRef.current)
    }

    window.addEventListener('resize', update)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  const toggleNoteSelection = React.useCallback((id: string) => {
    setSelectedNoteIds((current) =>
      current.includes(id) ? current.filter((noteId) => noteId !== id) : [...current, id]
    )
  }, [])

  const selectAllNotes = React.useCallback(() => {
    setSelectedNoteIds(visibleEntries.map((entry) => entry.id))
  }, [visibleEntries])

  const clearSelectedNotes = React.useCallback(() => {
    setSelectedNoteIds([])
  }, [])

  React.useEffect(() => {
    setSelectedNoteIds((current) =>
      current.filter((id) => entries.some((entry) => entry.id === id))
    )
  }, [entries])

  const selectedNotesText = React.useMemo(() => {
    return entries
      .filter((entry) => selectedNoteIds.includes(entry.id))
      .map((entry) => {
        try {
          const content = JSON.parse(entry.content)
          return [
            `# ${content.title || 'Untitled'}`,
            `Date: ${entry.date}`,
            `Tags: ${(content.tags || []).join(', ')}`,
            '',
            content.text || '',
          ].join('\n')
        } catch {
          return entry.content
        }
      })
      .join('\n\n────────────────────────────\n\n')
  }, [entries, selectedNoteIds])

  const selectedNoteTitles = React.useMemo(() => {
    return entries
      .filter((entry) => selectedNoteIds.includes(entry.id))
      .map((entry) => {
        try {
          const content = JSON.parse(entry.content)
          return content.title || 'Untitled'
        } catch {
          return 'Untitled'
        }
      })
  }, [entries, selectedNoteIds])

  const handleCopyAllNotes = async () => {
    const text =
      selectedNotesText.length > 0
        ? selectedNotesText
        : visibleEntries
            .map((entry) => {
              try {
                const content = JSON.parse(entry.content)
                return [
                  `# ${content.title || 'Untitled'}`,
                  `Date: ${entry.date}`,
                  `Tags: ${(content.tags || []).join(', ')}`,
                  '',
                  content.text || '',
                ].join('\n')
              } catch {
                return entry.content
              }
            })
            .join('\n\n────────────────────────────\n\n')

    await navigator.clipboard.writeText(text)
  }

  const handleDateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value)
  }

  async function handleAddNewEntry() {
    const tags = selectedTag !== 'all' ? [selectedTag] : []

    await addEntry({
      date: selectedDate,
      content: JSON.stringify({
        ...defaultContent,
        tags,
      }),
    })

    scrollToTop()
  }

  React.useEffect(() => {
    fetchEntries()
  }, [fetchEntries])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleDeleteEntry = async (id: string, permanent = false) => {
    if (!permanent) {
      const entry = entries.find((e) => e.id === id)

      if (!entry) {
        return
      }

      const content = JSON.parse(entry.content)

      const tags = Array.from(
        new Set([...(content.tags || []).filter((tag: string) => tag !== 'archive'), 'trash'])
      )

      await updateEntry(
        id,
        JSON.stringify({
          ...content,
          tags,
        })
      )

      return
    }

    await deleteEntry(id)
  }

  const availablePromptNotes = React.useMemo(() => {
    return entries
      .filter((entry) => {
        try {
          const content = JSON.parse(entry.content)

          return (content.tags || []).includes('prompts')
        } catch {
          return false
        }
      })
      .map((entry) => {
        const content = JSON.parse(entry.content)

        return {
          id: entry.id,
          title: content.title || 'Untitled Prompt',
        }
      })
  }, [entries])

  const handleChangeEntry = updateEntry

  const scrollToCard = (id: string, position: 'top' | 'bottom') => {
    const card = cardRefs.current[id]
    const container = notesPanelRef.current

    if (!card || !container) return

    const cardTop = card.offsetTop

    const target =
      position === 'top' ? cardTop - 100 : cardTop - container.clientHeight + card.offsetHeight + 50

    container.scrollTo({
      top: Math.max(0, target),
      behavior: 'smooth',
    })
  }

  return (
    <Workspace>
      <ChatAiProvider
        uid={user ? user.uid : ''}
        selectedNotesText={selectedNotesText}
        noteTitles={selectedNoteTitles}
        clearSelectedNotes={clearSelectedNotes}
        entries={entries}
      >
        <HeaderPortal>
          <NotesToolbar
            selectedTag={selectedTag}
            selectedDate={selectedDate}
            searchContent={searchContent}
            onSearchChange={setSearchContent}
            onDateChange={handleDateChanged}
            onAddNote={handleAddNewEntry}
            onCopyAllNotes={handleCopyAllNotes}
            onSelectAll={selectAllNotes}
            onClearAll={clearSelectedNotes}
            selectedCount={selectedNoteIds.length}
            expanded={explorerExpanded}
            panelWidth={notesPanelWidth}
            minimized={notesMinimized}
            setMinimized={setNotesMinimized}
          />
          <ChatToolbar
            onClearAll={clearSelectedNotes}
            expanded={explorerExpanded}
            panelWidth={chatPanelWidth}
            minimized={chatMinimized}
            setMinimized={setChatMinimized}
            notesMinimized={notesMinimized}
          />
        </HeaderPortal>
        <ExplorerSideBar
          systemTags={systemTags}
          customTags={availableTags}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          explorerExpanded={explorerExpanded}
          setExplorerExpanded={setExplorerExpanded}
          minimized={notesMinimized}
          setMinimized={setNotesMinimized}
        />
        {!notesMinimized && (
          <NotesMiniMap
            entries={visibleEntries}
            hoveredCardId={hoveredCardId}
            cardHeights={cardHeights}
            totalHeight={totalHeight}
            onScrollToCard={scrollToCard}
          />
        )}

        <NotesPanel ref={notesPanelRef} minimized={notesMinimized}>
          {!notesMinimized && (
            <NotesList
              entries={visibleEntries}
              pickerTags={pickerTags}
              cardRefs={cardRefs}
              updateEntryDate={updateEntryDate}
              onHoverCard={setHoveredCardId}
              onDeleteEntry={handleDeleteEntry}
              onChangeEntry={handleChangeEntry}
              selectedNoteIds={selectedNoteIds}
              onToggleSelection={toggleNoteSelection}
              templateOptions={templateOptions}
            />
          )}
        </NotesPanel>
        <ChatPanel ref={chatPanelRef} minimized={chatMinimized}>
          <Chat
            uid={user?.uid || ''}
            selectedNotesText={selectedNotesText}
            noteTitles={selectedNoteTitles}
            notesCount={selectedNoteIds.length}
            clearSelectedNotes={clearSelectedNotes}
          />
        </ChatPanel>
        <ChatSideBar minimized={chatMinimized} setMinimized={setChatMinimized} />
      </ChatAiProvider>
    </Workspace>
  )
}

export default Dashboard

const Workspace = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const ChatPanel = styled.div<{ minimized: boolean }>`
  flex: ${({ minimized }) => (minimized ? '0' : '1')};
  width: ${({ minimized }) => (minimized ? '0' : 'auto')};
  flex-direction: column;
  overflow: hidden;
  background: #e0e0e5;
`

const NotesPanel = styled.div<{ minimized: boolean }>`
  flex: ${({ minimized }) => (minimized ? '0 0 0' : '1.5')};
  width: ${({ minimized }) => (minimized ? '0' : 'auto')};
  margin-right: 10px;
  flex-direction: column;
  overflow: hidden;
  background: #e0e0e5;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #b0b0b5 #e0e0e5;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #e0e0e5;
  }

  &::-webkit-scrollbar-thumb {
    background: #b0b0b5;
    border-radius: 6px;
    border: 2px solid #e0e0e5;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #909095;
  }
`
