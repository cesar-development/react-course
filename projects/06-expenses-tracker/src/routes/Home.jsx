import { Helmet } from 'react-helmet'

import ExpenseForm from '../components/ExpenseForm'
import LogoutButton from '../components/LogoutButton'
import TotalExpenseBar from '../components/TotalExpenseBar'
import { Header, Title, ContainerButtons, ContainerHeader } from '../styled-elements/Header'
import Button from '../styled-elements/Button'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>

      <Header>
        <ContainerHeader>
          <Title>Agregar Gasto</Title>

          <ContainerButtons>
            <Button to='/categories'>Categorías</Button>
            <Button to='/list'>Lista de Gastos</Button>
            <LogoutButton />
          </ContainerButtons>
        </ContainerHeader>
      </Header>

      <ExpenseForm />
      <TotalExpenseBar />
    </>
  )
}
