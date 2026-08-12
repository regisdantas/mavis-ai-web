import styled, { css, createGlobalStyle } from 'styled-components'
import { shade } from 'polished'

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background: #f0f0f5;
}

body {
  align-self: center;
  background: #f0f0f5;
  -wekit-font-smoothing: antialiased;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}

body, input, textarea, select, button {
  font: 400 1rem "Roboto", sans-serif;
}


select:focus {
  outline: none;
  box-shadow: none;
}

#root {
  display: flex;
  justify-content: center;
  width: 100%;
}

button {
  user-select: none;
  cursor: pointer;
}

a{
  color: inherit;
  text-decoration: none;
}
`

interface IconButtonProps {
  expanded?: boolean
  disabled?: boolean
  selected?: boolean
}

export const IconButton = styled.div<IconButtonProps>`
  width: ${({ expanded }) => (expanded ? '100%' : '30px')} !important;
  min-height: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: ${({ expanded }) => (expanded ? 'flex-start' : 'center')};

  gap: 10px;
  padding: ${({ expanded }) => (expanded ? '0 10px' : '0')};
  margin: 2px !important;

  border-radius: 10px;

  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  transition: all 0.2s;

  svg {
    flex-shrink: 0;
    color: ${({ selected }) => (selected ? '#2563eb' : '#2e2e2e;')} !important;
  }

  span {
    white-space: nowrap;
    overflow: hidden;
  }

  &:hover {
    background: rgba(128, 128, 128, 0.15);
  }
`

export const AppContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  input,
  button {
    margin-left: auto;
    margin-right: auto;

    max-width: 400px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    height: 50px;
    svg {
      font-size: 24px;
      margin-right: 7px;
    }
  }
  button {
    background: #323232;
    justify-content: center;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background-color: ${shade(0.2, '#323232')};
    }
  }
`
