/**
 * @typedef {Object} ProductStyles
 * @property {React.CSSProperties} product - Styles for product component.
 * @property {React.CSSProperties} img - Styles for img component.
 */

import Button from './Button'

/** @type {ProductStyles} */
const styles = {
  product: {
    border: 'solid 1px #eee',
    boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
    width: '30%',
    padding: '10px 15px',
    borderRadius: '5px',
  },
  img: {
    width: '100%',
  }
}

export default function Product({ product, addProductToCart }) {
  return (
    <div style={styles.product}>
      <img
        style={styles.img}
        src={product.img}
        alt={product.name}
      />

      <h3>{product.name}</h3>
      <p>{product.price}</p>

      <Button onClick={() => addProductToCart(product)}>
        Agregar al carrito
      </Button>
    </div>
  )
}
