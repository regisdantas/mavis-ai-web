import type { Root } from 'hast'
import { addSourceOffsetsToTree, getSourceOffsetFromClick } from './markdownSourcePosition'

describe('markdown source positioning', () => {
  it('ignores generated text nodes without a source start point', () => {
    const root: Root = {
      type: 'root',
      children: [
        {
          type: 'text',
          value: 'generated text',
          position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 15, offset: 14 },
          },
        },
      ],
    }
    const textNode = root.children[0]

    if (textNode.type !== 'text') {
      throw new Error('Expected text node')
    }

    Object.defineProperty(textNode, 'position', { configurable: true, value: {} })

    expect(() => addSourceOffsetsToTree(root)).not.toThrow()
  })

  it('maps a rendered text caret to its markdown source offset', () => {
    const root: Root = {
      type: 'root',
      children: [
        {
          type: 'element',
          tagName: 'p',
          properties: {},
          children: [
            {
              type: 'text',
              value: 'clicked text',
              position: {
                start: { line: 1, column: 10, offset: 9 },
                end: { line: 1, column: 22, offset: 21 },
              },
            },
          ],
        },
      ],
    }

    addSourceOffsetsToTree(root)

    const paragraph = root.children[0]
    if (paragraph.type !== 'element') {
      throw new Error('Expected paragraph element')
    }

    const sourceSpan = paragraph.children[0]
    if (sourceSpan.type !== 'element') {
      throw new Error('Expected source-position span')
    }

    const sourceStart = sourceSpan.properties['data-note-source-start']
    expect(sourceStart).toBe(9)

    const container = document.createElement('div')
    const span = document.createElement('span')
    span.setAttribute('data-note-source-start', String(sourceStart))
    const textNode = document.createTextNode('clicked text')
    span.appendChild(textNode)
    container.appendChild(span)
    document.body.appendChild(container)

    const range = document.createRange()
    range.setStart(textNode, 7)
    range.setEnd(textNode, 7)

    const documentWithCaretRange = document as Document & {
      caretRangeFromPoint?: (x: number, y: number) => Range | null
    }
    Object.defineProperty(document, 'caretRangeFromPoint', {
      configurable: true,
      value: () => range,
    })

    try {
      expect(getSourceOffsetFromClick(container, 10, 10)).toBe(16)
    } finally {
      Reflect.deleteProperty(documentWithCaretRange, 'caretRangeFromPoint')
      container.remove()
    }
  })
})
