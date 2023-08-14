import styled from 'styled-components'

export const Header = styled.div`
  width: 100%;
  padding: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 60rem) {
    justify-content: start;
  }
`

export const Title = styled.h1`
  font-weight: normal;
  text-transform: uppercase;
  font-size: 2.5rem;

  @media (max-width: 60rem) {
    font-size: 2rem;
  }
`

export const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 60rem) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    & > div {
      display: flex;
      margin-bottom: 1.25rem;
      justify-content: end;
    }
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
