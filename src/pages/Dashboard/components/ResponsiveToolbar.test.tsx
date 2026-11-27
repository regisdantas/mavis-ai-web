import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ChatToolbar } from './ChatToolbar'
import { NotesToolbar } from './NotesToolbar'

const createNoteAssistant = () => ({
  aiLoading: false,
  assistantOpen: false,
  instruction: '',
  setInstruction: jest.fn(),
  apiKeyInput: '',
  setApiKeyInput: jest.fn(),
  requiresApiKey: false,
  error: '',
  openAssistant: jest.fn(async () => {}),
  closeAssistant: jest.fn(),
  clearInstruction: jest.fn(),
  submitInstruction: jest.fn(async () => {}),
})

const createNotesToolbarProps = (
  overrides: Partial<React.ComponentProps<typeof NotesToolbar>> = {}
): React.ComponentProps<typeof NotesToolbar> => ({
  selectedTag: 'all',
  selectedDate: '2026-01-01',
  searchContent: '',
  fuzzySearchEnabled: false,
  onSearchChange: jest.fn(),
  onToggleFuzzySearch: jest.fn(),
  onDateChange: jest.fn(),
  onAddNote: jest.fn(),
  onCopyAllNotes: jest.fn(),
  onSelectAll: jest.fn(),
  onClearAll: jest.fn(),
  onArchiveSelected: jest.fn(),
  onDeleteSelected: jest.fn(),
  onUndo: jest.fn(),
  onRedo: jest.fn(),
  canUndo: false,
  canRedo: false,
  noteAssistant: createNoteAssistant(),
  selectedCount: 0,
  explorerExpanded: false,
  setExplorerExpanded: jest.fn(),
  panelWidth: 320,
  toolbarOffset: 0,
  setMinimized: jest.fn(),
  mobileActive: true,
  notesLocked: true,
  onToggleNotesLock: jest.fn(),
  ...overrides,
})

