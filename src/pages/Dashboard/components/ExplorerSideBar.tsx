import React from 'react'
import { FiFolder, FiMenu, FiMoreVertical } from 'react-icons/fi'
import { IconButton } from '../../../styles/global'
import { IconType } from 'react-icons'
import styled from 'styled-components'
import { FaRegNoteSticky } from 'react-icons/fa6'
import { useClickOutside } from '../../../hooks/useClickOutside'

export type TagItem = {
  name: string
  icon: IconType
  system?: boolean
  position?: string
}

interface ExplorerSideBarProps {
  systemTags: TagItem[]
  customTags: string[]
  unpinnedTags: string[]
  onToggleTagPin: (tag: string) => Promise<void>
  selectedTag: string
  setSelectedTag: (tag: string) => void
  explorerExpanded: boolean
  setExplorerExpanded: (expanded: boolean) => void
  minimized?: boolean
  setMinimized: (minimized: boolean) => void
  selectedNoteIds: string[]
  onRenameTag: (oldTag: string, newTag: string) => Promise<void>
  onDeleteTag: (tag: string) => Promise<void>
  onAddTagToSelected: (tag: string) => Promise<void>
  onRemoveTagFromSelected: (tag: string) => Promise<void>
  trashCount: number
  selectedTrashCount: number
  onDeleteSelectedNotes: () => Promise<void>
  onRestoreSelectedTrash: () => Promise<void>
  onRestoreAllTrash: () => Promise<void>
  onEmptyTrash: () => Promise<void>
  actionsLocked?: boolean
  tagPreferencesLoading?: boolean
}
export const ExplorerSideBar: React.FC<ExplorerSideBarProps> = ({
  systemTags,
  customTags,
  unpinnedTags,
  onToggleTagPin,
  selectedTag,
  setSelectedTag,
  explorerExpanded,
  setExplorerExpanded,
  minimized,
  setMinimized,
  selectedNoteIds,
  onRenameTag,
  onDeleteTag,
  onAddTagToSelected,
  onRemoveTagFromSelected,
  trashCount,
  selectedTrashCount,
  onDeleteSelectedNotes,
  onRestoreSelectedTrash,
  onRestoreAllTrash,
  onEmptyTrash,
  actionsLocked = false,
  tagPreferencesLoading = false,
}) => {
  const formatTag = (tag: string) => tag.replace(/\b\w/g, (c) => c.toUpperCase())
  const [openMenuTag, setOpenMenuTag] = React.useState<string | null>(null)
  const [editingTag, setEditingTag] = React.useState<string | null>(null)
  const [editedName, setEditedName] = React.useState('')
  const sidebarRef = React.useRef<HTMLDivElement>(null)
  const menuRef = React.useRef<HTMLDivElement>(null)
  const closeMenu = React.useCallback(() => {
    setOpenMenuTag(null)
    setEditingTag(null)
  }, [])

  useClickOutside(menuRef, closeMenu)

  React.useEffect(() => {
    if (actionsLocked) {
      closeMenu()
    }
  }, [actionsLocked, closeMenu])

  const closeMobileSidebar = () => {
    if (window.innerWidth <= 768) {
      setExplorerExpanded(false)
    }
  }

  const selectTag = (tag: string) => {
    setSelectedTag(tag)
    closeMobileSidebar()
  }

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (window.innerWidth > 768 || !explorerExpanded) {
        return
      }

      const target = event.target

      if (!(target instanceof Node) || sidebarRef.current?.contains(target)) {
        return
      }

      if (target instanceof Element && target.closest('[data-sidebar-toggle="notes"]')) {
        return
      }

      setExplorerExpanded(false)
    }

    document.addEventListener('click', handleOutsideClick)

    return () => document.removeEventListener('click', handleOutsideClick)
  }, [explorerExpanded, setExplorerExpanded])

  const runMenuAction = async (action: () => Promise<void>) => {
    try {
      await action()
      setOpenMenuTag(null)
      closeMobileSidebar()
    } catch (error) {
      console.error('Failed to complete tag menu action.', error)
    }
  }

  const renderSystemTag = (tag: TagItem) => {
    const Icon = tag.icon
    const canManageTag = tag.name !== 'all' && tag.name !== 'other'
    const isTrash = tag.name === 'trash'
    const isSelected = selectedTag === tag.name

    return (
      <TagRow
        key={tag.name}
        ref={openMenuTag === tag.name ? menuRef : null}
        $active={openMenuTag === tag.name}
      >
        <ExplorerItem
          expanded={explorerExpanded}
          selected={isSelected}
          $selected={isSelected}
          title={tag.name}
          onClick={() => selectTag(tag.name)}
        >
          <Icon />
          {explorerExpanded && <span>{formatTag(tag.name)}</span>}
        </ExplorerItem>

        {explorerExpanded && canManageTag && (
          <MenuWrapper>
            <MenuButton
              type="button"
              disabled={actionsLocked}
              aria-label={`Manage ${tag.name} tag`}
              title={`Manage ${formatTag(tag.name)} tag`}
              onClick={(event) => {
                event.stopPropagation()
                setOpenMenuTag(openMenuTag === tag.name ? null : tag.name)
              }}
            >
              <FiMoreVertical />
            </MenuButton>

            {openMenuTag === tag.name && (
              <PopupMenu>
                {isTrash ? (
                  <>
                    <MenuItem
                      type="button"
                      disabled={!selectedNoteIds.length}
                      onClick={() => void runMenuAction(onDeleteSelectedNotes)}
                    >
                      Delete Selected
                    </MenuItem>
                    <MenuItem
                      type="button"
                      disabled={selectedTrashCount === 0}
                      onClick={() => void runMenuAction(onRestoreSelectedTrash)}
                    >
                      Restore Selected
                    </MenuItem>
                    <MenuItem
                      type="button"
                      disabled={trashCount === 0}
                      onClick={() => void runMenuAction(onRestoreAllTrash)}
                    >
                      Restore All
                    </MenuItem>
                    <MenuItem
                      type="button"
                      disabled={trashCount === 0}
                      onClick={() => void runMenuAction(onEmptyTrash)}
                    >
                      Empty Bin
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem
                      type="button"
                      disabled={!selectedNoteIds.length}
                      onClick={() => void runMenuAction(() => onAddTagToSelected(tag.name))}
                    >
                      Add Selected
                    </MenuItem>
                    <MenuItem
                      type="button"
                      disabled={!selectedNoteIds.length}
                      onClick={() => void runMenuAction(() => onRemoveTagFromSelected(tag.name))}
                    >
                      Remove Selected
                    </MenuItem>
                  </>
                )}
              </PopupMenu>
            )}
          </MenuWrapper>
        )}
      </TagRow>
    )
  }

  const renderCustomTag = (tag: string) => {
    const isPinned = !unpinnedTags.includes(tag)
    const isSelected = selectedTag === tag

    return (
      <TagRow key={tag} ref={openMenuTag === tag ? menuRef : null} $active={openMenuTag === tag}>
        <ExplorerItem
          expanded={explorerExpanded}
          selected={isSelected}
          $selected={isSelected}
          title={formatTag(tag)}
          onClick={() => selectTag(tag)}
        >
          <FiFolder />
          {editingTag === tag ? (
            <RenameInput
              autoFocus
              value={editedName}
              onClick={(event) => event.stopPropagation()}
              onChange={(event) => {
                event.currentTarget.setCustomValidity('')
                setEditedName(event.target.value)
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  const newName = editedName.trim()
                  if (!newName) {
                    event.currentTarget.setCustomValidity('A tag name is required.')
                    event.currentTarget.reportValidity()
                    return
                  }

                  void runMenuAction(async () => {
                    await onRenameTag(tag, newName)
                    setEditingTag(null)
                  })
                }

                if (event.key === 'Escape') {
                  closeMenu()
                }
              }}
            />
          ) : (
            explorerExpanded && <span>{formatTag(tag)}</span>
          )}
        </ExplorerItem>

        {explorerExpanded && (
          <MenuWrapper>
            <MenuButton
              type="button"
              disabled={actionsLocked}
              aria-label={`Manage ${tag} tag`}
              title={`Manage ${formatTag(tag)} tag`}
              onClick={(event) => {
                event.stopPropagation()
                setOpenMenuTag(openMenuTag === tag ? null : tag)
              }}
            >
              <FiMoreVertical />
            </MenuButton>

            {openMenuTag === tag && (
              <PopupMenu>
                <MenuItem
                  type="button"
                  disabled={actionsLocked || tagPreferencesLoading}
                  onClick={() => void runMenuAction(() => onToggleTagPin(tag))}
                >
                  {isPinned ? 'Unpin' : 'Pin'}
                </MenuItem>

                <MenuItem
                  type="button"
                  onClick={() => {
                    setEditingTag(tag)
                    setEditedName(tag)
                  }}
                >
                  Rename
                </MenuItem>

                <MenuItem type="button" onClick={() => void runMenuAction(() => onDeleteTag(tag))}>
                  Delete
                </MenuItem>

                <MenuItem
                  type="button"
                  disabled={!selectedNoteIds.length}
                  onClick={() => void runMenuAction(() => onAddTagToSelected(tag))}
                >
                  Add Selected
                </MenuItem>

                <MenuItem
                  type="button"
                  disabled={!selectedNoteIds.length}
                  onClick={() => void runMenuAction(() => onRemoveTagFromSelected(tag))}
                >
                  Remove Selected
                </MenuItem>
              </PopupMenu>
            )}
          </MenuWrapper>
        )}
      </TagRow>
    )
  }

  const pinnedCustomTags = customTags.filter((tag) => !unpinnedTags.includes(tag))
  const unpinnedCustomTags = customTags.filter((tag) => unpinnedTags.includes(tag))

  return (
    <Container ref={sidebarRef} expanded={explorerExpanded}>
      <ExplorerHeader
        expanded={explorerExpanded}
        title={explorerExpanded ? 'Collapse notes explorer' : 'Menu'}
        onClick={() => setExplorerExpanded(!explorerExpanded)}
      >
        <FiMenu />
        {explorerExpanded && <span>Explorer</span>}
      </ExplorerHeader>

      {minimized && (
        <RestoreExplorerButton
          expanded={explorerExpanded}
          title="Expand Notes Explorer"
          onClick={() => setMinimized(!minimized)}
        >
          <FaRegNoteSticky />
          {explorerExpanded && <span>Expand Notes Explorer</span>}
        </RestoreExplorerButton>
      )}

      {explorerExpanded && <ExplorerSectionLabel>Locations</ExplorerSectionLabel>}
      {systemTags.filter((tag) => tag.position === 'top').map(renderSystemTag)}
      {pinnedCustomTags.length > 0 && explorerExpanded && (
        <ExplorerSectionLabel>Pinned Tags</ExplorerSectionLabel>
      )}
      {pinnedCustomTags.length > 0 && (
        <FolderTree $expanded={explorerExpanded}>
          {pinnedCustomTags.map(renderCustomTag)}
        </FolderTree>
      )}
      {systemTags.filter((tag) => tag.position === 'bottom').map(renderSystemTag)}
      {unpinnedCustomTags.length > 0 && (
        <>
          <TagDivider role="separator" />
          {explorerExpanded && <ExplorerSectionLabel>Tags</ExplorerSectionLabel>}
          <FolderTree $expanded={explorerExpanded}>
            {unpinnedCustomTags.map(renderCustomTag)}
          </FolderTree>
        </>
      )}
    </Container>
  )
}

