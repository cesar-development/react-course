export function uiReducer(state, action) {
  const { type } = action

  switch (type) {
    case '[UI] - Set Show Alert': {
      return {
        ...state,
        showAlert: action.payload
      }
    }

    default:
      return state
  }
}
