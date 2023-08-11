import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import { About, Blog, Error404, Home, Post } from './routes'

export default function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Header />

        <StyledMain>
          <Routes>
            <Route path='*' element={<Error404 />} />
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/post/:id' element={<Post />} />
          </Routes>
        </StyledMain>
      </MainContainer>
    </BrowserRouter>
  )
}

const MainContainer = styled.div`
  width: 90%;
  max-width: 700px;
  padding: 40px;
`

const StyledMain = styled.main`
  padding: 40px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(129, 129, 129, 0.1);
`
