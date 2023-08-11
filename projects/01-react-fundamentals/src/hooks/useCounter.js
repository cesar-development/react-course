import { useReducer } from 'react'
import { counterReducer, ACTION_TYPES } from '../reducers/counterReducer'

export function useCounter ({ initialCounter = 0 }) {
  const [state, dispatch] = useReducer(counterReducer, { counter: initialCounter })

  const increment = (quantity) => {
    dispatch({ type: ACTION_TYPES.INCREASE, payload: quantity })
  }

  const decrement = (quantity) => {
    dispatch({ type: ACTION_TYPES.DECREASE, payload: quantity })
  }

  const reset = () => {
    dispatch({ type: ACTION_TYPES.RESET })
  }

  return {
    counter: state.counter,
    increment,
    decrement,
    reset
  }
}
