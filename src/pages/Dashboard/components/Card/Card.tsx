import React from 'react'
import styled from 'styled-components'
import { isJsonString, formatDate } from '../../../../utils'
import CardHeader from './CardHeader'
import CardContent from './CardContent'
import CardTags from './CardTags'

import { TemplateOption } from '../../utils/cardUtils'
import { processMacros } from '../../../../services/templateMacros'
import { renderTemplate, executeExpression } from '../../../../services/templateEngine'

import {
  getNoteDisplayColor,
  noteColors,
  parseNoteContent,
  formatTag,
} from '../../utils/cardUtils'

import { useLocationData } from '../../hooks/useLocationData'
import { useCardClickOutside } from '../../hooks/useCardClickOutside'
import { useTextareaCaret } from '../../hooks/useTextareaCaret'
import { useNoteTags } from '../../hooks/useNoteTags'
import { useTheme } from '../../../../context/ThemeContext'

interface PendingTextareaSelection {
  start: number
  end: number
  direction: HTMLTextAreaElement['selectionDirection']
  scrollTop: number
}

const mapCaretPosition = (previousText: string, nextText: string, position: number) => {
  let commonPrefixLength = 0

  while (
    commonPrefixLength < previousText.length &&
    commonPrefixLength < nextText.length &&
    previousText[commonPrefixLength] === nextText[commonPrefixLength]
  ) {
    commonPrefixLength += 1
  }

  let commonSuffixLength = 0

  while (
    commonSuffixLength < previousText.length - commonPrefixLength &&
    commonSuffixLength < nextText.length - commonPrefixLength &&
    previousText[previousText.length - 1 - commonSuffixLength] ===
      nextText[nextText.length - 1 - commonSuffixLength]
  ) {
    commonSuffixLength += 1
  }

  if (position <= commonPrefixLength) {
    return position
  }

  const previousSuffixStart = previousText.length - commonSuffixLength

  if (position >= previousSuffixStart) {
    return position + nextText.length - previousText.length
  }

  return nextText.length - commonSuffixLength
}

interface ICardProps {
  id: string
  number: number
  date: string
  content: string
  emoji?: string
  searchContent: string
  fuzzySearchEnabled: boolean
  notesLocked: boolean

  onChangeContent: (id: string, content: string) => Promise<void>
  onChangeEmoji: (id: string, emoji: string) => Promise<void>
  onChangeDate: (id: string, date: string) => void
  onDuplicateNote: (id: string) => Promise<void>
  onArchiveNote: (id: string) => Promise<void>
  onDeleteNote: (id: string) => Promise<void>

  tags: string[]
  selected: boolean
  onToggleSelection: (id: string) => void
  templateOptions: TemplateOption[]
  onEditorFocus: (id: string, textarea: HTMLTextAreaElement) => void
  onEditorBlur: (id: string, textarea: HTMLTextAreaElement) => void
}

