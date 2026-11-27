import { searchEmojiCatalog } from './emojiSearch'

describe('searchEmojiCatalog', () => {
  it('finds emoji names with transposed or incomplete characters', () => {
    const transposedMatches = searchEmojiCatalog('smiel')

    expect(transposedMatches.some((emoji) => emoji.names.includes('smile'))).toBe(true)
  })

  it('returns no matches for blank input and ranks exact names first', () => {
    expect(searchEmojiCatalog('  ')).toEqual([])

    const matches = searchEmojiCatalog('rocket')

    expect(matches[0].names.includes('rocket')).toBe(true)
  })
})
