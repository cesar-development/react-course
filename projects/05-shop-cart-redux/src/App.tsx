import { NavLink, Routes, Route } from 'react-router-dom'

import { Home, Error404, Blog, Store } from './routes'
import { Container, Menu } from './elements'
import Cart from './components/Cart'

export default function App() {
  return (
    <Container>
      <Menu>
        <NavLink to='/'>Inicio</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/store'>Tienda</NavLink>
      </Menu>

      <main>
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/store' element={<Store />} />
        </Routes>
      </main>

      <aside>
        <Cart />
      </aside>
    </Container>
  )
}
