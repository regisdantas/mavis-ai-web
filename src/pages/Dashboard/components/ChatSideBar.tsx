import React from 'react'
import styled from 'styled-components'
import { FiCpu, FiMapPin, FiMenu, FiPlus, FiTrash2 } from 'react-icons/fi'
import mavis from '../../../assets/mavis.png'
import { IconButton } from '../../../styles/global'
import { useChatAi } from '../context/ChatAiContext'

interface ChatSideBarProps {
  minimized?: boolean
  setMinimized: (minimized: boolean) => void
  menuExpanded: boolean
  setMenuExpanded: (expanded: boolean) => void
}
export const ChatSideBar: React.FC<ChatSideBarProps> = ({
  minimized,
  setMinimized,
  menuExpanded,
  setMenuExpanded,
}) => {
  const {
    sessions,
    currentSessionId,
    createNewSession,
    loadSession,
    deleteSession,
    removeSession,
    toggleSessionPin,
  } = useChatAi()
  const sidebarRef = React.useRef<HTMLDivElement>(null)
  const closeMenuAfterSelection = () => setMenuExpanded(false)

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!menuExpanded) {
        return
      }

      const target = event.target

      if (!(target instanceof Node) || sidebarRef.current?.contains(target)) {
        return
      }

      if (target instanceof Element && target.closest('[data-sidebar-toggle="sessions"]')) {
        return
      }

      setMenuExpanded(false)
    }

    document.addEventListener('click', handleOutsideClick)

    return () => document.removeEventListener('click', handleOutsideClick)
  }, [menuExpanded, setMenuExpanded])

  return (
    <SidebarSlot ref={sidebarRef} data-testid="sessions-rail">
      {!menuExpanded && (
        <CollapsedControls>
          <IconButton
            title="Menu"
            data-sidebar-toggle="sessions"
            onClick={() => setMenuExpanded(true)}
          >
            <FiMenu />
          </IconButton>
          {minimized && (
            <IconButton
              title="Expand Chat"
              onClick={() => {
                setMinimized(false)
                closeMenuAfterSelection()
              }}
            >
              <FiCpu />
            </IconButton>
          )}
          <IconButton
            title="New Chat"
            onClick={() => {
              void createNewSession()
              closeMenuAfterSelection()
            }}
          >
            <FiPlus />
          </IconButton>
        </CollapsedControls>
      )}

      <SessionDrawer
        expanded={menuExpanded}
        minimized={minimized}
        role="complementary"
        aria-label="Chat sessions"
        aria-hidden={!menuExpanded}
      >
        {menuExpanded && (
          <>
            {minimized && (
              <IconButton
                expanded
                title="Expand Chat"
                onClick={() => {
                  setMinimized(false)
                  closeMenuAfterSelection()
                }}
              >
                <FiCpu />
                <span>Expand Chat</span>
              </IconButton>
            )}
            <IconButton
              expanded
              title="New Chat"
              onClick={() => {
                void createNewSession()
                closeMenuAfterSelection()
              }}
            >
              <FiPlus />
              <span>New Chat</span>
            </IconButton>
            <SessionsContainer>
              {sessions.map((session) => (
                <SessionRow key={session.id}>
                  <SessionItem
                    active={currentSessionId === session.id}
                    onClick={() => {
                      loadSession(session.id)
                      closeMenuAfterSelection()
                    }}
                  >
                    {session.title}
                  </SessionItem>

                  <PinButton
                    type="button"
                    $pinned={Boolean(session.pinned)}
                    aria-label={session.pinned ? 'Unpin session' : 'Pin session'}
                    aria-pressed={Boolean(session.pinned)}
                    title={session.pinned ? 'Unpin session' : 'Pin session'}
                    onClick={() => {
                      void toggleSessionPin(session.id).catch((error) => {
                        console.error('Failed to update session pin.', error)
                      })
                    }}
                  >
                    <FiMapPin />
                  </PinButton>

                  <DeleteButton
                    aria-label="Delete session"
                    onClick={(event) => {
                      event.stopPropagation()
                      void deleteSession(session.id)
                    }}
                  >
                    <FiTrash2 size={12} />
                  </DeleteButton>
                </SessionRow>
              ))}
            </SessionsContainer>
          </>
        )}
      </SessionDrawer>
    </SidebarSlot>
  )
}

