import { useState } from 'react'

import User from './components/User'
import Blog from './components/Blog'
import Form from './components/Form'
import UseReducerCounter from './components/UseReducerCounter'
import Button from './elements/Button'

export default function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className='container'>
      {isLoggedIn ? (
        <div>
          <User
            userName='chicho69-cesar'
            country='México'
            friends={['Manuel', 'Hector', 'Luis']}
          />

          <Blog />

          <UseReducerCounter
            quantityToIncrease={5}
            quantityToDecrease={3}
          />

          <Button
            $isLarge
            $marginTop
            onClick={() => setIsLoggedIn(false)}
          >
            Cerrar sesión
          </Button>
        </div>
      ) : (
        <div>
          <Form
            handleLogin={setIsLoggedIn}
          />
        </div>
      )}
    </div>
  )
}
