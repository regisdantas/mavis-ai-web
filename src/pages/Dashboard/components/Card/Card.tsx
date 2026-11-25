import React from 'react'
import styled from 'styled-components'
import { UserAuth } from '../../../../context/AuthContext'
import { isJsonString, formatDate } from '../../../../utils'
import CardHeader from './CardHeader'
import CardContent from './CardContent'
import CardActions from './CardActions'
import CardTags from './CardTags'

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
  notesLocked: boolean

  onDeleteCard: (id: string, permanent?: boolean) => void
  onChangeContent: (id: string, content: string) => Promise<void>
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
  notesLocked,
  onDeleteCard,
  onChangeContent,
  onChangeDate,
  tags,
  selected,
  onToggleSelection,
  templateOptions,
}) => {
  const [editingContent, setEditingContent] = React.useState(false)
  const [showColorPicker, setShowColorPicker] = React.useState(false)
  const [showTemplatePicker, setShowTemplatePicker] = React.useState(false)
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const markdownRef = React.useRef<HTMLDivElement>(null)
  const titleRef = React.useRef<HTMLSpanElement>(null)
  const tagPickerRef = React.useRef<HTMLDivElement>(null)
  const otherTagsDropdownRef = React.useRef<HTMLDetailsElement>(null)
  const colorPickerRef = React.useRef<HTMLDivElement>(null)
  const templatePickerRef = React.useRef<HTMLDivElement>(null)
  const tagDropdownRef = React.useRef<HTMLDivElement>(null)
  const colorDropdownRef = React.useRef<HTMLDivElement>(null)
  const templateDropdownRef = React.useRef<HTMLDivElement>(null)
  const aiPromptRef = React.useRef<HTMLDivElement>(null)
  const aiPromptDropdownRef = React.useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1260)
  const { user } = UserAuth()
  const { temperature, weather, location } = useLocationData()
  const { setCursorPosition, findBestCursorPosition } = useTextareaCaret({
    editing: editingContent,
    textareaRef,
  })

  useCardClickOutside({
    tagPickerRef,
    tagDropdownRef,
    otherTagsDropdownRef,
    colorPickerRef,
    colorDropdownRef,
    templatePickerRef,
    templateDropdownRef,
    aiPromptRef,
    aiPromptDropdownRef,
    closeTagPicker: () => {
      setShowTagPicker(false)
      setCreatingTag(false)
    },
    closeColorPicker: () => {
      setShowColorPicker(false)
    },
    closeTemplatePicker: () => {
      setShowTemplatePicker(false)
    },
    closeAIPrompt: () => {
      closeAssistant()
    },
  })

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1260)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const archiveNote = () => {
    if (notesLocked) return

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
  const readOnly = notesLocked

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
      if (readOnly) return

      onChangeContent(
        id,
        JSON.stringify({
          ...objContent,
          tags,
        })
      )
    },
  })

  const localProcessMacros = React.useCallback(
    (text: string) => {
      if (!hasTag('templates')) {
        return processMacros(text, {
          weather,
          temperature,
          city: location.city,
          country: location.country,
        })
      }

      return text
    },
    [hasTag, location.city, location.country, temperature, weather]
  )

  const [value, setValue] = React.useState(objContent.text || '')
  const [history, setHistory] = React.useState<string[]>([])
  const savedDraftRef = React.useRef({
    text: objContent.text || '',
    title: objContent.title || '',
  })

  React.useEffect(() => {
    savedDraftRef.current = {
      text: objContent.text || '',
      title: objContent.title || '',
    }
  }, [objContent.text, objContent.title])

  const saveCurrentDraft = React.useCallback(
    (nextText?: string, nextTitle?: string) => {
      const currentText = nextText ?? (editingContent ? textareaRef.current?.value ?? value : value)
      const currentTitle = nextTitle ?? titleRef.current?.innerText ?? objContent.title ?? ''
      const savedText = localProcessMacros(currentText)
      const savedTitle = localProcessMacros(currentTitle)
      const previousDraft = savedDraftRef.current

      if (previousDraft.text === savedText && previousDraft.title === savedTitle) {
        return
      }

      savedDraftRef.current = { text: savedText, title: savedTitle }
      setValue(savedText)

      void onChangeContent(
        id,
        JSON.stringify({
          ...objContent,
          text: savedText,
          title: savedTitle,
        })
      ).catch((error) => {
        console.error('Failed to autosave note.', error)

        if (
          savedDraftRef.current.text === savedText &&
          savedDraftRef.current.title === savedTitle
        ) {
          savedDraftRef.current = previousDraft
        }
      })
    },
    [editingContent, id, localProcessMacros, objContent, onChangeContent, value]
  )

  React.useEffect(() => {
    if (!editingContent || readOnly) {
      return
    }

    const timeout = window.setTimeout(() => saveCurrentDraft(), 500)

    return () => window.clearTimeout(timeout)
  }, [editingContent, readOnly, saveCurrentDraft, value])

  React.useEffect(() => {
    const saveBeforeLeaving = () => saveCurrentDraft()
    const saveWhenHidden = () => {
      if (document.visibilityState === 'hidden') {
        saveCurrentDraft()
      }
    }

    document.addEventListener('visibilitychange', saveWhenHidden)
    window.addEventListener('pagehide', saveBeforeLeaving)
    window.addEventListener('beforeunload', saveBeforeLeaving)

    return () => {
      document.removeEventListener('visibilitychange', saveWhenHidden)
      window.removeEventListener('pagehide', saveBeforeLeaving)
      window.removeEventListener('beforeunload', saveBeforeLeaving)
    }
  }, [saveCurrentDraft])

  React.useEffect(() => {
    if (!readOnly) return

    setShowColorPicker(false)
    setShowTemplatePicker(false)
    setShowTagPicker(false)
    setCreatingTag(false)

    if (otherTagsDropdownRef.current) {
      otherTagsDropdownRef.current.open = false
    }

    if (editingContent) {
      textareaRef.current?.blur()
    }
  }, [
    editingContent,
    readOnly,
    setCreatingTag,
    setShowTagPicker,
    setShowColorPicker,
    setShowTemplatePicker,
  ])

  const pushHistory = React.useCallback((currentText: string) => {
    setHistory((h) => {
      if (h[h.length - 1] === currentText) {
        return h
      }

      return [...h, currentText]
    })
  }, [])

  const {
    aiLoading,
    assistantOpen,
    instruction,
    setInstruction,
    apiKeyInput,
    setApiKeyInput,
    requiresApiKey,
    error: aiError,
    openAssistant,
    closeAssistant,
    clearInstruction,
    submitInstruction,
  } = useNoteAI({
    userId: user?.uid,
    value,
    textareaRef,
    pushHistory,
    onContentChange: (updated) => {
      if (readOnly) return

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
    if (readOnly) return

    pushHistory(value)
    let text = option.text.replace(/\\\$\{/g, '${')
    text = localProcessMacros(text)

    const mergedTags = Array.from(new Set([...(objContent.tags || []), ...(option.tags || [])]))

    void onChangeContent(
      id,
      JSON.stringify({
        ...objContent,
        collapsed: false,
        color: option.color,
        text,
        title: localProcessMacros(option.title),
        tags: mergedTags,
      })
    )
    setValue(text)

    setShowTemplatePicker(false)
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
    if (readOnly) return

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
    if (readOnly) return

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
    if (readOnly) return

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

  return (
    <CardContainer key={id} selected={selected}>
      <div className="ContentContainer" style={{ backgroundColor: objContent.color || '#eee' }}>
        <CardHeader
          title={objContent.title}
          titleRef={titleRef}
          readOnly={notesLocked}
          collapsed={objContent.collapsed}
          selected={selected}
          onToggleSelection={() => onToggleSelection(id)}
          isFavorite={hasTag('favorite')}
          copyFormattedContent={copyFormattedContent}
          onToggleFavorite={() => {
            if (!readOnly) toggleTag('favorite')
          }}
          onToggleCollapse={() => {
            void onChangeContent(
              id,
              JSON.stringify({
                ...objContent,
                collapsed: !objContent.collapsed,
              })
            )
          }}
          onTitleChange={(title) => saveCurrentDraft(undefined, title)}
        />

        {!objContent.collapsed && (
          <CardContent
            value={value}
            readOnly={readOnly}
            editing={editingContent}
            textareaRef={textareaRef}
            markdownRef={markdownRef}
            setValue={setValue}
            setEditing={setEditingContent}
            processMarkdown={processAndDisplayMarkdown}
            onExecuteExpression={handleExecuteExpression}
            onSave={() => saveCurrentDraft(textareaRef.current?.value ?? value)}
            onMarkdownClick={(clickedText, sourceOffset) => {
              if (readOnly) return

              pushHistory(value)

              const pos = sourceOffset ?? findBestCursorPosition(clickedText, value)

              setCursorPosition(pos)
              setEditingContent(true)
            }}
          />
        )}
        <footer className="footer">
          <span className="footbox">
            <CardTags
              tagDropdownRef={tagDropdownRef}
              otherTagsDropdownRef={otherTagsDropdownRef}
              date={date}
              tags={objContent.tags}
              availableTags={tags}
              readOnly={readOnly}
              tagPickerRef={tagPickerRef}
              showTagPicker={showTagPicker}
              creatingTag={creatingTag}
              newTagName={newTagName}
              setShowTagPicker={setShowTagPicker}
              setCreatingTag={setCreatingTag}
              setNewTagName={setNewTagName}
              onDateChange={(newDate) => {
                if (!readOnly) {
                  onChangeDate(id, newDate)
                }
              }}
              hasTag={hasTag}
              toggleTag={toggleTag}
              createTag={createTag}
              formatTag={formatTag}
              formatDate={formatDate}
            />

            <CardActions
              colorDropdownRef={colorDropdownRef}
              templateDropdownRef={templateDropdownRef}
              aiPromptRef={aiPromptRef}
              aiPromptDropdownRef={aiPromptDropdownRef}
              readOnly={readOnly}
              aiLoading={aiLoading}
              isArchived={hasTag('archive')}
              isTrash={hasTag('trash')}
              showColorPicker={showColorPicker}
              showTemplatePicker={showTemplatePicker}
              colorPickerRef={colorPickerRef}
              templatePickerRef={templatePickerRef}
              noteColors={noteColors}
              templateOptions={templateOptions}
              undoLastChange={undoLastChange}
              assistantOpen={assistantOpen}
              instruction={instruction}
              setInstruction={setInstruction}
              apiKeyInput={apiKeyInput}
              setApiKeyInput={setApiKeyInput}
              requiresApiKey={requiresApiKey}
              aiError={aiError}
              openAssistant={() => {
                if (!readOnly) {
                  void openAssistant()
                }
              }}
              closeAssistant={closeAssistant}
              clearInstruction={clearInstruction}
              submitInstruction={submitInstruction}
              archiveNote={() => {
                if (!readOnly) {
                  archiveNote()
                }
              }}
              trashNote={() => {
                if (!readOnly) {
                  trashNote()
                }
              }}
              setShowColorPicker={setShowColorPicker}
              setShowTemplatePicker={setShowTemplatePicker}
              onColorSelected={(selectedColor) => {
                if (readOnly) return

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

  div {
    margin-left: 10px;
    width: 100%;
  }

  .ContentContainer {
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid rgba(0, 0, 0, 0.2);

    width: 100%;
    border-radius: 0px;
    margin: 0;

    .footer {
      width: 100%;
      height: 44px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      border-bottom: 2px solid rgba(0, 0, 0, 0.2);
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
