import React from 'react'
import styled from 'styled-components'
import {
  FiArchive,
  FiCopy,
  FiMoreVertical,
  FiSmile,
  FiStar,
  FiTrash2,
  FiType,
} from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import { IoMdArrowDropdown, IoMdArrowDropleft } from 'react-icons/io'
import { MdOutlineColorLens } from 'react-icons/md'
import { IconButton } from '../../../../styles/global'
import FloatingColorPicker from '../FloatingColorPicker'
import FloatingEmojiPicker from '../FloatingEmojiPicker'
import FloatingTemplatePicker from '../FloatingTemplatePicker'
import { TemplateOption } from '../../utils/cardUtils'
import { SearchHighlight } from '../SearchHighlight'

interface CardHeaderProps {
  title: string
  emoji: string
  titleRef: React.RefObject<HTMLSpanElement>
  searchContent: string
  fuzzySearchEnabled: boolean
  readOnly: boolean
  collapsed: boolean
  isFavorite: boolean
  isArchived: boolean
  isTrashed: boolean
  selected: boolean
  onToggleSelection: () => void

  toolboxOpen: boolean
  setToolboxOpen: React.Dispatch<React.SetStateAction<boolean>>
  showColorPicker: boolean
  showTemplatePicker: boolean
  showEmojiPicker: boolean
  setShowColorPicker: React.Dispatch<React.SetStateAction<boolean>>
  setShowTemplatePicker: React.Dispatch<React.SetStateAction<boolean>>
  setShowEmojiPicker: React.Dispatch<React.SetStateAction<boolean>>
  toolboxRef: React.RefObject<HTMLDivElement>
  emojiPickerRef: React.RefObject<HTMLDivElement>
  emojiDropdownRef: React.RefObject<HTMLDivElement>
  colorPickerRef: React.RefObject<HTMLDivElement>
  templatePickerRef: React.RefObject<HTMLDivElement>
  colorDropdownRef: React.RefObject<HTMLDivElement>
  templateDropdownRef: React.RefObject<HTMLDivElement>
  noteColors: string[]
  templateOptions: TemplateOption[]
  onColorSelected: (color: string) => void
  onTemplateSelected: (option: TemplateOption) => void
  onEmojiSelected: (emoji: string) => void

  copyFormattedContent: () => void

