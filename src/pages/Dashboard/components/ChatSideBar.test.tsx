import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ChatSideBar } from './ChatSideBar'

const mockToggleSessionPin = jest.fn(async () => {})
const mockDeleteSession = jest.fn()

jest.mock('../context/ChatAiContext', () => ({
  useChatAi: () => ({
    sessions: [{ id: 'session-1', title: 'Session one', pinned: false }],
    currentSessionId: 'session-1',
    createNewSession: jest.fn(),
    loadSession: jest.fn(),
    deleteSession: mockDeleteSession,
    removeSession: jest.fn(),
    toggleSessionPin: mockToggleSessionPin,
  }),
}))

describe('ChatSideBar', () => {
  const ControlledSidebar: React.FC = () => {
    const [menuExpanded, setMenuExpanded] = React.useState(false)

    return (
      <ChatSideBar
        minimized={false}
        setMinimized={jest.fn()}
        menuExpanded={menuExpanded}
        setMenuExpanded={setMenuExpanded}
      />
    )
  }

  it('pins a session from the session list', () => {
    mockToggleSessionPin.mockClear()
    mockToggleSessionPin.mockResolvedValue(undefined)
    render(
      <ChatSideBar
        minimized={false}
        setMinimized={jest.fn()}
        menuExpanded
        setMenuExpanded={jest.fn()}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'Pin session' }))

    expect(mockToggleSessionPin).toHaveBeenCalledWith('session-1')
  })

  it('does not show a Sessions button in the expanded drawer', () => {
    render(
      <ChatSideBar
        minimized={false}
        setMinimized={jest.fn()}
        menuExpanded
        setMenuExpanded={jest.fn()}
      />
    )

    expect(screen.queryByTitle('Close sessions menu')).toBeNull()
    expect(screen.queryByText('Sessions')).toBeNull()
  })

  it('keeps the sessions drawer open after deleting a session', () => {
    mockDeleteSession.mockClear()
    const setMenuExpanded = jest.fn()
    render(
      <ChatSideBar
        minimized={false}
        setMinimized={jest.fn()}
        menuExpanded
        setMenuExpanded={setMenuExpanded}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'Delete session' }))

    expect(mockDeleteSession).toHaveBeenCalledWith('session-1')
    expect(setMenuExpanded).not.toHaveBeenCalled()
    expect(
      screen.getByRole('complementary', { name: 'Chat sessions' }).getAttribute('aria-hidden')
    ).toBe('false')
  })

  it('opens the sessions drawer from the collapsed rail', () => {
    const setMenuExpanded = jest.fn()

    render(
      <ChatSideBar
        minimized={false}
        setMinimized={jest.fn()}
        menuExpanded={false}
        setMenuExpanded={setMenuExpanded}
      />
    )

    const menuButton = screen.getByTitle('Menu')

    expect(menuButton.getAttribute('data-sidebar-toggle')).toBe('sessions')

    fireEvent.click(menuButton)

    expect(setMenuExpanded).toHaveBeenCalledWith(true)
  })

  it('keeps the drawer open after clicking its rail toggle', () => {
    const originalWidth = window.innerWidth
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1440 })

    try {
      render(<ControlledSidebar />)

      fireEvent.click(screen.getByTitle('Menu'))

      expect(
        screen.getByRole('complementary', { name: 'Chat sessions' }).getAttribute('aria-hidden')
      ).toBe('false')
    } finally {
      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        value: originalWidth,
      })
    }
  })

  it('overlays the full desktop chat with the expanded sessions drawer', () => {
    const originalWidth = window.innerWidth
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1440 })

    try {
      const { container } = render(
        <ChatSideBar
          minimized={false}
          setMinimized={jest.fn()}
          menuExpanded
          setMenuExpanded={jest.fn()}
        />
      )
      const drawer = container.querySelector('[aria-label="Chat sessions"]') as HTMLElement
      const styles = window.getComputedStyle(drawer)

      expect(styles.position).toBe('absolute')
      expect(styles.width).toBe('100%')
      expect(styles.right).toBe('0px')
      expect(styles.backgroundColor).toBe('rgb(247, 246, 252)')
    } finally {
      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        value: originalWidth,
      })
    }
  })

  it('keeps a 60px collapsed rail outside the chat on desktop', () => {
    const originalWidth = window.innerWidth
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1440 })

    try {
      const { getByTestId } = render(
        <ChatSideBar
          minimized={false}
          setMinimized={jest.fn()}
          menuExpanded={false}
          setMenuExpanded={jest.fn()}
        />
      )
      const styles = window.getComputedStyle(getByTestId('sessions-rail'))

      expect(styles.position).not.toBe('absolute')
      expect(styles.width).toBe('60px')
    } finally {
      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        value: originalWidth,
      })
    }
  })

  it.each([390, 1440])(
    'collapses the sessions menu after an outside click at %i pixels',
    (width) => {
      const originalWidth = window.innerWidth
      const setMenuExpanded = jest.fn()
      Object.defineProperty(window, 'innerWidth', { configurable: true, value: width })

      try {
        render(
          <ChatSideBar
            minimized={false}
            setMinimized={jest.fn()}
            menuExpanded
            setMenuExpanded={setMenuExpanded}
          />
        )
        fireEvent.click(document.body)

        expect(setMenuExpanded).toHaveBeenCalledWith(false)
      } finally {
        Object.defineProperty(window, 'innerWidth', {
          configurable: true,
          value: originalWidth,
        })
      }
    }
  )

  it.each([390, 1440])('collapses the sessions menu after selecting at %i pixels', (width) => {
    const originalWidth = window.innerWidth
    const setMenuExpanded = jest.fn()
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: width })

    try {
      const { getByText } = render(
        <ChatSideBar
          minimized={false}
          setMinimized={jest.fn()}
          menuExpanded
          setMenuExpanded={setMenuExpanded}
        />
      )

      fireEvent.click(getByText('Session one'))

      expect(setMenuExpanded).toHaveBeenCalledWith(false)
    } finally {
      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        value: originalWidth,
      })
    }
  })
})
