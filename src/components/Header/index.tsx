import React from 'react'
import styled from 'styled-components'
import { HeaderContainer } from './styles'

interface IHeaderProps {
  title?: string
  logo?: string
}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  return (
    <HeaderContainer>
      <div id="header-portal" className="titlebar">
        <span className="logo-title" onClick={() => window.location.reload()}>
          <h1>{props.title}</h1>
        </span>
      </div>
      <LogoImage src={props.logo} draggable={false} />
    </HeaderContainer>
  )
}

export default Header

const LogoImage = styled.img`
  position: fixed;
  width: 100px;
  height: auto;
  top: 0px;
  left: 60px;
  z-index: 10;
  transform: scale(-1);
`
