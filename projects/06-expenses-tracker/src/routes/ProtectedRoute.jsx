import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function ProtectedRoute({ children }) {
  const { user } = useAuth()

  if (user) {
    return children
  } else {
    return <Navigate replace to='/login' />
  }
}