interface ContainerProps {
  expanded: boolean
}

const Container = styled.div<ContainerProps>`
  width: ${(props) => (props.expanded ? '200px' : '44px')};

  border-left: 1px solid var(--mavis-brand-border);
  background: var(--mavis-surface-subtle);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 4px;
  margin-right: 20px;
  transform: scaleX(-1);

  > * {
    transform: scaleX(-1);
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
    width: ${({ expanded }) => (expanded ? 'min(82vw, 240px)' : '0')};
    margin: 0;
    padding: ${({ expanded }) => (expanded ? '4px' : '0')};
    border-left: 0;
    overflow-x: hidden;
    box-shadow: ${({ expanded }) => (expanded ? '4px 0 12px rgba(0, 0, 0, 0.15)' : 'none')};
  }
`

const TagDivider = styled.div`
  width: 100%;
  height: 1px;
  margin: 8px 0 4px;
  background: var(--mavis-brand-border);
`

const TagRow = styled.div<{ $active?: boolean }>`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  gap: 4px;
  margin: 1px 0;
  z-index: ${({ $active }) => ($active ? 9999 : 1)};
`

const ExplorerHeader = styled(IconButton)`
  && {
    min-height: 32px;
    height: 32px;
    margin: 0 0 4px !important;
    padding: ${({ expanded }) => (expanded ? '0 8px' : '0')} !important;
    border-radius: 6px;
    color: var(--mavis-brand-deep);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`

