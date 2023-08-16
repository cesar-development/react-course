import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as RegisterIcon } from '../assets/icons/register.svg'
import Alert from '../components/Alert'
import { auth } from '../firebase/config.js'
import { validateEmail, validateUserErrors } from '../helpers/validations.js'
import useUI from '../hooks/useUI.js'
import Button from '../styled-elements/Button'
import { ContainerButton, Form, Input } from '../styled-elements/FormElements'
import { ContainerHeader, Header, Title } from '../styled-elements/Header'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [retypePassword, setRetypePassword] = useState('')
  const [alert, setAlert] = useState({})

  const navigate = useNavigate()
  const { setShowAlert } = useUI()

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleChangeRetypePassword = (event) => {
    setRetypePassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setShowAlert(false)
    setAlert({})

    if (!validateEmail(email)) {
      setShowAlert(true)
      setAlert({
        type: 'error',
        message: 'Por ingresa un correo electrónico valido'
      })

      return
    }

    if (email === '' || password === '' || retypePassword === '') {
      setShowAlert(true)
      setAlert({
        type: 'error',
        message: 'Por ingresa todos los datos'
      })

      return
    }

    if (password !== retypePassword) {
      setShowAlert(true)
      setAlert({
        type: 'error',
        message: 'Las contraseñas no coinciden'
      })

      return
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (error) {
      setShowAlert(true)
      setAlert({
        type: 'error',
        message: validateUserErrors(error)
      })

      return
    }
  }

  return (
    <>
      <Helmet>
        <title>Crear Cuenta</title>
      </Helmet>

      <Header>
        <ContainerHeader>
          <Title>Crear Cuenta</Title>

          <div>
            <Button to='/login'>Iniciar Sesión</Button>
          </div>
        </ContainerHeader>
      </Header>

      <Form onSubmit={handleSubmit}>
        <Svg />

        <Input
          type='email'
          name='email'
          placeholder='Correo Electrónico'
          value={email}
          onChange={handleChangeEmail}
        />

        <Input
          type='password'
          name='password'
          placeholder='Contraseña'
          value={password}
          onChange={handleChangePassword}
        />

        <Input
          type='password'
          name='retypePassword'
          placeholder='Repite la contraseña'
          value={retypePassword}
          onChange={handleChangeRetypePassword}
        />

        <ContainerButton>
          <Button
            as='button'
            type='submit'
            $primary
          >
            Crear Cuenta
          </Button>
        </ContainerButton>
      </Form>

      <Alert
        type={alert.type}
        message={alert.message}
      />
    </>
  )
}

const Svg = styled(RegisterIcon)`
	width: 100%;
	height: 12.5rem;
	margin-bottom: 1.25rem;
`
