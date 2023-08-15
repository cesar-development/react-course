import Background from './components/Background'
import ContextProviders from './context/ContextProviders'
import Router from './routes/Router'

export default function App() {
  return (
    <>
      <ContextProviders>
        <Router />
      </ContextProviders>

      <Background />
    </>
  )
}
