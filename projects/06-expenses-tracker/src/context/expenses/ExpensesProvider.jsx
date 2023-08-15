import { useEffect, useReducer } from 'react'
import { ExpensesContext, expensesReducer } from '.'
import useExpensesOfTheMonth from '../../hooks/useExpensesOfTheMonth'

const EXPENSES_INITIAL_STATE = {
  total: 0
}

export function ExpensesProvider({ children }) {
  const [{ total }, dispatch] = useReducer(expensesReducer, EXPENSES_INITIAL_STATE)
  const { expenses } = useExpensesOfTheMonth()

  useEffect(() => {
    let accumulatedExpenses = expenses.reduce((acc, el) => {
      return acc + el.quantity
    }, 0)

    setTotal(accumulatedExpenses)
  }, [expenses])

  const setTotal = (total) => {
    dispatch({ type: '[EXPENSES] - Set Total', payload: total })
  }

  return (
    <ExpensesContext.Provider
      value={{
        // Properties
        total,

        // Methods
        setTotal,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}