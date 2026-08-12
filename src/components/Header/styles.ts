import styled from 'styled-components'

export const HeaderContainer = styled.header`
  z-index: 10;
  position: absolute;
  user-select: none;
  top: 0;
  left: 0;
  height: 40px !important;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  background: #f0f0f5;
  margin: 0;
  padding: 0;
  .topbar {
    font-size: 12px;
    letter-spacing: 7px;
    text-transform: uppercase;
    font-weight: bolder;
    border-radius: -10px;
    background-color: black !important;
    color: white !important;
    height: 24px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 6px;
  }

  .titlebar .logo-title {
    position: absolute;
    left: 0;
    cursor: pointer;
    width: 100px;
    margin-left: 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .titlebar h1 {
    font-family: Vampire !important;
    color: #e9262a !important;
    font-size: 26px;
    font-weight: bolder;
    letter-spacing: 2px;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  @media (max-width: 1260px) {
    .titlebar h1 {
      display: none;
    }

    .titlebar .logo-title {
      width: auto;
    }
  }

  .titlebar {
    display: flex;
    width: 100%;
    height: 40px;
    background: #231f20;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 0px;
    padding: 0px;
    img {
      width: auto;
      height: 30px;
      border-radius: 50%;
      top: 4px;
      right: 4px;
      position: absolute;
    }

    svg {
      cursor: pointer;
    }
  }
`
