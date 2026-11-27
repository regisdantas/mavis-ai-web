import {
  darkNoteColorMap,
  defaultContent,
  getNoteDisplayColor,
  noteColors,
  parseNoteContent,
} from './cardUtils'

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

const getWhiteTextContrast = (color: string) => {
  const channels = color
    .slice(1)
    .match(/.{2}/g)
    ?.map((channel) => {
      const value = parseInt(channel, 16) / 255
      return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
    })

  if (!channels) {
    throw new Error(`Expected a six-digit hex color, received ${color}`)
  }

  const luminance = channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722
  return 1.05 / (luminance + 0.05)
}

describe('getNoteDisplayColor', () => {
  it('maps every preset note color to a dark background with readable white text', () => {
    noteColors.forEach((color) => {
      const mappedColor = getNoteDisplayColor(color, true)

      expect(darkNoteColorMap[color.toLowerCase()]).toBe(mappedColor)
      expect(getWhiteTextContrast(mappedColor)).toBeGreaterThanOrEqual(4.5)
      expect(getNoteDisplayColor(color, false)).toBe(color)
    })
  })

  it('darkens valid custom hex colors to maintain contrast with white text', () => {
    const mappedColor = getNoteDisplayColor('#A0C0E0', true)

    expect(mappedColor).not.toBe('#A0C0E0')
    expect(getWhiteTextContrast(mappedColor)).toBeGreaterThanOrEqual(4.5)
  })
})
