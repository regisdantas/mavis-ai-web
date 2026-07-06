import styled from "styled-components";

export const EntryList = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-bottom: 60px;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  height: 35px;
`

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  height: 35px;
`

export const MenuContainer = styled.div`
  position: absolute;
  right: calc(50% - 495px);
  bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  margin: 0px;
  width: 990px;
  height: 35px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #e0e0e5;
  color: #2e2e2e;
  svg {
    cursor: pointer;
    margin: 0 10px 0 10px;
    width: 30px;
    color: #2e2e2e;
  }
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
`;

export const MenuBarContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100px;
`;
