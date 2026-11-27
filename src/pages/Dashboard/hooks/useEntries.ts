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
  emoji?: string
  date: string
  createdAt: string
}

interface EntryHistoryAction {
  ids: string[]
  before: IEntry[]
  after: IEntry[]
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
  const entriesRef = React.useRef(entries)
  const undoStackRef = React.useRef<EntryHistoryAction[]>([])
  const redoStackRef = React.useRef<EntryHistoryAction[]>([])
  const [, setHistoryRevision] = React.useState(0)
  const writeQueueRef = React.useRef<Promise<void>>(Promise.resolve())
  const previousUserIdRef = React.useRef(userId)

  React.useEffect(() => {
    if (previousUserIdRef.current === userId) {
      return
    }

    previousUserIdRef.current = userId
    entriesRef.current = []
    setEntries([])
    undoStackRef.current = []
    redoStackRef.current = []
    setHistoryRevision((revision) => revision + 1)
  }, [userId])

  const persistEntryChanges = React.useCallback(
    (ids: string[], updatedEntries: IEntry[]) => {
      if (!userId) {
        return Promise.resolve()
      }

      const task = writeQueueRef.current.then(async () => {
        const updatedEntriesById = new Map(updatedEntries.map((entry) => [entry.id, entry]))

        await Promise.all(
          ids.map(async (id) => {
            const updatedEntry = updatedEntriesById.get(id)
            const documents = await findEntryDocuments(userId, id)

            if (!updatedEntry) {
              await Promise.all(
                documents.map((document) =>
                  deleteDoc(doc(database, `users/${userId}/entries/${document.id}`))
                )
              )
              return
            }

            if (!documents.length) {
              await addDoc(getEntriesCollection(userId), updatedEntry)
              return
            }

            await Promise.all(
              documents.map((document) =>
                setDoc(doc(database, `users/${userId}/entries/${document.id}`), updatedEntry)
              )
            )
          })
        )
      })

      writeQueueRef.current = task.catch(() => {})
      return task
    },
    [userId]
  )

  const applyEntries = React.useCallback(
    async (updatedEntries: IEntry[], deletedIds: string[] = [], recordHistory = true) => {
      if (!userId) {
        return
      }

      const ids = Array.from(new Set([...updatedEntries.map((entry) => entry.id), ...deletedIds]))

      if (!ids.length) {
        return
      }

      const affectedIds = new Set(ids)
      const before = entriesRef.current.filter((entry) => affectedIds.has(entry.id))
      const updatedEntriesById = new Map(
        updatedEntries
          .filter((entry) => affectedIds.has(entry.id))
          .map((entry) => [entry.id, entry])
      )
      const after = Array.from(updatedEntriesById.values())

      const areEqual =
        before.length === after.length &&
        before.every((entry) => {
          const nextEntry = updatedEntriesById.get(entry.id)

          return (
            nextEntry !== undefined &&
            entry.uid === nextEntry.uid &&
            entry.content === nextEntry.content &&
            entry.emoji === nextEntry.emoji &&
            entry.date === nextEntry.date &&
            entry.createdAt === nextEntry.createdAt
          )
        })

      if (areEqual) {
        return
      }

      const nextEntries = sortEntries([
        ...entriesRef.current.filter((entry) => !affectedIds.has(entry.id)),
        ...after,
      ])
      entriesRef.current = nextEntries
      setEntries(nextEntries)

      if (recordHistory) {
        undoStackRef.current.push({ ids, before, after })
        redoStackRef.current = []
        setHistoryRevision((revision) => revision + 1)
      }

      await persistEntryChanges(ids, after)
    },
    [persistEntryChanges, userId]
  )

  const fetchEntries = React.useCallback(async () => {
    if (!userId) {
      return
    }

    const entriesCollectionRef = getEntriesCollection(userId)

    const snapshot = await getDocs(entriesCollectionRef)

    const fetchedEntries: IEntry[] = snapshot.docs.map((document) => {
      const entry = document.data() as IEntry

      return {
        ...entry,
        createdAt: entry.createdAt || entry.date,
      }
    })

    const sortedEntries = sortEntries(fetchedEntries)
    entriesRef.current = sortedEntries
    setEntries(sortedEntries)
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

      await applyEntries([newEntry])

      return newEntry
    },
    [applyEntries, userId]
  )

  const updateEntry = React.useCallback(
    async (id: string, content: string) => {
      if (!userId) {
        return
      }

      const existingEntry = entriesRef.current.find((entry) => entry.id === id)

      if (!existingEntry) {
        return
      }

      await applyEntries([{ ...existingEntry, content }])
    },
    [applyEntries, userId]
  )

