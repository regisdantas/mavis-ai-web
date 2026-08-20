// src/hooks/useEntries.ts

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

export interface IEntry {
  uid: string
  id: string
  content: string
  date: string
  createdAt: string
}

const sortEntries = (entries: IEntry[]) => {
  return [...entries].sort((a, b) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1

    if (a.createdAt > b.createdAt) return -1
    if (a.createdAt < b.createdAt) return 1

    return 0
  })
}

const getEntriesCollection = (userId: string) => {
  const userDocRef = doc(database, 'users', userId)

  return collection(userDocRef, 'entries')
}

const findEntryDocuments = async (
  userId: string,
  entryId: string
): Promise<QueryDocumentSnapshot[]> => {
  const entriesRef = getEntriesCollection(userId)

  const snapshot = await getDocs(query(entriesRef, where('id', '==', entryId)))

  return snapshot.docs
}

export function useEntries(userId: string) {
  const [entries, setEntries] = React.useState<IEntry[]>([])

  const fetchEntries = React.useCallback(async () => {
    if (!userId) {
      return
    }

    const entriesRef = getEntriesCollection(userId)

    const snapshot = await getDocs(entriesRef)

    const fetchedEntries: IEntry[] = snapshot.docs.map((document) => {
      const entry = document.data() as IEntry

      return {
        ...entry,
        createdAt: entry.createdAt || entry.date,
      }
    })

    setEntries(sortEntries(fetchedEntries))
  }, [userId])

  const addEntry = React.useCallback(
    async ({ content, date }: { content: string; date: string }): Promise<IEntry | null> => {
      if (!userId) {
        return null
      }

      const newEntry: IEntry = {
        uid: userId,
        id: uuid(),
        content,
        date,
        createdAt: new Date().toISOString(),
      }

      setEntries((current) => sortEntries([...current, newEntry]))

      await addDoc(getEntriesCollection(userId), newEntry)

      return newEntry
    },
    [userId]
  )

  const updateEntry = React.useCallback(
    async (id: string, content: string) => {
      if (!userId) {
        return
      }

      const existingEntry = entries.find((entry) => entry.id === id)

      if (!existingEntry) {
        return
      }

      const updatedEntry: IEntry = {
        ...existingEntry,
        content,
      }

      setEntries((current) =>
        sortEntries(current.map((entry) => (entry.id === id ? updatedEntry : entry)))
      )

      const documents = await findEntryDocuments(userId, id)

      await Promise.all(
        documents.map((document) =>
          setDoc(doc(database, `users/${userId}/entries/${document.id}`), updatedEntry)
        )
      )
    },
    [entries, userId]
  )

  const replaceEntry = React.useCallback(
    async (entry: IEntry) => {
      if (!userId) {
        return
      }

      setEntries((current) =>
        sortEntries(
          current.map((currentEntry) => (currentEntry.id === entry.id ? entry : currentEntry))
        )
      )

      const documents = await findEntryDocuments(userId, entry.id)

      await Promise.all(
        documents.map((document) =>
          setDoc(doc(database, `users/${userId}/entries/${document.id}`), entry)
        )
      )
    },
    [userId]
  )

  const updateEntryDate = React.useCallback(
    async (id: string, date: string) => {
      if (!userId) {
        return
      }

      const existingEntry = entries.find((entry) => entry.id === id)

      if (!existingEntry) {
        return
      }

      await replaceEntry({
        ...existingEntry,
        date,
      })
    },
    [entries, replaceEntry, userId]
  )

  const deleteEntry = React.useCallback(
    async (id: string) => {
      if (!userId) {
        return
      }

      setEntries((current) => current.filter((entry) => entry.id !== id))

      const documents = await findEntryDocuments(userId, id)

      await Promise.all(
        documents.map((document) =>
          deleteDoc(doc(database, `users/${userId}/entries/${document.id}`))
        )
      )
    },
    [userId]
  )

  return {
    entries,
    setEntries,
    fetchEntries,
    addEntry,
    updateEntry,
    replaceEntry,
    deleteEntry,
    updateEntryDate,
  }
}
