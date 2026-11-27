import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkEmoji from 'remark-emoji'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkToc from 'remark-toc'
import remarkBreaks from 'remark-breaks'
import stringWidth from 'string-width'
import { getSourceOffsetFromClick, rehypeAddSourceOffsets } from './markdownSourcePosition'
import { rehypeSearchHighlight } from './searchHighlight'
import { SearchMatch } from '../SearchHighlight'

interface ButtonCommandProps {
  label: string
  expression: string
  onExecute: (expression: string) => void
  disabled: boolean
}

const ButtonCommand: React.FC<ButtonCommandProps> = ({
  label,
  expression,
  onExecute,
  disabled,
}) => (
  <button className="markdownButton" disabled={disabled} onClick={() => onExecute(expression)}>
    {label}
  </button>
)

interface CardContentProps {
  value: string
  searchContent: string
  fuzzySearchEnabled: boolean
  readOnly: boolean
  editing: boolean
  onEditorFocus: (textarea: HTMLTextAreaElement) => void
  onEditorBlur: (textarea: HTMLTextAreaElement) => void
  textareaRef: React.RefObject<HTMLTextAreaElement>
  markdownRef: React.RefObject<HTMLDivElement>

  setValue: (value: string) => void
  setEditing: (value: boolean) => void

  onSave: () => void
  onMarkdownClick: (clickedText: string, sourceOffset: number | null) => void

  processMarkdown: (text: string) => string
  onExecuteExpression: (expression: string) => void
}

const CardContent: React.FC<CardContentProps> = ({
  value,
  searchContent,
  fuzzySearchEnabled,
  readOnly,
  editing,
  onEditorFocus,
  onEditorBlur,
  textareaRef,
  markdownRef,
  setValue,
  setEditing,
  onSave,
  onMarkdownClick,
  processMarkdown,
  onExecuteExpression,
}) => {
  if (editing) {
    return (
      <Editor
        ref={textareaRef}
        readOnly={readOnly}
        placeholder={`* ❓ What do you have for today?

<markdown editor>`}
        autoFocus
        value={value || ''}
        onFocus={(e) => {
          const el = e.currentTarget
          el.style.height = 'auto'
          el.style.height = `${el.scrollHeight}px`
          onEditorFocus(el)
        }}
        onChange={(e) => {
          const el = e.currentTarget
          el.style.height = `${el.scrollHeight}px`

          setValue(e.target.value)
        }}
        onBlur={(e) => {
          const related = e.relatedTarget as HTMLElement | null

          if (related?.dataset?.keepeditor === 'true') {
            onSave()
            return
          }

          onEditorBlur(e.currentTarget)
          onSave()
          setEditing(false)
        }}
      />
    )
  }

  const renderedMarkdown = processMarkdown(value || '* ❓ What do you have for today?')

  return (
    <MarkdownContainer
      ref={markdownRef}
      onClick={(event) => {
        if (readOnly) {
          return
        }

        const target = event.target as HTMLElement
        if (target.closest('button')) {
          return
        }

        const sourceOffset =
          renderedMarkdown === value
            ? getSourceOffsetFromClick(event.currentTarget, event.clientX, event.clientY)
            : null

        onMarkdownClick(target.innerText || target.textContent || '', sourceOffset)
      }}
    >
      <ReactMarkdown
        rehypePlugins={[
          rehypeRaw,
          [rehypeSearchHighlight, searchContent, fuzzySearchEnabled],
          rehypeAddSourceOffsets,
        ]}
        components={{
          mark({ node: _node, children }) {
            return <SearchMatch>{children}</SearchMatch>
          },
          button(props) {
            const expression = decodeURIComponent(
              String((props.node as any)?.properties?.dataExpression ?? '')
            )

            return (
              <ButtonCommand
                label={String(props.children)}
                expression={expression}
                onExecute={onExecuteExpression}
                disabled={readOnly}
              />
            )
          },
          table({ node: _node, children, ...props }) {
            return (
              <MarkdownScrollWrapper>
                <table {...props}>{children}</table>
              </MarkdownScrollWrapper>
            )
          },
          img({ node: _node, ...props }) {
            return (
              <MarkdownInlineScrollWrapper>
                <img {...props} alt={props.alt || ''} />
              </MarkdownInlineScrollWrapper>
            )
          },
        }}
        remarkPlugins={[
          [
            remarkEmoji,
            {
              padSpaceAfter: false,
              emoticon: true,
            },
          ],
          [remarkToc, { tight: true, ordered: true }],
          [remarkGfm, { stringLength: stringWidth }],
          remarkMath,
          rehypeKatex,
          remarkBreaks,
          remarkFrontmatter,
        ]}
      >
        {renderedMarkdown}
      </ReactMarkdown>
    </MarkdownContainer>
  )
}

export default CardContent

