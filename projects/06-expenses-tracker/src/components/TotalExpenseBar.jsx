import styled from 'styled-components'

import theme from '../theme/theme'
import useTotalExpenses from '../hooks/useTotalExpenses'
import { currencyFormatter } from '../helpers/currency-formatter'

export default function TotalExpenseBar() {
  const { total } = useTotalExpenses()

  return (
    <TotalBar>
      <p>Total gastado en el mes:</p>
      <p>{currencyFormatter(total)}</p>
    </TotalBar>
  )
}

const TotalBar = styled.div`
  padding: 0.62rem 2.25rem;
  background: ${theme.green};
  font-size: 1.25rem;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 31.25rem) {
    flex-direction: column;
    font-size: 14px;
  }
`
