import React, { useEffect } from 'react'
import { useStatus } from '../../hooks/useStatus'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import styled from 'styled-components'
import mavis from '../../assets/mavis.png'
import logo from '../../assets/logo.png'

const Login: React.FC = () => {
  const { user, signInWithGoogle, signInWithFacebook, signInWithApple } = UserAuth()
  const [inputStatus, setInputStatus] = useStatus(null)
  const navigate = useNavigate()
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
    } catch (error) {
      console.error('Failed to sign in with Google.', error)
      setInputStatus({
        type: 'error',
        fields: 'email',
        message: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  }

  const handleAppleSignIn = async () => {
    try {
      await signInWithApple()
    } catch (error) {
      console.error('Failed to sign in with Apple.', error)
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
      console.error('Failed to sign in with Facebook.', error)
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
    <PageContainer>
      <LoginShell>
        <BrandPanel>
          <BrandHeader>
            <BrandLogo src={logo} alt="M" />
            <BrandName>AVIS</BrandName>
            <BrandTag>AI WORKSPACE</BrandTag>
          </BrandHeader>

          <BrandCopy>
            <BrandEyebrow>
              <span />
              MEMORY-AUGMENTED VIRTUAL INTELLIGENCE SYSTEM
            </BrandEyebrow>
            <BrandTitle>
              Knows your world and <BrandAccent>thinks ahead.</BrandAccent>
            </BrandTitle>
            <BrandDescription>
              Your life, organized in a file-system-based AI agent assistant.
            </BrandDescription>
          </BrandCopy>

          <PortraitFrame>
            <MavisImage src={mavis} alt="Mavis, your personal AI assistant" />
          </PortraitFrame>
          <BrandFootnote>Thoughtful tools for curious minds.</BrandFootnote>
        </BrandPanel>

        <AuthPanel>
          <AuthContent>
            <WelcomeEyebrow>WELCOME BACK</WelcomeEyebrow>
            <AuthTitle>Sign in</AuthTitle>
            <AuthDescription>Pick up right where you left off.</AuthDescription>
            {inputStatus?.type === 'error' && (
              <LoginError role="alert">{inputStatus.message}</LoginError>
            )}

            <form action="submit">
              <FieldGroup>
                <FieldLabel htmlFor="login-email">Email address</FieldLabel>
                <TextInput
                  id="login-email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </FieldGroup>
              <FieldGroup>
                <FieldLabel htmlFor="login-password">Password</FieldLabel>
                <TextInput
                  id="login-password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
              </FieldGroup>
              <CustomButton type="submit" $variant="email">
                <MdEmail aria-hidden="true" />
                <span>Sign in with Email</span>
              </CustomButton>
            </form>

            <Divider>
              <span>or continue with</span>
            </Divider>

            <SocialButtons>
              <CustomButton type="button" $variant="google" onClick={handleGoogleSignIn}>
                <FcGoogle aria-hidden="true" />
                <span>Continue with Google</span>
              </CustomButton>
              <CustomButton type="button" $variant="apple" onClick={handleAppleSignIn}>
                <FaApple aria-hidden="true" />
                <span>Sign in with Apple</span>
              </CustomButton>
              <CustomButton type="button" $variant="facebook" onClick={handleFacebookSignIn}>
                <BsFacebook aria-hidden="true" />
                <span>Continue with Facebook</span>
              </CustomButton>
            </SocialButtons>
            <PrivacyNote>Your sign-in details stay private and secure.</PrivacyNote>
          </AuthContent>
        </AuthPanel>
      </LoginShell>
    </PageContainer>
  )
}

export default Login

const PageContainer = styled.main`
  width: 100%;
  flex: 1 1 0;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: clamp(14px, 2.4vh, 30px) clamp(14px, 3vw, 48px);
  background: radial-gradient(ellipse at 8% 8%, var(--mavis-page-glow-start), transparent 34%),
    radial-gradient(ellipse at 92% 92%, var(--mavis-page-glow-end), transparent 32%),
    var(--mavis-page);

  @media (max-width: 720px) {
    align-items: flex-start;
    padding: 14px;
  }

  @media (min-width: 721px) and (max-height: 620px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`

const LoginShell = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(360px, 0.85fr);
  width: min(1120px, 100%);
  min-height: min(620px, calc(100dvh - 68px));
  overflow: hidden;
  border: 1px solid var(--mavis-brand-border);
  border-radius: 28px;
  background: var(--mavis-surface);
  box-shadow: 0 32px 80px rgba(37, 31, 82, 0.12), 0 4px 16px rgba(37, 31, 82, 0.06);

  @media (max-width: 900px) and (min-width: 721px) {
    grid-template-columns: minmax(0, 1fr) minmax(330px, 0.95fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: minmax(0, 1fr);
    width: min(100%, 460px);
    min-height: 0;
    margin: 0 auto;
    border-radius: 22px;
  }
`

const BrandPanel = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
  overflow: hidden;
  padding: 36px 42px 28px;
  color: #fff;
  isolation: isolate;
  background: linear-gradient(145deg, #242044 0%, #443879 54%, #6652c8 100%);

  &::before {
    position: absolute;
    top: -150px;
    right: -120px;
    z-index: -1;
    width: 430px;
    height: 430px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(196, 181, 253, 0.2), transparent 68%);
    content: '';
  }

  &::after {
    position: absolute;
    right: -190px;
    bottom: -240px;
    z-index: -1;
    width: 500px;
    height: 500px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 50%;
    content: '';
  }

  @media (max-width: 900px) and (min-width: 721px) {
    padding: 30px;
  }

  @media (max-width: 720px) {
    min-height: 190px;
    padding: 20px 22px;
  }
`

const BrandHeader = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 3px;
`

const BrandLogo = styled.img`
  display: block;
  width: 38px;
  height: 28px;
  object-fit: contain;
  filter: grayscale(1) brightness(0) invert(1);
`

const BrandName = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.16em;
`

const BrandTag = styled.span`
  margin-left: 6px;
  padding: 5px 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
`

const BrandCopy = styled.div`
  position: relative;
  z-index: 2;
  width: 58%;
  max-width: 310px;
  margin: auto 0;
  padding: 54px 0 32px;

  @media (max-width: 900px) and (min-width: 721px) {
    width: 62%;
    padding: 40px 0 28px;
  }

  @media (max-width: 720px) {
    width: 66%;
    max-width: 240px;
    margin: auto 0 0;
    padding: 18px 0 0;
  }
`

const BrandEyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 18px;
  color: #d7d1ff;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.06em;
  white-space: nowrap;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #87efc0;
    box-shadow: 0 0 12px rgba(135, 239, 192, 0.7);
  }

  @media (max-width: 720px) {
    gap: 6px;
    margin-bottom: 8px;
    font-size: clamp(5.5px, 1.8vw, 7px);
    letter-spacing: 0;

    span {
      width: 6px;
      height: 6px;
    }
  }
`

const BrandTitle = styled.h1`
  max-width: 310px;
  margin: 0;
  color: #fff;
  font-size: clamp(32px, 3.2vw, 44px);
  font-weight: 700;
  letter-spacing: -0.055em;
  line-height: 1.08;

  @media (max-width: 720px) {
    font-size: 23px;
    line-height: 1.08;
  }
`

const BrandAccent = styled.span`
  color: #c4b5fd;
`

const BrandDescription = styled.p`
  max-width: 290px;
  margin: 18px 0 0;
  color: rgba(255, 255, 255, 0.76);
  font-size: 14px;
  line-height: 1.65;

  @media (max-width: 720px) {
    max-width: 220px;
    margin-top: 8px;
    font-size: 10px;
    line-height: 1.4;
  }
`

const PortraitFrame = styled.div`
  position: absolute;
  right: 24px;
  bottom: 0;
  width: clamp(185px, 23vw, 250px);
  height: min(70%, 390px);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 0;
  border-radius: 150px 150px 0 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.02));
  pointer-events: none;

  @media (max-width: 900px) and (min-width: 721px) {
    right: 14px;
    width: 185px;
    height: min(66%, 340px);
  }

  @media (max-width: 720px) {
    right: 14px;
    width: 116px;
    height: 165px;
    border-radius: 80px 80px 0 0;
  }
