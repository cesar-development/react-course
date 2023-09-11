import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(180deg);
    border-top-color: rgb(139, 46, 46);
    border-right-color: transparent;
    border-bottom-color: rgb(243, 92, 33);
    border-left-color: transparent;
  }

  100% {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  width: 50px;
  height: 50px;
  display: inline-block;
  border: 5px solid #ff1100;
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: ${loading} 1s infinite;
`

export default Loader
