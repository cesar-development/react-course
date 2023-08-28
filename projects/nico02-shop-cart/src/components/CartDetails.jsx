/**
 * @typedef {Object} CartDetailsStyles
 * @property {React.CSSProperties} cartDetails - Styles for the cart details.
 * @property {React.CSSProperties} ul - Styles for the ul.
 * @property {React.CSSProperties} product - Styles for the product.
 */

/** @type {CartDetailsStyles} */
const styles = {
  cartDetails: {
    backgroundColor: 'white',
    position: 'absolute',
    marginTop: 30,
    boxShadow: '1px 5px 5px rgb(0, 0, 0, 0.3)',
    borderRadius: '5px',
    width: '300px',
    right: 50,
  },
  product: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: '1px solid #aaa'
  },
  ul: {
    margin: 0,
    padding: 0,
  },
}

export default function CartDetails({ cart }) {
  return (
    <div style={styles.cartDetails}>
      <ul style={styles.ul}>
        {cart.map((product) => (
          <li key={product.name} style={styles.product}>
            <img
              src={product.img}
              alt={product.name}
              width='50'
              height='32'
            />

            {product.name} <span>{product.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
