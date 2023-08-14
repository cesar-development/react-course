import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 90%;
  max-width: 70rem;
  height: 90vh;
  max-height: 50rem;
  overflow-y: auto;
  margin: auto;
  border-radius: 0.625rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.05);
  z-index: 100;

  @media (max-width: 60rem) {
    height: 95vh;
    max-height: none;
  }
`

export default Container
