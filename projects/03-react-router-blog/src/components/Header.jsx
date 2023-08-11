import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function Header() {
  return (
    <StyledHeader>
      <StyledTitle>Mi blog personal!</StyledTitle>

      <StyledMenu>
        <NavLink to='/'>Inicio</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/about'>Acerca de</NavLink>
      </StyledMenu>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;
`

const StyledTitle = styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  text-transform: uppercase;
`

const StyledMenu = styled.nav`
  a {
    text-decoration: none;
    color: #165168;
    margin: 0 10px;
  }

  a:hover {
    color: #191668;
  }

  a.active {
		border-bottom: 2px solid #165168;
    padding-bottom: 3px;
  }
`
