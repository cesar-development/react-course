import { useState } from 'react'
import { Formik, Form } from 'formik'

import { Balance, Button, Container, Section } from './components/styleds'
import Input from './components/customs/Input'
import { compoundInterest } from './lib/compound-interest'
import { formatter } from './lib/currency-formatter'
import { validationSchema } from './validations/balance.validations'

function App() {
  const [balance, setBalance] = useState('')

  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const value = compoundInterest(
      +deposit,
      +contribution,
      +years,
      +rate
    )

    setBalance(formatter.format(value))
  }

  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: '',
            contribution: '',
            years: '',
            rate: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <Input name='deposit' label='Deposito inicial' />
            <Input name='contribution' label='Contribución anual' />
            <Input name='years' label='Años' />
            <Input name='rate' label='Interés estimado' />

            <Button type='submit'>
              Calcular
            </Button>
          </Form>
        </Formik>

        {balance !== '' && (
          <Balance>
            Balance final: {balance}
          </Balance>
        )}
      </Section>
    </Container>
  )
}

export default App
