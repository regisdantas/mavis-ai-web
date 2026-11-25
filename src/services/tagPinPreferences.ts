import { doc, getDoc, setDoc } from 'firebase/firestore'
import { database } from './firebase'

export async function getTagPinPreferences(uid: string): Promise<string[] | null> {
  const snapshot = await getDoc(doc(database, 'users', uid, 'settings', 'tagPins'))

  if (!snapshot.exists()) {
    return null
  }

  const tags: unknown = snapshot.data().unpinnedTags

  if (!Array.isArray(tags) || !tags.every((tag): tag is string => typeof tag === 'string')) {
    throw new Error('Stored unpinned tag preferences must be an array of strings.')
  }

  return Array.from(new Set(tags))
}

export async function saveTagPinPreferences(uid: string, unpinnedTags: string[]): Promise<void> {
  await setDoc(doc(database, 'users', uid, 'settings', 'tagPins'), {
    unpinnedTags: Array.from(new Set(unpinnedTags)),
  })
}
