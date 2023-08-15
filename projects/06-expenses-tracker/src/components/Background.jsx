import styled from 'styled-components'
import { ReactComponent as Points } from '../assets/icons/points.svg'

export default function Background() {
  return (
    <>
      <AbovePoints />

      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
				<path 
					fillOpacity="1"
					d="M0,64L80,96C160,128,320,192,480,202.7C640,213,800,171,960,160C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
				></path>
			</Svg>

      <BelowPoints />
    </>
  )
}

const Svg = styled.svg`
  position: fixed;
  bottom: 0;
  height: 50vh;
  width: 100%;
  z-index: 0;

  path {
    fill: rgba(135, 182, 194, 0.15);
  }
`

const AbovePoints = styled(Points)`
  position: fixed;
  z-index: 1;
  top: 2.5rem;
  left: 2.5rem;
`

const BelowPoints = styled(Points)`
  position: fixed;
  z-index: 1;
  bottom: 2.5rem;
  right: 2.5rem;
`
