import React from 'react'
import styled from 'styled-components'
import { getSearchMatchRanges } from '../utils/noteSearch'

interface SearchHighlightProps {
  text: string
  query: string
  fuzzySearchEnabled: boolean
}

export const SearchMatch = styled.mark`
  border-radius: 2px;
  padding: 0 1px;
  background: #fde047;
  color: #713f12;
`

export const SearchHighlight: React.FC<SearchHighlightProps> = ({
  text,
  query,
  fuzzySearchEnabled,
}) => {
  const ranges = getSearchMatchRanges(text, query, fuzzySearchEnabled)

  if (!ranges.length) {
    return <>{text}</>
  }

  const children: React.ReactNode[] = []
  let currentPosition = 0

  ranges.forEach((range) => {
    if (range.start > currentPosition) {
      children.push(text.slice(currentPosition, range.start))
    }

    children.push(
      <SearchMatch key={`${range.start}-${range.end}`}>
        {text.slice(range.start, range.end)}
      </SearchMatch>
    )
    currentPosition = range.end
  })

  if (currentPosition < text.length) {
    children.push(text.slice(currentPosition))
  }

  return <>{children}</>
}
