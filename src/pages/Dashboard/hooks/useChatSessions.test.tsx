const mockGetDocs = jest.fn()
const mockSetDoc = jest.fn()

jest.mock('../../../services/firebase', () => ({
  database: {},
}))

jest.mock('firebase/firestore', () => ({
  addDoc: jest.fn(),
  collection: (...args: unknown[]) => args,
  deleteDoc: jest.fn(),
  doc: (...args: unknown[]) => args,
  getDocs: (...args: unknown[]) => mockGetDocs(...args),
  query: (...args: unknown[]) => args,
  setDoc: (...args: unknown[]) => mockSetDoc(...args),
  where: (...args: unknown[]) => args,
}))

import React from 'react'
import { act, render } from '@testing-library/react'
import { ChatSession } from '../types/chat'
import { useChatSessions } from './useChatSessions'

let current: ReturnType<typeof useChatSessions> | undefined

const SessionsHarness: React.FC = () => {
  current = useChatSessions('user-1')
  return null
}

const getCurrent = () => {
  if (!current) {
    throw new Error('The chat sessions hook is not mounted.')
  }

  return current
}

const createSession = (id: string, updatedAt: string): ChatSession => ({
  id,
  title: id,
  createdAt: updatedAt,
  updatedAt,
  model: 'gpt-6-luna',
  selectedPromptIds: [],
  messages: [],
  pinned: false,
})

describe('useChatSessions pinning', () => {
  beforeEach(() => {
    current = undefined
    jest.clearAllMocks()
    mockGetDocs.mockResolvedValue({ docs: [] })
    mockSetDoc.mockResolvedValue(undefined)
  })

  it('persists pin state to Firestore and keeps pinned sessions first', async () => {
    const recentSession = createSession('recent', '2026-11-26T12:00:00.000Z')
    const olderSession = createSession('older', '2026-11-25T12:00:00.000Z')
    mockGetDocs
      .mockResolvedValueOnce({
        docs: [
          { id: 'recent-document', data: () => recentSession },
          { id: 'older-document', data: () => olderSession },
        ],
      })
      .mockResolvedValueOnce({ docs: [{ id: 'older-document' }] })

    render(<SessionsHarness />)

    await act(async () => {
      await getCurrent().fetchSessions()
    })

    expect(getCurrent().sessions.map((session) => session.id)).toEqual(['recent', 'older'])

    await act(async () => {
      await getCurrent().updateSession({ ...olderSession, pinned: true })
    })

    expect(mockSetDoc).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ id: 'older', pinned: true })
    )
    expect(getCurrent().sessions.map((session) => session.id)).toEqual(['older', 'recent'])
  })
})
