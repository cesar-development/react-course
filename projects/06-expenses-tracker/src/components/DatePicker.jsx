import 'react-day-picker/dist/style.css'

import { useEffect, useRef, useState } from 'react'
import { format, isValid, parse } from 'date-fns'
import FocusTrap from 'focus-trap-react'
import { DayPicker } from 'react-day-picker'
import { usePopper } from 'react-popper'
import styled from 'styled-components'

import useUI from '../hooks/useUI'
import theme from '../theme/theme'

export default function DatePicker() {
  const { date, setDate } = useUI()

  const [inputValue, setInputValue] = useState(() => {
    return date ? format(date, 'y-MM-dd') : ''
  })
  const [isPopperOpen, setIsPopperOpen] = useState(false)
  const [popperElement, setPopperElement] = useState(null)

  const popperRef = useRef(null)
  const inputRef = useRef(null)
  const isInitialDate = useRef(true)

  const popper = usePopper(inputRef.current, popperElement, {
    placement: 'bottom-start',
  })

  useEffect(() => {
    setInputValue(date ? format(date, 'y-MM-dd') : '')
  }, [date])

  const closePopper = () => {
    setIsPopperOpen(false)
    inputRef.current.focus()
  }

  const handleInputChange = (event) => {
    isInitialDate.current = false
    setInputValue(event.target.value)
    const date = parse(event.target.value, 'y-MM-dd', new Date())

    if (isValid(date)) {
      setDate(date)
    } else {
      setDate(null)
    }
  }

  const handleInputClick = () => {
    setIsPopperOpen(true)
  }

  const handleDaySelect = (date) => {
    isInitialDate.current = false
    setDate(date)

    if (date) {
      setInputValue(format(date, 'y-MM-dd'))
      closePopper()
    } else {
      setInputValue('')
    }
  }

  return (
    <InputContainer>
      <div ref={popperRef}>
        <input
          size={12}
          type='text'
          placeholder={format(new Date(), 'y-MM-dd')}
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleInputClick}
          ref={inputRef}
        />
      </div>

      {isPopperOpen && (
        <FocusTrap
          active
          focusTrapOptions={{
            initialFocus: false,
            allowOutsideClick: true,
            clickOutsideDeactivates: true,
            onDeactivate: closePopper,
            fallbackFocus: inputRef.current,
          }}
        >
          <div
            tabIndex={-1}
            style={{
              ...popper.styles.popper,
              backgroundColor: '#fff',
              borderRadius: '0.625rem',
              boxShadow: '-10px 10px 30px rgba(129, 129, 129, 0.25)'
            }}
            ref={setPopperElement}
            className='dialog-sheet'
            role='dialog'
            aria-label='DayPicker calendar'
            {...popper.attributes.popper}
          >
            <DayPicker
              initialMonth={date || undefined}
              selected={date || null}
              onDayClick={handleDaySelect}
            />
          </div>
        </FocusTrap>
      )}
    </InputContainer>
  )
}

const InputContainer = styled.div`
  input {
    box-sizing: border-box;
    width: 100%;
    height: 5rem;
    padding: 0 1.25rem;
    border: none;
    border-radius: 0.625rem;
    font-family: 'Work Sans', sans-serif;       
    background: ${theme.greyLight};
    font-size: 1.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media (max-width: 60rem) {
    & > * {
      width: 100%;
    }
  }
`
