import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { IconButton } from '../../../styles/global'
import { IconType } from 'react-icons'
import { FiTag } from 'react-icons/fi'
import styled from 'styled-components'
import { FaRegNoteSticky } from 'react-icons/fa6'

export type TagItem = {
  name: string
  icon: IconType
  system?: boolean
  position?: string
}

interface ExplorerSideBarProps {
  systemTags: TagItem[]
  customTags: string[]
  selectedTag: string
  setSelectedTag: (tag: string) => void
  explorerExpanded: boolean
  setExplorerExpanded: (expanded: boolean) => void
  minimized?: boolean
  setMinimized: (minimized: boolean) => void
}
export const ExplorerSideBar: React.FC<ExplorerSideBarProps> = ({
  systemTags,
  customTags,
  selectedTag,
  setSelectedTag,
  explorerExpanded,
  setExplorerExpanded,
  minimized,
  setMinimized,
}) => {
  const formatTag = (tag: string) => tag.replace(/\b\w/g, (c) => c.toUpperCase())
  return (
    <Container expanded={explorerExpanded}>
      <IconButton
        expanded={explorerExpanded}
        title="Menu"
        onClick={() => setExplorerExpanded(!explorerExpanded)}
      >
        <FiMenu />
        {explorerExpanded && <span>Menu</span>}
      </IconButton>

      {minimized && (
        <IconButton
          expanded={explorerExpanded}
          title="Expand Notes Explorer"
          onClick={() => setMinimized(!minimized)}
        >
          <FaRegNoteSticky />
          {explorerExpanded && <span>Expand Notes Explorer</span>}
        </IconButton>
      )}

      {systemTags
        .filter((tag) => tag.position === 'top')
        .map((tag) => {
          const Icon = tag.icon

          return (
            <IconButton
              key={tag.name}
              expanded={explorerExpanded}
              selected={selectedTag === tag.name}
              title={tag.name}
              onClick={() => setSelectedTag(tag.name)}
            >
              <Icon />
              {explorerExpanded && <span>{formatTag(tag.name)}</span>}
            </IconButton>
          )
        })}
      {customTags.map((tag) => (
        <IconButton
          key={tag}
          expanded={explorerExpanded}
          selected={selectedTag === tag}
          title={formatTag(tag)}
          onClick={() => setSelectedTag(tag)}
        >
          <FiTag />
          {explorerExpanded && <span>{formatTag(tag)}</span>}
        </IconButton>
      ))}
      {systemTags
        .filter((tag) => tag.position === 'bottom')
        .map((tag) => {
          const Icon = tag.icon

          return (
            <IconButton
              key={tag.name}
              expanded={explorerExpanded}
              selected={selectedTag === tag.name}
              title={tag.name}
              onClick={() => setSelectedTag(tag.name)}
            >
              <Icon />
              {explorerExpanded && <span>{formatTag(tag.name)}</span>}
            </IconButton>
          )
        })}
    </Container>
  )
}

interface ContainerProps {
  expanded: boolean
}

const Container = styled.div<ContainerProps>`
  width: ${(props) => (props.expanded ? '180px' : '44px')};

  border-left: 1px solid #d0d0d0;
  background: #f5f5f5;
  overflow-y: hidden;
  overflow-x: hidden;
  padding: 4px;
  margin-right: 20px;
  transform: scaleX(-1);

  > * {
    transform: scaleX(-1);
  }
`
