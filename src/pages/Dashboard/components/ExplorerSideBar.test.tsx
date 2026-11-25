import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { FiEye, FiStar, FiTrash2 } from 'react-icons/fi'
import { ExplorerSideBar } from './ExplorerSideBar'

const systemTags = [
  { name: 'all', icon: FiEye, system: true, position: 'top' },
  { name: 'favorite', icon: FiStar, system: true, position: 'top' },
  { name: 'trash', icon: FiTrash2, system: true, position: 'bottom' },
]

const renderExplorer = (props: Partial<React.ComponentProps<typeof ExplorerSideBar>> = {}) =>
  render(
    <ExplorerSideBar
      systemTags={systemTags}
      customTags={[]}
      unpinnedTags={[]}
      onToggleTagPin={jest.fn()}
      selectedTag="favorite"
      setSelectedTag={jest.fn()}
      explorerExpanded
      setExplorerExpanded={jest.fn()}
      setMinimized={jest.fn()}
      selectedNoteIds={['note-1']}
      onRenameTag={jest.fn(async () => {})}
      onDeleteTag={jest.fn(async () => {})}
      onAddTagToSelected={jest.fn(async () => {})}
      onRemoveTagFromSelected={jest.fn(async () => {})}
      trashCount={1}
      selectedTrashCount={1}
      onDeleteSelectedNotes={jest.fn(async () => {})}
      onRestoreSelectedTrash={jest.fn(async () => {})}
      onRestoreAllTrash={jest.fn(async () => {})}
      onEmptyTrash={jest.fn(async () => {})}
      {...props}
    />
  )

describe('ExplorerSideBar fixed-tag menus', () => {
  it('offers selected-note actions without rename or delete for regular system tags', () => {
    renderExplorer()

    fireEvent.click(screen.getByRole('button', { name: 'Manage favorite tag' }))

    expect(screen.getByRole('button', { name: 'Add Selected' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Remove Selected' })).toBeTruthy()
    expect(screen.queryByRole('button', { name: 'Rename' })).toBeNull()
    expect(screen.queryByRole('button', { name: 'Delete' })).toBeNull()
  })

  it('offers trash actions and closes its popup after an outside click', () => {
    renderExplorer()

    fireEvent.click(screen.getByRole('button', { name: 'Manage trash tag' }))

    expect(screen.getByRole('button', { name: 'Delete Selected' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Restore Selected' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Restore All' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Empty Bin' })).toBeTruthy()

    fireEvent.mouseDown(document.body)

    expect(screen.queryByRole('button', { name: 'Delete Selected' })).toBeNull()
    expect(screen.queryByRole('button', { name: 'Restore Selected' })).toBeNull()
    expect(screen.queryByRole('button', { name: 'Restore All' })).toBeNull()
    expect(screen.queryByRole('button', { name: 'Empty Bin' })).toBeNull()
  })

  it('moves unpinned tags below Trash and lets tags be pinned or unpinned', () => {
    const onToggleTagPin = jest.fn()

    renderExplorer({
      customTags: ['pinned', 'unpinned'],
      unpinnedTags: ['unpinned'],
      onToggleTagPin,
    })

    const pinnedTag = screen.getByTitle('Pinned')
    const trashTag = screen.getByTitle('trash')
    const divider = screen.getByRole('separator')
    const unpinnedTag = screen.getByTitle('Unpinned')

    expect(pinnedTag.compareDocumentPosition(trashTag) & Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(
      0
    )
    expect(trashTag.compareDocumentPosition(divider) & Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0)
    expect(
      divider.compareDocumentPosition(unpinnedTag) & Node.DOCUMENT_POSITION_FOLLOWING
    ).not.toBe(0)

    fireEvent.click(screen.getByRole('button', { name: 'Manage unpinned tag' }))
    fireEvent.click(screen.getByRole('button', { name: 'Pin' }))
    fireEvent.click(screen.getByRole('button', { name: 'Manage pinned tag' }))
    fireEvent.click(screen.getByRole('button', { name: 'Unpin' }))

    expect(onToggleTagPin).toHaveBeenNthCalledWith(1, 'unpinned')
    expect(onToggleTagPin).toHaveBeenNthCalledWith(2, 'pinned')
  })

  it('collapses the notes menu after an outside click on a small screen', () => {
    const originalWidth = window.innerWidth
    const setExplorerExpanded = jest.fn()
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 390 })

    try {
      renderExplorer({ explorerExpanded: true, setExplorerExpanded })
      fireEvent.click(document.body)

      expect(setExplorerExpanded).toHaveBeenCalledWith(false)
    } finally {
      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        value: originalWidth,
      })
    }
  })
})
