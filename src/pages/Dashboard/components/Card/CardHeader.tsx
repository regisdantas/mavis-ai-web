import React from 'react'
import styled from 'styled-components'
import { FiCopy, FiStar } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import { IoMdArrowDropdown, IoMdArrowDropleft } from 'react-icons/io'
import { IconButton } from '../../../../styles/global'

interface CardHeaderProps {
  title: string
  titleRef: React.RefObject<HTMLSpanElement>
  readOnly: boolean
  collapsed: boolean
  isFavorite: boolean
  selected: boolean
  onToggleSelection: () => void

  copyFormattedContent: () => void

  onToggleFavorite: () => void
  onToggleCollapse: () => void
  onTitleChange: (title: string) => void
}

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  titleRef,
  readOnly,
  collapsed,
  isFavorite,
  selected,
  onToggleSelection,
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
        <Title
          ref={titleRef}
          title="Note name"
          role="textbox"
          contentEditable={!readOnly}
          suppressContentEditableWarning
          data-placeholder="🙋 Give me a name"
          onBlur={(e) => onTitleChange(e.currentTarget.innerText)}
        >
          {title}
        </Title>
      </TitleBox>

      <Toolbox>
        <IconButton title="Copy note" onClick={copyFormattedContent}>
          <FiCopy />
        </IconButton>

        {collapsed ? (
          <IconButton disabled={readOnly} title="Expand note" onClick={onToggleCollapse}>
            <IoMdArrowDropleft />
          </IconButton>
        ) : (
          <IconButton disabled={readOnly} title="Collapse note" onClick={onToggleCollapse}>
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
