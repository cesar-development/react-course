// import { AuthProvider } from './auth'
import { ExpensesProvider } from './expenses'
import { UIProvider } from './ui'

export default function ContextProviders({ children }) {
  return (
    // <AuthProvider>
      <ExpensesProvider>
        <UIProvider>
          {children}
        </UIProvider>
      </ExpensesProvider>
    // </AuthProvider>
  )
}
