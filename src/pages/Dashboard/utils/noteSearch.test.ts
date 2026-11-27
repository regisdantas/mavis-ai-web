import { getSearchableNoteText, getSearchMatchRanges, matchesNoteSearch } from './noteSearch'

describe('note search helpers', () => {
  it('searches note titles, text, and tags instead of serialized metadata', () => {
    const searchableText = getSearchableNoteText(
      JSON.stringify({
        title: 'Weekly plan',
        text: 'Review the launch',
        tags: ['work'],
        color: '#fff',
      })
    )

    expect(searchableText).toBe('Weekly plan\nReview the launch\nwork')
  })

  it('matches exact search case-insensitively and only allows typo matches in fuzzy mode', () => {
    expect(matchesNoteSearch('A note about HELLO', 'hello')).toBe(true)
    expect(matchesNoteSearch('A note about hello', 'helo')).toBe(false)
    expect(matchesNoteSearch('A note about hello', 'helo', true)).toBe(true)
  })

  it('returns every case-insensitive exact match range', () => {
    expect(getSearchMatchRanges('Hello hello', 'HELLO')).toEqual([
      { start: 0, end: 5 },
      { start: 6, end: 11 },
    ])
  })

  it('highlights the matching word when fuzzy search finds a typo', () => {
    expect(getSearchMatchRanges('The quick fox', 'quik', true)).toEqual([{ start: 4, end: 9 }])
  })
})
