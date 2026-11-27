const assert = require('node:assert/strict')
const test = require('node:test')

const { runMigrations } = require('./migrations')
const { extractLeadingEmoji, up } = require('./migrations/20261126-extract-leading-note-emojis')

test('extracts complete emoji graphemes from the beginning of titles', () => {
  assert.deepEqual(extractLeadingEmoji('  👩🏽‍💻 Development'), {
    emoji: '👩🏽‍💻',
    title: 'Development',
  })
  assert.deepEqual(extractLeadingEmoji('🇧🇷 Notes'), {
    emoji: '🇧🇷',
    title: 'Notes',
  })
  assert.equal(extractLeadingEmoji('Regular title'), null)
  assert.equal(extractLeadingEmoji(''), null)
})

test('moves leading emojis to the entry field and preserves existing emoji choices', async () => {
  const writes = []
  const entries = [
    {
      ref: { path: 'users/user-1/entries/entry-1' },
      data: () => ({
        content: JSON.stringify({ title: '📚 Reading', text: 'Book notes' }),
      }),
    },
    {
      ref: { path: 'users/user-1/entries/entry-2' },
      data: () => ({
        content: JSON.stringify({ title: '🎨 Sketch', text: 'Ideas' }),
        emoji: '🌈',
      }),
    },
    {
      ref: { path: 'users/user-1/entries/entry-3' },
      data: () => ({
        content: JSON.stringify({ title: 'No emoji', text: 'Leave unchanged' }),
      }),
    },
    {
      ref: { path: 'users/user-1/entries/entry-4' },
      data: () => ({ content: 'not JSON' }),
    },
  ]
  const database = {
    collectionGroup: (name) => {
      assert.equal(name, 'entries')
      return { get: async () => ({ docs: entries }) }
    },
    bulkWriter: () => ({
      update: (reference, updates) => writes.push({ path: reference.path, updates }),
      close: async () => {},
    }),
  }

  assert.equal(await up(database), 2)
  assert.deepEqual(writes, [
    {
      path: 'users/user-1/entries/entry-1',
      updates: {
        content: JSON.stringify({ title: 'Reading', text: 'Book notes' }),
        emoji: '📚',
      },
    },
    {
      path: 'users/user-1/entries/entry-2',
      updates: {
        content: JSON.stringify({ title: 'Sketch', text: 'Ideas' }),
      },
    },
  ])
})

test('records successful migrations and skips them on later runs', async () => {
  const completedMigrations = new Map()
  const database = {
    collection: (name) => {
      assert.equal(name, '_migrations')

      return {
        doc: (id) => ({
          get: async () => ({ exists: completedMigrations.has(id) }),
          create: async (data) => completedMigrations.set(id, data),
        }),
      }
    },
  }
  let runCount = 0
  const migrations = [
    {
      id: 'test-migration',
      up: async () => {
        runCount += 1
      },
    },
  ]

  assert.equal(await runMigrations(database, migrations), 1)
  assert.equal(await runMigrations(database, migrations), 0)
  assert.equal(runCount, 1)
  assert.equal(completedMigrations.has('test-migration'), true)
})
