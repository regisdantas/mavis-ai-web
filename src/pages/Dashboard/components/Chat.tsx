import React from 'react'
import styled from 'styled-components'
import { FiSend, FiCopy, FiTrash2, FiMaximize2, FiMinimize2, FiX, FiCpu } from 'react-icons/fi'
import { IconButton } from '../../../styles/global'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { useChatAi } from '../context/ChatAiContext'
import { MdOutlineLayersClear, MdHistoryToggleOff, MdOutlineSummarize } from 'react-icons/md'
import { TbMessagesOff } from 'react-icons/tb'
import { TbPrompt } from 'react-icons/tb'
import { ChatMessage } from '../types/chat'
import mavis from '../../../assets/mavis.png'

const modelsAvailable = ['gpt-5-mini', 'gpt-6-luna', 'gpt-5.6-terra', 'gpt-5.6-sol']

interface ChatProps {
  uid: string
  selectedNotesText: string
  noteTitles: string[]
  notesCount: number
  clearSelectedNotes: () => void
}

export const Chat: React.FC<ChatProps> = ({
  uid,
  selectedNotesText,
  noteTitles,
  notesCount,
  clearSelectedNotes,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const {
    prompt,
    setPrompt,
    messages,
    isLoading,
    sendPrompt,
    deleteMessage,

    selectedModel,
    setSelectedModel,

    selectedPromptIds,
    availablePromptNotes,
    togglePrompt,

    includeHistory,
    setIncludeHistory,

    summarizeHistory,
  } = useChatAi()

  const [modelPickerOpen, setModelPickerOpen] = React.useState(false)
  const [promptPickerOpen, setPromptPickerOpen] = React.useState(false)
  const modelPickerRef = React.useRef<HTMLDivElement>(null)
  const promptPickerRef = React.useRef<HTMLDivElement>(null)
  const chatHistoryRef = React.useRef<HTMLDivElement>(null)
  const chatMessageRefs = React.useRef<Record<string, HTMLDivElement | null>>({})
  const [chatScrollProgress, setChatScrollProgress] = React.useState(0)

  const updateChatScrollProgress = React.useCallback((element: HTMLDivElement) => {
    const maxScrollTop = element.scrollHeight - element.clientHeight
    const progress = maxScrollTop > 0 ? element.scrollTop / maxScrollTop : 0

    setChatScrollProgress(Math.min(1, Math.max(0, progress)))
  }, [])

  const handleChatHistoryScroll = React.useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      updateChatScrollProgress(event.currentTarget)
    },
    [updateChatScrollProgress]
  )

  React.useLayoutEffect(() => {
    const chatHistory = chatHistoryRef.current

    if (!chatHistory) {
      return
    }

    chatHistory.scrollTop = Math.max(0, chatHistory.scrollHeight - chatHistory.clientHeight)
    updateChatScrollProgress(chatHistory)
  }, [isLoading, messages, updateChatScrollProgress])

  const closeModelPicker = React.useCallback(() => setModelPickerOpen(false), [])
  const closePromptPicker = React.useCallback(() => setPromptPickerOpen(false), [])

  useClickOutside(modelPickerRef, closeModelPicker)
  useClickOutside(promptPickerRef, closePromptPicker)

  const handleModelPickerClick = () => {
    setPromptPickerOpen(false)
    setModelPickerOpen((isOpen) => !isOpen)
  }

  const handleClearMessages = () => {
    deleteMessage('all')
  }

  const handleCopyMessage = async (content: string) => {
    await navigator.clipboard.writeText(content)
  }

  const handleCopyInput = async () => {
    if (!prompt.trim()) {
      return
    }

    await navigator.clipboard.writeText(prompt)
  }

  const handleClearInput = () => {
    setPrompt('')
  }

  const scrollToChatMessage = React.useCallback((id: string) => {
    const chatHistory = chatHistoryRef.current
    const message = chatMessageRefs.current[id]

    if (!chatHistory || !message) {
      return
    }

    const chatHistoryTop = chatHistory.getBoundingClientRect().top
    const messageTop = message.getBoundingClientRect().top

    chatHistory.scrollTo({
      top: Math.max(0, chatHistory.scrollTop + messageTop - chatHistoryTop - 12),
      behavior: 'smooth',
    })
  }, [])

  return (
    <ChatContainer>
      <ChatHistoryArea>
        <ChatHistory
          ref={chatHistoryRef}
          role="log"
          aria-label="Chat messages"
          onScroll={handleChatHistoryScroll}
        >
          {messages.length === 0 && !isLoading && (
            <ChatWelcome>
              <ChatWelcomeAvatar>
                <ChatWelcomeImage src={mavis} alt="" />
              </ChatWelcomeAvatar>
              <ChatWelcomeTitle>Hi, I'm Mavis.</ChatWelcomeTitle>
              <ChatWelcomeText>
                Your files, ideas, and memories are ready when you need them. Ask me to help you
                find a thread, make a plan, or think something through.
              </ChatWelcomeText>
            </ChatWelcome>
          )}
          {messages.map((message) => (
            <MessageContainer
              key={message.id}
              ref={(element) => {
                chatMessageRefs.current[message.id] = element
              }}
              role={message.role}
            >
              <MessageInfo role={message.role}>
                {message.tokens && (
                  <span>
                    In: {message.tokens.input}tks Out: {message.tokens.output}tks
                  </span>
                )}
              </MessageInfo>
              <ChatMessageBubble role={message.role}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    table({ node: _node, children, ...props }) {
                      return (
                        <ChatTableScrollWrapper>
                          <table {...props}>{children}</table>
                        </ChatTableScrollWrapper>
                      )
                    },
                  }}
                >
                  {message.content}
                </ReactMarkdown>
              </ChatMessageBubble>
              <MessageTools role={message.role}>
                <IconButton
                  title="Copy message"
                  onClick={() => void handleCopyMessage(message.content)}
                >
                  <FiCopy />
                </IconButton>
                <IconButton title="Delete message" onClick={() => deleteMessage(message.id)}>
                  <FiTrash2 />
                </IconButton>
              </MessageTools>
            </MessageContainer>
          ))}
          {isLoading && <ChatMessageBubble role="assistant">Thinking...</ChatMessageBubble>}
        </ChatHistory>
        <ChatMiniMap
          messages={messages}
          scrollProgress={chatScrollProgress}
          onScrollToMessage={scrollToChatMessage}
        />
      </ChatHistoryArea>
      <ChatInputArea expanded={isExpanded}>
        <ChatInputContainer>
          <ChatInputHeader>
            <PromptPicker ref={promptPickerRef}>
              <FlatIconButton
                title="Prompt presets"
                onClick={() => {
                  setModelPickerOpen(false)
                  setPromptPickerOpen((isOpen) => !isOpen)
                }}
              >
                <TbPrompt />
                <IconButtonLabel>Prompts ({selectedPromptIds.length})</IconButtonLabel>
              </FlatIconButton>

              {promptPickerOpen && (
                <ModelDropdown>
                  {availablePromptNotes.map((prompt) => (
                    <ModelOption
                      key={prompt.id}
                      className={selectedPromptIds.includes(prompt.id) ? 'selected' : ''}
                      onClick={() => void togglePrompt(prompt.id)}
                    >
                      <TbPrompt />
                      <span>{prompt.title}</span>
                    </ModelOption>
                  ))}
                </ModelDropdown>
              )}
            </PromptPicker>
            <ModelPicker ref={modelPickerRef}>
              <FlatIconButton
                style={{ margin: '0px !important' }}
                title="Selecionar modelo de IA"
                onClick={handleModelPickerClick}
              >
                <FiCpu />
                <IconButtonLabel>{selectedModel}</IconButtonLabel>
              </FlatIconButton>

              {modelPickerOpen && (
                <ModelDropdown>
                  {modelsAvailable.map((model) => (
                    <ModelOption
                      key={model}
                      className={selectedModel === model ? 'selected' : ''}
                      onClick={() => {
                        setSelectedModel(model)
                        setModelPickerOpen(false)
                      }}
                      title={model}
                    >
                      <FiCpu />
                      <span>{model}</span>
                    </ModelOption>
                  ))}
                </ModelDropdown>
              )}
            </ModelPicker>
            <ChatInfo>Notes: {notesCount}</ChatInfo>
          </ChatInputHeader>
          <TextareaWrapper>
            <ChatTextarea
              expanded={isExpanded}
              value={prompt}
              placeholder="Ask Mavis..."
              disabled={isLoading}
              onChange={(event) => setPrompt(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  event.preventDefault()
                  void sendPrompt()
                }
              }}
            />
            <ChatActions>
              <IconButton title="Summarize History" onClick={() => void summarizeHistory()}>
                <MdOutlineSummarize />
              </IconButton>
              <IconButton title="Include chat history in prompts">
                <MdHistoryToggleOff
                  color={includeHistory ? 'var(--mavis-brand)' : 'var(--mavis-muted)'}
                  onClick={() => setIncludeHistory(!includeHistory)}
                />
              </IconButton>
              <IconButton title="Clear chat history" onClick={() => handleClearMessages()}>
                <TbMessagesOff />
              </IconButton>
              <IconButton
                title={isExpanded ? 'Collapse' : 'Expand'}
                onClick={() => setIsExpanded((old) => !old)}
              >
                {isExpanded ? <FiMinimize2 /> : <FiMaximize2 />}
              </IconButton>
              <IconButton
                title="Copy input"
                onClick={() => void handleCopyInput()}
                disabled={!prompt.trim()}
              >
                <FiCopy />
              </IconButton>
              <IconButton
                title="Send prompt"
                onClick={() => void sendPrompt()}
                disabled={isLoading || !prompt.trim()}
              >
                <FiSend />
              </IconButton>
              <IconButton title="Clear input" onClick={handleClearInput} disabled={!prompt.trim()}>
                <FiX />
              </IconButton>
              <IconButton
                title="Clear selected notes"
                onClick={clearSelectedNotes}
                disabled={notesCount === 0}
              >
                <MdOutlineLayersClear />
              </IconButton>
            </ChatActions>
          </TextareaWrapper>
        </ChatInputContainer>
      </ChatInputArea>
    </ChatContainer>
  )
}