export const Card: React.FC<ICardProps> = ({
  id,
  date,
  content,
  emoji,
  searchContent,
  fuzzySearchEnabled,
  notesLocked,
  onChangeContent,
  onChangeEmoji,
  onChangeDate,
  onDuplicateNote,
  onArchiveNote,
  onDeleteNote,
  tags,
  selected,
  onToggleSelection,
  templateOptions,
  onEditorFocus,
  onEditorBlur,
}) => {
  const [editingContent, setEditingContent] = React.useState(false)
  const [toolboxOpen, setToolboxOpen] = React.useState(false)
  const [showColorPicker, setShowColorPicker] = React.useState(false)
  const [showTemplatePicker, setShowTemplatePicker] = React.useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = React.useState(false)
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const markdownRef = React.useRef<HTMLDivElement>(null)
  const titleRef = React.useRef<HTMLSpanElement>(null)
  const tagPickerRef = React.useRef<HTMLDivElement>(null)
  const colorPickerRef = React.useRef<HTMLDivElement>(null)
  const templatePickerRef = React.useRef<HTMLDivElement>(null)
  const toolboxRef = React.useRef<HTMLDivElement>(null)
  const emojiPickerRef = React.useRef<HTMLDivElement>(null)
  const emojiDropdownRef = React.useRef<HTMLDivElement>(null)
  const tagDropdownRef = React.useRef<HTMLDivElement>(null)
  const colorDropdownRef = React.useRef<HTMLDivElement>(null)
  const templateDropdownRef = React.useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1260)
  const { darkMode } = useTheme()
  const { temperature, weather, location } = useLocationData()
  const { setCursorPosition, findBestCursorPosition } = useTextareaCaret({
    editing: editingContent,
    textareaRef,
  })

  useCardClickOutside({
    tagPickerRef,
    tagDropdownRef,
    colorPickerRef,
    colorDropdownRef,
    templatePickerRef,
    templateDropdownRef,
    toolboxRef,
    emojiPickerRef,
    emojiDropdownRef,
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
    closeEmojiPicker: () => {
      setShowEmojiPicker(false)
    },
    closeToolbox: () => {
      setToolboxOpen(false)
    },
  })

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1260)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const objContent = React.useMemo(() => parseNoteContent(content, isJsonString), [content])
  const noteColor = typeof objContent.color === 'string' ? objContent.color || '#eee' : '#eee'
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
  const pendingTextareaSelectionRef = React.useRef<PendingTextareaSelection | null>(null)
  const previousPersistedTextRef = React.useRef(objContent.text || '')
  const savedDraftRef = React.useRef({
    text: objContent.text || '',
    title: objContent.title || '',
  })
  const updateEditorValue = React.useCallback(
    (nextText: string) => {
      const textarea = textareaRef.current

      if (
        editingContent &&
        textarea &&
        document.activeElement === textarea &&
        textarea.value !== nextText
      ) {
        const previousText = textarea.value

        pendingTextareaSelectionRef.current = {
          start: mapCaretPosition(previousText, nextText, textarea.selectionStart),
          end: mapCaretPosition(previousText, nextText, textarea.selectionEnd),
          direction: textarea.selectionDirection,
          scrollTop: textarea.scrollTop,
        }
      }

      setValue((currentValue) => (currentValue === nextText ? currentValue : nextText))
    },
    [editingContent]
  )

  React.useLayoutEffect(() => {
    const pendingSelection = pendingTextareaSelectionRef.current

    if (!pendingSelection) {
      return
    }

    const textarea = textareaRef.current

    if (!editingContent || !textarea) {
      pendingTextareaSelectionRef.current = null
      return
    }

    pendingTextareaSelectionRef.current = null
    const textLength = textarea.value.length
    textarea.setSelectionRange(
      Math.min(pendingSelection.start, textLength),
      Math.min(pendingSelection.end, textLength),
      pendingSelection.direction
    )
    textarea.scrollTop = pendingSelection.scrollTop
  }, [editingContent, value])

  React.useEffect(() => {
    savedDraftRef.current = {
      text: objContent.text || '',
      title: objContent.title || '',
    }
  }, [objContent.text, objContent.title])

  React.useEffect(() => {
    const persistedText = objContent.text || ''
    const previousPersistedText = previousPersistedTextRef.current

    if (previousPersistedText !== persistedText) {
      previousPersistedTextRef.current = persistedText

      if (!editingContent || value === previousPersistedText) {
        updateEditorValue(persistedText)
      }
    }
  }, [editingContent, objContent.text, updateEditorValue, value])

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
      updateEditorValue(savedText)

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
    [editingContent, id, localProcessMacros, objContent, onChangeContent, updateEditorValue, value]
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
    setShowEmojiPicker(false)
    setShowTagPicker(false)
    setCreatingTag(false)
    setToolboxOpen(false)

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
    setShowEmojiPicker,
    setToolboxOpen,
  ])

  const setTemplate = (option: TemplateOption) => {
    if (readOnly) return

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
    setToolboxOpen(false)
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

  return (
    <CardContainer
      key={id}
      selected={selected}
      $overlayOpen={toolboxOpen || showColorPicker || showTemplatePicker || showEmojiPicker}
    >
      <div
        className="ContentContainer"
        style={{ backgroundColor: getNoteDisplayColor(noteColor, darkMode) }}
      >
        <CardHeader
          title={objContent.title}
          emoji={emoji || ''}
          titleRef={titleRef}
          searchContent={searchContent}
          fuzzySearchEnabled={fuzzySearchEnabled}
          readOnly={notesLocked}
          collapsed={objContent.collapsed}
          isArchived={hasTag('archive')}
          isTrashed={hasTag('trash')}
          selected={selected}
          onToggleSelection={() => onToggleSelection(id)}
          toolboxOpen={toolboxOpen}
          setToolboxOpen={setToolboxOpen}
          showColorPicker={showColorPicker}
          showTemplatePicker={showTemplatePicker}
          showEmojiPicker={showEmojiPicker}
          setShowColorPicker={setShowColorPicker}
          setShowTemplatePicker={setShowTemplatePicker}
          setShowEmojiPicker={setShowEmojiPicker}
          toolboxRef={toolboxRef}
          emojiPickerRef={emojiPickerRef}
          emojiDropdownRef={emojiDropdownRef}
          colorPickerRef={colorPickerRef}
          templatePickerRef={templatePickerRef}
          colorDropdownRef={colorDropdownRef}
          templateDropdownRef={templateDropdownRef}
          noteColors={noteColors}
          templateOptions={templateOptions}
          onColorSelected={(selectedColor) => {
            if (readOnly) return

            void onChangeContent(
              id,
              JSON.stringify({
                ...objContent,
                color: selectedColor,
              })
            )
            setShowColorPicker(false)
            setToolboxOpen(false)
          }}
          onTemplateSelected={setTemplate}
          onEmojiSelected={(selectedEmoji) => {
            if (readOnly) return

            setShowEmojiPicker(false)
            void onChangeEmoji(id, selectedEmoji).catch((error) => {
              console.error('Failed to save note emoji.', error)
            })
          }}
          isFavorite={hasTag('favorite')}
          copyFormattedContent={copyFormattedContent}
          onDuplicateNote={() => {
            void onDuplicateNote(id)
          }}
          onArchiveNote={() => {
            void onArchiveNote(id)
          }}
          onDeleteNote={() => {
            void onDeleteNote(id)
          }}
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
            darkMode={darkMode}
            value={value}
            searchContent={searchContent}
            fuzzySearchEnabled={fuzzySearchEnabled}
            readOnly={readOnly}
            editing={editingContent}
            onEditorFocus={(textarea) => onEditorFocus(id, textarea)}
            onEditorBlur={(textarea) => onEditorBlur(id, textarea)}
            textareaRef={textareaRef}
            markdownRef={markdownRef}
            setValue={setValue}
            setEditing={setEditingContent}
            processMarkdown={processAndDisplayMarkdown}
            onExecuteExpression={handleExecuteExpression}
            onSave={() => saveCurrentDraft(textareaRef.current?.value ?? value)}
            onMarkdownClick={(clickedText, sourceOffset) => {
              if (readOnly) return

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
              date={date}
              tags={objContent.tags}
              searchContent={searchContent}
              fuzzySearchEnabled={fuzzySearchEnabled}
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
          </span>
        </footer>
      </div>
    </CardContainer>
  )
}

const CardContainer = styled.div<{ selected: boolean; $overlayOpen: boolean }>`
position: relative;
z-index: ${({ $overlayOpen }) => ($overlayOpen ? 10 : 'auto')};
box-shadow: ${({ selected }) => (selected ? '0 0 0 3px var(--mavis-brand)' : 'none')};  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px;
  margin: 10px 0px 0px 0px;

  background-color: var(--mavis-card-background);

  div {
    margin-left: 10px;
    width: 100%;
  }

  .ContentContainer {
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid var(--mavis-brand-border);

    width: 100%;
    border-radius: 0px;
    margin: 0;

    .footer {
      width: 100%;
      min-height: 44px;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      border-bottom: 2px solid var(--mavis-brand-border);
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
    background: var(--mavis-brand-soft);
    color: var(--mavis-text);
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
  }

`
