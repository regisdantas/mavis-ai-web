import React from 'react'
import styled from 'styled-components'

import { IoMdAddCircleOutline } from 'react-icons/io'
import { FiTag } from 'react-icons/fi'

interface CardTagsProps {
  date: string
  tags: string[]
  availableTags: string[]
  isLocked: boolean

  tagPickerRef: React.RefObject<HTMLDivElement>

  showTagPicker: boolean
  creatingTag: boolean
  newTagName: string

  setShowTagPicker: React.Dispatch<React.SetStateAction<boolean>>
  setCreatingTag: React.Dispatch<React.SetStateAction<boolean>>
  setNewTagName: React.Dispatch<React.SetStateAction<string>>

  hasTag: (tag: string) => boolean
  toggleTag: (tag: string) => void
  createTag: (name: string) => void
  formatTag: (tag: string) => string
  formatDate: (date: string) => string
}

const CardTags: React.FC<CardTagsProps> = ({
  date,
  tags,
  availableTags,
  isLocked,
  tagPickerRef,
  showTagPicker,
  creatingTag,
  newTagName,
  setShowTagPicker,
  setCreatingTag,
  setNewTagName,
  hasTag,
  toggleTag,
  createTag,
  formatTag,
  formatDate,
}) => {
  return (
    <Container>
      <TagList>
        <DateChip>{formatDate(date)}</DateChip>

        {tags.map((tag) => (
          <TagChip key={tag} onClick={() => !isLocked && toggleTag(tag)}>
            {formatTag(tag)}
          </TagChip>
        ))}
      </TagList>

      <TagPicker ref={tagPickerRef}>
        {!isLocked && (
          <TagPickerButton onClick={() => setShowTagPicker(!showTagPicker)}>
            <IoMdAddCircleOutline />
          </TagPickerButton>
        )}

        {showTagPicker && (
          <TagDropdown>
            {availableTags.map((tag) => (
              <TagOption
                key={tag}
                className={hasTag(tag) ? 'selected' : ''}
                onClick={() => toggleTag(tag)}
              >
                <FiTag />
                <span>{formatTag(tag)}</span>
              </TagOption>
            ))}

            {!creatingTag ? (
              <NewTagButton onClick={() => setCreatingTag(true)}>
                <FiTag />
                New Tag
              </NewTagButton>
            ) : (
              <NewTagInput
                autoFocus
                placeholder="Tag name..."
                value={newTagName}
                onChange={(e) => setNewTagName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    createTag(newTagName)
                  }

                  if (e.key === 'Escape') {
                    setCreatingTag(false)
                    setNewTagName('')
                  }
                }}
                onBlur={() => {
                  if (newTagName.trim()) {
                    createTag(newTagName)
                  } else {
                    setCreatingTag(false)
                  }
                }}
              />
            )}
          </TagDropdown>
        )}
      </TagPicker>
    </Container>
  )
}

export default CardTags

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const DateChip = styled.span`
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
`

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  margin-left: 10px;
`

const TagChip = styled.span`
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

  &:hover {
    background: rgba(79, 70, 229, 0.2);
  }
`

const TagPicker = styled.div`
  position: relative;

  width: auto;
  margin: 0;
`

const TagPickerButton = styled.span`
  display: flex;
  align-items: center;
  padding: 2px 10px;

  border-radius: 999px;

  background: rgba(79, 70, 229, 0.12);
  color: #4338ca;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: rgba(79, 70, 229, 0.2);
  }
`

const TagDropdown = styled.div`
  position: absolute;

  bottom: 42px;
  left: 0;

  min-width: 160px;
  max-width: 280px;

  display: flex;
  flex-direction: column;
  gap: 2px;

  background: white;

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

  background: #f5f6f8;
  color: #444;

  padding: 8px 10px;

  cursor: pointer;

  transition: 0.2s;

  margin: 0 !important;

  &:hover {
    background: #eceff3;
  }

  &.selected {
    background: #4f46e5;
    color: white;
  }
`

const NewTagButton = styled.span`
  height: 30px;

  display: flex;
  align-items: center;
  gap: 8px;

  border: 1px dashed #4f46e5;
  border-radius: 10px;

  background: transparent;
  color: #4f46e5;

  padding: 8px 10px;

  cursor: pointer;

  font-weight: 600;
`

const NewTagInput = styled.input`
  width: 100%;

  border: 1px solid #d8dce5;
  border-radius: 10px;

  padding: 4px;

  font-size: 13px;

  background: white;

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);
  }
`
