import React, { useEffect } from 'react'
import { useStatus } from '../../hooks/useStatus'
import { BsFacebook, BsGoogle } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import styled, { css } from 'styled-components'
import { shade } from 'polished'

const Login: React.FC = () => {
  const { user, signInWithGoogle, signInWithFacebook } = UserAuth()
  const [inputStatus, setInputStatus] = useStatus(null)
  const navigate = useNavigate()
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
    } catch (error) {
      console.log(error)
      setInputStatus({
        type: 'error',
        fields: 'email',
        message: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  }

  const handleFacebookSignIn = async () => {
    try {
      await signInWithFacebook()
    } catch (error) {
      console.log(error)
      setInputStatus({
        type: 'error',
        fields: 'email',
        message: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  }

  useEffect(() => {
    if (user !== null && user.displayName !== undefined) {
      navigate('/dashboard')
    }
  }, [user])

  return (
    <BodyContainer>
      <DataContainer>
        <form action="submit">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <CustomButton color={'#04d361'}>
            <MdEmail /> Sign in with Email
          </CustomButton>
        </form>
        <CustomButton color={'#DB4437'} onClick={handleGoogleSignIn}>
          <BsGoogle size={20} /> Sign in using Google Account
        </CustomButton>
        <CustomButton color={'#3b5998'} onClick={handleFacebookSignIn}>
          <BsFacebook size={20} /> Sign in using Facebook Account
        </CustomButton>
      </DataContainer>
    </BodyContainer>
  )
}

export default Login

const BodyContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: center;

  @media (max-width: 1260px) {
    padding-top: 40px;
    padding-bottom: 10px;
  }
`

const DataContainer = styled.div`
  position: absolute;
  margin-top: 25px;

  width: 100%;
  max-width: 990px;

  height: calc(100vh - 40px);

  overflow-x: hidden;

  padding: 10px;
  background: #e0e0e5;

  scrollbar-width: thin;
  scrollbar-color: #b0b0b5 #e0e0e5;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #e0e0e5;
  }

  &::-webkit-scrollbar-thumb {
    background: #b0b0b5;
    border-radius: 6px;
    border: 2px solid #e0e0e5;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #909095;
  }

  @media (max-width: 1260px) {
    max-width: 100%;
    padding: 5px;
  }
`
interface CustomButtonProps {
  color: string
}

export const CustomButton = styled.button<CustomButtonProps>`
  display: block !important;
  svg {
    float: left;
    margin-left: 10px;
  }

  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color} !important;
      &:hover {
        background-color: ${shade(0.2, props.color)} !important;
      }
    `}
`
