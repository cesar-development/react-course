import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import Button from '../styled-elements/Button'
import { auth } from '../firebase/config'
import { ReactComponent as LogoutIcon } from '../assets/icons/logout.svg'

export default function LogoutButton() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Button
      $isBigIcon
      as='button'
      onClick={handleLogout}
    >
      <LogoutIcon />
    </Button>
  )
}
