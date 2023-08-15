import { AuthProvider } from './auth'
import { UIProvider } from './ui'

export default function ContextProviders({ children }) {
  return (
    <AuthProvider>
      <UIProvider>
        {children}
      </UIProvider>
    </AuthProvider>
  )
}
