import React from 'react'
import styled from 'styled-components'
import { FiMaximize2, FiMenu, FiMinusSquare } from 'react-icons/fi'
import { IconButton } from '../../../styles/global'

interface ChatToolbarProps {
  onClearAll: () => void
  panelWidth: number
  toolbarOffset: number
  minimized: boolean
  setMinimized: (value: boolean) => void
  menuExpanded: boolean
  setMenuExpanded: (expanded: boolean) => void
  mobileActive?: boolean
}

export const ChatToolbar: React.FC<ChatToolbarProps> = ({
  panelWidth,
  toolbarOffset,
  minimized,
  setMinimized,
  menuExpanded,
  setMenuExpanded,
  mobileActive,
}) => {
  return (
    <ToolbarContainer
      toolbarOffset={toolbarOffset}
      barWidth={panelWidth}
      minimized={minimized}
      mobileActive={mobileActive}
    >
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
      <SelectedPage>Chat</SelectedPage>
    </ToolbarContainer>
  )
}

interface ToolbarContainerProps {
  toolbarOffset: number
  barWidth: number
  minimized?: boolean
  mobileActive?: boolean
}

const ToolbarContainer = styled.div<ToolbarContainerProps>`
  display: ${({ minimized }) => (minimized ? 'none' : 'flex')};
  position: absolute;
  z-index: 30;
  left: ${({ toolbarOffset }) => `${toolbarOffset}px`};
  top: 10px;
  width: ${({ barWidth }) => `${barWidth}px`};
  flex-direction: row;
  align-items: center;
  height: 32px;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid var(--mavis-brand-border);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: var(--mavis-panel);

  @media (max-width: 768px) {
    display: ${({ mobileActive }) => (mobileActive ? 'flex' : 'none')};
    position: relative;
    top: auto;
    left: auto;
    flex: 1 1 auto;
    width: 100%;
    min-width: 0;
    height: 40px;
    margin: 0;
    overflow: hidden;
    border: 0;
    border-radius: 0;
    background: transparent;
    justify-content: flex-start;

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
  color: var(--mavis-text);
  font-size: 1rem;

  @media (max-width: 768px) {
    display: none;
    color: #fff;
  }
`

const PanelToggle = styled(IconButton)`
  @media (max-width: 768px) {
    display: none !important;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  width: 20px;
  height: 30px;
  flex: 0 0 20px;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: #fff;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 768px) {
    display: flex;
    margin-left: 20px;
  }
`