describe('responsive dashboard toolbar menus', () => {
  it('opens the notes menu from the toolbar beside the logo', () => {
    const originalWidth = window.innerWidth
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 390 })
    const setExplorerExpanded = jest.fn()

    try {
      render(
        <NotesToolbar
          {...createNotesToolbarProps({
            notesLocked: true,
            setExplorerExpanded,
          })}
        />
      )

      const menuButton = screen.getByLabelText('Expand notes menu')
      fireEvent.click(menuButton)

      expect(setExplorerExpanded).toHaveBeenCalledWith(true)
    } finally {
      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        value: originalWidth,
      })
    }
  })

  it('opens the sessions menu from the toolbar beside the logo', () => {
    const originalWidth = window.innerWidth
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 390 })
    const setMenuExpanded = jest.fn()

    try {
      render(
        <ChatToolbar
          onClearAll={jest.fn()}
          panelWidth={320}
          toolbarOffset={0}
          minimized={false}
          setMinimized={jest.fn()}
          menuExpanded={false}
          setMenuExpanded={setMenuExpanded}
          mobileActive
        />
      )

      const menuButton = screen.getByLabelText('Expand sessions menu')
      fireEvent.click(menuButton)

      expect(setMenuExpanded).toHaveBeenCalledWith(true)
      expect(screen.queryByLabelText('Unlock note editing')).toBeNull()
    } finally {
      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        value: originalWidth,
      })
    }
  })

  it('places the chat minimize control before its title without the AI icon', () => {
    const originalWidth = window.innerWidth
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1440 })

    try {
      render(
        <ChatToolbar
          onClearAll={jest.fn()}
          panelWidth={320}
          toolbarOffset={0}
          minimized={false}
          setMinimized={jest.fn()}
          menuExpanded={false}
          setMenuExpanded={jest.fn()}
        />
      )

      const minimizeButton = screen.getByTitle('Minimize chat panel')
      const chatTitle = screen.getByText('Chat')

      expect(
        minimizeButton.compareDocumentPosition(chatTitle) & Node.DOCUMENT_POSITION_FOLLOWING
      ).not.toBe(0)
      expect(chatTitle.querySelector('svg')).toBeNull()
    } finally {
      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        value: originalWidth,
      })
    }
  })

  it('uses the chat title font size for the notes explorer title', () => {
    const originalWidth = window.innerWidth
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1440 })

    try {
      render(
        <>
          <NotesToolbar {...createNotesToolbarProps()} />
          <ChatToolbar
            onClearAll={jest.fn()}
            panelWidth={320}
            toolbarOffset={0}
            minimized={false}
            setMinimized={jest.fn()}
            menuExpanded={false}
            setMenuExpanded={jest.fn()}
          />
        </>
      )

      expect(window.getComputedStyle(screen.getByText('All')).fontSize).toBe(
        window.getComputedStyle(screen.getByText('Chat')).fontSize
      )
    } finally {
      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        value: originalWidth,
      })
    }
  })

  it('shows lock and selection state with purple icons but no pressed fill', () => {
    render(<NotesToolbar {...createNotesToolbarProps({ selectedCount: 2, notesLocked: true })} />)

    const lockButton = screen.getByLabelText('Unlock note editing')
    const selectionButton = screen.getByTitle('Deselect all notes')

    expect(lockButton.getAttribute('aria-pressed')).toBe('true')
    expect(selectionButton.getAttribute('aria-pressed')).toBe('true')
    expect(window.getComputedStyle(lockButton).backgroundColor).toBe('transparent')
    expect(window.getComputedStyle(selectionButton).backgroundColor).toBe('transparent')
    expect(window.getComputedStyle(lockButton).color).toBe('rgb(91, 75, 216)')
  })

  it('keeps Add note enabled while note editing is locked', () => {
    const onAddNote = jest.fn()

    render(<NotesToolbar {...createNotesToolbarProps({ onAddNote, notesLocked: true })} />)

    const addButton = screen.getByTitle('Add note')
    fireEvent.click(addButton)

    expect(onAddNote).toHaveBeenCalledTimes(1)
    expect(window.getComputedStyle(addButton).color).toBe('rgb(91, 75, 216)')
  })

  it('renders disabled note-toolbar actions in gray', () => {
    render(<NotesToolbar {...createNotesToolbarProps({ notesLocked: true })} />)

    const disabledActions = [
      'Clear search',
      'AI assistant',
      'Redo last note change',
      'Undo last note change',
      'Archive selected notes',
      'Delete selected notes',
    ]

    disabledActions.forEach((name) => {
      const button = screen.getByRole('button', { name }) as HTMLButtonElement
      expect(button.disabled).toBe(true)
      expect(window.getComputedStyle(button).color).toBe('rgb(156, 163, 175)')
    })
  })

  it('runs global note actions and distinguishes undo from redo by color', () => {
    const onArchiveSelected = jest.fn()
    const onDeleteSelected = jest.fn()
    const onUndo = jest.fn()
    const onRedo = jest.fn()
    const noteAssistant = createNoteAssistant()

    const { getByRole } = render(
      <NotesToolbar
        {...createNotesToolbarProps({
          onArchiveSelected,
          onDeleteSelected,
          onUndo,
          onRedo,
          canUndo: true,
          canRedo: true,
          noteAssistant,
          selectedCount: 2,
          notesLocked: false,
        })}
      />
    )

    const toolbar = getByRole('toolbar')
    const toolbarButtonLabels = Array.from(toolbar.querySelectorAll('button')).map((button) =>
      button.getAttribute('aria-label')
    )

    fireEvent.click(screen.getByRole('button', { name: 'AI assistant' }))
    fireEvent.click(screen.getByRole('button', { name: 'Redo last note change' }))
    fireEvent.click(screen.getByRole('button', { name: 'Undo last note change' }))
    fireEvent.click(screen.getByRole('button', { name: 'Archive selected notes' }))
    fireEvent.click(screen.getByRole('button', { name: 'Delete selected notes' }))

    expect(noteAssistant.openAssistant).toHaveBeenCalledTimes(1)
    expect(onRedo).toHaveBeenCalledTimes(1)
    expect(onUndo).toHaveBeenCalledTimes(1)
    expect(onArchiveSelected).toHaveBeenCalledTimes(1)
    expect(onDeleteSelected).toHaveBeenCalledTimes(1)
    expect(window.getComputedStyle(screen.getByRole('button', { name: 'Open search' })).color).toBe(
      'rgb(91, 75, 216)'
    )
    expect(
      window.getComputedStyle(screen.getByRole('button', { name: 'AI assistant' })).color
    ).toBe('rgb(91, 75, 216)')
    expect(
      window.getComputedStyle(screen.getByRole('button', { name: 'Archive selected notes' })).color
    ).toBe('rgb(91, 75, 216)')
    expect(
      window.getComputedStyle(screen.getByRole('button', { name: 'Delete selected notes' })).color
    ).toBe('rgb(220, 38, 38)')
    expect(
      window.getComputedStyle(
        screen.getByRole('button', { name: 'Copy selected or visible notes' })
      ).color
    ).toBe('rgb(113, 109, 134)')
    expect(
      window.getComputedStyle(screen.getByRole('button', { name: 'Deselect all notes' })).color
    ).toBe('rgb(76, 59, 200)')
    expect(
      window.getComputedStyle(screen.getByRole('button', { name: 'Minimize notes panel' })).color
    ).toBe('rgb(156, 163, 175)')
    expect(toolbarButtonLabels[toolbarButtonLabels.length - 1]).toBe('Delete selected notes')
    expect(window.getComputedStyle(toolbar).overflowY).toBe('hidden')
    expect(
      window.getComputedStyle(screen.getByRole('button', { name: 'Undo last note change' })).color
    ).toBe('rgb(220, 38, 38)')
    expect(
      window.getComputedStyle(screen.getByRole('button', { name: 'Redo last note change' })).color
    ).toBe('rgb(113, 133, 232)')
  })

  it.each([390, 1440])(
    'expands search and closes it after search or an outside tap at %i pixels',
    (viewportWidth) => {
      const originalWidth = window.innerWidth
      Object.defineProperty(window, 'innerWidth', { configurable: true, value: viewportWidth })

      try {
        const { container } = render(
          <NotesToolbar {...createNotesToolbarProps({ notesLocked: true })} />
        )
        const searchButton = container.querySelector<HTMLButtonElement>(
          '[aria-label="Open search"]'
        )

        expect(searchButton).not.toBeNull()
        fireEvent.click(searchButton!)
        expect(searchButton?.getAttribute('aria-expanded')).toBe('true')

        fireEvent.keyDown(screen.getByPlaceholderText('Search'), { key: 'Enter' })
        expect(searchButton?.getAttribute('aria-expanded')).toBe('false')

        fireEvent.click(searchButton!)
        fireEvent.pointerDown(document.body)
        expect(searchButton?.getAttribute('aria-expanded')).toBe('false')
      } finally {
        Object.defineProperty(window, 'innerWidth', {
          configurable: true,
          value: originalWidth,
        })
      }
    }
  )

  it('places the fuzzy search toggle before clear and reports its current state', () => {
    const onToggleFuzzySearch = jest.fn()

    render(
      <NotesToolbar
        {...createNotesToolbarProps({
          searchContent: 'hello',
          fuzzySearchEnabled: true,
          onToggleFuzzySearch,
        })}
      />
    )

    const fuzzyButton = screen.getByRole('button', { name: 'Disable fuzzy search' })
    const clearButton = screen.getByRole('button', { name: 'Clear search' })

    expect(fuzzyButton.getAttribute('aria-pressed')).toBe('true')
    expect(
      fuzzyButton.compareDocumentPosition(clearButton) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBe(Node.DOCUMENT_POSITION_FOLLOWING)

    fireEvent.click(fuzzyButton)
    expect(onToggleFuzzySearch).toHaveBeenCalledTimes(1)
  })
})
