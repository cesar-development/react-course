import styled from 'styled-components'
import theme from '../theme/theme'

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.87rem;

  @media (max-width: 60rem) {
    flex-direction: column;

    & > * {
      width: 100%;
      margin-bottom: 0.62rem;
    }
  }
`

export const Form = styled.form`
  padding: 0 2.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  input {
    width: 100%;
    text-align: center;
    padding: 2.5rem 0;
    font-family: 'Work Sans', sans-serif;

    &::placeholder {
      color: rgba(0,0,0,.2);
    }
  }

  @media (max-width: 60rem) {
    justify-content: start;
  }
`

export const Input = styled.input`
  font-size: 2.5rem;
  text-transform: uppercase;
  border: none;
  border-bottom: 2px solid ${theme.greyLight};
  outline: none;

  @media (max-width: 60rem) {
    font-size: 2.2rem;
  }
`

export const BigInput = styled(Input)`
  font-size: 4.37rem;
  font-weight: bold;
`

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
`