  onToggleFavorite: () => void
  onDuplicateNote: () => void
  onArchiveNote: () => void
  onDeleteNote: () => void
  onToggleCollapse: () => void
  onTitleChange: (title: string) => void
}

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  emoji,
  titleRef,
  searchContent,
  fuzzySearchEnabled,
  readOnly,
  collapsed,
  isFavorite,
  isArchived,
  isTrashed,
  selected,
  onToggleSelection,
  toolboxOpen,
  setToolboxOpen,
  showColorPicker,
  showTemplatePicker,
  showEmojiPicker,
  setShowColorPicker,
  setShowTemplatePicker,
  setShowEmojiPicker,
  toolboxRef,
  emojiPickerRef,
  emojiDropdownRef,
  colorPickerRef,
  templatePickerRef,
  colorDropdownRef,
  templateDropdownRef,
  noteColors,
  templateOptions,
  onColorSelected,
  onTemplateSelected,
  onEmojiSelected,
  copyFormattedContent,
  onToggleFavorite,
  onDuplicateNote,
  onArchiveNote,
  onDeleteNote,
  onToggleCollapse,
  onTitleChange,
}) => {
  return (
    <HeaderContainer>
      <TitleBox>
        <SelectButton
          title={selected ? 'Unselect note' : 'Select note'}
          onClick={onToggleSelection}
        >
          {selected ? '✓' : ''}
        </SelectButton>
        <EmojiPickerAnchor ref={emojiPickerRef}>
          <EmojiButton
            type="button"
            disabled={readOnly}
            title={emoji || 'Choose note emoji'}
            aria-label="Choose note emoji"
            aria-haspopup="dialog"
            aria-expanded={showEmojiPicker}
            onClick={() => setShowEmojiPicker((open) => !open)}
          >
            {emoji || <FiSmile />}
          </EmojiButton>
          {showEmojiPicker && (
            <FloatingEmojiPicker
              emoji={emoji}
              onEmojiSelected={onEmojiSelected}
              triggerRef={emojiPickerRef}
              dropdownRef={emojiDropdownRef}
            />
          )}
        </EmojiPickerAnchor>
        <Title
          ref={titleRef}
          title="Note name"
          role="textbox"
          contentEditable={!readOnly}
          suppressContentEditableWarning
          data-placeholder="🙋 Give me a name"
          onBlur={(e) => onTitleChange(e.currentTarget.innerText)}
        >
          <SearchHighlight
            text={title}
            query={searchContent}
            fuzzySearchEnabled={fuzzySearchEnabled}
          />
        </Title>
      </TitleBox>

      <Toolbox>
        {isFavorite ? (
          <IconButton disabled={readOnly} title="Remove favorite" onClick={onToggleFavorite}>
            <FaStar />
          </IconButton>
        ) : (
          <IconButton disabled={readOnly} title="Add favorite" onClick={onToggleFavorite}>
            <FiStar />
          </IconButton>
        )}
        <ToolboxWrapper ref={toolboxRef}>
          <ToolboxToggle
            type="button"
            disabled={readOnly}
            title="Options"
            aria-label="Options"
            aria-haspopup="menu"
            aria-expanded={toolboxOpen}
            onClick={() => setToolboxOpen((open) => !open)}
          >
            <FiMoreVertical />
          </ToolboxToggle>

          {toolboxOpen && (
            <ToolboxDropdown role="menu" aria-label="Options">
              <ToolboxMenuButton
                type="button"
                role="menuitem"
                title="Change note background color"
                disabled={readOnly}
                onClick={() => {
                  setShowColorPicker(true)
                  setShowTemplatePicker(false)
                  setToolboxOpen(false)
                }}
              >
                <MdOutlineColorLens />
                <span>Color</span>
              </ToolboxMenuButton>
              <ToolboxMenuButton
                type="button"
                role="menuitem"
                title="Apply template"
                disabled={readOnly || templateOptions.length === 0}
                onClick={() => {
                  setShowColorPicker(false)
                  setShowTemplatePicker(true)
                  setToolboxOpen(false)
                }}
              >
                <FiType />
                <span>Template</span>
              </ToolboxMenuButton>
              <ToolboxMenuSeparator role="separator" />
              <ToolboxMenuButton
                type="button"
                role="menuitem"
                title="Duplicate note"
                disabled={readOnly}
                onClick={() => {
                  setToolboxOpen(false)
                  onDuplicateNote()
                }}
              >
                <FiCopy />
                <span>Duplicate</span>
              </ToolboxMenuButton>
              <ToolboxMenuButton
                type="button"
                role="menuitem"
                title={isArchived ? 'Unarchive note' : 'Archive note'}
                disabled={readOnly}
                onClick={() => {
                  setToolboxOpen(false)
                  onArchiveNote()
                }}
              >
                <FiArchive />
                <span>{isArchived ? 'Unarchive' : 'Archive'}</span>
              </ToolboxMenuButton>
              <ToolboxMenuButton
                type="button"
                role="menuitem"
                title={isTrashed ? 'Permanently delete note' : 'Move to trash'}
                disabled={readOnly}
                $danger
                onClick={() => {
                  setToolboxOpen(false)
                  onDeleteNote()
                }}
              >
                <FiTrash2 />
                <span>{isTrashed ? 'Delete permanently' : 'Delete'}</span>
              </ToolboxMenuButton>
            </ToolboxDropdown>
          )}

          {showColorPicker && (
            <PickerAnchor ref={colorPickerRef}>
              <FloatingColorPicker
                colors={noteColors}
                onColorClicked={onColorSelected}
                dropdownRef={colorDropdownRef}
              />
            </PickerAnchor>
          )}

          {showTemplatePicker && (
            <PickerAnchor ref={templatePickerRef}>
              <FloatingTemplatePicker
                options={templateOptions}
                onPicked={onTemplateSelected}
                dropdownRef={templateDropdownRef}
              />
            </PickerAnchor>
          )}
        </ToolboxWrapper>

        <IconButton title="Copy note" onClick={copyFormattedContent}>
          <FiCopy />
        </IconButton>

        {collapsed ? (
          <IconButton title="Expand note" onClick={onToggleCollapse}>
            <IoMdArrowDropleft />
          </IconButton>
        ) : (
          <IconButton title="Collapse note" onClick={onToggleCollapse}>
            <IoMdArrowDropdown />
          </IconButton>
        )}
      </Toolbox>
    </HeaderContainer>
  )
}

