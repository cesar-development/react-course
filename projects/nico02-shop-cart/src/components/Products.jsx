/**
 * @typedef {Object} ProductsStyles
 * @property {React.CSSProperties} products - Styles for productos component.
 */

import Product from './Product'

/** @type {ProductsStyles} */
const styles = {
  products: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
}

export default function Products({ products, addProductToCart }) {
  return (
    <div style={styles.products}>
      {products.map((product) => (
        <Product
          key={product.name}
          product={product}
          addProductToCart={addProductToCart}
        />
      ))}
    </div>
  )
}
