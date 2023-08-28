/**
 * @typedef {Object} NavbarStyles
 * @property {React.CSSProperties} navbar - Styles for navbar component.
 */

import Cart from './Cart'
import Logo from './Logo'

/** @type {NavbarStyles} */
const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '0 50px',
    boxShadow: '0 2px 3px rgb(0, 0, 0, 0.1)'
  }
}

export default function Navbar({ cart, isVisible, handleShowCart }) {
  return (
    <nav style={styles.navbar}>
      <Logo />

      <Cart
        cart={cart}
        isVisible={isVisible}
        handleShowCart={handleShowCart}
      />
    </nav>
  )
}