`

const MavisImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: auto;
  max-width: none;
  filter: drop-shadow(0 10px 24px rgba(14, 12, 34, 0.2));
`

const BrandFootnote = styled.p`
  position: relative;
  z-index: 2;
  margin: 0;
  color: rgba(255, 255, 255, 0.62);
  font-size: 11px;
  letter-spacing: 0.03em;

  @media (max-width: 720px) {
    display: none;
  }
`

const AuthPanel = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  padding: clamp(20px, 3vh, 32px) clamp(28px, 4vw, 52px);
  background: var(--mavis-surface);

  @media (max-width: 720px) {
    padding: 26px 22px 30px;
  }

  @media (min-width: 721px) and (max-height: 620px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`

const AuthContent = styled.div`
  width: 100%;
  max-width: 380px;
`

const WelcomeEyebrow = styled.p`
  margin: 0 0 8px;
  color: var(--mavis-brand-blue);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.16em;
`

const AuthTitle = styled.h2`
  margin: 0;
  color: var(--mavis-brand-deep);
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1.15;
`

const AuthDescription = styled.p`
  margin: 7px 0 18px;
  color: var(--mavis-muted);
  font-size: 13px;
  line-height: 1.5;

  @media (min-width: 721px) and (max-height: 620px) {
    margin-bottom: 10px;
  }
`

const LoginError = styled.p`
  margin: 0 0 14px;
  padding: 10px 12px;
  border: 1px solid var(--mavis-danger-border);
  border-radius: 9px;
  background: var(--mavis-danger-background);
  color: var(--mavis-danger-text);
  font-size: 12px;
  line-height: 1.4;
`

const FieldGroup = styled.div`
  margin-bottom: 12px;

  @media (min-width: 721px) and (max-height: 620px) {
    margin-bottom: 8px;
  }
`

const FieldLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: var(--mavis-text-secondary);
  font-size: 12px;
  font-weight: 600;
`

const TextInput = styled.input`
  display: block;
  width: 100%;
  height: 45px;
  padding: 0 13px;
  border: 1px solid var(--mavis-border);
  border-radius: 10px;
  outline: none;
  background: var(--mavis-input);
  color: var(--mavis-text);
  font: inherit;
  font-size: 13px;
  transition: border-color 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease;

  &::placeholder {
    color: var(--mavis-muted);
  }

  &:focus {
    border-color: var(--mavis-brand-blue);
    background: var(--mavis-surface);
    box-shadow: 0 0 0 3px rgba(123, 107, 224, 0.14);
  }
`

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0;
  color: var(--mavis-muted);
  font-size: 11px;

  @media (min-width: 721px) and (max-height: 620px) {
    margin: 12px 0;
  }

  &::before,
  &::after {
    height: 1px;
    flex: 1;
    background: var(--mavis-border);
    content: '';
  }
`

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`

const PrivacyNote = styled.p`
  margin: 16px 0 0;
  color: var(--mavis-muted);
  font-size: 10px;
  text-align: center;

  @media (min-width: 721px) and (max-height: 620px) {
    margin-top: 8px;
  }
`
interface CustomButtonProps {
  $variant: 'email' | 'google' | 'facebook' | 'apple'
}

export const CustomButton = styled.button<CustomButtonProps>`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 45px;
  align-items: center;
  justify-content: center;
  padding: 0 42px;
  border: 1px solid transparent;
  border-radius: 10px;
  background: ${({ $variant }) => {
    if ($variant === 'email') return '#5b4bd8'
    if ($variant === 'google') return '#ea4335'
    if ($variant === 'apple') return '#111111'
    return '#1877f2'
  }};
  color: #fff;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 16px rgba(35, 31, 72, 0.12);
    background: ${({ $variant }) => {
      if ($variant === 'email') return '#4c3bc8'
      if ($variant === 'google') return '#d33426'
      if ($variant === 'apple') return '#2b2b2b'
      return '#1168dc'
    }};
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  &:focus-visible {
    outline: 3px solid rgba(123, 107, 224, 0.35);
    outline-offset: 2px;
  }

  svg {
    position: absolute;
    left: 16px;
    width: 19px;
    height: 19px;
    flex-shrink: 0;
    color: currentColor;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
