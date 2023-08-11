import './App.css'

import { useState } from 'react'

import Header from './components/Header'
import FormTodos from './components/FormTodos'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])
  const [showCompletedTodos, setShowCompletedTodos] = useState(false)

  return (
    <div className='container'>
      <Header
        showCompletedTodos={showCompletedTodos}
        handleShowCompletedTodos={setShowCompletedTodos}
      />

      <FormTodos
        todos={todos}
        updateTodos={setTodos}
      />

      <TodoList
        todos={todos}
        updateTodos={setTodos}
        showCompletedTodos={showCompletedTodos}
      />
    </div>
  )
}

export default App
