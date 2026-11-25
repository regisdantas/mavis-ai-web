import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ChatToolbar } from './ChatToolbar'
import { NotesToolbar } from './NotesToolbar'

describe('responsive dashboard toolbar menus', () => {
  it('opens the notes menu from the mobile toolbar', () => {
    const setExplorerExpanded = jest.fn()
    const onToggleNotesLock = jest.fn()

    render(
      <NotesToolbar
        selectedTag="all"
        selectedDate="2026-01-01"
        searchContent=""
        onSearchChange={jest.fn()}
        onDateChange={jest.fn()}
        onAddNote={jest.fn()}
        onCopyAllNotes={jest.fn()}
        onSelectAll={jest.fn()}
        onClearAll={jest.fn()}
        selectedCount={0}
        expanded={false}
        setExplorerExpanded={setExplorerExpanded}
        panelWidth={320}
        setMinimized={jest.fn()}
        mobileActive
        notesLocked
        onToggleNotesLock={onToggleNotesLock}
      />
    )

    fireEvent.click(screen.getByLabelText('Expand notes menu'))
    fireEvent.click(screen.getByLabelText('Unlock note editing'))

    expect(setExplorerExpanded).toHaveBeenCalledWith(true)
    expect(onToggleNotesLock).toHaveBeenCalledTimes(1)
  })

  it('opens the sessions menu from the mobile toolbar', () => {
    const setMenuExpanded = jest.fn()

    render(
      <ChatToolbar
        onClearAll={jest.fn()}
        expanded={false}
        panelWidth={320}
        minimized={false}
        setMinimized={jest.fn()}
        notesMinimized={false}
        menuExpanded={false}
        setMenuExpanded={setMenuExpanded}
        mobileActive
        notesLocked
        onToggleNotesLock={jest.fn()}
      />
    )

    fireEvent.click(screen.getByLabelText('Expand sessions menu'))

    expect(setMenuExpanded).toHaveBeenCalledWith(true)
  })

  it.each([390, 1440])(
    'expands search and closes it after search or an outside tap at %i pixels',
    (viewportWidth) => {
      const originalWidth = window.innerWidth
      Object.defineProperty(window, 'innerWidth', { configurable: true, value: viewportWidth })

      try {
        const { container } = render(
          <NotesToolbar
            selectedTag="all"
            selectedDate="2026-01-01"
            searchContent=""
            onSearchChange={jest.fn()}
            onDateChange={jest.fn()}
            onAddNote={jest.fn()}
            onCopyAllNotes={jest.fn()}
            onSelectAll={jest.fn()}
            onClearAll={jest.fn()}
            selectedCount={0}
            expanded={false}
            setExplorerExpanded={jest.fn()}
            panelWidth={320}
            setMinimized={jest.fn()}
            mobileActive
            notesLocked
            onToggleNotesLock={jest.fn()}
          />
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
})
