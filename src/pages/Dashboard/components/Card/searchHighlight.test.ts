import type { Element, Root, Text } from 'hast'
import { addSourceOffsetsToTree } from './markdownSourcePosition'
import { addSearchHighlightsToTree } from './searchHighlight'

describe('Markdown search highlighting', () => {
  it('marks matching text and keeps its original source offset', () => {
    const tree: Root = {
      type: 'root',
      children: [
        {
          type: 'element',
          tagName: 'p',
          properties: {},
          children: [
            {
              type: 'text',
              value: 'Read HELLO again',
              position: {
                start: { line: 1, column: 1, offset: 0 },
                end: { line: 1, column: 17, offset: 16 },
              },
            },
          ],
        },
      ],
    }

    addSearchHighlightsToTree(tree, 'hello', false)
    addSourceOffsetsToTree(tree)

    const paragraph = tree.children[0] as Element
    const wrapper = paragraph.children[0] as Element
    const highlight = wrapper.children.find(
      (node): node is Element => node.type === 'element' && node.tagName === 'mark'
    )
    const sourceSpan = highlight?.children[0]

    expect(highlight).toBeDefined()
    expect(sourceSpan?.type).toBe('element')

    if (sourceSpan?.type === 'element') {
      expect(sourceSpan.properties['data-note-source-start']).toBe(5)
      expect(sourceSpan.children[0]).toMatchObject({ type: 'text', value: 'HELLO' })
    }
  })

  it('still highlights text when its source position is incomplete', () => {
    const textNode: Text = {
      type: 'text',
      value: 'HELLO',
      position: {} as NonNullable<Text['position']>,
    }
    const tree: Root = {
      type: 'root',
      children: [
        {
          type: 'element',
          tagName: 'p',
          properties: {},
          children: [textNode],
        },
      ],
    }

    expect(() => addSearchHighlightsToTree(tree, 'hello', false)).not.toThrow()
    expect(() => addSourceOffsetsToTree(tree)).not.toThrow()

    const paragraph = tree.children[0] as Element
    const wrapper = paragraph.children[0] as Element

    expect(
      wrapper.children.some((node) => node.type === 'element' && node.tagName === 'mark')
    ).toBe(true)
  })
})
