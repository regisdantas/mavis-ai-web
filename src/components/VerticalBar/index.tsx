import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Container, MarkersContainer, MarkerItem } from './styles'
import { IconButton } from '../../styles/global'
import { IconType } from 'react-icons'

type Page = {
  name: string
  icon: IconType
  items: string[] | undefined
}

interface VerticalBarProps {
  pages: Page[]
  selectedPage: Page
  setSelectedPage: React.Dispatch<React.SetStateAction<Page>>
}

const VerticalBar: React.FC<VerticalBarProps> = ({ pages, selectedPage, setSelectedPage }) => {
  const [menuExpanded, setMenuExpanded] = useState(false)
  const [markersExpanded, setMarkersExpanded] = useState(false)

  React.useEffect(() => {
    console.log(selectedPage.name)
    if (selectedPage.name === 'Tags') {
      setMarkersExpanded(true)
    } else {
      setMarkersExpanded(false)
    }
  }, [selectedPage])

  const expanded = menuExpanded || markersExpanded
  return (
    <Container expanded={expanded}>
      <IconButton
        expanded={expanded}
        title="Menu"
        onClick={() => {
          setMenuExpanded(!expanded)
          setMarkersExpanded(false)
        }}
      >
        <FiMenu />
        {expanded && <span>Menu</span>}
      </IconButton>
      {pages.map((page) => {
        const Icon = page.icon
        return (
          <>
            <IconButton expanded={expanded} title={page.name} onClick={() => setSelectedPage(page)}>
              <Icon />
              {expanded && <span>{page.name}</span>}
            </IconButton>
            {page.items ? (
              markersExpanded && (
                <MarkersContainer>
                  {page.items?.map((marker, index) => (
                    <MarkerItem key={index}>{marker}</MarkerItem>
                  ))}
                </MarkersContainer>
              )
            ) : (
              <></>
            )}
          </>
        )
      })}
    </Container>
  )
}

export default VerticalBar
