import { useState } from 'react'

export default function useExpenses() {
  const [expenses] = useState([{ quantity: 250 }])
  
  return {
    expenses,
  }
}
