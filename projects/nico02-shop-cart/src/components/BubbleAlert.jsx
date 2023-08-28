/**
 * @typedef {Object} BubbleAlertStyles
 * @property {React.CSSProperties} bubbleAlert - Styles for the bubble alert.
 */

/** @type {BubbleAlertStyles} */
const styles = {
  bubbleAlert: {
    width: '20px',
    borderRadius: '15px',
    backgroundColor: '#e9725a',
    color: 'white',
    padding: '2px 10px',
    fontSize: '0.9rem',
  }
}

export default function BubbleAlert({ value }) {
  const getNumber = (number) => {
    if (!number) return ' '
    return number > 9 ? '9+' : number
  }

  return (
    <span style={styles.bubbleAlert}>
      {getNumber(value)}
    </span>
  )
}
