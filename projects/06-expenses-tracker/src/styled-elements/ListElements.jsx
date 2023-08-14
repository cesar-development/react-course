import styled from 'styled-components'
import theme from '../theme/theme'

export const List = styled.ul`
  list-style: none;
  padding: 0 2.5rem;
  height: 100%;
  overflow-y: auto;

  li {
    grid-template-columns: 1fr 1fr 1fr auto;
  }

  @media (max-width: 50rem) {
    li {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`

export const ListElement = styled.li`
  padding: 1.25rem 0;
  border-bottom: 2px solid #F2F2F2;
  display: grid;
  gap: 0.31rem;
  justify-content: space-between;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
  }

  &:hover button,
  &:hover a {
    opacity: 1;
  }
`

export const CategoryList = styled.ul`
  list-style: none;
  padding: 0 2.5rem;
  height: 100%;
  overflow-y: auto;
`

export const CategoryListElement = styled.li`
  padding: 1.25rem 0;
  border-bottom: 2px solid #F2F2F2;
  display: flex;
  justify-content: space-between;
`

export const Category = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;

  svg {
    width: 3.12rem;
    height: auto;
    margin-right: 1.25rem;
    border-radius: 0.62rem;
  }

  @media (max-width: 50rem) {
    font-size: 1.12rem;
  }
`

export const Description = styled.div`
  justify-content: center;
  font-size: 1.25rem;
  text-transform: capitalize;
  
  @media (max-width: 50rem) {
    justify-content: end;
  }
`

export const Value = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  justify-content: end;

  @media (max-width: 50rem) {
    justify-content: start;
  }
`

export const Date = styled.div`
  border-radius: 0.31rem;
  background: ${theme.blueLight};
  text-align: center;
  color: #fff;
  padding: 0.62rem 3.12rem;
  display: inline-block;
  margin: 1.25rem 0;

  @media (max-width: 50rem) {
    width: 100%;
  }
`

export const ContainerButtons = styled.div`
  @media (max-width: 50rem) {
    justify-content: end;
  }
`

export const ActionButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 0.625rem;
  outline: none;
  border: none;
  border-radius: 0.31rem;
  background: ${theme.greyLight};
  display: inline-block;
  line-height: 2.5rem;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s ease all;
  cursor: pointer;
  opacity: 0;

  &:hover {
    background: ${theme.greySemiLight};
  }

  svg {
    width: 1.125rem;
  }

  @media (max-width: 50rem) {
    opacity: 1;
  }
`

export const SubtitleContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Subtitle = styled.h3`
  color: ${theme.greySemiLight};
  font-weight: 400;
  font-size: 40px;
  padding: 2.5rem 0;
`

export const CentralButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem;
`

export const LoadMoreButton = styled.button`
  background: ${theme.greyLight};
  border: none;
  border-radius: 7px;
  color: #000;
  font-family: 'Work Sans Semi Bold', sans-serif;
  padding: 1rem 1.87rem;
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  transition: .3s ease all;

  &:hover {
    background: ${theme.greySemiLight};
  }
`
