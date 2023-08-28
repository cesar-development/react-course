/**
 * @typedef {Object} LogoStyles
 * @property {React.CSSProperties} logo - Styles for logo component.
 */

/** @type {LogoStyles} */
const styles = {
  logo: {
    fontWeight: '700',
    fontSize: '2rem',
  }
}

export default function Logo() {
  return (
    <div style={styles.logo}>
      Shop
    </div>
  )
}
