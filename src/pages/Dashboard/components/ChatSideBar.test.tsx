import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { ChatSideBar } from './ChatSideBar'

jest.mock('../context/ChatAiContext', () => ({
  useChatAi: () => ({
    sessions: [],
    currentSessionId: null,
    createNewSession: jest.fn(),
    loadSession: jest.fn(),
    deleteSession: jest.fn(),
    removeSession: jest.fn(),
  }),
}))

describe('ChatSideBar', () => {
  it('collapses the sessions menu after an outside click on a small screen', () => {
    const originalWidth = window.innerWidth
    const setMenuExpanded = jest.fn()
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 390 })

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
  })
})
