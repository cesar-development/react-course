import { useRef, useState } from 'react'
import styled from 'styled-components'

import theme from '../theme/theme'
import CategoryIcons from '../components/CategoryIcons'
import { ReactComponent as Down } from '../assets/icons/down.svg'
import { categories as expensesCategories } from '../constants/categories'
import useUI from '../hooks/useUI'

export default function SelectCategories() {
  const [showSelect, setShowSelect] = useState(false)
  const categories = useRef(expensesCategories)

  const { category, setCategory } = useUI()

  const handleClick = (event) => {
    setCategory(event.target.dataset.value)
  }

  return (
    <SelectContainer onClick={() => setShowSelect(!showSelect)}>
      <OptionSelected>{category} <Down/></OptionSelected>

      {showSelect && (
        <Options>
          {categories.current.map((cat) => (
            <Option 
              key={cat.id}
              data-value={cat.id}
              onClick={handleClick}
            >
              <CategoryIcons id={cat.id} />
              {cat.text}
            </Option>
          ))}
        </Options>
      )}
    </SelectContainer>
  )
}

const SelectContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 40%;
  height: 5rem; 
  padding: 0px 1.25rem;
  border-radius: 0.625rem;
  background: ${theme.greyLight};
  font-size: 1.5rem; 
  text-align: center;
  display: flex;
  align-items: center;
  transition: .5s ease all;
  
  &:hover {
    background: ${theme.greySemiLight};
  }
`

const OptionSelected = styled.div`
  width: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  svg {
    width: 1.25rem;
    height: auto;
    margin-left: 1.25rem;
  }
`

const Options = styled.div`
  background: ${theme.greyLight};
  position: absolute;
  top: 5.62rem;
  left: 0;
  width: 100%;
  border-radius: 0.625rem;
  max-height: 18.75rem;
  overflow-y: auto;
`

const Option = styled.div`
  padding: 1.25rem;
  display: flex;
  
  svg {
    width: 28px;
    height: auto;
    margin-right: 1.25rem;
  }

  &:hover {
    background: ${theme.grisClaro2};
  }
`
