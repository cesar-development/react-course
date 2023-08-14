import { useReducer } from 'react'
import { UIContext, uiReducer } from '.'

const UI_INITIAL_STATE = {
  showAlert: false,
}

export function UIProvider({ children }) {
  const [{ showAlert }, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const setShowAlert = (isShowingAlert) => {
    dispatch({ type: '[UI] - Set Show Alert', payload: isShowingAlert })
  }

  return (
    <UIContext.Provider
      value={{
        // Properties
        showAlert,

        // Methods
        setShowAlert,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
