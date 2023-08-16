import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import fromUnixTime from 'date-fns/fromUnixTime'
import getUnixTime from 'date-fns/getUnixTime'

import useAuth from '../hooks/useAuth.js'
import useUI from '../hooks/useUI'
import { addExpense, updateExpense } from '../services/expenses'
import Alert from './Alert'
import DatePicker from './DatePicker'
import SelectCategories from './SelectCategories'
import Button from '../styled-elements/Button'
import { FiltersContainer, Form, Input, BigInput, ContainerButton } from '../styled-elements/FormElements'
import { ReactComponent as PlusIcon } from '../assets/icons/plus.svg'

export default function ExpenseForm({ expense }) {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('')
  const [alert, setAlert] = useState({})

  const navigate = useNavigate()
  const { user } = useAuth()
  const { category, setCategory, date, setDate, setShowAlert } = useUI()

  useEffect(() => {
    if (expense) {
      if (expense.data().uidUser === user.uid) {
        const expenseData = expense.data()

        setCategory(expenseData.category)
        setDate(fromUnixTime(expenseData.date))
        setDescription(expenseData.description)
        setQuantity(expenseData.quantity)
      } else {
        navigate('/', { replace: true })
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expense, user, navigate])

  const handleChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value.replace(/[^0-9]/g, ''))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let quantityToAdd = parseFloat(quantity).toFixed(2)

    if (description === '' && quantity === '') {
      setShowAlert(true)
      setAlert({
        type: 'error',
        message: 'Por favor rellena todos los campos.'
      })

      return
    }

    if (!quantityToAdd) {
      setShowAlert(true)
      setAlert({
        type: 'error',
        message: 'El valor que ingresaste no es correcto.'
      })

      return
    }

    const expenseData = {
      category,
      description,
      quantity: quantityToAdd,
      date: getUnixTime(date),
    }

    try {
      if (expense) {
        await updateExpense({
          id: expense.id,
          ...expenseData,
        })

        navigate('/', { replace: true })
      } else {
        await addExpense({
          ...expenseData,
          uidUser: user.uid,
        })

        setCategory('home')
        setDescription('')
        setQuantity('')
        setDate(new Date())

        setShowAlert(true)
        setAlert({
          type: 'success',
          message: 'Gasto agregado correctamente.'
        })
      }
    } catch (error) {
      setShowAlert(true)
      setAlert({
        type: 'error',
        message: 'Hubo un problema al intentar agregar/editar tu gasto.'
      })
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FiltersContainer>
        <SelectCategories />
        <DatePicker initialDate={expense ? fromUnixTime(expense.data().date) : new Date()} />
      </FiltersContainer>

      <div>
        <Input
          type='text'
          name='description'
          placeholder='Descripción'
          autoComplete='off'
          value={description}
          onChange={handleChangeDescription}
        />

        <BigInput
          type='text'
          name='quantity'
          placeholder='$0.00'
          autoComplete='off'
          value={quantity}
          onChange={handleChangeQuantity}
        />
      </div>

      <ContainerButton>
        <Button
          as='button'
          type='submit'
          $primary
          $withIcon
        >
          {expense ? 'Editar Gasto' : 'Agregar Gasto'} <PlusIcon />
        </Button>
      </ContainerButton>

      <Alert
        type={alert.type}
        message={alert.message}
      />
    </Form>
  )
}
