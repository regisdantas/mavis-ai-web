import { useContext, createContext, useEffect, useState, ReactNode } from 'react'
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth'
import { auth } from '../services/firebase'

interface IAuthContext {
  user: User | null
  signInWithGoogle: () => Promise<void>
  signInWithFacebook: () => Promise<void>
  logOut: () => Promise<void>
}

const AuthContext = createContext({} as IAuthContext)

interface IAuthProps {
  children: ReactNode
}

export const AuthContextProvider = ({ children }: IAuthProps) => {
  const [user, setUser] = useState<User | null>(null)

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }

  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider()
    await signInWithPopup(auth, provider)
  }

  const logOut = async () => {
    await signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        signInWithFacebook,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => useContext(AuthContext)
