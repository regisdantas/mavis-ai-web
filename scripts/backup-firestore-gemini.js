const { access, mkdir, rename, rm, writeFile } = require('node:fs/promises')
const path = require('node:path')

const { applicationDefault, deleteApp, initializeApp } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')
const { exportDatabase } = require('./backup-firestore')

function addRecordToCollectionBackup(collections, record) {
  const pathSegments = record.path.split('/')
  const documentId = pathSegments.pop()
  const collectionPath = pathSegments.join('/')

  if (!documentId || !collectionPath) {
    throw new Error(`Invalid Firestore document path: ${record.path}`)
  }

  if (!Object.hasOwn(collections, collectionPath)) {
    collections[collectionPath] = Object.create(null)
  }

  collections[collectionPath][documentId] = {
    createTime: record.createTime,
    updateTime: record.updateTime,
    data: record.data,
  }
}

async function createJsonBackup() {
  const projectId =
    process.env.FIREBASE_PROJECT_ID ||
    process.env.GOOGLE_CLOUD_PROJECT ||
    process.env.GCLOUD_PROJECT ||
    process.env.REACT_APP_FIREBASE_PROJECT_ID
  const usesEmulator = Boolean(process.env.FIRESTORE_EMULATOR_HOST)

  if (usesEmulator && !projectId) {
    throw new Error('Defina FIREBASE_PROJECT_ID para fazer backup do Firestore Emulator.')
  }

  const appOptions = projectId ? { projectId } : {}
  if (!usesEmulator) {
    appOptions.credential = applicationDefault()
  }

  const app = initializeApp(appOptions)
  const database = getFirestore(app)
  database.settings({ useBigInt: true })

  const startedAt = new Date().toISOString()
  const backupName = `database_${startedAt.replace(/[:.]/g, '-')}`
  const backupRoot = path.resolve(process.cwd(), 'backups')
  const backupDirectory = path.join(backupRoot, backupName)
  const temporaryDirectory = path.join(backupRoot, `.${backupName}.tmp`)
  let temporaryDirectoryCreated = false

  try {
    await mkdir(backupRoot, { recursive: true })
    await mkdir(temporaryDirectory)
    temporaryDirectoryCreated = true

    try {
      await access(backupDirectory)
      throw new Error(`O diretório de backup já existe: ${backupDirectory}`)
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error
      }
    }

    const stats = {
      documentCount: 0,
      collectionPaths: new Set(),
    }
    const collections = Object.create(null)

    for await (const serializedRecord of exportDatabase(database, stats)) {
      addRecordToCollectionBackup(collections, JSON.parse(serializedRecord))
    }

    const backup = {
      formatVersion: 1,
      projectId: projectId || null,
      databaseId: '(default)',
      startedAt,
      completedAt: new Date().toISOString(),
      documentCount: stats.documentCount,
      collectionPaths: [...stats.collectionPaths].sort(),
      collections,
    }

    await writeFile(
      path.join(temporaryDirectory, 'firestore_backup.json'),
      `${JSON.stringify(backup, null, 2)}\n`,
      { encoding: 'utf8', flag: 'wx' }
    )

    await rename(temporaryDirectory, backupDirectory)
    temporaryDirectoryCreated = false

    console.log(
      `JSON backup concluído: ${path.relative(process.cwd(), backupDirectory)} ` +
        `(${stats.documentCount} documentos; projeto ${projectId || 'inferido pelas credenciais'})`
    )

    if (stats.documentCount === 0) {
      console.warn(
        'Nenhum documento encontrado. Confira o projeto e o banco Firestore configurados.'
      )
    }
  } catch (error) {
    if (temporaryDirectoryCreated) {
      await rm(temporaryDirectory, { recursive: true, force: true })
    }
    throw error
  } finally {
    try {
      await database.terminate()
    } finally {
      await deleteApp(app)
    }
  }
}

if (require.main === module) {
  createJsonBackup().catch((error) => {
    console.error('Falha ao criar o backup JSON do Firestore:', error)
    process.exitCode = 1
  })
}

module.exports = { addRecordToCollectionBackup }
