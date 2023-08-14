import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled(Link)`
  width: ${(props) => props.$withIcon ? '15.62rem' : 'auto'};
  height: 3.75rem;
  margin-left: 1.25rem;
  padding: 1.25rem 1.87rem;
  border: none;
  border-radius: 0.625rem;
  background: ${(props) => props.$primary ? '#5B69E2' : '#000'};
  color: #fff;
  font-family: 'Work Sans Semi Bold', sans-serif;
  font-size: 1.25rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
 
  svg {
    height: ${(props) => props.$isBigIcon ? '100%' : '0.75rem;'};
    fill: white;
  }
`

export default Button
