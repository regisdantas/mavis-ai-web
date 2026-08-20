import React from 'react'
import styled from 'styled-components'
import { UserAuth } from '../../../../context/AuthContext'
import { isJsonString, formatDate } from '../../../../utils'
import CardHeader from './CardHeader'
import CardContent from './CardContent'
import CardActions from './CardActions'
import CardTags from './CardTags'

import { useSpeechRecognition } from '../../../../hooks/useSpeechRecognition'
import { useTextToSpeech } from '../../../../hooks/useTextToSpeech'
import { TemplateOption } from '../../utils/cardUtils'
import { processMacros } from '../../../../services/templateMacros'
import { renderTemplate, executeExpression } from '../../../../services/templateEngine'

import {
  noteColors,
  parseNoteContent,
  getArchiveTags,
  getTrashTags,
  formatTag,
} from '../../utils/cardUtils'

import { useLocationData } from '../../hooks/useLocationData'
import { useCardClickOutside } from '../../hooks/useCardClickOutside'
import { useTextareaCaret } from '../../hooks/useTextareaCaret'
import { useNoteAI } from '../../hooks/useNoteAI'
import { useNoteTags } from '../../hooks/useNoteTags'

interface ICardProps {
  id: string
  number: number
  date: string
  content: string

  onDeleteCard: (id: string, permanent?: boolean) => void
  onChangeContent: (id: string, content: string) => void
  onChangeDate: (id: string, date: string) => void

  tags: string[]
  selected: boolean
  onToggleSelection: (id: string) => void
  templateOptions: TemplateOption[]
}

