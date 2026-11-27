import React from 'react'
import styled from 'styled-components'
import { createPortal } from 'react-dom'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { FiTag } from 'react-icons/fi'
import { SearchHighlight } from '../SearchHighlight'

interface CardTagsProps {
  date: string
  tags: string[]
  searchContent: string
  fuzzySearchEnabled: boolean
  availableTags: string[]
  readOnly: boolean

  tagPickerRef: React.RefObject<HTMLDivElement>
  tagDropdownRef: React.RefObject<HTMLDivElement>

  showTagPicker: boolean
  creatingTag: boolean
  newTagName: string

  setShowTagPicker: React.Dispatch<React.SetStateAction<boolean>>
  setCreatingTag: React.Dispatch<React.SetStateAction<boolean>>
  setNewTagName: React.Dispatch<React.SetStateAction<string>>
  onDateChange: (date: string) => void

  hasTag: (tag: string) => boolean
  toggleTag: (tag: string) => void
  createTag: (name: string) => void
  formatTag: (tag: string) => string
  formatDate: (date: string) => string
}

const CardTags: React.FC<CardTagsProps> = ({
  date,
  tags,
  searchContent,
  fuzzySearchEnabled,
  availableTags,
  readOnly,
  tagPickerRef,
  tagDropdownRef,
  showTagPicker,
  creatingTag,
  newTagName,
  setShowTagPicker,
  setCreatingTag,
  setNewTagName,
  onDateChange,
  hasTag,
  toggleTag,
  createTag,
  formatTag,
  formatDate,
}) => {
  const dateInputRef = React.useRef<HTMLInputElement>(null)
  return (
    <Container>
      <DateChip
        $disabled={readOnly}
        aria-disabled={readOnly}
        onClick={() => {
          if (readOnly) return

          dateInputRef.current?.showPicker?.()
          dateInputRef.current?.click()
        }}
      >
        {formatDate(date)}
      </DateChip>

      <input
        ref={dateInputRef}
        type="date"
        value={date}
        style={{ display: 'none' }}
        onChange={(e) => onDateChange(e.target.value)}
      />

      {tags.map((tag) => (
        <TagChip key={tag} type="button" disabled={readOnly} onClick={() => toggleTag(tag)}>
          <SearchHighlight
            text={formatTag(tag)}
            query={searchContent}
            fuzzySearchEnabled={fuzzySearchEnabled}
          />
        </TagChip>
      ))}

      <TagPicker ref={tagPickerRef}>
        {!readOnly && (
          <TagPickerButton
            type="button"
            title="Add tag"
            aria-label="Add tag"
            onClick={() => setShowTagPicker(!showTagPicker)}
          >
            <IoMdAddCircleOutline />
          </TagPickerButton>
        )}

        {showTagPicker &&
          createPortal(
            <TagDropdown ref={tagDropdownRef}>
              {availableTags.map((tag) => (
                <TagOption
                  key={tag}
                  className={hasTag(tag) ? 'selected' : ''}
                  onClick={() => {
                    if (!readOnly) {
                      toggleTag(tag)
                    }
                  }}
                >
                  <FiTag />
                  <span>{formatTag(tag)}</span>
                </TagOption>
              ))}

              {!creatingTag ? (
                <NewTagButton onClick={() => !readOnly && setCreatingTag(true)}>
                  <FiTag />
                  New Tag
                </NewTagButton>
              ) : (
                <NewTagInput
                  autoFocus
                  placeholder="Tag name..."
                  value={newTagName}
                  onChange={(e) => !readOnly && setNewTagName(e.target.value)}
                  onKeyDown={(e) => {
                    if (!readOnly && e.key === 'Enter') {
                      createTag(newTagName)
                    }

                    if (e.key === 'Escape') {
                      setCreatingTag(false)
                      setNewTagName('')
                    }
                  }}
                  onBlur={() => {
                    if (readOnly) {
                      setCreatingTag(false)
                      setNewTagName('')
                      return
                    }

                    if (newTagName.trim()) {
                      createTag(newTagName)
                    } else {
                      setCreatingTag(false)
                    }
                  }}
                />
              )}
            </TagDropdown>,
            document.body
          )}
      </TagPicker>
    </Container>
  )
}

export default CardTags

const Container = styled.div`
  && {
    width: 100%;
    min-width: 0;
    margin-left: 0;
  }

  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 6px;
`

const DateChip = styled.span<{ $disabled: boolean }>`
  display: flex;
  align-items: center;

  padding: 4px 10px;

  border-radius: 999px;

  background: var(--mavis-brand-soft);
  color: var(--mavis-text);

  font-size: 11px;
  font-weight: 600;

  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};

  transition: 0.2s;
`

const TagChip = styled.button`
  display: flex;
  align-items: center;

  padding: 4px 10px;
  border: 0;

  border-radius: 999px;

  background: var(--mavis-brand-soft);
  color: var(--mavis-text);

  font: inherit;
  font-size: 11px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover:not(:disabled) {
    background: var(--mavis-secondary-bg-hover);
  }

  &:disabled {
    background: var(--mavis-surface-hover);
    color: var(--mavis-disabled);
    cursor: default;
  }
`

const TagPicker = styled.div`
  && {
    width: fit-content;
    margin-left: 0;
  }

  position: relative;
  flex: 0 0 auto;
  width: fit-content;
  margin: 0;
`

const TagPickerButton = styled.button`
  display: flex;
  align-items: center;
  padding: 2px 10px;
  border: 0;

  border-radius: 999px;

  background: var(--mavis-brand-soft);
  color: var(--mavis-text);

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: var(--mavis-secondary-bg-hover);
  }
`

const TagDropdown = styled.div`
  position: absolute;

  bottom: 40%;
  left: 30%;

  min-width: 160px;
  max-width: 280px;

  display: flex;
  flex-direction: column;
  gap: 2px;

  background: var(--mavis-surface);
  border: 1px solid var(--mavis-brand-border);

  border-radius: 14px;

  padding: 4px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);

  z-index: 100;
`

const TagOption = styled.span`
  width: 100%;
  height: 30px;

  display: flex;
  align-items: center;
  gap: 8px;

  text-align: left;

  border: none;
  border-radius: 10px;

  background: var(--mavis-surface-subtle);
  color: var(--mavis-text-secondary);

  padding: 8px 10px;

  cursor: pointer;

  transition: 0.2s;

  margin: 0 !important;

  &:hover {
    background: var(--mavis-surface-hover);
  }

  &.selected {
    background: #5b4bd8;
    color: white;
  }
`

const NewTagButton = styled.span`
  height: 30px;

  display: flex;
  align-items: center;
  gap: 8px;

  border: 1px dashed var(--mavis-brand);
  border-radius: 10px;

  background: transparent;
  color: var(--mavis-text);

  padding: 8px 10px;

  cursor: pointer;

  font-weight: 600;
`

const NewTagInput = styled.input`
  width: 100%;

  border: 1px solid var(--mavis-border);
  border-radius: 10px;

  padding: 4px;

  font-size: 13px;

  background: var(--mavis-input);
  color: var(--mavis-text);

  &:focus {
    outline: none;
    border-color: var(--mavis-brand);
    box-shadow: 0 0 0 3px rgba(91, 75, 216, 0.12);
  }
`