interface ChatMiniMapProps {
  messages: ChatMessage[]
  scrollProgress: number
  onScrollToMessage: (id: string) => void
}

const ChatMiniMap: React.FC<ChatMiniMapProps> = ({
  messages,
  scrollProgress,
  onScrollToMessage,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    const container = containerRef.current

    if (!container) {
      return
    }

    const maxScrollTop = container.scrollHeight - container.clientHeight
    container.scrollTop = Math.max(0, maxScrollTop * scrollProgress)
  }, [messages, scrollProgress])

  return (
    <ChatMiniMapContainer ref={containerRef} role="group" aria-label="Chat message minimap">
      {messages.map((message, index) => (
        <ChatMiniMapMessage
          key={message.id}
          type="button"
          aria-label={`Go to ${message.role} message ${index + 1}`}
          title={`${message.role === 'user' ? 'You' : 'Mavis'} message ${index + 1}`}
          $role={message.role}
          style={{
            height: `${Math.min(Math.max(Math.ceil(message.content.length / 80) * 8, 8), 60)}px`,
          }}
          onClick={() => onScrollToMessage(message.id)}
        />
      ))}
    </ChatMiniMapContainer>
  )
}

const MessageContainer = styled.div<{ role: string }>`
  display: flex;
  flex-direction: column;

  align-items: ${({ role }) => (role === 'user' ? 'flex-end' : 'flex-start')};
`

const ChatWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 380px;
  margin: auto;
  padding: 24px;
  text-align: center;
`

const ChatWelcomeAvatar = styled.div`
  width: 92px;
  height: 92px;
  margin-bottom: 16px;
  overflow: hidden;
  border: 1px solid var(--mavis-brand-border);
  border-radius: 50%;
  background: radial-gradient(circle at 50% 25%, var(--mavis-surface), var(--mavis-brand-soft));
  box-shadow: 0 8px 24px rgba(36, 32, 68, 0.12);
`

const ChatWelcomeImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 8%;
`

const ChatWelcomeTitle = styled.h2`
  margin: 0 0 8px;
  color: var(--mavis-brand-deep);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.04em;
`

const ChatWelcomeText = styled.p`
  max-width: 340px;
  margin: 0;
  color: var(--mavis-muted);
  font-size: 13px;
  line-height: 1.6;
`

const MessageTools = styled.div<{ role: string }>`
  display: flex;
  gap: 4px;
  margin-top: 2px;
  opacity: 0.7;
  align-self: ${({ role }) => (role === 'user' ? 'flex-end' : 'flex-start')};
  transition: opacity 0.15s ease;
  &:hover {
    opacity: 1;
  }
`

const MessageInfo = styled.div<{ role: string }>`
  font-size: 10px;
  color: var(--mavis-muted);
  margin-bottom: 2px;
  align-self: ${({ role }) => (role === 'user' ? 'flex-end' : 'flex-start')};
  white-space: nowrap;
`

const TextareaWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
`

const ChatInputHeader = styled.span`
  font-size: 12px;
  color: var(--mavis-muted);
  margin-bottom: 4px;
  gap: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const ChatInfo = styled.span`
  font-size: 12px;
  color: var(--mavis-muted);
`

const ChatActions = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  gap: 2px;
  z-index: 2;
`

const ChatContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--mavis-page);
`

const ChatHistoryArea = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: hidden;
  background: var(--mavis-surface-subtle);
