import React from 'react'
import styled from 'styled-components'
import { NotesToolbar } from './components/NotesToolbar'
import { useEntryFilter } from './hooks/useEntryFilter'
import { useEntries } from './hooks/useEntries'
import { UserAuth } from '../../context/AuthContext'
import { HeaderPortal } from '../../components/HeaderPortal'
import { defaultContent, getArchiveTags, parseNoteContent } from './utils/cardUtils'
import { getTags, isJsonString } from '../../utils'
import { getTagPinPreferences, saveTagPinPreferences } from '../../services/tagPinPreferences'
import { useDashboard } from './context/DashboardContext'
import { ExplorerSideBar } from './components/ExplorerSideBar'
import { NotesList } from './components/NotesList'
import { Chat } from './components/Chat'
import { ChatToolbar } from './components/ChatToolbar'
import { ChatSideBar } from './components/ChatSideBar'
import { ChatAiProvider } from './context/ChatAiContext'
import { useNoteAI } from './hooks/useNoteAI'

interface DashboardProps {
  explorerExpanded: boolean
  setExplorerExpanded: (expanded: boolean) => void
}

const loadUnpinnedTags = (userId: string): string[] => {
  if (!userId) {
    return []
  }

  try {
    const storedTags = localStorage.getItem(`mavis-ai-web:unpinned-tags:${userId}`)
    if (storedTags === null) {
      return []
    }

    const parsed: unknown = JSON.parse(storedTags)
    if (
      !Array.isArray(parsed) ||
      !parsed.every((tag: unknown): tag is string => typeof tag === 'string')
    ) {
      console.error('Stored tag pin preferences must be an array of strings.')
      return []
    }

    return Array.from(new Set(parsed))
  } catch (error) {
    console.error('Failed to load tag pin preferences.', error)
    return []
  }
}

