import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

import ExpenseForm from '../components/ExpenseForm'
import ReturnButton from '../components/ReturnButton'
import TotalExpenseBar from '../components/TotalExpenseBar'

import useExpenseById from '../hooks/useExpenseById.js'
import { Header, Title } from '../styled-elements/Header'

export default function EditExpense() {
  const { id } = useParams()
  const { expense } = useExpenseById({ id })

  return (
    <>
      <Helmet>
        <title>Editar Gasto</title>
      </Helmet>

      <Header>
        <ReturnButton route='/list' />
        <Title>Editar Gasto</Title>
      </Header>

      <ExpenseForm expense={expense} />
      <TotalExpenseBar />
    </>
  )
}
