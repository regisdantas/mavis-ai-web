import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Card } from './Card'

jest.mock('react-markdown', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => children,
}))
jest.mock('rehype-raw', () => ({ __esModule: true, default: jest.fn() }))
jest.mock('remark-gfm', () => ({ __esModule: true, default: jest.fn() }))
jest.mock('remark-frontmatter', () => ({ __esModule: true, default: jest.fn() }))
jest.mock('remark-emoji', () => ({ __esModule: true, default: jest.fn() }))
jest.mock('remark-math', () => ({ __esModule: true, default: jest.fn() }))
jest.mock('rehype-katex', () => ({ __esModule: true, default: jest.fn() }))
jest.mock('remark-toc', () => ({ __esModule: true, default: jest.fn() }))
jest.mock('remark-breaks', () => ({ __esModule: true, default: jest.fn() }))

jest.mock('../../../../context/AuthContext', () => ({
  UserAuth: () => ({ user: null }),
}))

jest.mock('../../hooks/useLocationData', () => ({
  useLocationData: () => ({
    temperature: 20,
    weather: 'Sunny',
    location: { city: 'London', country: 'UK' },
  }),
}))

jest.mock('../../hooks/useTextareaCaret', () => ({
  useTextareaCaret: () => ({
    setCursorPosition: jest.fn(),
    findBestCursorPosition: () => 0,
  }),
}))

jest.mock('../../hooks/useNoteAI', () => ({
  useNoteAI: () => ({ aiLoading: false, handleAI: jest.fn() }),
}))

jest.mock('../../hooks/useNoteTags', () => ({
  useNoteTags: ({
    tags,
    onTagsChange,
  }: {
    tags: string[]
    onTagsChange: (tags: string[]) => void
  }) => ({
    showTagPicker: false,
    creatingTag: false,
    newTagName: '',
    setShowTagPicker: jest.fn(),
    setCreatingTag: jest.fn(),
    setNewTagName: jest.fn(),
    hasTag: (tag: string) => tags.includes(tag),
    toggleTag: (tag: string) => onTagsChange([...tags, tag]),
    createTag: jest.fn(),
  }),
}))

jest.mock('../../hooks/useCardClickOutside', () => ({
  useCardClickOutside: jest.fn(),
}))

const renderCard = (notesLocked: boolean, onChangeContent = jest.fn(async () => {})) => {
  const content = JSON.stringify({
    title: 'Test note',
    text: 'Original text',
    tags: [],
    color: '#fff',
    locked: true,
  })

  const result = render(
    <Card
      id="note-1"
      number={1}
      date="2026-11-25"
      content={content}
      notesLocked={notesLocked}
      onDeleteCard={jest.fn()}
      onChangeContent={onChangeContent}
      onChangeDate={jest.fn()}
      tags={[]}
      selected={false}
      onToggleSelection={jest.fn()}
      templateOptions={[]}
    />
  )

  return { ...result, onChangeContent }
}

describe('Card global edit lock and draft autosave', () => {
  it('keeps the note header sticky while scrolling its content', () => {
    const { container } = renderCard(true)
    const header = container.querySelector('header')

    expect(header).not.toBeNull()
    expect(window.getComputedStyle(header as HTMLElement).position).toBe('sticky')
    expect(window.getComputedStyle(header as HTMLElement).top).toBe('0px')
  })

  it('allows expanding and collapsing while notes are locked', () => {
    const content = JSON.stringify({
      title: 'Test note',
      text: 'Original text',
      tags: [],
      color: '#fff',
      collapsed: false,
    })
    const onChangeContent = jest.fn(async (_id: string, _content: string) => {})
    const props = {
      id: 'note-1',
      number: 1,
      date: '2026-11-25',
      content,
      notesLocked: true,
      onDeleteCard: jest.fn(),
      onChangeContent,
      onChangeDate: jest.fn(),
      tags: [],
      selected: false,
      onToggleSelection: jest.fn(),
      templateOptions: [],
    }
    const { rerender } = render(<Card {...props} />)

    fireEvent.click(screen.getByTitle('Collapse note'))

    expect(onChangeContent).toHaveBeenLastCalledWith(
      'note-1',
      expect.stringContaining('"collapsed":true')
    )

    rerender(
      <Card
        {...props}
        content={JSON.stringify({
          ...JSON.parse(content),
          collapsed: true,
        })}
      />
    )

    fireEvent.click(screen.getByTitle('Expand note'))

    expect(onChangeContent).toHaveBeenLastCalledWith(
      'note-1',
      expect.stringContaining('"collapsed":false')
    )
  })

  it('uses the dashboard lock instead of legacy per-note lock metadata', () => {
    const { container, rerender } = renderCard(false)

    fireEvent.click(screen.getByText('Original text'))
    expect(container.querySelector('textarea')).not.toBeNull()

    rerender(
      <Card
        id="note-1"
        number={1}
        date="2026-11-25"
        content={JSON.stringify({
          title: 'Test note',
          text: 'Original text',
          tags: [],
          color: '#fff',
          locked: true,
        })}
        notesLocked
        onDeleteCard={jest.fn()}
        onChangeContent={jest.fn(async () => {})}
        onChangeDate={jest.fn()}
        tags={[]}
        selected={false}
        onToggleSelection={jest.fn()}
        templateOptions={[]}
      />
    )

    expect(screen.queryByTitle('Lock note')).toBeNull()
    expect(screen.queryByTitle('Unlock note')).toBeNull()
  })

  it('saves edited text when the page becomes hidden', async () => {
    const originalVisibilityState = document.visibilityState
    const onChangeContent = jest.fn(async () => {})
    const { container } = renderCard(false, onChangeContent)

    try {
      fireEvent.click(screen.getByText('Original text'))
      const editor = container.querySelector('textarea')

      expect(editor).not.toBeNull()
      fireEvent.change(editor as HTMLTextAreaElement, { target: { value: 'Saved draft' } })
      Object.defineProperty(document, 'visibilityState', {
        configurable: true,
        value: 'hidden',
      })
      fireEvent(document, new Event('visibilitychange'))

      await waitFor(() => {
        expect(onChangeContent).toHaveBeenCalledWith(
          'note-1',
          expect.stringContaining('"text":"Saved draft"')
        )
      })
    } finally {
      Object.defineProperty(document, 'visibilityState', {
        configurable: true,
        value: originalVisibilityState,
      })
    }
  })
})