const ExplorerSectionLabel = styled.div`
  padding: 8px 8px 4px;
  color: var(--mavis-muted);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
`

interface FolderTreeProps {
  $expanded: boolean
}

const FolderTree = styled.div<FolderTreeProps>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-left: ${({ $expanded }) => ($expanded ? '10px' : '0')};
  padding-left: ${({ $expanded }) => ($expanded ? '6px' : '0')};
  border-left: ${({ $expanded }) => ($expanded ? '1px solid var(--mavis-brand-border)' : '0')};
`

interface ExplorerItemProps {
  $selected: boolean
}

const ExplorerItem = styled(IconButton)<ExplorerItemProps>`
  && {
    width: ${({ expanded }) => (expanded ? 'auto' : '30px')} !important;
    min-width: 0;
    min-height: 28px;
    height: 28px;
    flex: ${({ expanded }) => (expanded ? '1 1 auto' : '0 0 30px')};
    margin: 0 !important;
    padding: ${({ expanded }) => (expanded ? '0 8px' : '0')} !important;
    border: 0;
    border-left: 2px solid ${({ $selected }) => ($selected ? 'var(--mavis-brand)' : 'transparent')};
    border-radius: 4px;
    background: ${({ $selected }) => ($selected ? 'var(--mavis-brand-soft)' : 'transparent')};
    color: ${({ $selected }) => ($selected ? 'var(--mavis-brand-deep)' : 'var(--mavis-muted)')};
  }

  &:hover {
    background: ${({ $selected }) =>
      $selected ? 'var(--mavis-brand-soft)' : 'var(--mavis-surface-hover)'};
  }

  svg {
    width: 15px;
    height: 15px;
  }

  span {
    font-size: 12px;
    font-weight: ${({ $selected }) => ($selected ? 600 : 500)};
  }
`

const MenuWrapper = styled.div`
  position: relative;
  flex: 0 0 22px;
`

const RestoreExplorerButton = styled(IconButton)`
  && svg {
    color: var(--mavis-brand) !important;
  }
`

const MenuButton = styled.button`
  display: flex;
  width: 22px;
  height: 26px;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  border-radius: 4px;
  color: var(--mavis-muted);
  cursor: pointer;
  padding: 0;

  &:hover:not(:disabled) {
    background: var(--mavis-brand-soft);
    color: var(--mavis-brand);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`

const PopupMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 160px;
  background: var(--mavis-surface);
  color: var(--mavis-text);
  border: 1px solid var(--mavis-brand-border);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 999;
`

const MenuItem = styled.button<{ disabled?: boolean }>`
  display: block;
  width: 100%;
  padding: 10px;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover:not(:disabled) {
    background: var(--mavis-surface-hover);
  }
`

const RenameInput = styled.input`
  width: 100px;
  margin-left: 8px;
  border: 1px solid var(--mavis-border);
  border-radius: 6px;
  background: var(--mavis-input);
  color: var(--mavis-text);
`
