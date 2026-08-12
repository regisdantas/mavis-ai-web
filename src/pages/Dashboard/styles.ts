import styled from 'styled-components'

export const EntryList = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-bottom: 60px;
`

export const ContentContainer = styled.div`
  flex: 1;
  padding: 0 20px;
`

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const ChatHistory = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ChatMessageBubble = styled.div<{ role: string }>`
  max-width: 90%;
  padding: 10px 14px;
  border-radius: 12px;

  white-space: pre-wrap;
  word-break: break-word;

  align-self: ${({ role }) => (role === 'user' ? 'flex-end' : 'flex-start')};

  background: ${({ role }) => (role === 'user' ? '#2563eb' : '#f5f5f5')};

  color: ${({ role }) => (role === 'user' ? '#fff' : '#222')};
`
export const ChatInputContainer = styled.div`
  border-top: 1px solid #d0d0d0;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background: #e0e0e5;
`

export const ChatTextarea = styled.textarea`
  resize: none;
  min-height: 80px;
  max-height: 200px;

  border: 1px solid #ccc;
  border-radius: 8px;

  padding: 10px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`

export const MenuBarContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100px;

  @media (max-width: 1260px) {
    top: 3px;
    right: 2px;
  }
`

export const NotesMiniMap = styled.div`
  position: fixed;

  left: 160px;
  top: 40px;

  width: 40px;
  height: calc(100vh - 40px);

  display: flex;
  flex-direction: column;

  overflow: hidden;

  background: #e0e0e5;

  z-index: 25;

  padding-top: 6px;
`

export const MiniMapItem = styled.div<{ $selected?: boolean }>`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 2px;

  border-radius: 4px;

  padding: 0 2px;

  border: ${({ $selected }) => ($selected ? '2px solid #2563eb' : '1px solid transparent')};
  button:hover {
    background: white;
  }

  svg {
    margin: 0;
    padding: 0;
  }
`
