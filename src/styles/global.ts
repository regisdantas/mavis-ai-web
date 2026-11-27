import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
  color-scheme: ${({ theme }) => theme.colorScheme};
  --mavis-brand-deep: ${({ theme }) => theme.brandDeep};
  --mavis-brand: ${({ theme }) => theme.brand};
  --mavis-brand-strong: ${({ theme }) => theme.brandStrong};
  --mavis-brand-blue: ${({ theme }) => theme.brandBlue};
  --mavis-brand-soft: ${({ theme }) => theme.brandSoft};
  --mavis-secondary-bg: ${({ theme }) => theme.secondaryBg};
  --mavis-secondary-bg-hover: ${({ theme }) => theme.secondaryBgHover};
  --mavis-brand-border: ${({ theme }) => theme.brandBorder};
  --mavis-page: ${({ theme }) => theme.background};
  --mavis-page-glow-start: ${({ theme }) => theme.pageGlowStart};
  --mavis-page-glow-end: ${({ theme }) => theme.pageGlowEnd};
  --mavis-panel: ${({ theme }) => theme.panel};
  --mavis-surface: ${({ theme }) => theme.surface};
  --mavis-surface-subtle: ${({ theme }) => theme.surfaceSubtle};
  --mavis-surface-hover: ${({ theme }) => theme.surfaceHover};
  --mavis-input: ${({ theme }) => theme.input};
  --mavis-border: ${({ theme }) => theme.border};
  --mavis-border-strong: ${({ theme }) => theme.borderStrong};
  --mavis-text: ${({ theme }) => theme.text};
  --mavis-text-inverse: ${({ theme }) => theme.textInverse};
  --mavis-text-secondary: ${({ theme }) => theme.textSecondary};
  --mavis-muted: ${({ theme }) => theme.textMuted};
  --mavis-danger: ${({ theme }) => theme.danger};
  --mavis-danger-text: ${({ theme }) => theme.dangerText};
  --mavis-danger-background: ${({ theme }) => theme.dangerBackground};
  --mavis-danger-border: ${({ theme }) => theme.dangerBorder};
  --mavis-success: ${({ theme }) => theme.success};
  --mavis-disabled: ${({ theme }) => theme.disabled};
  --mavis-header: ${({ theme }) => theme.header};
  --mavis-header-border: ${({ theme }) => theme.headerBorder};
  --mavis-scrollbar: ${({ theme }) => theme.scrollbar};
  --mavis-code-block: ${({ theme }) => theme.codeBlock};
  --mavis-code-text: ${({ theme }) => theme.codeText};
  --mavis-table-header: ${({ theme }) => theme.tableHeader};
  --mavis-card-background: ${({ theme }) => theme.cardBackground};
  --mavis-divider: ${({ theme }) => theme.divider};
  --mavis-markdown-link: ${({ theme }) => theme.markdownLink};
  --mavis-markdown-visited: ${({ theme }) => theme.markdownVisited};
  --mavis-markdown-hover: ${({ theme }) => theme.markdownHover};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background: var(--mavis-page);
  color: var(--mavis-text);
  color-scheme: ${({ theme }) => theme.colorScheme};
}

body {
  align-self: center;
  background: var(--mavis-page);
  color: var(--mavis-text);
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
  color: var(--mavis-text);
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

button:disabled {
  color: var(--mavis-disabled);
}

button:disabled svg {
  color: inherit;
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

  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ disabled }) => (disabled ? 'var(--mavis-disabled)' : 'inherit')};

  transition: all 0.2s;

  svg {
    flex-shrink: 0;
    color: ${({ disabled, selected }) =>
      disabled
        ? 'var(--mavis-disabled)'
        : selected
        ? 'var(--mavis-brand)'
        : 'var(--mavis-text)'} !important;
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
