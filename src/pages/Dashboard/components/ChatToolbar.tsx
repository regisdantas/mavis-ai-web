import React from 'react'
import styled from 'styled-components'
import { FiCpu } from 'react-icons/fi'
import { FiMinusSquare } from 'react-icons/fi'
import { IconButton } from '../../../styles/global'

interface ChatToolbarProps {
  onClearAll: () => void
  expanded: boolean
  panelWidth: number
  minimized: boolean
  setMinimized: (value: boolean) => void
  notesMinimized: boolean
}

export const ChatToolbar: React.FC<ChatToolbarProps> = ({
  expanded,
  panelWidth,
  minimized,
  setMinimized,
  notesMinimized,
}) => {
  const explorerWidth = expanded ? 188 : 52
  return (
    <ToolbarContainer
      explorerWidth={explorerWidth}
      notesMinimized={notesMinimized}
      barWidth={panelWidth}
      minimized={minimized}
    >
      <SelectedPage>
        <FiCpu />
        Chat
      </SelectedPage>
      <ActionsContainer>
        <IconButton title={'Minimize chat panel'} onClick={() => setMinimized(true)}>
          <FiMinusSquare />
        </IconButton>
      </ActionsContainer>
    </ToolbarContainer>
  )
}

interface ToolbarContainerProps {
  explorerWidth: number
  barWidth: number
  minimized?: boolean
  notesMinimized: boolean
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
`

const SelectedPage = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  height: 35px;
  margin: 0px 10px;
`

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
`
