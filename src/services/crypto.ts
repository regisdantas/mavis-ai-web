const encoder = new TextEncoder()
const decoder = new TextDecoder()

function toBase64(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer)
  let binary = ''

  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i])
  }

  return btoa(binary)
}

function fromBase64(base64: string) {
  return Uint8Array.from(atob(base64), (c) => c.charCodeAt(0))
}

async function deriveKey(uid: string, salt: Uint8Array) {
  const material = await crypto.subtle.importKey('raw', encoder.encode(uid), 'PBKDF2', false, [
    'deriveKey',
  ])

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 200000,
      hash: 'SHA-256',
    },
    material,
    {
      name: 'AES-GCM',
      length: 256,
    },
    false,
    ['encrypt', 'decrypt']
  )
}

export async function encryptText(text: string, uid: string) {
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const salt = crypto.getRandomValues(new Uint8Array(16))

  const key = await deriveKey(uid, salt)

  const encrypted = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv,
    },
    key,
    encoder.encode(text)
  )

  return {
    encrypted: toBase64(encrypted),
    iv: toBase64(iv),
    salt: toBase64(salt),
  }
}

export async function decryptText(encrypted: string, iv: string, salt: string, uid: string) {
  const key = await deriveKey(uid, fromBase64(salt))

  const decrypted = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: fromBase64(iv),
    },
    key,
    fromBase64(encrypted)
  )

  return decoder.decode(decrypted)
}
