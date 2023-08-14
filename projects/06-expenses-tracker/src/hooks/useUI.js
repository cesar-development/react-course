import { useContext } from 'react'
import { UIContext } from '../context/ui'

export default function useUI() {
  const { 
    showAlert, 
    setShowAlert 
  } = useContext(UIContext)

  return {
    showAlert,
    setShowAlert,
  }
}
