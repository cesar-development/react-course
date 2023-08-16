import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import CategoryIcons from '../components/CategoryIcons'
import ReturnButton from '../components/ReturnButton'
import TotalExpenseBar from '../components/TotalExpenseBar'

import Button from '../styled-elements/Button'
import { Header, Title } from '../styled-elements/Header'
import {
  ActionButton,
  Category,
  CentralButtonContainer,
  ContainerButtons,
  Date,
  Description,
  List,
  ListElement,
  LoadMoreButton,
  Subtitle,
  SubtitleContainer,
  Value,
} from '../styled-elements/ListElements'

import { ReactComponent as EditIcon } from '../assets/icons/edit.svg'
import { ReactComponent as DeleteIcon } from '../assets/icons/delete.svg'

import { deleteExpense } from '../services/expenses.js'
import useExpenses from '../hooks/useExpenses.js'
import { currencyFormatter } from '../helpers/currency-formatter.js'
import { formatDateInSpanish } from '../helpers/manage-dates'

export default function ExpensesList() {
  const { expenses, getMoreExpenses, thereIsMoreToLoad } = useExpenses()

  const dateIsEqual = (expenses, index, expense) => {
    if (index === 0) return false

    const actualDate = formatDateInSpanish(expense.date)
    const lastExpenseDate = formatDateInSpanish(expenses[index - 1].date)

    return actualDate === lastExpenseDate
  }

  return (
    <>
      <Helmet>
        <title>Lista de Gastos</title>
      </Helmet>

      <Header>
        <ReturnButton />
        <Title>Lista de Gastos</Title>
      </Header>

      <List>
        {expenses.map((expense, index) => (
          <div key={index}>
            {!dateIsEqual(expenses, index, expense) && (
              <Date>{formatDateInSpanish(expense.date)}</Date>
            )}

            <ListElement>
              <Category>
                <CategoryIcons id={expense.category} />
                {expense.category}
              </Category>

              <Description>
                {expense.description}
              </Description>

              <Value>{currencyFormatter(expense.quantity)}</Value>

              <ContainerButtons>
                <ActionButton as={Link} to={`/edit/${expense.id}`}>
                  <EditIcon />
                </ActionButton>

                <ActionButton onClick={() => deleteExpense({ id: expense.id })}>
                  <DeleteIcon />
                </ActionButton>
              </ContainerButtons>
            </ListElement>
          </div>
        ))}

        {thereIsMoreToLoad && (
          <CentralButtonContainer>
            <LoadMoreButton onClick={getMoreExpenses}>
              Cargar Más
            </LoadMoreButton>
          </CentralButtonContainer>
        )}

        {expenses.length === 0 && (
          <SubtitleContainer>
            <Subtitle>No hay gastos por mostrar</Subtitle>
            <Button as={Link} to='/'>
              Agregar Gasto
            </Button>
          </SubtitleContainer>
        )}
      </List>

      <TotalExpenseBar />
    </>
  )
}
