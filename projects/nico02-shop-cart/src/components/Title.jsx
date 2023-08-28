/**
 * @typedef {Object} TitleStyles
 * @property {React.CSSProperties} title - Styles for title component.
 */

/** @type {TitleStyles} */
const styles = {
  title: {
    marginBottom: '30px',
  }
}

export default function Title() {
  return (
    <h1 style={styles.title}>Tienda</h1>
  )
}
