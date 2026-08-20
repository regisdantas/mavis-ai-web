import styled, { createGlobalStyle } from 'styled-components'

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

  input {
    background: transparent;
    border: none;
    outline: none;
    color: #2e2e2e;
  }
`
