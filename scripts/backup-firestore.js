const { createWriteStream } = require('node:fs')
const { access, mkdir, rename, rm, writeFile } = require('node:fs/promises')
const path = require('node:path')
const { Readable } = require('node:stream')
const { pipeline } = require('node:stream/promises')

const { applicationDefault, deleteApp, initializeApp } = require('firebase-admin/app')
const { DocumentReference, GeoPoint, Timestamp, getFirestore } = require('firebase-admin/firestore')

function encodeFirestoreValue(value) {
  if (value === null) {
    return { type: 'null' }
  }

  if (value === undefined) {
    throw new TypeError('Undefined is not a valid Firestore value.')
  }

  if (value instanceof Timestamp) {
    return {
      type: 'timestamp',
      seconds: value.seconds,
      nanoseconds: value.nanoseconds,
    }
  }

  if (value instanceof GeoPoint) {
    return {
      type: 'geoPoint',
      latitude: value.latitude,
      longitude: value.longitude,
    }
  }

  if (value instanceof DocumentReference) {
    return { type: 'reference', path: value.path }
  }

  if (typeof value === 'string') {
    return { type: 'string', value }
  }

  if (typeof value === 'boolean') {
    return { type: 'boolean', value }
  }

  if (typeof value === 'bigint') {
    return { type: 'integer', value: value.toString() }
  }

  if (typeof value === 'number') {
    const encodedValue = Number.isFinite(value) && !Object.is(value, -0) ? value : String(value)

    return { type: 'double', value: encodedValue }
  }

  if (value instanceof Date) {
    return encodeFirestoreValue(Timestamp.fromDate(value))
  }

  if (Array.isArray(value)) {
    return { type: 'array', value: value.map(encodeFirestoreValue) }
  }

  if (Buffer.isBuffer(value) || value instanceof Uint8Array) {
    return {
      type: 'bytes',
      base64: Buffer.from(value).toString('base64'),
    }
  }

  if (typeof value.toBase64 === 'function' && typeof value.toUint8Array === 'function') {
    const encodedValue = {
      type: 'bytes',
      base64: value.toBase64(),
    }

    if (Number.isInteger(value.subtype)) {
      encodedValue.subtype = value.subtype
    }

    return encodedValue
  }

  if (value.constructor?.name === 'VectorValue' && typeof value.toArray === 'function') {
    return { type: 'vector', value: value.toArray() }
  }

  if (typeof value === 'object') {
    return {
      type: 'map',
      fields: Object.fromEntries(
        Object.entries(value).map(([key, fieldValue]) => [key, encodeFirestoreValue(fieldValue)])
      ),
    }
  }

  throw new TypeError(`Unsupported Firestore value type: ${typeof value}`)
}

async function* exportCollection(database, collection, stats) {
  stats.collectionPaths.add(collection.path)

  const documentReferences = await collection.listDocuments()
  documentReferences.sort((left, right) => left.id.localeCompare(right.id))

  for (let offset = 0; offset < documentReferences.length; offset += 100) {
    const references = documentReferences.slice(offset, offset + 100)
    const documents = await database.getAll(...references)

    for (const document of documents) {
      if (document.exists) {
        stats.documentCount += 1
        yield `${JSON.stringify({
          path: document.ref.path,
          createTime: encodeFirestoreValue(document.createTime),
          updateTime: encodeFirestoreValue(document.updateTime),
          data: encodeFirestoreValue(document.data()),
        })}\n`
      }

      const subcollections = await document.ref.listCollections()
      subcollections.sort((left, right) => left.id.localeCompare(right.id))

      for (const subcollection of subcollections) {
        yield* exportCollection(database, subcollection, stats)
      }
    }
  }
}

async function* exportDatabase(database, stats) {
  const collections = await database.listCollections()
  collections.sort((left, right) => left.id.localeCompare(right.id))

  for (const collection of collections) {
    yield* exportCollection(database, collection, stats)
  }
}

async function createBackup() {
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
    const documentsPath = path.join(temporaryDirectory, 'documents.jsonl')

    await pipeline(
      Readable.from(exportDatabase(database, stats)),
      createWriteStream(documentsPath, { encoding: 'utf8' })
    )

    const metadata = {
      formatVersion: 1,
      projectId: projectId || null,
      databaseId: '(default)',
      startedAt,
      completedAt: new Date().toISOString(),
      documentCount: stats.documentCount,
      collectionPaths: [...stats.collectionPaths].sort(),
    }
    await writeFile(
      path.join(temporaryDirectory, 'metadata.json'),
      `${JSON.stringify(metadata, null, 2)}\n`,
      { encoding: 'utf8', flag: 'wx' }
    )

    await rename(temporaryDirectory, backupDirectory)
    temporaryDirectoryCreated = false

    console.log(
      `Backup concluído: ${path.relative(process.cwd(), backupDirectory)} ` +
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
  createBackup().catch((error) => {
    console.error('Falha ao fazer backup do Firestore:', error)
    process.exitCode = 1
  })
}

module.exports = { encodeFirestoreValue, exportDatabase }
