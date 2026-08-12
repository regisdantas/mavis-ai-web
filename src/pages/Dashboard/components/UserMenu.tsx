import React from 'react'
import styled from 'styled-components'

import { UserAuth } from '../../../context/AuthContext'
import userImg from '../../../assets/user.png'

export const UserMenu: React.FC = () => {
  const { user, logOut } = UserAuth()

  const handleLogout = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  if (!user) {
    return null
  }

  return (
    <MenuBarContainer>
      <UserImage
        title="Logout"
        src={user.photoURL || userImg}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = userImg
        }}
        alt="User photograph"
        onClick={handleLogout}
      />
    </MenuBarContainer>
  )
}

const MenuBarContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100px;

  @media (max-width: 1260px) {
    top: 3px;
    right: 2px;
  }
`

const UserImage = styled.img`
  cursor: pointer;
`