export const Card: React.FC<ICardProps> = ({
  id,
  date,
  content,
  onDeleteCard,
  onChangeContent,
  onChangeDate,
  tags,
  selected,
  onToggleSelection,
  templateOptions,
}) => {
  const { listening, transcript, startListening, stopListening } = useSpeechRecognition()
  const { speak, speaking, stopSpeaking } = useTextToSpeech()
  const [editingContent, setEditingContent] = React.useState(false)
  const [showColorPicker, setShowColorPicker] = React.useState(false)
  const [showTemplatePicker, setShowTemplatePicker] = React.useState(false)
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const markdownRef = React.useRef<HTMLDivElement>(null)
  const tagPickerRef = React.useRef<HTMLDivElement>(null)
  const colorPickerRef = React.useRef<HTMLDivElement>(null)
  const templatePickerRef = React.useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1260)
  const { user } = UserAuth()
  const { temperature, weather, location } = useLocationData()
  const { setCursorPosition, findBestCursorPosition } = useTextareaCaret({
    editing: editingContent,
    textareaRef,
  })

  // useCardClickOutside({
  //   tagPickerRef,
  //   colorPickerRef,
  //   templatePickerRef,
  //   closeTagPicker: () => {
  //     setShowTagPicker(false)
  //     setCreatingTag(false)
  //   },
  //   closeColorPicker: () => {
  //     setShowColorPicker(false)
  //   },
  //   closeTemplatePicker: () => {
  //     setShowTemplatePicker(false)
  //   },
  // })

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1260)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const archiveNote = () => {
    const updatedTags = getArchiveTags(objContent.tags)

    onChangeContent(
      id,
      JSON.stringify({
        ...objContent,
        tags: updatedTags,
      })
    )
  }

  const objContent = React.useMemo(() => parseNoteContent(content, isJsonString), [content])

  const {
    showTagPicker,
    creatingTag,
    newTagName,

    setShowTagPicker,
    setCreatingTag,
    setNewTagName,

    hasTag,
    toggleTag,
    createTag,
  } = useNoteTags({
    tags: objContent.tags,
    onTagsChange: (tags) => {
      onChangeContent(
        id,
        JSON.stringify({
          ...objContent,
          tags,
        })
      )
    },
  })

  const [value, setValue] = React.useState(objContent.text || '')
  const [history, setHistory] = React.useState<string[]>([])

  const pushHistory = React.useCallback((currentText: string) => {
    setHistory((h) => {
      if (h[h.length - 1] === currentText) {
        return h
      }

      return [...h, currentText]
    })
  }, [])

  const { aiLoading, handleAI } = useNoteAI({
    userId: user?.uid,
    value,
    textareaRef,
    pushHistory,
    onContentChange: (updated) => {
      setValue(updated)

      onChangeContent(
        id,
        JSON.stringify({
          ...objContent,
          text: updated,
        })
      )
    },
  })

  const setTemplate = (option: TemplateOption) => {
    pushHistory(value)
    let text = option.text.replace(/\\\$\{/g, '${')
    text = localProcessMacros(text)

    if (!objContent.locked) {
      const mergedTags = Array.from(new Set([...(objContent.tags || []), ...(option.tags || [])]))

      onChangeContent(
        id,
        JSON.stringify({
          ...objContent,
          collapsed: false,
          color: option.color,
          text: text,
          title: localProcessMacros(option.title),
          tags: mergedTags,
        })
      )
      setValue(text)
    }
  }

  const processAndDisplayMarkdown = (text: string) =>
    renderTemplate(
      text,
      {
        temperature,
        weather,
        city: location.city,
        country: location.country,
      },
      isMobile
    )

  const handleExecuteExpression = (expression: string) => {
    pushHistory(value)
    const newText = executeExpression(value, expression, {
      temperature,
      weather,
      city: location.city,
      country: location.country,
    })

    setValue(newText)

    onChangeContent(
      id,
      JSON.stringify({
        ...objContent,
        text: newText,
      })
    )
  }

  const trashNote = () => {
    if (hasTag('trash')) {
      onDeleteCard(id, true)
      return
    }

    const updatedTags = getTrashTags(objContent.tags)

    onChangeContent(
      id,
      JSON.stringify({
        ...objContent,
        tags: updatedTags,
      })
    )
  }

  const localProcessMacros = (text: string) => {
    if (!hasTag('templates')) {
      return processMacros(text, {
        weather,
        temperature,
        city: location.city,
        country: location.country,
      })
    }
    return text
  }

  const onChangeMarkdownContent = (id: string, newText: string) => {
    const processedText = localProcessMacros(newText)

    onChangeContent(
      id,
      JSON.stringify({
        ...objContent,
        text: processedText,
      })
    )

    setValue(processedText)
  }

  const copyFormattedContent = async () => {
    if (!markdownRef.current) {
      return
    }

    const html = markdownRef.current.innerHTML
    const text = markdownRef.current.innerText

    await navigator.clipboard.write([
      new ClipboardItem({
        'text/html': new Blob([html], { type: 'text/html' }),
        'text/plain': new Blob([text], { type: 'text/plain' }),
      }),
    ])
  }

  const undoLastChange = () => {
    const previous = history[history.length - 1]

    if (!previous) {
      return
    }

    setHistory((h) => h.slice(0, -1))

    setValue(previous)

    onChangeContent(
      id,
      JSON.stringify({
        ...objContent,
        text: previous,
      })
    )
  }

  React.useEffect(() => {
    if (!listening && transcript) {
      pushHistory(value)

      const updated = value + transcript

      onChangeContent(
        id,
        JSON.stringify({
          ...objContent,
          text: updated,
        })
      )

      setValue(updated)
    }
  }, [listening, transcript, value, id, objContent, pushHistory, onChangeContent])

  const isLocked = objContent.locked

  return (
    <CardContainer key={id} selected={selected}>
      <div className="ContentContainer" style={{ backgroundColor: objContent.color || '#eee' }}>
        <CardHeader
          title={objContent.title}
          locked={objContent.locked}
          collapsed={objContent.collapsed}
          selected={selected}
          onToggleSelection={() => onToggleSelection(id)}
          speaking={speaking}
          isFavorite={hasTag('favorite')}
          speak={() => speak(value)}
          stopSpeaking={stopSpeaking}
          copyFormattedContent={copyFormattedContent}
          onToggleFavorite={() => toggleTag('favorite')}
          onToggleLock={() =>
            onChangeContent(
              id,
              JSON.stringify({
                ...objContent,
                locked: !objContent.locked,
              })
            )
          }
          onToggleCollapse={() =>
            onChangeContent(
              id,
              JSON.stringify({
                ...objContent,
                collapsed: !objContent.collapsed,
              })
            )
          }
          onTitleChange={(title) =>
            onChangeContent(
              id,
              JSON.stringify({
                ...objContent,
                title: localProcessMacros(title),
              })
            )
          }
        />

        {!objContent.collapsed ? (
          <>
            <CardContent
              value={value}
              locked={objContent.locked}
              editing={editingContent}
              textareaRef={textareaRef}
              markdownRef={markdownRef}
              setValue={setValue}
              setEditing={setEditingContent}
              processMarkdown={processAndDisplayMarkdown}
              onExecuteExpression={handleExecuteExpression}
              onSave={() => onChangeMarkdownContent(id, value)}
              onMarkdownClick={(clickedText) => {
                pushHistory(value)

                const pos = findBestCursorPosition(clickedText, value)

                setCursorPosition(pos)
                setEditingContent(true)
              }}
            />
            <footer className="footer">
              <span className="footbox">
                <CardTags
                  date={date}
                  tags={objContent.tags}
                  availableTags={tags}
                  isLocked={isLocked}
                  tagPickerRef={tagPickerRef}
                  showTagPicker={showTagPicker}
                  creatingTag={creatingTag}
                  newTagName={newTagName}
                  setShowTagPicker={setShowTagPicker}
                  setCreatingTag={setCreatingTag}
                  setNewTagName={setNewTagName}
                  onDateChange={(newDate) => onChangeDate(id, newDate)}
                  hasTag={hasTag}
                  toggleTag={toggleTag}
                  createTag={createTag}
                  formatTag={formatTag}
                  formatDate={formatDate}
                />

                <CardActions
                  isLocked={isLocked}
                  listening={listening}
                  aiLoading={aiLoading}
                  isArchived={hasTag('archive')}
                  isTrash={hasTag('trash')}
                  showColorPicker={showColorPicker}
                  showTemplatePicker={showTemplatePicker}
                  colorPickerRef={colorPickerRef}
                  templatePickerRef={templatePickerRef}
                  noteColors={noteColors}
                  templateOptions={templateOptions}
                  startListening={() => {
                    if (!objContent.locked) {
                      startListening()
                    }
                  }}
                  stopListening={stopListening}
                  undoLastChange={undoLastChange}
                  handleAI={() => {
                    if (!objContent.locked) {
                      handleAI()
                    }
                  }}
                  archiveNote={() => {
                    if (!objContent.locked) {
                      archiveNote()
                    }
                  }}
                  trashNote={() => {
                    if (!objContent.locked) {
                      trashNote()
                    }
                  }}
                  setShowColorPicker={setShowColorPicker}
                  setShowTemplatePicker={setShowTemplatePicker}
                  onColorSelected={(selectedColor) => {
                    onChangeContent(
                      id,
                      JSON.stringify({
                        ...objContent,
                        color: selectedColor,
                      })
                    )

                    setShowColorPicker(false)
                  }}
                  onTemplateSelected={setTemplate}
                />
              </span>
            </footer>
          </>
        ) : (
          <></>
        )}
      </div>
    </CardContainer>
  )
}

const CardContainer = styled.div<{ selected: boolean }>`
box-shadow: ${({ selected }) => (selected ? '0 0 0 3px #2563eb' : 'none')};  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px;
  margin: 10px 0px 0px 0px;

  background-color: #757575;
  border-radius: 5px;

  div {
    margin-left: 10px;
    width: 100%;
  }

  .ContentContainer {
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    border-radius: 5px 5px 0px 0px;
    margin: 0;

    .footer {
      width: 100%;
      height: 44px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      border-bottom: 1px solid lightgray;
      padding: 10px;

      svg {
        margin: 0;
        cursor: pointer;
        height: 18px;
      }
    }

    .footbox {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 0;
    }

    .ActionContainer {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: 4px;
      p {
        cursor: pointer;
        display: flex;
        align-items: center;
        * {
          margin-right: 5px;
        }
      }
    }

    .ContentContainer .date {
    display: flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 999px;
    background: rgba(79, 70, 229, 0.12);
    color: #4338ca;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
  }

`
