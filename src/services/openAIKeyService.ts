import { doc, setDoc, getDoc } from 'firebase/firestore'
import { database } from './firebase'
import { encryptText, decryptText } from './crypto'

export async function saveOpenAIKey(uid: string, apiKey: string) {
  const encrypted = await encryptText(apiKey, uid)

  await setDoc(doc(database, 'users', uid, 'settings', 'openai'), {
    encryptedApiKey: encrypted.encrypted,
    iv: encrypted.iv,
    salt: encrypted.salt,
  })
}

export async function getOpenAIKey(uid: string) {
  const snapshot = await getDoc(doc(database, 'users', uid, 'settings', 'openai'))

  if (!snapshot.exists()) {
    return ''
  }

  const data = snapshot.data()

  return decryptText(data.encryptedApiKey, data.iv, data.salt, uid)
}
