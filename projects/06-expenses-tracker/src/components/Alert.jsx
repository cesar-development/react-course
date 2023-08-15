import { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

import theme from '../theme/theme'
import useUI from '../hooks/useUI'

export default function Alert({ type, message }) {
  const { showAlert, setShowAlert } = useUI()

  useEffect(() => {
    let time

    if (showAlert) {
      time = setTimeout(() => {
        setShowAlert(false)
      }, 4000)
    }

    return () => {
      clearTimeout(time)
    }
  }, [showAlert, setShowAlert])

  return (
    <div>
      {showAlert && (
        <AlertContainer $type={type}>
          <p>{message}</p>
        </AlertContainer>
      )}
    </div>
  )
}

const slideDown = keyframes`
  0% {
    transform: translateY(-1.25rem);
    opacity: 0;
  }

  10% {
    transform: translateY(1.25rem);
    opacity: 1;
  }

  90% {
    transform: translateY(1.25rem);
    opacity: 1;
  }

  100% {
    transform: translateY(1.25rem);
    opacity: 0;
  }
`

const AlertContainer = styled.div`
  position: fixed;
  left: 0;
  top: 1.25rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideDown} 4s ease forwards;
  z-index: 1000;
 
  p {
    background: ${(props) => {
      if (props.$type === 'error') {
        return theme.red;
      } else if (props.$type === 'success') {
        return theme.green;
      } else {
        return '#000';
      }
    }};

    padding: 1.25rem 2.5rem;
    border-radius: 0.31rem;
    color: #fff;
    text-align: center;
    box-shadow: 0px 0px 15px rgba(0,0,0,.1);
  }
`
