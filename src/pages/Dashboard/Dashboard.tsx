import React from 'react'
import styled from 'styled-components'
import { DashboardToolbar } from './components/DashboardToolbar'
import { useEntryFilter } from './hooks/useEntryFilter'
import { useCardMeasurements } from './hooks/useCardMeasurements'
import { useEntries } from './hooks/useEntries'
import { UserAuth } from '../../context/AuthContext'

import { UserMenu } from './components/UserMenu'
import { defaultContent } from './utils/cardUtils'
import { useDashboard } from './context/DashboardContext'
import { HeaderPortal } from '../../components/HeaderPortal'
import { VerticalBar } from '../../components/VerticalBar'
import { NotesList } from './components/NotesList'
import { NotesMiniMap } from './components/NotesMiniMap'
import { MavisChat } from './components/MavisChat'

const Dashboard: React.FC = () => {
  const { selectedDate, setSelectedDate } = useDashboard()
  const { user } = UserAuth()
  const { entries, fetchEntries, addEntry, updateEntry, deleteEntry } = useEntries(user?.uid || '')

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
  const notesContainerRef = React.useRef<HTMLDivElement>(null)
  const [selectedNoteIds, setSelectedNoteIds] = React.useState<string[]>([])

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
    return visibleEntries
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
  }, [visibleEntries, selectedNoteIds])

  const selectedNoteTitles = React.useMemo(() => {
    return visibleEntries
      .filter((entry) => selectedNoteIds.includes(entry.id))
      .map((entry) => {
        try {
          const content = JSON.parse(entry.content)
          return content.title || 'Untitled'
        } catch {
          return 'Untitled'
        }
      })
  }, [visibleEntries, selectedNoteIds])

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

  const handleChangeEntry = updateEntry

  const scrollToCard = (id: string, position: 'top' | 'bottom') => {
    const card = cardRefs.current[id]
    const container = notesContainerRef.current

    if (!card || !container) {
      return
    }

    const targetTop = card.offsetTop - 10

    const targetBottom = card.offsetTop + card.offsetHeight - container.clientHeight + 20

    container.scrollTo({
      top: position === 'top' ? targetTop : targetBottom,
      behavior: 'smooth',
    })
  }

  const isLoggedIn = !!user

  return (
    <BodyContainer>
      <HeaderPortal>
        {isLoggedIn && (
          <DashboardToolbar
            selectedTag={selectedTag}
            selectedDate={selectedDate}
            searchContent={searchContent}
            onSearchChange={setSearchContent}
            onDateChange={handleDateChanged}
            onAddNote={handleAddNewEntry}
            onCopyAllNotes={handleCopyAllNotes}
            onSelectAll={selectAllNotes}
            onClearAll={clearSelectedNotes}
          />
        )}
        {isLoggedIn && <UserMenu />}
      </HeaderPortal>
      <DataContainer
        ref={notesContainerRef}
        style={{ width: '990px', left: '200px', overflowY: 'scroll' }}
      >
        <NotesList
          entries={visibleEntries}
          pickerTags={pickerTags}
          cardRefs={cardRefs}
          onHoverCard={setHoveredCardId}
          onDeleteEntry={handleDeleteEntry}
          onChangeEntry={handleChangeEntry}
          selectedNoteIds={selectedNoteIds}
          onToggleSelection={toggleNoteSelection}
        />
      </DataContainer>
      <NotesMiniMap
        entries={visibleEntries}
        hoveredCardId={hoveredCardId}
        cardHeights={cardHeights}
        totalHeight={totalHeight}
        onScrollToCard={scrollToCard}
      />
      <DataContainer
        style={{
          right: '40px',
          maxWidth: '680px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MavisChat
          uid={user?.uid || ''}
          text={selectedNotesText}
          noteTitles={selectedNoteTitles}
          notesCount={selectedNoteIds.length}
        />
      </DataContainer>
      <VerticalBar
        systemTags={systemTags}
        customTags={availableTags}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
    </BodyContainer>
  )
}

export default Dashboard

const DataContainer = styled.div`
  position: absolute;
  margin-top: 25px;

  width: 100%;
  max-width: 990px;

  height: calc(100vh - 25px);

  overflow-x: hidden;

  padding: 4px;
  padding-top: 10px;
  background: #e0e0e5;

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

  @media (max-width: 1260px) {
    max-width: 100%;
    padding: 5px;
  }
`
const BodyContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: center;

  @media (max-width: 1260px) {
    padding-top: 40px;
    padding-bottom: 10px;
  }
`
