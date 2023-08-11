import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Todo({ todo, toggleComplete, editTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newTodoText, setNewTodoText] = useState(todo.text)

  const handleSubmit = (event) => {
    event.preventDefault()

    editTodo(todo.id, newTodoText)
    setIsEditing(false)
  }
  
  return (
    <li className='todo-list__todo'>
      <FontAwesomeIcon
        icon={todo.completed ? faCheckSquare : faSquare}
        className='todo-list__icon todo-list__icon-check'
        onClick={() => toggleComplete(todo.id)}
      />

      <div className='todo-list__text'>
        {isEditing ? (
          <form className='form-edit-todo' onSubmit={handleSubmit}>
            <input
              type='text'
              className='form-edit-todo__input'
              value={newTodoText}
              onChange={(event) => setNewTodoText(event.target.value)}
            />

            <button 
              type='submit'
              className='form-edit-todo__btn'
            >
              Actualizar
            </button>
          </form>
        ) : (
          <>{todo.text}</>
        )}
      </div>

      <div className='todo-list__container-buttons'>
        <FontAwesomeIcon
          icon={faEdit}
          className='todo-list__icon todo-list__icon-action'
          onClick={() => setIsEditing(!isEditing)}
        />

        <FontAwesomeIcon
          icon={faTimes}
          className='todo-list__icon todo-list__icon-action'
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </li>
  )
}
