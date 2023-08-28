/**
 * @typedef {Object} ButtonStyles
 * @property {React.CSSProperties} buttonStyles - Styles for the button.
 */

/** @type {ButtonStyles} */
const styles = {
  buttonStyles: {
    backgroundColor: '#0a283e',
    color: 'white',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
}

export default function Button(props) {
  return (
    <button style={styles.buttonStyles} {...props}>
      {props.children}
    </button>
  )
}
