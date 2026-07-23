import React from 'react'
import { CardContainer } from './styles'
import {
  FiTrash2,
  FiLock,
  FiUnlock,
  FiStar,
  FiType,
  FiMic,
  FiVolume2,
  FiVolumeX,
} from 'react-icons/fi'
import { RxDividerVertical } from 'react-icons/rx'
import { MdOutlineColorLens } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'
import { IoMdArrowDropdown, IoMdArrowDropleft } from 'react-icons/io'
import { FiSend } from 'react-icons/fi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaRegCopy } from 'react-icons/fa6'

import { isJsonString } from '../../utils'
import { formatDate, limitInputLength } from '../../utils'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkEmoji from 'remark-emoji'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkToc from 'remark-toc'
import remarkBreaks from 'remark-breaks'
import stringWidth from 'string-width'
import FloatingColorPicker from '../FloatingColorPicker'
import { IconButton } from '../../styles/global'

import { useSpeechRecognition } from '../../hooks/useSpeechRecognition'
import { useTextToSpeech } from '../../hooks/useTextToSpeech'
import { useClickOutside } from '../../hooks/useClickOutside'
import FloatingTemplatePicker from '../FloatingTemplatePicker'

import { templateOptions, TemplateOption } from '../../utils'

interface ICardProps {
  id: string
  number: number
  date: string
  content: string
  onDeleteCard: any
  onChangeContent: any
}

const defaultContent = {
  title: '',
  type: 'record',
  text: '',
  color: '#fff',
  locked: false,
  favorite: false,
  pinned: false,
  collapsed: false,
}

const noteColors = [
  '#F8F9FA',
  '#CED4DA',
  '#FFF4B5',
  '#FFDCC8',
  '#FFCDD2',
  '#FADCE6',
  '#DCCCFB',
  '#BBDEFB',
  '#C8E6C9',
  '#B2DFDB',
  '#F3E5C8',
  '#D7CCC8',
]

