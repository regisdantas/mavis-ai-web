import type { Element, Root, Text } from 'hast'
import type { Plugin } from 'unified'
import { getSearchMatchRanges } from '../../utils/noteSearch'

const getSegmentPosition = (
  position: Text['position'],
  start: number,
  end: number
): Text['position'] => {
  if (!position?.start || !position.end) {
    return undefined
  }

  const sourceStart = position.start.offset

  return {
    ...position,
    start: {
      ...position.start,
      offset: sourceStart === undefined ? position.start.offset : sourceStart + start,
    },
    end: {
      ...position.end,
      offset: sourceStart === undefined ? position.end.offset : sourceStart + end,
    },
  }
}

export const addSearchHighlightsToTree = (
  tree: Root,
  searchContent: string,
  fuzzySearchEnabled: boolean
): Root => {
  if (!searchContent.trim()) {
    return tree
  }

  const visit = (parent: Root | Element) => {
    for (let index = 0; index < parent.children.length; index += 1) {
      const node = parent.children[index]

      if (node.type === 'text') {
        const ranges = getSearchMatchRanges(node.value, searchContent, fuzzySearchEnabled)

        if (!ranges.length) {
          continue
        }

        const children: Element['children'] = []
        let currentPosition = 0

        ranges.forEach((range) => {
          if (range.start > currentPosition) {
            children.push({
              type: 'text',
              value: node.value.slice(currentPosition, range.start),
              position: getSegmentPosition(node.position, currentPosition, range.start),
            })
          }

          const matchedText: Text = {
            type: 'text',
            value: node.value.slice(range.start, range.end),
            position: getSegmentPosition(node.position, range.start, range.end),
          }

          children.push({
            type: 'element',
            tagName: 'mark',
            properties: {},
            children: [matchedText],
            position: getSegmentPosition(node.position, range.start, range.end),
          })
          currentPosition = range.end
        })

        if (currentPosition < node.value.length) {
          children.push({
            type: 'text',
            value: node.value.slice(currentPosition),
            position: getSegmentPosition(node.position, currentPosition, node.value.length),
          })
        }

        parent.children[index] = {
          type: 'element',
          tagName: 'span',
          properties: {},
          children,
          position: node.position,
        }
      } else if (node.type === 'element') {
        visit(node)
      }
    }
  }

  visit(tree)
  return tree
}

export const rehypeSearchHighlight: Plugin<[string, boolean], Root> =
  (searchContent, fuzzySearchEnabled) => (tree) =>
    addSearchHighlightsToTree(tree, searchContent, fuzzySearchEnabled)
