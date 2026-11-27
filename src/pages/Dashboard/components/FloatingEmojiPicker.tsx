import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { FiSearch, FiX } from 'react-icons/fi'
import EmojiPicker from 'emoji-picker-react'

import { searchEmojiCatalog } from '../utils/emojiSearch'

interface FloatingEmojiPickerProps {
  emoji: string
  onEmojiSelected: (emoji: string) => void
  triggerRef: React.RefObject<HTMLDivElement>
  dropdownRef: React.RefObject<HTMLDivElement>
}

interface PickerPosition {
  top: number
  left: number
  width: number
}

const PICKER_WIDTH = 332
const PICKER_HEIGHT = 410

const FloatingEmojiPicker: React.FC<FloatingEmojiPickerProps> = ({
  emoji,
  onEmojiSelected,
  triggerRef,
  dropdownRef,
}) => {
  const [query, setQuery] = React.useState('')
  const [position, setPosition] = React.useState<PickerPosition | null>(null)
  const searchResults = React.useMemo(() => searchEmojiCatalog(query), [query])

  React.useLayoutEffect(() => {
    const updatePosition = () => {
      const trigger = triggerRef.current

      if (!trigger) {
        return
      }

      const bounds = trigger.getBoundingClientRect()
      const width = Math.min(PICKER_WIDTH, window.innerWidth - 24)
      const height = Math.min(PICKER_HEIGHT, window.innerHeight - 24)
      const belowTop = bounds.bottom + 8
      const top =
        belowTop + height <= window.innerHeight - 12
          ? belowTop
          : bounds.top - height - 8 >= 12
          ? bounds.top - height - 8
          : Math.max(12, window.innerHeight - height - 12)
      const left = Math.max(12, Math.min(bounds.left, window.innerWidth - width - 12))

      setPosition({ top, left, width })
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition, true)

    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition, true)
    }
  }, [triggerRef])

  if (!position || typeof document === 'undefined') {
    return null
  }

  return createPortal(
    <PickerContainer
      ref={dropdownRef}
      role="dialog"
      aria-label="Emoji picker"
      style={{ top: position.top, left: position.left, width: position.width }}
      onMouseDown={(event) => event.stopPropagation()}
      onClick={(event) => event.stopPropagation()}
    >
      <SearchInputContainer>
        <FiSearch aria-hidden="true" />
        <SearchInput
          type="text"
          aria-label="Search emojis"
          placeholder="Search emojis"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.currentTarget.value)}
        />
        {query && (
          <ClearSearchButton
            type="button"
            aria-label="Clear emoji search"
            onClick={() => setQuery('')}
          >
            <FiX aria-hidden="true" />
          </ClearSearchButton>
        )}
      </SearchInputContainer>

      {query.trim() ? (
        <SearchResults aria-label="Emoji search results">
          {searchResults.length ? (
            <SearchGrid>
              {searchResults.map((result) => (
                <SearchResultButton
                  key={result.unified}
                  type="button"
                  title={result.name}
                  aria-label={result.name}
                  onClick={() => onEmojiSelected(result.emoji)}
                >
                  {result.emoji}
                </SearchResultButton>
              ))}
            </SearchGrid>
          ) : (
            <NoResults role="status">No emojis found. Try another search.</NoResults>
          )}
        </SearchResults>
      ) : (
        <EmojiPicker
          searchDisabled
          width="100%"
          height={300}
          previewConfig={{ showPreview: false }}
          style={{ width: '100%', height: 300, border: 0, boxShadow: 'none' }}
          onEmojiClick={(emojiData) => onEmojiSelected(emojiData.emoji)}
        />
      )}

      {emoji && (
        <RemoveEmojiButton type="button" onClick={() => onEmojiSelected('')}>
          Remove emoji
        </RemoveEmojiButton>
      )}
    </PickerContainer>,
    document.body
  )
}

export default FloatingEmojiPicker

const PickerContainer = styled.div`
  position: fixed;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: calc(100vh - 24px);
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid var(--mavis-brand-border);
  border-radius: 14px;
  background: var(--mavis-surface);
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.2);
`

const SearchInputContainer = styled.div`
  display: flex;
  min-height: 38px;
  align-items: center;
  gap: 8px;
  padding: 0 10px;
  border: 1px solid var(--mavis-border);
  border-radius: 9px;
  background: var(--mavis-input);
  color: var(--mavis-muted);

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`

const SearchInput = styled.input`
  width: 100%;
  min-width: 0;
  padding: 8px 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--mavis-text);
  font: inherit;
  font-size: 13px;

  &::placeholder {
    color: var(--mavis-muted);
  }
`

const ClearSearchButton = styled.button`
  display: flex;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--mavis-muted);
  cursor: pointer;

  &:hover {
    background: var(--mavis-surface-hover);
  }
`

const SearchResults = styled.div`
  min-height: 220px;
  max-height: 300px;
  overflow-y: auto;
  padding: 4px;
`

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
  gap: 4px;
`

const SearchResultButton = styled.button`
  display: flex;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  font-size: 22px;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    background: var(--mavis-surface-hover);
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(91, 75, 216, 0.45);
  }
`

const NoResults = styled.p`
  margin: 0;
  padding: 24px 12px;
  color: var(--mavis-muted);
  font-size: 13px;
  text-align: center;
`

const RemoveEmojiButton = styled.button`
  min-height: 32px;
  padding: 6px 10px;
  border: 0;
  border-radius: 7px;
  background: var(--mavis-surface-subtle);
  color: var(--mavis-text);
  text-align: left;
  cursor: pointer;

  &:hover {
    background: var(--mavis-surface-hover);
  }
`
