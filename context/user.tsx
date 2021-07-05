import { fetcher } from 'lib/axios'
import { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'
import { User } from 'types/user'

interface UserAuth {
  user: User
  logged: boolean
  called: boolean
}

const UserContext = createContext<UserAuth>({} as UserAuth)

export function UserProvider({ children }) {
  const [user, setUser] = useState<User>({} as User)
  const [logged, setLogged] = useState<boolean>(false)
  const [called, setCalled] = useState<boolean>(false)

  useEffect(() => {
    const cleanup = () => {
      fetcher('/me').then((data) => {
        setLogged(true)
        setCalled(true)
        return setUser(data)
      })
    }
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth')
      if (token) {
        return cleanup()
      }
    }
    return () => {
      cleanup()
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, logged, called }}>
      {children}
    </UserContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(UserContext)
}
