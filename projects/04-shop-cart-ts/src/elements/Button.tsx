import styled from 'styled-components'

interface Props {
  $bgColor?: string
  $hoverBgColor?: string
}

export const Button = styled.button<Props>`
  display: inline-block;
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  background: ${props => props.$bgColor ? props.$bgColor : '#1c85e8'};
  color: #fff;
  font-size: 12px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  transition: .3s ease all;
  cursor: pointer;

  &:hover {
    background: ${props => props.$hoverBgColor ? props.$hoverBgColor : '#1c6ab9'};
  }
`
