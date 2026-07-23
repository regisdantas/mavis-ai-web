import styled from 'styled-components'

export const EntryList = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-bottom: 60px;
`

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  height: 35px;
  border-radius: 10px;
  border-right: 0;
  input[type='date'] {
    width: 140px;
    margin: 0;
    padding: 0;
  }
`

export const SelectedPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 0px;
  height: 35px;
  gap: 10px;
  border-radius: 10px;
  border-right: 0;
`

export const SearchContainer = styled.div`
  display: flex;
  position: absolute;
  right: 140px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 2px;
  height: 35px;
  width: 250px;
  background: #f0f0f5;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  svg {
    margin: 0;
    padding: 0;
  }
  input {
    margin: 0;
    padding: 10px;
  }
`

export const ContentContainer = styled.div`
  flex: 1;
  padding: 0 20px;
`

export const ActionsContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  height: 35px;
  height: 35px;
`

export const MenuContainer = styled.div`
  position: absolute;
  will-change: transform;
  right: calc(50% - 495px);
  bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  align-self: flex-end;
  margin: 0px;
  width: 990px;
  height: 35px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #e0e0e5;
  color: #2e2e2e;

  input {
    background: transparent;
    height: auto;
    border: none;
    outline: none;
    color: #2e2e2e;
  }

  input:focus {
    border: none;
    outline: none;
    box-shadow: none;
    color: #2e2e2e;
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
`
