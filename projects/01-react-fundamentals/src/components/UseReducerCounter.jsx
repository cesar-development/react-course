import { useReducer } from 'react'
import Button from '../elements/Button'

const ACTION_TYPES = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  RESET: 'RESET'
}

const ACTIONS_REDUCER = {
  [ACTION_TYPES.INCREASE]: (state, action) => {
    return {
      ...state,
      counter: state.counter + action.payload
    }
  },
  [ACTION_TYPES.DECREASE]: (state, action) => {
    return {
      ...state,
      counter: state.counter - action.payload
    }
  },
  [ACTION_TYPES.RESET]: (state) => {
    return {
      ...state,
      counter: 0
    }
  }
}

const reducer = (state, action) => {
  const { type } = action

  if (!ACTIONS_REDUCER[type]) return state
  return ACTIONS_REDUCER[type](state, action)
}

export default function UseReducerCounter ({
  quantityToIncrease,
  quantityToDecrease,
  initialCounter = 0
}) {
  const [state, dispatch] = useReducer(reducer, { counter: initialCounter })

  return (
    <div>
      <h1>Counter: {state.counter}</h1>

      <Button
        $isDark
        $marginRight
        onClick={() => {
          dispatch({ type: ACTION_TYPES.INCREASE, payload: quantityToIncrease })
        }}
      >
        Incrementar
      </Button>

      <Button
        $isDark
        $marginRight
        onClick={() => {
          dispatch({ type: ACTION_TYPES.DECREASE, payload: quantityToDecrease })
        }}
      >
        Disminuir
      </Button>

      <Button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.RESET })
        }}
      >
        Restablecer
      </Button>
    </div>
  )
}