const Dashboard: React.FC<DashboardProps> = ({ explorerExpanded, setExplorerExpanded }) => {
  const { selectedDate, setSelectedDate } = useDashboard()
  const { user } = UserAuth()
  const userId = user?.uid ?? ''
  const {
    entries,
    fetchEntries,
    addEntry,
    updateEntry,
    updateEntryDate,
    renameTag,
    deleteTag,
    addTagToEntries,
    removeTagFromEntries,
    applyEntries,
    undoLastChange,
    redoLastChange,
    canUndo,
    canRedo,
  } = useEntries(user?.uid || '')
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

  const storedUnpinnedTags = React.useMemo(() => loadUnpinnedTags(userId), [userId])
  const [tagPinState, setTagPinState] = React.useState(() => ({
    userId,
    tags: storedUnpinnedTags,
    loaded: false,
  }))
  const unpinnedTags = tagPinState.userId === userId ? tagPinState.tags : storedUnpinnedTags
  const tagPreferencesLoaded = tagPinState.userId === userId && tagPinState.loaded

  React.useEffect(() => {
    let active = true

    const loadTagPreferences = async () => {
      if (!userId) {
        setTagPinState({ userId, tags: [], loaded: true })
        return
      }

      try {
        const remoteTags = await getTagPinPreferences(userId)
        const tags = remoteTags ?? storedUnpinnedTags

        if (remoteTags === null && tags.length > 0) {
          await saveTagPinPreferences(userId, tags)
        }

        if (active) {
          setTagPinState({ userId, tags, loaded: true })
        }
      } catch (error) {
        console.error('Failed to load tag pin preferences from Firebase.', error)

        if (active) {
          setTagPinState({ userId, tags: storedUnpinnedTags, loaded: true })
        }
      }
    }

    void loadTagPreferences()

    return () => {
      active = false
    }
  }, [userId, storedUnpinnedTags])

  const saveUnpinnedTags = async (tags: string[]) => {
    const uniqueTags = Array.from(new Set(tags))

    if (!userId) {
      throw new Error('Cannot save tag pin preferences without an authenticated user.')
    }

    await saveTagPinPreferences(userId, uniqueTags)

    setTagPinState({ userId, tags: uniqueTags, loaded: true })
  }

  const [hoveredCardId, setHoveredCardId] = React.useState<string | null>(null)
  const [selectedNoteIds, setSelectedNoteIds] = React.useState<string[]>([])
  const activeEditorRef = React.useRef<{
    id: string
    textarea: HTMLTextAreaElement
  } | null>(null)
  const notesPanelRef = React.useRef<HTMLDivElement>(null)
  const [notesPanelWidth, setNotesPanelWidth] = React.useState(0)
  const [notesToolbarOffset, setNotesToolbarOffset] = React.useState(0)
  const chatPanelRef = React.useRef<HTMLDivElement>(null)
  const [chatPanelWidth, setChatPanelWidth] = React.useState(0)
  const [chatToolbarOffset, setChatToolbarOffset] = React.useState(0)
  const [notesMinimized, setNotesMinimized] = React.useState(false)
  const [chatMinimized, setChatMinimized] = React.useState(false)
  const [chatSessionsExpanded, setChatSessionsExpanded] = React.useState(false)
  const [activeMobileView, setActiveMobileView] = React.useState<'notes' | 'chat'>('notes')
  const [notesLocked, setNotesLocked] = React.useState(true)

  const toggleNotesLock = () => {
    if (!notesLocked) {
      const activeElement = document.activeElement

      if (
        activeElement instanceof HTMLElement &&
        (activeElement.isContentEditable || activeElement instanceof HTMLTextAreaElement)
      ) {
        activeElement.blur()
      }
    }

    setNotesLocked((current) => !current)
  }

  const handlePanelScroll = React.useCallback((event: React.UIEvent<HTMLDivElement>) => {
    const { clientWidth, scrollLeft } = event.currentTarget

    if (clientWidth === 0) {
      return
    }

    const nextView = scrollLeft >= clientWidth / 2 ? 'chat' : 'notes'
    setActiveMobileView((currentView) => (currentView === nextView ? currentView : nextView))
  }, [])

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

  const trashedEntryIds = React.useMemo(
    () =>
      entries.filter((entry) => getTags(entry.content).includes('trash')).map((entry) => entry.id),
    [entries]
  )
  const selectedTrashEntryIds = React.useMemo(
    () => selectedNoteIds.filter((id) => trashedEntryIds.includes(id)),
    [selectedNoteIds, trashedEntryIds]
  )

  React.useLayoutEffect(() => {
    const update = () => {
      const panel = chatPanelRef.current
      const headerPortal = document.getElementById('header-portal')
      setChatPanelWidth(panel?.offsetWidth ?? 0)
      setChatToolbarOffset(
        panel && headerPortal
          ? panel.getBoundingClientRect().left - headerPortal.getBoundingClientRect().left
          : 0
      )
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
  }, [explorerExpanded, notesMinimized, chatMinimized, chatSessionsExpanded])

  React.useLayoutEffect(() => {
    const update = () => {
      const panel = notesPanelRef.current
      const headerPortal = document.getElementById('header-portal')
      setNotesPanelWidth(panel?.offsetWidth ?? 0)
      setNotesToolbarOffset(
        panel && headerPortal
          ? panel.getBoundingClientRect().left - headerPortal.getBoundingClientRect().left
          : 0
      )
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
  }, [explorerExpanded, notesMinimized, chatMinimized, chatSessionsExpanded])

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

  const handleRenameTag = async (oldTag: string, newTag: string) => {
    if (notesLocked) return

    await renameTag(oldTag, newTag)

    if (unpinnedTags.includes(oldTag)) {
      const renamedUnpinnedTags = unpinnedTags.filter((tag) => tag !== oldTag)
      if (!renamedUnpinnedTags.includes(newTag)) {
        renamedUnpinnedTags.push(newTag)
      }
      await saveUnpinnedTags(renamedUnpinnedTags)
    }

    if (selectedTag === oldTag) {
      setSelectedTag(newTag)
    }
  }

  const handleDeleteTag = async (tag: string) => {
    if (notesLocked) return

    await deleteTag(tag)

    if (unpinnedTags.includes(tag)) {
      await saveUnpinnedTags(unpinnedTags.filter((unpinnedTag) => unpinnedTag !== tag))
    }

    if (selectedTag === tag) {
      setSelectedTag('all')
    }
  }

  const handleToggleTagPin = async (tag: string) => {
    if (notesLocked || !tagPreferencesLoaded) return

    await saveUnpinnedTags(
      unpinnedTags.includes(tag)
        ? unpinnedTags.filter((unpinnedTag) => unpinnedTag !== tag)
        : [...unpinnedTags, tag]
    )
  }

  const handleAddTagToSelected = async (tag: string) => {
    if (notesLocked) return
    await addTagToEntries(selectedNoteIds, tag)
  }

  const handleRemoveTagFromSelected = async (tag: string) => {
    if (notesLocked) return
    await removeTagFromEntries(selectedNoteIds, tag)
  }

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

  const handleEditorFocus = React.useCallback((id: string, textarea: HTMLTextAreaElement) => {
    activeEditorRef.current = { id, textarea }
  }, [])

  const handleEditorBlur = React.useCallback((id: string, textarea: HTMLTextAreaElement) => {
    const activeEditor = activeEditorRef.current

    if (activeEditor?.id === id && activeEditor.textarea === textarea) {
      activeEditorRef.current = null
    }
  }, [])

  const getAssistantNoteContext = React.useCallback(() => {
    const activeEditor = activeEditorRef.current

    if (activeEditor?.textarea.isConnected) {
      return {
        entryId: activeEditor.id,
        value: activeEditor.textarea.value,
        textarea: activeEditor.textarea,
      }
    }

    const selectedEntry = entries.find((entry) => entry.id === selectedNoteIds[0])

    if (!selectedEntry) {
      return null
    }

    const content = parseNoteContent(selectedEntry.content, isJsonString)

    return {
      entryId: selectedEntry.id,
      value: content.text || '',
      textarea: null,
    }
  }, [entries, selectedNoteIds])

  const handleAssistantContentChange = React.useCallback(
    async (id: string, text: string) => {
      if (notesLocked) {
        throw new Error('Unlock note editing before using the AI assistant.')
      }

      const entry = entries.find((currentEntry) => currentEntry.id === id)

      if (!entry) {
        throw new Error('The note selected for AI editing could not be found.')
      }

      const parsedContent = isJsonString(entry.content)
        ? JSON.parse(entry.content)
        : { ...defaultContent, text: entry.content }
      const content =
        parsedContent && typeof parsedContent === 'object'
          ? parsedContent
          : { ...defaultContent, text: entry.content }

      await updateEntry(
        id,
        JSON.stringify({
          ...content,
          text,
        })
      )
    },
    [entries, notesLocked, updateEntry]
  )

  const noteAssistant = useNoteAI({
    userId: user?.uid,
    getNoteContext: getAssistantNoteContext,
    onContentChange: handleAssistantContentChange,
  })

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

  const handleUpdateEntryDate = async (id: string, date: string) => {
    if (notesLocked) return
    await updateEntryDate(id, date)
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

  const handleDeleteSelectedNotes = async () => {
    if (notesLocked || !selectedNoteIds.length) {
      return
    }

    const selectedTrashIds = new Set(selectedTrashEntryIds)
    const noteIdsToMoveToTrash = selectedNoteIds.filter((id) => !selectedTrashIds.has(id))

    if (selectedTrashEntryIds.length) {
      const selectedTrashLabel = `${selectedTrashEntryIds.length} selected ${
        selectedTrashEntryIds.length === 1 ? 'note' : 'notes'
      }`
      const moveToTrashLabel = `${noteIdsToMoveToTrash.length} selected ${
        noteIdsToMoveToTrash.length === 1 ? 'note' : 'notes'
      }`
      const confirmationMessage = noteIdsToMoveToTrash.length
        ? `Move ${moveToTrashLabel} to Trash and permanently delete ${selectedTrashLabel} from Trash?`
        : `Permanently delete ${selectedTrashLabel} from Trash?`

      if (!window.confirm(confirmationMessage)) {
        return
      }
    }

    const updatedEntries = entries
      .filter((entry) => noteIdsToMoveToTrash.includes(entry.id))
      .map((entry) => {
        const content = parseNoteContent(entry.content, isJsonString)
        const tags = Array.from(
          new Set([...content.tags.filter((tag) => tag !== 'archive'), 'trash'])
        )

        return {
          ...entry,
          content: JSON.stringify({
            ...content,
            tags,
          }),
        }
      })

    await applyEntries(updatedEntries, selectedTrashEntryIds)
  }

  const handleArchiveSelectedNotes = async () => {
    if (notesLocked || !selectedNoteIds.length) {
      return
    }

    const updatedEntries = entries
      .filter((entry) => selectedNoteIds.includes(entry.id))
      .map((entry) => {
        const content = parseNoteContent(entry.content, isJsonString)

        return {
          ...entry,
          content: JSON.stringify({
            ...content,
            tags: getArchiveTags(content.tags),
          }),
        }
      })

    await applyEntries(updatedEntries)
  }

  const handleRestoreSelectedTrash = async () => {
    if (notesLocked) return
    await removeTagFromEntries(selectedTrashEntryIds, 'trash')
  }

  const handleRestoreAllTrash = async () => {
    if (notesLocked) return
    await removeTagFromEntries(trashedEntryIds, 'trash')
  }

  const handleEmptyTrash = async () => {
    if (notesLocked || !trashedEntryIds.length) {
      return
    }

    const confirmed = window.confirm(
      `Permanently delete all ${trashedEntryIds.length} note${
        trashedEntryIds.length === 1 ? '' : 's'
      } from Trash? You can undo this while the notes view is open.`
    )

    if (!confirmed) {
      return
    }

    await applyEntries([], trashedEntryIds)
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
  const handleArchiveSelectedFromToolbar = async () => {
    try {
      await handleArchiveSelectedNotes()
    } catch (error) {
      console.error('Failed to archive selected notes.', error)
    }
  }

  const handleDeleteSelectedFromToolbar = async () => {
    try {
      await handleDeleteSelectedNotes()
    } catch (error) {
      console.error('Failed to delete selected notes.', error)
    }
  }

  const handleUndoChange = async () => {
    try {
      await undoLastChange()
    } catch (error) {
      console.error('Failed to undo the last note change.', error)
    }
  }

  const handleRedoChange = async () => {
    try {
      await redoLastChange()
    } catch (error) {
      console.error('Failed to redo the last note change.', error)
    }
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
            onArchiveSelected={handleArchiveSelectedFromToolbar}
            onDeleteSelected={handleDeleteSelectedFromToolbar}
            onUndo={handleUndoChange}
            onRedo={handleRedoChange}
            canUndo={canUndo}
            canRedo={canRedo}
            noteAssistant={noteAssistant}
            selectedCount={selectedNoteIds.length}
            explorerExpanded={explorerExpanded}
            setExplorerExpanded={setExplorerExpanded}
            panelWidth={notesPanelWidth}
            toolbarOffset={notesToolbarOffset}
            minimized={notesMinimized}
            setMinimized={setNotesMinimized}
            mobileActive={activeMobileView === 'notes'}
            notesLocked={notesLocked}
            onToggleNotesLock={toggleNotesLock}
          />
          <ChatToolbar
            onClearAll={clearSelectedNotes}
            panelWidth={chatPanelWidth}
            toolbarOffset={chatToolbarOffset}
            minimized={chatMinimized}
            setMinimized={setChatMinimized}
            menuExpanded={chatSessionsExpanded}
            setMenuExpanded={setChatSessionsExpanded}
            mobileActive={activeMobileView === 'chat'}
          />
        </HeaderPortal>
        <PanelScroller onScroll={handlePanelScroll}>
          <NotesView role="region" aria-label="Notes">
            <ExplorerSideBar
              systemTags={systemTags}
              customTags={availableTags}
              unpinnedTags={unpinnedTags}
              onToggleTagPin={handleToggleTagPin}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
              explorerExpanded={explorerExpanded}
              setExplorerExpanded={setExplorerExpanded}
              minimized={notesMinimized}
              setMinimized={setNotesMinimized}
              selectedNoteIds={selectedNoteIds}
              onRenameTag={handleRenameTag}
              onDeleteTag={handleDeleteTag}
              onAddTagToSelected={handleAddTagToSelected}
              onRemoveTagFromSelected={handleRemoveTagFromSelected}
              trashCount={trashedEntryIds.length}
              selectedTrashCount={selectedTrashEntryIds.length}
              onDeleteSelectedNotes={handleDeleteSelectedNotes}
              onRestoreSelectedTrash={handleRestoreSelectedTrash}
              onRestoreAllTrash={handleRestoreAllTrash}
              onEmptyTrash={handleEmptyTrash}
              actionsLocked={notesLocked}
              tagPreferencesLoading={!tagPreferencesLoaded}
            />
            <NotesPanel
              ref={notesPanelRef}
              minimized={notesMinimized}
              otherMinimized={chatMinimized}
            >
              {!notesMinimized && (
                <NotesList
                  entries={visibleEntries}
                  pickerTags={pickerTags}
                  updateEntryDate={handleUpdateEntryDate}
                  onHoverCard={setHoveredCardId}
                  onChangeEntry={handleChangeEntry}
                  selectedNoteIds={selectedNoteIds}
                  onToggleSelection={toggleNoteSelection}
                  templateOptions={templateOptions}
                  notesLocked={notesLocked}
                  onEditorFocus={handleEditorFocus}
                  onEditorBlur={handleEditorBlur}
                />
              )}
            </NotesPanel>
          </NotesView>
          <ChatView role="region" aria-label="AI sessions">
            <ChatPanel ref={chatPanelRef} minimized={chatMinimized} otherMinimized={notesMinimized}>
              <Chat
                uid={user?.uid || ''}
                selectedNotesText={selectedNotesText}
                noteTitles={selectedNoteTitles}
                notesCount={selectedNoteIds.length}
                clearSelectedNotes={clearSelectedNotes}
              />
            </ChatPanel>
            <ChatSideBar
              minimized={chatMinimized}
              setMinimized={setChatMinimized}
              menuExpanded={chatSessionsExpanded}
              setMenuExpanded={setChatSessionsExpanded}
            />
          </ChatView>
        </PanelScroller>
      </ChatAiProvider>
    </Workspace>
  )
}

export default Dashboard

const Workspace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`

const PanelScroller = styled.div`
  display: contents;

  @media (max-width: 768px) {
    display: flex;
    flex: 1 1 0;
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 0;
    overflow-x: auto;
    overflow-y: hidden;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const NotesView = styled.div`
  display: contents;

  @media (max-width: 768px) {
    position: relative;
    display: flex;
    flex: 0 0 100%;
    width: 100%;
    min-width: 100%;
    height: 100%;
    overflow: hidden;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`

const ChatView = styled.div`
  display: contents;

  @media (max-width: 768px) {
    position: relative;
    display: flex;
    flex: 0 0 100%;
    width: 100%;
    min-width: 100%;
    height: 100%;
    overflow: hidden;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`

const ChatPanel = styled.div<{ minimized: boolean; otherMinimized: boolean }>`
  flex: ${({ minimized }) => (minimized ? '0' : '1')};
  width: ${({ minimized }) => (minimized ? '0' : 'auto')};
  min-width: 0;
  max-width: 1024px;
  margin-left: ${({ minimized, otherMinimized }) => (!minimized && otherMinimized ? 'auto' : '0')};
  margin-right: ${({ minimized, otherMinimized }) => (!minimized && otherMinimized ? 'auto' : '0')};
  flex-direction: column;
  overflow: hidden;
  background: #e0e0e5;

  @media (max-width: 768px) {
    flex: ${({ minimized }) => (minimized ? '0' : '1 1 0')};
    max-width: none;
    margin: 0;
  }
`

const NotesPanel = styled.div<{ minimized: boolean; otherMinimized: boolean }>`
  flex: ${({ minimized }) => (minimized ? '0 0 0' : '1.5')};
  width: ${({ minimized }) => (minimized ? '0' : 'auto')};
  min-width: 0;
  max-width: 1024px;
  margin-left: ${({ minimized, otherMinimized }) => (!minimized && otherMinimized ? 'auto' : '0')};
  margin-right: ${({ minimized, otherMinimized }) =>
    !minimized && otherMinimized ? 'auto' : '10px'};
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

  @media (max-width: 768px) {
    flex: ${({ minimized }) => (minimized ? '0 0 0' : '1 1 0')};
    max-width: none;
    margin: 0;
  }
`
