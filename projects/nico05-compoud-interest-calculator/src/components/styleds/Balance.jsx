import styled from 'styled-components'

const Balance = styled.span.attrs((props) => ({
  color: props.$color || '#000',
}))`
  display: inline-block;
  margin-top: 12px;
  font-size: 36px;
  /* color: #000; */
`

export default Balance
