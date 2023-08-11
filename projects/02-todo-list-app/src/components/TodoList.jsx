import Todo from "./Todo"

export default function TodoList({ todos, updateTodos, showCompletedTodos }) {
  const toggleComplete = (id) => {
    updateTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo
    }))
  }

  const editTodo = (id, newText) => {
    updateTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: newText
        }
      }

      return todo
    }))
  }

  const deleteTodo = (id) => {
    updateTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <ul className='todo-list'>
      {todos.length > 0 ? (
        todos.map((todo) => {
          if (showCompletedTodos || !todo.completed) {
            return <Todo
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          }
        })
      ) : (
        <div className='todo-list__message'>
          ~ No hay tareas agregadas ~
        </div>
      )}
    </ul>
  )
}
