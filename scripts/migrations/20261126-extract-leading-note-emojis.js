const LEADING_EMOJI_PATTERN =
  /^(?:\p{Extended_Pictographic}|\p{Emoji_Presentation}|\p{Regional_Indicator}|\u20E3)/u
const GRAPHEME_SEGMENTER = new Intl.Segmenter('en', { granularity: 'grapheme' })

function extractLeadingEmoji(title) {
  if (typeof title !== 'string') {
    return null
  }

  const trimmedTitle = title.trimStart()
  const firstGrapheme = GRAPHEME_SEGMENTER.segment(trimmedTitle)[Symbol.iterator]().next()
    .value?.segment

  if (!firstGrapheme || !LEADING_EMOJI_PATTERN.test(firstGrapheme)) {
    return null
  }

  return {
    emoji: firstGrapheme,
    title: trimmedTitle.slice(firstGrapheme.length).trimStart(),
  }
}

async function up(database) {
  const snapshot = await database.collectionGroup('entries').get()
  const writer = database.bulkWriter()
  let updatedCount = 0

  for (const entryDocument of snapshot.docs) {
    const entry = entryDocument.data()

    if (typeof entry.content !== 'string') {
      continue
    }

    let noteContent

    try {
      noteContent = JSON.parse(entry.content)
    } catch {
      continue
    }

    if (
      !noteContent ||
      typeof noteContent !== 'object' ||
      Array.isArray(noteContent) ||
      typeof noteContent.title !== 'string'
    ) {
      continue
    }

    const extracted = extractLeadingEmoji(noteContent.title)

    if (!extracted) {
      continue
    }

    const updates = {
      content: JSON.stringify({
        ...noteContent,
        title: extracted.title,
      }),
    }

    if (typeof entry.emoji !== 'string' || entry.emoji.length === 0) {
      updates.emoji = extracted.emoji
    }

    writer.update(entryDocument.ref, updates)
    updatedCount += 1
  }

  await writer.close()
  console.log(`Extracted emojis from ${updatedCount} note titles.`)

  return updatedCount
}

module.exports = {
  id: '20261126-extract-leading-note-emojis',
  up,
  extractLeadingEmoji,
}
