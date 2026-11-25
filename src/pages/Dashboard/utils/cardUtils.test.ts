import { defaultContent, parseNoteContent } from './cardUtils'

describe('parseNoteContent', () => {
  it('ignores legacy per-note lock metadata', () => {
    const parsed = parseNoteContent(
      JSON.stringify({
        title: 'Legacy note',
        text: 'Content',
        locked: true,
      }),
      () => true
    )

    expect(parsed).not.toHaveProperty('locked')
    expect(defaultContent).not.toHaveProperty('locked')
  })
})
