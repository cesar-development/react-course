import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as Arrow } from '../assets/icons/arrow.svg'

export default function ReturnButton({ route = '/' }) {
  const navigate = useNavigate()

  return (
    <Btn onClick={() => navigate(route, { replace: true })}>
      <Icon />
    </Btn>
  )
}

const Btn = styled.button`
  display: block;
  width: 3.12rem;
  height: 3.12rem;
  margin-right: 1.25rem;
  border: none;
  border-radius: 0.31rem;
  line-height: 3.12rem;
  text-align: center;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 60rem) {
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
  }
`

const Icon = styled(Arrow)`
  width: 50%;
  height: auto;
  fill: #fff;
`
