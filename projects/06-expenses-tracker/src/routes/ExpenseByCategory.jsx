import { Helmet } from 'react-helmet'

import CategoryIcons from '../components/CategoryIcons'
import ReturnButton from '../components/ReturnButton'
import TotalExpenseBar from '../components/TotalExpenseBar'

import { Header, Title } from '../styled-elements/Header'
import { CategoryList, CategoryListElement, Category, Value } from '../styled-elements/ListElements'

import useExpensesByCategory from '../hooks/useExpensesByCategory.js'
import { currencyFormatter } from '../helpers/currency-formatter.js'

export default function ExpenseByCategory() {
  const { expensesByCategory } = useExpensesByCategory()

  return (
    <>
      <Helmet>
        <title>Gastos por Categoría</title>
      </Helmet>

      <Header>
        <ReturnButton />
        <Title>Gastos por Categoría</Title>
      </Header>

      <CategoryList>
        {expensesByCategory.map((category) => (
          <CategoryListElement key={category.category}>
            <Category>
              <CategoryIcons id={category.category} />
              {category.category}
            </Category>

            <Value>{currencyFormatter(category.quantity)}</Value>
          </CategoryListElement>
        ))}
      </CategoryList>

      <TotalExpenseBar />
    </>
  )
}
