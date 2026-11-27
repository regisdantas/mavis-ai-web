import englishEmojiData from 'emoji-picker-react/dist/data/emojis-en.json'

interface EmojiSearchResult {
  unified: string
  emoji: string
  name: string
  names: string[]
}

const emojiCatalog = new Map<string, EmojiSearchResult>()

Object.values(englishEmojiData.emojis).forEach((category) => {
  category.forEach(({ n, u }) => {
    const emoji = String.fromCodePoint(...u.split('-').map((codePoint) => parseInt(codePoint, 16)))

    emojiCatalog.set(u, {
      unified: u,
      emoji,
      name: n[n.length - 1] || n[0],
      names: n,
    })
  })
})

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()

const getDamerauLevenshteinDistance = (left: string, right: string) => {
  const distances = Array.from({ length: left.length + 1 }, () =>
    Array<number>(right.length + 1).fill(0)
  )

  for (let index = 0; index <= left.length; index += 1) {
    distances[index][0] = index
  }

  for (let index = 0; index <= right.length; index += 1) {
    distances[0][index] = index
  }

  for (let leftIndex = 1; leftIndex <= left.length; leftIndex += 1) {
    for (let rightIndex = 1; rightIndex <= right.length; rightIndex += 1) {
      const substitutionCost = left[leftIndex - 1] === right[rightIndex - 1] ? 0 : 1

      distances[leftIndex][rightIndex] = Math.min(
        distances[leftIndex - 1][rightIndex] + 1,
        distances[leftIndex][rightIndex - 1] + 1,
        distances[leftIndex - 1][rightIndex - 1] + substitutionCost
      )

      if (
        leftIndex > 1 &&
        rightIndex > 1 &&
        left[leftIndex - 1] === right[rightIndex - 2] &&
        left[leftIndex - 2] === right[rightIndex - 1]
      ) {
        distances[leftIndex][rightIndex] = Math.min(
          distances[leftIndex][rightIndex],
          distances[leftIndex - 2][rightIndex - 2] + 1
        )
      }
    }
  }

  return distances[left.length][right.length]
}

const isSubsequence = (query: string, value: string) => {
  let queryIndex = 0

  for (const character of value) {
    if (character === query[queryIndex]) {
      queryIndex += 1
    }

    if (queryIndex === query.length) {
      return true
    }
  }

  return false
}

const getTokenScore = (query: string, token: string): number | null => {
  if (token === query) {
    return 0
  }

  if (token.includes(query)) {
    return 0.5
  }

  const maxDistance = Math.max(1, Math.floor(Math.max(query.length, token.length) / 4))

  if (Math.abs(query.length - token.length) > maxDistance) {
    return null
  }

  const editDistance = getDamerauLevenshteinDistance(query, token)

  if (editDistance <= maxDistance) {
    return editDistance + 1
  }

  if (query.length >= 3 && isSubsequence(query, token)) {
    return maxDistance + 1
  }

  return null
}

const getNameScore = (names: readonly string[], query: string, queryWords: string[]) => {
  let bestScore = Number.POSITIVE_INFINITY

  names.forEach((name) => {
    const normalizedName = normalize(name)

    if (normalizedName === query) {
      bestScore = Math.min(bestScore, 0)
      return
    }

    if (normalizedName.startsWith(query)) {
      bestScore = Math.min(bestScore, 1)
      return
    }

    if (normalizedName.includes(query)) {
      bestScore = Math.min(bestScore, 2)
      return
    }

    const tokens = normalizedName.split(' ')
    let score = 3

    for (const queryWord of queryWords) {
      const wordScore = tokens.reduce(
        (best, token) => Math.min(best, getTokenScore(queryWord, token) ?? Infinity),
        Number.POSITIVE_INFINITY
      )

      if (!Number.isFinite(wordScore)) {
        score = Number.POSITIVE_INFINITY
        break
      }

      score += wordScore
    }

    bestScore = Math.min(bestScore, score)
  })

  return bestScore
}

export function searchEmojiCatalog(query: string): EmojiSearchResult[] {
  const trimmedQuery = query.trim()

  if (!trimmedQuery) {
    return []
  }

  const normalizedQuery = normalize(trimmedQuery)

  if (!normalizedQuery) {
    return Array.from(emojiCatalog.values())
      .filter((emoji) => emoji.emoji.includes(trimmedQuery))
      .slice(0, 60)
  }

  const queryWords = normalizedQuery.split(' ')

  return Array.from(emojiCatalog.values())
    .map((emoji) => ({
      emoji,
      score: getNameScore(emoji.names, normalizedQuery, queryWords),
    }))
    .filter(({ score }) => Number.isFinite(score))
    .sort(
      (left, right) => left.score - right.score || left.emoji.name.localeCompare(right.emoji.name)
    )
    .slice(0, 60)
    .map(({ emoji }) => emoji)
}
