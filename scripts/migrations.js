const path = require('node:path')
const { readdir } = require('node:fs/promises')

const { applicationDefault, deleteApp, initializeApp } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')

const MIGRATIONS_DIRECTORY = path.join(__dirname, 'migrations')
const MIGRATIONS_COLLECTION = '_migrations'

async function loadMigrations() {
  const files = (await readdir(MIGRATIONS_DIRECTORY)).filter((file) => file.endsWith('.js')).sort()

  return files.map((file) => {
    const migration = require(path.join(MIGRATIONS_DIRECTORY, file))

    if (typeof migration.id !== 'string' || typeof migration.up !== 'function') {
      throw new TypeError(`Invalid Firestore migration: ${file}`)
    }

    return migration
  })
}

async function runMigrations(database, migrations) {
  const pendingMigrations = migrations || (await loadMigrations())
  const migrationCollection = database.collection(MIGRATIONS_COLLECTION)
  let completedCount = 0

  for (const migration of pendingMigrations) {
    const migrationRef = migrationCollection.doc(migration.id)
    const migrationSnapshot = await migrationRef.get()

    if (migrationSnapshot.exists) {
      console.log(`Skipping already completed migration: ${migration.id}`)
      continue
    }

    console.log(`Running Firestore migration: ${migration.id}`)
    await migration.up(database)
    await migrationRef.create({
      completedAt: new Date().toISOString(),
    })
    completedCount += 1
    console.log(`Completed Firestore migration: ${migration.id}`)
  }

  if (completedCount === 0) {
    console.log('No pending Firestore migrations.')
  }

  return completedCount
}

async function main() {
  const projectId =
    process.env.FIREBASE_PROJECT_ID ||
    process.env.GOOGLE_CLOUD_PROJECT ||
    process.env.GCLOUD_PROJECT ||
    process.env.REACT_APP_FIREBASE_PROJECT_ID
  const usesEmulator = Boolean(process.env.FIRESTORE_EMULATOR_HOST)

  if (usesEmulator && !projectId) {
    throw new Error('Defina FIREBASE_PROJECT_ID para executar migrações no Firestore Emulator.')
  }

  const appOptions = projectId ? { projectId } : {}
  if (!usesEmulator) {
    appOptions.credential = applicationDefault()
  }

  const app = initializeApp(appOptions)
  const database = getFirestore(app)

  try {
    await runMigrations(database)
  } finally {
    try {
      await database.terminate()
    } finally {
      await deleteApp(app)
    }
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error('Failed to run Firestore migrations:', error)
    process.exitCode = 1
  })
}

module.exports = { loadMigrations, runMigrations }
