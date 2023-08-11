import styles from './Form.module.css'

import { useId, useState } from 'react'
import Button from '../elements/Button'

export default function Form ({ handleLogin }) {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const userId = useId()
  const passwordId = useId()

  const handleChangeUser = (event) => {
    setUser(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (user === 'chicho69-cesar' && password === '123456') {
      handleLogin(true)
    } else {
      window.alert('Datos incorrectos!!!')

      setUser('')
      setPassword('')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>No has iniciado sesión</h1>

      <div>
        <label htmlFor={userId} className={styles.label}>Usuario</label>

        <input
          type='text'
          name='user'
          id={userId}
          value={user}
          onChange={handleChangeUser}
          className={styles.input}
        />
      </div>

      <div>
        <label htmlFor={passwordId} className={styles.label}>Password</label>

        <input
          type='password'
          name='password'
          id={passwordId}
          value={password}
          onChange={handleChangePassword}
          className={styles.input}
        />
      </div>

      <div>
        <Button $isLarge type='submit'>Iniciar sesión</Button>
      </div>
    </form>
  )
}
