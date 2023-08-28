/**
 * @typedef {Object} LayoutStyles
 * @property {React.CSSProperties} layout - Styles for layout component.
 * @property {React.CSSProperties} container - Styles for container component.
 */

/** @type {LayoutStyles} */
const styles = {
  layout: {
    backgroundColor: '#fff',
    color: '#0A283E',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    width: '1200px',
  }
}

export default function Layout({ children }) {
  return (
    <div style={styles.layout}>
      <div style={styles.container}>
        {children}
      </div>
    </div>
  )
}
