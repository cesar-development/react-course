import BubbleAlert from './BubbleAlert'
import CartDetails from './CartDetails'

/**
 * @typedef {Object} CartStyles
 * @property {React.CSSProperties} cart - Styles for cart component.
 * @property {React.CSSProperties} bubble - Styles for bubble component.
 */

/** @type {CartStyles} */
const styles = {
  cart: {
    backgroundColor: '#35942c',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20,
  }
}

export default function Cart({ cart, isVisible, handleShowCart }) {
  const quantity = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <div>
      <span style={styles.bubble}>
        {quantity !== 0 && (
          <BubbleAlert value={quantity} />
        )}
      </span>

      <button onClick={handleShowCart} style={styles.cart}>
        Carro
      </button>

      {isVisible && (
        <CartDetails cart={cart} />
      )}
    </div>
  )
}
