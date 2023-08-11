import { Component } from 'react'

class ClassBaseCounter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  componentDidMount () {
    console.log('El componente se renderizo en el DOM')
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('El componente se actualizo!!!')
    console.log(`Props anteriores: ${prevProps}`)
    console.log(`Estado anterior: ${prevState}`)
  }

  componentWillUnmount () {
    console.log('El componente se va a desmontar del DOM')
  }

  increment = (quantity) => {
    this.setState((prevState) => ({
      counter: prevState.counter + quantity
    }))
  }

  decrement = (quantity) => {
    this.setState((prevState) => ({
      counter: prevState.counter - quantity
    }))
  }

  render () {
    return (
      <div>
        <h1>Contador: {this.state.counter}</h1>

        <button onClick={() => this.increment(this.props.quantityToIncrease)}>
          Incrementar
        </button>

        <button onClick={() => this.decrement(this.props.quantityToDecrease)}>
          Disminuir
        </button>
      </div>
    )
  }
}

export default ClassBaseCounter
