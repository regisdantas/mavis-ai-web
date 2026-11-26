const assert = require('node:assert/strict')
const test = require('node:test')

const { GeoPoint, Timestamp } = require('firebase-admin/firestore')
const { encodeFirestoreValue, exportDatabase } = require('./backup-firestore')
const { addRecordToCollectionBackup } = require('./backup-firestore-gemini')

test('encodes Firestore values without losing their types or precision', () => {
  const value = {
    capturedAt: new Timestamp(1740000000, 123456789),
    location: new GeoPoint(-23.5, -46.6),
    count: 9007199254740993n,
    bytes: Buffer.from([0, 255]),
    userMap: { type: 'timestamp', value: 'plain user data' },
    values: [null, true, 'text', 1.5],
  }

  assert.deepEqual(encodeFirestoreValue(value), {
    type: 'map',
    fields: {
      capturedAt: {
        type: 'timestamp',
        seconds: 1740000000,
        nanoseconds: 123456789,
      },
      location: {
        type: 'geoPoint',
        latitude: -23.5,
        longitude: -46.6,
      },
      count: { type: 'integer', value: '9007199254740993' },
      bytes: { type: 'bytes', base64: 'AP8=' },
      userMap: {
        type: 'map',
        fields: {
          type: { type: 'string', value: 'timestamp' },
          value: { type: 'string', value: 'plain user data' },
        },
      },
      values: {
        type: 'array',
        value: [
          { type: 'null' },
          { type: 'boolean', value: true },
          { type: 'string', value: 'text' },
          { type: 'double', value: 1.5 },
        ],
      },
    },
  })
})

test('exports subcollections below missing parent documents', async () => {
  const timestamp = new Timestamp(1740000000, 0)
  const noteReference = {
    id: 'note-1',
    path: 'users/user-1/notes/note-1',
    get: async () => ({
      ref: noteReference,
      exists: true,
      createTime: timestamp,
      updateTime: timestamp,
      data: () => ({ text: 'Nested note' }),
    }),
    listCollections: async () => [],
  }
  const notesCollection = {
    id: 'notes',
    path: 'users/user-1/notes',
    listDocuments: async () => [noteReference],
  }
  const userReference = {
    id: 'user-1',
    path: 'users/user-1',
    get: async () => ({ ref: userReference, exists: false }),
    listCollections: async () => [notesCollection],
  }
  const usersCollection = {
    id: 'users',
    path: 'users',
    listDocuments: async () => [userReference],
  }
  const database = {
    listCollections: async () => [usersCollection],
    getAll: async (...references) => Promise.all(references.map((reference) => reference.get())),
  }
  const stats = {
    documentCount: 0,
    collectionPaths: new Set(),
  }
  const records = []

  for await (const record of exportDatabase(database, stats)) {
    records.push(JSON.parse(record))
  }

  assert.deepEqual(
    records.map(({ path }) => path),
    ['users/user-1/notes/note-1']
  )
  assert.equal(stats.documentCount, 1)
  assert.deepEqual([...stats.collectionPaths].sort(), ['users', 'users/user-1/notes'])
})

test('groups JSON backup documents by their full collection path', () => {
  const collections = Object.create(null)

  addRecordToCollectionBackup(collections, {
    path: 'users/user-1/entries/entry-1',
    createTime: { type: 'timestamp', seconds: 1, nanoseconds: 0 },
    updateTime: { type: 'timestamp', seconds: 2, nanoseconds: 0 },
    data: { type: 'map', fields: { content: { type: 'string', value: 'hello' } } },
  })

  assert.equal(collections['users/user-1/entries']['entry-1'].data.fields.content.value, 'hello')
})
