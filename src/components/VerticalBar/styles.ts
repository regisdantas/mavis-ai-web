import styled from 'styled-components'

interface ContainerProps {
  expanded: boolean
}

interface MarkerHeaderProps {
  expanded: boolean
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  left: 0;
  width: ${({ expanded }) => (expanded ? '140px' : '44px')};
  height: 100%;

  background: #f0f0f5;
  border-right: 1px solid #d0d0d0;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px 6px;

  transition: width 0.2s ease;
`

export const MarkerHeader = styled.div<MarkerHeaderProps>`
  width: ${({ expanded }) => (expanded ? '100%' : '30px')};
  min-height: 30px;

  display: flex;
  align-items: center;
  justify-content: ${({ expanded }) => (expanded ? 'flex-start' : 'center')};

  gap: 10px;

  padding: ${({ expanded }) => (expanded ? '0 10px' : '0')};

  border-radius: 10px;
  cursor: pointer;

  transition: all 0.2s;

  svg {
    flex-shrink: 0;
    color: #2e2e2e;
  }

  &:hover {
    background: rgba(128, 128, 128, 0.15);
  }
`

export const MarkersContainer = styled.div`
  width: 100%;
  padding: 0 8px;

  display: flex;
  flex-direction: column;
`

export const MarkerItem = styled.div`
  font-size: 12px;
  padding: 6px 8px;
  border-radius: 6px;

  background: #f3f3f5;
  color: #2e2e2e;

  cursor: pointer;

  &:hover {
    background: #dddddf;
  }
`
