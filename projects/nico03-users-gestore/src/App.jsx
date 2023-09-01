import { useState } from 'react'

import Container from './components/Container'
import Card from './components/Card'
import UserForm from './components/UserForm'

export default function App() {
  const [users, setUsers] = useState([])

  const submit = (user) => {
    setUsers([
      ...users,
      user,
    ])
  }

  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} />
          </div>
        </Card>

        <Card>
          <ul>
            {users.map((user) => (
              <li key={user.email}>
                {user.name} {user.lastName}: <b>{user.email}</b>
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  )
}