interface SessionDrawerProps {
  expanded: boolean
  minimized?: boolean
}

const SidebarSlot = styled.div`
  width: 60px;
  height: 100%;
  flex: 0 0 60px;
  overflow: visible;
  padding: 4px;
  border-left: 1px solid var(--mavis-brand-border);
  background: ${({ theme }) => theme.surfaceSubtle || '#f7f6fc'};

  @media (max-width: 768px) {
    width: 0;
    min-width: 0;
    height: 100%;
    flex: 0 0 0;
    padding: 0;
    overflow: visible;
    border: 0;
    background: transparent;
  }
`

const CollapsedControls = styled.div`
  position: relative;
  z-index: 21;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    display: none;
  }
`

const SessionDrawer = styled.aside<SessionDrawerProps>`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 20;
  pointer-events: ${({ expanded }) => (expanded ? 'auto' : 'none')};
  pointer-events: ${({ expanded }) => (expanded ? 'auto' : 'none')};
  height: 100%;
  width: ${({ expanded, minimized }) => (expanded ? (minimized ? '400px' : '100%') : '0')};
  padding: ${({ expanded }) => (expanded ? '4px' : '0')};
  overflow-x: hidden;
  overflow-y: ${({ expanded }) => (expanded ? 'auto' : 'hidden')};
  border-left: 1px solid var(--mavis-brand-border);
  background: ${({ theme }) => theme.surfaceSubtle || '#f7f6fc'};
  box-shadow: ${({ expanded }) => (expanded ? '-4px 0 12px rgba(36, 32, 68, 0.16)' : 'none')};
  transition: width 0.3s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${mavis});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: auto 86%;
    opacity: 0.12;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    right: auto;
    left: 0;
    width: ${({ expanded }) => (expanded ? '50%' : '0')};
    padding: ${({ expanded }) => (expanded ? '4px' : '0')};
    border-left: 0;
    border-right: ${({ expanded }) => (expanded ? '1px solid var(--mavis-brand-border)' : '0')};
    box-shadow: ${({ expanded }) => (expanded ? '4px 0 12px rgba(36, 32, 68, 0.16)' : 'none')};
  }
`

const SessionsContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
`

const SessionItem = styled.div<{ active: boolean }>`
  flex: 1;
  min-width: 0;

  display: flex;
  align-items: center;

  min-height: 28px;

  padding: 4px 10px;

  border-radius: 999px;

  background: ${({ active }) => (active ? 'var(--mavis-brand)' : 'var(--mavis-brand-soft)')};

  color: ${({ active }) => (active ? 'var(--mavis-text-inverse)' : 'var(--mavis-brand)')};

  font-size: 11px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background: ${({ active }) =>
      active ? 'var(--mavis-brand-strong)' : 'var(--mavis-secondary-bg-hover)'};
  }
`

const SessionRow = styled.div`
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  gap: 4px;
`

const PinButton = styled.button<{ $pinned: boolean }>`
  display: flex;
  width: 26px;
  height: 26px;
  flex: 0 0 26px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: ${({ $pinned }) => ($pinned ? 'var(--mavis-brand-soft)' : 'transparent')};
  color: ${({ $pinned }) => ($pinned ? 'var(--mavis-brand)' : 'var(--mavis-muted)')};
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: var(--mavis-brand-soft);
    color: var(--mavis-brand);
  }

  svg {
    width: 14px;
    height: 14px;
    fill: ${({ $pinned }) => ($pinned ? 'currentColor' : 'none')};
  }
`

const DeleteButton = styled.button`
  width: 26px;
  height: 26px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 999px;

  background: var(--mavis-brand-soft);

  color: var(--mavis-brand);

  cursor: pointer;

  transition: 0.2s;

  flex-shrink: 0;

  &:hover {
    background: rgba(239, 68, 68, 0.15);
    color: var(--mavis-danger);
  }
`
