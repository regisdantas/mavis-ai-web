import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { IconButton } from '../../styles/global'
import { IconType } from 'react-icons'
import { FiTag } from 'react-icons/fi'
import styled from 'styled-components'

export type TagItem = {
  name: string
  icon: IconType
  system?: boolean
}

interface VerticalBarProps {
  systemTags: TagItem[]
  customTags: string[]
  selectedTag: string
  setSelectedTag: (tag: string) => void
}
export const VerticalBar: React.FC<VerticalBarProps> = ({
  systemTags,
  customTags,
  selectedTag,
  setSelectedTag,
}) => {
  const [menuExpanded, setMenuExpanded] = useState(false)
  const formatTag = (tag: string) => tag.replace(/\b\w/g, (c) => c.toUpperCase())

  const expanded = menuExpanded

  return (
    <Container expanded={expanded}>
      <IconButton expanded={expanded} title="Menu" onClick={() => setMenuExpanded(!menuExpanded)}>
        <FiMenu />
        {expanded && <span>Menu</span>}
      </IconButton>

      {systemTags.map((tag) => {
        const Icon = tag.icon

        return (
          <IconButton
            key={tag.name}
            expanded={expanded}
            selected={selectedTag === tag.name}
            title={tag.name}
            onClick={() => setSelectedTag(tag.name)}
          >
            <Icon />
            {expanded && <span>{formatTag(tag.name)}</span>}
          </IconButton>
        )
      })}

      {customTags.map((tag) => (
        <IconButton
          key={tag}
          expanded={expanded}
          selected={selectedTag === tag}
          title={formatTag(tag)}
          onClick={() => setSelectedTag(tag)}
        >
          <FiTag />
          {expanded && <span>{formatTag(tag)}</span>}
        </IconButton>
      ))}
    </Container>
  )
}

interface ContainerProps {
  expanded: boolean
}

interface MarkerHeaderProps {
  expanded: boolean
}

const Container = styled.div<ContainerProps>`
  position: fixed;
  z-index: 11;
  left: 0;
  top: 40px;
  width: ${({ expanded }) => (expanded ? '160px' : '44px')};
  height: 100%;

  background: rgba(240, 240, 245, 0.8);
  border-right: 1px solid #d0d0d0;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px 6px;

  transition: width 0.2s ease;
  @media (max-width: 1260px) {
    position: fixed;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 40px;

    flex-direction: row;

    overflow-x: auto;
    overflow-y: hidden;

    flex-wrap: nowrap;
    white-space: nowrap;

    -webkit-overflow-scrolling: touch;
  }
`

const MarkerHeader = styled.div<MarkerHeaderProps>`
  width: ${({ expanded }) => (expanded ? '100%' : '30px')};
  min-height: 30px;

  display: flex;
  align-items: center;
  justify-content: ${({ expanded }) => (expanded ? 'flex-start' : 'center')};

  gap: 10px;

  padding: ${({ expanded }) => (expanded ? '0 10px' : '0')};

  border-radius: 10px;
  cursor: pointer;

  transition: all 0.2s;

  svg {
    flex-shrink: 0;
    color: #2e2e2e;
  }

  &:hover {
    background: rgba(128, 128, 128, 0.15);
  }
`
