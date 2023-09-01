'use client'

import styles from './Input.module.css'

export default function Input({ label, ...rest }) {
  return (
    <div className={styles.field}>
      <label>{label}</label>
      <input {...rest} />
    </div>
  )
}
