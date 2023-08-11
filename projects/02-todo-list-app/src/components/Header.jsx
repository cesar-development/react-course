import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

export default function Header({ showCompletedTodos, handleShowCompletedTodos }) {
  const handleToggleCompletedTodos = () => {
    handleShowCompletedTodos(!showCompletedTodos)
  }

  return (
    <header className='header'>
      <h1 className='header__title'>Lista de Tareas</h1>

      {showCompletedTodos ? (
        <button
          className='header__button'
          onClick={handleToggleCompletedTodos}
        >
          No mostrar completadas
          <FontAwesomeIcon icon={faEyeSlash} className='header__icon-button' />
        </button>
      ) : (
        <button
          className='header__button'
          onClick={handleToggleCompletedTodos}
        >
          Mostrar completadas
          <FontAwesomeIcon icon={faEye} className='header__icon-button' />
        </button>
      )}
    </header>
  )
}