`

const ChatHistory = styled.div`
  flex: 1;
  min-width: 0;
  min-height: 0;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  scrollbar-width: thin;
  background: var(--mavis-surface-subtle);
  scrollbar-color: var(--mavis-scrollbar) var(--mavis-surface-subtle);
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: var(--mavis-surface-subtle);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--mavis-scrollbar);
    border-radius: 6px;
    border: 2px solid var(--mavis-surface-subtle);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--mavis-border-strong);
  }

  &,
  p,
  li,
  span,
  strong,
  em,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
  }
`

const ChatMiniMapContainer = styled.div`
  flex: 0 0 20px;
  width: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 12px 3px;
  overflow-y: auto;
  border-left: 1px solid var(--mavis-brand-border);
  background: var(--mavis-panel);
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const ChatMiniMapMessage = styled.button<{ $role: ChatMessage['role'] }>`
  width: 100%;
  min-height: 5px;
  flex-shrink: 0;
  padding: 0;
  border: 0;
  border-radius: 3px;
  background: ${({ $role }) => ($role === 'user' ? '#5b4bd8' : '#c4b5fd')};
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`

const ChatTableScrollWrapper = styled.div`
  width: 100%;
  min-width: 0;
  max-width: 100%;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scrollbar-width: thin;
  scrollbar-color: #c6c0e8 transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c6c0e8;
    border-radius: 6px;
  }
`

const ChatMessageBubble = styled.div<{ role: string }>`
  max-width: 100%;
  min-width: 0;
  padding: 10px 14px;
  border-radius: 12px;
  white-space: pre-wrap;
  word-break: break-word;
  align-self: ${({ role }) => (role === 'user' ? 'flex-end' : 'flex-start')};
  background: ${({ role }) => (role === 'user' ? 'var(--mavis-brand)' : 'var(--mavis-surface)')};
  color: ${({ role }) => (role === 'user' ? '#fff' : 'var(--mavis-text)')};
  padding: 20px;
  margin: 0;
  font: 13px 'Myriad Pro', 'Lucida Grande', Lucida, Verdana, sans-serif;

  a:link {
    color: var(--mavis-markdown-link);
    text-decoration: none;
  }

  a:visited {
    color: var(--mavis-markdown-visited);
    text-decoration: none;
  }

  a:hover {
    color: var(--mavis-markdown-hover);
    text-decoration: underline;
  }

  a:active {
    color: var(--mavis-markdown-hover);
    text-decoration: underline;
  }

  blockquote {
    max-width: 100%;
    overflow-x: hidden;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  * html code {
    font-size: 100%;
  }

  * html pre {
    font-size: 101%;
  }

  pre,
  code {
    font-size: 14px;
    font-family: monaco, courier, consolas, monospace;
    color: var(--mavis-code-text);
    font-style: italic;
  }

  pre {
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px solid var(--mavis-border);
    background: var(--mavis-code-block);
    margin: 20px 0;
    padding: 8px;
    text-align: left;
    max-width: 100%;
    overflow-x: hidden;
    white-space: pre-wrap;
    word-break: break-word;
    overflow-wrap: anywhere;
  }

  hr {
    color: var(--mavis-divider);
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Myriad Pro', 'Lucida Grande', Lucida, Verdana, sans-serif;
    font-weight: bold;
  }

  h1 {
    margin-bottom: 1em;
    color: inherit;
    font-size: 22px;
  }

  h2 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 18px;
    color: inherit;
    padding-bottom: 2px;
  }

  h3 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 13px;
    color: inherit;
  }

  h4 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 11px;
    color: inherit;
  }

  h5 {
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 0;
    font-size: 11px;
    color: inherit;
  }

  h6 {
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 0;
    font-size: 11px;
    color: inherit;
  }

  p {
    margin-top: 0;
  }

  ul {
    list-style: square outside;
    margin: 0 0 0 30px;
    padding: 0 0 12px 6px;
  }

  li {
    margin-top: 0px;
  }

  ol {
    list-style-type: decimal;
    list-style-position: outside;
    margin: 0 0 0 30px;
    padding: 0 0 12px 6px;
  }

  ol ol {
    list-style-type: lower-alpha;
    list-style-position: outside;
    margin: 7px 0 0 30px;
    padding: 0 0 0 10px;
  }

  ul ul {
    margin-left: 40px;
    padding: 0 0 0 6px;
  }

  li > p {
    display: inline;
  }

  li > p + p {
    display: block;
  }

  li > a + p {
    display: block;
  }

  table {
    width: 100%;
    min-width: 100%;
    table-layout: auto;
    border-top: 1px solid var(--mavis-border-strong);
    border-left: 1px solid var(--mavis-border-strong);
    border-spacing: 0;
    margin: 0;
    margin-bottom: 20px;
  }

  table th,
  table td {
    width: fit-content;
    min-width: 8rem;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  table th {
    padding: 4px 8px;
    background: var(--mavis-table-header);
    color: var(--mavis-text);
    font-size: 12px;
    border-bottom: 1px solid var(--mavis-border-strong);
    border-right: 1px solid var(--mavis-border-strong);

    @media (max-width: 1260px) {
      font-size: 10px;
    }
  }

  table th p {
    margin: 0;
    padding: 0;
    font-weight: bold;
  }

  table td {
    padding: 2px;
    margin: 0;
    font-size: 12px;
    vertical-align: top;
    border-bottom: 1px solid var(--mavis-border-strong);
    border-right: 1px solid var(--mavis-border-strong);
  }

  table td p {
    margin-bottom: 0;
  }

  table td p + p {
    margin-top: 5px;
  }

  table td p + p + p {
    margin-top: 5px;
  }

  table tr {
    height: 22px;
  }

  form {
    margin: 0;
  }

  button {
    margin: 0;
    height: 20px;
    min-width: 40px;
    width: fit-content;
    border: 1px solid var(--mavis-border-strong);
    border-radius: 3px;
    background: var(--mavis-surface-hover);
    color: var(--mavis-text);
    font-size: 12px;
    cursor: pointer;
    padding: 0 6px;
    white-space: nowrap;
  }

  input[type='checkbox'] {
    display: inline-block;
    vertical-align: start;
    margin: 0 6px 0 0;
    width: 14px;
    height: 14px;
  }

  select {
    vertical-align: middle;
    padding: 0;
    margin: 0 0 3px 0;
    appearance: none;
    background: transparent;
    border: none;
    width: fit-content;
    height: 30px;
    color: var(--mavis-muted) !important;
  }

  textarea {
    width: 100%;
  }

  img {
    max-width: 45vw;
  }
`

