export const ACTION_TYPES = {
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

export function counterReducer (state, action) {
  const { type } = action

  if (!ACTIONS_REDUCER[type]) return state
  return ACTIONS_REDUCER[type](state, action)
}
