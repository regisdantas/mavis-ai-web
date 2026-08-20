import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { UserAuth } from '../context/AuthContext'
interface HeaderProps {
  expanded: boolean
}

const Header: React.FC<HeaderProps> = ({ expanded }) => {
  const { user, logOut } = UserAuth()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLogout = async () => {
    try {
      await logOut()
      setMenuOpen(false)
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  const userInitial = user?.displayName?.charAt(0).toUpperCase() || 'U'
  console.log(user?.photoURL)
  return (
    <HeaderContainer>
      <LogoImage src={logo} draggable={false} />
      <LogoText expanded={!expanded}>AVIS</LogoText>
      <HeaderPortal id="header-portal" />
      {user && (
        <UserMenuContainer ref={menuRef}>
          <UserButton
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label="Open User Menu"
            aria-expanded={menuOpen}
          >
            {user.photoURL ? (
              <UserPhoto
                src={user.photoURL}
                alt={user.displayName || 'User Picture'}
                referrerPolicy="no-referrer"
              />
            ) : (
              <UserFallback>{userInitial}</UserFallback>
            )}
          </UserButton>

          {menuOpen && (
            <DropdownMenu>
              <LogoutButton type="button" onClick={handleLogout}>
                Logout
              </LogoutButton>
            </DropdownMenu>
          )}
        </UserMenuContainer>
      )}
    </HeaderContainer>
  )
}

export default Header

const UserMenuContainer = styled.div`
  position: absolute;
  right: 4px;
`

const UserButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  padding: 0;
  border: 0;
  border-radius: 50%;

  background: transparent;
  cursor: pointer;
  overflow: hidden;

  &:focus-visible {
    outline: 2px solid #e9262a;
    outline-offset: 2px;
  }
`

const UserPhoto = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
`

const UserFallback = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  border-radius: 50%;
  background: #e9262a;
  color: #fff;

  font-size: 14px;
  font-weight: bold;
`

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 1000;

  min-width: 120px;
  padding: 6px;

  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
`

const LogoutButton = styled.button`
  width: 100%;

  padding: 8px 12px;

  border: 0;
  border-radius: 4px;

  background: transparent;
  color: #231f20;

  text-align: left;
  cursor: pointer;

  &:hover {
    background: #f1f1f1;
  }
`

const HeaderPortal = styled.div`
  display: flex;
  flex-direction: row;
`

const LogoImage = styled.img`
  position: absolute;
  width: auto;
  height: 30px;
  top: 6px !important;
  left: 4px;
`

interface LogoTextProps {
  expanded: boolean
}

const LogoText = styled.h1<LogoTextProps>`
  display: ${({ expanded }) => (expanded ? 'none' : 'flex')};
  position: absolute;
  left: 52px !important;
  top: 6px;
  margin: 0;
  padding: 0;
  font-family: Vampire !important;
  color: #e9262a !important;
  font-size: 26px;
  font-weight: bolder;
  letter-spacing: 2px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
`

const HeaderContainer = styled.header`
  height: 40px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 12px;

  background: #231f20;

  border-bottom: 1px solid #3a3a3a;
`