const ChatInputArea = styled.div<{ expanded: boolean }>`
  border-top: 1px solid var(--mavis-brand-border);
  padding: 10px;
  margin: 0;
  background: var(--mavis-panel);
  ${({ expanded }) =>
    expanded &&
    `
      position: fixed;
      inset: 0;
      z-index: 9999;
    `}
`

const ChatInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: var(--mavis-panel);
`

const ChatTextarea = styled.textarea<{ expanded: boolean }>`
  resize: none;
  min-height: ${({ expanded }) => (expanded ? 'calc(100vh - 80px)' : '80px')};
  max-height: ${({ expanded }) => (expanded ? 'calc(100vh - 80px)' : '300px')};
  width: 100%;
  border: 1px solid var(--mavis-border);
  border-radius: 8px;
  background: var(--mavis-input);
  color: var(--mavis-text);
  padding: 10px;
  margin-bottom: 30px !important;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: var(--mavis-brand);
  }
`
const ModelPicker = styled.div`
  padding: 0px;
  position: relative;
  width: auto;
`

export const FlatIconButton = styled.div`
  width: 100% !important;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 10px;
  padding: 0 10px;
  margin: 0px !important;

  border-radius: 10px;
  transition: all 0.2s;

  svg {
    flex-shrink: 0;
  }

  span {
    white-space: nowrap;
    overflow: hidden;
  }

  &:hover {
    background: var(--mavis-brand-soft);
  }

  input {
    background: transparent;
    border: none;
    outline: none;
    color: var(--mavis-text);
  }
`

const IconButtonLabel = styled.span`
  display: flex;
  flex: 1;
  min-width: 0;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ModelDropdown = styled.div`
  position: absolute;

  bottom: 42px;
  left: 0;

  min-width: 160px;
  max-width: 280px;
  max-height: 280px;

  display: flex;
  flex-direction: column;
  gap: 2px;

  overflow-y: auto;

  background: var(--mavis-surface);
  border: 1px solid var(--mavis-brand-border);
  border-radius: 14px;
  padding: 4px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);

  z-index: 100;
`

const ModelOption = styled.span`
  width: 100%;
  min-height: 30px;

  display: flex;
  align-items: center;
  gap: 8px;

  text-align: left;

  border: none;
  border-radius: 10px;

  background: var(--mavis-surface-subtle);
  color: var(--mavis-text-secondary);

  padding: 8px 10px;

  cursor: pointer;
  transition: 0.2s;

  margin: 0 !important;

  overflow: hidden;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    background: var(--mavis-surface-hover);
  }

  &.selected {
    background: #5b4bd8;
    color: white;
  }
`
const PromptPicker = styled.div`
  position: relative;
`
