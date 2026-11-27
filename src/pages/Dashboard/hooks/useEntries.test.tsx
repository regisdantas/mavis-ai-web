const mockAddDoc = jest.fn()
const mockDeleteDoc = jest.fn()
const mockGetDocs = jest.fn()
const mockSetDoc = jest.fn()

jest.mock('../../../services/firebase', () => ({
  database: {},
}))

jest.mock('firebase/firestore', () => ({
  addDoc: (...args: unknown[]) => mockAddDoc(...args),
  collection: jest.fn((...args: unknown[]) => args),
  deleteDoc: (...args: unknown[]) => mockDeleteDoc(...args),
  doc: jest.fn((...args: unknown[]) => args),
  getDocs: (...args: unknown[]) => mockGetDocs(...args),
  query: jest.fn((...args: unknown[]) => args),
  setDoc: (...args: unknown[]) => mockSetDoc(...args),
  where: jest.fn((...args: unknown[]) => args),
}))

import React from 'react'
import { act, render } from '@testing-library/react'
import { IEntry, useEntries } from './useEntries'

let current: ReturnType<typeof useEntries> | undefined

const EntriesHarness: React.FC = () => {
  current = useEntries('user-1')
  return null
}

const getCurrent = () => {
  if (!current) {
    throw new Error('The entries hook is not mounted.')
  }

  return current
}

const getContent = (entryId: string): string | undefined =>
  getCurrent().entries.find((entry) => entry.id === entryId)?.content

describe('useEntries global note history', () => {
  beforeEach(() => {
    current = undefined
    jest.clearAllMocks()
    mockAddDoc.mockResolvedValue({})
    mockDeleteDoc.mockResolvedValue(undefined)
    mockGetDocs.mockResolvedValue({ docs: [] })
    mockSetDoc.mockResolvedValue(undefined)
  })

  it('undoes and redoes changes across different notes in reverse order', async () => {
    render(<EntriesHarness />)

    let firstEntry: IEntry | null = null
    let secondEntry: IEntry | null = null

    await act(async () => {
      firstEntry = await getCurrent().addEntry({ content: 'first note', date: '2026-11-25' })
      secondEntry = await getCurrent().addEntry({ content: 'second note', date: '2026-11-25' })
      await getCurrent().updateEntry(firstEntry!.id, 'first note updated')
      await getCurrent().updateEntry(secondEntry!.id, 'second note updated')
    })

    expect(getContent(firstEntry!.id)).toBe('first note updated')
    expect(getContent(secondEntry!.id)).toBe('second note updated')

    await act(async () => {
      await getCurrent().undoLastChange()
    })

    expect(getContent(secondEntry!.id)).toBe('second note')

    await act(async () => {
      await getCurrent().undoLastChange()
    })

    expect(getContent(firstEntry!.id)).toBe('first note')

    await act(async () => {
      await getCurrent().redoLastChange()
      await getCurrent().redoLastChange()
    })

    expect(getContent(firstEntry!.id)).toBe('first note updated')
    expect(getContent(secondEntry!.id)).toBe('second note updated')
    expect(getCurrent().canUndo).toBe(true)
    expect(getCurrent().canRedo).toBe(false)

    await act(async () => {
      await getCurrent().deleteEntry(firstEntry!.id)
    })

    expect(getContent(firstEntry!.id)).toBeUndefined()

    await act(async () => {
      await getCurrent().undoLastChange()
    })

    expect(getContent(firstEntry!.id)).toBe('first note updated')

    await act(async () => {
      await getCurrent().redoLastChange()
    })

    expect(getContent(firstEntry!.id)).toBeUndefined()
  })

  it('persists emoji changes and includes them in undo and redo history', async () => {
    render(<EntriesHarness />)

    let entry: IEntry | null = null

    await act(async () => {
      entry = await getCurrent().addEntry({ content: 'note', date: '2026-11-25' })
      await getCurrent().updateEntryEmoji(entry!.id, '🧠')
    })

    expect(getCurrent().entries.find((currentEntry) => currentEntry.id === entry!.id)?.emoji).toBe(
      '🧠'
    )
    expect(mockAddDoc.mock.calls[1][1]).toEqual(expect.objectContaining({ emoji: '🧠' }))

    await act(async () => {
      await getCurrent().undoLastChange()
    })

    expect(getCurrent().entries.find((currentEntry) => currentEntry.id === entry!.id)?.emoji).toBe(
      undefined
    )

    await act(async () => {
      await getCurrent().redoLastChange()
    })

    expect(getCurrent().entries.find((currentEntry) => currentEntry.id === entry!.id)?.emoji).toBe(
      '🧠'
    )
  })
})
