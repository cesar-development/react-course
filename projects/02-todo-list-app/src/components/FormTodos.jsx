import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

export default function FormTodos({ todos, updateTodos }) {
  const [todoText, setTodoText] = useState('')

  const handleInputTodo = (event) => {
    setTodoText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    updateTodos([
      ...todos,
      {
        id: uuid(),
        text: todoText,
        completed: false
      }
    ])

    setTodoText('')
  }

  return (
    <form className='form-todos' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form-todos__input'
        placeholder='Escribe una tarea'
        value={todoText}
        onChange={handleInputTodo}
      />

      <button
        type='submit'
        className='form-todos__btn'
      >
        <FontAwesomeIcon
          icon={faPlusSquare}
          className='form-todos__icon-btn'
        />
      </button>
    </form>
  )
}
