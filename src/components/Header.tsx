import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { FiLogOut, FiMoon, FiSun } from 'react-icons/fi'
import logo from '../assets/logo.png'
import { UserAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
interface HeaderProps {
  expanded: boolean
}

const Header: React.FC<HeaderProps> = ({ expanded }) => {
  const { user, logOut } = UserAuth()
  const { darkMode, toggleTheme } = useTheme()
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

  const handleThemeToggle = () => {
    toggleTheme()
    setMenuOpen(false)
  }

  const userInitial = user?.displayName?.charAt(0).toUpperCase() || 'U'
  console.log(user?.photoURL)
  return (
    <HeaderContainer>
      <LogoImage src={logo} draggable={false} />
      <LogoText expanded={!expanded} $hasUser={Boolean(user)}>
        AVIS
      </LogoText>
      <HeaderPortal id="header-portal" $hasUser={Boolean(user)} />
      {!user && (
        <ThemeToggle
          type="button"
          onClick={toggleTheme}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={darkMode}
          title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
        </ThemeToggle>
      )}
      {user && (
        <UserMenuContainer ref={menuRef}>
          <UserButton
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label="Open account menu"
            aria-haspopup="menu"
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
            <DropdownMenu role="menu" aria-label="Account menu">
              <AccountInfo role="group" aria-label="Signed-in account">
                <AccountLabel>Signed in as</AccountLabel>
                <AccountName>{user.displayName || 'Mavis user'}</AccountName>
                {user.email && <AccountEmail title={user.email}>{user.email}</AccountEmail>}
              </AccountInfo>
              <MenuDivider role="separator" />
              <ThemeMenuButton
                type="button"
                role="menuitem"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-pressed={darkMode}
                onClick={handleThemeToggle}
              >
                {darkMode ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
                <span>{darkMode ? 'Light mode' : 'Dark mode'}</span>
              </ThemeMenuButton>
              <MenuDivider role="separator" />
              <LogoutButton type="button" role="menuitem" onClick={handleLogout}>
                <FiLogOut aria-hidden="true" />
                <span>Sign out</span>
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
  top: 50%;
  right: 8px;
  z-index: 1001;
  transform: translateY(-50%);
`

const UserButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 2px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  background: transparent;
  box-shadow: 0 2px 8px rgba(13, 11, 34, 0.32);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.35), 0 4px 12px rgba(13, 11, 34, 0.3);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`

const ThemeToggle = styled.button`
  position: absolute;
  top: 50%;
  left: 52px;
  z-index: 1001;
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  padding: 0;
  transform: translateY(-50%);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 50%;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.18s ease, border-color 0.18s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.15);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  svg {
    width: 17px;
    height: 17px;
  }
`

const UserPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

const UserFallback = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: transparent;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 1000;
  width: min(260px, calc(100vw - 16px));
  padding: 8px;
  overflow: hidden;
  background: var(--mavis-surface);
  border: 1px solid var(--mavis-brand-border);
  border-radius: 14px;
  box-shadow: 0 16px 40px rgba(36, 32, 68, 0.2), 0 4px 12px rgba(36, 32, 68, 0.08);
`

const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  padding: 10px 12px 12px;
`

const AccountLabel = styled.span`
  color: var(--mavis-muted);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const AccountName = styled.span`
  overflow: hidden;
  color: var(--mavis-brand-deep);
  font-size: 14px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const AccountEmail = styled.span`
  overflow: hidden;
  color: var(--mavis-muted);
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const MenuDivider = styled.div`
  height: 1px;
  margin: 0 4px 6px;
  background: var(--mavis-border);
`

const LogoutButton = styled.button`
  display: flex;
  width: 100%;
  min-height: 40px;
  align-items: center;
  gap: 10px;
  padding: 0 12px;
  border: 0;
  border-radius: 9px;
  background: transparent;
  color: var(--mavis-brand);
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.18s ease, color 0.18s ease;

  &:hover {
    background: var(--mavis-brand-soft);
    color: var(--mavis-brand-strong);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

const ThemeMenuButton = styled.button`
  display: flex;
  width: 100%;
  min-height: 40px;
  align-items: center;
  gap: 10px;
  padding: 0 12px;
  border: 0;
  border-radius: 9px;
  background: transparent;
  color: var(--mavis-text);
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.18s ease, color 0.18s ease;

  &:hover {
    background: var(--mavis-brand-soft);
    color: var(--mavis-brand-deep);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

const HeaderPortal = styled.div<{ $hasUser: boolean }>`
  display: flex;
  position: relative;
  flex: 1 1 0;
  min-width: 0;
  width: 0;
  height: 100%;
  flex-direction: row;
  margin-right: ${({ $hasUser }) => ($hasUser ? '48px' : '0')};

  @media (max-width: 768px) {
    flex: 1;
    min-width: 0;
    width: 0;
    height: 100%;
    margin: 0 ${({ $hasUser }) => ($hasUser ? '52px' : '0')} 0
      ${({ $hasUser }) => ($hasUser ? '42px' : '92px')};
    overflow: hidden;
  }
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
  $hasUser: boolean
}

const LogoText = styled.h1<LogoTextProps>`
  display: ${({ expanded }) => (expanded ? 'none' : 'flex')};
  position: absolute;
  left: ${({ $hasUser }) => ($hasUser ? '52px' : '92px')} !important;
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

  @media (max-width: 768px) {
    display: none;
  }
`

const HeaderContainer = styled.header`
  position: relative;
  height: 40px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 12px;

  background: var(--mavis-header);

  border-bottom: 1px solid var(--mavis-header-border);

  @media (max-width: 768px) {
    padding: 0;
  }
`
