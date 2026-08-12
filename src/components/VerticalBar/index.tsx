import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Container } from './styles'
import { IconButton } from '../../styles/global'
import { IconType } from 'react-icons'
import { FiTag } from 'react-icons/fi'

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