export default CardHeader

const SelectButton = styled.span`
  width: 18px;
  height: 18px;

  min-width: 18px;

  border: 1px solid var(--mavis-border-strong);
  border-radius: 4px;

  background: var(--mavis-input);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  font-size: 12px;
  font-weight: bold;

  color: var(--mavis-brand);

  &:hover {
    border-color: var(--mavis-brand);
  }
`

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 4;
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background: inherit;

  border-bottom: 1px solid var(--mavis-brand-border);

  svg {
    cursor: pointer;
    height: 18px;
  }

  @media (max-width: 1260px) {
    height: auto;
    min-height: 44px;
  }
`

const TitleBox = styled.strong`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 8px;

  margin: 0;
  padding: 0;

  color: var(--mavis-text);
`

const EmojiPickerAnchor = styled.div`
  && {
    width: auto;
    margin: 0;
  }

  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin: 0;
`

const EmojiButton = styled.button`
  display: flex;
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--mavis-text);
  font-size: 19px;
  line-height: 1;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: var(--mavis-brand-soft);
  }

  &:disabled {
    color: ${({ theme }) => theme.disabled || '#9ca3af'};
    cursor: not-allowed;
  }

  svg {
    height: 18px;
  }
`

const Title = styled.span`
  flex: 1;
  min-width: 0;

  border: 0;
  text-align: left;

  &:empty::before {
    content: attr(data-placeholder);
    color: var(--mavis-muted);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 560px) {
    font-size: 13px;
  }
`

const Toolbox = styled.span`
  position: relative;

  width: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin: 0;
  padding: 0;

  z-index: 8;
`

const ToolboxWrapper = styled.div`
  && {
    width: auto;
    margin: 0;
  }

  position: relative;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
`

const ToolboxToggle = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin: 2px;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: var(--mavis-text);
  cursor: pointer;

  &:hover:not(:disabled) {
    background: var(--mavis-brand-soft);
  }

  &:disabled {
    color: ${({ theme }) => theme.disabled || '#9ca3af'};
    cursor: not-allowed;
    opacity: 1;
  }
`

const ToolboxDropdown = styled.div`
  && {
    width: 210px;
    margin: 0;
  }

  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 20;
  min-width: 210px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 5px;
  border: 1px solid var(--mavis-brand-border);
  border-radius: 10px;
  background: var(--mavis-surface);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
`

const ToolboxMenuSeparator = styled.div`
  height: 1px;
  flex: 0 0 1px;
  margin: 4px 6px;
  background: var(--mavis-brand-border);
`

const ToolboxMenuButton = styled.button<{ $danger?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 32px;
  padding: 6px 9px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: ${({ $danger }) => ($danger ? 'var(--mavis-danger)' : 'var(--mavis-text)')};
  text-align: left;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${({ $danger }) =>
      $danger ? 'var(--mavis-danger-background)' : 'var(--mavis-surface-hover)'};
  }

  &:disabled {
    color: ${({ theme }) => theme.disabled || '#9ca3af'};
    cursor: not-allowed;
    opacity: 1;
  }

  svg {
    flex-shrink: 0;
  }
`

const PickerAnchor = styled.div`
  && {
    width: max-content;
    margin: 0;
  }

  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 21;
  width: max-content;
`
