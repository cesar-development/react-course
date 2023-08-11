import styled from 'styled-components'

export const Menu = styled.nav`
  grid-column: span 2;
  width: 100%;
  border-radius: 3px;
  text-align: center;
  background: #092c4c;

  a {
    display: inline-block;
    padding: 15px 20px;
    color: #fff;
  }

  a:hover {
    background: #1d85e8;
    text-decoration: none;
  }
`