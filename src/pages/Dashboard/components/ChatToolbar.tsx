import React from 'react'
import styled from 'styled-components'
import { FiCpu, FiLock, FiMaximize2, FiMenu, FiMinusSquare, FiUnlock } from 'react-icons/fi'
import { IconButton } from '../../../styles/global'

interface ChatToolbarProps {
  onClearAll: () => void
  expanded: boolean
  panelWidth: number
  minimized: boolean
  setMinimized: (value: boolean) => void
  notesMinimized: boolean
  menuExpanded: boolean
  setMenuExpanded: (expanded: boolean) => void
  mobileActive?: boolean
  notesLocked: boolean
  onToggleNotesLock: () => void
}

export const ChatToolbar: React.FC<ChatToolbarProps> = ({
  expanded,
  panelWidth,
  minimized,
  setMinimized,
  notesMinimized,
  menuExpanded,
  setMenuExpanded,
  mobileActive,
  notesLocked,
  onToggleNotesLock,
}) => {
  const explorerWidth = expanded ? 208 : 52
  return (
    <ToolbarContainer
      explorerWidth={explorerWidth}
      notesMinimized={notesMinimized}
      barWidth={panelWidth}
      minimized={minimized}
      mobileActive={mobileActive}
    >
      <SelectedPage>
        <FiCpu />
        Chat
      </SelectedPage>
      <ActionsContainer>
        <EditLockButton
          type="button"
          title={notesLocked ? 'Unlock note editing' : 'Lock note editing'}
          aria-label={notesLocked ? 'Unlock note editing' : 'Lock note editing'}
          aria-pressed={notesLocked}
          onClick={onToggleNotesLock}
        >
          {notesLocked ? <FiLock /> : <FiUnlock />}
        </EditLockButton>
        <MobileMenuButton
          type="button"
          title={menuExpanded ? 'Collapse sessions menu' : 'Expand sessions menu'}
          aria-label={menuExpanded ? 'Collapse sessions menu' : 'Expand sessions menu'}
          data-sidebar-toggle="sessions"
          onClick={() => setMenuExpanded(!menuExpanded)}
        >
          <FiMenu />
        </MobileMenuButton>
        <PanelToggle
          title={minimized ? 'Restore chat panel' : 'Minimize chat panel'}
          onClick={() => setMinimized(!minimized)}
        >
          {minimized ? <FiMaximize2 /> : <FiMinusSquare />}
        </PanelToggle>
      </ActionsContainer>
    </ToolbarContainer>
  )
}

interface ToolbarContainerProps {
  explorerWidth: number
  barWidth: number
  minimized?: boolean
  notesMinimized: boolean
  mobileActive?: boolean
}

const ToolbarContainer = styled.div<ToolbarContainerProps>`
  display: ${({ minimized }) => (minimized ? 'none' : 'flex')};
  width: ${({ barWidth }) => `${barWidth}px`};
  margin-left: ${({ explorerWidth, notesMinimized }) =>
    `${notesMinimized ? explorerWidth + 10 : 10}px`} !important;
  flex-direction: row;
  align-items: center;
  height: 32px;
  padding: 0;
  margin-left: 10px;
  margin-top: 10px;
  border-bottom: 1px solid #d0d0d0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #e0e0e5;
  position: relative;

  @media (max-width: 768px) {
    display: ${({ mobileActive }) => (mobileActive ? 'flex' : 'none')};
    flex: 1 1 auto;
    width: 100%;
    min-width: 0;
    height: 40px;
    margin: 0;
    overflow: hidden;
    border: 0;
    border-radius: 0;
    background: transparent;
    justify-content: flex-end;

    && ${IconButton} svg {
      color: #fff !important;
    }

    && ${IconButton}:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`

const SelectedPage = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  gap: 10px;
  height: 35px;
  margin: 0px 10px;

  @media (max-width: 768px) {
    display: none;
    color: #fff;
  }
`

const ActionsContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 35px;
`

const PanelToggle = styled(IconButton)`
  @media (max-width: 768px) {
    display: none !important;
  }
`

const EditLockButton = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin: 2px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: #2e2e2e;
  cursor: pointer;

  &:hover {
    background: rgba(128, 128, 128, 0.15);
  }

  @media (max-width: 768px) {
    color: #fff;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`

const MobileMenuButton = styled.button`
  display: none;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin: 2px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: #2e2e2e;

  &:hover {
    background: rgba(128, 128, 128, 0.15);
  }

  @media (max-width: 768px) {
    display: flex;
    color: #fff;
  }
`