const MarkdownContainer = styled.div`
  && {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    margin-left: 0;
    overflow-x: hidden;
  }

  padding: 20px;
  margin: 0;
  color: #000;
  font: 13px 'Myriad Pro', 'Lucida Grande', Lucida, Verdana, sans-serif;

  a:link {
    color: #00f;
    text-decoration: none;
  }

  a:visited {
    color: #00a;
    text-decoration: none;
  }

  a:hover {
    color: #f60;
    text-decoration: underline;
  }

  a:active {
    color: #f60;
    text-decoration: underline;
  }

  blockquote {
    max-width: 100%;
    overflow-x: hidden;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  * html code {
    font-size: 100%;
  }

  * html pre {
    font-size: 101%;
  }

  pre,
  code {
    font-size: 14px;
    font-family: monaco, courier, consolas, monospace;
    color: green;
    font-style: italic;
  }

  pre {
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid #c7cfd5;
    background: #f1f5f9;
    margin: 20px 0;
    padding: 8px;
    text-align: left;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    white-space: pre-wrap;
    word-break: break-word;
    overflow-wrap: anywhere;
  }

  hr {
    width: 100%;
    border: 0;
    border-top: 1px dashed rgba(0, 0, 0, 0.2);
    margin-top: 6px;
    margin-bottom: 10px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Myriad Pro', 'Lucida Grande', Lucida, Verdana, sans-serif;
    font-weight: bold;
  }

  h1 {
    margin-top: 1em;
    margin-bottom: 1em;
    color: #000;
    font-size: 22px;
  }

  h2 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 18px;
    color: #000;
    padding-bottom: 2px;
  }

  h3 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 13px;
    color: #000;
  }

  h4 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 11px;
    color: #000;
  }

  h5 {
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 0;
    font-size: 11px;
    color: #000;
  }

  h6 {
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 0;
    font-size: 11px;
    color: #000;
  }

  p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  ul {
    list-style: square outside;
    margin: 0 0 0 30px;
    padding: 0 0 12px 6px;
  }

  li {
    margin-top: 7px;
  }

  ol {
    list-style-type: decimal;
    list-style-position: outside;
    margin: 0 0 0 30px;
    padding: 0 0 12px 6px;
  }

  ol ol {
    list-style-type: lower-alpha;
    list-style-position: outside;
    margin: 7px 0 0 30px;
    padding: 0 0 0 10px;
  }

  ul ul {
    margin-left: 40px;
    padding: 0 0 0 6px;
  }

  li > p {
    display: inline;
  }

  li > p + p {
    display: block;
  }

  li > a + p {
    display: block;
  }

  table {
    width: 100%;
    min-width: 100%;
    table-layout: auto;

    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    border-spacing: 0;

    margin: 0;
    margin-bottom: 20px;
  }

  table th,
  table td {
    width: fit-content;
    min-width: 8rem;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  table th {
    padding: 4px 8px;
    background: #e2e2e2;
    font-size: 12px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border-right: 1px solid rgba(0, 0, 0, 0.2);

    @media (max-width: 1260px) {
      font-size: 10px;
    }
  }

  table th p {
    margin: 0;
    padding: 0;
    font-weight: bold;
  }

  table td {
    padding: 2px;
    margin: 0;

    font-size: 12px;
    vertical-align: top;

    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }

  table td p {
    margin-bottom: 0;
  }

  table td p + p {
    margin-top: 5px;
  }

  table td p + p + p {
    margin-top: 5px;
  }

  table tr {
    height: 22px;
  }

  form {
    margin: 0;
  }

  button {
    margin: 0;
    height: 20px;
    min-width: 40px;
    width: fit-content;

    border: 1px solid #919699;
    border-radius: 3px;

    background: #e2e2e2;
    color: #000;

    font-size: 12px;
    cursor: pointer;

    padding: 0 6px;
    white-space: nowrap;
  }

  input[type='checkbox'] {
    appearance: none;
    width: 14px;
    height: 14px;
    border: 1px solid #919699;
    border-radius: 2px;
    position: relative;
    cursor: pointer;
  }

  input[type='checkbox']:checked {
    background-color: #22c55e;
    border: 1px solid #919699;
  }

  input[type='checkbox']:checked::after {
    content: '✓';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 10px;
    font-weight: bold;
    line-height: 1;
  }

  select {
    vertical-align: middle;
    padding: 0;
    margin: 0 0 3px 0;

    appearance: none;
    background: transparent;
    border: none;

    width: fit-content;
    height: 30px;

    color: gray !important;
  }

  textarea {
    width: 100%;
  }

  .katex-display {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    overflow-x: auto;
    overflow-y: hidden;
  }
`

const MarkdownScrollWrapper = styled.div`
  && {
    width: 100%;
    min-width: 0;
    margin: 0;
  }

  max-width: 100%;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: thin;
  scrollbar-color: #b0b0b5 transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #b0b0b5;
    border-radius: 6px;
  }
`

const MarkdownInlineScrollWrapper = styled.span`
  display: inline-block;
  max-width: 100%;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  vertical-align: bottom;

  img {
    display: block;
    max-width: none;
  }
`

const Editor = styled.textarea`
  touch-action: manipulation;
  -webkit-text-size-adjust: 100%;

  width: 100%;
  min-height: 100px;

  resize: none;
  overflow: hidden;
  scrollbar-width: none;

  margin: 10px;
  padding: 20px;

  border: none;
  background: transparent;

  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
`
