import { isJsonString } from '../../../utils'

export interface SearchMatchRange {
  start: number
  end: number
}

interface SearchWord {
  value: string
  index: number
}

const searchWordPattern = /[\p{L}\p{N}]+/gu

const getSearchWords = (value: string): SearchWord[] =>
  Array.from(value.matchAll(searchWordPattern), (match) => ({
    value: match[0],
    index: match.index ?? 0,
  }))

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

export const getSearchableNoteText = (content: string): string => {
  if (!isJsonString(content)) {
    return content
  }

  const parsed: unknown = JSON.parse(content)

  if (!isRecord(parsed)) {
    return content
  }

  const title = typeof parsed.title === 'string' ? parsed.title : ''
  const text = typeof parsed.text === 'string' ? parsed.text : ''
  const tags = Array.isArray(parsed.tags)
    ? parsed.tags.filter((tag): tag is string => typeof tag === 'string').join(' ')
    : ''

  return [title, text, tags].filter(Boolean).join('\n')
}

const isSubsequence = (query: string, candidate: string): boolean => {
  let queryIndex = 0

  for (const character of candidate) {
    if (character === query[queryIndex]) {
      queryIndex += 1

      if (queryIndex === query.length) {
        return true
      }
    }
  }

  return query.length === 0
}

const isWithinEditDistance = (query: string, candidate: string, maximumDistance: number) => {
  if (Math.abs(query.length - candidate.length) > maximumDistance) {
    return false
  }

  let previousRow = Array.from({ length: candidate.length + 1 }, (_, index) => index)

  for (let queryIndex = 1; queryIndex <= query.length; queryIndex += 1) {
    const currentRow = [queryIndex]

    for (let candidateIndex = 1; candidateIndex <= candidate.length; candidateIndex += 1) {
      const substitutionCost = query[queryIndex - 1] === candidate[candidateIndex - 1] ? 0 : 1

      currentRow[candidateIndex] = Math.min(
        currentRow[candidateIndex - 1] + 1,
        previousRow[candidateIndex] + 1,
        previousRow[candidateIndex - 1] + substitutionCost
      )
    }

    previousRow = currentRow
  }

  return previousRow[candidate.length] <= maximumDistance
}

const fuzzyMatchesWord = (query: string, candidate: string): boolean => {
  if (candidate.includes(query)) {
    return true
  }

  if (query.length < 3) {
    return false
  }

  if (isSubsequence(query, candidate)) {
    return true
  }

  const maximumDistance = query.length >= 8 ? 2 : 1

  return isWithinEditDistance(query, candidate, maximumDistance)
}

const getExactMatchRanges = (text: string, query: string): SearchMatchRange[] => {
  const normalizedText = text.toLowerCase()
  const normalizedQuery = query.toLowerCase()
  const ranges: SearchMatchRange[] = []
  let searchFrom = 0

  while (searchFrom < normalizedText.length) {
    const start = normalizedText.indexOf(normalizedQuery, searchFrom)

    if (start < 0) {
      break
    }

    ranges.push({ start, end: start + normalizedQuery.length })
    searchFrom = start + normalizedQuery.length
  }

  return ranges
}

const mergeRanges = (ranges: SearchMatchRange[]): SearchMatchRange[] => {
  const sortedRanges = [...ranges].sort((a, b) => a.start - b.start || a.end - b.end)

  return sortedRanges.reduce<SearchMatchRange[]>((merged, range) => {
    const previousRange = merged[merged.length - 1]

    if (previousRange && range.start <= previousRange.end) {
      previousRange.end = Math.max(previousRange.end, range.end)
    } else {
      merged.push({ ...range })
    }

    return merged
  }, [])
}

export const matchesNoteSearch = (text: string, query: string, fuzzySearchEnabled = false) => {
  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) {
    return true
  }

  if (text.toLowerCase().includes(normalizedQuery)) {
    return true
  }

  if (!fuzzySearchEnabled) {
    return false
  }

  const queryWords = getSearchWords(normalizedQuery).map((word) => word.value)
  const textWords = getSearchWords(text).map((word) => word.value.toLowerCase())

  return (
    queryWords.length > 0 &&
    queryWords.every((queryWord) =>
      textWords.some((textWord) => fuzzyMatchesWord(queryWord, textWord))
    )
  )
}

export const getSearchMatchRanges = (
  text: string,
  query: string,
  fuzzySearchEnabled = false
): SearchMatchRange[] => {
  const normalizedQuery = query.trim()

  if (!normalizedQuery) {
    return []
  }

  const exactRanges = getExactMatchRanges(text, normalizedQuery)

  if (exactRanges.length > 0 || !fuzzySearchEnabled) {
    return exactRanges
  }

  const queryWords = getSearchWords(normalizedQuery).map((word) => word.value.toLowerCase())
  const textWords = getSearchWords(text)
  const ranges: SearchMatchRange[] = []

  queryWords.forEach((queryWord) => {
    textWords.forEach((textWord) => {
      const normalizedWord = textWord.value.toLowerCase()

      if (!fuzzyMatchesWord(queryWord, normalizedWord)) {
        return
      }

      const exactWordOffset = normalizedWord.indexOf(queryWord)

      if (exactWordOffset >= 0) {
        ranges.push({
          start: textWord.index + exactWordOffset,
          end: textWord.index + exactWordOffset + queryWord.length,
        })
      } else {
        ranges.push({
          start: textWord.index,
          end: textWord.index + textWord.value.length,
        })
      }
    })
  })

  return mergeRanges(ranges)
}
