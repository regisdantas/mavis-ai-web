import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { useEntryFilter } from './useEntryFilter'
import { IEntry } from './useEntries'

const createEntry = (id: string, title: string, text: string): IEntry => ({
  uid: 'user-1',
  id,
  content: JSON.stringify({ title, text, tags: [] }),
  date: '2026-11-26',
  createdAt: '2026-11-26T00:00:00.000Z',
})

const SearchFilterHarness: React.FC<{ entries: IEntry[] }> = ({ entries }) => {
  const {
    searchContent,
    setSearchContent,
    fuzzySearchEnabled,
    setFuzzySearchEnabled,
    visibleEntries,
  } = useEntryFilter(entries)

  return (
    <>
      <input
        aria-label="Search notes"
        value={searchContent}
        onChange={(event) => setSearchContent(event.target.value)}
      />
      <button onClick={() => setFuzzySearchEnabled((enabled) => !enabled)}>
        {fuzzySearchEnabled ? 'Disable fuzzy search' : 'Enable fuzzy search'}
      </button>
      <div data-testid="visible-notes">{visibleEntries.map((entry) => entry.id).join(',')}</div>
    </>
  )
}

describe('useEntryFilter search', () => {
  const entries = [
    createEntry('note-1', 'Daily notes', 'Hello from the journal'),
    createEntry('note-2', 'Project plan', 'Review the launch'),
  ]

  it('finds matching note text regardless of case', () => {
    render(<SearchFilterHarness entries={entries} />)

    fireEvent.change(screen.getByRole('textbox', { name: 'Search notes' }), {
      target: { value: 'hELLo' },
    })

    expect(screen.getByTestId('visible-notes').textContent).toBe('note-1')
  })

  it('only enables typo-tolerant matching after fuzzy search is toggled on', () => {
    render(<SearchFilterHarness entries={entries} />)
    const searchInput = screen.getByRole('textbox', { name: 'Search notes' })

    fireEvent.change(searchInput, { target: { value: 'helo' } })
    expect(screen.getByTestId('visible-notes').textContent).toBe('')

    fireEvent.click(screen.getByRole('button', { name: 'Enable fuzzy search' }))
    expect(screen.getByTestId('visible-notes').textContent).toBe('note-1')
  })
})
