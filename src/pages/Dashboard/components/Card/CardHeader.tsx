import React from 'react'
import styled from 'styled-components'
import { FiCopy, FiSmile, FiSliders, FiStar, FiType } from 'react-icons/fi'
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
        {isFavorite ? (
          <IconButton disabled={readOnly} title="Remove favorite" onClick={onToggleFavorite}>
            <FaStar />
          </IconButton>
        ) : (
          <IconButton disabled={readOnly} title="Add favorite" onClick={onToggleFavorite}>
            <FiStar />
          </IconButton>
        )}
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
        <ToolboxWrapper ref={toolboxRef}>
          <ToolboxToggle
            type="button"
            disabled={readOnly}
            title="Open note toolbox"
            aria-label="Open note toolbox"
            aria-haspopup="menu"
            aria-expanded={toolboxOpen}
            onClick={() => setToolboxOpen((open) => !open)}
          >
            <FiSliders />
          </ToolboxToggle>

          {toolboxOpen && (
            <ToolboxDropdown role="menu" aria-label="Note toolbox">
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

  border: 1px solid #888;
  border-radius: 4px;

  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  font-size: 12px;
  font-weight: bold;

  color: #2563eb;

  &:hover {
    border-color: #2563eb;
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

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

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

  color: black;
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
  color: #2e2e2e;
  font-size: 19px;
  line-height: 1;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: rgba(128, 128, 128, 0.15);
  }

  &:disabled {
    color: #9ca3af;
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
    color: #494949;
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
  color: #2e2e2e;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: rgba(128, 128, 128, 0.15);
  }

  &:disabled {
    color: #9ca3af;
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
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
`

const ToolboxMenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 32px;
  padding: 6px 9px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: #2e2e2e;
  text-align: left;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: #f1f1f4;
  }

  &:disabled {
    color: #9ca3af;
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
