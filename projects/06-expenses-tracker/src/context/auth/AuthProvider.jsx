import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

import { AuthContext } from '.'

export function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cancelSubscription = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return cancelSubscription
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  )
}
