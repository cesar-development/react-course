import './style.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import ContextProviders from './context/ContextProviders'

const root = createRoot(document.getElementById('app'))

root.render(
  <StrictMode>
    <ContextProviders>
      <App />
    </ContextProviders>
  </StrictMode>
)
