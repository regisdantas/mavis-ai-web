import React from 'react'
import uuid from 'react-uuid'

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  QueryDocumentSnapshot,
  setDoc,
  where,
} from 'firebase/firestore'

import { database } from '../../../services/firebase'
import { ChatSession } from '../types/chat'

const getSessionsCollection = (userId: string) => {
  const userDocRef = doc(database, 'users', userId)

  return collection(userDocRef, 'chatSessions')
}

const findSessionDocuments = async (
  userId: string,
  sessionId: string
): Promise<QueryDocumentSnapshot[]> => {
  const sessionsRef = getSessionsCollection(userId)

  const snapshot = await getDocs(query(sessionsRef, where('id', '==', sessionId)))

  return snapshot.docs
}

const sortSessions = (sessions: ChatSession[]) => {
  return [...sessions].sort((a, b) => {
    if (a.updatedAt > b.updatedAt) return -1
    if (a.updatedAt < b.updatedAt) return 1
    return 0
  })
}

export function useChatSessions(userId: string) {
  const [sessions, setSessions] = React.useState<ChatSession[]>([])

  const fetchSessions = React.useCallback(async () => {
    if (!userId) {
      return
    }

    const snapshot = await getDocs(getSessionsCollection(userId))

    const loadedSessions = snapshot.docs.map((document) => document.data() as ChatSession)

    setSessions(sortSessions(loadedSessions))
  }, [userId])

  const createSession = React.useCallback(
    async (model: string): Promise<ChatSession | null> => {
      if (!userId) {
        return null
      }

      const session: ChatSession = {
        id: uuid(),
        title: 'New Chat',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        model,
        selectedPromptIds: [],
        messages: [],
      }

      setSessions((current) => [session, ...current])

      await addDoc(getSessionsCollection(userId), session)

      return session
    },
    [userId]
  )

  const updateSession = React.useCallback(
    async (session: ChatSession) => {
      if (!userId) {
        return
      }

      setSessions((current) => current.map((s) => (s.id === session.id ? session : s)))

      const documents = await findSessionDocuments(userId, session.id)

      await Promise.all(
        documents.map((document) =>
          setDoc(doc(database, `users/${userId}/chatSessions/${document.id}`), session)
        )
      )
    },
    [userId]
  )

  const deleteSession = React.useCallback(
    async (sessionId: string) => {
      if (!userId) {
        return
      }

      setSessions((current) => current.filter((session) => session.id !== sessionId))

      const documents = await findSessionDocuments(userId, sessionId)

      await Promise.all(
        documents.map((document) =>
          deleteDoc(doc(database, `users/${userId}/chatSessions/${document.id}`))
        )
      )
    },
    [userId]
  )

  return {
    sessions,
    setSessions,
    fetchSessions,
    createSession,
    updateSession,
    deleteSession,
  }
}
