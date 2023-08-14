import { UIProvider } from './ui'

export default function ContextProviders({ children }) {
  return (
    <UIProvider>
      {children}
    </UIProvider>
  )
}
