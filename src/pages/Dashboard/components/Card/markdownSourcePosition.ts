import type { Element, Root } from 'hast'
import type { Plugin } from 'unified'

export const addSourceOffsetsToTree = (tree: Root) => {
  const visit = (parent: Root | Element) => {
    for (let index = 0; index < parent.children.length; index += 1) {
      const node = parent.children[index]

      if (node.type === 'text') {
        const sourceOffset = node.position?.start?.offset

        if (sourceOffset !== undefined) {
          parent.children[index] = {
            type: 'element',
            tagName: 'span',
            properties: { 'data-note-source-start': sourceOffset },
            children: [node],
          }
        }
      } else if (node.type === 'element') {
        visit(node)
      }
    }
  }

  visit(tree)
}

export const rehypeAddSourceOffsets: Plugin<[], Root> = () => addSourceOffsetsToTree

type DocumentWithCaretApis = Document & {
  caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number } | null
  caretRangeFromPoint?: (x: number, y: number) => Range | null
}

export const getSourceOffsetFromClick = (
  container: HTMLElement,
  clientX: number,
  clientY: number
): number | null => {
  const caretDocument = document as DocumentWithCaretApis
  const caretPosition = caretDocument.caretPositionFromPoint?.(clientX, clientY)
  const hasTextPosition = caretPosition?.offsetNode.nodeType === Node.TEXT_NODE
  const caretRange = hasTextPosition ? null : caretDocument.caretRangeFromPoint?.(clientX, clientY)

  const node = hasTextPosition ? caretPosition?.offsetNode : caretRange?.startContainer
  const offset = hasTextPosition ? caretPosition?.offset : caretRange?.startOffset

  if (
    !node ||
    offset === undefined ||
    node.nodeType !== Node.TEXT_NODE ||
    !container.contains(node)
  ) {
    return null
  }

  const sourceElement = node.parentElement?.closest<HTMLElement>('[data-note-source-start]')
  const sourceStart = sourceElement?.getAttribute('data-note-source-start')

  if (sourceStart === null || sourceStart === undefined) {
    return null
  }

  const sourceOffset = Number(sourceStart) + offset

  return Number.isFinite(sourceOffset) ? sourceOffset : null
}
