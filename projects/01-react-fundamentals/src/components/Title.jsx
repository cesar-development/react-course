import React from 'react'

export default function Title ({ user, color = 'grey' }) {
  return (
    <h1 className='title' style={{ color }}>
      Hola {user}
    </h1>
  )
}
