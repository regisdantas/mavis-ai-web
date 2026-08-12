import React from 'react'
import styled from 'styled-components'
import { FiCopy, FiStar, FiLock, FiUnlock, FiVolume2, FiVolumeX } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import { IoMdArrowDropdown, IoMdArrowDropleft } from 'react-icons/io'
import { IconButton } from '../../../../styles/global'

interface CardHeaderProps {
  title: string
  locked: boolean
  collapsed: boolean
  speaking: boolean
  isFavorite: boolean
  selected: boolean
  onToggleSelection: () => void

  speak: () => void
  stopSpeaking: () => void
  copyFormattedContent: () => void

  onToggleFavorite: () => void
  onToggleLock: () => void
  onToggleCollapse: () => void
  onTitleChange: (title: string) => void
}

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  locked,
  collapsed,
  speaking,
  isFavorite,
  selected,
  onToggleSelection,
  speak,
  stopSpeaking,
  copyFormattedContent,
  onToggleFavorite,
  onToggleLock,
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
          <IconButton disabled={locked} title="Remove favorite" onClick={onToggleFavorite}>
            <FaStar />
          </IconButton>
        ) : (
          <IconButton disabled={locked} title="Add favorite" onClick={onToggleFavorite}>
            <FiStar />
          </IconButton>
        )}
        <Title
          title="Note name"
          role="textbox"
          contentEditable={!locked}
          suppressContentEditableWarning
          data-placeholder="🙋 Give me a name"
          onBlur={(e) => onTitleChange(e.currentTarget.innerText)}
        >
          {title}
        </Title>
      </TitleBox>

      <Toolbox>
        {speaking ? (
          <IconButton title="Stop hearing note" onClick={stopSpeaking}>
            <FiVolumeX color="#2563eb" />
          </IconButton>
        ) : (
          <IconButton title="Hear note" onClick={speak}>
            <FiVolume2 />
          </IconButton>
        )}

        <IconButton title="Copy note" onClick={copyFormattedContent}>
          <FiCopy />
        </IconButton>

        {locked ? (
          <IconButton title="Unlock note" onClick={onToggleLock}>
            <FiLock color="#2563eb" />
          </IconButton>
        ) : (
          <IconButton title="Lock note" onClick={onToggleLock}>
            <FiUnlock />
          </IconButton>
        )}

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
  width: 100%;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  border-bottom: 1px solid #757575;

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
  gap: 20px;

  margin: 0;
  padding: 0;

  color: black;
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
