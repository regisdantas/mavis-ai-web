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

interface ButtonCommandProps {
  label: string
  expression: string
  onExecute: (expression: string) => void
}

const ButtonCommand: React.FC<ButtonCommandProps> = ({ label, expression, onExecute }) => (
  <button className="markdownButton" onClick={() => onExecute(expression)}>
    {label}
  </button>
)

interface CardContentProps {
  value: string
  locked: boolean
  editing: boolean
  textareaRef: React.RefObject<HTMLTextAreaElement>
  markdownRef: React.RefObject<HTMLDivElement>

  setValue: (value: string) => void
  setEditing: (value: boolean) => void

  onSave: () => void
  onMarkdownClick: (clickedText: string) => void

  processMarkdown: (text: string) => string
  onExecuteExpression: (expression: string) => void
}

const CardContent: React.FC<CardContentProps> = ({
  value,
  locked,
  editing,
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
        placeholder={`* ❓ What do you have for today?

<markdown editor>`}
        autoFocus
        value={value || ''}
        onFocus={(e) => {
          const el = e.currentTarget
          el.style.height = 'auto'
          el.style.height = `${el.scrollHeight}px`
        }}
        onChange={(e) => {
          const el = e.currentTarget
          el.style.height = `${el.scrollHeight}px`

          setValue(e.target.value)
        }}
        onBlur={(e) => {
          const related = e.relatedTarget as HTMLElement | null

          if (related?.dataset?.keepeditor === 'true') {
            return
          }

          onSave()
          setEditing(false)
        }}
      />
    )
  }

  return (
    <MarkdownContainer
      ref={markdownRef}
      onClick={(e) => {
        if (locked) {
          return
        }

        const target = e.target as HTMLElement

        onMarkdownClick(target.innerText || target.textContent || '')
      }}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          button(props) {
            const expression = decodeURIComponent(
              String((props.node as any)?.properties?.dataExpression ?? '')
            )

            return (
              <ButtonCommand
                label={String(props.children)}
                expression={expression}
                onExecute={onExecuteExpression}
              />
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
        {processMarkdown(value || '* ❓ What do you have for today?')}
      </ReactMarkdown>
    </MarkdownContainer>
  )
}

export default CardContent

const MarkdownContainer = styled.div`
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
    white-space: pre-wrap;
    word-break: break-word;
    overflow-wrap: break-word;
  }

  hr {
    color: #919699;
    width: 100%;
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
    display: inline-table;
    width: auto;

    border-top: 1px solid #919699;
    border-left: 1px solid #919699;
    border-spacing: 0;

    margin: 0;
    margin-bottom: 20px;
    margin-right: 10px;

    @media (max-width: 1260px) {
      width: 100%;
    }
  }

  table th {
    padding: 4px 8px;
    background: #e2e2e2;
    font-size: 12px;

    border-bottom: 1px solid #919699;
    border-right: 1px solid #919699;

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

    border-bottom: 1px solid #919699;
    border-right: 1px solid #919699;

    @media (max-width: 1260px) {
      white-space: pre-wrap;
      overflow-wrap: break-word;
    }
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
    display: inline-block;
    vertical-align: start;
    margin: 0 6px 0 0;
    width: 14px;
    height: 14px;
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

  img {
    max-width: 45vw;
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