  const updateEntryEmoji = React.useCallback(
    async (id: string, emoji: string) => {
      if (!userId) {
        return
      }

      const existingEntry = entriesRef.current.find((entry) => entry.id === id)

      if (!existingEntry) {
        return
      }

      await applyEntries([{ ...existingEntry, emoji }])
    },
    [applyEntries, userId]
  )

  const replaceEntry = React.useCallback(
    async (entry: IEntry) => {
      if (!userId) {
        return
      }

      if (!entriesRef.current.some((currentEntry) => currentEntry.id === entry.id)) {
        return
      }

      await applyEntries([entry])
    },
    [applyEntries, userId]
  )

  const renameTag = React.useCallback(
    async (oldTag: string, newTag: string) => {
      const affectedEntries = entriesRef.current.filter((entry) => {
        try {
          const content = JSON.parse(entry.content)
          return (content.tags || []).includes(oldTag)
        } catch {
          return false
        }
      })

      const updatedEntries = affectedEntries.map((entry) => {
        const content = JSON.parse(entry.content)

        return {
          ...entry,
          content: JSON.stringify({
            ...content,
            tags: (content.tags || []).map((tag: string) => (tag === oldTag ? newTag : tag)),
          }),
        }
      })

      await applyEntries(updatedEntries)
    },
    [applyEntries]
  )

  const deleteTag = React.useCallback(
    async (tagToDelete: string) => {
      const affectedEntries = entriesRef.current.filter((entry) => {
        try {
          const content = JSON.parse(entry.content)
          return (content.tags || []).includes(tagToDelete)
        } catch {
          return false
        }
      })

      const updatedEntries = affectedEntries.map((entry) => {
        const content = JSON.parse(entry.content)

        return {
          ...entry,
          content: JSON.stringify({
            ...content,
            tags: (content.tags || []).filter((tag: string) => tag !== tagToDelete),
          }),
        }
      })

      await applyEntries(updatedEntries)
    },
    [applyEntries]
  )

  const addTagToEntries = React.useCallback(
    async (entryIds: string[], tag: string) => {
      const affectedEntries = entriesRef.current.filter((entry) => entryIds.includes(entry.id))

      const updatedEntries = affectedEntries.map((entry) => {
        const content = JSON.parse(entry.content)

        return {
          ...entry,
          content: JSON.stringify({
            ...content,
            tags: Array.from(new Set([...(content.tags || []), tag])),
          }),
        }
      })

      await applyEntries(updatedEntries)
    },
    [applyEntries]
  )

  const removeTagFromEntries = React.useCallback(
    async (entryIds: string[], tagToRemove: string) => {
      const affectedEntries = entriesRef.current.filter((entry) => entryIds.includes(entry.id))

      const updatedEntries = affectedEntries.map((entry) => {
        const content = JSON.parse(entry.content)

        return {
          ...entry,
          content: JSON.stringify({
            ...content,
            tags: (content.tags || []).filter((tag: string) => tag !== tagToRemove),
          }),
        }
      })

      await applyEntries(updatedEntries)
    },
    [applyEntries]
  )

  const updateEntryDate = React.useCallback(
    async (id: string, date: string) => {
      if (!userId) {
        return
      }

      const existingEntry = entriesRef.current.find((entry) => entry.id === id)

      if (!existingEntry) {
        return
      }

      await applyEntries([{ ...existingEntry, date }])
    },
    [applyEntries, userId]
  )

  const deleteEntry = React.useCallback(
    async (id: string) => {
      if (!userId) {
        return
      }

      await applyEntries([], [id])
    },
    [applyEntries, userId]
  )

  const undoLastChange = React.useCallback(async () => {
    const action = undoStackRef.current.pop()

    if (!action) {
      return
    }

    redoStackRef.current.push(action)
    setHistoryRevision((revision) => revision + 1)
    const entriesToDelete = action.ids.filter(
      (id) => !action.before.some((entry) => entry.id === id)
    )

    await applyEntries(action.before, entriesToDelete, false)
  }, [applyEntries])

  const redoLastChange = React.useCallback(async () => {
    const action = redoStackRef.current.pop()

    if (!action) {
      return
    }

    undoStackRef.current.push(action)
    setHistoryRevision((revision) => revision + 1)
    const entriesToDelete = action.ids.filter(
      (id) => !action.after.some((entry) => entry.id === id)
    )

    await applyEntries(action.after, entriesToDelete, false)
  }, [applyEntries])

  const canUndo = undoStackRef.current.length > 0
  const canRedo = redoStackRef.current.length > 0

  return {
    entries,
    fetchEntries,
    addEntry,
    updateEntry,
    updateEntryEmoji,
    replaceEntry,
    deleteEntry,
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
  }
}
