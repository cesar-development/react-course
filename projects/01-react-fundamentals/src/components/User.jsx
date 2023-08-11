import styled from 'styled-components'
import Title from './Title'

export default function User ({ userName, country, friends }) {
  return (
    <div>
      <Title user={userName} />
      <Title user='Usuario admin' color='slateblue' />

      <StyledParagraph>Tu lista de amigos es: </StyledParagraph>
      <ul>
        {friends.map((friend) => (
          <li key={friend}>{friend}</li>
        ))}
      </ul>

      <StyledParagraph>
        Que tengas un gran dia!
      </StyledParagraph>
    </div>
  )
}

const StyledParagraph = styled.p`
  margin: 20px 0;
`