const Card: React.FC<ICardProps> = ({
  id,
  date,
  content,
  onDeleteCard,
  onChangeContent,
}: ICardProps) => {
  const { listening, transcript, startListening, stopListening } = useSpeechRecognition()
  const { speak, speaking, stopSpeaking } = useTextToSpeech()
  const [editingContent, setEditingContent] = React.useState(false)
  const [showToolBox, setShowToolBox] = React.useState(false)
  const [showColorPicker, setShowColorPicker] = React.useState(false)
  const [showTemplatePicker, setShowTemplatePicker] = React.useState(false)

  const toolboxRef = React.useRef(null)
  const footboxRef = React.useRef(null)
  const objContent = isJsonString(content)
    ? JSON.parse(content)
    : { ...defaultContent, text: content }
  const [value, setValue] = React.useState(objContent.text || '')

  const closeToolBox = () => {
    setShowToolBox(false)
    setShowColorPicker(false)
    setShowTemplatePicker(false)
  }

  const setTemplate = (option: TemplateOption) => {
    closeToolBox()
    if (!objContent.locked) {
      onChangeContent(
        id,
        JSON.stringify({
          ...objContent,
          collapsed: false,
          color: option.color,
          text: option.text,
          title: option.title,
        })
      )
      setValue(option.text)
    }
  }

  useClickOutside(toolboxRef, () => closeToolBox())

  React.useEffect(() => {
    if (!listening) {
      onChangeContent(id, JSON.stringify({ ...objContent, text: objContent.text + transcript }))
      setValue(objContent.text + transcript)
    }
  }, [listening])

  return (
    <CardContainer key={id}>
      <div className="ContentContainer" style={{ backgroundColor: objContent.color || '#eee' }}>
        <header className="header">
          <strong className="titleBox">
            {objContent.favorite ? (
              <IconButton
                title="Unfavorite note"
                onClick={() =>
                  onChangeContent(id, JSON.stringify({ ...objContent, favorite: false }))
                }
              >
                <FaStar />
              </IconButton>
            ) : (
              <IconButton
                title="Favorite note"
                onClick={() =>
                  onChangeContent(id, JSON.stringify({ ...objContent, favorite: true }))
                }
              >
                <FiStar />
              </IconButton>
            )}
            {!showToolBox ? (
              <span
                className="title"
                title="Note name"
                role="textbox"
                contentEditable={!objContent.locked}
                suppressContentEditableWarning
                data-placeholder="🙋 Give me a name"
                onInput={(e) => limitInputLength(e, 40)}
                onBlur={(e) =>
                  onChangeContent(id, JSON.stringify({ ...objContent, title: e.target.innerText }))
                }
              >
                {objContent.title}
              </span>
            ) : (
              <span className="title"></span>
            )}
          </strong>

          <span ref={toolboxRef} className="toolbox">
            {showToolBox && (
              <>
                <IconButton
                  title="Delete note"
                  onClick={() => {
                    if (!objContent.locked) onDeleteCard(id)
                  }}
                >
                  <FiTrash2 />
                </IconButton>

                <RxDividerVertical />

                <IconButton
                  title="Change note background color"
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  onBlur={() => setShowColorPicker(false)}
                >
                  <MdOutlineColorLens />
                </IconButton>

                <IconButton
                  title="Load template"
                  onClick={() => setShowTemplatePicker(!showTemplatePicker)}
                  onBlur={() => setShowTemplatePicker(false)}
                >
                  <FiType />
                </IconButton>
              </>
            )}

            <IconButton
              title="Tool Box"
              onClick={() => setShowToolBox(!showToolBox)}
              onBlur={() => closeToolBox()}
            >
              <BsThreeDotsVertical />
            </IconButton>

            {objContent.locked ? (
              <IconButton
                title="Unlock note"
                onClick={() =>
                  onChangeContent(id, JSON.stringify({ ...objContent, locked: false }))
                }
              >
                <FiLock />
              </IconButton>
            ) : (
              <IconButton
                title="Lock note"
                onClick={() => onChangeContent(id, JSON.stringify({ ...objContent, locked: true }))}
              >
                <FiUnlock />
              </IconButton>
            )}

            {objContent.collapsed ? (
              <IconButton
                title="Expand note"
                onClick={() =>
                  onChangeContent(id, JSON.stringify({ ...objContent, collapsed: false }))
                }
              >
                <IoMdArrowDropleft />
              </IconButton>
            ) : (
              <IconButton
                title="Collapse note"
                onClick={() =>
                  onChangeContent(id, JSON.stringify({ ...objContent, collapsed: true }))
                }
              >
                <IoMdArrowDropdown />
              </IconButton>
            )}
          </span>
        </header>

        {!objContent.collapsed ? (
          <>
            {editingContent ? (
              <textarea
                className="reactMarkDown"
                placeholder={`* ❓ What do you have for today?


<markdown editor>`}
                onFocus={(e) => {
                  const el = e.currentTarget
                  el.style.height = 'auto'
                  el.style.height = `${el.scrollHeight}px`
                }}
                onChange={(e) => {
                  const el = e.currentTarget
                  el.style.height = 'auto'
                  el.style.height = `${el.scrollHeight}px`
                  setValue(e.target.value)
                }}
                autoFocus
                value={value || ''}
                onBlur={() => {
                  onChangeContent(id, JSON.stringify({ ...objContent, text: value }))
                  setEditingContent(false)
                }}
              />
            ) : (
              <div
                className="reactMarkDown"
                onClick={() => {
                  setEditingContent(!objContent.locked)
                }}
              >
                <ReactMarkdown
                  children={value || '* ❓ What do you have for today?'}
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
                />
              </div>
            )}
          </>
        ) : (
          <></>
        )}

        {showColorPicker && (
          <FloatingColorPicker
            colors={noteColors}
            onColorClicked={(selectedColor: string) => {
              onChangeContent(
                id,
                JSON.stringify({
                  ...objContent,
                  color: selectedColor,
                })
              )
              setShowColorPicker(false)
            }}
          />
        )}
        {showTemplatePicker ? (
          <FloatingTemplatePicker options={templateOptions} onPicked={setTemplate} />
        ) : (
          <></>
        )}

        <footer className="footer">
          <span ref={footboxRef} className="footbox">
            <span className="date">{formatDate(date)}</span>

            <span className="toolbox">
              {listening ? (
                <IconButton title="Stop listening" onClick={stopListening}>
                  <FiSend />
                </IconButton>
              ) : (
                <IconButton
                  title="Listen note"
                  onClick={() => {
                    if (!objContent.locked) startListening()
                  }}
                >
                  <FiMic />
                </IconButton>
              )}
              {speaking ? (
                <IconButton title="Stop hearing note" onClick={stopSpeaking}>
                  <FiVolumeX />
                </IconButton>
              ) : (
                <IconButton title="Hear note" onClick={() => speak(value)}>
                  <FiVolume2 />
                </IconButton>
              )}

              <IconButton title="Copy note" onClick={() => navigator.clipboard.writeText(value)}>
                <FaRegCopy />
              </IconButton>
            </span>
          </span>
        </footer>
      </div>
    </CardContainer>
  )
}

export default Card
