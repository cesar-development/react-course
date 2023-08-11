import Button from '../elements/Button'
import { useCounter } from '../hooks/useCounter'

export default function UseReducerCounter ({
  quantityToIncrease,
  quantityToDecrease
}) {
  const { counter, increment, decrement, reset } = useCounter({ initialCounter: 0 })

  return (
    <div>
      <h1>Counter: {counter}</h1>

      <Button
        $isDark
        $marginRight
        onClick={() => increment(quantityToIncrease)}
      >
        Incrementar
      </Button>

      <Button
        $isDark
        $marginRight
        onClick={() => decrement(quantityToDecrease)}
      >
        Disminuir
      </Button>

      <Button
        onClick={() => reset()}
      >
        Restablecer
      </Button>
    </div>
  )
}
