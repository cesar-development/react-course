import { useEffect, useState } from 'react'
import Button from '../elements/Button'

export default function FunctionalCounter ({
  quantityToIncrease,
  quantityToDecrease
}) {
  const [counter, setCounter] = useState(0)

  // DidMount y DidUpdate
  /* useEffect(() => {
    console.log('Componente montado')
  }) */

  useEffect(() => {
    console.log('Componente renderizado por primera vez')

    return () => {
      console.log('Componente desmontado')
    }
  }, [])

  const increase = (quantity) => {
    setCounter(counter + quantity)
  }

  const decrease = (quantity) => {
    setCounter((prevCounter) => prevCounter - quantity)
  }

  return (
    <div>
      <h1>Contador: {counter}</h1>

      <Button
        $isDark
        $marginRight
        onClick={() => increase(quantityToIncrease)}
      >
        Incrementar
      </Button>

      <Button
        $isDark
        onClick={() => decrease(quantityToDecrease)}
      >
        Disminuir
      </Button>
    </div>
  )
}
