import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as LoginIcon } from '../assets/icons/login.svg'
import Alert from '../components/Alert'
import { auth } from '../firebase/config.js'
import { validateEmail, validateUserErrors } from '../helpers/validations.js'
import useUI from '../hooks/useUI.js'
import Button from '../styled-elements/Button'
import { ContainerButton, Form, Input } from '../styled-elements/FormElements'
import { ContainerHeader, Header, Title } from '../styled-elements/Header'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState({})

  const navigate = useNavigate()
  const { setShowAlert } = useUI()

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setShowAlert(false)
    setAlert({})

    if (!validateEmail(email)) {
      setShowAlert(true)
      setAlert({
        type: 'error',
        message: 'Por favor ingresa un correo electrónico valido'
      })

      return
    }

    if (email === '' || password === '') {
      setShowAlert(true)
      setAlert({
        type: 'error',
        message: 'Por favor ingresa todos los campos'
      })

      return
    }

    try {
      await signInWithEmailAndPassword(auth, email, password)
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
        <title>Iniciar Sesión</title>
      </Helmet>

      <Header>
        <ContainerHeader>
          <Title>Iniciar Sesión</Title>

          <div>
            <Button to='/register'>Registrarse</Button>
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

        <ContainerButton>
          <Button
            as='button'
            type='submit'
            $primary
          >
            Iniciar Sesión
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

const Svg = styled(LoginIcon)`
	width: 100%;
	max-height: 12.5rem;
	margin-bottom: 1.25rem;
`
