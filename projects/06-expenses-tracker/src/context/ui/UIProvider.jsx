import { useReducer } from 'react'
import { UIContext, uiReducer } from '.'

const UI_INITIAL_STATE = {
  showAlert: false,
  date: new Date(),
  category: 'home',
}

export function UIProvider({ children }) {
  const [{ showAlert, date, category }, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const setShowAlert = (isShowingAlert) => {
    dispatch({ type: '[UI] - Set Show Alert', payload: isShowingAlert })
  }

  const setDate = (newDate) => {
    dispatch({ type: '[UI] - Set Date', payload: newDate })
  }

  const setCategory = (newCategory) => {
    dispatch({ type: '[UI] - Set Category', payload: newCategory })
  }

  return (
    <UIContext.Provider
      value={{
        // Properties
        showAlert,
        date,
        category,

        // Methods
        setShowAlert,
        setDate,
        setCategory,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
