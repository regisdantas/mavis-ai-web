import React from 'react'
import styled from 'styled-components'
import { FiCpu, FiMenu, FiPlus, FiTrash2 } from 'react-icons/fi'
import { IconButton } from '../../../styles/global'
import { useChatAi } from '../context/ChatAiContext'

interface ChatSideBarProps {
  minimized?: boolean
  setMinimized: (minimized: boolean) => void
}
export const ChatSideBar: React.FC<ChatSideBarProps> = ({ minimized, setMinimized }) => {
  const [menuExpanded, setMenuExpanded] = React.useState(false)
  const {
    sessions,
    currentSessionId,
    createNewSession,
    loadSession,
    deleteSession,
    removeSession,
  } = useChatAi()

  return (
    <Container expanded={menuExpanded}>
      <IconButton
        expanded={menuExpanded}
        title="Menu"
        onClick={() => setMenuExpanded(!menuExpanded)}
      >
        <FiMenu />
        {menuExpanded && <span>Sessions</span>}
      </IconButton>
      {minimized && (
        <IconButton
          expanded={menuExpanded}
          title="Expand Chat"
          onClick={() => setMinimized(!minimized)}
        >
          <FiCpu />
          {menuExpanded && <span>Expand Chat</span>}
        </IconButton>
      )}
      <IconButton expanded={menuExpanded} onClick={() => void createNewSession()}>
        <FiPlus />
        {menuExpanded && <span>New Chat</span>}
      </IconButton>
      <SessionsContainer disabled={!menuExpanded}>
        {sessions.map((session) => (
          <SessionRow key={session.id}>
            <SessionItem
              active={currentSessionId === session.id}
              onClick={() => loadSession(session.id)}
            >
              {session.title}
            </SessionItem>

            <DeleteButton
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
    </Container>
  )
}

interface ContainerProps {
  expanded: boolean
}

const Container = styled.div<ContainerProps>`
  width: ${(props) => (props.expanded ? '180px' : '40px')};
  position: static;
  right: 0;
  top: 40px;
  height: 100%;
  border-left: 1px solid #d0d0d0;
  padding: 4px;
  overflow-y: none;
  overflow-x: visible;
  background: #f8f8f8;
  margin-left: 6px;
  transition: width 0.3s ease-in-out;
`

const SessionsContainer = styled.div<{ disabled: boolean }>`
  display: ${(props) => (props.disabled ? 'none' : 'flex')};
  flex-direction: column;
  gap: 6px;
  margin-top: 12px;
`

const SessionItem = styled.div<{ active: boolean }>`
  flex: 1;

  display: flex;
  align-items: center;

  min-height: 28px;

  padding: 4px 10px;

  border-radius: 999px;

  background: ${({ active }) => (active ? '#4f46e5' : 'rgba(79, 70, 229, 0.12)')};

  color: ${({ active }) => (active ? '#fff' : '#4338ca')};

  font-size: 11px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background: ${({ active }) => (active ? '#4f46e5' : 'rgba(79, 70, 229, 0.2)')};
  }
`

const SessionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const DeleteButton = styled.button`
  width: 26px;
  height: 26px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 999px;

  background: rgba(79, 70, 229, 0.12);

  color: #4338ca;

  cursor: pointer;

  transition: 0.2s;

  flex-shrink: 0;

  &:hover {
    background: rgba(239, 68, 68, 0.15);
    color: #ef4444;
  }
`
